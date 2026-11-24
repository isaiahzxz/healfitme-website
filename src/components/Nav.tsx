"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#story", label: "The app" },
  { href: "#coaches", label: "Coaches" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#top" aria-label="HealFitMe home">
          <Logo light={!solid} />
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
            onClick={() => setOpen((o) => !o)}
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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[16px] hover:bg-mist"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
