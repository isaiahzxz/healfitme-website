import Image from "next/image";

/** The HealFitMe wordmark. `light` renders it white for use over photos or dark sections. */
export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="HealFitMe"
      width={1010}
      height={140}
      className={`h-[22px] w-auto ${light ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
