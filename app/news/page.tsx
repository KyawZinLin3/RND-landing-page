import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "News & Announcements | Reliance and Trust",
  description: "Company updates and announcements from Reliance and Trust Company Limited.",
};

const sampleStories = [
  {
    category: "Mingalarpar",
    title: "Developing a remittance service for the Thailand–Myanmar corridor",
    excerpt: "Mingalarpar is being planned as a digital remittance service to help people in Thailand send money to loved ones in Myanmar. Service availability and launch information will be shared when confirmed.",
  },
  {
    category: "Customer experience",
    title: "Clear information throughout the transfer journey",
    excerpt: "The planned experience is designed to show the applicable exchange rate, fees, and recipient amount before a transfer is confirmed.",
  },
  {
    category: "Service updates",
    title: "Identity verification is part of the planned service",
    excerpt: "Mingalarpar's customer journey includes identity verification. Accepted documents and registration steps will be shared before launch.",
  },
];

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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sampleStories.map((story) => (
            <article key={story.title} className="flex min-h-[280px] flex-col rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(13,77,136,.07)] md:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-soft px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-coral">{story.category}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted">Sample</span>
              </div>
              <h2 className="mt-6 text-xl font-extrabold leading-snug">{story.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{story.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
