import Image from "next/image";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section
      id="waitlist"
      className="relative isolate overflow-hidden bg-navy px-6 py-28 text-white md:py-40"
    >
      <Image src="/images/reset.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(15,26,56,0.55)]" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-sky">
          Your next good move starts here
        </p>
        <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.25rem)]">
          Make room
          <br />
          for recovery.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-white/85">
          Be first to hear what&apos;s next for HealFitMe. A more personal approach
          to recovery is on its way.
        </p>
        <div className="mt-10">
          <WaitlistForm variant="full" source="footer" />
          <p className="mt-4 text-[13px] text-white/75">
            Just your email. Only HealFitMe updates.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
