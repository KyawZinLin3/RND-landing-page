import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "News & Announcements | Reliance and Trust",
  description: "Company updates and announcements from Reliance and Trust Company Limited.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader activePage="news" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">News &amp; Announcements</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">Updates from Reliance and Trust Company Limited and news about Mingalarpar will be shared here.</p></div>
          <PageHeroArt kind="news" />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-black/5 bg-white px-6 py-10 text-center shadow-[0_18px_50px_rgba(13,77,136,.07)] sm:px-10 sm:py-14">
          <div aria-hidden="true" className="relative mx-auto grid size-28 place-items-center rounded-full bg-soft">
            <span className="absolute right-1 top-2 size-5 rounded-full bg-coral/15" />
            <span className="grid size-16 place-items-center rounded-2xl bg-white text-coral shadow-md"><svg viewBox="0 0 24 24" fill="none" className="size-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3.75h8l4 4v12.5H6z"/><path d="M14 3.75v4h4M9 12h6M9 15.5h6"/></svg></span>
            <span className="absolute bottom-2 left-1 grid size-8 place-items-center rounded-xl bg-coral text-white shadow-sm"><svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
          </div>
          <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[.18em] text-coral">News &amp; announcements</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">No updates just yet</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">We’re preparing news and announcements to share with you. Please check back soon for the latest from Reliance &amp; Trust.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

