import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://healfitme.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/product", "/coaches", "/faq", "/privacy", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
