"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";

type Card = {
  title: string;
  body: string;
  image: string;
  position?: string;
  tone: "light" | "photo";
  overlay: ReactNode;
};

const glass = "rounded-2xl bg-white/90 p-4 text-ink shadow-xl backdrop-blur-xl";

const CARDS: Card[] = [
  {
    title: "Know where you stand",
    body: "A recovery score from your check-in, and your wearable if you like. Rest, Watch or Good, in plain words.",
    image: "/images/mobility.webp",
    position: "50% 35%",
    tone: "light",
    overlay: (
      <div className={glass}>
        <div className="flex items-end justify-between text-[13px] text-ink-soft">
          <span>Recovery</span>
          <span className="font-medium text-blue-deep">Good</span>
        </div>
        <p className="display mt-1 text-[40px] leading-none">
          83<span className="text-[15px] text-ink-soft">/100</span>
        </p>
        <div className="mt-3 h-1.5 rounded-full bg-[linear-gradient(90deg,#f1cabf,#f3e0aa,#6f9ae6)]" />
      </div>
    ),
  },
  {
    title: "A minute in the morning",
    body: "Five quick questions set your score and your mission. Nothing to log or type in.",
    image: "/images/breathing.webp",
    position: "50% 60%",
    tone: "photo",
    overlay: (
      <div className={glass}>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-1 flex-1 rounded-full ${i < 2 ? "bg-black" : "bg-black/15"}`} />
          ))}
        </div>
        <p className="mt-3 text-[16px] font-medium">How did you sleep?</p>
        <div className="mt-2 grid gap-1.5 text-[14px]">
          <span className="rounded-lg bg-black/5 px-3 py-2">Rough</span>
          <span className="rounded-lg bg-black px-3 py-2 text-white">Okay</span>
        </div>
      </div>
    ),
  },
  {
    title: "One mission, not twenty",
    body: "Each day brings one practical thing to do, and the reason it was chosen.",
    image: "/images/reset.webp",
    position: "50% 40%",
    tone: "light",
    overlay: (
      <div className={glass}>
        <p className="text-[12px] text-ink-soft">Today&apos;s mission</p>
        <div className="mt-2 rounded-xl bg-blue p-3 text-white">
          <p className="text-[12px] text-white/85">Chosen because: fresh for the sessions that matter.</p>
          <p className="mt-1 text-[16px] font-medium">Your mission is ready</p>
          <span className="mt-2 inline-block rounded-lg bg-black px-3 py-1.5 text-[13px]">Reveal mission</span>
        </div>
      </div>
    ),
  },
  {
    title: "Guided by real people",
    body: "Short sessions with real coaches: mobility, breathing and resets that fit an actual day.",
    image: "/images/coach-breath.webp",
    position: "50% 30%",
    tone: "photo",
    overlay: (
      <div className={`${glass} flex items-center gap-3`}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black text-white">
          <svg width="14" height="14" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
            <path d="M6 3.5v15l13-7.5z" />
          </svg>
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
    image: "/images/coach-mobility.webp",
    position: "50% 25%",
    tone: "light",
    overlay: (
      <div className={`${glass} space-y-2 text-[14px]`}>
        <div className="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2">
          <span>Morning check-in</span>
          <span className="text-ink-soft">Always</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2">
          <span>Wearable</span>
          <span className="text-ink-soft">Optional</span>
        </div>
      </div>
    ),
  },
];

export function CardRail() {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    rail.current?.scrollBy({ left: dir * Math.min(460, window.innerWidth * 0.8), behavior: "smooth" });

  return (
    <section className="bg-black pb-24 pt-4 text-white md:pb-32" aria-label="What HealFitMe does">
      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:px-[max(24px,calc((100vw-1200px)/2))] [&::-webkit-scrollbar]:hidden"
      >
        {CARDS.map((c) => (
          <article
            key={c.title}
            className={`relative isolate flex h-[600px] w-[min(86vw,440px)] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] p-7 md:h-[640px] ${
              c.tone === "light" ? "bg-[#ececec] text-ink" : "bg-black text-white ring-1 ring-white/15"
            }`}
          >
            {c.tone === "photo" && (
              <>
                <Image src={c.image} alt="" fill sizes="440px" className="-z-20 object-cover" style={{ objectPosition: c.position }} />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.35)_100%)]" />
              </>
            )}
            <h3 className="text-[28px] font-normal leading-[1.1] tracking-[-0.02em]">{c.title}</h3>
            <p className={`mt-3 max-w-[320px] text-[17px] leading-snug ${c.tone === "light" ? "text-ink-soft" : "text-white/85"}`}>
              {c.body}
            </p>
            <div className="relative mt-6 flex-1">
              {c.tone === "light" ? (
                <div className="relative h-full overflow-hidden rounded-[20px]">
                  <Image src={c.image} alt="" fill sizes="440px" className="object-cover" style={{ objectPosition: c.position }} />
                  <div className="absolute inset-x-4 bottom-4">{c.overlay}</div>
                </div>
              ) : (
                <div className="absolute inset-x-0 bottom-0">{c.overlay}</div>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-6 flex max-w-[1200px] justify-end gap-3 px-6">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => scroll(d)}
            aria-label={d === 1 ? "Next" : "Previous"}
            className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d={d === 1 ? "M7 4l6 6-6 6" : "M13 4L7 10l6 6"} />
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
}
