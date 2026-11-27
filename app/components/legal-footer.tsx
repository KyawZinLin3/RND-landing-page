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
      { heading: "Licensing", body: "Reliance and Trust Company Limited has remittance operator status granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343. We conduct our business in accordance with the applicable requirements associated with that status." },
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
      { heading: "Company information", body: "Reliance and Trust Company Limited is incorporated in Myanmar. Registered office: No. B-7, Taw Win Road, 4 Quarter, 9 Mile, Mayangone Township, Yangon Region, Myanmar. Remittance operator status was granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343." },
      { heading: "Regulatory status", body: "Reliance and Trust Company Limited has remittance operator status granted by the Central Bank of Myanmar (CBM) through Official Letter No. FE 1/343. The company operates in accordance with the applicable requirements associated with that status." },
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

const legalDocumentsMy: Record<string, LegalDocument> = {
  privacy: {
    title: "ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ မူဝါဒ",
    intro: "ဤကိုယ်ရေးအချက်အလက်ဆိုင်ရာ မူဝါဒတွင် Mingalarpar ငွေလွှဲဝန်ဆောင်မှုနှင့် ဤဝဘ်ဆိုက်ကို အသုံးပြုသည့်အခါ Reliance and Trust Company Limited (“Reliance and Trust”၊ “ကျွန်ုပ်တို့”) က သင့်ကိုယ်ရေးအချက်အလက်များကို မည်သို့စုဆောင်း၊ အသုံးပြု၊ ကာကွယ်ကြောင်း ရှင်းလင်းဖော်ပြထားပါသည်။ သင့်အချက်အလက်များကို တာဝန်ယူမှုရှိစွာ ကိုင်တွယ်ပြီး မြန်မာနိုင်ငံနှင့် သက်ဆိုင်သော ကိုယ်ရေးအချက်အလက်ကာကွယ်ရေးဆိုင်ရာ လိုအပ်ချက်များနှင့်အညီ ဆောင်ရွက်ရန် ကျွန်ုပ်တို့ ကတိပြုပါသည်။",
    sections: [
      { heading: "ကျွန်ုပ်တို့စုဆောင်းသည့် အချက်အလက်များ", body: "သင့်အမည်၊ အီးမေးလ်လိပ်စာ၊ ဖုန်းနံပါတ်၊ မွေးသက္ကရာဇ်၊ အစိုးရထုတ် သက်သေခံအထောက်အထားအသေးစိတ်၊ နေရပ်လိပ်စာနှင့် ငွေလွှဲမှုဆိုင်ရာ အချက်အလက်များကဲ့သို့ သင်ကိုယ်တိုင်ပေးအပ်သည့် အချက်အလက်များကို စုဆောင်းပါသည်။ ဝန်ဆောင်မှုအသုံးပြုသည့်အခါ စက်ပစ္စည်းအမှတ်အသားများ၊ IP လိပ်စာ၊ အက်ပ်အသုံးပြုမှုဒေတာနှင့် ငွေလွှဲမှတ်တမ်းများအပါအဝင် အချက်အလက်အချို့ကိုလည်း အလိုအလျောက် စုဆောင်းပါသည်။" },
      { heading: "အချက်အလက်များကို အသုံးပြုပုံ", body: "သင့်အထောက်အထားကို စိစစ်ရန်၊ ငွေလွှဲမှုများကို ဆောင်ရွက်ပြီး ပေးပို့ရန်၊ ငွေကြေးခဝါချမှုတားဆီးရေးနှင့် ပိတ်ဆို့အရေးယူမှုဆိုင်ရာ စိစစ်မှုများအပါအဝင် ဥပဒေနှင့် စည်းမျဉ်းဆိုင်ရာ တာဝန်များကို လိုက်နာရန်၊ လိမ်လည်မှုကို ကာကွယ်ရန်၊ ဖောက်သည်အကူအညီပေးရန်နှင့် ဝန်ဆောင်မှုတိုးတက်စေရန် သင့်အချက်အလက်များကို အသုံးပြုပါသည်။ သင့်ကိုယ်ရေးအချက်အလက်များကို အခြားသူများထံ ရောင်းချခြင်း မပြုပါ။" },
      { heading: "အချက်အလက်များ မျှဝေခြင်း", body: "ငွေလွှဲမှု ပြီးမြောက်စေရန်အတွက်သာ ငွေလက်ခံပေးချေမှုမိတ်ဖက်များ၊ ဘဏ်များနှင့် ငွေပေးချေမှုဝန်ဆောင်မှုပေးသူများထံ သင့်အချက်အလက်များကို မျှဝေနိုင်ပါသည်။ ဥပဒေအရ လိုအပ်ပါက စည်းမျဉ်းကြီးကြပ်ရေးအာဏာပိုင်များထံ၊ ထို့အပြင် လုပ်ငန်းဆောင်ရွက်ရာတွင် ကူညီပေးသည့် ဝန်ဆောင်မှုပေးသူများ (ဥပမာ cloud hosting နှင့် အထောက်အထားစိစစ်ရေးဝန်ဆောင်မှုပေးသူများ) ထံတွင်လည်း လျှို့ဝှက်ထိန်းသိမ်းရေးနှင့် ဒေတာကာကွယ်ရေးဆိုင်ရာ သင့်လျော်သော သတ်မှတ်ချက်များအောက်၌ မျှဝေနိုင်ပါသည်။" },
      { heading: "ဒေတာလုံခြုံရေးနှင့် သိမ်းဆည်းထားမှု", body: "အချက်အလက်များ ပေးပို့စဉ်နှင့် သိမ်းဆည်းထားစဉ် ကုဒ်ဝှက်ခြင်း၊ ဝင်ရောက်အသုံးပြုခွင့် ထိန်းချုပ်ခြင်းနှင့် ပုံမှန်လုံခြုံရေးစိစစ်ခြင်းများအပါအဝင် လုပ်ငန်းစံနှုန်းနှင့်ကိုက်ညီသော လုံခြုံရေးအစီအမံများကို အသုံးပြု၍ သင့်အချက်အလက်များကို ကာကွယ်ပါသည်။ သင့်အကောင့် အသုံးပြုနေသည့်ကာလနှင့် မှတ်တမ်းထိန်းသိမ်းခြင်း၊ အစီရင်ခံခြင်းဆိုင်ရာ တာဝန်များအတွက် သက်ဆိုင်ရာဥပဒေအရ လိုအပ်သည့်ကာလအထိ အချက်အလက်များကို သိမ်းဆည်းထားပါသည်။" },
      { heading: "သင့်အခွင့်အရေးများ", body: "ဥပဒေနှင့် စည်းမျဉ်းအရ သိမ်းဆည်းထားရန် လိုအပ်သည့် အချက်အလက်များကို ချန်လှပ်၍ သင့်ကိုယ်ရေးအချက်အလက်များကို ကြည့်ရှုခွင့်၊ ပြင်ဆင်ခွင့် သို့မဟုတ် ဖျက်ပေးရန် တောင်းဆိုနိုင်ပါသည်။ အဆိုပါအခွင့်အရေးများကို အသုံးပြုရန် remittance@relianceandtrustmm.com သို့ ဆက်သွယ်ပါ။" },
      { heading: "ဆက်သွယ်ရန်", body: "ဤမူဝါဒ သို့မဟုတ် သင့်ကိုယ်ရေးအချက်အလက်များကို ကိုင်တွယ်ပုံနှင့်ပတ်သက်၍ မေးမြန်းလိုပါက remittance@relianceandtrustmm.com သို့မဟုတ် မှတ်ပုံတင်ထားသော ရုံးလိပ်စာဖြစ်သည့် အမှတ် B-7၊ တော်ဝင်လမ်း၊ ၄ ရပ်ကွက်၊ ၉ မိုင်၊ မရမ်းကုန်းမြို့နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး၊ မြန်မာနိုင်ငံသို့ ဆက်သွယ်ပါ။" },
    ],
  },
  terms: {
    title: "စည်းကမ်းသတ်မှတ်ချက်များ",
    intro: "ဤစည်းကမ်းသတ်မှတ်ချက်များသည် Reliance and Trust Company Limited က ဆောင်ရွက်သည့် Mingalarpar ငွေလွှဲဝန်ဆောင်မှုနှင့် ဝဘ်ဆိုက်ကို အသုံးပြုခြင်းအပေါ် သက်ဆိုင်ပါသည်။ ဝန်ဆောင်မှုကို အသုံးပြုခြင်းဖြင့် ဤစည်းကမ်းများကို သဘောတူသည်ဟု မှတ်ယူပါသည်။ ဝန်ဆောင်မှုကို စတင်မိတ်ဆက်ရန် ပြင်ဆင်နေဆဲဖြစ်သဖြင့် အချို့အချက်များတွင် ဝန်ဆောင်မှုရရှိလာသည့်အခါ လုပ်ဆောင်မည့်ပုံစံကို ဖော်ပြထားပါသည်။",
    sections: [
      { heading: "အသုံးပြုခွင့် အရည်အချင်း", body: "Mingalarpar ကို အသုံးပြုရန် အသက် ၁၈ နှစ်ပြည့်ပြီးသူ ဖြစ်ရမည်၊ ကျွန်ုပ်တို့ပံ့ပိုးသည့် နိုင်ငံတစ်နိုင်ငံတွင် တရားဝင်နေထိုင်သူဖြစ်ရမည်၊ မှန်ကန်သော သက်သေခံအထောက်အထားကို ပေးအပ်နိုင်ရမည်။ ဝန်ဆောင်မှုကို တရားဝင်ရည်ရွယ်ချက်များအတွက်သာ အသုံးပြုပြီး တရားဝင်ရရှိထားသော ငွေကြေးကိုသာ လွှဲပို့ရပါမည်။" },
      { heading: "အကောင့်စာရင်းသွင်းခြင်းနှင့် အထောက်အထားစိစစ်ခြင်း", body: "စာရင်းသွင်းရာတွင် မှန်ကန်ပြည့်စုံသော အချက်အလက်များကို ပေးအပ်ပြီး ကျွန်ုပ်တို့သတ်မှတ်ထားသော အထောက်အထားစိစစ်မှုကို ပြီးမြောက်အောင် ဆောင်ရွက်ရပါမည်။ အထောက်အထားစိစစ်မှု မပြီးမြောက်နိုင်ပါက၊ သံသယဖြစ်ဖွယ်လုပ်ဆောင်မှု တွေ့ရှိပါက သို့မဟုတ် ဥပဒေအရ လိုအပ်ပါက အကောင့်ဖွင့်ခွင့်ကို ငြင်းပယ်ခြင်း၊ ယာယီရပ်ဆိုင်းခြင်း သို့မဟုတ် ပိတ်သိမ်းခြင်း ပြုလုပ်နိုင်ပါသည်။" },
      { heading: "ငွေလွှဲမှုများနှင့် ဝန်ဆောင်ခများ", body: "ငွေလွှဲမှုတစ်ခု ပြုလုပ်ရာတွင် အတည်မပြုမီ ငွေလဲနှုန်း၊ ငွေလွှဲဝန်ဆောင်ခနှင့် လက်ခံသူရရှိမည့် ငွေပမာဏကို ဖော်ပြပေးပါမည်။ အတည်ပြုပြီးသည့်နောက် ပုံမှန်အားဖြင့် ငွေလွှဲမှုကို ပယ်ဖျက်၍ မရနိုင်ပါ။ ဝန်ဆောင်ခနှင့် ငွေလဲနှုန်းများကို ကျွန်ုပ်တို့ သတ်မှတ်ပြီး ပြောင်းလဲနိုင်ပါသည်။ အတည်ပြုချိန်တွင် ဖော်ပြထားသော ငွေလဲနှုန်းသည် သင့်ငွေလွှဲမှုအတွက် သက်ဆိုင်မည့်နှုန်းဖြစ်ပါသည်။" },
      { heading: "တားမြစ်ထားသော အသုံးပြုမှုများ", body: "ငွေကြေးခဝါချခြင်း၊ အကြမ်းဖက်မှုကို ငွေကြေးထောက်ပံ့ခြင်း၊ ပိတ်ဆို့အရေးယူမှုများကို ရှောင်လွှဲခြင်း သို့မဟုတ် လိမ်လည်ခြင်းအပါအဝင် တရားမဝင်လုပ်ဆောင်မှုများအတွက် Mingalarpar ကို အသုံးမပြုရပါ။ အကျိုးအမြတ်ရယူရန် အခြားသူများကိုယ်စား ငွေလွှဲခြင်း သို့မဟုတ် အခွန်နှင့် အခြားဥပဒေဆိုင်ရာတာဝန်များကို ရှောင်လွှဲရန် ဝန်ဆောင်မှုကို အသုံးမပြုရပါ။ ငွေလွှဲမှုများကို စောင့်ကြည့်စစ်ဆေးပြီး ဥပဒေအရ လိုအပ်ပါက သံသယဖြစ်ဖွယ်လုပ်ဆောင်မှုများကို သက်ဆိုင်ရာထံ တင်ပြပါမည်။" },
      { heading: "တာဝန်ယူမှုဆိုင်ရာ ကန့်သတ်ချက်", body: "Mingalarpar ကို သင့်လျော်သော ကြိုးပမ်းအားထုတ်မှုအပေါ် အခြေခံ၍ ပံ့ပိုးပေးပါသည်။ ဥပဒေက ခွင့်ပြုသည့်အတိုင်းအတာအတွင်း ငွေလွှဲမှုတစ်ခုအတွက် ကျွန်ုပ်တို့၏ တာဝန်ယူမှုသည် ထိုငွေလွှဲပမာဏထက် မကျော်လွန်ပါ။ သွယ်ဝိုက်သော သို့မဟုတ် နောက်ဆက်တွဲဆုံးရှုံးမှုများ၊ လက်ခံသူ၏ဘဏ်၊ ကွန်ရက်ဝန်ဆောင်မှုပေးသူ သို့မဟုတ် ကျွန်ုပ်တို့ထိန်းချုပ်နိုင်ခြင်းမရှိသော ဖြစ်ရပ်များကြောင့် ဖြစ်ပေါ်သည့် ပျက်ကွက်မှုများအတွက် ကျွန်ုပ်တို့ တာဝန်မယူပါ။" },
      { heading: "စည်းကမ်းသတ်မှတ်ချက်များ ပြင်ဆင်ခြင်း", body: "ဤစည်းကမ်းသတ်မှတ်ချက်များကို အခါအားလျော်စွာ ပြင်ဆင်နိုင်ပါသည်။ အရေးကြီးသော ပြောင်းလဲမှုများကို အက်ပ်မှတစ်ဆင့် သို့မဟုတ် အီးမေးလ်ဖြင့် အသိပေးပါမည်။ ပြောင်းလဲချက်များ အသက်ဝင်ပြီးနောက် ဝန်ဆောင်မှုကို ဆက်လက်အသုံးပြုပါက ပြင်ဆင်ထားသော စည်းကမ်းများကို လက်ခံသည်ဟု မှတ်ယူပါမည်။" },
    ],
  },
  compliance: {
    title: "စည်းမျဉ်းလိုက်နာမှုဆိုင်ရာ အချက်အလက်များ",
    intro: "Reliance and Trust Company Limited သည် Mingalarpar ကို စည်းမျဉ်းလိုက်နာမှုဆိုင်ရာ မြင့်မားသောစံနှုန်းများနှင့်အညီ ဆောင်ရွက်ရန် ကတိပြုပါသည်။ အောက်ပါအချက်များတွင် ငွေလွှဲဝန်ဆောင်မှုအတွက် ကျင့်သုံးသည့် လိုက်နာမှုမူဘောင်ကို ဖော်ပြထားပါသည်။",
    sections: [
      { heading: "လုပ်ကိုင်ခွင့်", body: "Reliance and Trust Company Limited သည် ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 ဖြင့် ငွေလွှဲလုပ်ငန်းဆောင်ရွက်ခွင့် ရရှိထားပါသည်။ အဆိုပါခွင့်ပြုချက်နှင့် သက်ဆိုင်သော လိုအပ်ချက်များနှင့်အညီ လုပ်ငန်းဆောင်ရွက်ပါသည်။" },
      { heading: "ဖောက်သည်အထောက်အထားစိစစ်ခြင်း (KYC)", body: "ဖောက်သည်တိုင်းသည် ငွေလွှဲမှုမပြုလုပ်မီ အထောက်အထားစိစစ်မှုကို ပြီးမြောက်အောင် ဆောင်ရွက်ရပါမည်။ ယင်းတွင် အစိုးရထုတ် ဓာတ်ပုံပါသက်သေခံကတ်ကို စိစစ်ခြင်း၊ မျက်နှာဓာတ်ပုံနှင့် တိုက်ဆိုင်စစ်ဆေးခြင်း၊ လိုအပ်သည့်အခါ နေရပ်လိပ်စာနှင့် ငွေကြေးရင်းမြစ်ကို စိစစ်ခြင်းတို့ ပါဝင်ပါသည်။ အန္တရာယ်ပိုများသော ဖောက်သည် သို့မဟုတ် ငွေလွှဲမှုများအတွက် အန္တရာယ်အဆင့်အလိုက် ပိုမိုတင်းကျပ်သော စိစစ်မှုများကို ဆောင်ရွက်ပါသည်။" },
      { heading: "ငွေကြေးခဝါချမှုတားဆီးရေး (AML) နှင့် အကြမ်းဖက်မှုကို ငွေကြေးထောက်ပံ့မှု တားဆီးရေး (CFT)", body: "ငွေကြေးခဝါချမှု၊ အကြမ်းဖက်မှုကို ငွေကြေးထောက်ပံ့မှု၊ လိမ်လည်မှုနှင့် ပိတ်ဆို့အရေးယူမှုရှောင်လွှဲခြင်းတို့ကို ဖော်ပြနိုင်သည့် လက္ခဏာများရှိမရှိ ငွေလွှဲမှုများကို စောင့်ကြည့်စစ်ဆေးပါသည်။ သံသယဖြစ်ဖွယ်လုပ်ဆောင်မှုများကို လိုက်နာမှုအဖွဲ့က စိစစ်ပြီး လိုအပ်ပါက မြန်မာနိုင်ငံရှိ သက်ဆိုင်ရာအာဏာပိုင်များထံ တင်ပြပါသည်။ စည်းမျဉ်းလိုအပ်ချက်များနှင့်အညီ မှတ်တမ်းများကို ထိန်းသိမ်းပါသည်။" },
      { heading: "ပိတ်ဆို့အရေးယူမှုဆိုင်ရာ စိစစ်ခြင်း", body: "ငွေလွှဲမှုမဆောင်ရွက်မီ ဖောက်သည်၊ လက်ခံသူနှင့် သက်ဆိုင်သူများကို သက်ဆိုင်ရာ ပြည်တွင်းနှင့် နိုင်ငံတကာ ပိတ်ဆို့အရေးယူမှုစာရင်းများနှင့် တိုက်ဆိုင်စစ်ဆေးပါသည်။ ပိတ်ဆို့အရေးယူခံထားရသူများ ပါဝင်သည့် ငွေလွှဲမှုများကို တားဆီးပြီး လိုအပ်ပါက သက်ဆိုင်ရာထံ တင်ပြပါသည်။" },
      { heading: "ငွေလွှဲမှုစောင့်ကြည့်ခြင်းနှင့် အစီရင်ခံခြင်း", body: "ကျွန်ုပ်တို့၏ စနစ်များသည် ငွေလွှဲမှုပုံစံများကို စောင့်ကြည့်ပြီး ပုံမှန်မဟုတ်သော လုပ်ဆောင်မှုများကို စိစစ်ရန် အလံပြသတ်မှတ်ပါသည်။ မြန်မာနိုင်ငံ၏ စည်းမျဉ်းလိုအပ်ချက်များနှင့်အညီ သက်ဆိုင်ရာအာဏာပိုင်များထံ အစီရင်ခံစာများ တင်သွင်းပါသည်။" },
      { heading: "လိုက်နာမှုအဖွဲ့ကို ဆက်သွယ်ရန်", body: "စည်းမျဉ်းလိုက်နာမှုနှင့် သက်ဆိုင်သော မေးမြန်းချက်များအတွက် အီးမေးလ်ခေါင်းစဉ်တွင် 'Compliance' ဟု ဖော်ပြ၍ remittance@relianceandtrustmm.com သို့ ဆက်သွယ်ပါ။" },
    ],
  },
  cookies: {
    title: "ကွတ်ကီး မူဝါဒ",
    intro: "ဤကွတ်ကီးမူဝါဒတွင် Reliance and Trust Company Limited က ဤဝဘ်ဆိုက်တွင် ကွတ်ကီးများနှင့် အလားတူနည်းပညာများကို အသုံးပြုပုံကို ရှင်းလင်းဖော်ပြထားပါသည်။ ကွတ်ကီးများသည် သင့်စက်ပစ္စည်းပေါ်တွင် သိမ်းဆည်းထားသော ဖိုင်ငယ်များဖြစ်ပြီး ဝဘ်ဆိုက်လုပ်ဆောင်နိုင်ရန်နှင့် အသုံးပြုပုံကို နားလည်နိုင်ရန် ကူညီပေးပါသည်။",
    sections: [
      { heading: "ကျွန်ုပ်တို့အသုံးပြုသည့် ကွတ်ကီးအမျိုးအစားများ", body: "မရှိမဖြစ်လိုအပ်သော ကွတ်ကီးများသည် ဝဘ်ဆိုက်လုပ်ဆောင်နိုင်ရန် လိုအပ်ပြီး (ဥပမာ၊ သင်ရွေးချယ်ထားသော ဘာသာစကားကို မှတ်သားထားခြင်း) ဖြစ်ပါသည်။ Analytics ကွတ်ကီးများသည် ဝဘ်ဆိုက်အသုံးပြုပုံကို နားလည်ပြီး တိုးတက်စေရန် ကူညီပါသည်။ ကြော်ငြာကွတ်ကီးများကို အသုံးမပြုပါ။" },
      { heading: "ကွတ်ကီးများကို စီမံခန့်ခွဲခြင်း", body: "သင့်ဘရောက်ဇာဆက်တင်များမှတစ်ဆင့် ကွတ်ကီးများကို ထိန်းချုပ်ခြင်း သို့မဟုတ် ဖျက်ခြင်း ပြုလုပ်နိုင်ပါသည်။ မရှိမဖြစ်လိုအပ်သော ကွတ်ကီးများကို ပိတ်ထားပါက ဝဘ်ဆိုက်၏ လုပ်ဆောင်ချက်အချို့ ထိခိုက်နိုင်ပါသည်။ မရှိမဖြစ်မဟုတ်သော ကွတ်ကီးများကို အသုံးမပြုမီ သင့်သဘောတူညီချက်ကို တောင်းခံပါမည်။" },
      { heading: "ပြင်ပဝန်ဆောင်မှုများ", body: "ကိုယ်ပိုင်ကွတ်ကီးများ သတ်မှတ်နိုင်သည့် ယုံကြည်ရသော ပြင်ပဝန်ဆောင်မှုများ (ဥပမာ၊ analytics ဝန်ဆောင်မှုပေးသူများ) ကို အသုံးပြုနိုင်ပါသည်။ အဆိုပါဝန်ဆောင်မှုပေးသူများသည် ၎င်းတို့၏ ကိုယ်ပိုင်ကိုယ်ရေးအချက်အလက်မူဝါဒများအရ ဒေတာကို ကိုင်တွယ်ဆောင်ရွက်ပြီး ထိုမူဝါဒများကိုလည်း ဖတ်ရှုရန် အကြံပြုပါသည်။" },
      { heading: "ဆက်သွယ်ရန်", body: "ဤကွတ်ကီးမူဝါဒနှင့်ပတ်သက်၍ မေးမြန်းလိုပါက remittance@relianceandtrustmm.com သို့ ဆက်သွယ်ပါ။" },
    ],
  },
  regulatory: {
    title: "စည်းမျဉ်းဆိုင်ရာ အချက်အလက်များ",
    intro: "ဤစာမျက်နှာတွင် Reliance and Trust Company Limited နှင့် Mingalarpar ငွေလွှဲဝန်ဆောင်မှုဆိုင်ရာ အဓိကစည်းမျဉ်းအချက်အလက်များကို ဖော်ပြထားပါသည်။",
    sections: [
      { heading: "ကုမ္ပဏီအချက်အလက်များ", body: "Reliance and Trust Company Limited ကို မြန်မာနိုင်ငံတွင် ဖွဲ့စည်းတည်ထောင်ထားပါသည်။ မှတ်ပုံတင်ရုံးလိပ်စာမှာ အမှတ် B-7၊ တော်ဝင်လမ်း၊ ၄ ရပ်ကွက်၊ ၉ မိုင်၊ မရမ်းကုန်းမြို့နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး၊ မြန်မာနိုင်ငံ ဖြစ်ပါသည်။ ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 ဖြင့် ငွေလွှဲလုပ်ငန်းဆောင်ရွက်ခွင့် ရရှိထားပါသည်။" },
      { heading: "စည်းမျဉ်းဆိုင်ရာ အခြေအနေ", body: "Reliance and Trust Company Limited သည် ဗဟိုဘဏ် (CBM) ၏ ရုံးစာအမှတ် FE 1/343 ဖြင့် ငွေလွှဲလုပ်ငန်းဆောင်ရွက်ခွင့် ရရှိထားပါသည်။ ကုမ္ပဏီသည် အဆိုပါခွင့်ပြုချက်နှင့် သက်ဆိုင်သော လိုအပ်ချက်များနှင့်အညီ လုပ်ငန်းဆောင်ရွက်ပါသည်။" },
      { heading: "ကြီးကြပ်မှု", body: "ကျွန်ုပ်တို့၏ ငွေလွှဲလုပ်ငန်းများသည် သက်ဆိုင်ရာ မြန်မာနိုင်ငံဘဏ္ဍာရေးဆိုင်ရာ စည်းမျဉ်းကြီးကြပ်ရေးအာဏာပိုင်၏ ကြီးကြပ်မှုအောက်တွင် ရှိပြီး ပုံမှန်စစ်ဆေးမှုများနှင့် အစီရင်ခံတင်ပြမှုတာဝန်များ ပါဝင်နိုင်ပါသည်။" },
      { heading: "ဖောက်သည်ကာကွယ်ရေး", body: "ဖောက်သည်များကို မျှတစွာဆက်ဆံခြင်း၊ ဈေးနှုန်းများကို ပွင့်လင်းစွာဖော်ပြခြင်း၊ ငွေကြေးများကို လုံခြုံစွာကိုင်တွယ်ခြင်းနှင့် တိုင်ကြားမှုများကို လွယ်ကူစွာ တင်ပြနိုင်စေခြင်းတို့ကို ကျွန်ုပ်တို့ အလေးထားပါသည်။ တိုင်ကြားမှုဆိုင်ရာ လုပ်ထုံးလုပ်နည်းအသေးစိတ်ကို တိုင်ကြားမှုစာမျက်နှာတွင် ဖတ်ရှုနိုင်ပါသည်။" },
      { heading: "အရေးကြီးသော အသိပေးချက်", body: "ဤစာမျက်နှာပါ အချက်အလက်များသည် အထွေထွေသိရှိရန်အတွက်သာ ဖြစ်ပြီး ဥပဒေ သို့မဟုတ် စည်းမျဉ်းဆိုင်ရာ အကြံဉာဏ် မဟုတ်ပါ။ သက်ဆိုင်ရာအာဏာပိုင်များ၏ အတည်ပြုချက်ရရှိပြီးသည့်အခါ စည်းမျဉ်းဆိုင်ရာ အသေးစိတ်အချက်အလက်များကို အပြည့်အစုံ ထုတ်ပြန်ပါမည်။" },
    ],
  },
  fraud: {
    title: "လိမ်လည်မှု သတိပြုရန်",
    intro: "Reliance and Trust တွင် ဖောက်သည်များကို လိမ်လည်မှုမှ ကာကွယ်ခြင်းကို ဦးစားပေးပါသည်။ ဤစာမျက်နှာတွင် တွေ့ရများသော လိမ်လည်မှုပုံစံများနှင့် Mingalarpar အသုံးပြုရာတွင် မိမိကိုယ်ကို ကာကွယ်နိုင်မည့် နည်းလမ်းများကို ဖော်ပြထားပါသည်။",
    sections: [
      { heading: "တွေ့ရများသော လိမ်လည်မှုပုံစံများ", body: "အချစ်ရေးလိမ်လည်မှု (အွန်လိုင်းတွင် တွေ့ဆုံသူက ငွေပို့ရန် တောင်းဆိုခြင်း)၊ ရင်းနှီးမြှုပ်နှံမှုလိမ်လည်မှု (ငွေပို့ပါက အမြတ်များစွာရမည်ဟု ကတိပေးခြင်း)၊ အယောင်ဆောင်လိမ်လည်မှု (Mingalarpar သို့မဟုတ် ဘဏ်ဝန်ထမ်းဟု ဟန်ဆောင်ခြင်း) နှင့် မိသားစုအရေးပေါ်အခြေအနေ အယောင်ဆောင်လိမ်လည်မှု (ဆွေမျိုးတစ်ဦး အခက်အခဲဖြစ်နေပြီး ငွေအမြန်လိုသည်ဟု ဖုန်းဆက်ပြောခြင်း) တို့ကို သတိပြုပါ။ ငွေအမြန်ပို့ရန် ဖိအားပေးသည့် တောင်းဆိုချက်များကို သံသယဖြင့် စိစစ်ပါ။" },
      { heading: "မိမိကိုယ်ကို ကာကွယ်နည်း", body: "သင့်စကားဝှက်၊ တစ်ကြိမ်သုံးကုဒ် (OTP) သို့မဟုတ် ကတ်အချက်အလက်အပြည့်အစုံကို မည်သူ့ကိုမျှ မမျှဝေပါနှင့်။ Mingalarpar ဝန်ထမ်းများကလည်း ထိုအချက်အလက်များကို မတောင်းခံပါ။ ပုံမှန်မဟုတ်သော တောင်းဆိုမှုများရှိပါက သိထားပြီးသား ဖုန်းနံပါတ်ဖြင့် မိသားစုဝင်ကို တိုက်ရိုက်ဆက်သွယ်၍ အတည်ပြုပါ။ မယုံနိုင်လောက်အောင် ကောင်းမွန်သည့် ကမ်းလှမ်းချက်များကို သတိထားပါ။ သိကျွမ်းပြီး ယုံကြည်ရသူများထံသို့သာ ငွေလွှဲပါ။" },
      { heading: "လိမ်လည်မှုဟု သံသယရှိပါက", body: "သံသယဖြစ်ဖွယ်သူနှင့် ဆက်သွယ်မှုကို ရပ်တန့်ပြီး နောက်ထပ်ငွေ မပို့ပါနှင့်။ အီးမေးလ်ခေါင်းစဉ်တွင် 'Fraud Report' ဟု ဖော်ပြ၍ remittance@relianceandtrustmm.com သို့ ချက်ချင်းတင်ပြပါ။ ငွေလွှဲပြီးဖြစ်ပါကလည်း အမြန်ဆုံး ဆက်သွယ်ပါ။ ငွေထုတ်ပေးပြီးခြင်းမရှိသေးပါက ငွေလွှဲမှုကို တားဆီးနိုင်သည့် အခြေအနေ ရှိနိုင်ပါသည်။" },
      { heading: "သင့်ကို ကာကွယ်ပေးရန် ကျွန်ုပ်တို့ဆောင်ရွက်ပုံ", body: "လိမ်လည်မှုလက္ခဏာများကို သိရှိနိုင်ရန် ငွေလွှဲမှုများကို စောင့်ကြည့်စစ်ဆေးခြင်း၊ ဖောက်သည်တိုင်းအတွက် အထောက်အထားစိစစ်ခြင်းနှင့် သင့်ဒေတာကို ကာကွယ်ရန် ကုဒ်ဝှက်ခြင်းတို့ကို ဆောင်ရွက်ပါသည်။ တွေ့ရများသော လိမ်လည်မှုပုံစံများအကြောင်းကိုလည်း ဖောက်သည်များအား အသိပညာပေးပါသည်။ သို့သော် မည်သည့်စနစ်မျှ အပြည့်အဝ အမှားကင်းခြင်းမရှိသဖြင့် သင့်ကိုယ်တိုင် သတိထားဆောင်ရွက်ခြင်းသည် အရေးအကြီးဆုံးဖြစ်ပါသည်။" },
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
  const { language } = useSiteLanguage();
  const isMyanmar = language === "my";
  const dialogRef = useRef<HTMLDialogElement>(null);
  const document = isMyanmar ? legalDocumentsMy[documentKey] : legalDocuments[documentKey];

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
          <p className="legal-dialog-date">{isMyanmar ? "နောက်ဆုံးပြင်ဆင်သည့်ရက်စွဲ: ၂၀၂၆ ခုနှစ်၊ နိုဝင်ဘာလ ၅ ရက်" : "Last updated: 5 November 2026"}</p>
        </div>
        <button type="button" className="legal-dialog-close" aria-label={isMyanmar ? "စာရွက်စာတမ်းကို ပိတ်ရန်" : "Close document"} onClick={() => dialogRef.current?.close()}><X aria-hidden="true" className="size-5" /></button>
      </header>
      <div className="legal-dialog-body">
        <p className="legal-dialog-intro">{document.intro}</p>
        {document.sections.map((section) => <section key={section.heading}><h3>{section.heading}</h3><p>{section.body}</p></section>)}
      </div>
    </dialog>
  </>;
}
