import type { ReactNode } from "react";

/** Dark hero for inner pages. Keeps the white nav legible and matches the home page's navy band. */
export function PageHero({
  title,
  body,
  children,
  align = "left",
}: {
  title: ReactNode;
  body: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div
        className={`mx-auto max-w-6xl px-6 pb-24 pt-40 md:pb-32 md:pt-48 ${
          children ? "grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]" : ""
        } ${center ? "text-center" : ""}`}
      >
        <div className={center ? "mx-auto max-w-3xl" : "max-w-xl"}>
          <h1
            className="display line-up text-[clamp(2.4rem,5vw,4rem)]"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>
          <p
            className="line-up mt-7 text-lg text-white/75 md:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            {body}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
