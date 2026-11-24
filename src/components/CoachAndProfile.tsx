import { Phone } from "./Phone";
import { Reveal } from "./Reveal";

export function CoachCheckIn() {
  return (
    <section id="coaches" className="bg-sand px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Real coaches
          </p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.5rem)]">
            Software that knows the data.
            <br />
            <span className="italic">People who know you.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            The app does the number crunching. Coaches turn it into guidance you
            can trust: guided sessions, check-ins and a nudge when it matters.
          </p>
          <a
            href="#waitlist"
            className="mt-8 inline-block rounded-full bg-evergreen px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-evergreen-2"
          >
            Get early access
          </a>
        </Reveal>

        <Reveal delay={120}>
          <Phone>
            <div className="flex h-full flex-col bg-white px-4 pb-4 pt-12">
              <div className="flex items-center gap-3 border-b border-ink/10 pb-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-[13px] font-medium text-evergreen">
                  JM
                </span>
                <div>
                  <p className="text-[14px] font-medium">Coach Jordan</p>
                  <p className="text-[11px] text-ink-soft">Recovery coach</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-[13px] leading-snug">
                <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-sand px-3.5 py-2.5">
                  Saw your sleep dipped twice this week. Let&apos;s keep tomorrow
                  light and fix your wind-down. Sound good?
                </p>
                <p className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-evergreen px-3.5 py-2.5 text-white">
                  Yes please. Legs are heavy too.
                </p>
                <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-sand px-3.5 py-2.5">
                  Perfect. I&apos;ve swapped your run for a 12 min session.
                  Start it whenever you&apos;re ready.
                </p>
                <div className="max-w-[85%] rounded-2xl bg-evergreen/95 p-3 text-white">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-mint">
                    Guided session
                  </p>
                  <p className="mt-1 text-[13px] font-medium">
                    Down-regulate &middot; 12 min
                  </p>
                </div>
              </div>
            </div>
          </Phone>
        </Reveal>
      </div>
    </section>
  );
}

export function Profile() {
  const rows = [
    ["Wearable", "Optional. Connect one or skip it"],
    ["Training", "4 sessions a week, mostly strength"],
    ["Sleep", "Averaging 6h 50m"],
    ["Sore spots", "Left knee, lower back"],
    ["Goal", "Run a half marathon in spring"],
  ];
  return (
    <section className="hero-scene grain relative isolate overflow-hidden px-6 py-28 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-mint">
            Built around you
          </p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.5rem)]">
            Your recovery plan,
            <br />
            <span className="italic">not a template.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/80">
            Tell us about your training, your body and your goals once. Your plan
            adapts as your data and your life change.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[32px] bg-white/95 p-7 text-ink shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="display text-2xl">Sample profile</p>
              <span className="rounded-full bg-mint px-3 py-1 text-[12px] font-medium text-evergreen">
                Adapts daily
              </span>
            </div>
            <dl className="mt-5 divide-y divide-ink/10">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5 text-[15px]">
                  <dt className="text-ink-soft">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#waitlist"
              className="mt-4 block rounded-full bg-evergreen py-3.5 text-center text-[15px] font-medium text-white transition hover:bg-evergreen-2"
            >
              Build my plan: join the waitlist
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
