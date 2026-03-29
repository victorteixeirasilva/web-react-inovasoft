"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import {
  portfolioCategories,
  portfolioProjectMeta,
  type PortfolioCategoryKey,
} from "@/data/portfolio";

const panelTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35 },
};

export function PortfolioTabs() {
  const t = useTranslations("portfolio");
  const tCommon = useTranslations("Common");
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryKey>("wordpress");

  const current = useMemo(
    () => portfolioCategories.find((category) => category.key === activeCategory),
    [activeCategory],
  );

  if (!current) return null;

  const categoryLabel = t(`categories.${current.key}.label`);
  const categoryDescription = t(`categories.${current.key}.description`);

  return (
    <div className="space-y-8">
      <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 portfolio-tabs-scroll">
        {portfolioCategories.map((category) => {
          const isActive = category.key === activeCategory;

          return (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-cyan-300 bg-cyan-300/15 text-cyan-200"
                  : "border-white/15 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
              }`}
            >
              {t(`categories.${category.key}.label`)}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={current.key}
          initial={panelTransition.initial}
          animate={panelTransition.animate}
          exit={panelTransition.exit}
          transition={panelTransition.transition}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h2 className="text-2xl font-semibold text-slate-100">{categoryLabel}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{categoryDescription}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {current.projectIds.map((projectId) => {
              const meta = portfolioProjectMeta[projectId];
              if (!meta) return null;

              const name = t(`projects.${projectId}.name`);
              const summary = t(`projects.${projectId}.summary`);

              return (
                <article
                  key={projectId}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={meta.image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{summary}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {meta.stack.map((item) => (
                        <span
                          key={`${projectId}-${item}`}
                          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-wide text-cyan-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {meta.projectUrl ? (
                        <a
                          href={meta.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                          {tCommon("viewProject")} <ExternalLink size={14} />
                        </a>
                      ) : null}
                      {meta.repositoryUrl ? (
                        <a
                          href={meta.repositoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                        >
                          {tCommon("repo")} <GitBranch size={14} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
