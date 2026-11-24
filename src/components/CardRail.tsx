"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";

type Card = {
  title: string;
  body: string;
  tone: "sky" | "navy" | "photo";
  image?: string;
  position?: string;
  visual: ReactNode;
};

const glass = "rounded-2xl bg-white/92 p-4 text-ink shadow-xl backdrop-blur-xl";

const CARDS: Card[] = [
  {
    title: "Know where you stand",
    body: "A recovery score from your check-in, and your wearable if you like. Rest, Watch or Good, in plain words.",
    tone: "sky",
    visual: (
      <div className="rounded-[24px] bg-white p-6 shadow-[0_30px_70px_-35px_rgba(15,26,56,0.5)]">
        <div className="flex items-end justify-between">
          <p className="display text-[64px] leading-none">
            83<span className="text-[20px] text-ink-soft">/100</span>
          </p>
          <p className="text-[20px] font-medium text-blue-deep">Good</p>
        </div>
        <div className="relative mt-5 h-2 rounded-full bg-[linear-gradient(90deg,#f1cabf,#f3e0aa,#6f9ae6)]">
          <span className="absolute left-[78%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-navy bg-white" />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-ink-soft">
          <span>Rest</span><span>Watch</span><span>Good</span>
        </div>
        <p className="mt-4 text-[14px] text-ink-soft">You&apos;re good to train. A day to put your energy where it counts.</p>
      </div>
    ),
  },
  {
    title: "A minute in the morning",
    body: "Five quick questions set your score and your mission. Nothing to log or type in.",
    tone: "photo",
    image: "/images/mobility.webp",
    position: "50% 40%",
    visual: (
      <div className={glass}>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-1 flex-1 rounded-full ${i < 2 ? "bg-navy" : "bg-navy/15"}`} />
          ))}
        </div>
        <p className="mt-3 text-[16px] font-medium">How did you sleep?</p>
        <div className="mt-2 grid gap-1.5 text-[14px]">
          <span className="rounded-lg bg-sky-2 px-3 py-2">Rough</span>
          <span className="rounded-lg bg-navy px-3 py-2 text-white">Okay</span>
        </div>
      </div>
    ),
  },
  {
    title: "One mission, not twenty",
    body: "Each day brings one practical thing to do, and the reason it was chosen.",
    tone: "navy",
    visual: (
      <div className="rounded-[24px] bg-white p-5">
        <p className="text-[13px] text-ink-soft">Today&apos;s mission</p>
        <div className="mt-2 rounded-2xl bg-blue p-4 text-white">
          <p className="text-[12px] text-white/90">Chosen because: fresh for the sessions that matter.</p>
          <p className="mt-1 text-[20px] font-medium tracking-tight">Your mission is ready</p>
          <div className="mt-3 flex items-center gap-3 text-[13px]">
            <span className="rounded-full bg-navy px-4 py-2">Reveal mission</span>
            <span>Not today</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Guided by real people",
    body: "Short sessions with real coaches: mobility, breathing and resets that fit an actual day.",
    tone: "photo",
    image: "/images/coach-stretch.webp",
    position: "50% 35%",
    visual: (
      <div className={`${glass} flex items-center gap-3`}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white">
          <svg width="14" height="14" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true"><path d="M6 3.5v15l13-7.5z" /></svg>
        </span>
        <div>
          <p className="text-[15px] font-medium">12-minute guided reset</p>
          <p className="text-[12px] text-ink-soft">Example session</p>
        </div>
      </div>
    ),
  },
  {
    title: "Wearable optional",
    body: "Add your wearable for a richer picture, or skip it. The check-in is all you need to start.",
    tone: "photo",
    image: "/images/watch.webp",
    position: "50% 40%",
    visual: (
      <div className={`${glass} space-y-2 text-[14px]`}>
        <div className="flex items-center justify-between rounded-lg bg-sky-2 px-3 py-2"><span>Morning check-in</span><span className="text-ink-soft">Always</span></div>
        <div className="flex items-center justify-between rounded-lg bg-sky-2 px-3 py-2"><span>Wearable</span><span className="text-ink-soft">Optional</span></div>
      </div>
    ),
  },
];

const tones = {
  sky: "bg-sky text-ink",
  navy: "bg-navy text-white",
  photo: "bg-navy text-white",
} as const;

export function CardRail() {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    rail.current?.scrollBy({ left: dir * Math.min(460, window.innerWidth * 0.8), behavior: "smooth" });

  return (
    <section className="bg-white pb-20 pt-20 md:pb-28 md:pt-28" aria-label="What HealFitMe does">
      <div className="mx-auto mb-10 flex max-w-[1200px] items-end justify-between px-6">
        <h2 className="display max-w-xl text-[clamp(2.2rem,4.6vw,3.75rem)]">Built for how recovery really works</h2>
        <div className="hidden gap-3 md:flex">
          {([-1, 1] as const).map((d) => (
            <button key={d} type="button" onClick={() => scroll(d)} aria-label={d === 1 ? "Next" : "Previous"}
              className="grid h-12 w-12 place-items-center rounded-full bg-sky-2 text-ink transition hover:bg-sky">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={d === 1 ? "M7 4l6 6-6 6" : "M13 4L7 10l6 6"} />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <div ref={rail} className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:px-[max(24px,calc((100vw-1200px)/2))] [&::-webkit-scrollbar]:hidden">
        {CARDS.map((c) => (
          <article key={c.title} className={`relative isolate flex h-[560px] w-[min(86vw,420px)] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[28px] p-7 ${tones[c.tone]}`}>
            {c.image && (
              <>
                <Image src={c.image} alt="" fill sizes="420px" className="-z-20 object-cover" style={{ objectPosition: c.position }} />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,26,56,0.7)_0%,rgba(15,26,56,0.1)_50%,rgba(15,26,56,0.4)_100%)]" />
              </>
            )}
            <div>
              <h3 className="text-[28px] font-normal leading-[1.1] tracking-[-0.02em]">{c.title}</h3>
              <p className={`mt-3 max-w-[320px] text-[16px] leading-snug ${c.tone === "sky" ? "text-ink-soft" : "text-white/85"}`}>{c.body}</p>
            </div>
            <div>{c.visual}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
