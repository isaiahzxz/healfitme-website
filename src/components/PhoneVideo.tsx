"use client";

import { useEffect, useRef } from "react";

/**
 * A phone frame that plays a muted, looping screen recording of the app.
 * The video only plays while it is on screen, and never for people who prefer reduced motion.
 */
export function PhoneVideo({
  name,
  poster,
  label,
  className = "",
}: {
  name: "app-walkthrough";
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`relative mx-auto w-full rounded-[3rem] bg-[#0b1226] p-[9px] shadow-[0_60px_120px_-30px_rgba(5,10,30,0.7)] ring-1 ring-white/20 ${className}`}
    >
      <div className="relative aspect-[780/1688] overflow-hidden rounded-[2.4rem] bg-[#1d52c9]">
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={label}
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={`/video/${name}.webm`} type="video/webm" />
          <source src={`/video/${name}.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
