import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

export const CLUBS = ["Runners", "Athletes", "Gym & Strength", "Office workers", "Students", "Adventurers & travelers"];

export function Clubs() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 md:grid-cols-[1fr_0.85fr] md:gap-24">
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
            <ArrowLink href="/product#club">How clubs work</ArrowLink>
          </div>
        </div>
        <Reveal delay={100}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/group.webp"
              alt="A group stretching together on mats"
              fill
              sizes="460px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
