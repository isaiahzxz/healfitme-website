"use client";

import { useMemo, useState } from "react";
import { FAQ_CATEGORIES, FAQS, type FaqCategory } from "@/lib/faq";

export function FaqExplorer() {
  const [category, setCategory] = useState<FaqCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>("what");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(
      (f) =>
        (category === "all" || f.category === category) &&
        (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-[14px] font-medium transition ${
      active ? "bg-navy text-white" : "bg-white text-ink ring-1 ring-ink/10 hover:bg-sky-2"
    }`;

  return (
    <div>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-soft"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13.5 13.5L17 17" />
        </svg>
        <label className="block">
          <span className="sr-only">Search the questions</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions"
            className="w-full rounded-full border border-ink/10 bg-white py-4 pl-14 pr-5 text-[16px] shadow-[0_20px_50px_-30px_rgba(15,26,56,0.4)] placeholder:text-ink-soft/70 focus:border-blue-deep focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
        <button type="button" className={chip(category === "all")} onClick={() => setCategory("all")}>
          All
        </button>
        {FAQ_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={chip(category === c.id)}
            onClick={() => setCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-ink-soft" aria-live="polite">
        {visible.length} {visible.length === 1 ? "question" : "questions"}
      </p>

      {visible.length === 0 ? (
        <div className="unlock-pop mt-4 rounded-[28px] bg-mist p-8 text-center">
          <p className="text-xl font-medium tracking-tight">Nothing matches that yet</p>
          <p className="mt-2 text-ink-soft">
            Try a different word, or join the waitlist and we&apos;ll keep you posted.
          </p>
        </div>
      ) : (
        <div className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
          {visible.map((f) => {
            const isOpen = open === f.id;
            return (
              <div key={f.id} className="py-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${f.id}`}
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[19px] font-medium tracking-tight"
                  >
                    {f.q}
                    <span
                      aria-hidden="true"
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xl transition duration-300 ${
                        isOpen ? "rotate-45 bg-navy text-white" : "bg-sky-2 text-blue-deep"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${f.id}`}
                  role="region"
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-[17px] leading-relaxed text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
