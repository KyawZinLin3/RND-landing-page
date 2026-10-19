import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import ContactForm from "./contact-form";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "Contact Us | Reliance and Trust",
  description: "Contact Reliance and Trust Company Limited by email or send us a message using the contact form.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader activePage="contact" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">Have a question or inquiry? Send us a message or contact our team by email.</p></div>
          <PageHeroArt kind="contact" />
        </div>
      </section>

      <section className="section-wrap grid gap-8 py-14 md:grid-cols-[.8fr_1.2fr] md:gap-12 md:py-20">
        <aside className="rounded-[26px] bg-soft p-6 md:p-8">
          <span className="grid size-12 place-items-center rounded-2xl bg-white text-coral shadow-sm"><Mail aria-hidden="true" className="size-5" /></span>
          <h2 className="mt-5 text-xl font-extrabold">Email</h2>
          <a href="mailto:Remittance@relianceandtrustmm.com" className="mt-2 inline-block break-all text-sm font-bold text-coral underline decoration-coral/30 underline-offset-4 hover:decoration-coral">Remittance@relianceandtrustmm.com</a>
          <p className="mt-4 text-sm leading-6 text-muted">For general questions and company inquiries, email us directly or use the message form.</p>
        </aside>

        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(13,77,136,.07)] md:p-8">
          <h2 className="text-xl font-extrabold">Send us a message</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Complete the form and your email app will open with your message addressed to our team.</p>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
