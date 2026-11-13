import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/site-seo";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl } : {}),
  };
}
