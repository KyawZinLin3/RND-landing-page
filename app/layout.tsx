import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";
import { indexingEnabled, siteUrl } from "@/lib/site-seo";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Reliance and Trust | Mingalarpar Remittance",
  description: "Discover Mingalarpar, the planned remittance service from Reliance and Trust Company Limited, focused on connecting Thailand and Myanmar.",
  icons: {
    icon: "/rt-logo.svg",
  },
  openGraph: {
    title: "Reliance and Trust | Mingalarpar Remittance",
    description: "Discover the planned Thailand to Myanmar remittance service from Reliance and Trust Company Limited.",
    type: "website",
  },
  robots: indexingEnabled
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = siteUrl ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reliance and Trust Company Limited",
    alternateName: "Reliance & Trust",
    url: siteUrl,
    logo: `${siteUrl}/rt-logo.svg`,
    description: "Reliance and Trust Company Limited is developing Mingalarpar, a planned remittance service focused on the Thailand–Myanmar corridor.",
    brand: { "@type": "Brand", name: "Mingalarpar" },
  } : null;

  return (
    <html lang="en" data-theme="light">
      <body className={manrope.variable}>
        {indexingEnabled && organizationJsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }} />
        )}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
