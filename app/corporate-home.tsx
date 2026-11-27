"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDownLeft, ArrowRight, BadgeCheck, Banknote, BriefcaseBusiness, Check,
  ChevronDown, ChevronRight, CircleHelp, ClipboardCheck, Globe2, Headphones, Landmark,
  Menu, ScanFace, ShieldCheck, Smartphone, WalletCards, X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FraudAwarenessFooterLink, LegalFooterCol } from "./components/legal-footer";
import { FooterContactDetails } from "./components/footer-contact";
import { useSiteLanguage, type SiteLanguage } from "./components/language-provider";
import { faqsMy } from "@/lib/faqs-my";
import { corridorStatusLabel, faqs, navigation, websiteSettings, type NewsPost } from "@/lib/website-content";

const trustItems = [
  { icon: <Landmark />, title: "CBM-granted remittance operator", text: "Granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343." },
  { icon: <Globe2 />, title: "A focused first corridor", text: "Our first planned remittance corridor connects Thailand and Myanmar." },
  { icon: <ScanFace />, title: "Identity verification", text: "The customer journey includes required identity verification." },
  { icon: <Headphones />, title: "Customer support", text: "Support information will be shared through confirmed service channels." },
];

const trustItemsMy = [
  { title: "မြန်မာနိုင်ငံတော်ဗဟိုဘဏ် (CBM) ထံမှ ပြည်ပငွေလွှဲလုပ်ငန်း လုပ်ကိုင်ခွင့်ရရှိထားသော ကုမ္ပဏီ", text: "ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 ဖြင့် ခွင့်ပြုချက်ရရှိထားပါသည်။" },
  { title: "ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့ ငွေလွှဲပို့နိုင်ရန် စီစဉ်ထားပါသည်။", text: "ပထမဆုံး စီစဉ်ထားသော ငွေလွှဲလမ်းကြောင်းမှာ ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့ ဖြစ်ပါသည်။" },
  { title: "အချက်အလက်များ ရယူခြင်း", text: "လိုအပ်သော အချက်အလက်များကို ရယူပြီး ငွေလွှဲသူများ ငွေလွှဲမှုကို အဆင်ပြေချောမွေ့စွာ ဆောင်ရွက်နိုင်ရန် စီစဉ်ထားပါသည်။" },
  { title: "သုံးစွဲသူ အကူအညီပေးခြင်း", text: "အတည်ပြုပြီးသော ဆက်သွယ်ရေးလမ်းကြောင်းများမှတစ်ဆင့် အကူအညီဆိုင်ရာ အချက်အလက်များကို မျှဝေပေးပါမည်။" },
];

const benefits = [
  { icon: <BadgeCheck />, title: "Operated by an authorized company", text: "Reliance and Trust Company Limited has remittance operator status granted by the Central Bank of Myanmar (CBM)." },
  { icon: <Smartphone />, title: "A simple experience", text: "Designed to make sending money home easier to understand." },
  { icon: <ShieldCheck />, title: "A considered process", text: "Supported by identity verification and transaction compliance measures." },
  { icon: <ArrowDownLeft />, title: "Built for Myanmar communities", text: "Focused on the needs of Myanmar customers and their families." },
];

const complianceItems = [
  { icon: <ScanFace />, title: "Customer identity verification", text: "Customers complete the required identity checks." },
  { icon: <ClipboardCheck />, title: "Transaction monitoring", text: "Transactions are monitored as part of responsible remittance services." },
  { icon: <ShieldCheck />, title: "Regulatory compliance", text: "The company applies relevant compliance measures to its remittance services." },
];

const benefitsMy = [
  { title: "ခွင့်ပြုချက်ရရှိထားသော ကုမ္ပဏီက ဖြစ်ခြင်း", text: "Reliance and Trust Company Limited သည် မြန်မာနိုင်ငံတော်ဗဟိုဘဏ် (CBM) ထံမှ ငွေလွှဲဝန်ဆောင်မှု လုပ်ကိုင်ခွင့်ရရှိထားသည့် ကုမ္ပဏီတစ်ခု ဖြစ်ပါသည်။" },
  { title: "ရိုးရှင်းလွယ်ကူသော အတွေ့အကြုံ", text: "မိမိတို့၏ မိသားစုထံသို့ ငွေလွှဲပို့ရာတွင် ပိုမိုလွယ်ကူစေရန် ရည်ရွယ်ထားပါသည်။" },
  { title: "သေချာစွာ စဉ်းစားချင့်ချိန်ထားသည့် လုပ်ငန်းစဉ်တစ်ခု", text: "အထောက်အထားစိစစ်ခြင်းနှင့် ငွေကြေးဆိုင်ရာ စည်းမျဉ်းလိုက်နာမှု အစီအမံများဖြင့် ပံ့ပိုးထားပါသည်။" },
  { title: "မိတ်ဟောင်း မိတ်သစ်များအတွက် စေတနာ မေတ္တာဖြင့် ဖန်တီးထားသည်", text: "သုံးစွဲသူများနှင့် ၎င်းတို့၏ မိသားစုဝင်များ၏ လိုအပ်ချက်များကို အလေးထားပါသည်။" },
];

const complianceItemsMy = [
  { title: "အထောက်အထားစိစစ်မှု", text: "သုံးစွဲသူများသည် လိုအပ်သော အထောက်အထားစိစစ်မှုအတွက် သက်ဆိုင်ရာ အချက်အလက်များကို ပေးအပ်ရပါမည်။" },
  { title: "ငွေလွှဲမှုများလုံခြုံစိတ်ချရစေရန်စောင့်ကြည့်ခြင်း", text: "တာဝန်ယူမှုရှိသော ငွေလွှဲဝန်ဆောင်မှု၏ တစ်စိတ်တစ်ပိုင်းအဖြစ် ငွေလွှဲမှုများကို လိုအပ်သလို စောင့်ကြည့်စိစစ်ပါမည်။" },
  { title: "စည်းမျဉ်းစည်းကမ်း လိုက်နာမှု", text: "သက်ဆိုင်ရာ ဥပဒေ၊ နည်းဥပဒေ၊ စည်းမျဉ်းနှင့် ညွှန်ကြားချက်များနှင့်အညီ လိုက်နာမှုဆိုင်ရာ အစီအမံများကို ဆောင်ရွက်ပါမည်။" },
];

