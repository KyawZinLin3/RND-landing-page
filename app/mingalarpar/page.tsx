import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, ClipboardList, ScanFace, Smartphone, WalletCards } from "lucide-react";
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
            <div className="relative mx-auto w-full max-w-[230px] rounded-[34px] border-[5px] border-[#182230] bg-[#182230] p-[3px] shadow-[0_24px_60px_rgba(7,27,58,.2)]">
              <div className="overflow-hidden rounded-[27px] bg-white"><Image src="/mingalarpar-app-preview.png" alt="Mingalarpar mobile app home screen preview" width={320} height={690} priority className="block h-auto w-full" /></div>
            </div>
            <div className="relative mx-auto mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-extrabold text-ink shadow-sm"><span className="size-2 rounded-full bg-coral" />App preview · Coming soon</div>
            <p className="relative mx-auto mt-3 max-w-[290px] text-center text-xs leading-5 text-muted">Preview of the planned app. Mingalarpar is not available to download or use yet.</p>
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
