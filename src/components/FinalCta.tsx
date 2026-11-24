import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section
      id="waitlist"
      className="sky-gradient relative isolate overflow-hidden px-6 py-28 md:py-40"
    >
      <div
        aria-hidden="true"
        className="drift absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-lav/80 blur-[90px]"
      />
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-blue-deep">
          Your next good move starts here
        </p>
        <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.25rem)]">
          Make room
          <br />
          for recovery.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-ink-soft">
          Be first to hear what&apos;s next for HealFitMe. A more personal approach
          to recovery is on its way.
        </p>
        <div className="mt-10">
          <WaitlistForm variant="full" source="footer" />
          <p className="mt-4 text-[13px] text-ink-soft">
            Just your email. Only HealFitMe updates.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
