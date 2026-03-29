"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cloud, Code2, Gauge, Menu, ShieldCheck, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";

type MobileNavLink =
  | { kind: "hash"; label: string; href: string }
  | { kind: "route"; label: string; href: "/portfolio" };

const techStackBase = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "Docker",
  "CI/CD",
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 120 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest}${suffix ?? ""}`;
    });
  }, [rounded, suffix]);

  return (
    <p ref={ref} className="text-2xl font-semibold text-cyan-300">
      0{suffix ?? ""}
    </p>
  );
}

export default function HomePageContent() {
  const t = useTranslations("Home");
  const tNav = useTranslations("Nav");
  const tAria = useTranslations("Aria");
  const tCommon = useTranslations("Common");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const techStack = [...techStackBase, t("techStack.seo")];

  const solutions = [
    { title: t("solutions.a.title"), description: t("solutions.a.description") },
    { title: t("solutions.b.title"), description: t("solutions.b.description") },
    { title: t("solutions.c.title"), description: t("solutions.c.description") },
  ];

  const statsConfig = [
    { label: t("stats.delivered"), value: 90, suffix: "+" },
    { label: t("stats.support"), value: 24, suffix: "/7" },
    { label: t("stats.kickoff"), value: 5, suffix: t("stats.suffixDays") },
  ];

  const differentials = [
    t("differentials.1"),
    t("differentials.2"),
    t("differentials.3"),
    t("differentials.4"),
  ];

  const homePortfolioItems = [
    { title: t("homePortfolio.pk"), image: "/images/portfolio-1.png", link: "https://pkhortifruti.inovasoft.tech/" },
    { title: t("homePortfolio.blog"), image: "/images/portfolio-2.png", link: "https://blogalmabela.inovasoft.tech/" },
    { title: t("homePortfolio.traffic"), image: "/images/portfolio-3.png", link: "https://trafegosupremo.inovasoft.tech/" },
    { title: t("homePortfolio.zeus"), image: "/images/portfolio-4.png", link: "https://zeusadvogados.inovasoft.tech/" },
  ];

  const techCards = [
    { icon: Code2, title: t("techCards.frontend.title"), text: t("techCards.frontend.text") },
    { icon: Cloud, title: t("techCards.cloud.title"), text: t("techCards.cloud.text") },
    { icon: ShieldCheck, title: t("techCards.security.title"), text: t("techCards.security.text") },
    { icon: Gauge, title: t("techCards.performance.title"), text: t("techCards.performance.text") },
  ];

  const mobileSections: MobileNavLink[] = [
    { kind: "hash", label: tNav("solutions"), href: "#solucoes" },
    { kind: "hash", label: tNav("inevolving"), href: "#inevolving" },
    { kind: "hash", label: tNav("portfolio"), href: "#portfolio" },
    { kind: "route", label: tNav("portfolioFull"), href: "/portfolio" },
    { kind: "hash", label: tNav("contact"), href: "#contato" },
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:gap-4 sm:px-6">
          <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Image src="/images/logo-icon.png" alt="InovaSoft" width={36} height={36} />
            <span className="truncate text-base font-semibold tracking-wide sm:text-lg">InovaSoft</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex xl:gap-7">
            <a className="transition hover:text-cyan-300" href="#solucoes">
              {tNav("solutions")}
            </a>
            <a className="transition hover:text-cyan-300" href="#inevolving">
              {tNav("inevolving")}
            </a>
            <a className="transition hover:text-cyan-300" href="#portfolio">
              {tNav("portfolio")}
            </a>
            <Link className="transition hover:text-cyan-300" href="/portfolio">
              {tNav("portfolioFull")}
            </Link>
            <a className="transition hover:text-cyan-300" href="#contato">
              {tNav("contact")}
            </a>
            <LanguageSwitcher />
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="lg:hidden">
              <LanguageSwitcher />
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511963695485&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex lg:px-5 lg:text-sm"
            >
              {tNav("whatsapp")}
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200 lg:hidden"
              aria-label={isMobileMenuOpen ? tAria("closeMenu") : tAria("openMenu")}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
            <nav className="grid gap-2">
              {mobileSections.map((item) =>
                item.kind === "route" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    {item.label}
                  </a>
                ),
              )}
              <a
                href="https://api.whatsapp.com/send/?phone=%2B5511963695485&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex justify-center rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {tNav("whatsapp")}
              </a>
            </nav>
          </div>
        ) : null}
      </header>
      <main className="relative">
        <section className="relative overflow-hidden">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
          <motion.div
            className="absolute right-[12%] top-[28%] h-40 w-40 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-3xl"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
            <motion.div className="space-y-8" variants={container} initial="hidden" animate="visible">
              <motion.span
                variants={fadeItem}
                className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200"
              >
                {t("badge")}
              </motion.span>
              <motion.h1 variants={fadeItem} className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {t("heroTitle")}
              </motion.h1>
              <motion.p variants={fadeItem} className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t("heroLead")}
              </motion.p>
              <motion.div variants={fadeItem} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              </motion.div>
              <motion.div variants={fadeItem} className="grid gap-4 pt-6 sm:grid-cols-3">
                {statsConfig.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                  >
                    <CountUp value={item.value} suffix={item.suffix} />
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-2xl shadow-cyan-500/10 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/logo-full.png"
                alt="InovaSoft logo"
                width={512}
                height={319}
                className="mx-auto mb-6 h-auto w-56 sm:w-72"
                priority
              />
              <div className="space-y-4 rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">{t("methodTitle")}</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li>{t("methodSteps.1")}</li>
                  <li>{t("methodSteps.2")}</li>
                  <li>{t("methodSteps.3")}</li>
                  <li>{t("methodSteps.4")}</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="solucoes" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">{t("solutionsKicker")}</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{t("solutionsTitle")}</h2>
            </div>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {solutions.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeItem}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-900"
              >
                <h3 className="mb-3 text-xl font-medium text-slate-100 group-hover:text-cyan-200">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-slate-900/60 py-5">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <span key={`${tech}-${index}`} className="marquee-item">
                <Sparkles size={14} /> {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="inevolving" className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">{t("inevolvingKicker")}</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">{t("inevolvingTitle")}</h2>
              <p className="text-slate-300">{t("inevolvingBody")}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contato"
                  className="inline-flex justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {t("inevolvingCtaDemo")}
                </a>
                <a
                  href="https://inevolving.inovasoft.tech/cadastro/"
                  target="_blank"
                  className="inline-flex justify-center rounded-full border border-cyan-300/60 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
                >
                  {t("inevolvingCtaAccess")}
                </a>
              </div>
            </div>
            <motion.div
              className="rounded-3xl border border-cyan-300/20 bg-slate-950 p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-cyan-200">{t("whyTitle")}</p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li>{t("whyItems.1")}</li>
                <li>{t("whyItems.2")}</li>
                <li>{t("whyItems.3")}</li>
                <li>{t("whyItems.4")}</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">{t("portfolioKicker")}</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{t("portfolioTitle")}</h2>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            {homePortfolioItems.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeItem}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-full border border-cyan-300/50 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10 sm:w-auto"
                  >
                    {tCommon("viewProject")}
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">{t("diffKicker")}</p>
              <h2 className="mt-2 text-3xl font-semibold">{t("diffTitle")}</h2>
            </div>
            <ul className="space-y-3 text-slate-200">
              {differentials.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techCards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.55 }}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <card.icon className="mb-3 text-cyan-300" size={20} />
                <h3 className="mb-2 text-base font-semibold">{card.title}</h3>
                <p className="text-sm text-slate-300">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-3">
          <div>
            <Image src="/images/logo-icon.png" alt="InovaSoft" width={44} height={44} />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{t("footerTagline")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{t("footerContact")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>(11) 96369-5485</li>
              <li>adm@inovasoft.tech</li>
              <li>{t("country")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{t("footerCtaTitle")}</h3>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511963695485&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {t("footerCta")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
