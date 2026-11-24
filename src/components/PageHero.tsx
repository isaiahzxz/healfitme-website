import type { ReactNode } from "react";

/** Dark hero for inner pages. Keeps the white nav legible and matches the home page's navy band. */
export function PageHero({
  eyebrow,
  title,
  body,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="drift absolute -top-48 left-[8%] -z-10 h-[520px] w-[760px] rounded-full bg-blue/30 blur-[120px]" />
      <div
        className={`mx-auto max-w-6xl px-6 pb-24 pt-44 md:pb-32 md:pt-52 ${
          children ? "grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]" : ""
        } ${center ? "text-center" : ""}`}
      >
        <div className={center ? "mx-auto max-w-3xl" : "max-w-xl"}>
          <p
            className="line-up text-[13px] text-sky"
            style={{ animationDelay: "0.05s" }}
          >
            {eyebrow}
          </p>
          <h1
            className="display line-up mt-6 text-[clamp(2.8rem,6vw,5rem)]"
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
