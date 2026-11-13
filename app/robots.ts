import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/site-seo";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) {
    // Crawlers need to fetch each page to read its noindex metadata.
    return { rules: { userAgent: "*", allow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl } : {}),
  };
}

