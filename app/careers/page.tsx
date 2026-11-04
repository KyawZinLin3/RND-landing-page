import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "Careers | Reliance and Trust",
  description: "Explore sample career opportunities at Reliance and Trust Company Limited.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader activePage="careers" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">Careers at Reliance &amp; Trust</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">Explore example roles below; confirmed vacancies and application details will be shared here when available.</p></div>
          <PageHeroArt kind="careers" />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-black/5 bg-white px-6 py-10 text-center shadow-[0_18px_50px_rgba(13,77,136,.06)] sm:px-10 sm:py-14">
          <div aria-hidden="true" className="relative mx-auto grid size-28 place-items-center rounded-full bg-soft">
            <span className="absolute left-2 top-3 size-3 rounded-full bg-[#168cf2]/25" />
            <span className="absolute right-1 top-5 size-2 rounded-full bg-coral/35" />
            <span className="grid size-16 place-items-center rounded-2xl bg-white text-coral shadow-md"><BriefcaseBusiness className="size-8" strokeWidth={1.7} /></span>
            <span className="absolute bottom-2 right-1 grid size-8 place-items-center rounded-xl bg-[#168cf2] text-white shadow-sm"><svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
          </div>
          <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[.18em] text-coral">Careers at Reliance &amp; Trust</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">No open positions right now</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">There aren’t any vacancies to share at the moment. Check back later to see future opportunities to join our team.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

