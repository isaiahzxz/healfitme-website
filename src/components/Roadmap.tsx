import Image from "next/image";
import { Reveal } from "./Reveal";

const CARDS = [
  { t: "Training", items: ["The activities you do", "The days you train"] },
  { t: "Goal", items: ["What you want from recovery"] },
  { t: "Time", items: ["Minutes a day for recovery", "Never a longer session than that"] },
  { t: "Injuries", items: ["Areas to go easy on"] },
  { t: "Kit", items: ["What you have at home or at the gym"] },
  { t: "Health data", items: ["Optional, through Apple Health", "Sleep, HRV, heart rate, steps"] },
];

export function Roadmap() {
  return (
    <section className="relative isolate overflow-hidden bg-navy px-4 py-24 text-white md:px-6 md:py-32">
      <Image src="/images/plan.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,26,56,0.55),rgba(15,26,56,0.85))]" />
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display mx-auto max-w-[640px] text-center text-[clamp(2.1rem,4.4vw,3.4rem)]">
            A plan that fits your body and your day
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[18px] text-white/85">
            Setup takes about a minute. Your answers shape every mission, and you can change them any time.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <li className="h-full rounded-[32px] bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur-md">
                <h3 className="text-[1.5rem] leading-[1.1] tracking-tight">{c.t}</h3>
                <ul className="mt-4 space-y-1.5 text-[16px] text-white/85">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-white/50">+</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
