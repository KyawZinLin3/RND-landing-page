"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDownLeft, ArrowRight, BadgeCheck, Banknote, BriefcaseBusiness, Check,
  ChevronDown, ChevronRight, CircleHelp, ClipboardCheck, Globe2, Headphones, Landmark,
  Menu, MoveRight, ScanFace, ShieldCheck, Smartphone, WalletCards, X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { corridorStatusLabel, faqs, navigation, websiteSettings, type NewsPost } from "@/lib/website-content";

const trustItems = [
  { icon: <Landmark />, title: "Licensed remittance company", text: "Reliance and Trust Company Limited has obtained a remittance licence in Myanmar." },
  { icon: <Globe2 />, title: "A focused first corridor", text: "Our first planned remittance corridor connects Thailand and Myanmar." },
  { icon: <ScanFace />, title: "Identity verification", text: "The customer journey includes required identity verification." },
  { icon: <Headphones />, title: "Customer support", text: "Support information will be shared through confirmed service channels." },
];

const benefits = [
  { icon: <BadgeCheck />, title: "Operated by a licensed company", text: "Provided by Reliance and Trust Company Limited." },
  { icon: <Smartphone />, title: "A simple experience", text: "Designed to make sending money home easier to understand." },
  { icon: <ShieldCheck />, title: "A considered process", text: "Supported by identity verification and transaction compliance measures." },
  { icon: <ArrowDownLeft />, title: "Built for Myanmar communities", text: "Focused on the needs of Myanmar customers and their families." },
];

const complianceItems = [
  { icon: <ScanFace />, title: "Customer identity verification", text: "Customers complete the required identity checks." },
  { icon: <ClipboardCheck />, title: "Transaction monitoring", text: "Transactions are monitored as part of responsible remittance services." },
  { icon: <ShieldCheck />, title: "Regulatory compliance", text: "The company applies relevant compliance measures to its remittance services." },
];

