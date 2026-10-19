import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, ClipboardList, MoveRight, ScanFace, Smartphone, WalletCards } from "lucide-react";
import { SiteFooter, SiteHeader } from "../about/site-chrome";
import { websiteSettings } from "@/lib/website-content";

export const metadata: Metadata = {
  title: "Mingalarpar App | Reliance and Trust",
  description: "Learn about the Mingalarpar mobile remittance app and its planned features.",
};

const plannedFeatures = [
  {
    icon: <ScanFace aria-hidden="true" className="size-6" />,
    title: "Account setup and verification",
    description: "A guided account setup with the identity checks required for the service.",
  },
  {
    icon: <WalletCards aria-hidden="true" className="size-6" />,
    title: "Create a transfer",
    description: "Enter transfer details and review the information before confirming a transaction.",
  },
  {
    icon: <Clock3 aria-hidden="true" className="size-6" />,
    title: "Track transfer progress",
    description: "Follow transfer updates and see the latest available status in one place.",
  },
  {
    icon: <ClipboardList aria-hidden="true" className="size-6" />,
    title: "Transaction history",
    description: "Review previous transactions and their details from your account.",
  },
];

export default function MingalarparPage() {
  const appStatus = websiteSettings.appLaunched ? "Available" : "Coming Soon";

  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader activePage="mingalarpar" />
      <section className="hero-shell">
        <div className="hero-content mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-coral/10 bg-white/80 px-4 py-2 text-xs font-extrabold text-coral shadow-sm">
              <Smartphone aria-hidden="true" className="size-4" /> Mingalarpar mobile app
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] sm:text-5xl md:text-6xl">Your remittance journey, in one app</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">Mingalarpar is the planned mobile remittance service from Reliance and Trust Company Limited, designed to help people send money home through a clear digital experience.</p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-extrabold text-coral shadow-sm">
              <span className="size-2 rounded-full bg-coral" /> Mingalarpar App — {appStatus}
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">App availability, supported payment options, fees and transfer details will be shared when confirmed.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div aria-hidden="true" className="absolute inset-4 rounded-full bg-coral/15 blur-3xl" />
            <div className="relative mx-auto aspect-[393/852] w-full max-w-[250px] overflow-hidden rounded-[44px] border-[7px] border-[#1d2635] bg-white p-5 pt-12 shadow-[0_28px_70px_rgba(7,27,58,.24)]">
              <div aria-hidden="true" className="absolute left-1/2 top-2 z-20 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-[#101114]" />
              <div aria-hidden="true" className="absolute left-5 right-5 top-3 flex justify-between text-[9px] font-extrabold"><span>9:41</span><span>•••</span></div>
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-coral/10 bg-white shadow-sm">
                  <Image src="/mingalarpar-logo-transparent.png" alt="" width={48} height={48} className="size-[82%] object-contain" />
                </span>
                <div><p className="font-extrabold">Mingalarpar</p><p className="mt-0.5 text-[10px] font-bold text-coral">{appStatus}</p></div>
              </div>
              <h2 className="mt-7 text-lg font-extrabold">Send money home</h2>
              <p className="mt-1 text-[11px] leading-5 text-muted">A clear, guided transfer journey.</p>
              <div className="mt-5 rounded-2xl bg-soft p-4">
                <span className="text-[10px] font-bold text-muted">First planned corridor</span>
                <div className="mt-3 flex items-center justify-between text-xs font-extrabold"><span>Thailand</span><MoveRight aria-hidden="true" className="size-4 text-coral" /><span>Myanmar</span></div>
                <div className="mt-3 flex justify-between text-[10px] font-bold text-muted"><span>THB</span><span>MMK</span></div>
              </div>
              <div className="mt-4 space-y-2">
                {["Create a transfer", "Track your transfer", "View transaction history"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-black/5 p-3">
                    <span className="grid size-8 place-items-center rounded-lg bg-soft text-coral"><span className="text-[10px] font-extrabold">0{index + 1}</span></span>
                    <span className="text-[10px] font-bold">{item}</span>
                    <ArrowRight aria-hidden="true" className="ml-auto size-3 text-muted" />
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-full bg-ink px-4 py-3 text-center text-[10px] font-bold text-white">App preview · Subject to change</div>
            </div>
            <p className="mt-4 text-center text-[10px] leading-5 text-muted">Illustrative product preview. Final features and availability will be confirmed before launch.</p>
          </div>
        </div>
      </section>

      <section className="section-wrap py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl">A simple experience, planned around your needs</h2>
          <p className="mt-4 text-base leading-7 text-muted">The app is being planned to bring the key parts of a remittance journey together. Details may change as the service is prepared for launch.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plannedFeatures.map((feature) => (
            <article key={feature.title} className="feature-card !min-h-0 !bg-[#f4f8fc] p-6">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="mt-6 text-base font-extrabold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 md:pb-20">
        <div className="flex flex-col items-start justify-between gap-5 rounded-[28px] bg-soft p-6 sm:flex-row sm:items-center md:p-9">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-coral">First planned corridor</p>
            <h2 className="mt-2 text-2xl font-extrabold">Thailand <span className="text-coral">→</span> Myanmar</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">The first corridor is planned. Service availability and launch details will be shared when confirmed.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:border-coral/40">How It Works</Link>
            <Link href="/help" className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white transition hover:brightness-95">Help Center <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
