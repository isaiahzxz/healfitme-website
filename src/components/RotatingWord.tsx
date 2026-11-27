"use client";

import { useEffect, useState } from "react";

/** Cycles through words every `ms`. Shows only the first word for people who prefer reduced motion. */
export function RotatingWord({ words, ms = 1800 }: { words: readonly string[]; ms?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % words.length), ms);
    return () => window.clearInterval(id);
  }, [words.length, ms]);

  return (
    <span aria-hidden="true" key={i} className="word-in">
      {words[i]}
    </span>
  );
}
