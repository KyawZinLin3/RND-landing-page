# Codex Task: Develop Reliance and Trust Corporate Website Landing Page

## 1. Project Overview

We are developing the official corporate website for **Reliance and Trust Company Limited (R&T)**, a licensed remittance company in Myanmar.

Our customer-facing remittance application is called **Mingalarpar**.

Our first remittance corridor is **Thailand → Myanmar**, supporting inward remittances to Myanmar only.

The application may be co-branded with international partners, for example **Mingalarpar OH! RiCH**. Future partners may have different co-branded names.

We are also planning future expansion to other countries, with Laos as our next targeted corridor.

The website will serve three main purposes:

1. Present Reliance and Trust as a professional, trustworthy remittance company.
2. Introduce Mingalarpar and explain our remittance services to customers.
3. Provide corporate information, announcements, news, careers and customer support.

## 2. Important Instructions Before Development

**This is an existing project, not a new project.**

Before making modifications:

- Inspect the project structure, framework, routing and existing dependencies.
- Review the current landing page and its existing sections.
- Identify reusable layouts, components and styling.
- Preserve our existing brand colors, typography, design tokens and overall visual identity.
- Do not rebuild the website from scratch.
- Do not replace existing good-quality components unnecessarily.
- Do not install duplicate UI libraries or create conflicting styling systems.
- Reuse existing assets, icons and illustrations whenever appropriate.
- Identify which requested sections already exist and enhance them instead of creating duplicates.

Our UI technology preferences are:

- Tailwind CSS for styling and responsive layouts.
- shadcn/ui for accessible, reusable components.
- DaisyUI for compatible styling and utility components.
- Lucide icons where available.
- Use the project's existing framework and conventions.

Use shadcn/ui and DaisyUI selectively. Avoid mixing both component systems in the same feature when it causes inconsistent styling.

## 3. Design Direction

Create a modern, clean, premium financial-services website.

Desired characteristics:

- Professional and trustworthy.
- Friendly and approachable for Myanmar customers.
- Strong visual hierarchy.
- Spacious, uncluttered layouts.
- Subtle animations and hover interactions.
- Mobile-first and fully responsive.
- Accessible color contrast.
- Consistent spacing, typography and buttons.
- Modern fintech-inspired visual presentation.

**Important:** Preserve the existing color theme. Do not introduce an entirely new palette.

Avoid excessive gradients, unnecessary animations, generic placeholder content and overly complicated UI.

## 4. Main Navigation

Build or update the website header using the following structure:

- Home
- Mingalarpar
- How It Works
- Thailand → Myanmar
- Help
- News & Announcements
- Careers
- About Us
- Contact Us

Primary CTA:

**Download App**

Before the mobile application is officially released, use **Coming Soon** or **Explore Mingalarpar** instead of linking to nonexistent app-store pages.

Include a language selector prepared for:

- English
- Myanmar
- Thai

If a translation system does not exist, prepare a scalable internationalization structure without inventing translations or breaking existing functionality.

On mobile, provide an accessible navigation drawer.

## 5. Homepage Sections — Required Order

Build or enhance the sections in the following order.

### Section 01: Hero

Headline:

**Send Money Home with Mingalarpar**

Supporting description:

"A simple and trusted way to send money from Thailand to Myanmar."

Include:

- Prominent headline.
- Short supporting text.
- Primary CTA: Explore Mingalarpar.
- Secondary CTA: How It Works.
- Existing mobile app mockup or suitable remittance illustration.
- Visual reference to Thailand → Myanmar.

Use a modern two-column layout on desktop and a stacked layout on mobile.

Do not claim that the application is already available until launch has been confirmed.

### Section 02: Trust & Credibility

Section title:

**Built on Trust**

Display four trust-related elements:

1. Licensed Remittance Company
2. Thailand–Myanmar Remittance Focus
3. Identity Verification
4. Customer Support

Use elegant icons or simple content blocks.

Reliance and Trust Company Limited has obtained a remittance licence in Myanmar. However, do not invent the regulator name, licence number or precise regulatory wording. Keep those fields configurable until approved information is available.

### Section 03: Introducing Mingalarpar

Section title:

**Meet Mingalarpar**

Content:

"Mingalarpar is the remittance service from Reliance and Trust Company Limited, designed to help people send money home through a simple and convenient digital experience."

Include:

- Brief product explanation.
- Mobile-first experience.
- Thailand–Myanmar corridor.
- Co-branding capabilities with international partners.
- Link to the Mingalarpar product page.

Do not hard-code OH! RiCH as the only partner. The architecture should support multiple future partners.

### Section 04: How It Works

Section title:

**Sending Money Home Made Simple**

Present three steps:

**Step 1 — Register & Verify**

"Create your Mingalarpar account and complete the required identity verification."

**Step 2 — Create Your Transfer**

"Enter your recipient details, review the transfer information and complete payment using an available method."

**Step 3 — Money Reaches Myanmar**

