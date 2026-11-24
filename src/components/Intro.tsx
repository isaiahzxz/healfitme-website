import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="bg-white px-6 pb-12 pt-40 md:pt-48">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
          Not another fitness app
        </p>
        <h2 className="display mt-5 text-[clamp(2rem,5vw,3.75rem)]">
          Most apps tell you what you did.
          <br />
          <span className="italic text-evergreen-2">
            We tell you what to do next.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
          Training, sleep, stress and soreness all shape how well you recover.
          HealFitMe pulls them into one clear picture and turns it into a
          simple daily plan, guided by real coaches.
        </p>
      </Reveal>
    </section>
  );
}
