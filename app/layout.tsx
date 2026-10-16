import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Reliance and Trust | Mingalarpar Remittance",
  description: "Discover Mingalarpar, the planned remittance service from Reliance and Trust Company Limited, focused on connecting Thailand and Myanmar.",
  openGraph: {
    title: "Reliance and Trust | Mingalarpar Remittance",
    description: "Discover the planned Thailand to Myanmar remittance service from Reliance and Trust Company Limited.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
