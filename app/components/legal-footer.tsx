"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { useSiteLanguage } from "./language-provider";

type LegalDocument = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

const legalDocuments: Record<string, LegalDocument> = {
  privacy: {
    title: "Privacy Policy",
    intro: "This Privacy Policy explains how Reliance and Trust Company Limited (“Reliance and Trust”, “we”, “us”) collects, uses, and protects your personal information when you use the Mingalarpar remittance service and this website. We are committed to handling your information responsibly and in line with applicable Myanmar data protection requirements.",
    sections: [
      { heading: "Information we collect", body: "We collect information you provide directly to us, such as your name, email address, phone number, date of birth, government-issued identification details, address, and transaction information. We also collect information automatically when you use our service, including device identifiers, IP address, app usage data, and transaction logs." },
      { heading: "How we use your information", body: "We use your information to verify your identity, process and deliver your transfers, comply with legal and regulatory obligations (including anti-money-laundering and sanctions screening), prevent fraud, provide customer support, and improve our service. We do not sell your personal information to third parties." },
      { heading: "Sharing your information", body: "We share your information with our payout partners, banks, and payment processors strictly to complete your transfers; with regulatory authorities where required by law; and with service providers who help us operate (such as cloud hosting and identity verification providers), all under appropriate confidentiality and data protection terms." },
      { heading: "Data security & retention", body: "We protect your information using industry-standard security measures including encryption in transit and at rest, access controls, and regular security reviews. We retain your information for as long as your account is active and for the period required by applicable law to meet our record-keeping and reporting obligations." },
      { heading: "Your rights", body: "You may request access to, correction of, or deletion of your personal information, subject to legal and regulatory retention requirements. To exercise these rights, contact us at remittance@relianceandtrustmm.com." },
      { heading: "Contact", body: "If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at remittance@relianceandtrustmm.com or at our registered office: No. B-7, Taw Win Road, 4 Quarter, 9 Mile, Mayangone Township, Yangon Region, Myanmar." },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These Terms & Conditions govern your use of the Mingalarpar remittance service and website operated by Reliance and Trust Company Limited. By using the service you agree to these terms. As the service is in pre-launch, some terms describe how the service will operate once available.",
    sections: [
      { heading: "Eligibility", body: "To use Mingalarpar you must be at least 18 years old, legally resident in a country we support, and able to provide valid identification. You must use the service only for lawful purposes and only to send funds that you have lawfully obtained." },
      { heading: "Account registration & verification", body: "You must provide accurate and complete information when registering, and complete the identity verification process we require. We may refuse, suspend, or close an account if verification cannot be completed, if suspicious activity is detected, or if required by law." },
      { heading: "Transfers & fees", body: "When you create a transfer, we will show you the exchange rate, transfer fee, and the amount your recipient will receive before you confirm. Once confirmed, a transfer generally cannot be cancelled. Fees and exchange rates are set by us and may change; the rate shown at confirmation is the rate that applies to your transfer." },
      { heading: "Prohibited use", body: "You must not use Mingalarpar for any illegal activity, including money laundering, terrorist financing, sanctions evasion, or fraud. You must not use the service to send funds on behalf of third parties for profit, or to evade tax or other legal obligations. We monitor transactions and report suspicious activity as required by law." },
      { heading: "Liability", body: "Mingalarpar is provided on a reasonable-effort basis. To the extent permitted by law, our liability for any single transfer is limited to the amount of that transfer. We are not liable for indirect or consequential losses, or for failures caused by recipient banks, network operators, or events outside our control." },
      { heading: "Changes to these terms", body: "We may update these terms from time to time. We will notify you of material changes through the app or by email. Continued use of the service after changes take effect constitutes acceptance of the updated terms." },
    ],
  },
  compliance: {
    title: "Compliance Information",
    intro: "Reliance and Trust Company Limited is committed to operating Mingalarpar to the highest standards of regulatory compliance. The following describes the compliance framework we apply to our remittance service.",
    sections: [
      { heading: "Licensing", body: "Reliance and Trust Company Limited has remittance operator status granted by the Central Bank of Myanmar (CBM) through Announcement Letter No. FE 1/343. We conduct our business in accordance with the applicable requirements associated with that status." },
      { heading: "Customer identity verification (KYC)", body: "Every customer must complete identity verification before sending a transfer. This includes validating a government-issued photo ID, matching a selfie, and where applicable verifying address and source of funds. We apply risk-based enhanced due diligence for higher-risk customers or transactions." },
      { heading: "Anti-money-laundering (AML) & counter-financing of terrorism (CFT)", body: "We monitor transactions for indicators of money laundering, terrorist financing, fraud, and sanctions evasion. Suspicious activity is reviewed by our compliance team and reported to the relevant Myanmar authorities where required. We maintain records in line with regulatory requirements." },
      { heading: "Sanctions screening", body: "We screen customers, recipients, and related parties against applicable local and international sanctions lists before processing transfers. Transactions involving sanctioned parties are blocked and reported as required." },
      { heading: "Transaction monitoring & reporting", body: "Our systems monitor transaction patterns and flag unusual activity for review. We file reports with the relevant authorities in accordance with Myanmar regulatory requirements." },
      { heading: "Contact our compliance team", body: "For compliance-related enquiries, contact us at remittance@relianceandtrustmm.com with the subject line 'Compliance'." },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro: "This Cookie Policy explains how Reliance and Trust Company Limited uses cookies and similar technologies on this website. Cookies are small files stored on your device that help the site function and help us understand how it is used.",
    sections: [
      { heading: "Types of cookies we use", body: "Essential cookies are required for the website to function (such as remembering your language preference). Analytics cookies help us understand how visitors use the site so we can improve it. We do not use advertising cookies." },
      { heading: "Managing cookies", body: "You can control or delete cookies through your browser settings. Disabling essential cookies may affect the functionality of the website. We will ask for your consent before setting any non-essential cookies." },
      { heading: "Third-party services", body: "We may use trusted third-party services (such as analytics providers) that set their own cookies. These providers process data under their own privacy policies, which we encourage you to review." },
      { heading: "Contact", body: "For questions about this Cookie Policy, contact us at remittance@relianceandtrustmm.com." },
    ],
  },
  regulatory: {
    title: "Regulatory Information",
    intro: "This page sets out key regulatory information about Reliance and Trust Company Limited and the Mingalarpar remittance service.",
    sections: [
      { heading: "Company information", body: "Reliance and Trust Company Limited is incorporated in Myanmar. Registered office: No. B-7, Taw Win Road, 4 Quarter, 9 Mile, Mayangone Township, Yangon Region, Myanmar. Remittance operator status was granted by the Central Bank of Myanmar (CBM) through Announcement Letter No. FE 1/343." },
      { heading: "Regulatory status", body: "Reliance and Trust Company Limited has remittance operator status granted by the Central Bank of Myanmar (CBM) through Announcement Letter No. FE 1/343. The company operates in accordance with the applicable requirements associated with that status." },
      { heading: "Supervision", body: "Our remittance activities are subject to supervisory oversight by the relevant Myanmar financial regulatory authority, including periodic inspections and reporting obligations." },
      { heading: "Customer protections", body: "We are committed to fair treatment of customers, transparent pricing, secure handling of funds, and accessible complaints handling. Details of our complaints procedure are available on the Complaints page." },
      { heading: "Important notice", body: "The information on this page is provided for general information only and does not constitute legal or regulatory advice. Full regulatory details will be published when approved by the relevant authorities." },
    ],
  },
  fraud: {
    title: "Fraud Awareness",
    intro: "At Reliance and Trust, protecting our customers from fraud is a top priority. This page explains common fraud schemes and how to protect yourself when using Mingalarpar.",
    sections: [
      { heading: "Common fraud schemes", body: "Romance scams (someone you met online asks you to send money), investment scams (promises of high returns for sending funds), impersonation scams (someone pretends to be from Mingalarpar or a bank), and family-emergency scams (a caller claims a relative is in trouble and needs money urgently). Be suspicious of any urgent request for money." },
      { heading: "How to protect yourself", body: "Never share your password, one-time codes, or full card details with anyone. Mingalarpar staff will never ask for these. Always verify unusual requests by contacting your family member directly on a known number. Be cautious of offers that sound too good to be true — they usually are. Only send money to people you know and trust." },
      { heading: "If you suspect fraud", body: "Stop communicating with the suspected fraudster. Do not send any more money. Report the incident to us immediately at remittance@relianceandtrustmm.com with the subject line 'Fraud Report'. If you have already sent money, contact us as soon as possible — we may be able to stop the transfer before it is paid out." },
      { heading: "How we protect you", body: "We monitor transactions for indicators of fraud, require identity verification for every customer, and use encryption to protect your data. We also educate customers about common scams. However, no system is foolproof — your vigilance is the most important defence." },
    ],
  },
};

const footerDocuments = [
  ["Privacy Policy", "privacy"],
  ["Terms & Conditions", "terms"],
  ["Compliance", "compliance"],
  ["Cookie Policy", "cookies"],
  ["Regulatory Information", "regulatory"],
] as const;

export function LegalFooterCol() {
  const { language } = useSiteLanguage();
  return <>
    <div>
      <p className="footer-title">{language === "my" ? "ဥပဒေရေးရာ" : "Legal"}</p>
      <div className="mt-4 grid gap-3">
        {footerDocuments.map(([label, key]) => <DocumentFooterLink key={key} label={language === "my" ? ({ "Privacy Policy": "ကိုယ်ရေးအချက်အလက် မူဝါဒ", "Terms & Conditions": "စည်းကမ်းသတ်မှတ်ချက်များ", Compliance: "စည်းမျဉ်းလိုက်နာမှု", "Cookie Policy": "ကွတ်ကီး မူဝါဒ", "Regulatory Information": "စည်းမျဉ်းဆိုင်ရာ အချက်အလက်များ" } as Record<string, string>)[label] : label} documentKey={key} />)}
      </div>
    </div>
  </>;
}

export function FraudAwarenessFooterLink() {
  const { language } = useSiteLanguage();
  return <DocumentFooterLink label={language === "my" ? "လိမ်လည်မှု သတိပြုရန်" : "Fraud Awareness"} documentKey="fraud" />;
}

function DocumentFooterLink({ label, documentKey }: { label: string; documentKey: keyof typeof legalDocuments }) {
  const [active, setActive] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const document = legalDocuments[documentKey];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  return <>
    <button type="button" className="footer-col-link w-fit whitespace-nowrap cursor-pointer border-0 bg-transparent p-0 text-left transition-colors" onClick={() => setActive(true)}>{label}<ChevronRight aria-hidden="true" className="ml-1 inline size-3 opacity-65" /></button>
    <dialog ref={dialogRef} className="legal-dialog" aria-labelledby={`legal-dialog-${documentKey}`} onClose={() => setActive(false)}>
      <header className="legal-dialog-header">
        <div>
          <p className="legal-dialog-kicker">Reliance &amp; Trust</p>
          <h2 id={`legal-dialog-${documentKey}`}>{document.title}</h2>
          <p className="legal-dialog-date">Last updated: 5 November 2026</p>
        </div>
        <button type="button" className="legal-dialog-close" aria-label="Close document" onClick={() => dialogRef.current?.close()}><X aria-hidden="true" className="size-5" /></button>
      </header>
      <div className="legal-dialog-body">
        <p className="legal-dialog-intro">{document.intro}</p>
        {document.sections.map((section) => <section key={section.heading}><h3>{section.heading}</h3><p>{section.body}</p></section>)}
      </div>
    </dialog>
  </>;
}

