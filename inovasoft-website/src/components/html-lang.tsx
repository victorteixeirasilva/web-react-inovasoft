"use client";

import { useEffect } from "react";

const localeToHtmlLang: Record<string, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = localeToHtmlLang[locale] ?? "pt-BR";
  }, [locale]);

  return null;
}