"Your recipient receives the transfer through a supported payout method."

Display the steps in a three-column card layout with a clear visual progression.

Add a subtle connecting line or step indicator.

Include a CTA to learn more.

Specific payment and payout mechanisms must remain configurable because our partner agreements are not finalized.

### Section 05: Supported Corridor

Section title:

**Connecting Thailand and Myanmar**

Description:

"Our first remittance corridor focuses on helping people in Thailand send money to their families and loved ones in Myanmar."

Display:

- Sending Country: Thailand
- Receiving Country: Myanmar
- Sending Currency: THB
- Receiving Currency: MMK

Use a visually engaging corridor card or directional graphic.

Corridor statuses should be configurable:

- Active
- Planned
- Coming Soon
- Temporarily Unavailable

Do not display a corridor as Active without explicit confirmation that the service has launched.

### Section 06: Fees & Exchange Rates

Section title:

**Know Before You Send**

Description:

"Review the applicable exchange rate, transfer fee and amount your recipient will receive before confirming your transfer."

Prepare an elegant exchange-rate/transfer-calculator UI design.

Potential fields:

- Sending amount
- Sending currency
- Receiving currency
- Exchange rate
- Transfer fee
- Recipient amount

**Important:**

Do not invent live exchange rates or fees.

If a real exchange-rate API is not available, do not show fabricated financial quotations or a working calculator with misleading values.

Instead, build a reusable component that can be connected to a real API later, and show an appropriate unavailable or informational state.

### Section 07: Payment & Payout Methods

Section title:

**Convenient Ways to Send and Receive**

Create two visual areas:

**Pay in Thailand**

**Receive in Myanmar**

Our specific payment and payout partners and methods are not yet confirmed.

Do not advertise PromptPay, banking partners, mobile wallets or cash pickup as available until they have been approved.

Make this section conditional and configurable, so it can be hidden until real methods have been confirmed.

OTC or cash pickup is also not finalized.

### Section 08: Why Mingalarpar

Section title:

**Why Choose Mingalarpar?**

Create four feature cards:

**Operated by a Licensed Company**

"Provided by Reliance and Trust Company Limited."

**Simple Experience**

"Designed to make sending money home easier to understand."

**Security-Focused Process**

"Supported by identity verification and transaction compliance controls."

**Built for Myanmar Communities**

"Focused on the needs of Myanmar customers and their families."

Use professional icons and consistent card styling.

Avoid unsupported claims such as guaranteed instant transfers, lowest fees, zero risk or 100% security.

### Section 09: Security & Compliance

Section title:

**Your Trust Matters**

Description:

"Reliance and Trust applies identity verification, transaction monitoring and regulatory compliance measures to support secure and responsible remittance services."

Include three information items:

- Customer Identity Verification
- Transaction Monitoring
- Regulatory Compliance

Add a link to a future Compliance or Customer Protection page.

Our company uses an AML system internally. However, do not describe the AML Engine architecture, internal admin portal, vendor system or operational implementation.

Only communicate appropriate customer-facing security and compliance information.

### Section 10: Mingalarpar Mobile App

Section title:

**Mingalarpar in Your Pocket**

Supporting text:

"Discover a convenient way to manage your remittance journey."

Show existing app mockups or approved screenshots if available.

Potential features:

- Account Registration
- Transfer Creation
- Transfer Tracking
- Transaction History

Add download buttons only when official app-store URLs exist.

Before launch, show:

**Mingalarpar App — Coming Soon**

### Section 11: Future Expansion

Section title:

**Connecting More Communities**

Description:

"Thailand to Myanmar is our first step. Reliance and Trust plans to expand remittance services to additional international corridors."

Present corridor cards:

**Thailand → Myanmar**

Status derived from actual service launch state.

**Laos → Myanmar**

Status: Planned

Use scalable country/corridor data rather than hard-coded components.

Clearly distinguish currently available services from future business plans.

### Section 12: Latest News & Announcements

Section title:

**Latest from Reliance and Trust**

Create a reusable news-card grid capable of displaying CMS-managed content.

Content categories:

- Company News
- Announcements
- Service Updates
- Mingalarpar News
- Partner Announcements
- Remittance Guides
- Promotions

Each card should support:

- Featured image
- Category
- Title
- Short excerpt
- Publication date
- Slug
- Read More link

Do not invent actual company announcements.

If no published CMS content exists, display a clean empty state or hide the homepage news block.

Include a View All News CTA when appropriate.

### Section 13: Frequently Asked Questions

Section title:

**Frequently Asked Questions**

Use an accessible accordion interface.

Prepare editable FAQ entries for questions such as:

1. What is Mingalarpar?
2. Who operates Mingalarpar?
3. Which countries are supported?
4. How do I register?
5. What documents are required?
6. How can I send money from Thailand?
7. How will recipients receive their money?
8. What are the transfer fees?
9. How long does a transfer take?
10. How do I contact customer support?
11. What should I do if a transfer is delayed?
12. How can I report suspicious activity?

