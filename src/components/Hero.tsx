import { Phone, TodayScreen } from "./Phone";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-scene grain relative isolate overflow-hidden text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-40 text-center md:pt-48">
        <h1 className="display max-w-4xl text-[clamp(3rem,9vw,6.5rem)]">
          Recovery,
          <br />
          <span className="italic">reimagined</span>
        </h1>
        <p className="mt-6 max-w-xl text-[clamp(1rem,2.2vw,1.2rem)] text-white/80">
          HealFitMe reads your health and activity data, then tells you exactly
          what to do next to recover better.
        </p>

        <a
          href="#waitlist"
          className="mt-9 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-ink shadow-lg transition hover:scale-[1.03] hover:bg-mint"
        >
          Join the waitlist
        </a>
        <p className="mt-4 text-[13px] text-white/70">
          Free early access. One email when we launch, nothing else.
        </p>

        <div className="float-slow relative mt-14 w-full max-w-[300px] translate-y-10">
          <Phone>
            <TodayScreen />
          </Phone>
        </div>
      </div>
    </section>
  );
}
