"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, BriefcaseBusiness, ChevronRight, X } from "lucide-react";
import { useSiteLanguage } from "../components/language-provider";

type Vacancy = {
  title: string;
  category: string;
  location: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

const vacancies: Vacancy[] = [
  {
    title: "Compliance & AML Officer",
    category: "Compliance",
    location: "Yangon, Myanmar",
    summary: "Lead our regulatory compliance programme, ensuring Mingalarpar operates to the highest anti-money-laundering and KYC standards.",
    responsibilities: [
      "Design and maintain the AML, KYC, and CFT compliance framework",
      "Conduct transaction monitoring reviews and escalate suspicious activity",
      "Liaise with Myanmar regulatory authorities and prepare required reports",
      "Train internal teams on compliance policies and procedures",
    ],
    qualifications: [
      "3+ years in compliance, AML, or risk management at a financial institution or money transmitter",
      "Working knowledge of Myanmar remittance regulations",
      "ACAMS or equivalent certification is a plus",
    ],
  },
  {
    title: "Product Manager, Mingalarpar App",
    category: "Product",
    location: "Yangon, Myanmar (or remote)",
    summary: "Shape the customer experience for the Mingalarpar app, from registration through transfer tracking.",
    responsibilities: [
      "Define product requirements and prioritise the app roadmap",
      "Conduct user research with Myanmar communities in Thailand",
      "Work closely with engineering, design, and compliance teams",
      "Track product metrics and iterate on the customer journey",
    ],
    qualifications: [
      "4+ years in product management, ideally in fintech or remittance",
      "Experience shipping mobile-first products end-to-end",
      "Fluency in English; Myanmar language skills strongly preferred",
    ],
  },
  {
    title: "Customer Support Lead",
    category: "Customer Support",
    location: "Yangon, Myanmar",
    summary: "Build and lead our customer support function, helping customers send money home with confidence.",
    responsibilities: [
      "Set up and manage the customer support workflow and tools",
      "Handle escalated customer enquiries and complaints",
      "Build a bilingual support knowledge base",
      "Monitor support quality and customer satisfaction metrics",
    ],
    qualifications: [
      "3+ years in customer support, with at least 1 year in a team lead role",
      "Fluency in Myanmar and English; Thai is a plus",
      "Patience, empathy, and a commitment to doing right by customers",
    ],
  },
  {
    title: "Senior Mobile Engineer (React Native)",
    category: "Software Development",
    location: "Remote (Myanmar / Thailand)",
    summary: "Build the Mingalarpar mobile app that customers in Thailand will use to send money home.",
    responsibilities: [
      "Develop and maintain the Mingalarpar React Native app",
      "Integrate with backend APIs, payment, and KYC partners",
      "Ensure performance, security, and accessibility standards",
      "Mentor junior engineers and review code",
    ],
    qualifications: [
      "5+ years building production mobile apps, including React Native",
      "Experience integrating payments and identity verification SDKs",
      "Strong TypeScript and testing discipline",
    ],
  },
];

const vacanciesMy: Vacancy[] = [
  { title: "စည်းမျဉ်းလိုက်နာမှုနှင့် AML အရာရှိ", category: "စည်းမျဉ်းလိုက်နာမှု", location: "ရန်ကုန်၊ မြန်မာ", summary: "Mingalarpar ၏ စည်းမျဉ်းလိုက်နာမှုလုပ်ငန်းများကို ဦးဆောင်ပြီး ငွေကြေးခဝါချမှုတိုက်ဖျက်ရေးနှင့် KYC စံနှုန်းများကို မြင့်မားစွာ ထိန်းသိမ်းပါ။", responsibilities: ["AML၊ KYC နှင့် CFT လိုက်နာမှုမူဘောင်ကို ရေးဆွဲထိန်းသိမ်းရန်", "ငွေလွှဲမှုများကို စောင့်ကြည့်စစ်ဆေးပြီး သံသယဖြစ်ဖွယ်လုပ်ဆောင်မှုများကို တင်ပြရန်", "မြန်မာနိုင်ငံရှိ စည်းမျဉ်းကြီးကြပ်ရေးအာဏာပိုင်များနှင့် ဆက်သွယ်ပြီး လိုအပ်သောအစီရင်ခံစာများ ပြင်ဆင်ရန်", "အဖွဲ့အတွင်း စည်းမျဉ်းလိုက်နာမှုမူဝါဒနှင့် လုပ်ထုံးလုပ်နည်းများကို သင်ကြားပေးရန်"], qualifications: ["ဘဏ္ဍာရေးအဖွဲ့အစည်း သို့မဟုတ် ငွေလွှဲလုပ်ငန်းတွင် Compliance၊ AML သို့မဟုတ် Risk Management အတွေ့အကြုံ ၃ နှစ်နှင့်အထက်", "မြန်မာနိုင်ငံ၏ ငွေလွှဲစည်းမျဉ်းများကို လုပ်ငန်းသုံးအဆင့် သိရှိနားလည်မှု", "ACAMS သို့မဟုတ် တူညီသော အရည်အချင်းလက်မှတ်ရှိပါက ဦးစားပေးမည်" ] },
  { title: "Mingalarpar အက်ပ် ထုတ်ကုန်မန်နေဂျာ", category: "ထုတ်ကုန်", location: "ရန်ကုန်၊ မြန်မာ (သို့မဟုတ် အဝေးမှ)", summary: "စာရင်းသွင်းခြင်းမှ ငွေလွှဲမှုခြေရာခံခြင်းအထိ Mingalarpar အက်ပ်၏ သုံးစွဲသူအတွေ့အကြုံကို ဖန်တီးတိုးတက်စေပါ။", responsibilities: ["ထုတ်ကုန်လိုအပ်ချက်များ သတ်မှတ်ပြီး အက်ပ်ဖွံ့ဖြိုးရေးအစီအစဉ်ကို ဦးစားပေးစီစဉ်ရန်", "ထိုင်းနိုင်ငံရှိ မြန်မာလူမှုအသိုင်းအဝိုင်းများနှင့် သုံးစွဲသူသုတေသန ပြုလုပ်ရန်", "အင်ဂျင်နီယာ၊ ဒီဇိုင်းနှင့် စည်းမျဉ်းလိုက်နာမှုအဖွဲ့များနှင့် ပူးပေါင်းဆောင်ရွက်ရန်", "ထုတ်ကုန်တိုင်းတာချက်များကို စောင့်ကြည့်ပြီး သုံးစွဲသူခရီးစဉ်ကို တိုးတက်အောင် ပြင်ဆင်ရန်"], qualifications: ["ထုတ်ကုန်စီမံခန့်ခွဲမှု အတွေ့အကြုံ ၄ နှစ်နှင့်အထက်၊ Fintech သို့မဟုတ် ငွေလွှဲလုပ်ငန်းအတွေ့အကြုံရှိပါက ဦးစားပေးမည်", "မိုဘိုင်းကို ဦးစားပေးသည့် ထုတ်ကုန်များကို အစမှအဆုံး ထုတ်ဝေဖူးသည့်အတွေ့အကြုံ", "အင်္ဂလိပ်ဘာသာ ကျွမ်းကျင်ရမည်၊ မြန်မာဘာသာတတ်ကျွမ်းမှုကို အထူးဦးစားပေးမည်"] },
  { title: "ဖောက်သည်အကူအညီအဖွဲ့ခေါင်းဆောင်", category: "ဖောက်သည်အကူအညီ", location: "ရန်ကုန်၊ မြန်မာ", summary: "သုံးစွဲသူများ ယုံကြည်မှုရှိစွာ နေရပ်သို့ငွေပို့နိုင်ရန် ဖောက်သည်အကူအညီလုပ်ငန်းကို တည်ဆောက်ဦးဆောင်ပါ။", responsibilities: ["ဖောက်သည်အကူအညီ လုပ်ငန်းစဉ်နှင့် ကိရိယာများကို တည်ဆောက်စီမံရန်", "အဆင့်မြှင့်တင်ပေးပို့လာသော မေးမြန်းမှုများနှင့် တိုင်ကြားမှုများကို ကိုင်တွယ်ရန်", "ဘာသာစကားနှစ်မျိုးဖြင့် အသုံးပြုနိုင်သော အကူအညီဗဟုသုတမှတ်တမ်း တည်ဆောက်ရန်", "အကူအညီအရည်အသွေးနှင့် သုံးစွဲသူကျေနပ်မှုကို စောင့်ကြည့်ရန်"], qualifications: ["ဖောက်သည်အကူအညီအတွေ့အကြုံ ၃ နှစ်နှင့်အထက်၊ အဖွဲ့ခေါင်းဆောင်အဖြစ် အနည်းဆုံး ၁ နှစ်ရှိရမည်", "မြန်မာနှင့် အင်္ဂလိပ်ဘာသာ ကျွမ်းကျင်ရမည်၊ ထိုင်းဘာသာတတ်ပါက အားသာချက်ဖြစ်သည်", "စိတ်ရှည်မှု၊ ကိုယ်ချင်းစာမှုနှင့် သုံးစွဲသူအကျိုးကို ဦးစားပေးလိုစိတ်ရှိရမည်"] },
  { title: "အကြီးတန်း မိုဘိုင်းအက်ပ် အင်ဂျင်နီယာ (React Native)", category: "ဆော့ဖ်ဝဲဖွံ့ဖြိုးရေး", location: "အဝေးမှ (မြန်မာ / ထိုင်း)", summary: "ထိုင်းနိုင်ငံရှိ သုံးစွဲသူများ နေရပ်သို့ငွေပို့ရန် အသုံးပြုမည့် Mingalarpar မိုဘိုင်းအက်ပ်ကို တည်ဆောက်ပါ။", responsibilities: ["Mingalarpar React Native အက်ပ်ကို ဖွံ့ဖြိုးထိန်းသိမ်းရန်", "Backend API၊ ငွေပေးချေမှုနှင့် KYC မိတ်ဖက်ဝန်ဆောင်မှုများနှင့် ချိတ်ဆက်ရန်", "စွမ်းဆောင်ရည်၊ လုံခြုံရေးနှင့် အသုံးပြုရလွယ်ကူမှုစံနှုန်းများကို ထိန်းသိမ်းရန်", "အငယ်တန်းအင်ဂျင်နီယာများကို လမ်းညွှန်ပြီး ကုဒ်များကို စိစစ်ရန်"], qualifications: ["ထုတ်လုပ်ရေးသုံး မိုဘိုင်းအက်ပ်များ၊ React Native အပါအဝင် တည်ဆောက်မှုအတွေ့အကြုံ ၅ နှစ်နှင့်အထက်", "ငွေပေးချေမှုနှင့် အထောက်အထားစိစစ်ရေး SDK များ ချိတ်ဆက်ဖူးသည့်အတွေ့အကြုံ", "TypeScript ကျွမ်းကျင်မှုနှင့် စမ်းသပ်စစ်ဆေးမှုကို စနစ်တကျလုပ်ဆောင်မှု"] },
];

const applicationEmail = "remittance@relianceandtrustmm.com";

function applicationHref(title: string, isMyanmar: boolean) {
  const subject = encodeURIComponent(isMyanmar ? `လျှောက်လွှာ: ${title}` : `Application: ${title}`);
  const body = encodeURIComponent(isMyanmar
    ? `မင်္ဂလာပါ Reliance & Trust အဖွဲ့၊\n\n${title} ရာထူးအတွက် လျှောက်ထားလိုပါသည်။ ကျွန်ုပ်၏ CV နှင့် လိုအပ်သော အချက်အလက်များကို ပူးတွဲပေးပို့ထားပါသည်။\n\nအမည်:\nဖုန်းနံပါတ်:\n\nကျေးဇူးတင်ပါသည်။`
    : `Hello Reliance & Trust team,\n\nI would like to apply for the ${title} position. Please find my CV and supporting information attached.\n\nName:\nPhone number:\n\nThank you.`);
  return `mailto:${applicationEmail}?subject=${subject}&body=${body}`;
}

export default function CareerListings() {
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedVacancy && dialog && !dialog.open) dialog.showModal();
  }, [selectedVacancy]);

  const selectedVacancyIndex = selectedVacancy ? vacancies.findIndex((vacancy) => vacancy.title === selectedVacancy.title) : -1;
  const displaySelectedVacancy = selectedVacancy
    ? (isMyanmar ? vacanciesMy[selectedVacancyIndex] : selectedVacancy)
    : null;

  return <>
    <div className="career-listings grid gap-5 md:grid-cols-2">
      {vacancies.map((vacancy, index) => {
        const displayVacancy = isMyanmar ? vacanciesMy[index] : vacancy;
        return (
        <article key={vacancy.title} className="career-job-card rounded-[26px] p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="career-job-icon grid size-12 shrink-0 place-items-center rounded-2xl"><BriefcaseBusiness aria-hidden="true" className="size-5" /></span>
            <span className="career-job-type rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide">{isMyanmar ? "အချိန်ပြည့်" : "Full-time"}</span>
          </div>
          <p className="career-job-category mt-6 text-[10px] font-extrabold uppercase tracking-[.15em]">{displayVacancy.category}</p>
          <h2 className="mt-2 text-xl font-extrabold leading-snug">{displayVacancy.title}</h2>
          <p className="career-job-location mt-2 text-xs font-semibold">{displayVacancy.location} · {isMyanmar ? "အချိန်ပြည့်" : "Full-time"}</p>
          <p className="career-job-summary mt-4 text-sm leading-6">{displayVacancy.summary}</p>
          <button type="button" className="career-details-button mt-6 inline-flex items-center gap-1 text-sm font-extrabold" onClick={() => setSelectedVacancy(vacancy)}>
            {isMyanmar ? "အသေးစိတ်ကြည့်ရန်" : "View details"} <ChevronRight aria-hidden="true" className="size-4" />
          </button>
        </article>
      ); })}
    </div>

    <dialog ref={dialogRef} className="career-drawer" aria-labelledby="career-drawer-title" onClose={() => setSelectedVacancy(null)}>
      {selectedVacancy && <>
        <header className="career-drawer-header">
          <div>
            <p className="career-drawer-kicker">{displaySelectedVacancy?.category} · {isMyanmar ? "အချိန်ပြည့်" : "Full-time"}</p>
            <h2 id="career-drawer-title">{displaySelectedVacancy?.title}</h2>
            <p className="career-drawer-location">{displaySelectedVacancy?.location}</p>
          </div>
          <button type="button" className="career-drawer-close" aria-label={isMyanmar ? "ရာထူးအသေးစိတ်ကို ပိတ်ရန်" : "Close vacancy details"} onClick={() => dialogRef.current?.close()}><X aria-hidden="true" className="size-5" /></button>
        </header>
        <div className="career-drawer-body">
          <p className="career-drawer-summary">{displaySelectedVacancy?.summary}</p>
          <section>
            <h3>{isMyanmar ? "သင်လုပ်ဆောင်ရမည့်တာဝန်များ" : "What you will do"}</h3>
            <ul>{displaySelectedVacancy?.responsibilities.map((item) => <li key={item}><span className="career-list-check" aria-hidden="true">✓</span>{item}</li>)}</ul>
          </section>
          <section>
            <h3>{isMyanmar ? "လိုအပ်သော အရည်အချင်းများ" : "What we look for"}</h3>
            <ul>{displaySelectedVacancy?.qualifications.map((item) => <li key={item}><span className="career-list-check" aria-hidden="true">✓</span>{item}</li>)}</ul>
          </section>
        </div>
        <footer className="career-drawer-footer">
          <div><p className="text-sm font-extrabold text-ink">{isMyanmar ? "လျှောက်ထားရန် အသင့်ဖြစ်ပြီလား။" : "Ready to apply?"}</p><p className="mt-1 text-xs text-muted">{isMyanmar ? "လျှောက်လွှာနှင့် CV ကို ဤအီးမေးလ်သို့ ပေးပို့ပါ" : "Email your application and CV to"} {applicationEmail}</p></div>
          <a className="career-apply-button inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold" href={applicationHref(displaySelectedVacancy?.title ?? selectedVacancy.title, isMyanmar)}>{isMyanmar ? "အီးမေးလ်ဖြင့် လျှောက်ထားရန်" : "Apply by email"} <ArrowRight aria-hidden="true" className="size-4" /></a>
        </footer>
      </>}
    </dialog>
  </>;
}
