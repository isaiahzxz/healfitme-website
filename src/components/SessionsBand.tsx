import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

export function SessionsBand() {
  return (
    <section className="bg-mist px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-24">
        <Reveal className="order-2 md:order-1">
          <h2 className="display text-[clamp(2.2rem,4.4vw,3.5rem)]">
            Guided sessions with real coaches
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Short mobility, breathing and reset sessions you can fit between
            everything else. We have not announced the coaches yet. People on the
            waitlist will hear first.
          </p>
          <div className="mt-8">
            <ArrowLink href="/coaches">About coach sessions</ArrowLink>
          </div>
        </Reveal>
        <Reveal delay={100} className="order-1 md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/images/reset.webp"
              alt="A coach helping a woman through a stretch"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[13px] text-ink-soft">Stock photo, used as a placeholder.</p>
        </Reveal>
      </div>
    </section>
  );
}