const myanmarNavigationLabels: Record<string, string> = {
  Home: "ပင်မ",
  Mingalarpar: "မင်္ဂလာပါ",
  "How It Works": "ငွေလွှဲလုပ်ငန်းစဉ်",
  Help: "အကူအညီ",
  News: "သတင်း",
  Careers: "အလုပ်အကိုင်",
  "About Us": "ကျွန်ုပ်တို့အကြောင်း",
  "Contact Us": "ဆက်သွယ်ရန်",
};

export default function CorporateHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useSiteLanguage();
  const isMyanmar = language === "my";
  const heroRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("#top");
  const [scrollCueVisible, setScrollCueVisible] = useState(true);

  useEffect(() => {
    let frame = 0;

    const updateOnScroll = () => {
      frame = 0;
      const currentY = window.scrollY;
      const atTop = currentY < 8;

      const heroAtTop = (heroRef.current?.getBoundingClientRect().top ?? -1) >= -1;
      setScrollCueVisible(atTop && heroAtTop);

      const activeLine = window.innerHeight * 0.36;
      let nextActiveSection = "#top";
      let closestSectionTop = Number.NEGATIVE_INFINITY;
      for (const item of navigation) {
        if (!item.href.startsWith("#") || item.href === "#top") continue;
        const target = document.getElementById(item.href.slice(1));
        if (!target) continue;
        const targetTop = target.getBoundingClientRect().top;
        if (targetTop <= activeLine && targetTop > closestSectionTop) {
          nextActiveSection = item.href;
          closestSectionTop = targetTop;
        }
      }
      setActiveSection(nextActiveSection);
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
    <main id="top" lang={isMyanmar ? "my" : "en"} className="overflow-hidden bg-white text-ink">
      <section ref={heroRef} className="hero-shell z-[90]">
        <div className="min-h-[84px] px-4 pt-4 md:min-h-[92px] md:px-7 md:pt-6">
        <header className="fixed inset-x-0 top-3 z-[100] mx-auto w-full max-w-[1280px] px-4 md:px-7">
          <div className="mx-auto flex min-h-[68px] max-w-[1280px] items-center justify-between gap-3 rounded-2xl border border-[#dce5ee] bg-white/95 px-4 shadow-[0_10px_32px_rgba(7,27,58,.16)] backdrop-blur-xl md:px-6">
            <a href="#top" aria-label="Reliance and Trust home" className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight">
              <img src="/rt-logo.svg" alt="Reliance &amp; Trust" className="h-10 w-auto object-contain" />
            </a>
            <nav aria-label="Main navigation" className="hidden items-center gap-x-2.5 gap-y-2 text-xs font-bold lg:flex xl:gap-x-4 xl:text-[13px]">
              {navigation.map((item) => <a key={item.label} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => setActiveSection(item.href)} className={`nav-link whitespace-nowrap transition-colors hover:text-coral ${isMyanmar ? "text-[11px] xl:text-xs" : ""}`} href={item.href}>{isMyanmar ? myanmarNavigationLabels[item.label] : item.label}</a>)}
            </nav>
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <LanguageDropdown language={language} onChange={setLanguage} />
              <Button size="sm" variant="coral" asChild><a href="#mingalarpar">{isMyanmar ? "Mingalarpar အား ပိုမိုသိရှိရန်" : "Explore Mingalarpar"}</a></Button>
            </div>
            <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 shrink-0 place-items-center rounded-full text-ink transition hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral lg:hidden">
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mx-auto mt-2 grid max-w-[1280px] gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl lg:hidden">
            {navigation.map((item) => <a key={item.label} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => { setActiveSection(item.href); setMenuOpen(false); }} className="nav-link rounded-xl px-3 py-3 text-sm font-bold hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral" href={item.href}>{isMyanmar ? myanmarNavigationLabels[item.label] : item.label}</a>)}
            <LanguageDropdown mobile language={language} onChange={setLanguage} />
            <Button className="m-2" variant="coral" asChild><a href="#mingalarpar" onClick={() => setMenuOpen(false)}>{isMyanmar ? "Mingalarpar အား ပိုမိုသိရှိရန်" : "Explore Mingalarpar"} <ArrowRight className="size-4" /></a></Button>
          </nav>}
        </header>
        </div>

        <div className="hero-content mx-auto grid min-h-[610px] max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.03fr_.97fr] md:px-10 md:py-20 lg:px-12">
          <div className="min-w-0 max-w-xl">
            
            <h1 className={`mt-5 font-extrabold ${isMyanmar ? "home-hero-title-my" : "text-[40px] leading-[1.15] tracking-[-.055em] sm:text-6xl md:text-[66px]"}`}>{isMyanmar ? <><span className="text-coral">Mingalarpar</span> ဖြင့် မိသားစုနှင့် ချစ်ခင်ရသူများထံသို့ ငွေလွှဲပို့နိုင်ပါသည်။</> : <>Send Money Home <span className="text-coral">with Mingalarpar</span></>}</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted">{isMyanmar ? "ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့ ငွေလွှဲပို့နိုင်မည့် ရိုးရှင်းပြီး ယုံကြည်စိတ်ချရသော ဝန်ဆောင်မှုတစ်ခု ဖြစ်လာစေရန် ရည်ရွယ်ထားပါသည်။" : "A simple and trusted way to send money from Thailand to Myanmar."}</p>
            <div className="mt-8 flex flex-wrap gap-3">{isMyanmar ? <><Button variant="coral" size="lg" asChild><a href="#mingalarpar">Mingalarpar အား ပိုမိုသိရှိရန် <ArrowRight className="size-4" /></a></Button><Button variant="outline" size="lg" asChild><a href="#how-it-works">အလုပ်လုပ်ပုံ</a></Button></> : <><Button variant="coral" size="lg" asChild><a href="#mingalarpar">Explore Mingalarpar <ArrowRight className="size-4" /></a></Button><Button variant="outline" size="lg" asChild><a href="#how-it-works">How It Works</a></Button></>}</div>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-coral/10 bg-white/80 px-4 py-2.5 text-xs font-bold text-ink shadow-sm"><span className="size-8 shrink-0 overflow-hidden rounded-full"><CountryFlag country="Thailand" /></span><span>Thailand</span><TransferArrows className="h-5 w-8 text-coral" /><span className="size-8 shrink-0 overflow-hidden rounded-full"><CountryFlag country="Myanmar" /></span><span>Myanmar</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-6 rounded-full bg-coral/10 blur-3xl" aria-hidden="true" />
            <Image src="/mingalarpar-workers-hero.png" alt="A Myanmar woman and man in Thailand happily using the Mingalarpar app, with its logo rising from their phone" width={1302} height={1208} priority className="relative mx-auto h-auto w-full max-w-[500px] object-contain drop-shadow-[0_18px_28px_rgba(7,27,58,.12)]" />
            <div className="relative mx-auto -mt-4 w-fit rounded-full border border-coral/10 bg-white/90 px-4 py-2.5 text-[10px] font-extrabold text-ink shadow-sm"><span className="mr-2 inline-block size-2 rounded-full bg-coral align-middle" />Mingalarpar · Coming soon</div>
          </div>
        </div>
      </section>

      {scrollCueVisible && <a
        href="#trust-title"
        aria-label="Scroll down to explore the page"
        className="scroll-cue fixed left-1/2 z-[95] grid size-16 -translate-x-1/2 place-items-center rounded-full border border-coral/15 bg-white/95 shadow-lg shadow-ink/10 backdrop-blur md:size-16"
      >
        <span aria-hidden="true" className="scroll-mouse"><span className="scroll-mouse-dot" /></span>
      </a>}

      <section aria-labelledby="trust-title" className="trust-section py-20 md:py-24">
        <div className="section-wrap">
          <SectionHeading title={isMyanmar ? "သုံးစွဲသူများ၏ ယုံကြည်မှုကို အခြေခံပြီးတည်ဆောက်ထားပါသည်။" : "Built on Trust"} text={isMyanmar ? "ရှင်းလင်းသော လုပ်ငန်းစဉ်နှင့် သုံးစွဲသူ၏အဆင်ပြေမှုကို အလေးထားသည့် တာဝန်ယူမှုရှိသော ငွေလွှဲဝန်ဆောင်မှုတစ်ခု ဖြစ်ပါသည်။" : "A responsible remittance service grounded in clear processes and customer care."} id="trust-title" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{trustItems.map((item, index) => <InfoCard key={item.title} icon={item.icon} title={isMyanmar ? trustItemsMy[index].title : item.title} text={isMyanmar ? trustItemsMy[index].text : item.text} />)}</div>
        </div>
      </section>

      <section id="about" className="section-wrap pb-20 md:pb-24">
        <div id="mingalarpar" className="mingalarpar-panel grid scroll-mt-8 items-center gap-10 rounded-[32px] p-7 md:grid-cols-[.9fr_1.1fr] md:p-14">
          <div className="mingalarpar-visual relative grid min-h-[260px] place-items-center overflow-hidden rounded-[26px] bg-white"><div className="absolute size-52 rounded-full bg-coral/10 blur-2xl" /><MingalarparLogo className="relative size-40 rounded-[28px] shadow-[0_16px_38px_rgba(7,27,58,.12)]" /><span className="absolute bottom-5 right-5 rounded-full border border-coral/10 bg-soft px-3 py-2 text-[10px] font-extrabold text-coral">Thailand → Myanmar</span></div>
          <div className="mingalarpar-copy"><h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">{isMyanmar ? "Mingalarpar" : "Meet Mingalarpar"}</h2><p className="mt-5 leading-7">{isMyanmar ? "Mingalarpar သည် Reliance and Trust Company Limited ၏ ငွေလွှဲဝန်ဆောင်မှုအမှတ်တံဆိပ်ဖြစ်ပြီး ထိုင်းနိုင်ငံတွင် အလုပ်လုပ်ကိုင်နေသော မြန်မာနိုင်ငံသားများ မိမိတို့၏ မိသားစုဝင်များထံသို့ ငွေလွှဲပို့ရာတွင် ပိုမိုရိုးရှင်းလွယ်ကူစေရန် မိုဘိုင်းကို ဦးစားပေးသည့် ဝန်ဆောင်မှုအဖြစ် စီစဉ်တည်ဆောက်ထားပါသည်။" : "Mingalarpar is the remittance service from Reliance and Trust Company Limited, designed to help people send money home through a simple and convenient digital experience."}</p><div className="mt-7 grid gap-4 sm:grid-cols-2"><CheckLine text={isMyanmar ? "Mobile ဦးစားပေး" : "Designed for a mobile-first experience"} /><CheckLine text={isMyanmar ? "ထိုင်း-မြန်မာငွေလွှဲ" : "Focused on the Thailand–Myanmar corridor"} /><CheckLine text={isMyanmar ? "မိတ်ဖက်များနှင့်ပူးပေါင်းရန် အသင့်" : "Ready to support multiple partners"} /><CheckLine text={isMyanmar ? "ပြည်ပရောက် မြန်မာနိုင်ငံသားများ၏ လိုအပ်ချက်များကို အလေးထား၍ စီစဉ်ထားပါသည်။" : "Planned with Myanmar communities in mind"} /><CheckLine text={isMyanmar ? "မိသားစုနှင့် ချစ်ခင်ရသူများထံသို့ ရိုးရှင်းလွယ်ကူစွာ ငွေလွှဲပို့နိုင်မည့် နည်းလမ်း" : "A simple way to send money to family and loved ones"} /><CheckLine text={isMyanmar ? "Mingalarpar ဖြင့် ငွေလွှဲရန် အဆင့်သုံးဆင့်ကို ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။ ဝန်ဆောင်မှုအသေးစိတ်ကို စတင်မိတ်ဆက်မီ အတည်ပြုထုတ်ပြန်ပါမည်။" : "Three clear steps for sending with Mingalarpar. Service details will be confirmed before launch."} /></div><Button className="mingalarpar-button mt-8" asChild><a href="#app">{isMyanmar ? "Mingalarpar အား ပိုမိုသိရှိရန်" : "Explore Mingalarpar"} <ArrowRight className="size-4" /></a></Button></div>
        </div>
      </section>

      <section id="how-it-works" className="steps-section scroll-mt-8 py-20 md:py-24">
        <div className="section-wrap">
          <SectionHeading title={isMyanmar ? "မိသားစုနှင့် ချစ်ခင်ရသူများထံသို့ ရိုးရှင်းလွယ်ကူစွာ ငွေလွှဲပို့နိုင်မည့် နည်းလမ်း" : "Sending Money Home Made Simple"} text={isMyanmar ? "Mingalarpar ဖြင့် ငွေလွှဲရန် အဆင့်သုံးဆင့်ကို ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။ ဝန်ဆောင်မှုအသေးစိတ်ကို စတင်မိတ်ဆက်မီ အတည်ပြုထုတ်ပြန်ပါမည်။" : "Three clear steps are planned for the Mingalarpar remittance journey. Final service details will be confirmed before launch."} />
          <div className="relative mt-12 grid gap-4 md:grid-cols-3">
            <div aria-hidden="true" className="steps-connector absolute left-[17%] right-[17%] top-11 hidden border-t-2 border-dashed md:block" />
            <StepCard number={isMyanmar ? "၀၁" : "01"} icon={<ScanFace />} title={isMyanmar ? "စာရင်းသွင်းခြင်းနှင့် အတည်ပြုခြင်း" : "Register & Verify"} text={isMyanmar ? "Mingalarpar အကောင့်ဖွင့်ပြီး လိုအပ်သော အထောက်အထားစိစစ်မှုကိုလုပ်ဆောင်ခြင်း" : "Create your Mingalarpar account and complete the required identity verification."} />
            <StepCard number={isMyanmar ? "၀၂" : "02"} icon={<WalletCards />} title={isMyanmar ? "ငွေလွှဲမှု ပြုလုပ်ခြင်း" : "Create Your Transfer"} text={isMyanmar ? "လက်ခံသူ၏ အချက်အလက်များကို ဖြည့်သွင်းပြီး ငွေလွှဲအသေးစိတ်ကို ပြန်လည်စစ်ဆေးပါ။ ထို့နောက် ရရှိနိုင်သော ငွေပေးချေမှုနည်းလမ်းဖြင့် ငွေပေးချေပါ။" : "Enter your recipient details, review the transfer information and complete payment using an available method."} />
            <StepCard number={isMyanmar ? "၀၃" : "03"} icon={<ArrowDownLeft />} title={isMyanmar ? "ငွေလက်ခံရရှိခြင်း" : "Money Reaches Myanmar"} text={isMyanmar ? "သတ်မှတ်ထားသော ငွေထုတ်နည်းလမ်းများမှတစ်ဆင့်ငွေလက်ခံသူထံ ရောက်ရှိခြင်း" : "Your recipient receives the transfer through a supported payout method."} />
          </div>
          <div className="mt-8 text-center"><Button variant="outline" className="steps-button" asChild><a href="#faq">{isMyanmar ? "ပိုမိုလေ့လာရန်" : "Learn more"} <ArrowRight className="size-4" /></a></Button></div>
        </div>
      </section>

      <section id="corridors" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title={isMyanmar ? "ထိုင်းနှင့် မြန်မာကို ချိတ်ဆက်ပေးခြင်း" : "Connecting Thailand and Myanmar"} titleClassName={isMyanmar ? "single-line-heading-my" : undefined} text={isMyanmar ? "ပထမဆုံး ငွေလွှဲနိုင်ငံအဖြစ် ထိုင်းနိုင်ငံရှိ လုပ်သားများ အနေဖြင့် မြန်မာနိုင်ငံရှိ ၎င်းတို့၏ မိသားစုများနှင့် ချစ်ခင်ရသူများထံသို့ ငွေကြေးလွှဲပို့နိုင်ရန် အတွက်အဓိကထား ဆောင်ရွက်သွားမည်ဖြစ်ပါသည်။" : "Our first remittance corridor focuses on helping people in Thailand send money to their families and loved ones in Myanmar."} />
        <div className="brand-card mx-auto mt-12 max-w-4xl rounded-[30px] p-6 md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <CountryCard country="Thailand" currency="Sending currency · THB" />
            <div className="flex flex-col items-center gap-2 text-coral"><TransferArrows className="hidden h-8 w-12 sm:block" /><span className="rounded-full bg-soft px-4 py-2 text-xs font-extrabold">THB ⇄ MMK</span><TransferArrows className="h-8 w-12 rotate-90 sm:hidden" /></div>
            <CountryCard country="Myanmar" currency="Receiving currency · MMK" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-black/5 pt-6 text-[11px] text-muted"><span className="font-bold">Corridor status</span><span className="rounded-full bg-soft px-3 py-1.5 font-extrabold text-coral">{corridorStatusLabel(websiteSettings.corridors[0].status)}</span><span>· availability will be announced when confirmed</span></div>
        </div>
      </section>

      <section id="rates" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <div className="know-panel brand-panel grid items-center gap-10 rounded-[32px] p-7 md:grid-cols-[.85fr_1.15fr] md:p-14">
          <TransferCalculator />
        <div className="know-copy"><h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">{isMyanmar ? "ငွေမလွှဲမီ သိထားရန် အချက်များ" : "Know Before You Send"}</h2><p className="mt-5 leading-7">{isMyanmar ? "ငွေလွှဲမှုကို အတည်မပြုမီ ငွေလဲနှုန်း၊ ငွေလွှဲဝန်ဆောင်ခနှင့် လက်ခံသူရရှိမည့် နောက်ဆုံးငွေပမာဏတို့ကို စစ်ဆေးပါ။" : "Review the applicable exchange rate, transfer fee and amount your recipient will receive before confirming your transfer."}</p><div className="mt-7 grid gap-3 text-sm font-bold"><CheckLine text={isMyanmar ? "ပို့ငွေနှင့် လက်ခံငွေကြေး" : "Sending and receiving currencies"} /><CheckLine text={isMyanmar ? "သက်ဆိုင်ရာ ငွေလဲနှုန်းနှင့် ငွေလွှဲဝန်ဆောင်ခ" : "Applicable exchange rate and transfer fee"} /><CheckLine text={isMyanmar ? "ငွေလွှဲမှုမပြုလုပ်မီ လက်ခံသူရရှိမည့်ပမာဏ" : "Recipient amount before confirmation"} /></div></div>
        </div>
      </section>

      {websiteSettings.paymentMethodsPublished && <section className="section-wrap py-20"><SectionHeading title="Convenient Ways to Send and Receive" text="Available payment and payout methods will be shown here." /></section>}

      <section className="section-wrap py-20 md:py-24">
        <SectionHeading title={isMyanmar ? "Mingalarpar ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ။" : "Why Choose Mingalarpar?"} text={isMyanmar ? "ငွေလွှဲသူနှင့် ငွေလက်ခံသူတို့၏ လိုအပ်ချက်ကို အလေးထားသည့် မြန်ဆန်၊ ယုံကြည်စိတ်ချရပြီး ရှင်းလင်းသော ငွေလွှဲဝန်ဆောင်မှုအတွေ့အကြုံ။" : "A thoughtful remittance experience, built around the people who send and receive."} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((item, index) => <InfoCard key={item.title} icon={item.icon} title={isMyanmar ? benefitsMy[index].title : item.title} text={isMyanmar ? benefitsMy[index].text : item.text} />)}</div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="trust-panel grid items-center gap-10 rounded-[32px] p-7 text-white md:grid-cols-[.8fr_1.2fr] md:p-14">
          <div><h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">{isMyanmar ? "သင့်ယုံကြည်မှုသည် အရေးကြီးပါသည်" : "Your Trust Matters"}</h2><p className="mt-5 leading-7 text-white/85">{isMyanmar ? "Reliance and Trust သည် လုံခြုံစိတ်ချရပြီး တာဝန်ယူမှုရှိသော ငွေလွှဲဝန်ဆောင်မှုကို ပံ့ပိုးနိုင်ရန် ဖောက်သည်အထောက်အထားစိစစ်ခြင်း၊ ငွေလွှဲမှုများကို စောင့်ကြည့်စစ်ဆေးခြင်းနှင့် သက်ဆိုင်ရာ စည်းမျဉ်းများကို လိုက်နာခြင်းတို့ကို အလေးထားပါသည်။" : "Reliance and Trust applies identity verification, transaction monitoring and regulatory compliance measures to support secure and responsible remittance services."}</p><a href="#legal" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-white transition-colors hover:text-sky-100">{isMyanmar ? "စည်းမျဉ်းစည်းကမ်းဆိုင်ရာ အချက်အလက်များ" : "Compliance information"} <ArrowRight className="size-4" /></a></div>
          <div className="grid gap-3 sm:grid-cols-3">{complianceItems.map((item, index) => <article key={item.title} className="trust-compliance-card rounded-2xl border p-5"><span className="trust-compliance-icon grid size-11 place-items-center rounded-2xl">{item.icon}</span><h3 className="mt-5 text-sm font-extrabold text-white">{isMyanmar ? complianceItemsMy[index].title : item.title}</h3><p className="mt-2 text-xs leading-5 text-white/80">{isMyanmar ? complianceItemsMy[index].text : item.text}</p></article>)}</div>
        </div>
      </section>

      <section id="app" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <div className="pocket-panel grid items-center gap-10 overflow-hidden rounded-[32px] p-7 md:grid-cols-[1.1fr_.9fr] md:p-14">
          <span aria-hidden="true" className="pocket-orbit" />
          <div className="pocket-copy"><h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">{isMyanmar ? "Mingalarpar ကို သင့်ဖုန်းထဲတွင်ထည့်သွင်းထားပါ" : "Mingalarpar in Your Pocket"}</h2><p className="mt-5 max-w-xl leading-7">{isMyanmar ? "ငွေလွှဲမှုကို စီမံခန့်ခွဲရာတွင် အဆင်ပြေစေမည့် မိုဘိုင်းအက်ပ်ကို စီစဉ်တည်ဆောက်နေပါသည်။ အက်ပ်နှင့်ပတ်သက်သော အချက်အလက်များ၊ တရားဝင်ဒေါင်းလုဒ်လင့်ခ်များကို ရရှိနိုင်သည့်အခါ ထုတ်ပြန်ပေးပါမည်။" : "Discover a convenient way to manage your remittance journey. App information and official store links will be added when available."}</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><CheckLine text={isMyanmar ? "အကောင့်စာရင်းသွင်းခြင်း" : "Account registration"} /><CheckLine text={isMyanmar ? "ငွေလွှဲမှု ပြုလုပ်ခြင်း" : "Transfer creation"} /><CheckLine text={isMyanmar ? "ငွေလွှဲမှု ခြေရာခံခြင်း" : "Transfer tracking"} /><CheckLine text={isMyanmar ? "ငွေလွှဲမှတ်တမ်း" : "Transaction history"} /></div><div className="pocket-status mt-8 inline-flex items-center gap-2 rounded-full px-4 py-3 text-xs font-extrabold"><span className="size-2 rounded-full bg-coral" /> Mingalarpar App — {websiteSettings.appLaunched ? (isMyanmar ? "ရရှိနိုင်ပါသည်" : "Available") : (isMyanmar ? "မကြာမီ အသုံးပြုနိုင်မည်" : "Coming Soon")}</div></div>
          <div className="pocket-art relative mx-auto w-full max-w-[360px]"><div className="absolute inset-8 rounded-full bg-coral/10 blur-3xl" /><div className="relative mx-auto w-full max-w-[230px] rounded-[34px] border-[5px] border-[#182230] bg-[#182230] p-[3px] shadow-[0_24px_60px_rgba(7,27,58,.2)]"><div className="overflow-hidden rounded-[27px] bg-white"><img src="/mingalarpar-app-preview.png" alt="Mingalarpar mobile app home screen preview" loading="lazy" decoding="async" className="block h-auto w-full" /></div></div><div className="pocket-status relative mx-auto mt-5 flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-extrabold"><span className="size-2 rounded-full bg-coral" />{isMyanmar ? "အက်ပ်အစမ်းကြည့်ရှုမှု · မကြာမီ" : "App preview · Coming soon"}</div><p className="relative mx-auto mt-3 max-w-[290px] text-center text-xs leading-5">{isMyanmar ? "ဤသည်မှာ စီစဉ်ထားသော အက်ပ်၏ အစမ်းမြင်ကွင်းသာ ဖြစ်ပါသည်။ Mingalarpar အက်ပ်ကို လက်ရှိတွင် ဒေါင်းလုဒ်ရယူ၍ အသုံးပြုနိုင်ခြင်း မရှိသေးပါ။" : "Preview of the planned app. Mingalarpar is not available to download or use yet."}</p></div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <SectionHeading title={isMyanmar ? "လူမှုအသိုင်းအဝိုင်းများကို ပိုမိုချိတ်ဆက်ပေးခြင်း" : "Connecting More Communities"} text={isMyanmar ? "ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့ ငွေလွှဲဝန်ဆောင်မှုသည် ကျွန်ုပ်တို့၏ ပထမဆုံးခြေလှမ်းဖြစ်ပါသည်။ အနာဂတ်တွင် အခြားနိုင်ငံများနှင့် ချိတ်ဆက်ထားသော ငွေလွှဲလမ်းကြောင်းများကိုလည်း တိုးချဲ့ရန် ရည်ရွယ်ထားပါသည်။" : "Thailand to Myanmar is our first step. Reliance and Trust plans to expand remittance services to additional international corridors."} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">{websiteSettings.corridors.map((corridor, index) => <article key={`${corridor.from}-${corridor.to}`} className={`brand-card rounded-[26px] p-6 md:p-8 ${index === 0 ? "corridor-card-primary" : ""}`}><div className="flex items-center justify-between"><span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-coral">{isMyanmar ? (index === 0 ? "ပထမဆုံးလမ်းကြောင်း" : "အနာဂတ်တိုးချဲ့မှု") : (index === 0 ? "First corridor" : "Future expansion")}</span><span className="text-xs font-extrabold text-muted">{isMyanmar ? (corridor.status === "planned" ? "စီစဉ်ထားသည်" : corridorStatusLabel(corridor.status)) : corridorStatusLabel(corridor.status)}</span></div><h3 className="mt-6 flex flex-wrap items-center gap-3 text-2xl font-extrabold"><span className="size-8 shrink-0 overflow-hidden rounded-full shadow-sm"><CountryFlag country={corridor.from} /></span>{corridor.from}<MoveRight className="size-5 text-coral" /><span className="size-8 shrink-0 overflow-hidden rounded-full shadow-sm"><CountryFlag country={corridor.to} /></span>{corridor.to}</h3><p className="mt-3 text-sm text-muted">{corridor.sendCurrency} to {corridor.receiveCurrency}</p><p className="mt-5 text-xs leading-5 text-muted">{isMyanmar ? (index === 0 ? "ဝန်ဆောင်မှု စတင်အသုံးပြုနိုင်မည့် အချိန်ကို အတည်ပြုပြီးနောက် ကြေညာပေးပါမည်။" : "အနာဂတ်တွင် တိုးချဲ့ရန် စီစဉ်ထားပြီး လက်ရှိတွင် ဝန်ဆောင်မှုမရရှိနိုင်သေးပါ။") : (index === 0 ? "Service availability will be announced when confirmed." : "Planned for future expansion. Not currently available.")}</p></article>)}</div>
      </section>

      <section id="news" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title={isMyanmar ? "Reliance and Trust ၏ နောက်ဆုံးသတင်းများ" : "Latest from Reliance and Trust"} text={isMyanmar ? "ကုမ္ပဏီသတင်းများနှင့် ကြေညာချက်များကို ထုတ်ပြန်သည့်အချိန်တွင် ဤနေရာ၌ ဖော်ပြပေးသွားပါမည်။" : "Company news and announcements will be shared here as they are published."} />
        {websiteSettings.newsPublished && websiteSettings.newsPosts.length > 0 ? <><div className="mt-10 grid gap-4 md:grid-cols-3">{websiteSettings.newsPosts.map((post) => <NewsCard key={post.slug} post={post} />)}</div><div className="mt-7 text-center"><Button variant="outline" asChild><a href="/news">{isMyanmar ? "သတင်းအားလုံးကို ကြည့်ရန်" : "View All News"} <ArrowRight className="size-4" /></a></Button></div></> : <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-coral/20 bg-soft/60 px-6 py-8 text-center"><p className="text-sm font-bold">{isMyanmar ? "လက်ရှိအချိန်အထိ သတင်းအသစ်များ မရှိသေးပါ။" : "No published updates yet"}</p><p className="mt-2 text-xs leading-5 text-muted">{isMyanmar ? "ကုမ္ပဏီသတင်းများ၊ ဝန်ဆောင်မှုဆိုင်ရာ နောက်ဆုံးသတင်းများနှင့် Mingalarpar ကြေညာချက်များကို သိရှိနိုင်ရန် ဤစာမျက်နှာသို့ ပြန်လည်ဝင်ရောက်ကြည့်ရှုပါ။" : "Please check back for company news, service updates and Mingalarpar announcements."}</p></div>}
      </section>

      <section id="faq" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <SectionHeading title={isMyanmar ? "မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများ" : "Frequently Asked Questions"} titleClassName={isMyanmar ? "single-line-heading-my" : undefined} text={isMyanmar ? "Mingalarpar နှင့် စီစဉ်ထားသော ငွေလွှဲဝန်ဆောင်မှုအကြောင်း မေးလေ့ရှိသည့် မေးခွန်းများ၏ အဖြေများကို ဤနေရာတွင် ဖတ်ရှုနိုင်ပါသည်။" : "Answers about Mingalarpar and our planned remittance service."} />
        <Accordion type="single" collapsible className="mx-auto mt-10 grid max-w-3xl gap-3">{faqs.map((faq, index) => { const localizedFaq = faqsMy[index]; return <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger>{isMyanmar ? localizedFaq.question : faq.question}</AccordionTrigger><AccordionContent>{isMyanmar ? localizedFaq.answer : faq.answer}</AccordionContent></AccordionItem>; })}</Accordion>
      </section>

      <section id="careers" className="section-wrap scroll-mt-8 py-20 md:py-24">
        <div className="career-panel flex flex-col items-start justify-between gap-8 rounded-[30px] p-7 sm:flex-row sm:items-center md:p-10"><div className="flex items-start gap-5"><span className="career-icon grid size-14 shrink-0 place-items-center rounded-2xl shadow-sm"><BriefcaseBusiness /></span><div><h2 className="career-title mt-2 text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px]">{isMyanmar ? "ကျွန်ုပ်တို့နှင့်အတူ ငွေလွှဲဝန်ဆောင်မှု၏ အနာဂတ်ကို တည်ဆောက်ကြပါစို့" : "Build the Future of Remittance With Us"}</h2><p className="career-copy mt-3 max-w-2xl text-sm leading-6">{isMyanmar ? "Reliance and Trust Company Limited နှင့်အတူ လူပုဂ္ဂိုလ်များနှင့် လူမှုအသိုင်းအဝိုင်းများကို ချိတ်ဆက်ပေးမည့် ငွေကြေးဝန်ဆောင်မှုများ တည်ဆောက်ရာတွင် ပါဝင်လိုက်ပါ။" : "Join Reliance and Trust Company Limited and help build financial services that connect people and communities."}</p><p className="career-note mt-2 text-xs">{isMyanmar ? "လက်ရှိအလုပ်အကိုင်အခွင့်အလမ်းများကို ကြည့်ရှုပြီး အဖွဲ့တွင်ပါဝင်လိုက်ပါ။" : "Explore our current openings and join the team."}</p></div></div><Button variant="outline" size="lg" className="career-button shrink-0 rounded-xl shadow-sm hover:shadow-md" asChild><a href="/careers">{isMyanmar ? "အလုပ်အကိုင်များကို ကြည့်ရန်" : "Explore Careers"} <ArrowRight className="size-4" /></a></Button></div>
      </section>

      <section className="section-wrap pb-20 pt-8 md:pb-24">
        <div className="cta-panel"><div><h2 className="mt-2 max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-[-.05em] text-white sm:text-5xl md:text-[56px]">{isMyanmar ? "Mingalarpar အကြောင်း ပိုမိုသိရှိရန် အသင့်ဖြစ်ပြီလား။" : "Ready to Discover Mingalarpar?"}</h2><p className="mt-4 max-w-xl text-sm leading-6 text-white/75">{isMyanmar ? "ထိုင်းနိုင်ငံနှင့် မြန်မာနိုင်ငံကို အဆင်ပြေလွယ်ကူသော ငွေလွှဲဝန်ဆောင်မှုဖြင့် ချိတ်ဆက်ပေးမည့် အစီအစဉ်ကို လေ့လာကြည့်ရှုလိုက်ပါ။" : "Explore the next step in connecting Thailand and Myanmar through convenient remittance services."}</p></div><Button size="lg" className="shrink-0 bg-white text-ink hover:bg-white/90" asChild><a href="#mingalarpar">{isMyanmar ? "Mingalarpar အား ပိုမိုသိရှိရန်" : "Explore Mingalarpar"} <ArrowRight className="size-4" /></a></Button></div>
      </section>

      <footer id="contact" className="section-wrap scroll-mt-8 pb-7">
        <div id="legal" className="site-footer-panel rounded-[30px] px-7 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div><a href="#top" className="flex items-center gap-2 font-extrabold"><span className="footer-brand-logo"><img src="/rt-logo.svg" alt="" /></span><span>Reliance &amp; Trust</span></a><p className="footer-copy mt-4 max-w-xs text-sm leading-6">Reliance and Trust Company Limited — building remittance services that connect people and communities.</p><FooterContactDetails /></div>
            <FooterCol title="Company" links={[["About Us", "/about"], ["Careers", "/careers"], ["News", "/news"], ["Contact Us", "/contact"]]} />
            <FooterCol title="Mingalarpar" links={[["Mingalarpar App", "/mingalarpar"], ["How It Works", "/how-it-works"], ["Thailand → Myanmar", "#corridors"], ["Future Corridors", "#corridors"]]} />
            <FooterCol title="Support" links={[["Help Center", "/help"], ["FAQ", "/help"], ["Contact Support", "/contact"], ["Complaints", "/contact"]]} />
            <LegalFooterCol />
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between"><p>© 2026 Reliance and Trust Company Limited. All rights reserved.</p><p>Additional business and regulatory details will be published when confirmed.</p></div>
        </div>
      </footer>
    </main>
  );
}

