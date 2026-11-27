"use client";

import { useState } from "react";

const SHOWN = 7;

/** The session types in a category, with a "Show more" toggle like future.co. */
export function SessionTypes({ types }: { types: string[] }) {
  const [all, setAll] = useState(false);
  const visible = all ? types : types.slice(0, SHOWN);
  const hidden = types.length - SHOWN;

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {visible.map((t) => (
        <li
          key={t}
          className="rounded-[18px] bg-[#f8f8f8] px-6 py-3.5 text-[17px] shadow-[0_10px_24px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.05]"
        >
          {t}
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <button
            type="button"
            onClick={() => setAll(!all)}
            aria-expanded={all}
            className="px-2 py-3.5 text-[17px] text-ink transition hover:text-blue-deep"
          >
            {all ? "Show less" : `Show more ( ${hidden} )`}
          </button>
        </li>
      )}
    </ul>
  );
}
