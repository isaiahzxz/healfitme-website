import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What is HealFitMe?",
    a: "An AI-powered recovery app. It looks at your health and activity data, works out where your body is at, and gives you clear daily actions to recover better.",
  },
  {
    q: "Do I need a wearable?",
    a: "No. You can connect one if you have it, but HealFitMe also works from what you tell us about your training, sleep and how you feel.",
  },
  {
    q: "When does it launch?",
    a: "We are opening early access to the waitlist in stages. Join now and we will email you when your spot is ready.",
  },
  {
    q: "How much will it cost?",
    a: "Early access is free. We will share pricing well before anything is charged, and waitlist members will hear first.",
  },
  {
    q: "Who are the coaches?",
    a: "Real coaches lead guided recovery sessions in the app. We will introduce them as we launch.",
  },
  {
    q: "What happens to my data?",
    a: "Your health data is yours. We only use it to power your recovery plan, and we will explain exactly how in our privacy policy before launch.",
  },
  {
    q: "Is HealFitMe medical advice?",
    a: "No. HealFitMe is a wellness tool, not a medical service. If you have an injury or health condition, check with a clinician.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
            Questions, <span className="italic">answered</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand text-xl transition group-open:rotate-45"
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
