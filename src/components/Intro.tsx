import { Phone } from "./Phone";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="overflow-hidden bg-black px-6 pt-24 text-center text-white md:pt-32">
      <Reveal>
        <h2 className="display text-[clamp(2.6rem,6.2vw,5.25rem)]">Together, we recover</h2>
      </Reveal>
      <Reveal delay={150} className="mx-auto mt-14 h-[460px] max-w-[380px] overflow-hidden sm:h-[600px]">
        <Phone maxW="max-w-[380px]" preload />
      </Reveal>
    </section>
  );
}
