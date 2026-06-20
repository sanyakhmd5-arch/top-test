"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { type Language, getTranslation, type TranslationKey } from "@/data/translations";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationKey;
  dir: "rtl" | "ltr";
}

const defaultTranslation = getTranslation("ar");

const I18nContext = createContext<I18nContextType>({
  lang: "ar",
  setLang: () => {},
  t: defaultTranslation,
  dir: "rtl",
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved preference and apply - this is fine as it only runs once on mount
    // and is necessary to sync client state with localStorage
    const saved = localStorage.getItem("top-test-lang") as Language | null;
    if (saved && (saved === "ar" || saved === "en")) {
      setLangState(saved); // eslint-disable-line react-hooks/set-state-in-effect
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("top-test-lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = getTranslation(lang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  if (!mounted) {
    return (
      <I18nContext.Provider value={{ lang, setLang, t, dir }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
