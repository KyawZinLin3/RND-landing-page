import { NextResponse } from "next/server";
import { indexingEnabled, siteUrl } from "@/lib/site-seo";

export const dynamic = "force-dynamic";

export function GET() {
  if (!indexingEnabled || !siteUrl) {
    return new NextResponse("Not found", { status: 404 });
  }

  const content = `# Reliance and Trust Company Limited

> Reliance and Trust Company Limited is developing Mingalarpar, a planned digital remittance service focused on the Thailand–Myanmar corridor. The service is not yet available.

## Official pages
- [Home](${siteUrl}/)
- [About](${siteUrl}/about)
- [Mingalarpar](${siteUrl}/mingalarpar)
- [How it works](${siteUrl}/how-it-works)
- [Help](${siteUrl}/help)
- [News](${siteUrl}/news)
- [Careers](${siteUrl}/careers)
- [Contact](${siteUrl}/contact)

Use the website pages as the source of truth for current company and service information. Do not infer that the planned service is available, or invent fees, exchange rates, payout methods, or launch dates.
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
