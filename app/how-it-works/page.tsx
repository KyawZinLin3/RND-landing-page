import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownLeft, ArrowRight, ScanFace, WalletCards } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { PageHeroArt } from "../components/page-hero-art";
import { LocalizedText } from "../components/language-provider";

export const metadata: Metadata = {
  title: "How It Works | Mingalarpar",
  description: "Learn about the three planned steps in the Mingalarpar remittance journey.",
};

const transferSteps = [
  {
    number: "01",
    numberMy: "၀၁",
    icon: <ScanFace aria-hidden="true" className="size-6" />,
    title: "Register & Verify",
    titleMy: "စာရင်းသွင်းခြင်းနှင့် အတည်ပြုခြင်း",
    description: "Create your Mingalarpar account and complete the required identity verification.",
    descriptionMy: "Mingalarpar အကောင့်ဖွင့်ပြီး လိုအပ်သော ဖောက်သည်အထောက်အထားစိစစ်မှုကို ဆောင်ရွက်ပါ။",
  },
  {
    number: "02",
    numberMy: "၀၂",
    icon: <WalletCards aria-hidden="true" className="size-6" />,
    title: "Create Your Transfer",
    titleMy: "ငွေလွှဲမှု ပြုလုပ်ခြင်း",
    description: "Enter your recipient details, review the transfer information, and complete payment using an available method.",
    descriptionMy: "လက်ခံသူ၏ အချက်အလက်များကို ဖြည့်သွင်းပြီး ငွေလွှဲအသေးစိတ်ကို ပြန်လည်စစ်ဆေးပါ။ ထို့နောက် ရရှိနိုင်သော ငွေပေးချေမှုနည်းလမ်းဖြင့် ငွေပေးချေပါ။",
  },
  {
    number: "03",
    numberMy: "၀၃",
    icon: <ArrowDownLeft aria-hidden="true" className="size-6" />,
    title: "Money Reaches Myanmar",
    titleMy: "ငွေလက်ခံရရှိခြင်း",
    description: "Your recipient receives the transfer through a supported payout method.",
    descriptionMy: "သတ်မှတ်ထားသော ငွေလက်ခံနည်းလမ်းမှတစ်ဆင့် လက်ခံသူထံ ငွေရောက်ရှိပါမည်။",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="site-page min-h-screen text-ink">
      <SiteHeader activePage="how-it-works" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl"><LocalizedText en="How It Works" my="ငွေလွှဲလုပ်ငန်းစဉ် အဆင့်များ" /></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"><LocalizedText en="Three clear steps are planned for the Mingalarpar remittance journey. Final service details will be confirmed before launch." my="Mingalarpar ဖြင့် ငွေလွှဲရန် အဆင့်သုံးဆင့်ကို ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။ ဝန်ဆောင်မှုအသေးစိတ်ကို စတင်မိတ်ဆက်မီ အတည်ပြုထုတ်ပြန်ပါမည်။" /></p></div>
          <PageHeroArt kind="how-it-works" />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="relative grid gap-4 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[17%] right-[17%] top-11 hidden border-t-2 border-dashed border-coral/25 md:block" />
          {transferSteps.map((step) => (
            <article key={step.number} className="relative rounded-[26px] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(13,77,136,.07)]">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-soft text-coral">{step.icon}</span>
                <span className="text-sm font-extrabold tracking-widest text-coral"><LocalizedText en={step.number} my={step.numberMy} /></span>
              </div>
              <h2 className="mt-7 text-xl font-extrabold"><LocalizedText en={step.title} my={step.titleMy} /></h2>
              <p className="mt-3 text-sm leading-6 text-muted"><LocalizedText en={step.description} my={step.descriptionMy} /></p>
            </article>
          ))}
        </div>
        <div
          className="help-callout-panel relative mt-10 flex flex-col items-start justify-between gap-4 overflow-hidden rounded-[26px] p-6 sm:flex-row sm:items-center md:p-8"
          style={{
            background:
              "radial-gradient(ellipse at 88% 8%, rgb(56 189 248 / .58), transparent 34%), radial-gradient(ellipse at 8% 100%, rgb(56 189 248 / .28), transparent 38%), linear-gradient(122deg, #1738d4 0%, #2545f4 50%, #1557dc 100%)",
          }}
        >
          <span aria-hidden="true" className="help-illustration" />
          <div className="help-callout-copy">
            <h2 className="text-lg font-extrabold"><LocalizedText en="Have more questions?" my="မေးစရာများ ရှိပါသလား။" /></h2>
            <p className="mt-2 text-sm leading-6 text-muted"><LocalizedText en="Read our FAQs or contact our team." my="မေးလေ့ရှိသော မေးခွန်းများကို ဖတ်ရှုပါ သို့မဟုတ် ကျွန်ုပ်တို့အဖွဲ့ကို ဆက်သွယ်ပါ။" /></p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/help" className="help-callout-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition"><LocalizedText en="Help &amp; FAQs" my="အကူအညီနှင့် မေးခွန်းများ" /></Link>
            <Link href="/contact" className="help-callout-action inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition"><LocalizedText en="Contact Us" my="ဆက်သွယ်ရန်" /> <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
