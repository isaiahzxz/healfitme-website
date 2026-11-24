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
        el.style.transform = `translate3d(0, ${Math.min(window.scrollY, 900) * 0.15}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black text-white">
      <div ref={photo} className="absolute inset-0 -z-20 will-change-transform">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-image object-cover object-[70%_50%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.6)_100%)]"
      />

      <div className="mx-auto w-full max-w-[956px] px-6 pb-16 md:pb-20">
        <h1 className="line-up display text-[clamp(2.6rem,5vw,4rem)]" style={{ animationDelay: "0.15s" }}>
          A clearer picture of your recovery
        </h1>
        <p
          className="line-up mt-4 max-w-lg text-[clamp(1.05rem,1.6vw,1.25rem)] text-white/90"
          style={{ animationDelay: "0.3s" }}
        >
          A recovery score and one suggested action each day, from your health and activity data. Not available yet.
        </p>
        <div className="line-up mt-8 max-w-[520px]" style={{ animationDelay: "0.45s" }}>
          <WaitlistForm variant="inline" source="hero" />
        </div>
        <p className="line-up mt-6 text-[16px]" style={{ animationDelay: "0.6s" }}>
          Join the waitlist for early access.
        </p>
        <p className="line-up mt-1 text-[13px] text-white/75" style={{ animationDelay: "0.65s" }}>
          We will only email you about HealFitMe.
        </p>
      </div>
    </section>
  );
}
