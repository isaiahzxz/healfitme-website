import { ArrowLink } from "./ArrowLink";
import { Phone } from "./Phone";
import { Reveal } from "./Reveal";

const PARTS = [
  ["Recovery score", "Rest, Watch or Good, with a plain-language reason."],
  ["Morning check-in", "Five questions that set your score and your mission."],
  ["Daily mission", "One practical suggestion each day. Reveal it or skip it."],
  ["Wearable", "Optional. Connect one for more detail, or use the check-in alone."],
] as const;

export function Overview() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal className="rounded-[28px] bg-sky-2 px-6 pt-12 md:px-16">
          <div className="mx-auto h-[460px] max-w-[300px] overflow-hidden">
            <Phone />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display text-[clamp(2.2rem,4.4vw,3.5rem)]">
            Your day, on one screen
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            The home screen shows how recovered you are today and what to do
            about it. This is the real app screen from our current build.
          </p>
          <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {PARTS.map(([t, d]) => (
              <div key={t} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                <dt className="font-medium">{t}</dt>
                <dd className="text-ink-soft">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ArrowLink href="/product">See how the app works</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
