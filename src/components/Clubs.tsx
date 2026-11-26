import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

export const CLUBS = ["Runners", "Athletes", "Gym & Strength", "Office workers", "Students", "Adventurers & travelers"];

export function Clubs() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 md:grid-cols-[1fr_0.75fr] md:gap-24">
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.1rem,4.4vw,3.4rem)]">A club for how you train</h2>
            <p className="mt-5 max-w-lg text-[18px] text-ink-soft">
              Join one club at a time. Each has a weekly challenge, like three recovery sessions this week, and a
              feed where you can share your progress. You can switch or leave whenever you like.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CLUBS.map((c, i) => (
              <Reveal key={c} delay={i * 50}>
                <li className="rounded-[22px] bg-sky-2 px-5 py-6 text-[1.1rem] leading-tight tracking-tight">{c}</li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-8">
            <ArrowLink href="/product">See the club screens</ArrowLink>
          </div>
        </div>
        <Reveal delay={100}>
          <div className="mx-auto w-full max-w-[300px] rounded-[3rem] bg-[#0b1226] p-[9px] shadow-[0_50px_100px_-30px_rgba(15,26,56,0.55)] ring-1 ring-ink/10">
            <div className="relative aspect-[780/1688] overflow-hidden rounded-[2.4rem]">
              <Image
                src="/images/app/club-runners.webp"
                alt="The Runners club in HealFitMe, with this week's challenge of three recovery sessions"
                fill
                sizes="300px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
