import { NextResponse } from "next/server";

const allowedCategories = new Set([
  "General Enquiry",
  "Customer support",
  "Complaint",
  "Report Fraud",
  "Partnership",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // Quietly accept bot submissions without sending email.
  if (clean(payload.company, 200)) return NextResponse.json({ ok: true });

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254).toLowerCase();
  const category = clean(payload.category, 40);
  const subject = clean(payload.subject, 160).replace(/[\r\n\u0000-\u001f\u007f]+/g, " ");
  const message = clean(payload.message, 5000);

  if (!name || !email || !message || !allowedCategories.has(category)) {
    return NextResponse.json({ error: "Please complete all required fields and choose a valid category." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "remittance@relianceandtrustmm.com";
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Direct email sending is not configured yet. Please contact us by email instead." }, { status: 503 });
  }

  const emailSubject = `${category}: ${subject || `Website message from ${name}`}`;
  const text = [
    `Category: ${category}`,
    `Name: ${name}`,
    `Reply email: ${email}`,
    subject ? `Subject: ${subject}` : "",
    "",
    "Message:",
    message,
  ].filter(Boolean).join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: emailSubject,
        text,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact email provider returned an error", response.status);
      return NextResponse.json({ error: "We couldn’t send your message right now. Please email us directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn’t send your message right now. Please email us directly." }, { status: 502 });
  }
}

