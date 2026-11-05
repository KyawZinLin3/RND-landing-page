# Reliance & Trust CMS

Strapi 5 headless CMS for content shared across the R&T landing pages. Run it as a separate Railway service from the Next.js website.

## Content model

- **Landing Page**: name, unique slug, domain, and description. Use one record per site/brand.
- **Article**: news or post, title, slug, excerpt, block content, cover image, author, SEO fields, and required landing page relation.
- **Vacancy**: title, slug, location, department, employment type, summary, description, requirements, apply URL, closing date, and required landing page relation.

Articles and vacancies support drafts and publishing. Public API access is limited to GET list/detail routes; writes remain behind authenticated Strapi admin/API access. Filter content by the related landing page when a frontend fetches it. Each frontend keeps its own custom design.

## Local development

1. Copy `.env.example` to `.env` and set local PostgreSQL connection details and unique secrets.
2. From this directory run `npm ci` and `npm run develop`.
3. Create the first Strapi administrator in the admin setup page.

## Railway

Deploy this directory (`/cms`) as the root of one Strapi service in both Railway `production` and `uat` environments. Keep a separate PostgreSQL service and a persistent `/app/public/uploads` volume in each environment. Set the Railway database URL reference, unique secrets, `PUBLIC_URL`, and `STRAPI_ADMIN_BACKEND_URL` separately in each environment. The built-in upload provider stores media under `public/uploads`; the Railway volume keeps uploaded files across deployments.

After deployment, create a separate administrator in each environment. Create the same Landing Page, Article, and Vacancy records through the Content Manager as needed; production and UAT content and uploaded media remain separate.
