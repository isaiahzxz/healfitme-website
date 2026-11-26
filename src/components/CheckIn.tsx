import { ArrowLink } from "./ArrowLink";
import { PhoneVideo } from "./PhoneVideo";
import { Reveal } from "./Reveal";

const LOOP = [
  { t: "Check in", d: "Answer a few quick questions about sleep, soreness, energy and pain. Tap a dot, tap Next." },
  { t: "See your Recovery score", d: "Your answers, your logged training and your finished sessions become one number from 0 to 100." },
  { t: "Get today's mission", d: "A coach video and a one-line reason, matched to your score and history. Swipe to start, or skip it." },
  { t: "Track and share", d: "Watch your stats over time, join a club and get a weekly Recovery Wrapped." },
];

export function CheckIn() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 md:grid-cols-[0.8fr_1fr] md:gap-24">
        <Reveal>
          <PhoneVideo
            name="check-in"
            poster="/video/poster-checkin.webp"
            label="The HealFitMe morning check-in, from the first question to your Recovery score"
            className="max-w-[300px]"
          />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.1rem,4.4vw,3.4rem)]">Say hello to your morning check-in</h2>
          </Reveal>
          <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {LOOP.map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <li className="grid grid-cols-[auto_1fr] gap-x-6 py-6">
                  <span className="display text-[2rem] text-blue-deep">{i + 1}</span>
                  <div>
                    <h3 className="text-[1.35rem] tracking-tight">{s.t}</h3>
                    <p className="mt-1.5 text-ink-soft">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-8">
            <ArrowLink href="/product">Everything in the app</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
