import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/sessions";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://healfitme.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/product", "/sessions", ...CATEGORIES.map((c) => `/sessions/${c.slug}`), "/faq", "/privacy", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
