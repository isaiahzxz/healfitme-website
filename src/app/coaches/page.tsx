import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SessionTabs } from "@/components/coaches/SessionTabs";
import { FAQS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Coaches | HealFitMe",
  description:
    "Guided recovery sessions from real coaches. Short, achievable and matched to how your body is today. Join the HealFitMe waitlist.",
};

const DAY = [
  {
    when: "Morning",
    title: "You check in",
    body: "Five quick questions about how you feel set the tone for the day.",
  },
  {
    when: "Right after",
    title: "You see your score and mission",
    body: "Rest, Watch or Good, plus one useful thing to do, with the reason it was chosen.",
  },
  {
    when: "When it fits",
    title: "A coach guides you through it",
    body: "A short session, talked through start to finish, so you are never guessing.",
  },
  {
    when: "Tomorrow",
    title: "You check in again",
    body: "Your next check-in tells HealFitMe how today went, and the cycle continues.",
  },
];

const IS = [
  "Real people leading short, guided recovery sessions",
  "Matched to how your body is today",
  "Calm, clear and easy to follow",
  "Built to fit into a real day",
];

const ISNT = [
  "Medical advice, diagnosis or treatment",
  "A replacement for your doctor or physical therapist",
  "A hard sell or a long program to commit to",
  "A reason to push through pain",
];

export default function CoachesPage() {
  const coachFaqs = FAQS.filter((f) => f.category === "coaches");

  return (
    <main>
      <PageHero
        title={
          <>
            Guided sessions with real coaches
          </>
        }
        body="The app works out how recovered you are. Coaches lead short guided sessions, such as mobility and breathing, to act on it. Coaches have not been announced yet."
      >
        <div className="phone-enter mx-auto w-full max-w-sm" style={{ ["--tilt" as string]: "-2deg" }}>
          <div className="rounded-[36px] bg-white/10 p-4 ring-1 ring-white/20 ">
            <div className="relative isolate grid aspect-square place-items-center overflow-hidden rounded-[28px] bg-navy">
              <Image src="/images/reset.webp" alt="" fill preload sizes="384px" className="-z-20 object-cover" />
              <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(63,107,208,0.5)_0%,rgba(15,26,56,0.5)_100%)]" />
              <span aria-hidden="true" className="breathe absolute h-56 w-56 rounded-full bg-white/25" />
              <span aria-hidden="true" className="breathe absolute h-36 w-36 rounded-full bg-white/40" style={{ animationDelay: "0.25s" }} />
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-navy shadow-xl">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                  <path d="M6 3.5v15l13-7.5z" />
                </svg>
              </span>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-ink">
                12 min
              </span>
            </div>
            <div className="px-3 pb-2 pt-4">
              <p className="text-[18px] font-medium tracking-tight">A 12-minute guided reset</p>
              <p className="text-[14px] text-white/65">Led by a real coach. Example session.</p>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Sessions */}
      <section className="sky-gradient relative overflow-clip px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              Example sessions
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Pick a session type and press play to see how sessions will work. These are demos, not real recordings.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <SessionTabs />
          </Reveal>
        </div>
      </section>

      {/* Day flow */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              How coaches fit in
            </h2>
          </Reveal>

          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-ink/10 max-md:block md:left-0 md:top-[19px] md:h-px md:w-full"
            />
            {DAY.map((d, i) => (
              <li key={d.title} className="relative pl-14 md:pl-0 md:pt-14">
                <Reveal delay={i * 110}>
                  <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-navy text-[14px] font-medium text-white">
                    {i + 1}
                  </span>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-blue-deep">
                    {d.when}
                  </p>
                  <h3 className="mt-2 text-[22px] font-medium leading-tight tracking-[-0.02em]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{d.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Is / isn't */}
      <section className="relative isolate overflow-hidden bg-navy px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              What coaches do and don&apos;t do
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[32px] bg-white/10 p-8 ring-1 ring-white/15 md:p-10">
                <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-sky">
                  A coach is
                </p>
                <ul className="mt-5 space-y-4 text-[17px]">
                  {IS.map((t) => (
                    <li key={t} className="flex gap-3">
                      <svg className="mt-1 shrink-0 text-sky" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3.5 9.5l3.5 3.5 7.5-8" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-[32px] bg-white/5 p-8 ring-1 ring-white/10 md:p-10">
                <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/60">
                  A coach isn&apos;t
                </p>
                <ul className="mt-5 space-y-4 text-[17px] text-white/80">
                  {ISNT.map((t) => (
                    <li key={t} className="flex gap-3">
                      <svg className="mt-1 shrink-0 text-white/50" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coach placeholders */}
      <section className="bg-mist px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              Coaches
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              We have not announced the coaches yet. People on the waitlist will hear first.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { n: "Mobility coach", img: "/images/coach-mobility.webp", pos: "50% 30%" },
              { n: "Breathing coach", img: "/images/coach-breath.webp", pos: "50% 40%" },
              { n: "Guided reset coach", img: "/images/coach-reset.webp", pos: "50% 50%" },
            ].map(({ n, img, pos }, i) => (
              <Reveal key={n} delay={i * 100}>
                <div className="rounded-[32px] bg-white p-6 ring-1 ring-ink/5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sky-2">
                    <Image src={img} alt="" fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" style={{ objectPosition: pos }} />
                  </div>
                  <p className="mt-5 text-[20px] font-medium tracking-tight">{n}</p>
                  <p className="text-ink-soft">To be announced &middot; stock photo</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coach FAQs */}
      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
              Questions about coaches
            </h2>
            <ArrowLink href="/faq">See every question</ArrowLink>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coachFaqs.map((f, i) => (
              <Reveal key={f.id} delay={i * 80}>
                <div className="h-full rounded-[28px] bg-mist p-7 ring-1 ring-ink/5">
                  <h3 className="text-[19px] font-medium tracking-tight">{f.q}</h3>
                  <p className="mt-2 text-ink-soft">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
