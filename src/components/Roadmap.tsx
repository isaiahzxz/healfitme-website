import Image from "next/image";
import { Reveal } from "./Reveal";

/** An example profile, built from the questions the app asks during setup. */
const CARDS = [
  { t: "Training", items: ["Runs 3 days a week", "Strength on Tuesdays", "Trains in the morning"] },
  { t: "Time", items: ["10 minutes a day for recovery", "Never a longer session"] },
  { t: "Goal", items: ["Fresh legs for the next run", "Train for a 10K this spring"] },
  { t: "Kit", items: ["Yoga mat and foam roller", "Gym access twice a week"] },
  { t: "Injuries", items: ["Tight lower back", "Recovered from a knee injury"] },
  { t: "Health data", items: ["Apple Watch, through Apple Health"] },
];

export function Roadmap() {
  return (
    <section className="relative isolate overflow-hidden bg-[#2b2b2d] px-4 pb-24 pt-24 text-white md:px-6 md:pb-28 md:pt-28">
      <Image
        src="/images/roadmap.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 -scale-x-100 object-cover object-[40%_35%] grayscale-[65%]"
      />
      {/* Dark at the top for the heading, warm and lavender washes at the bottom, like future.co */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,20,22,0.62)_0%,rgba(20,20,22,0.35)_45%,rgba(20,20,22,0.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_0%_100%,rgba(196,120,72,0.45),transparent_70%),radial-gradient(60%_60%_at_100%_100%,rgba(150,140,220,0.45),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display max-w-[900px] text-[clamp(2.4rem,5.4vw,4.4rem)]">
            A recovery plan that&apos;s uniquely yours
          </h2>
          <p className="mt-6 max-w-[720px] text-[clamp(1.1rem,1.7vw,1.5rem)] leading-snug text-white/90">
            Recovery works best when it&apos;s made for you. Setup takes about a minute, and your answers shape
            every mission. Change them whenever your training does.
          </p>
          <a
            href="#waitlist"
            className="mt-9 inline-block rounded-[16px] bg-white px-8 py-4 text-[17px] text-ink transition hover:bg-sky-2"
          >
            Join early testing
          </a>
        </Reveal>

        <div className="mt-20 md:mt-28 lg:pl-[22%]">
          <Reveal className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white font-serif text-[1.9rem] text-ink shadow-lg">
              S
            </span>
            <span>
              <span className="block text-[1.9rem] leading-none tracking-tight">Sam</span>
              <span className="mt-1.5 block text-[15px] text-white/75">Example profile</span>
            </span>
          </Reveal>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {CARDS.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <li className="h-full rounded-[28px] bg-white/20 px-7 py-6 ring-1 ring-white/20 backdrop-blur-xl">
                  <h3 className="text-[1.5rem] font-medium leading-tight tracking-tight">{c.t}</h3>
                  <ul className="mt-3 space-y-1 text-[17px] text-white/90">
                    {c.items.map((it) => (
                      <li key={it}>+ {it}</li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
