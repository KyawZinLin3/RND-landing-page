"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/website-content";
import { FraudAwarenessFooterLink, LegalFooterCol } from "../components/legal-footer";
import { FooterContactDetails } from "../components/footer-contact";
import { useSiteLanguage, type SiteLanguage } from "../components/language-provider";

function homeHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const navLabelsMy: Record<string, string> = {
  Home: "ပင်မ", Mingalarpar: "မင်္ဂလာပါ", "How It Works": "ငွေလွှဲလုပ်ငန်းစဉ်", Help: "အကူအညီ",
  News: "သတင်း", Careers: "အလုပ်အကိုင်", "About Us": "ကျွန်ုပ်တို့အကြောင်း", "Contact Us": "ဆက်သွယ်ရန်",
};

export function SiteHeader({ activePage }: { activePage: "about" | "news" | "careers" | "contact" | "help" | "how-it-works" | "mingalarpar" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  const activeLabel = { about: "About Us", news: "News", careers: "Careers", contact: "Contact Us", help: "Help", "how-it-works": "How It Works", mingalarpar: "Mingalarpar" }[activePage];

  return (
    <section className="hero-shell z-[90]">
      <div className="min-h-[84px] px-4 pt-4 md:min-h-[92px] md:px-7 md:pt-6">
        <header className="fixed inset-x-0 top-3 z-[100] mx-auto w-full max-w-[1280px] px-4 md:px-7">
          <div className="mx-auto flex min-h-[68px] max-w-[1280px] items-center justify-between gap-3 rounded-2xl border border-[#dce5ee] bg-white/95 px-4 shadow-[0_10px_32px_rgba(7,27,58,.16)] backdrop-blur-xl md:px-6">
            <Link href="/#top" aria-label="Reliance and Trust home" className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight">
              <img src="/rt-logo.svg" alt="Reliance &amp; Trust" className="h-10 w-auto object-contain" />
            </Link>
            <nav aria-label="Main navigation" className={`hidden items-center gap-y-2 font-bold lg:flex ${isMyanmar ? "gap-x-1 text-[11px] xl:gap-x-2.5 xl:text-xs" : "gap-x-2.5 text-xs xl:gap-x-4 xl:text-[13px]"}`}>
              {navigation.map((item) => {
                const isActive = item.label === activeLabel;
                return <Link key={item.label} aria-current={isActive ? "page" : undefined} className={`nav-link whitespace-nowrap transition-colors hover:text-coral ${isActive ? "text-coral" : ""}`} href={homeHref(item.href)}>{isMyanmar ? navLabelsMy[item.label] : item.label}</Link>;
              })}
            </nav>
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <LanguageDropdown />
              <Button size="sm" variant="coral" asChild><Link href="/#mingalarpar">{isMyanmar ? "Mingalarpar အား ပိုမိုသိရှိရန်" : "Explore Mingalarpar"}</Link></Button>
            </div>
            <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="about-mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 shrink-0 place-items-center rounded-full text-ink transition hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral lg:hidden">
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {menuOpen && <nav id="about-mobile-navigation" aria-label="Mobile navigation" className="mx-auto mt-2 grid max-w-[1280px] gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl lg:hidden">
            {navigation.map((item) => {
              const isActive = item.label === activeLabel;
              return <Link key={item.label} aria-current={isActive ? "page" : undefined} onClick={() => setMenuOpen(false)} className={`nav-link rounded-xl px-3 py-3 text-sm font-bold hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${isActive ? "text-coral" : ""}`} href={homeHref(item.href)}>{isMyanmar ? navLabelsMy[item.label] : item.label}</Link>;
            })}
            <LanguageDropdown mobile />
            <Button className="m-2" variant="coral" asChild><Link href="/#mingalarpar" onClick={() => setMenuOpen(false)}>{isMyanmar ? "Mingalarpar အား ပိုမိုသိရှိရန်" : "Explore Mingalarpar"} <ArrowRight className="size-4" /></Link></Button>
          </nav>}
        </header>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  return (
    <footer id="contact" className="section-wrap scroll-mt-8 pb-7">
      <div id="legal" className="site-footer-panel rounded-[30px] px-7 py-10 text-white md:px-12 md:py-14">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div><Link href="/#top" className="flex items-center gap-2 font-extrabold"><span className="footer-brand-logo"><img src="/rt-logo.svg" alt="" /></span><span>Reliance &amp; Trust</span></Link><p className="footer-copy mt-4 max-w-xs text-sm leading-6">{isMyanmar ? "Reliance and Trust Company Limited — လူပုဂ္ဂိုလ်များနှင့် လူမှုအသိုင်းအဝိုင်းများကို ချိတ်ဆက်ပေးမည့် ငွေလွှဲဝန်ဆောင်မှုများကို တည်ဆောက်နေပါသည်။" : "Reliance and Trust Company Limited — building remittance services that connect people and communities."}</p><FooterContactDetails /></div>
          <FooterCol title="Company" links={[["About Us", "/about"], ["Careers", "/careers"], ["News", "/news"], ["Contact Us", "/contact"]]} />
          <FooterCol title="Mingalarpar" links={[["Mingalarpar App", "/mingalarpar"], ["How It Works", "/how-it-works"], ["Thailand → Myanmar", "/#corridors"], ["Future Corridors", "/#corridors"]]} />
          <FooterCol title="Support" links={[["Help Center", "/help"], ["FAQ", "/help"], ["Contact Support", "/contact"], ["Complaints", "/contact"]]} />
          <LegalFooterCol />
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between"><p>© 2026 Reliance and Trust Company Limited. {isMyanmar ? "မူပိုင်ခွင့်အားလုံး လက်ဝယ်ရှိသည်။" : "All rights reserved."}</p><p>{isMyanmar ? "အတည်ပြုပြီးသောအခါ လုပ်ငန်းနှင့် စည်းမျဉ်းဆိုင်ရာ အသေးစိတ်အချက်အလက်များကို ထုတ်ပြန်ပေးပါမည်။" : "Additional business and regulatory details will be published when confirmed."}</p></div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  const labels: Record<string, string> = { Company: "ကုမ္ပဏီ", Mingalarpar: "မင်္ဂလာပါ", Support: "အကူအညီ", "About Us": "ကျွန်ုပ်တို့အကြောင်း", Careers: "အလုပ်အကိုင်", News: "သတင်း", "Contact Us": "ဆက်သွယ်ရန်", "Mingalarpar App": "Mingalarpar အက်ပ်", "How It Works": "အလုပ်လုပ်ပုံ", "Thailand → Myanmar": "ထိုင်း → မြန်မာ", "Future Corridors": "အနာဂတ်ငွေလွှဲလမ်းကြောင်းများ", "Help Center": "အကူအညီဌာန", FAQ: "မေးလေ့ရှိသော မေးခွန်းများ", "Contact Support": "အကူအညီကို ဆက်သွယ်ရန်", Complaints: "တိုင်ကြားရန်" };
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  return <div><p className="footer-title">{isMyanmar ? (labels[title] ?? title) : title}</p><div className="mt-4 grid gap-3">{links.map(([label, href]) => <Link className={`footer-col-link transition-colors ${isMyanmar && (label === "FAQ" || label === "Contact Support") ? "whitespace-nowrap" : ""}`} key={label} href={href}>{isMyanmar ? (labels[label] ?? label) : label}<ChevronRight className="ml-1 inline size-3 opacity-65" /></Link>)}{title === "Support" && <FraudAwarenessFooterLink />}</div></div>;
}

function LanguageDropdown({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useSiteLanguage();
  const selectLanguage = (nextLanguage: SiteLanguage) => { setLanguage(nextLanguage); setOpen(false); };

  return (
    <details open={open} className={`dropdown dropdown-end group relative z-[90] ${mobile ? "w-full" : "shrink-0"}`}>
      <summary onClick={(event) => { event.preventDefault(); setOpen(!open); }} aria-label="Choose language" aria-haspopup="menu" className={`flex cursor-pointer list-none items-center gap-2 border border-coral/10 bg-white font-bold text-ink shadow-sm transition hover:border-coral/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/30 [&::-webkit-details-marker]:hidden ${mobile ? "w-full justify-between rounded-xl px-3 py-3 text-sm" : "rounded-full px-3.5 py-2.5 text-[11px]"}`}>
        <LanguageFlag code={language} />
        <span className="flex-1 text-left">{language === "my" ? "မြန်မာ" : "English"}</span>
        <ChevronDown aria-hidden="true" className={`size-4 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </summary>
      {open && <ul role="menu" className="menu dropdown-content z-[120] mt-2 w-56 gap-1 rounded-2xl border border-coral/10 bg-white p-2 text-ink shadow-xl shadow-ink/10">
        <li role="none"><button type="button" role="menuitemradio" aria-checked={language === "en"} onClick={() => selectLanguage("en")} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-ink ${language === "en" ? "bg-soft" : "hover:bg-soft"}`}><span className="flex items-center gap-2"><LanguageFlag />English</span>{language === "en" && <Check aria-hidden="true" className="size-4 text-success" />}</button></li>
        <li role="none"><button type="button" role="menuitemradio" aria-checked={language === "my"} onClick={() => selectLanguage("my")} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-ink ${language === "my" ? "bg-soft" : "hover:bg-soft"}`}><span className="flex items-center gap-2"><LanguageFlag code="my" />မြန်မာ</span>{language === "my" && <Check aria-hidden="true" className="size-4 text-success" />}</button></li>
        <li role="none"><button type="button" role="menuitem" disabled className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted opacity-65"><span className="flex items-center gap-2"><LanguageFlag code="th" />Thai</span><span className="text-[9px] font-bold uppercase tracking-wide">Coming soon</span></button></li>
      </ul>}
    </details>
  );
}

function LanguageFlag({ code = "en" }: { code?: "en" | "my" | "th" }) {
  return <svg aria-hidden="true" viewBox="0 0 36 24" preserveAspectRatio="xMidYMid slice" className="h-4 w-6 shrink-0 self-center overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10">
    {code === "my" ? <>
      <rect width="36" height="8" fill="#FECB00" />
      <rect y="8" width="36" height="8" fill="#34B233" />
      <rect y="16" width="36" height="8" fill="#EA2839" />
      <path d="m18 3.2 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9L18 3.2Z" fill="white" />
    </> : code === "th" ? <>
      <rect width="36" height="24" fill="#A51931" />
      <rect y="4" width="36" height="16" fill="white" />
      <rect y="8" width="36" height="8" fill="#2D2A4A" />
    </> : <>
      <rect width="36" height="24" fill="#012169" />
      <path d="M0 0 36 24M36 0 0 24" stroke="white" strokeWidth="5" />
      <path d="M0 0 36 24M36 0 0 24" stroke="#C8102E" strokeWidth="2" />
      <path d="M0 0 36 24M36 0 0 24" stroke="#012169" strokeWidth=".8" />
      <path d="M0 0 36 24M36 0 0 24" stroke="white" strokeWidth="1.7" />
      <path d="M0 9h36v6H0zM15 0h6v24h-6z" fill="white" />
      <path d="M0 10.5h36v3H0zM16.5 0h3v24h-3z" fill="#C8102E" />
    </>}
  </svg>;
}
