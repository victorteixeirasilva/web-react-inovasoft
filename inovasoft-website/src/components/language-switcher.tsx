"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <label className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
      <span className="hidden sm:inline">{t("label")}</span>
      <select
        value={locale}
        onChange={(event) => {
          router.replace(pathname, { locale: event.target.value as Locale });
        }}
        className="rounded-lg border border-white/15 bg-slate-900/90 px-2 py-1.5 text-xs font-medium text-slate-100 outline-none transition focus:border-cyan-400/60 sm:text-sm"
        aria-label={t("label")}
      >
        <option value="pt">{t("pt")}</option>
        <option value="en">{t("en")}</option>
        <option value="es">{t("es")}</option>
      </select>
    </label>
  );
}
