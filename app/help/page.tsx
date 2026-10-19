import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/website-content";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "Help & FAQs | Reliance and Trust",
  description: "Find answers to common questions about Reliance and Trust Company Limited and the planned Mingalarpar remittance service.",
};

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader activePage="help" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">Help &amp; FAQs</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">Find answers to common questions about our company and the planned Mingalarpar service.</p></div>
          <PageHeroArt kind="help" />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 flex flex-col gap-4 rounded-[26px] bg-soft p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <h2 className="text-lg font-extrabold">Still need help?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Send our team a message through the Contact Us page.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white transition hover:brightness-95 sm:self-auto">
              Contact Us <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
