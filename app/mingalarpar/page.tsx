import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, ClipboardList, ScanFace, Smartphone, WalletCards } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { websiteSettings } from "@/lib/website-content";
import { LocalizedText } from "../components/language-provider";

export const metadata: Metadata = {
  title: "Mingalarpar App | Reliance and Trust",
  description: "Learn about the Mingalarpar mobile remittance app and its planned features.",
};

const plannedFeatures = [
  {
    icon: <ScanFace aria-hidden="true" className="size-6" />,
    title: "Account setup and verification",
    myTitle: "အကောင့်(Account)ဖွင့်ခြင်းနှင့် အထောက်အထားစိစစ်ခြင်း",
    description: "A guided account setup with the identity checks required for the service.",
    myDescription: "ဝန်ဆောင်မှုအတွက် လိုအပ်သော အထောက်အထားစိစစ်မှုများပါဝင်သည့် လမ်းညွှန်ချက်ဖြင့် အကောင့်ဖွင့်နိုင်ပါသည်။",
  },
  {
    icon: <WalletCards aria-hidden="true" className="size-6" />,
    title: "Create a transfer",
    myTitle: "ငွေလွှဲမှု ပြုလုပ်ခြင်း",
    description: "Enter transfer details and review the information before confirming a transaction.",
    myDescription: "ငွေလွှဲအချက်အလက်များကို ထည့်သွင်းပြီး အတည်မပြုမီ ပြန်လည်စစ်ဆေးပါ။",
  },
  {
    icon: <Clock3 aria-hidden="true" className="size-6" />,
    title: "Track transfer progress",
    myTitle: "ငွေလွှဲမှုအခြေအနေကို ခြေရာခံခြင်း",
    description: "Follow transfer updates and see the latest available status in one place.",
    myDescription: "ငွေလွှဲမှု၏ လက်ရှိအခြေအနေကို တစ်နေရာတည်းတွင် စစ်ဆေးကြည့်ရှုနိုင်ပါသည်။",
  },
  {
    icon: <ClipboardList aria-hidden="true" className="size-6" />,
    title: "Transaction history",
    myTitle: "ငွေလွှဲမှတ်တမ်း",
    description: "Review previous transactions and their details from your account.",
    myDescription: "သင့်အကောင့်မှ ယခင်ငွေလွှဲမှုများနှင့် ၎င်းတို့၏အသေးစိတ်ကို ပြန်လည်ကြည့်ရှုနိုင်ပါသည်။",
  },
];

