"use client";

import { useEffect, useState } from "react";

const SESSIONS = [
  {
    id: "mobility",
    tab: "Mobility",
    title: "8 minutes of gentle hip mobility",
    minutes: 8,
    feel: "Slow, easy range of motion. Nothing forced, nothing rushed.",
    goodFor: "Stiff or heavy-legged days",
    steps: ["Settle in", "Open the hips", "Slow rotations", "Easy finish"],
  },
  {
    id: "breathing",
    tab: "Breathing",
    title: "A 5-minute breathing reset",
    minutes: 5,
    feel: "A quiet moment to breathe, with a coach setting the pace.",
    goodFor: "High-stress days and wind-downs",
    steps: ["Get comfortable", "Slow your breath", "Longer exhales", "Come back"],
  },
  {
    id: "reset",
    tab: "Guided reset",
    title: "A 12-minute guided reset",
    minutes: 12,
    feel: "Mobility and breath together, talked through start to finish.",
    goodFor: "When you want to reset body and head",
    steps: ["Arrive", "Loosen up", "Breathe", "Ease out"],
  },
] as const;

export function SessionTabs() {
  const [tab, setTab] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const s = SESSIONS[tab];

  // A short demo run (about 12 seconds) stands in for the real session length.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setPlaying(false);
          return 100;
        }
        return p + 1;
      });
    }, 120);
    return () => clearInterval(id);
  }, [playing]);

  function choose(i: number) {
    setTab(i);
    setPlaying(false);
    setProgress(0);
  }

  const stepIndex = Math.min(
    s.steps.length - 1,
    Math.floor((progress / 100) * s.steps.length),
  );

  return (
    <div>
      <div role="tablist" aria-label="Session types" className="flex flex-wrap gap-2">
        {SESSIONS.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            type="button"
            aria-selected={i === tab}
            onClick={() => choose(i)}
            className={`rounded-full px-5 py-2.5 text-[15px] font-medium transition ${
              i === tab ? "bg-navy text-white" : "bg-white text-ink ring-1 ring-ink/10 hover:bg-sky-2"
            }`}
          >
            {x.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        key={s.id}
        className="unlock-pop mt-6 grid overflow-hidden rounded-[36px] bg-white shadow-[0_40px_90px_-45px_rgba(15,26,56,0.45)] ring-1 ring-ink/5 md:grid-cols-[1.1fr_1fr]"
      >
        {/* Player */}
        <div className="relative isolate grid min-h-[340px] place-items-center overflow-hidden bg-[linear-gradient(145deg,#3f6bd0_0%,#6f9ae6_55%,#c3d6f6_100%)] p-8">
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_60%_at_30%_20%,white,transparent)]" />
          <div className="relative grid h-52 w-52 place-items-center">
            <span
              aria-hidden="true"
              className={`absolute inset-0 rounded-full bg-white/30 ${playing ? "breathe" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`absolute inset-6 rounded-full bg-white/45 ${playing ? "breathe" : ""}`}
              style={{ animationDelay: "0.25s" }}
            />
            <button
              type="button"
              onClick={() => {
                if (progress >= 100) setProgress(0);
                setPlaying((p) => !p);
              }}
              aria-label={playing ? "Pause demo" : "Play demo"}
              className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-navy shadow-xl transition hover:scale-105"
            >
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                  <rect x="5" y="4" width="4" height="14" rx="1.2" />
                  <rect x="13" y="4" width="4" height="14" rx="1.2" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                  <path d="M6 3.5v15l13-7.5z" />
                </svg>
              )}
            </button>
          </div>

          <div className="absolute inset-x-6 bottom-6">
            <p className="text-center text-[14px] font-medium text-white" aria-live="polite">
              {playing || progress > 0 ? s.steps[stepIndex] : "Tap play for a taste"}
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-white transition-[width] duration-150 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-blue-deep">
            Example session &middot; {s.minutes} min
          </p>
          <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.08] tracking-[-0.03em]">
            {s.title}
          </h3>
          <p className="mt-4 text-ink-soft">{s.feel}</p>
          <dl className="mt-6 space-y-3 text-[15px]">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-soft">Good for</dt>
              <dd className="font-medium">{s.goodFor}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-soft">Led by</dt>
              <dd className="font-medium">A real coach</dd>
            </div>
          </dl>
          <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-ink-soft/80">
            Demo only. Real sessions are in development.
          </p>
        </div>
      </div>
    </div>
  );
}
