"use client";

import { useState, type FormEvent } from "react";
import { HEARD_FROM } from "@/lib/waitlist-goals";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "done"; duplicate: boolean; name: string }
  | { kind: "error"; message: string };

/** Early-testing signup: name, email and where they heard about HealFitMe. */
export function WaitlistForm({ source }: { source: string }) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [heard, setHeard] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState({ kind: "loading" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          heardFrom: data.get("heardFrom"),
          heardFromOther: data.get("heardFromOther"),
          company: data.get("company"), // honeypot
          source,
        }),
      });
      const json = (await res.json()) as { status?: string; error?: string };
      if (!res.ok) {
        setState({
          kind: "error",
          message: json.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      setState({
        kind: "done",
        duplicate: json.status === "duplicate",
        name: String(data.get("name") ?? "").trim().split(" ")[0],
      });
      setHeard("");
      form.reset();
    } catch {
      setState({
        kind: "error",
        message: "Could not reach the server. Check your connection and try again.",
      });
    }
  }

  if (state.kind === "done") {
    return (
      <div
        role="status"
        className="unlock-pop rounded-[24px] bg-white px-8 py-8 text-left text-ink shadow-xl"
      >
        <p className="text-[28px] font-medium tracking-tight">
          {state.duplicate ? "You're already on the list" : `You're on the list${state.name ? `, ${state.name}` : ""}`}
        </p>
        <p className="mt-2 text-ink-soft">
          {state.duplicate
            ? "We already have your email. We'll write to you when early testing opens."
            : "Thanks for signing up. We'll email you when early testing opens on iPhone."}
        </p>
      </div>
    );
  }

  const busy = state.kind === "loading";
  const field =
    "w-full rounded-[16px] border border-white/25 bg-white px-5 py-4 text-[16px] text-ink placeholder:text-ink-soft/70 focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30";

  return (
    <form onSubmit={onSubmit} className="relative space-y-3 text-left" noValidate>
      <label className="block">
        <span className="sr-only">Your name</span>
        <input
          name="name"
          required
          autoComplete="name"
          maxLength={100}
          placeholder="Your name"
          className={field}
        />
      </label>
      <label className="block">
        <span className="sr-only">Email address</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder="Email address"
          className={field}
        />
      </label>
      <label className="relative block">
        <span className="sr-only">Where did you hear about HealFitMe?</span>
        <select
          name="heardFrom"
          required
          value={heard}
          onChange={(e) => setHeard(e.target.value)}
          className={`${field} appearance-none pr-12 ${heard ? "" : "text-ink-soft/70"}`}
        >
          <option value="" disabled>
            Where did you hear about HealFitMe?
          </option>
          {HEARD_FROM.map((h) => (
            <option key={h} value={h} className="text-ink">
              {h}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-ink-soft"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 5l5 5 5-5" />
        </svg>
      </label>
      {heard === "Other" && (
        <label className="block">
          <span className="sr-only">Tell us where</span>
          <input
            name="heardFromOther"
            required
            maxLength={120}
            placeholder="Tell us where"
            className={field}
          />
        </label>
      )}

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-[16px] bg-black px-8 py-4 text-[16px] font-medium text-white transition hover:bg-blue-deep disabled:opacity-60"
      >
        {busy ? "Signing you up..." : "Join early testing"}
      </button>
      {state.kind === "error" && (
        <p role="alert" className="text-[14px] font-medium text-[#ffb4ab]">
          {state.message}
        </p>
      )}
    </form>
  );
}
