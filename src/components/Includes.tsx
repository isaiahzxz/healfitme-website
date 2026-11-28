"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    t: "A check-in and a Recovery score",
    d: "Five quick questions each morning about sleep, soreness, energy, pain and your time. You get a score from 0 to 100 from a fixed formula, never AI, so the same answers always give the same number.",
    src: "home-after",
    alt: "HealFitMe home screen with a Recovery score of 83 out of 100 and today's mission",
  },
  {
    t: "One mission a day",
    d: "A coach video picked for your score, your body, your kit and your time, with the reason it was chosen. Preview the moves, then swipe to start.",
    src: "mission",
    alt: "Mission preview: Hips, back and neck reset, 10 minutes, beginner, with coach Maya",
  },
  {
    t: "Stats, with or without a wearable",
    d: "Your Recovery trend, streak, sleep, steps, training load and missions done, week by week. Connect an Apple Watch, WHOOP, Oura or Garmin through Apple Health for more.",
    src: "stats",
    alt: "The Stats screen with a 12-day streak, the Recovery trend and sleep",
  },
  {
    t: "Clubs, streaks and reactions",
    d: "Join a club for how you train: Runners, Athletes, Gym & Strength, Office workers, Students, or Adventurers & travelers. See each other's streaks, share your progress and react to posts.",
    src: "club-joined",
    alt: "The Gym & Strength club feed with members' streaks and Maya's finished session",
  },
] as const;

const AUTO_MS = 5000;

export function Includes() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const section = useRef<HTMLElement>(null);

  // Advance on its own while the section is on screen, until someone picks a card.
  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = section.current;
    if (!el) return;
    let id = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(id);
      if (e.isIntersecting) id = window.setInterval(() => setActive((n) => (n + 1) % ITEMS.length), AUTO_MS);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, [auto]);

  return (
    <section ref={section} className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1150px]">
        <Reveal>
          <h2 className="display text-center text-[clamp(2.1rem,4.4vw,3.4rem)]">What does HealFitMe include?</h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 md:mt-20 md:grid-cols-[0.8fr_1fr] md:gap-16">
          <Reveal className="md:sticky md:top-28">
            <div className="mx-auto w-full max-w-[260px] rounded-[3rem] md:max-w-[320px] bg-[#111] p-[9px] shadow-[0_50px_100px_-40px_rgba(15,26,56,0.55)]">
              <div className="relative aspect-[780/1688] overflow-hidden rounded-[2.5rem] bg-sky-2">
                {ITEMS.map((it, i) => (
                  <Image
                    key={it.src}
                    src={`/images/app/${it.src}.webp`}
                    alt={i === active ? it.alt : ""}
                    aria-hidden={i !== active}
                    fill
                    sizes="320px"
                    className={`object-cover object-top transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <ul className="space-y-4">
            {ITEMS.map((it, i) => {
              const on = i === active;
              return (
                <li key={it.t}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setActive(i);
                      setAuto(false);
                    }}
                    className={`block w-full rounded-[24px] border px-7 py-6 text-left transition duration-300 ${
                      on
                        ? "border-ink bg-sky-2/70"
                        : "border-ink/10 bg-white hover:border-ink/30"
                    }`}
                  >
                    <span className="block text-[1.3rem] font-medium tracking-tight text-ink">{it.t}</span>
                    <span className="mt-2.5 block text-[16px] leading-relaxed text-ink-soft">{it.d}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
