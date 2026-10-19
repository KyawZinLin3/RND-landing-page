/** Typed content settings for the corporate site. Replace these values with CMS data later. */
export type CorridorStatus = "active" | "planned" | "coming-soon" | "temporarily-unavailable";

export type Corridor = {
  from: string;
  to: string;
  sendCurrency: string;
  receiveCurrency: string;
  status: CorridorStatus;
};

export type NewsPost = {
  category: "Company News" | "Announcements" | "Service Updates" | "Mingalarpar News" | "Partner Announcements" | "Remittance Guides" | "Promotions";
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: string;
  image?: { src: string; alt: string };
};

export type Partner = { name: string; coBrandName?: string; logo?: string; published: boolean };
export type ServiceMethod = { name: string; description?: string; country: string; published: boolean };
export type CareerPosting = { title: string; location: string; slug: string; publishedAt: string; published: boolean };
export type SeoMetadata = { title: string; description: string; socialImage?: string };
export type WebsitePage = { slug: string; title: string; body: string; seo?: SeoMetadata; published: boolean };

export const websiteSettings = {
  appLaunched: false,
  paymentMethodsPublished: false,
  newsPublished: false,
  newsPosts: [] as NewsPost[],
  pages: [] as WebsitePage[],
  partners: [] as Partner[],
  paymentMethods: [] as ServiceMethod[],
  payoutMethods: [] as ServiceMethod[],
  careers: [] as CareerPosting[],
  seo: {
    title: "Reliance and Trust | Mingalarpar Remittance",
    description: "Discover Mingalarpar, the planned remittance service from Reliance and Trust Company Limited, focused on connecting Thailand and Myanmar.",
  } satisfies SeoMetadata,
  corridors: [
    { from: "Thailand", to: "Myanmar", sendCurrency: "THB", receiveCurrency: "MMK", status: "planned" },
    { from: "Laos", to: "Myanmar", sendCurrency: "LAK", receiveCurrency: "MMK", status: "planned" },
  ] satisfies Corridor[],
};

export const faqs = [
  { question: "What is Mingalarpar?", answer: "Mingalarpar is the remittance service from Reliance and Trust Company Limited, being designed to help people send money home through a simple digital experience." },
  { question: "Who operates Mingalarpar?", answer: "Mingalarpar is a service from Reliance and Trust Company Limited, a company that has obtained a remittance licence in Myanmar." },
  { question: "Which countries are supported?", answer: "The first planned corridor is Thailand to Myanmar. Service availability and launch details will be shared when confirmed." },
  { question: "How do I register?", answer: "Registration information will be published when the Mingalarpar app is ready to launch." },
  { question: "What documents are required?", answer: "Identity verification will be required. The accepted documents and detailed steps will be shared before service launch." },
  { question: "How can I send money from Thailand?", answer: "The Thailand to Myanmar corridor is planned. Payment instructions will be provided once the service and payment methods are confirmed." },
  { question: "How will recipients receive their money?", answer: "Supported receiving methods are still being finalized and will be announced when confirmed." },
  { question: "What are the transfer fees?", answer: "Fees and exchange rates have not been published. Any applicable rate, fee and recipient amount will be shown for review before a transfer is confirmed." },
  { question: "How long does a transfer take?", answer: "Transfer timing depends on the confirmed service and payout arrangements. Timing information will be published before launch." },
  { question: "How do I contact customer support?", answer: "Customer support contact details will be published here when they are confirmed." },
  { question: "What should I do if a transfer is delayed?", answer: "If you have a transfer question, use the support channel provided in the app or on this website once the service launches." },
  { question: "How can I report suspicious activity?", answer: "Please use the official customer support or reporting channel once it is published. We will provide clear reporting guidance before launch." },
];

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Mingalarpar", href: "/mingalarpar" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Help", href: "/help" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function corridorStatusLabel(status: CorridorStatus) {
  return {
    active: "Active",
    planned: "Planned",
    "coming-soon": "Coming soon",
    "temporarily-unavailable": "Temporarily unavailable",
  }[status];
}
