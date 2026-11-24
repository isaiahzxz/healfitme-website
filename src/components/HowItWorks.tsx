import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Share what you have",
    body: "Connect a wearable if you use one, or just tell us how you train and feel. Both work.",
  },
  {
    n: "02",
    title: "See where you are",
    body: "HealFitMe turns your data into a clear recovery picture, and explains it in plain English.",
  },
  {
    n: "03",
    title: "Do the next thing",
    body: "Get today's actions and guided sessions. Check in with a coach when you want a human.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            Recovery in <span className="italic">three steps</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="border-t border-ink/15 pt-6">
                <p className="display text-5xl text-coral">{s.n}</p>
                <h3 className="mt-5 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Beyond() {
  return (
    <section className="bg-sand px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
          What&apos;s next
        </p>
        <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">
          This starts with an app.
          <br />
          <span className="italic">It won&apos;t end there.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
          As our community grows, we plan to bring physical recovery products
          into the mix, built around what members actually need. Early members
          help shape what we make.
        </p>
      </Reveal>
    </section>
  );
}
