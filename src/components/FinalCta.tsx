import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section id="waitlist" className="bg-sky-2 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-xl">
        <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">Join the waitlist</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Tell us your email and we will let you know when early access opens.
          You can add your name and what you want most from the app if you like.
        </p>
        <div className="mt-8">
          <WaitlistForm variant="full" source="footer" />
          <p className="mt-4 text-[13px] text-ink-soft">
            We will only email you about HealFitMe.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
