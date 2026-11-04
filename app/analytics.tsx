"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const analyticsUrl = "https://umami-production-0cff.up.railway.app";
const corporateWebsiteId = "e8a5eb23-65b0-473a-8f95-45e10fb57519";
const mingalarparWebsiteId = "fb205a59-7398-4099-ad04-c9d234292217";

declare global {
  interface Window {
    umami?: {
      track: (payload?: unknown) => void;
    };
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const [trackerReady, setTrackerReady] = useState(false);
  const websiteId = pathname.startsWith("/mingalarpar")
    ? mingalarparWebsiteId
    : corporateWebsiteId;

  useEffect(() => {
    if (!trackerReady || !window.umami) return;

    window.umami.track((properties: Record<string, unknown>) => ({
      ...properties,
      website: websiteId,
      url: pathname,
      title: document.title,
    }));
  }, [pathname, trackerReady, websiteId]);

  return (
    <Script
      src={`${analyticsUrl}/script.js`}
      data-website-id={corporateWebsiteId}
      data-auto-track="false"
      strategy="afterInteractive"
      onReady={() => setTrackerReady(true)}
    />
  );
}
