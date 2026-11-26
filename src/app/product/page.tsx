import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { PageHero } from "@/components/PageHero";
import { PhoneVideo } from "@/components/PhoneVideo";
import { Reveal } from "@/components/Reveal";
import { Score } from "@/components/Score";
import { Trust } from "@/components/Trust";

export const metadata: Metadata = {
  title: "The app | HealFitMe",
  description:
    "Every part of the HealFitMe iPhone app: the setup, Home, your Recovery score, the daily mission, guided sessions, Stats, Club and Profile.",
};

interface Area {
  id: string;
  title: string;
  body: string;
  shots: { src: string; alt: string }[];
}

const AREAS: Area[] = [
  {
    id: "setup",
    title: "Set up in about a minute",
    body: "A first-run flow of about 60 seconds. It asks your name and birth year, your activities and training days, your goal, the time you have for recovery, your injuries and kit, then Apple Health and reminders. It ends on a building-your-profile screen that leads into your first check-in. There is no starting score: the first check-in gives it.",
    shots: [
      { src: "intro-1", alt: "Setup step 1: what should we call you" },
      { src: "intro-5", alt: "Setup step 5: time for recovery each day" },
      { src: "intro-8", alt: "Setup step 8: add your health data" },
    ],
  },
  {
    id: "home",
    title: "Home",
    body: "A blue band shows your Recovery score as a large number out of 100, a word for how you are doing and the change since yesterday. Below it sit the week at a glance, a quick check-in, a card to finish your profile if you skipped answers, and today's mission. Connect a wearable and sleep, resting heart rate and HRV appear too.",
    shots: [
      { src: "home-before", alt: "Home before the morning check-in" },
      { src: "home-after", alt: "Home after the check-in, with a score of 83 and today's mission" },
    ],
  },
  {
    id: "mission",
    title: "Today's mission",
    body: "Your mission is revealed on Home. Start guided session opens a preview with the moves, the level and the coach, and nothing starts until you swipe the Swipe to start bar. Tap Not today to skip it, with Undo and a Try a shorter one option.",
    shots: [{ src: "mission", alt: "Mission preview with the moves, level and coach" }],
  },
  {
    id: "session",
    title: "Guided session",
    body: "The guided workout turns your phone sideways and fills the screen. Each move has a timer, and you can pause or skip a move. If you leave halfway, the app asks Stop session? A finish screen asks how it felt. The videos in the early build are placeholders.",
    shots: [],
  },
  {
    id: "stats",
    title: "Stats",
    body: "In order: Recovery score, Recovery trend, resting heart rate and HRV, sleep duration and consistency, sleep quality, steps, active minutes, training load, missions completed and completion rate, then your own logs of weight and meals. Heart, sleep quality and training load show only with a connected wearable, and Steps shows N/A without one.",
    shots: [{ src: "stats", alt: "The Stats screen with the Recovery trend, sleep, steps and training load" }],
  },
  {
    id: "club",
    title: "Club",
    body: "One club at a time. Join, switch (with a confirm) or leave. Each club shows its posts and its weekly challenge. The clubs are Runners, Athletes, Gym & Strength, Office workers, Students, and Adventurers & travelers.",
    shots: [
      { src: "club", alt: "The Club tab with the Runners club" },
      { src: "club-runners", alt: "The Runners club page with this week's challenge" },
    ],
  },
  {
    id: "profile",
    title: "Profile",
    body: "You, inside a ring of this month's check-ins, then three stats, then your Account and Support lists. The pencil opens Edit profile, one page with every answer the setup asked. Devices shows what is read from Apple Health, and Privacy and data explains what is saved.",
    shots: [
      { src: "profile", alt: "The Profile screen" },
      { src: "devices", alt: "Profile devices: what is read from Apple Health" },
      { src: "privacy", alt: "Profile privacy and data" },
    ],
  },
];

export default function ProductPage() {
  return (
    <main>
      <PageHero
        title="What you see when you open HealFitMe"
        body="A Recovery score, a five-question check-in and one mission a day. These are the screens in our current early-testing build, which runs on demo data."
      >
        <div className="mx-auto w-full max-w-[290px]">
          <PhoneVideo
            name="app-walkthrough"
            poster="/video/poster-app.webp"
            label="A walkthrough of the HealFitMe app"
          />
        </div>
      </PageHero>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] space-y-24 md:space-y-32">
          {AREAS.map((a, i) => (
            <Reveal key={a.id}>
              <article
                id={a.id}
                className={`grid items-center gap-10 md:gap-16 ${
                  a.shots.length ? "md:grid-cols-2" : "md:grid-cols-1"
                }`}
              >
                <div className={i % 2 && a.shots.length ? "md:order-2" : ""}>
                  <h2 className="display text-[clamp(2rem,3.8vw,3rem)]">{a.title}</h2>
                  <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">{a.body}</p>
                </div>
                {a.shots.length > 0 && (
                  <div className={`flex justify-center gap-4 ${i % 2 ? "md:order-1" : ""}`}>
                    {a.shots.map((s) => (
                      <div
                        key={s.src}
                        className="w-full max-w-[200px] flex-1 rounded-[26px] bg-ink p-[5px] shadow-[0_30px_60px_-30px_rgba(15,26,56,0.5)] first:max-w-[220px] only:max-w-[270px]"
                      >
                        <div className="relative aspect-[780/1688] overflow-hidden rounded-[21px] bg-sky-2">
                          <Image
                            src={`/images/app/${s.src}.webp`}
                            alt={s.alt}
                            fill
                            sizes="270px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
          <Reveal>
            <p className="max-w-2xl text-[17px] text-ink-soft">
              Also in the app: a notifications panel, a six-card Recovery Wrapped you can share, and sign-up, log-in
              and account screens.
            </p>
          </Reveal>
        </div>
      </section>

      <Score photo={false} />
      <Trust />

      <section className="bg-sky-2 px-6 py-16">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display text-[clamp(1.75rem,3.6vw,2.5rem)]">Want to try it?</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="#waitlist">Join early testing</ArrowLink>
            <ArrowLink href="/faq">Read the FAQ</ArrowLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