function LanguageDropdown({ mobile = false, language, onChange }: { mobile?: boolean; language: SiteLanguage; onChange: (language: SiteLanguage) => void }) {
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (dropdownRef.current) dropdownRef.current.open = false; };
  const selectLanguage = (nextLanguage: SiteLanguage) => { onChange(nextLanguage); closeMenu(); };

  return <details ref={dropdownRef} className={`dropdown dropdown-end group relative z-[90] ${mobile ? "w-full" : "shrink-0"}`}>
    <summary aria-label="Choose language" aria-haspopup="menu" className={`flex cursor-pointer list-none items-center gap-2 border border-coral/10 bg-white font-bold text-ink shadow-sm transition hover:border-coral/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/30 [&::-webkit-details-marker]:hidden ${mobile ? "w-full justify-between rounded-xl px-3 py-3 text-sm" : "rounded-full px-3.5 py-2.5 text-[11px]"}`}>
      <LanguageFlag code={language} />
      <span className="flex-1 text-left">{language === "my" ? "မြန်မာ" : "English"}</span>
      <ChevronDown aria-hidden="true" className="size-4 text-muted transition-transform group-open:rotate-180" />
    </summary>
    <ul role="menu" className="menu dropdown-content z-[120] mt-2 w-56 gap-1 rounded-2xl border border-coral/10 bg-white p-2 text-ink shadow-xl shadow-ink/10">
      <li role="none"><button type="button" role="menuitemradio" aria-checked={language === "en"} onClick={() => selectLanguage("en")} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-soft ${language === "en" ? "bg-soft" : ""}`}><span className="flex items-center gap-2"><LanguageFlag code="en" />English</span>{language === "en" && <Check aria-hidden="true" className="size-4 text-success" />}</button></li>
      <li role="none"><button type="button" role="menuitemradio" aria-checked={language === "my"} onClick={() => selectLanguage("my")} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-soft ${language === "my" ? "bg-soft" : ""}`}><span className="flex items-center gap-2"><LanguageFlag code="my" />မြန်မာ</span>{language === "my" && <Check aria-hidden="true" className="size-4 text-success" />}</button></li>
      <li role="none"><button type="button" role="menuitem" disabled className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted opacity-65"><span className="flex items-center gap-2"><LanguageFlag code="th" />Thai</span><span className="text-[9px] font-bold uppercase tracking-wide">Coming soon</span></button></li>
    </ul>
  </details>;
}

