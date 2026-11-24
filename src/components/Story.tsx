"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "./Phone";

// Spotlight regions on the real app screen, as fractions of the screen.
const CHAPTERS = [
  {
    n: "01",
    eyebrow: "Start with you",
    title: "Start with you.",
    body: "Check in with how you feel, or optionally connect your wearable and activity data. Five quick questions are all it takes.",
    spot: { top: 0.455, height: 0.1, left: 0.025, right: 0.025 },
  },
  {
    n: "02",
    eyebrow: "See the bigger picture",
    title: "See the bigger picture.",
    body: "Your health and movement signals come together into one recovery score, so you can see at a glance whether today is for pushing or easing off.",
    spot: { top: 0.055, height: 0.375, left: 0.0, right: 0.0 },
  },
  {
    n: "03",
    eyebrow: "Make one good move",
    title: "Make one good move.",
    body: "Get a personalized daily mission. Something useful, achievable and right for your day, revealed when you're ready.",
    spot: { top: 0.628, height: 0.175, left: 0.04, right: 0.04 },
  },
] as const;

export function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const s = CHAPTERS[active].spot;

  return (
    <section id="story" className="sky-gradient relative overflow-clip px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
            A preview of your everyday
          </p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,4.25rem)]">
            Your day,
            <br />
            in one glance.
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-10 md:mt-20 md:grid-cols-2 md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Phone className="max-w-[270px] md:max-w-[300px]">
              <div
                aria-hidden="true"
                className="spotlight"
                style={{
                  top: `${s.top * 100}%`,
                  height: `${s.height * 100}%`,
                  left: `${s.left * 100}%`,
                  right: `${s.right * 100}%`,
                }}
              />
            </Phone>
            <p className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Product in development
            </p>
          </div>

          <div>
            {CHAPTERS.map((c, i) => (
              <article
                key={c.n}
                data-i={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`flex flex-col justify-center py-10 transition-opacity duration-500 md:min-h-[70vh] ${
                  active === i ? "opacity-100" : "md:opacity-30"
                }`}
              >
                <p className="text-[13px] font-medium text-blue-deep">
                  {c.n} / {c.eyebrow.toUpperCase()}
                </p>
                <h3 className="display mt-4 text-[clamp(2rem,4.2vw,3.25rem)]">{c.title}</h3>
                <p className="mt-5 max-w-md text-lg text-ink-soft">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
