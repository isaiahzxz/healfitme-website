"use client";

import { useState, type FormEvent } from "react";
import { GOALS } from "@/lib/waitlist-goals";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "done"; duplicate: boolean }
  | { kind: "error"; message: string };

/**
 * variant "inline": one email field + button in a pill (hero).
 * variant "full": name, email and goal fields (final section).
 */
export function WaitlistForm({
  variant,
  source,
}: {
  variant: "inline" | "full";
  source: string;
}) {
  const [state, setState] = useState<State>({ kind: "idle" });

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
          email: data.get("email"),
          firstName: data.get("firstName"),
          goal: data.get("goal"),
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
      setState({ kind: "done", duplicate: json.status === "duplicate" });
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
        className="unlock-pop rounded-[28px] bg-white/95 px-8 py-7 text-left text-ink shadow-xl"
      >
        <p className="text-2xl font-medium tracking-tight">
          {state.duplicate ? "You're already on the list" : "You're on the list"}
        </p>
        <p className="mt-1.5 text-ink-soft">
          {state.duplicate
            ? "We already have your email. We'll be in touch when early access opens."
            : "Thanks for joining. We'll email you when early access opens."}
        </p>
      </div>
    );
  }

  const busy = state.kind === "loading";
  const honeypot = (
    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label>
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
  const error =
    state.kind === "error" ? (
      <p role="alert" className="mt-3 text-center text-[14px] font-medium text-[#b3261e]">
        {state.message}
      </p>
    ) : null;

  if (variant === "inline") {
    return (
      <form onSubmit={onSubmit} noValidate className="relative w-full max-w-[520px]">
        <div className="flex items-center gap-2 rounded-full bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(15,26,56,0.5)]">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Email address</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={254}
              placeholder="Email address"
              className="w-full bg-transparent px-4 py-3 text-[16px] text-ink placeholder:text-ink-soft/70 focus:outline-none sm:px-5"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="shrink-0 whitespace-nowrap rounded-full bg-navy px-5 py-3 text-[15px] font-medium text-white transition hover:bg-navy-2 disabled:opacity-60 sm:px-6"
          >
            {busy ? "Joining..." : "Join the waitlist"}
          </button>
        </div>
        {honeypot}
        {error && <div className="[&_p]:text-white">{error}</div>}
      </form>
    );
  }

  const field =
    "w-full rounded-2xl border border-ink/10 bg-white px-5 py-4 text-[16px] text-ink placeholder:text-ink-soft/70 focus:border-blue-deep focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First name (optional)</span>
          <input
            name="firstName"
            autoComplete="given-name"
            maxLength={60}
            placeholder="First name (optional)"
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
      </div>
      <label className="block">
        <span className="sr-only">What do you want most from HealFitMe?</span>
        <select name="goal" defaultValue="" className={`${field} appearance-none`}>
          <option value="">What do you want most? (optional)</option>
          {GOALS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>
      {honeypot}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-navy px-8 py-4 text-[16px] font-medium text-white transition hover:bg-navy-2 disabled:opacity-60"
      >
        {busy ? "Joining..." : "Join the waitlist"}
      </button>
      {error}
    </form>
  );
}
