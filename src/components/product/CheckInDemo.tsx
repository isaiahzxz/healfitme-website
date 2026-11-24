"use client";

import { useState } from "react";

const QUESTIONS = [
  { q: "How did you sleep?", options: ["Rough", "Okay", "Great"] },
  { q: "How do your legs feel?", options: ["Heavy", "Fine", "Fresh"] },
  { q: "How's your stress today?", options: ["High", "Manageable", "Low"] },
  { q: "How's your energy right now?", options: ["Low", "Steady", "High"] },
  { q: "Anything sore or tight?", options: ["A fair bit", "A little", "Nothing"] },
];

export function CheckInDemo() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = step >= QUESTIONS.length;
  const current = QUESTIONS[step];

  function pick(i: number) {
    setAnswers((a) => [...a, i]);
    setStep((s) => s + 1);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-[36px] bg-white p-7 text-ink shadow-[0_40px_90px_-40px_rgba(15,26,56,0.55)] md:p-9">
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-semibold tracking-tight">Morning check-in</p>
        <p className="text-[13px] text-ink-soft" aria-live="polite">
          {done ? "Done" : `${step + 1} of ${QUESTIONS.length}`}
        </p>
      </div>

      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {QUESTIONS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
              i < step ? "bg-navy" : i === step && !done ? "bg-blue" : "bg-sky-2"
            }`}
          />
        ))}
      </div>

      {done ? (
        <div key="done" className="unlock-pop mt-8">
          <p className="text-[28px] font-semibold leading-tight tracking-tight">
            That&apos;s the check-in.
          </p>
          <p className="mt-3 text-ink-soft">
            In the app, your answers (and your wearable data, if you connect one) come
            together into today&apos;s recovery score and your mission.
          </p>
          <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink-soft/80">
            Preview of the flow. Example questions.
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-6 rounded-full bg-navy px-6 py-3 text-[15px] font-medium text-white transition hover:bg-navy-2"
          >
            Try it again
          </button>
        </div>
      ) : (
        <div key={step} className="unlock-pop mt-8">
          <p className="text-[26px] font-semibold leading-tight tracking-tight">
            {current.q}
          </p>
          <div className="mt-6 grid gap-2.5">
            {current.options.map((o, i) => (
              <button
                key={o}
                type="button"
                onClick={() => pick(i)}
                className="rounded-2xl border border-ink/10 bg-mist px-5 py-4 text-left text-[16px] font-medium transition hover:border-blue hover:bg-sky-2 active:scale-[0.99]"
              >
                {o}
              </button>
            ))}
          </div>
          {answers.length > 0 && (
            <p className="mt-5 text-[12px] uppercase tracking-[0.14em] text-ink-soft/80">
              Example questions
            </p>
          )}
        </div>
      )}
    </div>
  );
}
