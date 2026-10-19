"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const companyEmail = "Remittance@relianceandtrustmm.com";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailSubject = subject || `Website inquiry from ${name}`;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${companyEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailto;
    setStatus("Your email app should open with the message ready. Send it there to complete delivery.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold" htmlFor="contact-name">Name
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} className="h-12 rounded-xl border border-black/10 bg-white px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
        </label>
        <label className="grid gap-2 text-sm font-bold" htmlFor="contact-email">Email
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="h-12 rounded-xl border border-black/10 bg-white px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold" htmlFor="contact-subject">Subject
        <input id="contact-subject" name="subject" type="text" required maxLength={160} className="h-12 rounded-xl border border-black/10 bg-white px-4 font-medium outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
      </label>
      <label className="grid gap-2 text-sm font-bold" htmlFor="contact-message">Message
        <textarea id="contact-message" name="message" required rows={6} maxLength={5000} className="resize-y rounded-xl border border-black/10 bg-white px-4 py-3 font-medium leading-6 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15" />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="coral" type="submit">Send message <ArrowRight aria-hidden="true" className="size-4" /></Button>
        <p role="status" aria-live="polite" className="text-xs leading-5 text-muted">{status || "Your message will be prepared in your email app."}</p>
      </div>
    </form>
  );
}
