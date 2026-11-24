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

  const dark = !solid && !open;
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#waitlist"
        className="block bg-[linear-gradient(90deg,#f6f1ea,#e7ebf8)] px-4 py-2 text-center text-[13px] text-ink"
      >
        <span className="opacity-70">Coming soon.</span>{" "}
        <span className="underline underline-offset-4">Join the waitlist for early access</span>
      </a>

      <nav
        aria-label="Main"
        className={`flex items-center justify-between px-5 md:grid md:grid-cols-[1fr_auto_1fr] py-3 transition-colors duration-500 md:px-10 ${
          solid ? "bg-white text-ink" : "text-white"
        }`}
      >
        <div className="hidden md:block" />
        <Link href="/" aria-label="HealFitMe home" className="justify-self-start md:justify-self-center">
          <Logo light={dark} />
        </Link>

        <div className="flex items-center justify-self-end gap-1 md:gap-8">
          <ul className="hidden items-center gap-8 text-[16px] md:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition hover:opacity-100 ${active ? "opacity-100" : "opacity-75"}`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="#waitlist"
            className={`whitespace-nowrap rounded-[14px] px-5 py-3 text-[15px] transition ${
              solid ? "bg-navy text-white hover:bg-navy-2" : "bg-white/95 text-ink hover:bg-white"
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="unlock-pop mx-3 mt-1 rounded-[20px] bg-white p-3 text-ink shadow-xl md:hidden">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="block rounded-xl px-4 py-3 text-[17px] hover:bg-mist">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
