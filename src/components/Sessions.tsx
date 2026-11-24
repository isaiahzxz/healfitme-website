import Image from "next/image";
import { Reveal } from "./Reveal";

const SESSIONS = [
  { name: "Mobility", meta: "8 min", img: "/images/mobility.webp", pos: "50% 40%", text: "Slow, easy range of motion. Nothing forced, nothing rushed." },
  { name: "Breathing", meta: "5 min", img: "/images/breathing.webp", pos: "50% 55%", text: "A quiet moment to breathe, with a coach setting the pace." },
  { name: "Guided reset", meta: "12 min", img: "/images/reset.webp", pos: "50% 45%", text: "Mobility and breath together, talked through start to finish." },
];

export function Sessions() {
  return (
    <section className="bg-white px-6 py-24 text-center md:py-32">
      <Reveal>
        <h2 className="display text-[clamp(2.4rem,5.6vw,4.75rem)]">Sessions that fit your day</h2>
        <p className="mt-4 text-[15px] text-ink-soft">
          5 questions &nbsp;&middot;&nbsp; 1 mission a day &nbsp;&middot;&nbsp; 0 wearables required
        </p>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {SESSIONS.map((s, i) => (
          <Reveal key={s.name} delay={i * 100}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[22px] bg-mist">
              <Image src={s.img} alt="" fill sizes="(min-width: 768px) 330px, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" style={{ objectPosition: s.pos }} />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(0,0,0,0.6),transparent)]" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-left text-white">
                <div>
                  <p className="text-[24px] tracking-tight">{s.name}</p>
                  <p className="text-[12px] text-white/75">{s.meta} &middot; example session</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-black/55 backdrop-blur">
                  <svg width="12" height="12" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                    <path d="M6 3.5v15l13-7.5z" />
                  </svg>
                </span>
              </div>
            </div>
            <p className="mx-auto mt-4 max-w-[280px] text-left text-[14px] leading-snug text-ink-soft">{s.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <a
          href="#waitlist"
          className="inline-block rounded-[14px] border border-ink/15 px-7 py-3.5 text-[15px] transition hover:bg-mist"
        >
          Join the waitlist
        </a>
      </Reveal>
    </section>
  );
}
