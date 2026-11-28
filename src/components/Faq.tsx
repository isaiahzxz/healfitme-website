import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";
import { FAQS, FEATURED_FAQ_IDS } from "@/lib/faq";

/** Home page teaser. The full, searchable list lives at /faq. */
export function Faq() {
  const items = FEATURED_FAQ_IDS.map((id) => FAQS.find((f) => f.id === id)).filter(
    (f): f is (typeof FAQS)[number] => Boolean(f),
  );

  return (
    <section id="faq" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,5vw,3.75rem)]">
            Common questions
          </h2>
          <div className="mt-8">
            <ArrowLink href="/faq">See every question</ArrowLink>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {items.map((f) => (
              <details key={f.id} className="faq-item group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-2 text-xl text-ink transition duration-300 group-open:rotate-45 group-open:bg-navy group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="faq-answer mt-3 max-w-xl text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
