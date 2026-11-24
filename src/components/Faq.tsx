import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What is HealFitMe?",
    a: "An app that turns your health and activity data into a clearer picture of recovery, then gives you one useful next step each day.",
  },
  {
    q: "Do I need a wearable?",
    a: "No. You can check in with how you feel, or optionally connect your wearable and activity data. Both work.",
  },
  {
    q: "When does it launch?",
    a: "HealFitMe is in development and coming soon. Join the waitlist and we will email you when early access opens.",
  },
  {
    q: "How much will it cost?",
    a: "We haven't announced pricing yet. Waitlist members will hear first, well before anything is charged.",
  },
  {
    q: "Who are the coaches?",
    a: "Guided recovery sessions are led by real coaches. We will introduce them as we get closer to launch.",
  },
  {
    q: "What happens to my data?",
    a: "Your data is yours. We use it only to power your recovery picture, and we will explain exactly how in our privacy policy before launch.",
  },
  {
    q: "Is HealFitMe medical advice?",
    a: "No. HealFitMe is a wellness tool, not a medical service. If you have an injury or health condition, check with a clinician.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,5vw,3.75rem)]">
            Questions,
            <br />
            <span className="text-blue-deep">answered.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-2 text-xl text-blue-deep transition duration-300 group-open:rotate-45 group-open:bg-navy group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
