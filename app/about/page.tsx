import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "About Us | Reliance and Trust Company Limited",
  description: "Learn about Reliance and Trust Company Limited and its planned Mingalarpar remittance service for connecting Thailand and Myanmar.",
};

const companyFacts = [
  {
    icon: <BadgeCheck aria-hidden="true" className="size-5" />,
    title: "Licensed in Myanmar",
    text: "Reliance and Trust Company Limited has obtained a remittance licence in Myanmar.",
  },
  {
    icon: <Globe2 aria-hidden="true" className="size-5" />,
    title: "A focused first corridor",
    text: "Mingalarpar is planned to connect people in Thailand with their families and loved ones in Myanmar.",
  },
  {
    icon: <ShieldCheck aria-hidden="true" className="size-5" />,
    title: "A considered customer journey",
    text: "The planned experience includes identity verification and clear information about transfer costs before a transfer is confirmed.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader />

      <section className="hero-shell">
        <div aria-hidden="true" className="absolute -right-24 -top-28 size-96 rounded-full bg-[#168cf2]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow">About our company</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">Building a simpler way to connect people and communities</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
            Reliance and Trust Company Limited is a Myanmar remittance company developing Mingalarpar, a planned digital service focused on helping people send money home.
          </p>
          <Link href="/#mingalarpar" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white transition hover:brightness-95">
            Discover Mingalarpar <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-coral">Who we are</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Reliance and Trust Company Limited</h2>
          <p className="mt-5 text-base leading-7 text-muted">
            We are building a remittance service around clear steps, careful identity verification, and helpful information throughout the customer journey. Mingalarpar is our planned service, designed with the needs of people sending money to family in mind.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {companyFacts.map((fact) => (
            <article key={fact.title} className="rounded-[24px] border border-black/5 bg-[#f5f9fd] p-6 md:p-7">
              <span className="grid size-11 place-items-center rounded-2xl bg-white text-coral shadow-sm">{fact.icon}</span>
              <h3 className="mt-5 text-lg font-extrabold">{fact.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{fact.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
