import Image from "next/image";
import { Reveal } from "./Reveal";

const ITEMS = [
  ["Morning check-in", "Five questions that set today's score and mission."],
  ["Wearable", "Optional. Connect it, or skip it."],
  ["Activity", "Your training and movement, in context."],
  ["Recovery score", "Rest, Watch or Good, with a plain explanation."],
  ["Daily mission", "One suggested action for the day."],
  ["Coach sessions", "Short guided sessions, led by coaches."],
] as const;

export function Plan() {
  return (
    <section id="plan" className="bg-white px-3 pb-3 md:px-4 md:pb-4">
      <div className="relative isolate overflow-hidden rounded-[28px] text-white">
        <Image src="/images/plan.webp" alt="" fill sizes="100vw" className="-z-20 object-cover object-[70%_60%]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,26,56,0.85)_0%,rgba(15,26,56,0.55)_60%,rgba(15,26,56,0.3)_100%)]" />
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-xl">
            <h2 className="display text-[clamp(2.2rem,4.6vw,3.75rem)]">Built from your own data</h2>
            <p className="mt-5 max-w-md text-[18px] text-white/85">
              People recover at different speeds. HealFitMe combines your check-in,
              your activity and, if you choose, your wearable into one score and
              one suggestion for the day.
            </p>
            <a href="#waitlist" className="mt-8 inline-block rounded-[14px] bg-white px-7 py-3.5 text-[15px] text-ink transition hover:bg-sky-2">
              Join the waitlist
            </a>
          </Reveal>
          <dl className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map(([t, d]) => (
              <div key={t} className="rounded-[18px] bg-navy/80 p-5">
                <dt className="text-[18px] tracking-tight">{t}</dt>
                <dd className="mt-1 text-[14px] text-white/75">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
