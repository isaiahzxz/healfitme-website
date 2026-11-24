import { Phone } from "./Phone";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="bg-white px-6 pt-24 text-center md:pt-32">
      <Reveal>
        <h2 className="display mx-auto max-w-3xl text-[clamp(2.4rem,5.4vw,4.5rem)]">
          Your recovery on one screen
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-ink-soft">
          This is the real home screen from our current build: today&apos;s score,
          the morning check-in and your daily mission.
        </p>
      </Reveal>
      <div className="mx-auto mt-14 max-w-[900px] rounded-t-[36px] bg-sky-2 px-6 pt-14">
        <Reveal className="mx-auto h-[460px] max-w-[360px] overflow-hidden sm:h-[560px]">
          <Phone maxW="max-w-[360px]" preload />
        </Reveal>
      </div>
    </section>
  );
}
