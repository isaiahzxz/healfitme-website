"use client";

import { useState } from "react";

const MISSIONS = [
  {
    because: "fresh for the sessions that matter.",
    title: "8 minutes of gentle hip mobility",
    detail: "A slow flow to keep your hips loose before your next hard day.",
  },
  {
    because: "your legs have had a lot lately.",
    title: "A 10-minute easy walk",
    detail: "Move without load. Let your legs shake out and your head clear.",
  },
  {
    because: "today is a day to settle your system.",
    title: "A 5-minute breathing reset",
    detail: "Slow breaths, a quiet room and nothing else on the list.",
  },
];

type Phase = "closed" | "open" | "skipped";

export function MissionDemo() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("closed");
  const m = MISSIONS[i];

  function next() {
    setI((n) => (n + 1) % MISSIONS.length);
    setPhase("closed");
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-[36px] bg-white p-6 shadow-[0_40px_90px_-40px_rgba(15,26,56,0.4)] ring-1 ring-ink/5 md:p-8">
      <p className="text-[22px] font-semibold tracking-tight">Today&apos;s mission</p>

      <div className="mt-4 min-h-[250px] rounded-[28px] bg-blue p-6">
        <div key={`${i}-${phase}`} className="unlock-pop">
          {phase === "skipped" ? (
            <>
              <p className="text-[13px] font-medium text-navy/80">No pressure.</p>
              <p className="mt-2 text-[28px] font-semibold leading-tight tracking-tight text-navy">
                See you tomorrow
              </p>
              <p className="mt-2 text-[15px] text-navy/75">
                Skipping a day is fine. Your mission will be here when you want it.
              </p>
            </>
          ) : (
            <>
              <p className="text-[13px] font-medium text-navy/80">Chosen because: {m.because}</p>
              <p className="mt-2 text-[28px] font-semibold leading-tight tracking-tight text-navy">
                {phase === "open" ? m.title : "Your mission is ready"}
              </p>
              {phase === "open" && (
                <p className="mt-2 text-[15px] text-navy/75">{m.detail}</p>
              )}
            </>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {phase === "closed" && (
              <>
                <button
                  type="button"
                  onClick={() => setPhase("open")}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-[15px] font-medium text-white transition hover:bg-navy-2"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="7" width="10" height="7" rx="1.5" />
                    <path d="M5.5 7V5a2.5 2.5 0 015 0" />
                  </svg>
                  Reveal mission
                </button>
                <button
                  type="button"
                  onClick={() => setPhase("skipped")}
                  className="text-[15px] font-medium text-navy"
                >
                  Not today
                </button>
              </>
            )}
            {phase === "open" && (
              <>
                <span className="rounded-full bg-navy px-6 py-3 text-[15px] font-medium text-white">
                  Start
                </span>
                <button type="button" onClick={next} className="text-[15px] font-medium text-navy">
                  Show another example
                </button>
              </>
            )}
            {phase === "skipped" && (
              <button
                type="button"
                onClick={next}
                className="rounded-full bg-navy px-6 py-3 text-[15px] font-medium text-white transition hover:bg-navy-2"
              >
                Try another day
              </button>
            )}
          </div>
        </div>
      </div>
      <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink-soft/80">
        Example missions
      </p>
    </div>
  );
}
