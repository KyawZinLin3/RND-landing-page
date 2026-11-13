"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "../components/language-provider";

const categories = ["General Enquiry", "Customer support", "Complaint", "Report Fraud", "Partnership"];

export default function ContactForm() {
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          category: data.get("category"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || (isMyanmar ? "စာမပို့နိုင်ပါ။ ထပ်မံကြိုးစားပါ။" : "We couldn’t send your message. Please try again."));
      form.reset();
      setStatus(isMyanmar ? "သင့်စာကို ပေးပို့ပြီးပါပြီ။ ကျွန်ုပ်တို့အဖွဲ့မှ အမြန်ဆုံး ပြန်လည်ဆက်သွယ်ပါမည်။" : "Your message has been sent. Our team will get back to you as soon as possible.");
    } catch (error) {
      setStatus(isMyanmar ? "စာမပို့နိုင်ပါ။ ထပ်မံကြိုးစားပါ။" : error instanceof Error ? error.message : "We couldn’t send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form mt-6 grid gap-4">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold" htmlFor="contact-name">{isMyanmar ? "အမည်" : "Name"}
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} className="contact-field h-12 rounded-xl border px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
        </label>
        <label className="grid gap-2 text-sm font-bold" htmlFor="contact-email">{isMyanmar ? "အီးမေးလ်" : "Email"}
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="contact-field h-12 rounded-xl border px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold" htmlFor="contact-category">{isMyanmar ? "အမျိုးအစား" : "Category"}
        <select id="contact-category" name="category" required defaultValue="" className="contact-field contact-select h-12 rounded-xl border px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15">
          <option value="" disabled>{isMyanmar ? "အမျိုးအစားရွေးချယ်ပါ" : "Select a category"}</option>
          {categories.map((category) => <option key={category} value={category}>{isMyanmar ? ({ "General Enquiry": "အထွေထွေစုံစမ်းမေးမြန်းမှု", "Customer support": "ဖောက်သည်အကူအညီ", Complaint: "တိုင်ကြားမှု", "Report Fraud": "လိမ်လည်မှုတိုင်ကြားရန်", Partnership: "မိတ်ဖက်ပူးပေါင်းမှု" } as Record<string, string>)[category] : category}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold" htmlFor="contact-subject">{isMyanmar ? "အကြောင်းအရာ" : "Subject"} <span className="font-normal text-muted">{isMyanmar ? "(မဖြစ်မနေမဟုတ်ပါ)" : "(optional)"}</span>
        <input id="contact-subject" name="subject" type="text" maxLength={160} className="contact-field h-12 rounded-xl border px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
      </label>
      <label className="grid gap-2 text-sm font-bold" htmlFor="contact-message">{isMyanmar ? "စာသား" : "Message"}
        <textarea id="contact-message" name="message" required rows={5} maxLength={5000} className="contact-field resize-y rounded-xl border px-4 py-3 font-medium leading-6 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
      </label>
      <label className="contact-honeypot" aria-hidden="true">Leave this field empty
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="coral" type="submit" disabled={submitting}>{submitting ? (isMyanmar ? "ပေးပို့နေပါသည်…" : "Sending…") : (isMyanmar ? "စာပို့ရန်" : "Send message")} <ArrowRight aria-hidden="true" className="size-4" /></Button>
        <p role="status" aria-live="polite" className="text-xs leading-5 text-muted">{status || (isMyanmar ? "သင့်စာကို ကျွန်ုပ်တို့အဖွဲ့ထံ လုံခြုံစွာ ပေးပို့ပါမည်။" : "Your message will be sent securely to our team.")}</p>
      </div>
    </form>
  );
}

