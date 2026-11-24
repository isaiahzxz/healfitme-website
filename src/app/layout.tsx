import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://healfitme.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HealFitMe | Know what recovery needs today",
  description:
    "HealFitMe turns your health and activity data into a clearer picture of recovery, and one useful next step. Join the waitlist.",
  openGraph: {
    title: "HealFitMe | Know what recovery needs today",
    description:
      "Your health and activity data, turned into a clearer picture of recovery and one useful next step.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#c3d6f6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
