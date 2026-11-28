import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { SessionTypes } from "@/components/SessionTypes";
import { CATEGORIES, getCategory } from "@/lib/sessions";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return {};
  return { title: `${c.title} | HealFitMe`, description: c.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) notFound();

  return (
    <main className="bg-[#f3f3f3] px-6 pb-28 pt-36 text-ink md:pt-44">
      <div className="mx-auto max-w-[1200px]">
        <nav aria-label="Breadcrumb" className="text-[16px]">
          <Link href="/sessions" className="text-ink-soft transition hover:text-ink">
            Sessions
          </Link>
          <span className="px-2 text-ink-soft">/</span>
          <span aria-current="page">{c.name}</span>
        </nav>

        <Reveal>
          <h1 className="display mt-12 max-w-[1000px] text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.98]">{c.title}</h1>
          <p className="mt-8 max-w-[1050px] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed">{c.description}</p>
        </Reveal>

        <section className="mt-16">
          <h2 className="display text-[clamp(1.9rem,3.2vw,2.6rem)]">Session types</h2>
          <div className="mt-7">
            <SessionTypes types={c.types} />
          </div>
        </section>

        <hr className="mt-14 border-black/10" />

        <section className="mt-16">
          <h2 className="display text-[clamp(1.9rem,3.2vw,2.6rem)]">Sessions</h2>
          <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {c.sessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <li className="relative aspect-square overflow-hidden rounded-[32px] shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)]">
                  <Image
                    src={`/images/sessions/${s.img}.webp`}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(243,243,243,0.82)_38%,rgba(243,243,243,0.95))] px-7 pb-8 pt-16 backdrop-blur-[2px]">
                    <h3 className="text-[1.45rem] leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-[16px] text-ink">
                      {s.minutes} min · {c.label} · {s.kit}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="mt-24">
          <h2 className="display text-[clamp(1.9rem,3.2vw,2.6rem)]">Frequently asked questions about {c.name.toLowerCase()}</h2>
          <div className="mt-9 max-w-[900px] space-y-4">
            {c.faqs.map((f) => (
              <details
                key={f.q}
                className="faq-item group rounded-[28px] bg-[#f8f8f8] px-8 py-6 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.04]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition group-open:rotate-180"
                  >
                    <path d="M4 7l5 5 5-5" />
                  </svg>
                </summary>
                <p className="faq-answer mt-4 max-w-[760px] text-[17px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-20 flex flex-wrap gap-3">
          {CATEGORIES.filter((o) => o.slug !== c.slug).map((o) => (
            <Link
              key={o.slug}
              href={`/sessions/${o.slug}`}
              className="rounded-full bg-white px-5 py-2.5 text-[15px] ring-1 ring-black/[0.06] transition hover:bg-ink hover:text-white"
            >
              {o.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
