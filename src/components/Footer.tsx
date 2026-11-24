import Link from "next/link";
import { Logo } from "./Logo";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="bg-white px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-7" />
            <p className="mt-4 max-w-xs text-[15px] text-ink-soft">
              Recovery, made personal. Know what your body needs today, and what to do next.
            </p>
            <a
              href="#waitlist"
              className="mt-6 inline-block rounded-full bg-navy px-6 py-3 text-[14px] font-medium text-white transition hover:bg-navy-2"
            >
              Join the waitlist
            </a>
            <p className="mt-5 text-[13px] text-ink-soft">Coming soon to iPhone and Android.</p>
          </div>

          <nav aria-label="Product">
            <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft">Product</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><Link href="/product" className="hover:text-blue-deep">The app</Link></li>
              <li><Link href="/coaches" className="hover:text-blue-deep">Coaches</Link></li>
              <li><Link href="/faq" className="hover:text-blue-deep">FAQ</Link></li>
              <li><a href="#waitlist" className="hover:text-blue-deep">Waitlist</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft">Company</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><Link href="/privacy" className="hover:text-blue-deep">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-deep">Terms</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-6 text-[13px] text-ink-soft md:flex-row md:justify-between">
          <p>&copy; {year} HealFitMe. All rights reserved.</p>
          <p>HealFitMe is a wellness tool and does not provide medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