function LanguageFlag({ code }: { code: "en" | "my" | "th" }) {
  const isMyanmar = code === "my";
  const isThai = code === "th";
  return (
    <svg aria-hidden="true" viewBox="0 0 36 24" preserveAspectRatio="xMidYMid slice" className="h-4 w-6 shrink-0 self-center overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10">
      {isMyanmar ? (
        <>
          <rect width="36" height="8" fill="#FECB00" />
          <rect y="8" width="36" height="8" fill="#34B233" />
          <rect y="16" width="36" height="8" fill="#EA2839" />
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
          <rect width="36" height="24" fill="#012169" />
          <path d="M0 0 36 24M36 0 0 24" stroke="white" strokeWidth="5" />
          <path d="M0 0 36 24M36 0 0 24" stroke="#C8102E" strokeWidth="2" />
          <path d="M0 0 36 24M36 0 0 24" stroke="#012169" strokeWidth=".8" />
          <path d="M0 0 36 24M36 0 0 24" stroke="white" strokeWidth="1.7" />
          <path d="M0 9h36v6H0zM15 0h6v24h-6z" fill="white" />
          <path d="M0 10.5h36v3H0zM16.5 0h3v24h-3z" fill="#C8102E" />
        </>
      )}
    </svg>
  );
}

function SectionHeading({ title, text, id, titleClassName }: { title: string; text: string; id?: string; titleClassName?: string }) {
  return <div className={`section-heading mx-auto text-center ${titleClassName ? "max-w-5xl" : "max-w-3xl"}`}><h2 id={id} className={`text-4xl font-extrabold leading-[1.06] tracking-[-.05em] sm:text-5xl md:text-[56px] ${titleClassName ?? ""}`}>{title}</h2><p className="mt-5 text-base leading-7 text-muted">{text}</p></div>;
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article className="feature-card !min-h-0 p-6"><div className="feature-icon">{icon}</div><h3 className="mt-6 text-base font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>;
}

