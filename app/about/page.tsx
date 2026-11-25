import type { Metadata } from "next";
import { BadgeCheck, Eye, Globe2, HeartHandshake, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { PageHeroArt } from "../components/page-hero-art";
import { LocalizedText } from "../components/language-provider";

export const metadata: Metadata = {
  title: "About Reliance and Trust | Myanmar Remittance Company",
  description: "Learn about Reliance and Trust Company Limited, our compliance-led approach, and Mingalarpar, our planned Thailand to Myanmar remittance service.",
};

const companyPrinciples = [
  {
    icon: <ShieldCheck aria-hidden="true" className="size-5" />,
    title: "Trust through compliance",
    myTitle: "စည်းမျဉ်းစည်းကမ်းနှင့်အညီ ယုံကြည်မှုတည်ဆောက်ခြင်း",
    text: "Our remittance operator status was granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343. We apply KYC, AML, and sanctions screening to every transfer.",
    myText: "ကျွန်ုပ်တို့သည် ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 နှင့် သက်ဆိုင်သော ခွင့်ပြုချက်ရရှိထားပါသည်။ ဖောက်သည်အထောက်အထားစိစစ်ခြင်း၊ ငွေကြေးခဝါချမှုနှင့် အကြမ်းဖက်မှုကို ငွေကြေးထောက်ပံ့ခြင်း တားဆီးကာကွယ်ရေးဆိုင်ရာ စိစစ်မှုများအပါအဝင် လိုအပ်သော လုပ်ငန်းစဉ်များကို သက်ဆိုင်ရာ ဥပဒေ၊ နည်းဥပဒေ၊ စည်းမျဉ်း၊ လုပ်ထုံးလုပ်နည်းနှင့် ညွှန်ကြားချက်များနှင့်အညီ ဆောင်ရွက်ရန် ရည်ရွယ်ထားပါသည်။",
  },
  {
    icon: <Eye aria-hidden="true" className="size-5" />,
    title: "Transparency in pricing",
    myTitle: "စျေးနှုန်းဆိုင်ရာ ပွင့်လင်းမြင်သာမှု",
    text: "We show the exchange rate, fee, and recipient amount before you confirm. No hidden margins, no surprises.",
    myText: "ငွေလွှဲမှုကို အတည်မပြုမီ ငွေလဲနှုန်း၊ ငွေလွှဲဝန်ဆောင်ခနှင့် လက်ခံသူရရှိမည့် ငွေပမာဏတို့ကို ရှင်းလင်းစွာ ဖော်ပြပေးမည်ဖြစ်ပါသည်။",
  },
  {
    icon: <HeartHandshake aria-hidden="true" className="size-5" />,
    title: "Care for community",
    myTitle: "လူမှုအသိုင်းအဝိုင်းကို အလေးထားခြင်း",
    text: "Mingalarpar is built with Myanmar communities in mind — from language to payout methods to support.",
    myText: "Mingalarpar ကို မြန်မာလူမှုအသိုင်းအဝိုင်းများ၏ လိုအပ်ချက်များကို ထည့်သွင်းစဉ်းစား၍ ဘာသာစကား၊ ငွေလက်ခံနည်းလမ်းနှင့် အကူအညီပေးမှုတို့ကို အလေးထားကာ စီစဉ်တည်ဆောက်နေပါသည်။",
  },
  {
    icon: <Globe2 aria-hidden="true" className="size-5" />,
    title: "Building for the long term",
    myTitle: "ရေရှည်အတွက် တည်ဆောက်ခြင်း",
    text: "We are starting with one corridor and doing it well, then expanding responsibly to serve more communities.",
    myText: "ပထမဦးစွာ ငွေလွှဲလမ်းကြောင်းတစ်ခုကို ကောင်းမွန်စွာ ဆောင်ရွက်ပြီးနောက် လူမှုအသိုင်းအဝိုင်းများ ပိုမိုအကျိုးရှိစေရန် တာဝန်ယူမှုရှိစွာ တိုးချဲ့သွားပါမည်။",
  },
];

export default function AboutPage() {
  return (
    <main className="site-page min-h-screen text-ink">
      <SiteHeader activePage="about" />

      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div>
            <span className="about-eyebrow"><BadgeCheck aria-hidden="true" className="size-4" /> <LocalizedText en="CBM-granted remittance operator status" my="ဗဟိုဘဏ် (CBM) မှ ခွင့်ပြုထားသော ငွေလွှဲလုပ်ငန်းဆောင်ရွက်ခွင့်" /></span>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl"><LocalizedText en="About Reliance and Trust" my="Reliance and Trust အကြောင်း" /></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"><LocalizedText en="Reliance and Trust Company Limited has remittance operator status granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343, and is building services that connect people and communities across borders." my="Reliance and Trust Company Limited သည် ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 နှင့် သက်ဆိုင်သော ခွင့်ပြုချက်ရရှိထားပြီး နယ်စပ်ဖြတ်ကျော် ငွေလွှဲဝန်ဆောင်မှုများကို တာဝန်ယူမှုရှိစွာ တည်ဆောက်လျက်ရှိပါသည်။" /></p>
          </div>
          <PageHeroArt kind="about" />
        </div>
      </section>

      <section className="about-story-section mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <div className="about-story-panel rounded-[30px] p-7 md:p-12">
          <div className="max-w-3xl">
            <p className="about-kicker"><LocalizedText en="Who we are" my="ကျွန်ုပ်တို့အကြောင်း" /></p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl"><LocalizedText en="Reliability earned. Trust built." my="ယုံကြည်စိတ်ချရမှုကို ရရှိစေပြီး ယုံကြည်မှုကို တည်ဆောက်ပါသည်။" /></h2>
          </div>
          <div className="about-story-copy mt-7 grid gap-x-12 gap-y-5 md:grid-cols-2">
            <p><LocalizedText en="Our name reflects what we believe a remittance service should be built on: reliability that customers can depend on, and trust earned through transparency, compliance, and care. Our remittance operator status was granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343. We apply identity verification, transaction monitoring, and regulatory compliance measures across everything we do." my="ကျွန်ုပ်တို့၏ အမည်သည် ငွေလွှဲဝန်ဆောင်မှုတစ်ခုအတွက် အရေးကြီးသော အခြေခံတန်ဖိုးများကို ဖော်ပြပါသည်။ သုံးစွဲသူများ အားကိုးနိုင်သည့် ယုံကြည်စိတ်ချရမှု၊ ပွင့်လင်းမြင်သာမှု၊ စည်းမျဉ်းလိုက်နာမှုနှင့် ဂရုစိုက်မှုတို့ကို အခြေခံထားပါသည်။ ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 နှင့် သက်ဆိုင်သော ခွင့်ပြုချက်ရရှိထားပြီး လုပ်ငန်းဆောင်ရွက်ရာတွင် ဖောက်သည်အထောက်အထားစိစစ်ခြင်း၊ ငွေလွှဲမှုစောင့်ကြည့်စစ်ဆေးခြင်းနှင့် စည်းမျဉ်းလိုက်နာမှုတို့ကို အလေးထားပါသည်။" /></p>
            <p><LocalizedText en="Mingalarpar, our first service, is being built for the Thailand–Myanmar corridor — one of the most important remittance routes for Myanmar families. We are designing it as a mobile-first experience that makes sending money home simple to understand and convenient to use, with clear pricing and no hidden margins." my="ကျွန်ုပ်တို့၏ ပထမဆုံးဝန်ဆောင်မှုဖြစ်သော Mingalarpar ကို ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့ ငွေလွှဲပို့လိုသော မြန်မာမိသားစုများအတွက် စီစဉ်တည်ဆောက်နေပါသည်။ နေရပ်သို့ ငွေပို့ရာတွင် နားလည်ရလွယ်ကူပြီး အသုံးပြုရအဆင်ပြေစေရန် မိုဘိုင်းကို ဦးစားပေးသည့် ဝန်ဆောင်မှုအဖြစ် ရည်ရွယ်ထားပါသည်။ ငွေလွှဲမှုကို အတည်မပြုမီ သက်ဆိုင်ရာ ငွေလဲနှုန်းနှင့် ဝန်ဆောင်ခများကို ရှင်းလင်းစွာ ဖော်ပြပေးရန် ရည်ရွယ်ပါသည်။" /></p>
            <p><LocalizedText en="We are also planning for the future. After Thailand→Myanmar, we intend to expand to additional corridors, including Laos→Myanmar. Each new corridor will be launched with the same focus on compliance, transparency, and customer care." my="အနာဂတ်တွင် ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့ ငွေလွှဲလမ်းကြောင်းအပြင် လာအိုနိုင်ငံမှ မြန်မာနိုင်ငံသို့ အပါအဝင် အခြားလမ်းကြောင်းများသို့ တိုးချဲ့ရန် ရည်ရွယ်ထားပါသည်။ လမ်းကြောင်းအသစ်တစ်ခုစီကို သက်ဆိုင်ရာ စည်းမျဉ်းများနှင့်အညီ၊ ပွင့်လင်းမြင်သာမှုနှင့် သုံးစွဲသူအကျိုးစီးပွားကို အလေးထား၍ အကောင်အထည်ဖော်သွားပါမည်။" /></p>
          </div>
        </div>
        <div className="mt-14 md:mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="about-kicker"><LocalizedText en="What guides us" my="ကျွန်ုပ်တို့ကို လမ်းညွှန်ပေးသော တန်ဖိုးများ" /></p>
            <h2 className="about-values-heading-my mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl"><LocalizedText en="Built around what matters" my="အရေးကြီးသောအရာများကို အခြေခံတည်ဆောက်ထားပါသည်" /></h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyPrinciples.map((principle) => (
              <article key={principle.title} className="about-principle-card rounded-[24px] p-6 md:p-7">
                <span className="feature-icon grid size-12 place-items-center rounded-2xl">{principle.icon}</span>
                <h3 className="mt-5 text-lg font-extrabold"><LocalizedText en={principle.title} my={principle.myTitle} /></h3>
                <p className="mt-3 text-sm leading-6"><LocalizedText en={principle.text} my={principle.myText} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
