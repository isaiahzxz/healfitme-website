import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://healfitme.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HealFitMe | Recovery, reimagined",
  description:
    "HealFitMe is an AI-powered recovery app. It reads your health and activity data and tells you exactly what to do next to recover better. Join the waitlist.",
  openGraph: {
    title: "HealFitMe | Recovery, reimagined",
    description:
      "Know where your body is at, and exactly what to do next. Join the waitlist for early access.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d2b27",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