export default function MingalarparPage() {
  const appStatus = websiteSettings.appLaunched ? "Available" : "Coming Soon";

  return (
    <main className="site-page min-h-screen text-ink">
      <SiteHeader activePage="mingalarpar" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-coral/10 bg-white/80 px-4 py-2 text-xs font-extrabold text-coral shadow-sm">
              <Smartphone aria-hidden="true" className="size-4" /> <LocalizedText en="Mingalarpar mobile app" my="Mingalarpar မိုဘိုင်းအက်ပ် (Mobile App)" />
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl"><LocalizedText en="Your remittance journey, in one app" my={<><span className="whitespace-nowrap">သင့်ငွေလွှဲမှုများကို အက်ပ်</span> တစ်ခုတည်းမှတစ်ဆင့် စီမံနိုင်ရန်</>} /></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"><LocalizedText en="Mingalarpar is the planned mobile remittance service from Reliance and Trust Company Limited, designed to help people send money home through a clear digital experience." my="Mingalarpar သည် Reliance and Trust Company Limited မှ စီစဉ်ထားသော မိုဘိုင်းငွေလွှဲဝန်ဆောင်မှုဖြစ်ပြီး ရှင်းလင်းသော ဒစ်ဂျစ်တယ်အတွေ့အကြုံဖြင့် နေရပ်သို့ ငွေပို့နိုင်ရန် ရည်ရွယ်ပါသည်။" /></p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-extrabold text-coral shadow-sm">
              <span className="size-2 rounded-full bg-coral" /> Mingalarpar App — <LocalizedText en={appStatus} my={appStatus === "Available" ? "ရရှိနိုင်ပါသည်" : "မကြာမီ အသုံးပြုနိုင်မည်"} />
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted"><LocalizedText en="App availability, supported payment options, fees and transfer details will be shared when confirmed." my="အက်ပ်စတင်အသုံးပြုနိုင်မည့်အချိန်၊ ပံ့ပိုးမည့် ငွေပေးချေမှုနည်းလမ်းများ၊ ငွေလွှဲဝန်ဆောင်ခနှင့် အခြားအသေးစိတ်အချက်အလက်များကို အတည်ပြုပြီးသည့်အခါ ထုတ်ပြန်ပေးပါမည်။" /></p>
          </div>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div aria-hidden="true" className="absolute inset-4 rounded-full bg-coral/15 blur-3xl" />
            <div className="relative mx-auto w-full max-w-[230px] rounded-[34px] border-[5px] border-[#182230] bg-[#182230] p-[3px] shadow-[0_24px_60px_rgba(7,27,58,.2)]">
              <div className="overflow-hidden rounded-[27px] bg-white"><Image src="/mingalarpar-app-preview.png" alt="Mingalarpar mobile app home screen preview" width={320} height={690} priority className="block h-auto w-full" /></div>
            </div>
            <div className="relative mx-auto mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-extrabold text-ink shadow-sm"><span className="size-2 rounded-full bg-coral" /><LocalizedText en="App preview · Coming soon" my="အက်ပ်အစမ်းကြည့်ရှုမှု · မကြာမီ" /></div>
            <p className="relative mx-auto mt-3 max-w-[290px] text-center text-xs leading-5 text-muted"><LocalizedText en="Preview of the planned app. Mingalarpar is not available to download or use yet." my="စီစဉ်ထားသော အက်ပ်၏အစမ်းမြင်ကွင်းဖြစ်ပါသည်။ Mingalarpar ကို ဒေါင်းလုဒ်ရယူ၍ အသုံးပြုနိုင်ခြင်း မရှိသေးပါ။" /></p>
          </div>
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl"><LocalizedText en="A simple experience, planned around your needs" my="သင့်လိုအပ်ချက်များကို အခြေခံစီစဉ်ထားသော ရိုးရှင်းသည့်အတွေ့အကြုံ" /></h2>
          <p className="mt-4 text-base leading-7 text-muted"><LocalizedText en="The app is being planned to bring the key parts of a remittance journey together. Details may change as the service is prepared for launch." my="ငွေလွှဲမှုနှင့် သက်ဆိုင်သော အဓိကလုပ်ဆောင်ချက်များကို တစ်နေရာတည်းတွင် အသုံးပြုနိုင်ရန် အက်ပ်ကို စီစဉ်တည်ဆောက်နေပါသည်။ ဝန်ဆောင်မှုစတင်ရန် ပြင်ဆင်နေစဉ် အသေးစိတ်အချက်အလက်များ ပြောင်းလဲနိုင်ပါသည်။" /></p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plannedFeatures.map((feature) => (
            <article key={feature.title} className="feature-card !min-h-0 p-6">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="mt-6 text-base font-extrabold"><LocalizedText en={feature.title} my={feature.myTitle} /></h3>
              <p className="mt-2 text-sm leading-6 text-muted"><LocalizedText en={feature.description} my={feature.myDescription} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 md:pb-20">
        <div className="corridor-feature-panel relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[28px] p-6 sm:flex-row sm:items-center md:p-9">
          <span aria-hidden="true" className="pocket-orbit" />
          <div className="corridor-feature-copy">
            <p className="text-xs font-extrabold uppercase tracking-[.16em]"><LocalizedText en="First planned corridor" my="ပထမဆုံး စီစဉ်ထားသော ငွေလွှဲလမ်းကြောင်း" /></p>
            <h2 className="mt-2 text-2xl font-extrabold">Thailand <span>→</span> Myanmar</h2>
            <p className="mt-2 max-w-xl text-sm leading-6"><LocalizedText en="The first corridor is planned. Service availability and launch details will be shared when confirmed." my="ပထမဆုံး ငွေလွှဲလမ်းကြောင်းကို စီစဉ်ထားပါသည်။ ဝန်ဆောင်မှုစတင်မည့်အချိန်နှင့် အသေးစိတ်အချက်အလက်များကို အတည်ပြုပြီးသည့်အခါ ထုတ်ပြန်ပေးပါမည်။" /></p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/how-it-works" className="corridor-feature-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition"><LocalizedText en="How It Works" my="အလုပ်လုပ်ပုံ" /></Link>
            <Link href="/help" className="corridor-feature-action inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition"><LocalizedText en="Help Center" my="အကူအညီဌာန" /> <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