Only publish answers based on confirmed business information.

Make FAQ content manageable through the future CMS.

### Section 14: Careers

Section title:

**Build the Future of Remittance With Us**

Description:

"Join Reliance and Trust Company Limited and help build financial services that connect people and communities."

CTA:

**Explore Careers**

Create a simple homepage preview linking to the full Careers page.

Don't invent current vacancies.

### Section 15: Final Call to Action

Headline:

**Ready to Discover Mingalarpar?**

Supporting description:

"Explore the next step in connecting Thailand and Myanmar through convenient remittance services."

CTA:

**Explore Mingalarpar**

Once the app is officially launched, this can become:

**Download Mingalarpar**

Use a visually distinctive section that remains consistent with the existing color palette.

### Section 16: Footer

Create a professional, multi-column footer.

**Company**

- About Us
- Careers
- News
- Contact Us

**Mingalarpar**

- How It Works
- Thailand → Myanmar
- App Information
- Future Corridors

**Support**

- Help Center
- FAQ
- Contact Support
- Fraud Awareness
- Complaints

**Legal**

- Privacy Policy
- Terms & Conditions
- Compliance
- Cookie Policy
- Regulatory Information

Include:

"© 2026 Reliance and Trust Company Limited. All rights reserved."

Use approved information for the business address, contact number, email and regulatory details.

## 6. CMS and Content Architecture

The website will eventually support CMS-managed content.

Prepare a clean separation between presentation components and content data.

Required future content entities include:

- Pages
- News / Blog Posts
- Announcements
- FAQs
- Careers / Job Postings
- Corridors
- Partners
- Payment Methods
- Payout Methods
- SEO Metadata
- Website Settings

Use existing backend APIs if already available.

If no CMS exists, implement a small, typed content configuration layer appropriate to the current framework.

Do not create an entire CMS backend, authentication system or admin dashboard as part of this task.

Prepare components to make CMS integration straightforward later.

## 7. Reusable Component Architecture

Keep components modular.

Suggested component responsibilities:

- Header / Navigation
- HeroSection
- TrustSection
- AboutMingalarparSection
- HowItWorksSection
- CorridorSection
- ExchangeRateSection
- PaymentMethodsSection
- BenefitsSection
- SecuritySection
- MobileAppSection
- ExpansionSection
- NewsSection
- FAQSection
- CareersSection
- CTASection
- Footer

Use the project's existing folder conventions rather than forcing a new structure.

Make components responsive, accessible, and easy to maintain.

Avoid creating huge monolithic files.

## 8. SEO and Accessibility

Implement:

- Semantic HTML.
- Proper heading hierarchy with one H1.
- Descriptive page titles and metadata.
- Open Graph metadata where supported.
- Keyboard-accessible menus and accordions.
- Accessible buttons and links.
- Appropriate image alt text.
- Optimized image loading.
- Lazy loading for below-the-fold images.
- Mobile responsiveness.
- Visible focus states.
- Good contrast.
- Reduced-motion support.

Do not add unverified structured-data claims about licence details, services or company information.

## 9. Important Business Restrictions

The website must not:

- Advertise outward remittances from Myanmar.
- Advertise unapproved corridors as operational.
- Advertise unconfirmed payment or payout methods.
- Advertise OTC services before confirmation.
- Claim that Mingalarpar is a stored-value wallet.
- Expose internal AML Engine details.
- Expose Admin Portal details.
- Invent real-time exchange rates.
- Invent transaction fees or processing times.
- Invent actual customer testimonials.
- Invent bank, payment or business partners.
- Claim the mobile app has launched unless confirmed.
- Use unsupported financial-security or marketing claims.

The website should promote our confirmed business capabilities while remaining flexible for future growth.

## 10. Implementation Process

Follow this implementation sequence:

**Phase 1 — Inspect**

Analyze the existing project, current homepage, components, dependencies, brand theme and assets.

**Phase 2 — Plan**

Identify which sections need to be added, updated, reordered or removed.

Keep the existing page design where appropriate.

**Phase 3 — Implement**

Update the homepage, navigation and reusable sections using the established technologies and coding standards.

**Phase 4 — Content Integration**

Add the approved content from this specification, with configurable business fields for information that is not yet confirmed.

**Phase 5 — Polish**

Improve responsiveness, accessibility, spacing, interactions and consistency.

**Phase 6 — Verify**

Run the available lint, type-check, build and relevant tests.

Fix any errors caused by the changes.

## 11. Final Deliverables

When finished:

1. Summarize the changes made.
2. List the new and updated components.
3. Explain any configuration or CMS content models introduced.
4. Identify business information that still requires confirmation.
5. Confirm which validation commands passed.
6. Report any unresolved issues.

**Start by inspecting the existing codebase. Preserve the current design and work incrementally to transform the scratch landing page into a production-quality corporate remittance website.**