function CheckLine({ text }: { text: string }) { return <span className="inline-flex items-start gap-2 text-sm font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-success" />{text}</span>; }

function TransferCalculator() {
  const [sendAmount, setSendAmount] = useState("1000");
  const numericAmount = Number(sendAmount);
  const canCalculate = sendAmount.trim() !== "" && Number.isFinite(numericAmount) && numericAmount >= 1000;
  const receivedAmount = canCalculate ? Math.round(numericAmount * 128) : null;
  const formatAmount = (amount: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);

  return <div className="estimate-card brand-card w-full min-w-0 rounded-[24px] p-4 sm:p-6" aria-label="Illustrative transfer calculator">
    <div className="estimate-card-header flex items-center justify-between gap-3"><h3 className="text-lg font-extrabold">Transfer estimate</h3><span className="estimate-card-icon grid size-10 shrink-0 place-items-center rounded-xl"><Banknote aria-hidden="true" className="size-5 text-coral" /></span></div>
    <label htmlFor="estimate-thb" className="mt-5 block text-[10px] font-bold text-muted">You send</label>
    <div className="estimate-input-wrap mt-2 flex min-w-0 items-center gap-2 rounded-2xl px-3 sm:gap-3 sm:px-4">
      <input id="estimate-thb" name="estimate-thb" type="number" min="1000" step="any" inputMode="decimal" value={sendAmount} onChange={(event) => setSendAmount(event.target.value)} className="estimate-input min-w-0 flex-1 bg-transparent text-xl font-extrabold outline-none sm:text-2xl" aria-describedby="estimate-minimum" />
      <span className="estimate-currency shrink-0 rounded-full px-3 py-1.5 text-xs font-extrabold">THB</span>
    </div>
    <p id="estimate-minimum" aria-live="polite" className={`estimate-minimum mt-2 text-xs font-semibold ${canCalculate ? "" : "estimate-minimum-error"}`}>{canCalculate ? "Minimum send amount: 1,000 THB." : "Enter at least 1,000 THB to calculate."}</p>
    <div className="my-3 flex items-center justify-center gap-2 text-[10px] font-bold text-muted"><span className="h-px flex-1 bg-black/10" />Illustrative estimate<span className="h-px flex-1 bg-black/10" /></div>
    <div className="estimate-result rounded-2xl p-4" aria-live="polite"><p className="text-[10px] font-bold">Recipient gets (estimate)</p><div className="mt-2 flex min-w-0 items-center justify-between gap-2"><strong className="estimate-value min-w-0 break-all font-extrabold">{receivedAmount === null ? "—" : formatAmount(receivedAmount)}</strong><span className="estimate-currency shrink-0 rounded-full px-3 py-1.5 text-xs font-extrabold">MMK</span></div></div>
    <div className="estimate-rate mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-xs"><span>Illustrative rate</span><strong>1 THB = 128 MMK</strong><span className="estimate-unconfirmed rounded-full px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide">Unconfirmed</span></div>
    <p className="estimate-disclaimer mt-3 text-center text-[10px] leading-5 text-muted">This estimate uses an unconfirmed rate and excludes any transfer fee. Final pricing will be shown before a transfer is confirmed.</p>
  </div>;
}

