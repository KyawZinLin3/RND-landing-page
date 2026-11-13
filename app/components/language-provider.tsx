"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SiteLanguage = "en" | "my";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("rt-site-language");
    if (saved === "en" || saved === "my") setLanguage(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = language;
    window.localStorage.setItem("rt-site-language", language);
  }, [hydrated, language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useSiteLanguage must be used inside LanguageProvider");
  return context;
}

export function LocalizedText({ en, my }: { en: string; my: string }) {
  const { language } = useSiteLanguage();
  return <>{language === "my" ? my : en}</>;
}