export default function CorporateHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("#top");
  const [scrollCueVisible, setScrollCueVisible] = useState(true);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;

    const updateOnScroll = () => {
      frame = 0;
      const currentY = window.scrollY;
      const scrollingUp = currentY < previousY;
      const atTop = currentY < 8;
      const heroHasPassed = (heroRef.current?.getBoundingClientRect().bottom ?? 0) <= 0;

      setPastHero((current) => current ? currentY > 12 : heroHasPassed);
      setNavVisible(atTop || scrollingUp);
      const heroAtTop = (heroRef.current?.getBoundingClientRect().top ?? -1) >= -1;
      setScrollCueVisible(atTop && heroAtTop);

      const activeLine = window.innerHeight * 0.36;
      let nextActiveSection = "#top";
      let closestSectionTop = Number.NEGATIVE_INFINITY;
      for (const item of navigation) {
        if (item.href === "#top") continue;
        const target = document.getElementById(item.href.slice(1));
        if (!target) continue;
        const targetTop = target.getBoundingClientRect().top;
        if (targetTop <= activeLine && targetTop > closestSectionTop) {
          nextActiveSection = item.href;
          closestSectionTop = targetTop;
        }
      }
      setActiveSection(nextActiveSection);
      previousY = currentY;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateOnScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateOnScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-white text-ink">
      <section ref={heroRef} className={`hero-shell ${pastHero ? "z-[90]" : ""}`}>
        <div className="min-h-[84px] px-4 pt-4 md:min-h-[92px] md:px-7 md:pt-6">
        <header className={`mx-auto w-full max-w-[1280px] transition-[transform,opacity] duration-500 ease-out ${pastHero ? `fixed inset-x-0 top-3 z-[100] px-4 md:px-7 ${navVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[140%] opacity-0"}` : "relative z-[80]"}`}>
          <div className="mx-auto flex min-h-[68px] max-w-[1280px] items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 shadow-lg shadow-coral/8 backdrop-blur-xl md:px-6">
            <a href="#top" aria-label="Reliance and Trust home" className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight">
              <span className="logo-mark">R&amp;T</span><span className="hidden sm:inline">Reliance &amp; Trust</span><span className="sm:hidden">R&amp;T</span>
            </a>
            <nav aria-label="Main navigation" className="hidden items-center gap-x-2.5 gap-y-2 text-xs font-bold lg:flex xl:gap-x-4 xl:text-[13px]">
              {navigation.map((item) => <a key={item.label} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => setActiveSection(item.href)} className="nav-link whitespace-nowrap transition-colors hover:text-coral" href={item.href}>{item.label}</a>)}
            </nav>
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <LanguageDropdown />
              <Button size="sm" variant="coral" asChild><a href="#mingalarpar">Explore Mingalarpar</a></Button>
            </div>
            <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 shrink-0 place-items-center rounded-full text-ink transition hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral lg:hidden">
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mx-auto mt-2 grid max-w-[1280px] gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl lg:hidden">
            {navigation.map((item) => <a key={item.label} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => { setActiveSection(item.href); setMenuOpen(false); }} className="nav-link rounded-xl px-3 py-3 text-sm font-bold hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral" href={item.href}>{item.label}</a>)}
            <LanguageDropdown mobile />
            <Button className="m-2" variant="coral" asChild><a href="#mingalarpar" onClick={() => setMenuOpen(false)}>Explore Mingalarpar <ArrowRight className="size-4" /></a></Button>
          </nav>}
        </header>
        </div>

        <div className="hero-content mx-auto grid min-h-[610px] max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.03fr_.97fr] md:px-10 md:py-20 lg:px-12">
          <div className="min-w-0 max-w-xl">
            
            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.04] tracking-[-.055em] sm:text-6xl md:text-[66px]">Send Money Home <span className="text-coral">with Mingalarpar</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted">A simple and trusted way to send money from Thailand to Myanmar.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button variant="coral" size="lg" asChild><a href="#mingalarpar">Explore Mingalarpar <ArrowRight className="size-4" /></a></Button><Button variant="outline" size="lg" asChild><a href="#how-it-works">How It Works</a></Button></div>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-coral/10 bg-white/80 px-4 py-2.5 text-xs font-bold text-ink shadow-sm"><span className="size-8 shrink-0 overflow-hidden rounded-full"><CountryFlag country="Thailand" /></span><span>Thailand</span><MoveRight className="size-4 text-coral" /><span className="size-8 shrink-0 overflow-hidden rounded-full"><CountryFlag country="Myanmar" /></span><span>Myanmar</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-10 rounded-full bg-coral/15 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto w-full max-w-[280px]">
              <div className="relative mx-auto mt-7 aspect-[393/852] w-full max-w-[250px] overflow-hidden rounded-[44px] border-[7px] border-[#1d2635] bg-white p-4 pt-12 shadow-[0_28px_70px_rgba(7,27,58,.24)]">
                <div aria-hidden="true" className="absolute left-1/2 top-2 z-20 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-[#101114]" />
                <div aria-hidden="true" className="absolute left-5 right-5 top-3 flex justify-between text-[9px] font-extrabold"><span>9:41</span><span>•••</span></div>
                <div className="flex items-center gap-2"><MingalarparLogo className="size-9 rounded-xl" /><span className="text-xs font-extrabold">Mingalarpar</span><span className="ml-auto rounded-full bg-soft px-2 py-1 text-[9px] font-bold text-coral">Coming soon</span></div>
                <div className="mt-5 rounded-2xl bg-soft p-4"><p className="text-[10px] font-bold text-muted">Your first corridor</p><div className="mt-3 flex items-center justify-between text-sm font-extrabold"><span>Thailand</span><MoveRight className="size-4 text-coral" /><span>Myanmar</span></div><div className="mt-3 flex justify-between text-[10px] font-bold text-muted"><span>THB</span><span>MMK</span></div></div>
                <div className="mt-3 grid grid-cols-2 gap-2"><div className="rounded-xl border border-black/5 p-3"><span className="text-[9px] font-semibold text-muted">Designed for</span><b className="mt-1 block text-[11px]">Simple steps</b></div><div className="rounded-xl border border-black/5 p-3"><span className="text-[9px] font-semibold text-muted">Built around</span><b className="mt-1 block text-[11px]">Your journey</b></div></div>
                <div className="mt-4 rounded-full bg-ink px-4 py-3 text-center text-[11px] font-bold text-white">Mingalarpar App · Coming Soon</div>
              </div>
              <p className="mt-4 text-center text-[10px] leading-5 text-muted">Illustrative product preview. Features and availability will be confirmed before launch.</p>
            </div>
          </div>
        </div>
      </section>

      {scrollCueVisible && <a
        href="#trust-title"
        aria-label="Scroll down to explore the page"
        className="scroll-cue fixed left-1/2 z-40 grid size-16 -translate-x-1/2 place-items-center rounded-full border border-coral/15 bg-white/95 shadow-lg shadow-ink/10 backdrop-blur md:size-16"
      >
        <span aria-hidden="true" className="scroll-mouse"><span className="scroll-mouse-dot" /></span>
      </a>}

      <section aria-labelledby="trust-title" className="section-wrap py-20 md:py-24">
        <SectionHeading title="Built on Trust" text="A responsible remittance service grounded in clear processes and customer care." id="trust-title" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{trustItems.map((item) => <InfoCard key={item.title} {...item} />)}</div>
      </section>

      <section id="about" className="section-wrap pb-20 md:pb-24">
        <div id="mingalarpar" className="grid scroll-mt-8 items-center gap-10 rounded-[32px] bg-soft p-7 md:grid-cols-[.9fr_1.1fr] md:p-14">
          <div className="relative grid min-h-[260px] place-items-center overflow-hidden rounded-[26px] bg-white"><div className="absolute size-52 rounded-full bg-coral/10 blur-2xl" /><MingalarparLogo className="relative size-40 rounded-[28px] shadow-[0_16px_38px_rgba(7,27,58,.12)]" /><span className="absolute bottom-5 right-5 rounded-full border border-coral/10 bg-soft px-3 py-2 text-[10px] font-extrabold text-coral">Thailand → Myanmar</span></div>
          <div><h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">Meet Mingalarpar</h2><p className="mt-5 leading-7 text-muted">Mingalarpar is the remittance service from Reliance and Trust Company Limited, designed to help people send money home through a simple and convenient digital experience.</p><div className="mt-7 grid gap-4 sm:grid-cols-2"><CheckLine text="Designed for a mobile-first experience" /><CheckLine text="Focused on the Thailand–Myanmar corridor" /><CheckLine text="Ready to support multiple partners" /><CheckLine text="Planned with Myanmar communities in mind" /></div><Button variant="coral" className="mt-8" asChild><a href="#app">Explore Mingalarpar <ArrowRight className="size-4" /></a></Button></div>
        </div>
      </section>

      <section id="how-it-works" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title="Sending Money Home Made Simple" text="Three clear steps are planned for the Mingalarpar remittance journey. Final service details will be confirmed before launch." />
        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[17%] right-[17%] top-11 hidden border-t-2 border-dashed border-coral/25 md:block" />
          <StepCard number="01" icon={<ScanFace />} title="Register & Verify" text="Create your Mingalarpar account and complete the required identity verification." />
          <StepCard number="02" icon={<WalletCards />} title="Create Your Transfer" text="Enter your recipient details, review the transfer information and complete payment using an available method." />
          <StepCard number="03" icon={<ArrowDownLeft />} title="Money Reaches Myanmar" text="Your recipient receives the transfer through a supported payout method." />
        </div>
        <div className="mt-8 text-center"><Button variant="outline" asChild><a href="#faq">Learn more <ArrowRight className="size-4" /></a></Button></div>
      </section>

      <section id="corridors" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title="Connecting Thailand and Myanmar" text="Our first remittance corridor focuses on helping people in Thailand send money to their families and loved ones in Myanmar." />
        <div className="mx-auto mt-12 max-w-4xl rounded-[30px] border border-coral/10 bg-white p-6 shadow-[0_24px_60px_rgba(13,77,136,.08)] md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <CountryCard country="Thailand" currency="Sending currency · THB" />
            <div className="flex flex-col items-center gap-2 text-coral"><MoveRight className="hidden size-8 sm:block" /><span className="rounded-full bg-soft px-4 py-2 text-xs font-extrabold">THB → MMK</span><MoveRight className="size-6 rotate-90 sm:hidden" /></div>
            <CountryCard country="Myanmar" currency="Receiving currency · MMK" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-black/5 pt-6 text-[11px] text-muted"><span className="font-bold">Corridor status</span><span className="rounded-full bg-soft px-3 py-1.5 font-extrabold text-coral">{corridorStatusLabel(websiteSettings.corridors[0].status)}</span><span>· availability will be announced when confirmed</span></div>
        </div>
      </section>

      <section id="rates" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <div className="grid items-center gap-10 rounded-[32px] bg-soft p-7 md:grid-cols-[.85fr_1.15fr] md:p-14">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm" aria-label="Transfer quote information unavailable before launch">
            <div className="flex items-center justify-between"><h3 className="font-extrabold">Transfer estimate</h3><Banknote className="text-coral" /></div>
            <div className="mt-5 rounded-2xl bg-soft p-4"><p className="text-[10px] font-bold text-muted">Sending amount</p><div className="mt-2 flex items-center justify-between"><span className="text-2xl font-extrabold text-muted">—</span><span className="rounded-full bg-white px-3 py-1.5 text-xs font-extrabold">THB</span></div></div>
            <div className="my-3 flex items-center justify-center gap-2 text-[10px] font-bold text-muted"><span className="h-px flex-1 bg-black/10" />Quote not available yet<span className="h-px flex-1 bg-black/10" /></div>
            <div className="rounded-2xl border border-black/5 p-4"><p className="text-[10px] font-bold text-muted">Recipient amount</p><div className="mt-2 flex items-center justify-between"><span className="text-2xl font-extrabold text-muted">—</span><span className="rounded-full bg-soft px-3 py-1.5 text-xs font-extrabold">MMK</span></div></div>
            <p className="mt-4 text-center text-[10px] leading-5 text-muted">Exchange rate and transfer fee details will be available when confirmed.</p>
          </div>
          <div><h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">Know Before You Send</h2><p className="mt-5 leading-7 text-muted">Review the applicable exchange rate, transfer fee and amount your recipient will receive before confirming your transfer.</p><div className="mt-7 grid gap-3 text-sm font-bold"><CheckLine text="Sending and receiving currencies" /><CheckLine text="Applicable exchange rate and transfer fee" /><CheckLine text="Recipient amount before confirmation" /></div></div>
        </div>
      </section>

      {websiteSettings.paymentMethodsPublished && <section className="section-wrap py-20"><SectionHeading title="Convenient Ways to Send and Receive" text="Available payment and payout methods will be shown here." /></section>}

      <section className="section-wrap py-20 md:py-24">
        <SectionHeading title="Why Choose Mingalarpar?" text="A thoughtful remittance experience, built around the people who send and receive." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((item) => <InfoCard key={item.title} {...item} />)}</div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="grid items-center gap-10 rounded-[32px] bg-ink p-7 text-white md:grid-cols-[.8fr_1.2fr] md:p-14">
          <div><h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">Your Trust Matters</h2><p className="mt-5 leading-7 text-white/65">Reliance and Trust applies identity verification, transaction monitoring and regulatory compliance measures to support secure and responsible remittance services.</p><a href="#legal" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-coral">Compliance information <ArrowRight className="size-4" /></a></div>
          <div className="grid gap-3 sm:grid-cols-3">{complianceItems.map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5"><span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-coral">{item.icon}</span><h3 className="mt-5 text-sm font-extrabold">{item.title}</h3><p className="mt-2 text-xs leading-5 text-white/55">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section id="app" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <div className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-soft p-7 md:grid-cols-[1.1fr_.9fr] md:p-14">
          <div><h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">Mingalarpar in Your Pocket</h2><p className="mt-5 max-w-xl leading-7 text-muted">Discover a convenient way to manage your remittance journey. App information and official store links will be added when available.</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><CheckLine text="Account registration" /><CheckLine text="Transfer creation" /><CheckLine text="Transfer tracking" /><CheckLine text="Transaction history" /></div><div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-extrabold text-coral shadow-sm"><span className="size-2 rounded-full bg-coral" /> Mingalarpar App — {websiteSettings.appLaunched ? "Available" : "Coming Soon"}</div></div>
          <div className="relative mx-auto w-full max-w-[360px]"><div className="absolute inset-4 rounded-full bg-coral/15 blur-3xl" /><div className="relative mx-auto aspect-[393/852] w-full max-w-[250px] overflow-hidden rounded-[44px] border-[7px] border-[#1d2635] bg-white p-5 pt-12 shadow-[0_28px_70px_rgba(7,27,58,.24)]"><div aria-hidden="true" className="absolute left-1/2 top-2 z-20 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-[#101114]" /><div aria-hidden="true" className="absolute left-5 right-5 top-3 flex justify-between text-[9px] font-extrabold"><span>9:41</span><span>•••</span></div><MingalarparLogo className="size-12 rounded-2xl" /><h3 className="mt-4 text-xl font-extrabold">Hello, Mingalarpar</h3><p className="mt-1 text-xs text-muted">A simpler way to send money home.</p><div className="mt-6 rounded-2xl bg-soft p-4"><span className="text-[10px] font-bold text-muted">Your planned corridor</span><div className="mt-2 flex items-center justify-between text-xs font-extrabold"><span>Thailand</span><MoveRight className="size-4 text-coral" /><span>Myanmar</span></div></div><div className="mt-3 grid h-24 place-items-center rounded-2xl border border-dashed border-coral/25 text-center"><div><span className="text-xs font-bold">A clear journey</span><span className="mt-1 block text-[10px] text-muted">Details coming soon</span></div></div></div><span className="absolute -right-2 top-16 rounded-full bg-white px-4 py-2 text-[10px] font-extrabold shadow-lg">Product preview</span></div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <SectionHeading title="Connecting More Communities" text="Thailand to Myanmar is our first step. Reliance and Trust plans to expand remittance services to additional international corridors." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">{websiteSettings.corridors.map((corridor, index) => <article key={`${corridor.from}-${corridor.to}`} className={`rounded-[26px] border p-6 md:p-8 ${index === 0 ? "border-coral/15 bg-soft" : "border-black/5 bg-white"}`}><div className="flex items-center justify-between"><span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-coral">{index === 0 ? "First corridor" : "Future expansion"}</span><span className="text-xs font-extrabold text-muted">{corridorStatusLabel(corridor.status)}</span></div><h3 className="mt-6 flex flex-wrap items-center gap-3 text-2xl font-extrabold"><span className="size-8 shrink-0 overflow-hidden rounded-full shadow-sm"><CountryFlag country={corridor.from} /></span>{corridor.from}<MoveRight className="size-5 text-coral" /><span className="size-8 shrink-0 overflow-hidden rounded-full shadow-sm"><CountryFlag country={corridor.to} /></span>{corridor.to}</h3><p className="mt-3 text-sm text-muted">{corridor.sendCurrency} to {corridor.receiveCurrency}</p><p className="mt-5 text-xs leading-5 text-muted">{index === 0 ? "Service availability will be announced when confirmed." : "Planned for future expansion. Not currently available."}</p></article>)}</div>
      </section>

      <section id="news" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title="Latest from Reliance and Trust" text="Company news and announcements will be shared here as they are published." />
        {websiteSettings.newsPublished && websiteSettings.newsPosts.length > 0 ? <><div className="mt-10 grid gap-4 md:grid-cols-3">{websiteSettings.newsPosts.map((post) => <NewsCard key={post.slug} post={post} />)}</div><div className="mt-7 text-center"><Button variant="outline" asChild><a href="/news">View All News <ArrowRight className="size-4" /></a></Button></div></> : <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-coral/20 bg-soft/60 px-6 py-8 text-center"><p className="text-sm font-bold">No published updates yet</p><p className="mt-2 text-xs leading-5 text-muted">Please check back for company news, service updates and Mingalarpar announcements.</p></div>}
      </section>

      <section id="faq" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title="Frequently Asked Questions" text="Answers about Mingalarpar and our planned remittance service." />
        <Accordion type="single" collapsible className="mx-auto mt-10 grid max-w-3xl gap-3">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion>
      </section>

      <section id="careers" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[30px] border border-coral/10 bg-soft p-7 sm:flex-row sm:items-center md:p-10"><div className="flex items-start gap-5"><span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white text-coral shadow-sm"><BriefcaseBusiness /></span><div><h2 className="mt-2 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">Build the Future of Remittance With Us</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Join Reliance and Trust Company Limited and help build financial services that connect people and communities.</p><p className="mt-2 text-xs text-muted">Career information and openings will be published when available.</p></div></div><Button variant="outline" asChild><a href="#careers">Explore Careers <ArrowRight className="size-4" /></a></Button></div>
      </section>

      <section className="section-wrap pb-20 pt-8 md:pb-24">
        <div className="cta-panel"><div><h2 className="mt-2 max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-[-.05em] text-white sm:text-5xl md:text-[56px]">Ready to Discover Mingalarpar?</h2><p className="mt-4 max-w-xl text-sm leading-6 text-white/75">Explore the next step in connecting Thailand and Myanmar through convenient remittance services.</p></div><Button size="lg" className="shrink-0 bg-white text-ink hover:bg-white/90" asChild><a href="#mingalarpar">Explore Mingalarpar <ArrowRight className="size-4" /></a></Button></div>
      </section>

      <footer id="contact" className="section-wrap scroll-mt-8 pb-7">
        <div id="legal" className="rounded-[30px] bg-ink px-7 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div><a href="#top" className="flex items-center gap-2 font-extrabold"><span className="logo-mark invert">R&amp;T</span><span>Reliance &amp; Trust</span></a><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Reliance and Trust Company Limited — building remittance services that connect people and communities.</p></div>
            <FooterCol title="Company" links={[["About Us", "#about"], ["Careers", "#careers"], ["News", "#news"], ["Contact Us", "#contact"]]} />
            <FooterCol title="Mingalarpar" links={[["How It Works", "#how-it-works"], ["Thailand → Myanmar", "#corridors"], ["App Information", "#app"], ["Future Corridors", "#corridors"]]} />
            <FooterCol title="Support" links={[["Help Center", "#faq"], ["FAQ", "#faq"], ["Contact Support", "#contact"], ["Fraud Awareness", "#legal"], ["Complaints", "#contact"]]} />
            <FooterCol title="Legal" links={[["Privacy Policy", "#legal"], ["Terms & Conditions", "#legal"], ["Compliance", "#legal"], ["Cookie Policy", "#legal"], ["Regulatory Information", "#legal"]]} />
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between"><p>© 2026 Reliance and Trust Company Limited. All rights reserved.</p><p>Business contact and regulatory details will be published when approved.</p></div>
        </div>
      </footer>
    </main>
  );
}

