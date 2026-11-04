import Script from "next/script";

const analyticsUrl = "https://umami-production-0cff.up.railway.app";
const websiteId = "e8a5eb23-65b0-473a-8f95-45e10fb57519";

export default function Analytics() {
  return (
    <Script
      src={`${analyticsUrl}/script.js`}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
