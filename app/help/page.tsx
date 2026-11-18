import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/website-content";
import { faqsMy } from "@/lib/faqs-my";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";
import { LocalizedText } from "../components/language-provider";

export const metadata: Metadata = {
  title: "Help & FAQs | Reliance and Trust",
  description: "Find answers to common questions about Reliance and Trust Company Limited and the planned Mingalarpar remittance service.",
};

export default function HelpPage() {
  return (
    <main className="site-page min-h-screen text-ink">
      <SiteHeader activePage="help" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl"><LocalizedText en="Help &amp; FAQs" my="အကူအညီနှင့် မေးလေ့ရှိသော မေးခွန်းများ" /></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"><LocalizedText en="Find answers to common questions about our company and the planned Mingalarpar service." my="ကျွန်ုပ်တို့ကုမ္ပဏီနှင့် စီစဉ်ထားသော Mingalarpar ငွေလွှဲဝန်ဆောင်မှုအကြောင်း မေးလေ့ရှိသည့် မေးခွန်းများ၏ အဖြေများကို ရှာဖွေပါ။" /></p></div>
          <PageHeroArt kind="help" />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger><LocalizedText en={faq.question} my={faqsMy[index].question} /></AccordionTrigger>
                <AccordionContent><LocalizedText en={faq.answer} my={faqsMy[index].answer} /></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="help-support-panel relative mt-10 flex flex-col gap-4 overflow-hidden rounded-[26px] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <span aria-hidden="true" className="help-support-art"><Headphones /></span>
            <div className="help-support-copy">
              <h2 className="text-lg font-extrabold"><LocalizedText en="Still need help?" my="အကူအညီလိုအပ်ပါသေးသလား။" /></h2>
              <p className="mt-2 text-sm leading-6 text-muted"><LocalizedText en="Send our team a message through the Contact Us page." my="Contact Us စာမျက်နှာမှတစ်ဆင့် ကျွန်ုပ်တို့အဖွဲ့ထံ စာပို့ပါ။" /></p>
            </div>
            <Link href="/contact" className="help-support-button inline-flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-3 text-sm font-extrabold transition sm:self-auto">
              <LocalizedText en="Contact Us" my="ဆက်သွယ်ရန်" /> <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