function LanguageDropdown({ mobile = false }: { mobile?: boolean }) {
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (dropdownRef.current) dropdownRef.current.open = false; };

  return <details ref={dropdownRef} className={`dropdown dropdown-end group relative z-[90] ${mobile ? "w-full" : "shrink-0"}`}>
    <summary aria-label="Choose language" aria-haspopup="menu" className={`flex cursor-pointer list-none items-center gap-2 border border-coral/10 bg-white font-bold text-ink shadow-sm transition hover:border-coral/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/30 [&::-webkit-details-marker]:hidden ${mobile ? "w-full justify-between rounded-xl px-3 py-3 text-sm" : "rounded-full px-3.5 py-2.5 text-[11px]"}`}>
      <LanguageFlag code="en" />
      <span className="flex-1 text-left">English</span>
      <ChevronDown aria-hidden="true" className="size-4 text-muted transition-transform group-open:rotate-180" />
    </summary>
    <ul role="menu" className="menu dropdown-content z-[120] mt-2 w-56 gap-1 rounded-2xl border border-coral/10 bg-white p-2 text-ink shadow-xl shadow-ink/10">
      <li role="none"><button type="button" role="menuitemradio" aria-checked="true" onClick={closeMenu} className="flex items-center justify-between rounded-xl bg-soft px-3 py-2.5 text-sm font-bold text-ink hover:bg-soft"><span className="flex items-center gap-2"><LanguageFlag code="en" />English</span><Check aria-hidden="true" className="size-4 text-success" /></button></li>
      <li role="none"><button type="button" role="menuitem" disabled className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted opacity-65"><span className="flex items-center gap-2"><LanguageFlag code="my" />Myanmar</span><span className="text-[9px] font-bold uppercase tracking-wide">Coming soon</span></button></li>
      <li role="none"><button type="button" role="menuitem" disabled className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted opacity-65"><span className="flex items-center gap-2"><LanguageFlag code="th" />Thai</span><span className="text-[9px] font-bold uppercase tracking-wide">Coming soon</span></button></li>
    </ul>
  </details>;
}

