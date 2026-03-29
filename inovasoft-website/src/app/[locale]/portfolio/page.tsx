import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PortfolioTabs } from "@/components/portfolio/portfolio-tabs";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PortfolioPage" });

  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PortfolioPage");
  const tCommon = await getTranslations("Common");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <Link
              href="/"
              className="inline-flex min-w-0 items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              <ArrowLeft size={16} />
              <span className="truncate">{tCommon("backHome")}</span>
            </Link>
            <span className="hidden sm:block">
              <LanguageSwitcher />
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="sm:hidden">
              <LanguageSwitcher />
            </span>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511963695485&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300 sm:px-5 sm:text-sm"
            >
              {tCommon("requestProposal")}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="mb-10 space-y-5">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {t("badge")}
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">{t("title")}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300">{t("lead")}</p>
        </section>

        <PortfolioTabs />

        {/* <section className="mt-14 rounded-3xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-5 sm:p-6">
          <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-cyan-100">
            <PlusCircle size={18} />
            {t("howTitle")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{t("howBody")}</p>
        </section> */}
      </main>
    </div>
  );
}
