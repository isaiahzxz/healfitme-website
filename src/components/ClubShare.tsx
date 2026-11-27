import Image from "next/image";
import { Reveal } from "./Reveal";
import { RotatingWord } from "./RotatingWord";

const WHO = ["club", "friends", "teammates", "fellow athletes", "running crew", "gym buddies"] as const;
const CLUBS = ["Runners", "Athletes", "Gym & Strength", "Office workers", "Students", "Adventurers & travelers"];

export function ClubShare() {
  return (
    <section className="overflow-clip bg-black px-4 pt-10 text-white md:px-6 md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            aria-label="Show your workouts to your club"
            className="display mx-auto max-w-[900px] text-center text-[clamp(2.4rem,5.6vw,4.6rem)]"
          >
            <span aria-hidden="true">Show your workouts</span>
            <br />
            <span aria-hidden="true">to your </span>
            <RotatingWord words={WHO} />
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-center text-[18px] text-white/75">
            Share your finished sessions, cheer each other on, and take on a weekly challenge together. One club
            at a time, and you can switch whenever you like.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto mt-16 max-w-[270px] sm:max-w-[340px] md:mt-20">
          {/* Phone, cropped by the bottom of the section like future.co */}
          <div className="relative -mb-24 rounded-[3.2rem] bg-[#2a2c30] p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.12)] md:-mb-32">
            <div className="relative aspect-[780/1688] overflow-hidden rounded-[2.6rem] bg-sky-2">
              <Image
                src="/images/app/club-runners.webp"
                alt="The Runners club in HealFitMe, with this week's challenge of three recovery sessions"
                fill
                sizes="340px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute left-1/2 top-[52%] w-[min(88vw,330px)] -translate-x-1/2 md:left-[72%] md:top-[30%] md:w-[370px] md:translate-x-0">
            <div className="rounded-[26px] bg-[#2b2c2e]/95 px-6 py-5 shadow-2xl ring-1 ring-white/10 backdrop-blur">
              <p className="text-[13px] text-white/55">Maya · Runners club</p>
              <p className="mt-1.5 text-[19px] leading-snug">
                Nice session, Sam! Two more and the club hits this week&apos;s challenge 💪
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 -mx-4 bg-black px-4 pb-20 pt-10 md:-mx-6 md:px-6 md:pb-24">
        <ul className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-2.5">
          {CLUBS.map((c) => (
            <li key={c} className="rounded-full bg-white/10 px-5 py-2.5 text-[15px] text-white/85">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