function LanguageFlag({ code }: { code: "en" | "my" | "th" }) {
  const isMyanmar = code === "my";
  const isThai = code === "th";
  return (
    <svg aria-hidden="true" viewBox="0 0 36 24" preserveAspectRatio="xMidYMid slice" className="size-6 shrink-0 self-center overflow-hidden rounded-full shadow-sm ring-1 ring-black/10">
      {isMyanmar ? (
        <>
          <rect width="36" height="8" fill="#FECB00" />
          <rect y="8" width="36" height="8" fill="#EA2839" />
          <rect y="16" width="36" height="8" fill="#34B233" />
          <path d="m18 3.2 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9L18 3.2Z" fill="white" />
        </>
      ) : isThai ? (
        <>
          <rect width="36" height="24" fill="#A51931" />
          <rect y="4" width="36" height="16" fill="white" />
          <rect y="8" width="36" height="8" fill="#2D2A4A" />
        </>
      ) : (
        <>
          <rect width="36" height="24" fill="#fff" />
          <path d="M0 0h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0z" fill="#C8102E" />
          <path d="M0 0h16v13H0z" fill="#012169" />
          <path d="m0 0 16 13M16 0 0 13" stroke="#fff" strokeWidth="3" />
          <path d="m0 0 16 13M16 0 0 13" stroke="#C8102E" strokeWidth="1" />
          <path d="M8 0v13M0 6.5h16" stroke="#fff" strokeWidth="4" />
          <path d="M8 0v13M0 6.5h16" stroke="#C8102E" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

function SectionHeading({ title, text, id }: { title: string; text: string; id?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><h2 id={id} className="text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">{title}</h2><p className="mt-5 text-base leading-7 text-muted">{text}</p></div>;
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article className="feature-card !min-h-0 !bg-[#f4f8fc] p-6"><div className="feature-icon">{icon}</div><h3 className="mt-6 text-base font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>;
}

function CheckLine({ text }: { text: string }) { return <span className="inline-flex items-start gap-2 text-sm font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-success" />{text}</span>; }

function StepCard({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) {
  return <article className="relative rounded-[26px] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(13,77,136,.07)]"><div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-soft text-coral">{icon}</span><span className="text-sm font-extrabold tracking-widest text-coral">{number}</span></div><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article>;
}

function CountryCard({ country, currency }: { country: string; currency: string }) {
  return <div className="flex min-w-[210px] items-center gap-4 rounded-2xl bg-soft p-5"><span className="size-14 shrink-0 overflow-hidden rounded-full shadow-sm"><CountryFlag country={country} /></span><span><b className="block text-lg">{country}</b><small className="mt-1 block text-[10px] font-semibold text-muted">{currency}</small></span></div>;
}

function CountryFlag({ country }: { country: string }) {
  const clipId = useId();

  if (country === "Laos") {
    return <svg role="img" aria-label="Laos flag" viewBox="0 0 100 100" className="block size-full">
      <defs><clipPath id={clipId}><circle cx="50" cy="50" r="50" /></clipPath></defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="100" height="100" fill="#CE1126" />
        <path d="M0 25h100v50H0z" fill="#002868" />
        <circle cx="50" cy="50" r="17" fill="#FFF" />
      </g>
    </svg>;
  }

  if (country === "Thailand") {
    return <svg role="img" aria-label="Thailand flag" viewBox="0 0 100 100" className="block size-full">
      <defs><clipPath id={clipId}><circle cx="50" cy="50" r="50" /></clipPath></defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="100" height="100" fill="#A51931" />
        <path d="M0 25h100M0 75h100" stroke="#F4F5F8" strokeWidth="16.66" />
        <path d="M0 50h100" stroke="#2D2A4A" strokeWidth="33.34" />
      </g>
    </svg>;
  }

  return <svg role="img" aria-label="Myanmar flag" viewBox="0 0 100 100" className="block size-full">
    <defs><clipPath id={clipId}><circle cx="50" cy="50" r="50" /></clipPath></defs>
    <g clipPath={`url(#${clipId})`}>
      <rect width="100" height="100" fill="#EA2839" />
      <path d="M0 0h100v33.33H0z" fill="#FECB00" />
      <path d="M0 33.33h100v33.34H0z" fill="#34B233" />
      <path d="m50 25 7.35 18.1 19.5 1.15-15 12.7 4.9 19L50 65.5 33.25 76l4.9-19-15-12.7 19.5-1.15z" fill="#FFF" />
    </g>
  </svg>;
}

function MingalarparLogo({ className = "" }: { className?: string }) {
  return <span className={`grid shrink-0 place-items-center overflow-hidden border border-coral/10 bg-white shadow-[0_8px_22px_rgba(7,27,58,.09)] ${className}`}>
    <Image src="/mingalarpar-logo-transparent.png" alt="Mingalarpar app logo" width={128} height={128} className="size-[82%] object-contain drop-shadow-[0_2px_3px_rgba(7,27,58,.12)]" />
  </span>;
}

function NewsCard({ post }: { post: NewsPost }) {
  return <article className="overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    {post.image && <img src={post.image.src} alt={post.image.alt} loading="lazy" className="h-48 w-full object-cover" />}
    <div className="p-6"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-soft px-3 py-1.5 text-[10px] font-extrabold text-coral">{post.category}</span><time className="text-[10px] font-semibold text-muted">{post.publishedAt}</time></div><h3 className="mt-5 text-lg font-extrabold">{post.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p><a href={`/news/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-coral hover:text-coral-dark">Read More <ArrowRight className="size-4" /></a></div>
  </article>;
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return <div><p className="footer-title">{title}</p><div className="mt-4 grid gap-3">{links.map(([label, href]) => <a className="text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral" key={label} href={href}>{label}<ChevronRight className="ml-1 inline size-3 opacity-50" /></a>)}</div></div>;
}
