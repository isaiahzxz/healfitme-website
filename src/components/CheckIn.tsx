import Image from "next/image";
import { PhoneVideo } from "./PhoneVideo";
import { Reveal } from "./Reveal";

const LOOP = [
  { t: "Check in", d: "Answer a few questions about sleep, soreness, energy and pain." },
  { t: "See your score", d: "Your answers, training and finished sessions become one number." },
  { t: "Get today's mission", d: "A coach video and a one-line reason. Start it, or skip it." },
  { t: "Track your week", d: "Watch your trend, keep your streak and get a weekly Recovery Wrapped." },
];

export function CheckIn() {
  return (
    <section className="bg-white px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display mx-auto max-w-[600px] text-center text-[clamp(2.1rem,4.4vw,3.4rem)]">
            Say hello to your morning check-in
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <div className="relative isolate flex min-h-[640px] items-end justify-center md:justify-start md:px-20 overflow-hidden rounded-[32px] px-6 pt-16 md:min-h-[720px] md:rounded-[44px]">
            <Image
              src="/images/coach-mobility.webp"
              alt=""
              fill
              sizes="(min-width:1200px) 1200px, 100vw"
              className="-z-10 object-cover object-[70%_50%] md:object-[60%_50%]"
            />
            <div className="w-full max-w-[290px] translate-y-12">
              <PhoneVideo
                name="check-in"
                poster="/video/poster-checkin.webp"
                label="The HealFitMe morning check-in, from the first question to your Recovery score"
              />
            </div>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {LOOP.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <li className="border-t border-ink/15 pt-5">
                <span className="text-[15px] text-blue-deep">0{i + 1}</span>
                <h3 className="mt-2 text-[1.5rem] leading-[1.15] tracking-[-0.3px]">{s.t}</h3>
                <p className="mt-2 text-[16px] leading-snug text-ink-soft">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
