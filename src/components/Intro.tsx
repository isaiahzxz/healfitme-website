import { Phone } from "./Phone";
import { Reveal } from "./Reveal";

const chip =
  "absolute hidden rounded-2xl bg-white/90 px-4 py-3 text-left shadow-[0_20px_50px_-20px_rgba(15,26,56,0.45)] backdrop-blur md:block";

export function Intro() {
  return (
    <section className="sky-gradient relative overflow-hidden px-6 pt-24 text-center md:pt-32">
      <Reveal>
        <h2 className="display mx-auto max-w-3xl text-[clamp(2.6rem,6.2vw,5.25rem)]">
          Know today.
          <br />
          <span className="text-blue-deep">Plan tomorrow.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-ink-soft">
          One calm screen that turns your health and activity data into a clear
          read on recovery, and one thing to do next.
        </p>
      </Reveal>
      <Reveal delay={150} className="relative mx-auto mt-14 h-[470px] max-w-[390px] sm:h-[620px]">
        <Phone maxW="max-w-[390px]" preload />
        <div className={`${chip} float-y -left-52 top-28`}>
          <p className="text-[12px] text-ink-soft">Recovery score</p>
          <p className="text-[22px] font-medium tracking-tight">83 &middot; Good</p>
        </div>
        <div className={`${chip} float-y -right-56 top-56`} style={{ animationDelay: "-2s" }}>
          <p className="text-[12px] text-ink-soft">Today&apos;s mission</p>
          <p className="text-[18px] font-medium tracking-tight">Ready to reveal</p>
        </div>
        <div className={`${chip} float-y -left-44 top-[22rem]`} style={{ animationDelay: "-4s" }}>
          <p className="text-[12px] text-ink-soft">Morning check-in</p>
          <p className="text-[18px] font-medium tracking-tight">5 quick questions</p>
        </div>
      </Reveal>
    </section>
  );
}
