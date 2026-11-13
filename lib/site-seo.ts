const environmentName = (process.env.RAILWAY_ENVIRONMENT_NAME ?? process.env.VERCEL_ENV ?? "").toLowerCase();

export const siteUrl = (process.env.SITE_URL ?? (
  environmentName === "production"
    ? "https://www.relianceandtrustmm.com"
    : environmentName === "uat"
      ? "https://uat.relianceandtrustmm.com"
      : undefined
))?.replace(/\/$/, "");

export const indexingEnabled = environmentName !== "uat"
  && process.env.SEO_INDEXING_ENABLED !== "false"
  && (process.env.SEO_INDEXING_ENABLED === "true" || environmentName === "production");
