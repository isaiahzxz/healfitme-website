import { Logo } from "./Logo";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="bg-evergreen px-6 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] text-white/65">
              AI-powered recovery. Know where you are, and exactly what to do next.
            </p>
            <a
              href="#waitlist"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-mint"
            >
              Join the waitlist
            </a>
          </div>

          <nav aria-label="Learn">
            <p className="text-[12px] uppercase tracking-[0.16em] text-white/50">Learn</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><a href="#how" className="text-white/80 hover:text-white">How it works</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white">Features</a></li>
              <li><a href="#coaches" className="text-white/80 hover:text-white">Coaches</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white">FAQ</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="text-[12px] uppercase tracking-[0.16em] text-white/50">Company</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><a href="/privacy" className="text-white/80 hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="text-white/80 hover:text-white">Terms</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/50 md:flex-row md:justify-between">
          <p>&copy; {year} HealFitMe. All rights reserved.</p>
          <p>HealFitMe is a wellness tool and does not provide medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
