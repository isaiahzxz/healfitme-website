import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
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
  { tag: "Home", body: "Today's recovery score (Rest, Watch or Good), your week on a simple curve, and what to do next." },
  { tag: "Check-in", body: "Five questions each morning that set your score and your mission." },
  { tag: "Mission", body: "One practical suggestion a day, with the reason it was chosen. Reveal it, or choose not today." },
  { tag: "Quick Add", body: "The + button in the middle of the tab bar lets you add training or how you feel." },
  { tag: "Stats", body: "Your recent days and patterns in one place." },
  { tag: "Coach sessions", body: "Short guided sessions such as mobility, breathing and resets, led by coaches." },
  { tag: "Club", body: "Communities inside the app." },
  { tag: "Recovery Wrapped", body: "A shareable recap of your recovery, built from your own data." },
  { tag: "Wearables", body: "Optional. Connect one for more detail, or use the check-in alone." },
  { tag: "Profile", body: "Your details and your data choices." },
] as const;

export default function ProductPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            What you see when you open HealFitMe
          </>
        }
        body="A recovery score, a five-question check-in and one daily mission. Below is how each part works, using the real home screen from our current build."
      >
        <div className="phone-enter mx-auto w-full max-w-[290px]" style={{ ["--tilt" as string]: "5deg" }}>
          <div >
            <Phone preload />
          </div>
        </div>
      </PageHero>

      {/* Explorer */}
      <section className="sky-gradient relative overflow-clip px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              The home screen
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Select any part of the screen to see what it does.
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
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              Your recovery score
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              The score is a number from 0 to 100 with a label: Rest, Watch or Good.
              Drag the slider to see how each range reads.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ScoreSlider />
          </Reveal>
        </div>
      </section>

      {/* Check-in */}
      <section className="relative isolate overflow-hidden bg-navy px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              The morning check-in
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/75">
              Five short questions set today&apos;s score and mission. There is nothing to log or type in.
            </p>
            <p className="mt-4 max-w-md text-white/60">
              These are example questions. Tap any answer to try it.
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
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              Today&apos;s mission
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Each day you get one practical suggestion and the reason it was chosen. You can reveal it or skip it.
            </p>
            <p className="mt-4 max-w-md text-ink-soft/80">
              Try it on the left.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Everything in the app */}
      <section className="sky-gradient px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              Everything in the app
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              HealFitMe is still in development, so this list may change before launch.
            </p>
          </Reveal>
          <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {APP_FEATURES.map((f) => (
              <div key={f.tag} className="grid gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-8">
                <dt className="font-medium">{f.tag}</dt>
                <dd className="text-ink-soft">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Wearables */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              Wearables are optional
            </h2>
          </Reveal>

          <div className="mt-10 grid max-w-3xl gap-8 text-lg text-ink-soft md:grid-cols-2">
            <p>
              <span className="block font-medium text-ink">With the check-in only</span>
              Answer five questions each morning. That is everything HealFitMe
              needs to give you a score and a mission.
            </p>
            <p>
              <span className="block font-medium text-ink">With a wearable</span>
              Connect your wearable and activity data for more detail. You can
              skip this and add it later.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-2 px-6 py-16">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display text-[clamp(1.75rem,3.6vw,2.75rem)]">
            Want a coach as well?
          </p>
          <ArrowLink href="/coaches">Meet the coaches</ArrowLink>
        </Reveal>
      </section>

    </main>
  );
}
