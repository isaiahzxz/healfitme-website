import Image from "next/image";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Morning check-in",
    lines: ["Five quick questions", "Sets today's score and mission"],
  },
  {
    title: "Wearable",
    lines: ["Optional", "Connect it, or skip it"],
  },
  {
    title: "Activity",
    lines: ["Your training and movement", "Yesterday's load, in context"],
  },
  {
    title: "Recovery score",
    lines: ["Rest, Watch or Good", "Explained in plain words"],
  },
  {
    title: "Daily mission",
    lines: ["One useful next step", "Right for your day"],
  },
  {
    title: "Coach sessions",
    lines: ["Guided by real coaches", "Short, achievable resets"],
  },
];

export function Plan() {
  return (
    <section id="plan" className="relative isolate overflow-hidden text-white">
      <Image
        src="/images/hero.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 scale-[1.25] object-cover object-[88%_55%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,26,56,0.78)_0%,rgba(15,26,56,0.5)_55%,rgba(15,26,56,0.2)_100%)]"
      />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-xl">
          <h2 className="display text-[clamp(2.3rem,5.5vw,4.25rem)]">
            Recovery that&apos;s uniquely <span className="text-sky">yours.</span>
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Everyone recovers differently. HealFitMe brings the signals that matter
            together, and turns them into guidance that fits your day.
          </p>
          <a
            href="#waitlist"
            className="mt-9 inline-block rounded-full bg-white px-8 py-4 text-[15px] font-medium text-ink transition hover:scale-[1.03] hover:bg-sky-2"
          >
            Join the waitlist
          </a>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:pr-[22%]">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-white/20 bg-white/12 p-5 backdrop-blur-xl">
                <p className="text-[17px] font-medium tracking-tight">{it.title}</p>
                <ul className="mt-2 space-y-1 text-[14px] text-white/80">
                  {it.lines.map((l) => (
                    <li key={l} className="flex gap-2">
                      <span aria-hidden="true" className="text-sky">+</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
