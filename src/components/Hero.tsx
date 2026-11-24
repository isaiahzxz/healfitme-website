"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Phone } from "./Phone";
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
          className="hero-image object-cover object-[72%_58%]"
        />
      </div>
      {/* Navy wash keeps the white headline legible over the bright sky */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,26,56,0.62)_0%,rgba(15,26,56,0.34)_48%,rgba(15,26,56,0.7)_100%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-36 text-center md:pt-44">
        <p
          className="line-up text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-[12px] sm:tracking-[0.2em]"
          style={{ animationDelay: "0.1s" }}
        >
          Recovery, made personal &middot; Coming soon
        </p>

        <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,7.6vw,5.75rem)]">
          <span className="line-up inline-block" style={{ animationDelay: "0.2s" }}>
            Know what
          </span>
          <br />
          <span className="line-up inline-block" style={{ animationDelay: "0.35s" }}>
            recovery needs
          </span>
          <br />
          <span className="line-up inline-block text-sky" style={{ animationDelay: "0.5s" }}>
            today.
          </span>
        </h1>

        <p
          className="line-up mt-7 max-w-xl text-[clamp(1rem,2vw,1.2rem)] text-white/85"
          style={{ animationDelay: "0.7s" }}
        >
          Your health and activity data, turned into a clearer picture of
          recovery, and one useful next step.
        </p>

        <div
          className="line-up mt-9 flex w-full flex-col items-center"
          style={{ animationDelay: "0.85s" }}
        >
          <WaitlistForm variant="inline" source="hero" />
          <p className="mt-4 text-[13px] text-white/70">
            Just your email. Only HealFitMe updates.
          </p>
        </div>

        {/* Only the top of the phone peeks above the fold, like future.co */}
        <div className="mt-14 h-[300px] w-full max-w-[290px] overflow-hidden sm:h-[340px]">
          <div className="phone-enter">
            <div className="float-y">
              <Phone preload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
