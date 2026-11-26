import Image from "next/image";
import { Reveal } from "./Reveal";

const STEPS = [
  { src: "/images/app/intro-1.webp", t: "About you", d: "Your first name, and the month and year you were born. You must be 18 or older, and we keep only the month and year." },
  { src: "/images/app/intro-5.webp", t: "Your time", d: "How long you can give recovery each day. We never pick a session longer than this." },
  { src: "/images/app/intro-8.webp", t: "Your health data", d: "Optional. Connect Apple Health, so an Apple Watch, WHOOP, Oura or Garmin can share sleep, HRV, resting heart rate and steps." },
];

export function Roadmap() {
  return (
    <section className="relative isolate overflow-hidden bg-navy px-6 py-24 text-white md:py-32">
      <Image src="/images/plan.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/80" />
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display max-w-[760px] text-[clamp(2.1rem,4.4vw,3.4rem)]">
            A plan that starts from your answers
          </h2>
          <p className="mt-5 max-w-xl text-[18px] text-white/80">
            The first-run setup takes about a minute. It also asks about your activities and training days, your
            goal, injuries and the kit you have, and your reminders. There is no starting score: your first
            check-in gives it.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <li className="h-full rounded-[32px] bg-white p-3 text-ink">
                <div className="relative aspect-[780/1100] overflow-hidden rounded-[22px] bg-sky-2">
                  <Image
                    src={s.src}
                    alt={`HealFitMe setup screen: ${s.t}`}
                    fill
                    sizes="(min-width:768px) 360px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-3 pb-3 pt-5">
                  <h3 className="text-[1.5rem] leading-[1.15] tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-snug text-ink-soft">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
