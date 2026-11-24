import Image from "next/image";
import type { ReactNode } from "react";

/** Device frame showing the real HealFitMe home screen. Children render as overlays on the screen. */
export function Phone({
  className = "",
  children,
  preload = false,
}: {
  className?: string;
  children?: ReactNode;
  preload?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[290px] rounded-[44px] bg-[#0b1226] p-[8px] shadow-[0_50px_100px_-30px_rgba(15,26,56,0.65)] ring-1 ring-white/20 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[37px] bg-white">
        <Image
          src="/images/app-home.webp"
          alt="The HealFitMe home screen showing a recovery score of 83 out of 100, rated Good, with a morning check-in and today's mission"
          width={900}
          height={1829}
          sizes="290px"
          preload={preload}
          className="block h-auto w-full"
        />
        {children}
      </div>
    </div>
  );
}
