import {
  ArrowDownLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  CircleHelp,
  FileText,
  Mail,
  MessageCircle,
  Newspaper,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type PageHeroArtKind = "how-it-works" | "help" | "news" | "careers" | "about" | "contact";

const labels: Record<PageHeroArtKind, string> = {
  "how-it-works": "Illustration of a three-step money transfer journey from Thailand to Myanmar",
  help: "Illustration of customer support questions and answers",
  news: "Illustration of a company news and announcements article",
  careers: "Illustration of a job opportunity and a team",
  about: "Illustration representing Reliance and Trust and its company values",
  contact: "Illustration of a message being prepared for the Reliance and Trust team",
};

export function PageHeroArt({ kind }: { kind: PageHeroArtKind }) {
  return (
    <figure role="img" aria-label={labels[kind]} className="relative mx-auto w-full max-w-[500px]">
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-[#168cf2]/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/75 p-4 shadow-[0_24px_70px_rgba(13,77,136,.13)] backdrop-blur sm:rounded-[36px] sm:p-6">
        <div aria-hidden="true" className="absolute -right-12 -top-16 size-48 rounded-full bg-coral/10 blur-2xl" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-ink text-white shadow-md shadow-ink/15">
              {kind === "how-it-works" && <ArrowDownLeft className="size-5" />}
              {kind === "help" && <CircleHelp className="size-5" />}
              {kind === "news" && <Newspaper className="size-5" />}
              {kind === "careers" && <BriefcaseBusiness className="size-5" />}
              {kind === "about" && <BadgeCheck className="size-5" />}
              {kind === "contact" && <Mail className="size-5" />}
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink">
                {kind === "how-it-works" && "Transfer journey"}
                {kind === "help" && "Help center"}
                {kind === "news" && "Company updates"}
                {kind === "careers" && "Join our team"}
                {kind === "about" && "Reliance & Trust"}
                {kind === "contact" && "Get in touch"}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold text-muted">Reliance and Trust</p>
            </div>
          </div>
          <span className="rounded-full bg-soft px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-coral">Mingalarpar</span>
        </div>

        {kind === "how-it-works" && <TransferVisual />}
        {kind === "help" && <HelpVisual />}
        {kind === "news" && <NewsVisual />}
        {kind === "careers" && <CareersVisual />}
        {kind === "about" && <AboutVisual />}
        {kind === "contact" && <ContactVisual />}
      </div>
      <span aria-hidden="true" className="absolute -bottom-4 -left-3 grid size-12 place-items-center rounded-2xl border border-white bg-white text-coral shadow-lg sm:-left-5 sm:size-14">
        {kind === "help" ? <MessageCircle className="size-5" /> : kind === "contact" ? <Send className="size-5" /> : <ShieldCheck className="size-5" />}
      </span>
    </figure>
  );
}

function TransferVisual() {
  return <div className="relative mt-6 rounded-[24px] bg-soft p-5 sm:p-6">
    <div className="flex items-center justify-between">
      <div className="grid size-14 place-items-center rounded-full border-4 border-white bg-[#e9f4ff] text-xs font-extrabold text-[#0870d1] shadow-sm">TH</div>
      <div className="mx-3 flex flex-1 items-center"><span className="h-px flex-1 border-t border-dashed border-coral/50" /><ArrowRight aria-hidden="true" className="mx-2 size-5 text-coral" /><span className="h-px flex-1 border-t border-dashed border-coral/50" /></div>
      <div className="grid size-14 place-items-center rounded-full border-4 border-white bg-[#fff0eb] text-xs font-extrabold text-coral shadow-sm">MM</div>
    </div>
    <div className="mt-3 flex justify-between px-1 text-[10px] font-bold text-muted"><span>Thailand</span><span>Myanmar</span></div>
    <div className="mt-5 grid grid-cols-3 gap-2">
      {["Register", "Transfer", "Receive"].map((item, index) => <div key={item} className="rounded-xl border border-white bg-white px-2 py-3 text-center"><span className="mx-auto grid size-6 place-items-center rounded-full bg-soft text-[9px] font-extrabold text-coral">0{index + 1}</span><span className="mt-2 block text-[9px] font-bold text-ink">{item}</span></div>)}
    </div>
    <p className="mt-4 text-center text-[10px] font-semibold text-muted">Planned journey · details coming soon</p>
  </div>;
}

function HelpVisual() {
  return <div className="mt-6 space-y-3 rounded-[24px] bg-soft p-4 sm:p-5">
    <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"><div className="flex items-start gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-xl bg-soft text-coral"><CircleHelp className="size-4" /></span><div className="flex-1"><p className="text-[10px] font-extrabold text-ink">How do I get started?</p><span className="mt-2 block h-1.5 w-full rounded-full bg-[#e9eff5]" /><span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-[#e9eff5]" /></div></div></div>
    <div className="ml-8 rounded-2xl bg-ink p-4 text-white shadow-sm"><div className="flex items-center gap-2"><Check className="size-4 text-[#71dfb3]" /><p className="text-[10px] font-bold">We’re here to help</p></div><span className="mt-2 block h-1.5 w-4/5 rounded-full bg-white/30" /><span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-white/20" /></div>
    <div className="flex items-center justify-center gap-2 pt-1 text-[10px] font-bold text-muted"><MessageCircle className="size-4 text-coral" /> Answers for your remittance questions</div>
  </div>;
}

function NewsVisual() {
  return <div className="mt-6 overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-sm">
    <div className="relative grid h-36 place-items-center overflow-hidden bg-gradient-to-br from-[#dff3ff] via-[#eaf4ff] to-[#ffe9e3] sm:h-40"><div aria-hidden="true" className="absolute -right-5 -top-10 size-40 rounded-full border-[20px] border-white/50" /><div aria-hidden="true" className="absolute -bottom-16 -left-5 size-40 rounded-full border-[22px] border-coral/10" /><span className="relative grid size-16 place-items-center rounded-2xl bg-white text-coral shadow-lg"><FileText className="size-7" /></span><span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-coral">Company update</span></div>
    <div className="p-5"><div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-muted"><Newspaper className="size-3.5 text-coral" /> News & announcements <span className="ml-auto">Latest</span></div><span className="mt-4 block h-2 w-4/5 rounded-full bg-ink/80" /><span className="mt-2 block h-2 w-full rounded-full bg-[#e9eff5]" /><span className="mt-2 block h-2 w-3/5 rounded-full bg-[#e9eff5]" /></div>
  </div>;
}

function CareersVisual() {
  return <div className="mt-6 rounded-[24px] bg-soft p-4 sm:p-5">
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"><div><span className="rounded-full bg-[#e8f5ff] px-2.5 py-1 text-[9px] font-extrabold text-[#0870d1]">SAMPLE OPPORTUNITY</span><p className="mt-3 text-sm font-extrabold text-ink">Customer Support Associate</p><p className="mt-1 text-[10px] font-semibold text-muted">Customer Experience · Yangon</p></div><span className="grid size-11 place-items-center rounded-2xl bg-soft text-coral"><BriefcaseBusiness className="size-5" /></span></div>
    <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink p-4 text-white"><div><p className="text-[10px] font-extrabold">People make the difference</p><p className="mt-1 text-[9px] text-white/60">Build services that connect communities</p></div><div className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-ink bg-[#f6d5bd] text-ink"><UserRound className="size-4" /></span><span className="grid size-8 place-items-center rounded-full border-2 border-ink bg-[#b9e8ff] text-ink"><UserRound className="size-4" /></span><span className="grid size-8 place-items-center rounded-full border-2 border-ink bg-[#ffd6cb] text-ink"><UserRound className="size-4" /></span></div></div>
  </div>;
}

function AboutVisual() {
  return <div className="relative mt-6 grid min-h-[220px] place-items-center overflow-hidden rounded-[24px] bg-soft p-5">
    <div aria-hidden="true" className="absolute size-48 rounded-full border border-coral/15" /><div aria-hidden="true" className="absolute size-36 rounded-full border border-[#168cf2]/20" /><div aria-hidden="true" className="absolute h-px w-[75%] rotate-[-24deg] bg-coral/20" /><div aria-hidden="true" className="absolute h-px w-[75%] rotate-[24deg] bg-[#168cf2]/20" />
    <div className="relative z-10 grid size-24 place-items-center rounded-full bg-ink text-center text-sm font-extrabold text-white shadow-xl shadow-ink/20">R&amp;T</div>
    <span className="absolute left-[12%] top-[20%] grid size-11 place-items-center rounded-2xl bg-white text-coral shadow-md"><BadgeCheck className="size-5" /></span><span className="absolute right-[12%] top-[22%] grid size-11 place-items-center rounded-2xl bg-white text-[#0870d1] shadow-md"><ShieldCheck className="size-5" /></span><span className="absolute bottom-[12%] grid size-11 place-items-center rounded-2xl bg-white text-coral shadow-md"><UserRound className="size-5" /></span>
    <p className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-extrabold text-muted">Trust · Care · Connection</p>
  </div>;
}

function ContactVisual() {
  return <div className="mt-6 rounded-[24px] bg-soft p-4 sm:p-5">
    <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"><div className="flex items-center justify-between border-b border-black/5 pb-3"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-xl bg-soft text-coral"><Mail className="size-4" /></span><span className="text-[10px] font-extrabold text-ink">New message</span></div><span className="text-[9px] font-bold text-muted">Email</span></div><div className="mt-4 space-y-3"><div><p className="text-[9px] font-bold text-muted">TO</p><p className="mt-1 text-[10px] font-extrabold text-ink">Remittance@relianceandtrustmm.com</p></div><div className="rounded-xl bg-[#f5f9fd] p-3"><span className="block h-1.5 w-2/5 rounded-full bg-[#cad7e3]" /><span className="mt-2 block h-1.5 w-full rounded-full bg-[#e4ebf1]" /><span className="mt-2 block h-1.5 w-4/5 rounded-full bg-[#e4ebf1]" /></div></div><div className="mt-4 flex justify-end"><span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-2 text-[9px] font-extrabold text-white">Send message <Send className="size-3" /></span></div></div>
    <p className="mt-3 text-center text-[10px] font-semibold text-muted">We’d be glad to hear from you</p>
  </div>;
}
