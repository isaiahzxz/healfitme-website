import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "./globals.css";

const font = Inter_Tight({
  variable: "--font-main",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://healfitme.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HealFitMe | Know how recovered you are, every morning",
  description:
    "HealFitMe is an iPhone app for people who train. Get a Recovery score out of 100 each morning and one thing to do today. Join early testing.",
  openGraph: {
    title: "HealFitMe | Know how recovered you are, every morning",
    description:
      "A Recovery score out of 100 each morning and one thing to do today. Coming soon to iOS.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#c3d6f6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={font.variable}>
      <body className="min-h-screen">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
