import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer id="waitlist" className="relative isolate overflow-hidden bg-navy text-white">
      <Image src="/images/reset.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,26,56,0.55)_0%,rgba(15,26,56,0.7)_55%,rgba(15,26,56,0.92)_100%)]" />

      <div className="mx-auto flex min-h-[900px] max-w-[1200px] flex-col justify-end px-6 pb-8 pt-40">
        <Reveal>
          <h2 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.95]">Find your recovery</h2>
          <p className="mt-5 max-w-md text-[18px] text-white/85">
            Be first to hear what&apos;s next for HealFitMe. Join the waitlist for early access.
          </p>
          <div className="mt-8 max-w-xl">
            <WaitlistForm variant="full" source="footer" />
            <p className="mt-4 text-[13px] text-white/70">Just your email. Only HealFitMe updates.</p>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-12 md:grid-cols-[1fr_1fr_1fr_1.2fr]">
          <nav aria-label="Learn">
            <p className="text-[26px] tracking-tight">Learn</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
              <li><Link href="/product" className="hover:text-white">The app</Link></li>
              <li><Link href="/coaches" className="hover:text-white">Coaches</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-[26px] tracking-tight">Company</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><a href="#waitlist" className="hover:text-white">Waitlist</a></li>
            </ul>
          </nav>
          <div />
          <div className="md:justify-self-end md:text-right">
            <Logo light className="h-7 md:ml-auto" />
            <p className="mt-4 text-[15px] text-white/80">Coming soon to iPhone and Android</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-[11px] uppercase tracking-[0.08em] text-white/60 md:flex-row md:justify-between">
          <p>&copy; {year} HealFitMe. All rights reserved.</p>
          <p className="normal-case tracking-normal">HealFitMe is a wellness tool and does not provide medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
