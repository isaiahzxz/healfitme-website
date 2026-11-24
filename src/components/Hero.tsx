"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  const photo = useRef<HTMLDivElement>(null);

  // Subtle parallax: the photo drifts slower than the page.
  useEffect(() => {
    const el = photo.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        el.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy text-white">
      <div ref={photo} className="absolute inset-0 -z-20 will-change-transform">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-image object-cover object-[78%_58%]"
        />
      </div>
      {/* Wash only behind the text, so the photo stays bright on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,26,56,0.72)_0%,rgba(15,26,56,0.4)_45%,rgba(15,26,56,0.05)_75%),linear-gradient(180deg,rgba(15,26,56,0.35)_0%,transparent_30%)]"
      />

      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/35 md:hidden" />

      <div className="mx-auto flex min-h-[760px] max-w-6xl flex-col justify-center px-6 pb-28 pt-40 md:min-h-[860px]">
        <h1 className="display max-w-2xl text-[clamp(3rem,7.4vw,6rem)]">
          <span className="line-up inline-block" style={{ animationDelay: "0.15s" }}>
            Recovery,
          </span>
          <br />
          <span className="line-up inline-block" style={{ animationDelay: "0.3s" }}>
            reimagined.
          </span>
        </h1>

        <p
          className="line-up mt-7 max-w-md text-[clamp(1.05rem,2vw,1.25rem)] text-white/90"
          style={{ animationDelay: "0.55s" }}
        >
          Know what your body needs today, and the one thing to do next. Coming soon.
        </p>

        <div className="line-up mt-9 w-full max-w-xl" style={{ animationDelay: "0.75s" }}>
          <WaitlistForm variant="inline" source="hero" />
          <p className="mt-4 text-[13px] text-white/75">
            Free to join &middot; Just your email &middot; Only HealFitMe updates
          </p>
        </div>
      </div>
    </section>
  );
}
