"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const CARDS = [
  { img: "/images/coach-breath.webp", t: "Check in", d: "Five quick questions each morning about sleep, soreness, energy, pain and the time you have." },
  { img: "/images/yoga-pink.webp", t: "Know your score", d: "A Recovery score out of 100 from a fixed formula. The same answers always give the same number." },
  { img: "/images/mobility.webp", t: "Do one thing", d: "One coach video chosen for your score, your body and your time, with the reason it was picked." },
  { img: "/images/watch.webp", t: "Bring your wearable", d: "Optional. Apple Watch, WHOOP, Oura and Garmin can share sleep, HRV and steps through Apple Health." },
  { img: "/images/coach-stretch.webp", t: "Train together", d: "Join a club for how you train and take on a weekly challenge with other members." },
];

export function FeatureRail() {
  const rail = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState<"start" | "mid" | "end">("start");

  function onScroll() {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge(el.scrollLeft < 8 ? "start" : el.scrollLeft > max - 8 ? "end" : "mid");
  }

  return (
    <div>
      <ul
        ref={rail}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory scroll-pl-[max(1rem,calc((100vw-1200px)/2))] gap-5 overflow-x-auto px-[max(1rem,calc((100vw-1200px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CARDS.map((c) => (
          <li key={c.t} className="w-[86vw] max-w-[560px] shrink-0 snap-start sm:w-[480px] lg:w-[540px]">
            <div className="h-full overflow-hidden rounded-[36px] bg-[#1c1d1c]">
              <div className="relative aspect-[5/4.4]">
                <Image src={c.img} alt="" fill sizes="(min-width:1024px) 540px, 86vw" className="object-cover" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-[1.75rem] leading-[1.1] tracking-[-0.5px] lg:text-[2.25rem]">{c.t}</h3>
                <p className="mt-4 text-[17px] leading-snug text-white/70 lg:text-[19px]">{c.d}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center gap-2">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => rail.current?.scrollBy({ left: d * 560, behavior: "smooth" })}
            disabled={(d === -1 && edge === "start") || (d === 1 && edge === "end")}
            aria-label={d === -1 ? "Previous" : "Next"}
            className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={d === -1 ? "M11 4 6 9l5 5" : "M7 4l5 5-5 5"} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
