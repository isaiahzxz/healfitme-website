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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,26,56,0.78)_0%,rgba(15,26,56,0.45)_50%,rgba(15,26,56,0.05)_80%)]"
      />

      <div className="mx-auto flex min-h-[720px] max-w-6xl flex-col justify-center px-6 pb-24 pt-40 md:min-h-[820px]">
        <h1 className="display max-w-2xl text-[clamp(2.75rem,6.4vw,5rem)]">
          A clearer picture of your recovery
        </h1>
        <p className="mt-6 max-w-lg text-[clamp(1.05rem,1.8vw,1.2rem)] text-white/85">
          HealFitMe turns your health and activity data into a recovery score and
          one suggested action each day. It is not available yet. Join the
          waitlist to get early access.
        </p>
        <div className="mt-9 w-full max-w-xl">
          <WaitlistForm variant="inline" source="hero" />
          <p className="mt-3 text-[13px] text-white/70">
            We will only email you about HealFitMe.
          </p>
        </div>
      </div>
    </section>
  );
}
