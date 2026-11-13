import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/site-seo";

export const dynamic = "force-dynamic";

const publicRoutes = [
  "",
  "/about",
  "/mingalarpar",
  "/how-it-works",
  "/help",
  "/news",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled || !siteUrl) return [];

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

