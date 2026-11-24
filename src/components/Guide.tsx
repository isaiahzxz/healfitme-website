import Image from "next/image";
import { Reveal } from "./Reveal";

export function Guide() {
  return (
    <section className="overflow-hidden bg-black px-6 pt-8 text-center text-white md:pt-16">
      <Reveal>
        <h2 className="display mx-auto max-w-3xl text-[clamp(2.4rem,5.4vw,4.5rem)]">
          Say hello to your
          <br />
          recovery guide
        </h2>
      </Reveal>
      <Reveal delay={150} className="relative mx-auto mt-14 h-[460px] max-w-[330px] sm:h-[560px]">
        <div className="rounded-[48px] bg-[#0b0b0b] p-[10px] ring-1 ring-white/25">
          <div className="overflow-hidden rounded-[40px] bg-white text-left text-ink">
            <div className="flex items-center gap-3 px-5 pb-3 pt-6">
              <span className="h-9 w-9 rounded-full bg-[#ddd]" aria-hidden="true" />
              <div>
                <p className="text-[15px] font-medium leading-tight">Your coach</p>
                <p className="text-[12px] text-ink-soft">New session for today</p>
              </div>
            </div>
            <div className="relative mx-4 aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src="/images/coach-reset.webp" alt="" fill sizes="320px" className="object-cover" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px]">8 min</span>
            </div>
          </div>
        </div>
        <div className="absolute -right-2 bottom-24 w-[230px] rounded-2xl bg-white/95 p-4 text-left text-[15px] leading-snug text-ink shadow-2xl backdrop-blur sm:-right-24 sm:w-[260px]">
          Nice work this week. Go easy on the hips today. Here&apos;s a short reset.
          <span className="mt-2 block text-[11px] uppercase tracking-[0.14em] text-ink-soft">Example message</span>
        </div>
      </Reveal>
    </section>
  );
}
