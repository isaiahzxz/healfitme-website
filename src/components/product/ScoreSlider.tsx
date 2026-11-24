"use client";

import { useState } from "react";

function stateFor(score: number) {
  if (score < 45) {
    return {
      label: "Rest",
      color: "text-[#c25a45]",
      verdict: "Today is for recovery",
      body: "Your body is asking for a lighter day. Think gentle movement, a guided reset and an early night rather than a hard session.",
    };
  }
  if (score < 70) {
    return {
      label: "Watch",
      color: "text-[#a77c12]",
      verdict: "Ease in and listen",
      body: "You can train, but keep an eye on how it feels. A shorter or easier session is a good call, and the check-in helps you notice the signs.",
    };
  }
  return {
    label: "Good",
    color: "text-blue-deep",
    verdict: "You're good to train",
    body: "You are fresh for the sessions that matter. This is a day to put your energy where it counts.",
  };
}

export function ScoreSlider() {
  const [score, setScore] = useState(83);
  const s = stateFor(score);

  return (
    <div className="mx-auto max-w-3xl rounded-[36px] bg-white p-7 shadow-[0_40px_90px_-40px_rgba(15,26,56,0.4)] ring-1 ring-ink/5 md:p-10">
      <p className="text-[13px] text-ink-soft">Drag to see how the score reads</p>

      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="flex items-baseline gap-2">
          <span className="text-[clamp(4rem,10vw,6.5rem)] font-semibold leading-none tracking-tight tabular-nums">
            {score}
          </span>
          <span className="text-xl text-ink-soft">/100</span>
        </p>
        <p className={`text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight transition-colors duration-300 ${s.color}`}>
          {s.label}
        </p>
      </div>

      <div className="relative mt-8">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="h-3 rounded-full bg-peach" style={{ flex: 44 }} />
          <div className="h-3 rounded-full bg-butter" style={{ flex: 25 }} />
          <div className="h-3 rounded-full bg-blue" style={{ flex: 31 }} />
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-navy bg-white shadow-md"
          style={{ left: `${score}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          aria-label="Recovery score"
          aria-valuetext={`${score} out of 100, ${s.label}`}
          className="absolute inset-x-0 -top-3 h-9 w-full cursor-grab opacity-0 active:cursor-grabbing"
        />
      </div>
      <div className="mt-3 flex justify-between text-[13px] text-ink-soft">
        <span>Rest</span>
        <span>Watch</span>
        <span>Good</span>
      </div>

      <div className="mt-8 rounded-3xl bg-mist p-6">
        <p className="text-xl font-medium tracking-tight">{s.verdict}</p>
        <p className="mt-2 text-ink-soft">{s.body}</p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink-soft/80">
          Illustrative guidance
        </p>
      </div>
    </div>
  );
}
