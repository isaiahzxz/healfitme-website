"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/product", label: "The app" },
  { href: "/coaches", label: "Coaches" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [openAt, setOpenAt] = useState<string | null>(null);
  // The mobile menu closes itself whenever the page changes.
  const open = openAt === pathname;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#waitlist"
        className="block bg-navy px-4 py-2 text-center text-[13px] text-white"
      >
        <span className="opacity-80">Coming soon.</span>{" "}
        <span className="font-medium underline underline-offset-4">
          Join the waitlist for early access
        </span>
      </a>

      <nav
        aria-label="Main"
        className={`mx-auto mt-3 flex w-[calc(100%-24px)] max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          solid
            ? "bg-white/85 text-ink shadow-[0_10px_40px_-15px_rgba(15,26,56,0.35)] backdrop-blur-xl"
            : "text-white"
        }`}
      >
        <Link href="/" aria-label="HealFitMe home">
          <Logo light={!solid} />
        </Link>

        <ul className="hidden items-center gap-9 text-[14px] md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 transition hover:opacity-100 ${
                    active ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href="#waitlist"
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] font-medium transition ${
              solid ? "bg-navy text-white hover:bg-navy-2" : "bg-white text-ink hover:bg-sky-2"
            }`}
          >
            <span className="sm:hidden">Join</span>
            <span className="hidden sm:inline">Join the waitlist</span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpenAt(open ? null : pathname)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="unlock-pop mx-3 mt-2 rounded-3xl bg-white p-3 text-ink shadow-xl md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-2xl px-4 py-3 text-[16px] hover:bg-mist"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
