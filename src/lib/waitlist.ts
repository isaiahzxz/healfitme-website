import { promises as fs } from "node:fs";
import path from "node:path";
import { HEARD_FROM } from "./waitlist-goals";

export interface WaitlistEntry {
  email: string;
  name: string;
  heardFrom: string;
  /** Which form on the site the signup came from (hero, footer...). */
  source: string | null;
}

export type SaveResult = "created" | "duplicate";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Validates untrusted input. Returns a clean entry or an error message. */
export function parseEntry(
  body: unknown,
): { ok: true; entry: WaitlistEntry } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request." };
  }
  const b = body as Record<string, unknown>;

  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const name = typeof b.name === "string" ? b.name.trim().replace(/\s+/g, " ") : "";
  if (name.length < 1) return { ok: false, error: "Please enter your name." };
  if (name.length > 100) return { ok: false, error: "That name is too long." };

  const choice = typeof b.heardFrom === "string" ? b.heardFrom : "";
  if (!(HEARD_FROM as readonly string[]).includes(choice)) {
    return { ok: false, error: "Please tell us where you heard about HealFitMe." };
  }
  let heardFrom: string = choice;
  if (choice === "Other") {
    const other = typeof b.heardFromOther === "string" ? b.heardFromOther.trim() : "";
    if (!other) return { ok: false, error: "Please tell us where you heard about HealFitMe." };
    heardFrom = `Other: ${other.slice(0, 120)}`;
  }

  const rawSource = typeof b.source === "string" ? b.source.trim() : "";
  const source = rawSource ? rawSource.slice(0, 40) : null;

  return { ok: true, entry: { email, name, heardFrom, source } };
}

/**
 * Stores a signup. Uses Supabase when SUPABASE_URL and
 * SUPABASE_SERVICE_ROLE_KEY are set (see supabase/waitlist.sql);
 * otherwise falls back to a local JSONL file for development.
 */
export async function saveEntry(entry: WaitlistEntry): Promise<SaveResult> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) return saveToSupabase(entry, url, key);
  return saveToFile(entry);
}

async function saveToSupabase(
  entry: WaitlistEntry,
  url: string,
  key: string,
): Promise<SaveResult> {
  const endpoint = `${new URL(url.trim()).origin}/rest/v1/waitlist`;
  const headers = {
    apikey: key,
    // Legacy service_role keys are JWTs and go in Authorization too.
    // New sb_secret_ keys are not JWTs and must only be sent as apikey.
    ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}),
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };

  let res = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: entry.email,
      first_name: entry.name,
      heard_from: entry.heardFrom,
      source: entry.source,
    }),
  });

  // If the heard_from column has not been added yet (see supabase/waitlist.sql),
  // keep the answer by folding it into `source` instead of losing the signup.
  if (res.status === 400) {
    const text = await res.text().catch(() => "");
    if (text.includes("heard_from")) {
      res = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          email: entry.email,
          first_name: entry.name,
          source: `${entry.source ?? "site"} | heard: ${entry.heardFrom}`.slice(0, 200),
        }),
      });
    } else {
      throw new Error(`Supabase insert failed: 400 ${text.slice(0, 300)}`);
    }
  }

  if (res.status === 409) return "duplicate"; // unique(email) violation
  if (!res.ok) {
    const detail = (await res.text().catch(() => "")).slice(0, 300);
    throw new Error(`Supabase insert failed: ${res.status} ${detail}`);
  }
  return "created";
}

const FILE = path.join(process.cwd(), ".data", "waitlist.jsonl");

async function saveToFile(entry: WaitlistEntry): Promise<SaveResult> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });

  let existing = "";
  try {
    existing = await fs.readFile(FILE, "utf8");
  } catch {
    // first signup: file does not exist yet
  }
  const isDuplicate = existing
    .split("\n")
    .filter(Boolean)
    .some((line) => {
      try {
        return (JSON.parse(line) as { email?: string }).email === entry.email;
      } catch {
        return false;
      }
    });
  if (isDuplicate) return "duplicate";

  const line = JSON.stringify({ ...entry, createdAt: new Date().toISOString() });
  await fs.appendFile(FILE, line + "\n", "utf8");
  return "created";
}
