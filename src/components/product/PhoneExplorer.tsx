"use client";

import { useEffect, useState } from "react";
import { Phone } from "../Phone";

// Regions are fractions of the real app screen (top, height, left, right).
const PARTS = [
  {
    id: "verdict",
    title: "A plain-language read on your day",
    body: "The home screen opens with a short verdict, like \"You're good to train\", so you know where you stand before you do anything else.",
    spot: { top: 0.025, height: 0.115, left: 0.02, right: 0.02 },
  },
  {
    id: "week",
    title: "Your week at a glance",
    body: "The days of the week sit along a curve with today marked, so you can see where you are in the week without opening a calendar.",
    spot: { top: 0.155, height: 0.105, left: 0.02, right: 0.02 },
  },
  {
    id: "score",
    title: "A recovery score you can read in a second",
    body: "A score out of 100 with a label: Rest, Watch or Good. The marker on the bar shows where you sit between them.",
    spot: { top: 0.268, height: 0.15, left: 0.02, right: 0.02 },
  },
  {
    id: "checkin",
    title: "Five questions to start the day",
    body: "The morning check-in takes a minute and sets today's score and mission. It is how HealFitMe knows how you actually feel.",
    spot: { top: 0.455, height: 0.1, left: 0.025, right: 0.025 },
  },
  {
    id: "mission",
    title: "One mission, with the reason",
    body: "Each day gets one useful thing to do, along with why it was chosen. Reveal it when you are ready, or choose not today.",
    spot: { top: 0.628, height: 0.175, left: 0.04, right: 0.04 },
  },
  {
    id: "yesterday",
    title: "Yesterday, for context",
    body: "A short look back, such as sleep and training, so today's guidance has something to stand on.",
    spot: { top: 0.84, height: 0.06, left: 0.04, right: 0.04 },
  },
  {
    id: "tabs",
    title: "Home, Stats, Club and Profile",
    body: "Four tabs and a quick-add button in the middle. We are still shaping what lives in each, and will share more as we build.",
    spot: { top: 0.905, height: 0.085, left: 0.0, right: 0.0 },
  },
] as const;

export function PhoneExplorer() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((n) => (n + 1) % PARTS.length), 4800);
    return () => clearInterval(id);
  }, [auto]);

  const s = PARTS[active].spot;

  return (
    <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
      <div>
        <Phone className="max-w-[290px] md:max-w-[310px]">
          <div
            aria-hidden="true"
            className="spotlight"
            style={{
              top: `${s.top * 100}%`,
              height: `${s.height * 100}%`,
              left: `${s.left * 100}%`,
              right: `${s.right * 100}%`,
            }}
          />
        </Phone>
        <p className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Product in development
        </p>
      </div>

      <ul className="space-y-2" aria-label="Parts of the home screen">
        {PARTS.map((p, i) => {
          const on = i === active;
          return (
            <li key={p.id}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setAuto(false);
                  setActive(i);
                }}
                className={`w-full rounded-3xl border px-6 py-4 text-left transition-all duration-500 ${
                  on
                    ? "border-transparent bg-navy text-white shadow-[0_24px_50px_-28px_rgba(15,26,56,0.7)]"
                    : "border-ink/10 bg-white/60 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] font-medium ${
                      on ? "bg-blue text-navy" : "bg-sky-2 text-blue-deep"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[17px] font-medium tracking-tight">{p.title}</span>
                </span>
                <span
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    on ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden pl-11 text-[15px] leading-relaxed text-white/75">
                    {p.body}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
