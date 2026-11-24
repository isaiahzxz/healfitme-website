import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ | HealFitMe",
  description:
    "Answers about HealFitMe: how the recovery score works, whether you need a wearable, what coaches do, your data, launch and pricing.",
};

export default function FaqPage() {
  // Structured data so search engines can show these as rich answers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        align="center"
        eyebrow="FAQ"
        title={
          <>
            Questions,
            <br />
            <span className="text-sky">answered.</span>
          </>
        }
        body="Everything we can tell you about HealFitMe right now, and honest notes on what we haven't decided yet."
      />

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <FaqExplorer />
          </Reveal>
        </div>
      </section>

      <section className="bg-sky-2 px-6 py-16">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display text-[clamp(1.75rem,3.6vw,2.5rem)]">Want to see it for yourself?</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="/product">Look inside the app</ArrowLink>
            <ArrowLink href="/coaches">Meet the coaches</ArrowLink>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
