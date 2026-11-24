export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5 14h4l2-5 3 9 2-4h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[19px] font-medium tracking-tight">
        HealFit<span className="font-display italic font-light">Me</span>
      </span>
    </span>
  );
}
