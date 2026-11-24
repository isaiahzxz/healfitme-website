import { NextResponse } from "next/server";
import { parseEntry, saveEntry } from "@/lib/waitlist";

// Simple in-memory limiter: 5 requests per IP per 10 minutes.
// Per-instance only; use a shared store (Upstash, Supabase) behind multiple instances.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success to bots.
  if (
    typeof body === "object" &&
    body !== null &&
    typeof (body as Record<string, unknown>).company === "string" &&
    (body as Record<string, unknown>).company !== ""
  ) {
    return NextResponse.json({ status: "created" });
  }

  const parsed = parseEntry(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const status = await saveEntry(parsed.entry);
    return NextResponse.json({ status });
  } catch (err) {
    console.error("waitlist save failed", err);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again." },
      { status: 500 },
    );
  }
}
