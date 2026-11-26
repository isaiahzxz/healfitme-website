import { Reveal } from "./Reveal";

const POINTS = [
  { t: "The score is never AI", d: "Your Recovery score comes from a fixed formula, so it is repeatable and explainable." },
  { t: "The AI sees numbers only", d: "When it picks your mission, it gets categories and numbers, never your name, email or free text." },
  { t: "Wellness, not medical", d: "HealFitMe gives recovery guidance, not medical advice. It does not diagnose or treat anything." },
  { t: "Yours to delete", d: "Disconnecting stops new reads from your health data, and deleting your account removes all of it." },
];

export function Trust() {
  return (
    <section className="bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display max-w-[640px] text-[clamp(2.1rem,4.4vw,3.4rem)]">Built to keep your data yours</h2>
        </Reveal>
        <ul className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <li className="border-t border-white/20 pt-5">
                <h3 className="text-[1.5rem] leading-[1.15] tracking-[-0.3px]">{p.t}</h3>
                <p className="mt-3 text-[16px] leading-snug text-white/70">{p.d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-14 max-w-2xl text-[14px] text-white/55">
            Planned for early testing and launch in the EU and EEA, the UK, the US, Canada, Australia and New
            Zealand, with GDPR-level privacy for everyone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
