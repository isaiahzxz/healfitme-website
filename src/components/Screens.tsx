"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";

const SCREENS = [
  { src: "intro-1", t: "Set up", d: "About a minute, ten short steps." },
  { src: "intro-8", t: "Health data", d: "Optional. Apple Health, Apple Watch, WHOOP, Oura, Garmin." },
  { src: "home-before", t: "Home", d: "Your score, the week, sleep, resting heart rate and HRV." },
  { src: "checkin-3", t: "Check-in", d: "Five questions. Tap a dot, tap Next." },
  { src: "home-after", t: "Your score and mission", d: "A score out of 100 and one mission for today." },
  { src: "mission", t: "Mission preview", d: "The moves, level and coach. Swipe to start." },
  { src: "stats", t: "Stats", d: "Recovery trend, sleep, steps, training load and your logs." },
  { src: "club", t: "Club", d: "Your club, its weekly challenge and its feed." },
  { src: "profile", t: "Profile", d: "Your month of check-ins and your stats." },
  { src: "privacy", t: "Privacy and data", d: "What is saved, what the coach sees, and how to delete it." },
];

export function Screens() {
  const rail = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState<"start" | "mid" | "end">("start");

  function onScroll() {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge(el.scrollLeft < 8 ? "start" : el.scrollLeft > max - 8 ? "end" : "mid");
  }
  function go(dir: 1 | -1) {
    const el = rail.current;
    if (el) el.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <section id="screens" className="bg-white px-0 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="display max-w-[640px] text-[clamp(2.1rem,4.4vw,3.4rem)]">Every screen in the app</h2>
          <p className="mt-5 max-w-xl text-[18px] text-ink-soft">
            Screenshots from the current early-testing build. They use demo data.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-[1700px] px-0 md:px-6">
        <div className="rounded-none bg-[#f3f4f7] py-8 md:rounded-[44px] md:py-12">
          <ul
            ref={rail}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
          >
            {SCREENS.map((s) => (
              <li key={s.src} className="w-[270px] shrink-0 snap-start sm:w-[300px]">
                <div className="rounded-[32px] bg-white p-3 shadow-[0_20px_50px_-30px_rgba(15,26,56,0.4)]">
                  <div className="relative aspect-[780/1688] overflow-hidden rounded-[22px] bg-sky-2">
                    <Image
                      src={`/images/app/${s.src}.webp`}
                      alt={`HealFitMe ${s.t} screen`}
                      fill
                      sizes="300px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-[1.25rem] tracking-tight">{s.t}</h3>
                    <p className="mt-1 text-[14px] leading-snug text-ink-soft">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2 px-6 md:px-12">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => go(d)}
                disabled={(d === -1 && edge === "start") || (d === 1 && edge === "end")}
                aria-label={d === -1 ? "Previous screens" : "Next screens"}
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition hover:bg-sky-2 disabled:opacity-35"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={d === -1 ? "M11 4 6 9l5 5" : "M7 4l5 5-5 5"} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
