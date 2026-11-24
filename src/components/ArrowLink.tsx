import Link from "next/link";

export function ArrowLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium ${
        tone === "light" ? "text-white" : "text-blue-deep"
      }`}
    >
      <span className="underline decoration-current/30 underline-offset-[6px] transition group-hover:decoration-current">
        {children}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  );
}
