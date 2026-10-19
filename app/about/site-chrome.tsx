"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/website-content";

function homeHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export function SiteHeader({ activePage }: { activePage: "about" | "news" | "careers" | "contact" | "help" | "how-it-works" | "mingalarpar" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLabel = { about: "About Us", news: "News", careers: "Careers", contact: "Contact Us", help: "Help", "how-it-works": "How It Works", mingalarpar: "Mingalarpar" }[activePage];

  return (
    <section className="hero-shell z-[90]">
      <div className="min-h-[84px] px-4 pt-4 md:min-h-[92px] md:px-7 md:pt-6">
        <header className="fixed inset-x-0 top-3 z-[100] mx-auto w-full max-w-[1280px] px-4 md:px-7">
          <div className="mx-auto flex min-h-[68px] max-w-[1280px] items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 shadow-lg shadow-coral/8 backdrop-blur-xl md:px-6">
            <Link href="/#top" aria-label="Reliance and Trust home" className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight">
              <span className="logo-mark">R&amp;T</span><span className="hidden sm:inline">Reliance &amp; Trust</span><span className="sm:hidden">R&amp;T</span>
            </Link>
            <nav aria-label="Main navigation" className="hidden items-center gap-x-2.5 gap-y-2 text-xs font-bold lg:flex xl:gap-x-4 xl:text-[13px]">
              {navigation.map((item) => {
                const isActive = item.label === activeLabel;
                return <Link key={item.label} aria-current={isActive ? "page" : undefined} className={`nav-link whitespace-nowrap transition-colors hover:text-coral ${isActive ? "text-coral" : ""}`} href={homeHref(item.href)}>{item.label}</Link>;
              })}
            </nav>
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <LanguageDropdown />
              <Button size="sm" variant="coral" asChild><Link href="/#mingalarpar">Explore Mingalarpar</Link></Button>
            </div>
            <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="about-mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 shrink-0 place-items-center rounded-full text-ink transition hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral lg:hidden">
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {menuOpen && <nav id="about-mobile-navigation" aria-label="Mobile navigation" className="mx-auto mt-2 grid max-w-[1280px] gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl lg:hidden">
            {navigation.map((item) => {
              const isActive = item.label === activeLabel;
              return <Link key={item.label} aria-current={isActive ? "page" : undefined} onClick={() => setMenuOpen(false)} className={`nav-link rounded-xl px-3 py-3 text-sm font-bold hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${isActive ? "text-coral" : ""}`} href={homeHref(item.href)}>{item.label}</Link>;
            })}
            <LanguageDropdown mobile />
            <Button className="m-2" variant="coral" asChild><Link href="/#mingalarpar" onClick={() => setMenuOpen(false)}>Explore Mingalarpar <ArrowRight className="size-4" /></Link></Button>
          </nav>}
        </header>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="section-wrap scroll-mt-8 pb-7">
      <div id="legal" className="rounded-[30px] bg-ink px-7 py-10 text-white md:px-12 md:py-14">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div><Link href="/#top" className="flex items-center gap-2 font-extrabold"><span className="logo-mark invert">R&amp;T</span><span>Reliance &amp; Trust</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Reliance and Trust Company Limited — building remittance services that connect people and communities.</p><a href="mailto:Remittance@relianceandtrustmm.com" className="mt-3 inline-block text-sm text-white/65 transition-colors hover:text-white">Remittance@relianceandtrustmm.com</a></div>
          <FooterCol title="Company" links={[["About Us", "/about"], ["Careers", "/careers"], ["News", "/news"], ["Contact Us", "/contact"]]} />
          <FooterCol title="Mingalarpar" links={[["Mingalarpar App", "/mingalarpar"], ["How It Works", "/how-it-works"], ["Thailand → Myanmar", "/#corridors"], ["Future Corridors", "/#corridors"]]} />
          <FooterCol title="Support" links={[["Help Center", "/help"], ["FAQ", "/help"], ["Contact Support", "/contact"], ["Fraud Awareness", "/#legal"], ["Complaints", "/contact"]]} />
          <FooterCol title="Legal" links={[["Privacy Policy", "/#legal"], ["Terms & Conditions", "/#legal"], ["Compliance", "/#legal"], ["Cookie Policy", "/#legal"], ["Regulatory Information", "/#legal"]]} />
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between"><p>© 2026 Reliance and Trust Company Limited. All rights reserved.</p><p>Business contact and regulatory details will be published when approved.</p></div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return <div><p className="footer-title">{title}</p><div className="mt-4 grid gap-3">{links.map(([label, href]) => <Link className="text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral" key={label} href={href}>{label}<ChevronRight className="ml-1 inline size-3 opacity-50" /></Link>)}</div></div>;
}

function LanguageDropdown({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <details open={open} className={`dropdown dropdown-end group relative z-[90] ${mobile ? "w-full" : "shrink-0"}`}>
      <summary onClick={(event) => { event.preventDefault(); setOpen(!open); }} aria-label="Choose language" aria-haspopup="menu" className={`flex cursor-pointer list-none items-center gap-2 border border-coral/10 bg-white font-bold text-ink shadow-sm transition hover:border-coral/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/30 [&::-webkit-details-marker]:hidden ${mobile ? "w-full justify-between rounded-xl px-3 py-3 text-sm" : "rounded-full px-3.5 py-2.5 text-[11px]"}`}>
        <LanguageFlag />
        <span className="flex-1 text-left">English</span>
        <ChevronDown aria-hidden="true" className={`size-4 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </summary>
      {open && <ul role="menu" className="menu dropdown-content z-[120] mt-2 w-56 gap-1 rounded-2xl border border-coral/10 bg-white p-2 text-ink shadow-xl shadow-ink/10">
        <li role="none"><button type="button" role="menuitemradio" aria-checked="true" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl bg-soft px-3 py-2.5 text-sm font-bold text-ink"><span className="flex items-center gap-2"><LanguageFlag />English</span><Check aria-hidden="true" className="size-4 text-success" /></button></li>
        <li role="none"><button type="button" role="menuitem" disabled className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted opacity-65"><span className="flex items-center gap-2"><LanguageFlag code="my" />Myanmar</span><span className="text-[9px] font-bold uppercase tracking-wide">Coming soon</span></button></li>
        <li role="none"><button type="button" role="menuitem" disabled className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted opacity-65"><span className="flex items-center gap-2"><LanguageFlag code="th" />Thai</span><span className="text-[9px] font-bold uppercase tracking-wide">Coming soon</span></button></li>
      </ul>}
    </details>
  );
}

function LanguageFlag({ code = "en" }: { code?: "en" | "my" | "th" }) {
  return <svg aria-hidden="true" viewBox="0 0 36 24" preserveAspectRatio="xMidYMid slice" className="size-6 shrink-0 self-center overflow-hidden rounded-full shadow-sm ring-1 ring-black/10">
    {code === "my" ? <>
      <rect width="36" height="8" fill="#FECB00" />
      <rect y="8" width="36" height="8" fill="#EA2839" />
      <rect y="16" width="36" height="8" fill="#34B233" />
      <path d="m18 3.2 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9L18 3.2Z" fill="white" />
    </> : code === "th" ? <>
      <rect width="36" height="24" fill="#A51931" />
      <rect y="4" width="36" height="16" fill="white" />
      <rect y="8" width="36" height="8" fill="#2D2A4A" />
    </> : <>
      <rect width="36" height="24" fill="#fff" />
      <path d="M0 0h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0z" fill="#C8102E" />
      <path d="M0 0h16v13H0z" fill="#012169" />
      <path d="m0 0 16 13M16 0 0 13" stroke="#fff" strokeWidth="3" />
      <path d="m0 0 16 13M16 0 0 13" stroke="#C8102E" strokeWidth="1" />
      <path d="M8 0v13M0 6.5h16" stroke="#fff" strokeWidth="4" />
      <path d="M8 0v13M0 6.5h16" stroke="#C8102E" strokeWidth="2" />
    </>}
  </svg>;
}
