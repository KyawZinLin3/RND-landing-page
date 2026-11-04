"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const analyticsUrl = "https://umami-production-0cff.up.railway.app";
const corporateWebsiteId = "e8a5eb23-65b0-473a-8f95-45e10fb57519";
const mingalarparWebsiteId = "fb205a59-7398-4099-ad04-c9d234292217";

export default function Analytics() {
  const pathname = usePathname();
  const websiteId = pathname.startsWith("/mingalarpar")
    ? mingalarparWebsiteId
    : corporateWebsiteId;

  return (
    <Script
      src={`${analyticsUrl}/script.js`}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
