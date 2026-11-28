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
      {/* Phones: the photo sits at a normal size at the top and fades into navy, instead of being blown up to fill a tall footer. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20 h-[560px] md:inset-0 md:h-auto">
        <Image src="/images/reset.webp" alt="" fill sizes="100vw" className="object-cover object-[50%_30%]" />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[linear-gradient(180deg,rgba(15,26,56,0.35)_0%,rgba(15,26,56,0.6)_60%,#0f1a38_100%)] md:inset-0 md:h-auto md:bg-[linear-gradient(180deg,rgba(15,26,56,0.55)_0%,rgba(15,26,56,0.7)_55%,rgba(15,26,56,0.92)_100%)]" />

      <div className="mx-auto flex max-w-[1200px] flex-col justify-end px-6 pb-8 pt-64 md:min-h-[900px] md:pt-40">
        <Reveal>
          <h2 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.95]">Join early testing</h2>
          <p className="mt-5 max-w-lg text-[18px] text-white/85">
            Sign up and we will email you when early testing opens on iPhone.
          </p>
          <div className="mt-8 max-w-xl">
            <WaitlistForm source="footer" />
            <p className="mt-4 text-[13px] text-white/70">We will only email you about HealFitMe.</p>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-12 md:grid-cols-[1fr_1fr_1fr_1.2fr]">
          <nav aria-label="Learn">
            <p className="text-[26px] tracking-tight">Learn</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
              <li><Link href="/product" className="inline-block py-1.5 hover:text-white">The app</Link></li>
              <li><Link href="/sessions" className="inline-block py-1.5 hover:text-white">Sessions</Link></li>
              <li><Link href="/faq" className="inline-block py-1.5 hover:text-white">FAQ</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-[26px] tracking-tight">Company</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
              <li><Link href="/privacy" className="inline-block py-1.5 hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="inline-block py-1.5 hover:text-white">Terms</Link></li>
              <li><a href="#waitlist" className="inline-block py-1.5 hover:text-white">Early testing</a></li>
            </ul>
          </nav>
          <div />
          <div className="md:justify-self-end md:text-right">
            <Logo light className="h-7 md:ml-auto" />
            <p className="mt-4 text-[15px] text-white/80">Coming soon to iOS.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-[12px] uppercase tracking-[0.08em] text-white/60 md:flex-row md:justify-between">
          <p>&copy; {year} HealFitMe. All rights reserved.</p>
          <p className="normal-case tracking-normal">HealFitMe is a wellness tool and does not provide medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
