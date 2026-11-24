import Image from "next/image";
import { Reveal } from "./Reveal";

export function Guide() {
  return (
    <section className="relative isolate overflow-hidden bg-navy px-6 py-20 text-white md:py-28">
      <div aria-hidden="true" className="drift absolute -left-40 top-0 -z-10 h-[460px] w-[620px] rounded-full bg-blue/30 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,5vw,4.25rem)]">
            Say hello to your
            <br />
            <span className="text-sky">recovery guide</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/75">
            When you want a human, coaches turn your day into a short guided
            session. You check in, they walk you through it, and tomorrow starts
            a little clearer.
          </p>
          <a href="/coaches" className="mt-8 inline-block rounded-[14px] bg-white px-7 py-3.5 text-[15px] text-ink transition hover:bg-sky-2">
            Meet the coaches
          </a>
        </Reveal>
        <Reveal delay={150} className="relative mx-auto w-full max-w-[330px]">
          <div className="rounded-[48px] bg-[#0b1226] p-[10px] ring-1 ring-white/20">
            <div className="overflow-hidden rounded-[40px] bg-white text-ink">
              <div className="flex items-center gap-3 px-5 pb-3 pt-6">
                <span className="relative h-9 w-9 overflow-hidden rounded-full bg-sky-2">
                  <Image src="/images/coach-stretch.webp" alt="" fill sizes="36px" className="object-cover object-top" />
                </span>
                <div>
                  <p className="text-[15px] font-medium leading-tight">Your coach</p>
                  <p className="text-[12px] text-ink-soft">New session for today</p>
                </div>
              </div>
              <div className="relative mx-4 aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src="/images/coach-stretch.webp" alt="" fill sizes="320px" className="object-cover" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px]">8 min</span>
              </div>
              <div className="px-5 pb-5 pt-4 text-[14px]">
                <p className="w-fit rounded-2xl rounded-bl-md bg-sky-2 px-4 py-2.5">Nice work this week. Go easy on the hips today.</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-soft">Example message</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
