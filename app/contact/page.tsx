import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import ContactForm from "./contact-form";
import { LocalizedText } from "../components/language-provider";

export const metadata: Metadata = {
  title: "Contact Us | Reliance and Trust",
  description: "Contact Reliance and Trust Company Limited by email or send us a message using the contact form.",
};

export default function ContactPage() {
  return (
    <main className="site-page min-h-screen text-ink">
      <SiteHeader activePage="contact" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-start gap-8 px-5 py-12 md:grid-cols-[.82fr_1.18fr] md:gap-12 md:px-8 md:py-16">
          <div className="contact-intro md:sticky md:top-28">
            <span className="about-eyebrow"><Mail aria-hidden="true" className="size-4" /> <LocalizedText en="We’re here to help" my="ကူညီပေးရန် အသင့်ရှိပါသည်" /></span>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl"><LocalizedText en="Contact Us" my="ဆက်သွယ်ရန်" /></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"><LocalizedText en="Have a question or inquiry? Send us a message and our team will get back to you." my="မေးခွန်း သို့မဟုတ် စုံစမ်းလိုသည်များရှိပါက ကျွန်ုပ်တို့ထံ စာပို့ပါ။ အဖွဲ့မှ ပြန်လည်ဆက်သွယ်ပေးပါမည်။" /></p>
            <div className="contact-info-panel mt-8 grid gap-5 rounded-[24px] p-6 md:p-7">
              <div className="flex items-start gap-3"><span className="contact-info-icon"><Mail aria-hidden="true" className="size-5" /></span><div><h2 className="text-sm font-extrabold"><LocalizedText en="Email" my="အီးမေးလ်" /></h2><a href="mailto:remittance@relianceandtrustmm.com" className="mt-1 inline-block break-all text-sm font-semibold text-coral hover:underline">remittance@relianceandtrustmm.com</a></div></div>
              <div className="flex items-start gap-3"><span className="contact-info-icon"><Phone aria-hidden="true" className="size-5" /></span><div><h2 className="text-sm font-extrabold"><LocalizedText en="Call us" my="ဖုန်းဆက်ရန်" /></h2><a href="tel:+959695002653" className="mt-1 block text-sm font-semibold text-coral hover:underline">+95 9 695 002 653</a><a href="tel:+9595082465" className="mt-1 block text-sm font-semibold text-coral hover:underline">+95 9 508 246 5</a></div></div>
            </div>
          </div>
          <div className="contact-form-panel rounded-[28px] p-6 md:p-8">
            <h2 className="text-xl font-extrabold"><LocalizedText en="Send us a message" my="ကျွန်ုပ်တို့ထံ စာပို့ရန်" /></h2>
            <p className="mt-2 text-sm leading-6 text-muted"><LocalizedText en="Choose a category so we can direct your message to the right team." my="သင့်စာကို သက်ဆိုင်ရာအဖွဲ့ထံ ပေးပို့နိုင်ရန် အမျိုးအစားတစ်ခုကို ရွေးချယ်ပါ။" /></p>
            <ContactForm />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

