"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#coaches", label: "Coaches" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#waitlist"
        className="block bg-mint/95 px-4 py-2 text-center text-[13px] font-medium text-evergreen"
      >
        Early access is opening soon. Join the waitlist &rarr;
      </a>
      <nav
        aria-label="Main"
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 text-ink shadow-[0_8px_30px_-12px_rgba(0,0,0,0.3)] backdrop-blur-md"
            : "text-white"
        }`}
      >
        <a href="#top" aria-label="HealFitMe home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 text-[14px] md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-85 transition hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition ${
              scrolled
                ? "bg-evergreen text-white hover:bg-evergreen-2"
                : "bg-white text-ink hover:bg-white/90"
            }`}
          >
            Join the waitlist
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl bg-white p-3 text-ink shadow-xl md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[16px] hover:bg-sand"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