function StepCard({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) {
  return <article className="steps-card relative rounded-[26px] border p-7"><div className="flex items-center justify-between"><span className="steps-icon grid size-12 place-items-center rounded-2xl">{icon}</span><span className="steps-number text-sm font-extrabold tracking-widest">{number}</span></div><h3 className="steps-title mt-7 text-xl font-extrabold">{title}</h3><p className="steps-copy mt-3 text-sm leading-6">{text}</p></article>;
}

function TransferArrows({ className = "" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 7h25m0 0-5-5m5 5-5 5M29 17H4m0 0 5-5m-5 5 5 5" />
  </svg>;
}

function MoveRight({ className = "" }: { className?: string }) {
  return <TransferArrows className={className} />;
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
  return <article className="brand-card overflow-hidden rounded-[26px] transition hover:-translate-y-1 hover:shadow-lg">
    {post.image && <img src={post.image.src} alt={post.image.alt} loading="lazy" className="h-48 w-full object-cover" />}
    <div className="p-6"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-soft px-3 py-1.5 text-[10px] font-extrabold text-coral">{post.category}</span><time className="text-[10px] font-semibold text-muted">{post.publishedAt}</time></div><h3 className="mt-5 text-lg font-extrabold">{post.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p><a href={`/news/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-coral hover:text-coral-dark">Read More <ArrowRight className="size-4" /></a></div>
  </article>;
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  const footerLabelsMy: Record<string, string> = { Company: "ကုမ္ပဏီ", Mingalarpar: "မင်္ဂလာပါ", Support: "အကူအညီ", "About Us": "ကျွန်ုပ်တို့အကြောင်း", Careers: "အလုပ်အကိုင်", News: "သတင်း", "Contact Us": "ဆက်သွယ်ရန်", "Mingalarpar App": "Mingalarpar အက်ပ်", "How It Works": "အလုပ်လုပ်ပုံ", "Thailand → Myanmar": "ထိုင်း → မြန်မာ", "Future Corridors": "အနာဂတ်ငွေလွှဲလမ်းကြောင်းများ", "Help Center": "အကူအညီဌာန", FAQ: "မေးလေ့ရှိသော မေးခွန်းများ", "Contact Support": "အကူအညီကို ဆက်သွယ်ရန်", Complaints: "တိုင်ကြားရန်" };
  return <div><p className="footer-title">{isMyanmar ? (footerLabelsMy[title] ?? title) : title}</p><div className="mt-4 grid gap-3">{links.map(([label, href]) => <a className={`footer-col-link transition-colors ${isMyanmar && (label === "FAQ" || label === "Contact Support") ? "whitespace-nowrap" : ""}`} key={label} href={href}>{isMyanmar ? (footerLabelsMy[label] ?? label) : label}<ChevronRight className="ml-1 inline size-3 opacity-65" /></a>)}{title === "Support" && <FraudAwarenessFooterLink />}</div></div>;
}
