import type { ReactNode } from "react";

/** Device frame. Children render inside the screen. */
export function Phone({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[300px] rounded-[44px] bg-[#0a1413] p-[9px] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/15 ${className}`}
    >
      <div className="absolute left-1/2 top-[14px] z-10 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full overflow-hidden rounded-[36px] bg-[#f7f5f0] text-ink">
        {children}
      </div>
    </div>
  );
}

export function ReadinessRing({
  value,
  size = 150,
}: {
  value: number;
  size?: number;
}) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - value / 100);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="-rotate-90" width={size} height={size}>
        <circle cx="60" cy="60" r={r} fill="none" stroke="#e4ded2" strokeWidth="9" />
        <circle
          className="ring-anim"
          style={{ ["--ring-circ" as string]: circ }}
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="#ff7a59"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="display text-[44px] leading-none">{value}</span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-ink-soft">
          Recovery
        </span>
      </div>
    </div>
  );
}

/** Home screen shown in the hero phone. Illustrative sample data. */
export function TodayScreen() {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-12">
      <p className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">Today</p>
      <p className="display mt-1 text-[22px]">Good morning, Sam</p>

      <div className="mt-3 flex items-center justify-center rounded-3xl bg-white py-3 shadow-sm">
        <ReadinessRing value={82} size={132} />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[
          ["Sleep", "7h 42m"],
          ["HRV", "64 ms"],
          ["Soreness", "Low"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-white px-1 py-2 shadow-sm">
            <p className="text-[9px] uppercase tracking-wider text-ink-soft">{k}</p>
            <p className="mt-0.5 text-[13px] font-medium">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-3xl bg-evergreen p-3.5 text-white">
        <p className="text-[9px] uppercase tracking-[0.14em] text-mint">Your next step</p>
        <p className="mt-1 text-[14px] font-medium leading-snug">
          20 min easy walk, then 8 min hip mobility
        </p>
        <p className="mt-1 text-[11px] text-white/65">
          Your legs are fresh but your sleep debt is building.
        </p>
        <div className="mt-2.5 inline-flex rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-ink">
          Start
        </div>
      </div>
    </div>
  );
}
