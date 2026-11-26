"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.65)_100%)]"
      />

      <div className="mx-auto w-full max-w-[956px] px-6 pb-16 md:pb-20">
        <h1 className="line-up display text-[clamp(2.6rem,5.4vw,4.2rem)]" style={{ animationDelay: "0.15s" }}>
          Know how recovered you are, every morning
        </h1>
        <p
          className="line-up mt-4 max-w-xl text-[clamp(1.05rem,1.6vw,1.25rem)] text-white/90"
          style={{ animationDelay: "0.3s" }}
        >
          HealFitMe is an iPhone app for people who train. Get a Recovery score out of 100 and one thing to do today.
        </p>
        <div className="line-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.45s" }}>
          <a
            href="#waitlist"
            className="rounded-[16px] bg-white px-7 py-4 text-[16px] font-medium text-ink transition hover:bg-sky-2"
          >
            Join early testing
          </a>
          <a
            href="#app"
            className="rounded-[16px] border border-white/60 px-7 py-4 text-[16px] font-medium text-white transition hover:bg-white/10"
          >
            Watch the app
          </a>
        </div>
        <p className="line-up mt-6 text-[14px] text-white/80" style={{ animationDelay: "0.6s" }}>
          Coming soon to iOS. Early testing is by invitation.
        </p>
      </div>
    </section>
  );
}
