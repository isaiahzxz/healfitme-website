import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Phone } from "@/components/Phone";
import { CheckInDemo } from "@/components/product/CheckInDemo";
import { MissionDemo } from "@/components/product/MissionDemo";
import { PhoneExplorer } from "@/components/product/PhoneExplorer";
import { ScoreSlider } from "@/components/product/ScoreSlider";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The app | HealFitMe",
  description:
    "A look inside HealFitMe: a recovery score you can read in a second, a five-question morning check-in and one daily mission. Join the waitlist.",
};


const APP_FEATURES = [
  { tag: "Home", title: "Your day at a glance", body: "A recovery score for today (Rest, Watch or Good), your week on a simple curve, and what to do next." },
  { tag: "Check-in", title: "Five questions, every morning", body: "A quick check-in sets your score and your mission. No logging, no typing in numbers." },
  { tag: "Mission", title: "One daily mission", body: "A single practical thing to do, with the reason it was chosen. Reveal it when you're ready, or say not today." },
  { tag: "Quick Add", title: "Add what happened", body: "The + button in the middle of the tab bar lets you quickly add training or how you're feeling." },
  { tag: "Stats", title: "See how recovery trends", body: "Your recent days and patterns in one place, so you can see what's helping." },
  { tag: "Coach sessions", title: "Guided by real people", body: "Short guided sessions, like mobility, breathing and resets, led by real coaches." },
  { tag: "Club", title: "Recover with others", body: "Communities inside the app, so recovery doesn't have to be a solo thing." },
  { tag: "Recovery Wrapped", title: "A recap worth sharing", body: "A shareable look back at your recovery, built from your own data." },
  { tag: "Wearables", title: "Optional, never required", body: "Connect a wearable for a richer picture, or skip it and use the check-in alone." },
  { tag: "Profile", title: "Your account and settings", body: "Your details and your choices about data, in one tab." },
] as const;

export default function ProductPage() {
  return (
    <main>
      <PageHero
        eyebrow="The app"
        title={
          <>
            Everything recovery needs, <span className="text-sky">on one screen.</span>
          </>
        }
        body="HealFitMe turns your health and activity data into a clearer picture of recovery, and one useful next step. Here's what you'll see when you open it."
      >
        <div className="phone-enter mx-auto w-full max-w-[290px]" style={{ ["--tilt" as string]: "5deg" }}>
          <div className="float-y">
            <Phone preload />
          </div>
        </div>
      </PageHero>

      {/* Explorer */}
      <section className="sky-gradient relative overflow-clip px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
              The home screen
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,4.25rem)]">
              Take a look around.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              This is the real home screen. Pick any part to see what it does.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <PhoneExplorer />
          </Reveal>
        </div>
      </section>

      {/* Score */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
              The recovery score
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,4.25rem)]">
              Some days call for more.
              <br />
              <span className="text-blue-deep">Others, a little less.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              One number, one word. Rest, Watch or Good tells you how today looks
              before you plan it.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ScoreSlider />
          </Reveal>
        </div>
      </section>

      {/* Check-in */}
      <section className="relative isolate overflow-hidden bg-navy px-6 py-24 text-white md:py-32">
        <div
          aria-hidden="true"
          className="drift absolute -left-40 top-10 -z-10 h-[460px] w-[620px] rounded-full bg-blue/30 blur-[120px]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-sky/80">
              The morning check-in
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)]">
              A minute in the morning.
              <br />
              <span className="text-sky">A clearer day.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/75">
              Five quick questions set today&apos;s score and mission. No forms to
              fill, no data to type in. Just how you feel, honestly answered.
            </p>
            <p className="mt-4 max-w-md text-white/60">
              Give it a go. These are example questions, so tap whatever fits.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CheckInDemo />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-mist px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal className="order-2 md:order-1">
            <MissionDemo />
          </Reveal>
          <Reveal delay={100} className="order-1 md:order-2">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
              Today&apos;s mission
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)]">
              One thing.
              <br />
              <span className="text-blue-deep">Not twenty.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Your personalized daily mission turns recovery insight into one
              practical thing you can do, along with why it was chosen. Reveal it
              when you&apos;re ready.
            </p>
            <p className="mt-4 max-w-md text-ink-soft/80">
              Try the real flow on the left: reveal it, or say not today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Everything in the app */}
      <section className="sky-gradient px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
              Everything in the app
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)]">
              What&apos;s inside HealFitMe.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              A recovery app that tells you where you are and what to do next.
              HealFitMe is still in development, so details may change before launch.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {APP_FEATURES.map((f, i) => (
              <Reveal key={f.tag} delay={(i % 3) * 80}>
                <div className="h-full rounded-[28px] bg-white/80 p-7 ring-1 ring-ink/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white">
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-blue-deep">{f.tag}</p>
                  <h3 className="mt-3 text-[22px] font-medium leading-tight tracking-[-0.02em]">{f.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-soft">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wearables */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
              Your data, your choice
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)]">
              Bring your wearable.
              <br />
              <span className="text-blue-deep">Or don&apos;t.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
            <Reveal>
              <div className="h-full rounded-[32px] bg-mist p-8 ring-1 ring-ink/5 md:p-10">
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                  Path one
                </p>
                <h3 className="mt-3 text-[28px] font-medium leading-tight tracking-[-0.025em]">
                  Check in with how you feel
                </h3>
                <p className="mt-3 text-ink-soft">
                  Answer five quick questions each morning. It is everything
                  HealFitMe needs to get going.
                </p>
              </div>
            </Reveal>

            <div aria-hidden="true" className="hidden items-center md:flex">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-xl text-white">
                +
              </span>
            </div>

            <Reveal delay={100}>
              <div className="h-full rounded-[32px] bg-mist p-8 ring-1 ring-ink/5 md:p-10">
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                  Path two, optional
                </p>
                <h3 className="mt-3 text-[28px] font-medium leading-tight tracking-[-0.025em]">
                  Connect your wearable
                </h3>
                <p className="mt-3 text-ink-soft">
                  Add your wearable and activity data for a richer picture. You can
                  skip it, and add it later.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-5">
            <div className="rounded-[32px] bg-navy p-8 text-center text-white md:p-10">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-sky/80">
                Either way
              </p>
              <p className="display mt-3 text-[clamp(1.75rem,3.6vw,2.75rem)]">
                One clearer picture of your recovery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sky-2 px-6 py-16">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display text-[clamp(1.75rem,3.6vw,2.75rem)]">
            Want a human in your corner too?
          </p>
          <ArrowLink href="/coaches">Meet the coaches</ArrowLink>
        </Reveal>
      </section>

      <FinalCta />
    </main>
  );
}
