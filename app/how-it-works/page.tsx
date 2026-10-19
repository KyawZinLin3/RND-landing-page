import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownLeft, ArrowRight, ScanFace, WalletCards } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "How It Works | Mingalarpar",
  description: "Learn about the three planned steps in the Mingalarpar remittance journey.",
};

const transferSteps = [
  {
    number: "01",
    icon: <ScanFace aria-hidden="true" className="size-6" />,
    title: "Register & Verify",
    description: "Create your Mingalarpar account and complete the required identity verification.",
  },
  {
    number: "02",
    icon: <WalletCards aria-hidden="true" className="size-6" />,
    title: "Create Your Transfer",
    description: "Enter your recipient details, review the transfer information, and complete payment using an available method.",
  },
  {
    number: "03",
    icon: <ArrowDownLeft aria-hidden="true" className="size-6" />,
    title: "Money Reaches Myanmar",
    description: "Your recipient receives the transfer through a supported payout method.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader activePage="how-it-works" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">How It Works</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">Three clear steps are planned for the Mingalarpar remittance journey. Final service details will be confirmed before launch.</p></div>
          <PageHeroArt kind="how-it-works" />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="relative grid gap-4 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[17%] right-[17%] top-11 hidden border-t-2 border-dashed border-coral/25 md:block" />
          {transferSteps.map((step) => (
            <article key={step.number} className="relative rounded-[26px] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(13,77,136,.07)]">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-soft text-coral">{step.icon}</span>
                <span className="text-sm font-extrabold tracking-widest text-coral">{step.number}</span>
              </div>
              <h2 className="mt-7 text-xl font-extrabold">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[26px] bg-soft p-6 sm:flex-row sm:items-center md:p-8">
          <div>
            <h2 className="text-lg font-extrabold">Have more questions?</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Read our FAQs or contact our team.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/help" className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:border-coral/40">Help &amp; FAQs</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white transition hover:brightness-95">Contact Us <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
