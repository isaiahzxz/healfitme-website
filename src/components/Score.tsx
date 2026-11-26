import Image from "next/image";
import { Reveal } from "./Reveal";

const PARTS = [
  { t: "It starts with your check-in", d: "Sleep, soreness and energy set the base. Pain lowers it." },
  { t: "Training counts both ways", d: "A short, easy session raises your score. A long, hard one lowers it." },
  { t: "Stretching and yoga help", d: "They add points, up to 8 a day." },
  { t: "Rest days help", d: "A rest day adds points, and extra sleep adds more." },
  { t: "Finished sessions add up", d: "Complete a guided session and earn points, up to 15 a day." },
  { t: "Wearable data, if you connect it", d: "Measured sleep replaces your answer, and 8,000 or more steps add a little." },
];

export function Score() {
  return (
    <section className="bg-navy px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1.1fr_0.8fr] lg:gap-24">
        <div>
          <Reveal>
            <h2 className="display max-w-[640px] text-[clamp(2.1rem,4.4vw,3.4rem)]">
              A score you can check, not a black box
            </h2>
            <p className="mt-5 max-w-xl text-[18px] text-white/80">
              Your Recovery score is a fixed formula. It is never decided by AI, so the same answers always give
              the same number. What helps recovery earns points, and too much costs them.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {PARTS.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <li className="h-full rounded-[28px] bg-navy-2 p-7">
                  <h3 className="text-[1.3rem] leading-[1.15] tracking-tight">{p.t}</h3>
                  <p className="mt-2.5 text-[15px] leading-snug text-white/70">{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-8 max-w-xl text-[15px] text-white/60">
              Weight, calories, meals and free text never change the score.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/coach-gym.webp"
              alt="A coach guiding a member through a stretch in the gym"
              fill
              sizes="440px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
