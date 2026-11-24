"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Reveal } from "./Reveal";

/* ---------- Count-up number that eases between scores ---------- */
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const m = window.matchMedia(REDUCED_QUERY);
      m.addEventListener("change", onChange);
      return () => m.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      from.current = value;
      return;
    }
    const start = from.current;
    const t0 = performance.now();
    const dur = 900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(Math.round(start + (value - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, reduced]);

  return <>{reduced ? value : shown}</>;
}

/* ---------- Recovery meter: cycles through Good, Watch and Rest ---------- */
const STATES = [
  { score: 83, label: "Good", color: "text-blue-deep", line: "You're good to train" },
  { score: 58, label: "Watch", color: "text-[#b58a1f]", line: "Ease in and listen to your body" },
  { score: 31, label: "Rest", color: "text-[#c25a45]", line: "Today is for recovery" },
] as const;

function RecoveryMeter() {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((n) => (n + 1) % STATES.length), 3400);
    return () => clearInterval(id);
  }, [reduced]);

  const s = STATES[i];
  return (
    <div className="w-full max-w-sm rounded-t-[28px] bg-white p-6 shadow-[0_-12px_50px_-25px_rgba(15,26,56,0.35)]">
      <p className="text-[13px] text-ink-soft">{s.line}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="flex items-baseline gap-1.5">
          <span className="text-[64px] font-semibold leading-none tracking-tight">
            <AnimatedNumber value={s.score} />
          </span>
          <span className="text-lg text-ink-soft">/100</span>
        </p>
        <p className={`text-2xl font-semibold transition-colors duration-500 ${s.color}`}>
          {s.label}
        </p>
      </div>

      <div className="relative mt-5">
        <div className="flex gap-1.5">
          <div className="h-2.5 rounded-full bg-peach" style={{ flex: 44 }} />
          <div className="h-2.5 rounded-full bg-butter" style={{ flex: 25 }} />
          <div className="h-2.5 rounded-full bg-blue" style={{ flex: 31 }} />
        </div>
        <span
          aria-hidden="true"
          className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-navy bg-white shadow transition-[left] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ left: `${s.score}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[12px] text-ink-soft">
        <span>Rest</span>
        <span>Watch</span>
        <span>Good</span>
      </div>
    </div>
  );
}

/* ---------- Mission card: tap to reveal ---------- */
function MissionReveal() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="w-full max-w-sm rounded-t-[28px] bg-white p-5 shadow-[0_-12px_50px_-25px_rgba(15,26,56,0.35)]">
      <p className="text-[18px] font-semibold tracking-tight">Today&apos;s mission</p>
      <div className="mt-3 min-h-[168px] rounded-3xl bg-blue p-5">
        {revealed ? (
          <div key="open" className="unlock-pop">
            <p className="text-[13px] font-medium text-navy/80">
              Chosen because: fresh for the sessions that matter.
            </p>
            <p className="mt-2 text-[24px] font-semibold leading-tight tracking-tight text-navy">
              8 minutes of gentle hip mobility
            </p>
            <p className="mt-1 text-[13px] text-navy/70">Example mission</p>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="mt-4 rounded-full bg-navy px-5 py-2.5 text-[14px] font-medium text-white"
            >
              Start
            </button>
          </div>
        ) : (
          <div key="closed" className="unlock-pop">
            <p className="text-[13px] font-medium text-navy/80">
              Chosen because: fresh for the sessions that matter.
            </p>
            <p className="mt-2 text-[24px] font-semibold leading-tight tracking-tight text-navy">
              Your mission is ready
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-navy-2"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" />
                  <path d="M5.5 7V5a2.5 2.5 0 015 0" />
                </svg>
                Reveal mission
              </button>
              <span className="text-[14px] font-medium text-navy">Not today</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Check-in questions ---------- */
function CheckIn() {
  const qs = ["How did you sleep?", "How do your legs feel?", "Stress level today?", "Energy right now?", "Anything sore?"];
  return (
    <div className="w-full max-w-sm rounded-t-[28px] bg-white p-5 shadow-[0_-12px_50px_-25px_rgba(15,26,56,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[18px] font-semibold tracking-tight">Morning check-in</p>
          <p className="mt-1 text-[14px] text-ink-soft">
            Five quick questions that set today&apos;s score and mission.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-navy px-4 py-2 text-[13px] font-medium text-white">
          Start
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {qs.map((q, n) => (
          <span
            key={q}
            className={`rounded-full px-3.5 py-2 text-[13px] ${n === 0 ? "bg-blue text-navy" : "bg-mist text-ink-soft"}`}
          >
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Guided session ---------- */
function Session() {
  return (
    <div className="w-full max-w-sm rounded-t-[28px] bg-white p-5 shadow-[0_-12px_50px_-25px_rgba(15,26,56,0.35)]">
      <div className="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#6f9ae6,#c3d6f6)]">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 shadow-lg">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="#0f1a38" aria-hidden="true">
            <path d="M4 2.5v11l9-5.5z" />
          </svg>
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium">
          12 min
        </span>
      </div>
      <p className="mt-3 text-[16px] font-semibold tracking-tight">A 12-minute guided reset</p>
      <p className="text-[13px] text-ink-soft">Example session, led by a real coach</p>
    </div>
  );
}

function Card({
  title,
  body,
  children,
  delay,
}: {
  title: string;
  body: string;
  children: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="flex h-full flex-col overflow-hidden rounded-[32px] bg-mist ring-1 ring-ink/5">
        <div className="p-8 pb-0 md:p-10 md:pb-0">
          <h3 className="text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-[16px] text-ink-soft">{body}</p>
        </div>
        <div className="mt-8 flex flex-1 items-end justify-center px-6 md:px-10">
          {children}
        </div>
      </article>
    </Reveal>
  );
}

export function Features() {
  return (
    <>
      {/* Dark statement band, like Future's "Together, we go further" */}
      <section className="relative overflow-hidden bg-navy px-6 pb-44 pt-32 text-center text-white md:pt-44">
        <div
          aria-hidden="true"
          className="drift absolute -top-40 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-blue/25 blur-[110px]"
        />
        <Reveal className="relative mx-auto max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-sky/80">
            Less guesswork. More you.
          </p>
          <h2 className="display mt-6 text-[clamp(2.6rem,7vw,5.5rem)]">
            Your body has a story.
            <br />
            <span className="text-sky">Find your next chapter.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg text-white/70">
            Recovery isn&apos;t one-size-fits-all. We&apos;re building a simpler way to
            listen to your body and know what to do next.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-[15px] font-medium text-ink transition hover:scale-[1.03] hover:bg-sky-2"
          >
            Join the waitlist
          </a>
        </Reveal>
      </section>

      <section id="features" className="relative bg-white px-6 pb-24">
        <div className="mx-auto -mt-28 grid max-w-6xl gap-5 md:grid-cols-2">
          <Card
            delay={0}
            title="A clearer picture. A kinder pace."
            body="Some days call for more. Others call for a little less. HealFitMe makes sense of your health and activity data without getting lost in the numbers."
          >
            <RecoveryMeter />
          </Card>
          <Card
            delay={100}
            title="Small mission. Meaningful momentum."
            body="Your personalized daily mission turns recovery insight into one practical thing you can do. Try revealing it."
          >
            <MissionReveal />
          </Card>
          <Card
            delay={0}
            title="Check in, don't check out."
            body="Five quick questions each morning set your score and your mission. Prefer data? Optionally connect your wearable."
          >
            <CheckIn />
          </Card>
          <Card
            delay={100}
            title="Real guidance. A human touch."
            body="You won't have to figure it all out alone. Guided recovery sessions from real coaches help you make space for your body."
          >
            <Session />
          </Card>
        </div>
      </section>
    </>
  );
}
