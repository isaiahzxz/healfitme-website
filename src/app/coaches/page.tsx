import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Guided sessions | HealFitMe",
  description:
    "How HealFitMe picks one coach video for you each day, and how a guided session works. Join early testing.",
};

const STEPS = [
  { t: "It picks one video", d: "After each check-in, HealFitMe chooses one coach video from a library tagged by body area, minutes, intensity and audience, and writes a one-line reason on your mission card." },
  { t: "A fixed rules table is the backup", d: "If the AI is slow or fails, a fixed rules table picks instead, so a mission always appears." },
  { t: "You preview the moves", d: "See the moves, the level and the coach first. Nothing starts until you swipe the Swipe to start bar." },
  { t: "The session fills your screen", d: "Your phone turns sideways. Each move has a timer, and you can pause or skip a move." },
  { t: "You say how it felt", d: "A finish screen asks how the session felt, and finished sessions add to your Recovery score." },
];

export default function CoachesPage() {
  return (
    <main>
      <PageHero
        title="Guided sessions, chosen for you"
        body="Each day, one coach video chosen for you. The AI only picks the video. It never sets your score and never makes the video."
      />

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 md:grid-cols-[0.7fr_1fr] md:gap-24">
          <Reveal>
            <div className="mx-auto w-full max-w-[290px] rounded-[44px] bg-ink p-[8px] shadow-[0_50px_100px_-30px_rgba(15,26,56,0.5)]">
              <div className="relative aspect-[780/1688] overflow-hidden rounded-[37px] bg-sky-2">
                <Image
                  src="/images/app/mission.webp"
                  alt="The mission preview in HealFitMe: Hips, back & neck reset, 10 minutes, with coach Maya"
                  fill
                  sizes="290px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2rem,3.8vw,3rem)]">How a session works</h2>
            </Reveal>
            <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {STEPS.map((s, i) => (
                <Reveal key={s.t} delay={i * 60}>
                  <li className="grid grid-cols-[auto_1fr] gap-x-6 py-6">
                    <span className="display text-[1.75rem] text-blue-deep">{i + 1}</span>
                    <div>
                      <h3 className="text-[1.25rem] tracking-tight">{s.t}</h3>
                      <p className="mt-1.5 text-ink-soft">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-white md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="display text-[clamp(2rem,3.8vw,3rem)]">What coaches do and do not do</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[18px] text-white/80">
              Coaches guide recovery sessions. They do not diagnose, treat or replace your doctor or physical
              therapist. HealFitMe gives recovery guidance, not medical advice.
            </p>
            <p className="mt-5 text-[15px] text-white/60">
              The session videos in the early-testing build are placeholders. We will introduce the coaches as we
              get closer to launch.
            </p>
            <div className="mt-8">
              <ArrowLink href="#waitlist" tone="light">
                Join early testing
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
