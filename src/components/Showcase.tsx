import { PhoneVideo } from "./PhoneVideo";
import { Reveal } from "./Reveal";

const POINTS = [
  { t: "Check in", d: "Five quick questions about sleep, soreness, energy, pain and the time you have." },
  { t: "See your score", d: "A number from 0 to 100, from a fixed formula. The same answers always give the same score." },
  { t: "Do one thing", d: "One coach video, chosen for your score, your body and your time, with a one-line reason." },
  { t: "Watch the trend", d: "Recovery, sleep, steps, training load, streaks and missions done, week by week." },
  { t: "Join a club", d: "Pick the club that fits how you train and take on a weekly challenge together." },
];

export function Showcase() {
  return (
    <section id="app" className="bg-black px-4 py-24 text-white md:px-6 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display mx-auto max-w-[620px] text-center text-[clamp(2.1rem,4.4vw,3.4rem)]">
            Your whole recovery day, in one app
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <div className="rounded-[32px] bg-sky-2 px-6 pb-0 pt-14 md:rounded-[44px] md:pt-20">
            <div className="mx-auto max-w-[330px] overflow-hidden rounded-t-[3rem]">
              <PhoneVideo
                name="app-walkthrough"
                poster="/video/poster-app.webp"
                label="A walkthrough of the HealFitMe app: the morning check-in, the Recovery score, today's mission and your stats"
                className="rounded-b-none"
              />
            </div>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <li className="border-t border-white/20 pt-5">
                <h3 className="text-[1.5rem] leading-[1.15] tracking-[-0.3px] lg:text-[1.75rem]">{p.t}</h3>
                <p className="mt-3 text-[16px] leading-snug text-white/70">{p.d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
