import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import CareersHeroArt from "./careers-hero-art";
import CareerListings from "./career-listings";
import { LocalizedText } from "../components/language-provider";

export const metadata: Metadata = {
  title: "Careers | Reliance and Trust",
  description: "Explore current opportunities at Reliance and Trust Company Limited and help build remittance services that connect people and communities.",
};

export default function CareersPage() {
  return (
    <main className="site-page min-h-screen text-ink">
      <SiteHeader activePage="careers" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 md:py-20">
          <div><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl"><LocalizedText en="Careers at Reliance &amp; Trust" my="Reliance &amp; Trust တွင် အလုပ်အကိုင်များ" /></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"><LocalizedText en="Join us in building thoughtful remittance services that connect people and communities across borders." my="နယ်စပ်ဖြတ်ကျော် ငွေလွှဲဝန်ဆောင်မှုများကို ကျွန်ုပ်တို့နှင့်အတူ တည်ဆောက်ပြီး လူပုဂ္ဂိုလ်များနှင့် လူမှုအသိုင်းအဝိုင်းများကို ချိတ်ဆက်ပေးရာတွင် ပါဝင်လိုက်ပါ။" /></p></div>
          <CareersHeroArt />
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="career-section-kicker text-[10px] font-extrabold uppercase tracking-[.18em]"><LocalizedText en="Current openings" my="လက်ရှိခေါ်ယူနေသော အလုပ်အကိုင်များ" /></p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl"><LocalizedText en="Find your next opportunity" my="သင့်အတွက် နောက်ထပ်အခွင့်အလမ်းကို ရှာဖွေပါ" /></h2>
          <p className="mt-3 text-sm leading-6 text-muted"><LocalizedText en="Explore the roles below and apply by email. Include your CV and the position title in your message." my="အောက်ပါရာထူးများကို ကြည့်ရှုပြီး အီးမေးလ်မှတစ်ဆင့် လျှောက်ထားနိုင်ပါသည်။ CV နှင့်အတူ လျှောက်ထားလိုသည့် ရာထူးအမည်ကိုလည်း ဖော်ပြပေးပါ။" /></p>
        </div>
        <CareerListings />
      </section>
      <SiteFooter />
    </main>
  );
}
