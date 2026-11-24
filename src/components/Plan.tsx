import Image from "next/image";
import { Reveal } from "./Reveal";

const ITEMS = [
  { title: "Morning check-in", lines: ["Five quick questions", "Sets today's score and mission"] },
  { title: "Wearable", lines: ["Optional", "Connect it, or skip it"] },
  { title: "Activity", lines: ["Your training and movement", "Yesterday's load, in context"] },
  { title: "Recovery score", lines: ["Rest, Watch or Good", "Explained in plain words"] },
  { title: "Daily mission", lines: ["One useful next step", "Right for your day"] },
  { title: "Coach sessions", lines: ["Guided by real coaches", "Short, achievable resets"] },
];

export function Plan() {
  return (
    <section id="plan" className="bg-white p-3 md:p-4">
      <div className="relative isolate overflow-hidden rounded-[28px] text-white">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[85%_50%] grayscale"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.15)_100%)]" />

        <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-xl">
            <h2 className="display text-[clamp(2.2rem,4.6vw,3.75rem)]">
              A recovery picture that&apos;s uniquely yours
            </h2>
            <p className="mt-5 max-w-md text-[18px] text-white/85">
              Everyone recovers differently. HealFitMe brings the signals that
              matter together and turns them into guidance that fits your day.
            </p>
            <a
              href="#waitlist"
              className="mt-8 inline-block rounded-[14px] bg-white/95 px-7 py-3.5 text-[15px] text-ink transition hover:bg-white"
            >
              Join the waitlist
            </a>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={i * 60}>
                <div className="h-full rounded-[18px] border border-white/20 bg-white/15 p-5 backdrop-blur-xl">
                  <p className="text-[18px] tracking-tight">{it.title}</p>
                  <ul className="mt-2 space-y-1 text-[14px] text-white/80">
                    {it.lines.map((l) => (
                      <li key={l}>+ {l}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
