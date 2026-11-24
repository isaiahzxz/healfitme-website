"use client";

import { useState, type FormEvent } from "react";
import { GOALS } from "@/lib/waitlist-goals";
import { Reveal } from "./Reveal";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "done"; duplicate: boolean }
  | { kind: "error"; message: string };

export function Waitlist() {
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
          source: "website",
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

  const field =
    "w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-[16px] text-white placeholder:text-white/50 focus:border-mint focus:bg-white/15 focus:outline-none";

  return (
    <section
      id="waitlist"
      className="hero-scene grain relative isolate overflow-hidden px-6 py-28 text-white"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="display text-[clamp(2.25rem,6vw,4.5rem)]">
          Be first to <span className="italic">recover better</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-white/80">
          Join the waitlist for early access. We will email you once when your
          spot opens.
        </p>

        {state.kind === "done" ? (
          <div
            role="status"
            className="mt-10 rounded-[28px] bg-white/95 p-10 text-ink"
          >
            <p className="display text-3xl">
              {state.duplicate ? "You're already on the list" : "You're on the list"}
            </p>
            <p className="mt-3 text-ink-soft">
              {state.duplicate
                ? "We have your email already. We'll be in touch when early access opens."
                : "Thanks for joining. We'll email you when early access opens."}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-3 text-left" noValidate>
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
                <span className="sr-only">Email</span>
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
              <select
                name="goal"
                defaultValue=""
                className={`${field} appearance-none`}
              >
                <option value="" className="text-ink">
                  What do you want most? (optional)
                </option>
                {GOALS.map((g) => (
                  <option key={g} value={g} className="text-ink">
                    {g}
                  </option>
                ))}
              </select>
            </label>

            {/* Honeypot: hidden from people, tempting to bots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>
                Company
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button
              type="submit"
              disabled={state.kind === "loading"}
              className="w-full rounded-full bg-white px-8 py-4 text-[16px] font-medium text-ink transition hover:bg-mint disabled:opacity-60"
            >
              {state.kind === "loading" ? "Joining..." : "Join the waitlist"}
            </button>

            {state.kind === "error" && (
              <p role="alert" className="text-center text-[14px] text-[#ffb4a2]">
                {state.message}
              </p>
            )}
            <p className="pt-1 text-center text-[13px] text-white/60">
              No spam. Unsubscribe any time.
            </p>
          </form>
        )}
      </Reveal>
    </section>
  );
}
