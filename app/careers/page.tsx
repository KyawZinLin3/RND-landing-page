import type { Metadata } from "next";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";

export const metadata: Metadata = {
  title: "Careers | Reliance and Trust",
  description: "Explore sample career opportunities at Reliance and Trust Company Limited.",
};

const sampleRoles = [
  {
    title: "Customer Support Associate",
    department: "Customer Experience",
    location: "Yangon, Myanmar",
    type: "Full-time · Sample role",
    summary: "Help customers get clear answers and support throughout their remittance journey.",
  },
  {
    title: "Compliance Operations Associate",
    department: "Operations",
    location: "Yangon, Myanmar",
    type: "Full-time · Sample role",
    summary: "Support customer verification and the operational processes behind remittance services.",
  },
  {
    title: "Product Designer",
    department: "Digital Product",
    location: "Yangon, Myanmar",
    type: "Full-time · Sample role",
    summary: "Help shape a simple, accessible digital experience for people sending money home.",
  },
];

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
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Example opportunities</h2>
          <p className="mt-3 text-sm leading-6 text-muted">These mock listings demonstrate the page layout. Confirmed openings and application details will be published here when available.</p>
        </div>
        <div className="grid gap-4">
          {sampleRoles.map((role) => (
            <article key={role.title} className="rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(13,77,136,.06)] md:flex md:items-center md:gap-8 md:p-7">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-soft text-coral"><BriefcaseBusiness aria-hidden="true" className="size-5" /></div>
              <div className="mt-5 min-w-0 flex-1 md:mt-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-extrabold">{role.title}</h3>
                  <span className="rounded-full bg-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-coral">Sample</span>
                </div>
                <p className="mt-1 text-xs font-bold text-muted">{role.department} · {role.type}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{role.summary}</p>
              </div>
              <p className="mt-5 inline-flex shrink-0 items-center gap-2 text-xs font-bold text-muted md:mt-0"><MapPin aria-hidden="true" className="size-4 text-coral" />{role.location}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
