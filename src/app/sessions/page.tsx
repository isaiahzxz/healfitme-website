import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES } from "@/lib/sessions";

export const metadata: Metadata = {
  title: "Browse sessions | HealFitMe",
  description:
    "Browse HealFitMe guided recovery sessions: mobility and stretching, post-training recovery, tired days, short sessions, breathwork, specific needs and sport-specific recovery.",
};

export default function SessionsPage() {
  return (
    <main className="bg-[#f3f3f3] px-6 pb-28 pt-40 text-ink md:pt-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h1 className="display text-[clamp(2.6rem,5.4vw,4.2rem)]">Browse sessions</h1>
          <p className="mt-5 max-w-3xl text-[clamp(1.05rem,1.5vw,1.3rem)] text-ink">
            Explore session categories to find recovery that matches your training, your time and your kit.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 70}>
              <li className="flex h-full flex-col rounded-[28px] bg-[#f8f8f8] p-8 shadow-[0_1px_0_rgba(0,0,0,0.03),0_18px_40px_-30px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.04]">
                <h2 className="text-[1.45rem] tracking-tight">{c.name}</h2>
                <p className="mt-3 flex-1 text-[17px] leading-relaxed text-ink-soft">{c.short}</p>
                <div className="mt-8 flex justify-end">
                  <Link
                    href={`/sessions/${c.slug}`}
                    className="rounded-full bg-white px-6 py-3.5 text-[16px] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.05] transition hover:bg-ink hover:text-white"
                  >
                    View sessions
                  </Link>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-14 max-w-2xl text-[15px] text-ink-soft">
            Each morning HealFitMe picks one session for you from this library, based on your score, your body, your
            kit and your time. The session library is still being filmed for early testing.
          </p>
        </Reveal>
      </div>
    </main>
  );
}
