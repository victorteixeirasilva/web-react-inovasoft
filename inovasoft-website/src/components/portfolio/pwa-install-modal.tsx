"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Share2, Smartphone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useState } from "react";

type Platform = "android" | "ios";

type Props = {
  open: boolean;
  onClose: () => void;
  demoUrl: string;
  projectName: string;
};

/** Coloque GIFs animados em public/images para reforçar o guia visual. */
const ANDROID_GIF = "/images/pwa-girareturns-install-android.gif";
const IOS_GIF = "/images/pwa-girareturns-install-ios.gif";

function StepList({ platform }: { platform: Platform }) {
  const t = useTranslations("PwaInstall");
  const keys = ["1", "2", "3", "4", "5"] as const;

  return (
    <motion.ol
      className="mt-4 space-y-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {keys.map((k) => (
        <motion.li
          key={k}
          variants={{
            hidden: { opacity: 0, x: -12 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
          }}
          className="flex gap-3 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm leading-relaxed text-slate-200"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-200">
            {k}
          </span>
          <span>{t(`steps.${platform}.${k}`)}</span>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function PlatformGif({ src, label }: { src: string; label: string }) {
  const [ok, setOk] = useState(false);
  const t = useTranslations("PwaInstall");

  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-cyan-300/25 bg-slate-900/60">
      <p className="border-b border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-wide text-cyan-200/90">
        {label}
      </p>
      <div className="relative flex min-h-[180px] items-center justify-center bg-slate-950/50 p-2 sm:min-h-[220px]">
        {!ok ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <Smartphone className="text-cyan-300/40" size={36} />
            <p className="max-w-sm text-xs text-slate-500">{t("gifPlaceholder")}</p>
          </div>
        ) : null}
        {/* eslint-disable-next-line @next/next/no-img-element -- GIF animado */}
        <img
          src={src}
          alt=""
          className={`relative z-[1] max-h-[280px] w-auto max-w-full rounded-lg object-contain shadow-lg ${ok ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setOk(true)}
          onError={() => setOk(false)}
        />
      </div>
    </div>
  );
}

export function PwaInstallModal({ open, onClose, demoUrl, projectName }: Props) {
  const t = useTranslations("PwaInstall");
  const titleId = useId();
  const [platform, setPlatform] = useState<Platform>("android");

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onKeyDown]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={t("close")}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[101] max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/15 bg-slate-950 shadow-2xl shadow-cyan-500/10"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
          >
            <div className="sticky top-0 z-[2] flex items-start justify-between gap-3 border-b border-white/10 bg-slate-950/95 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{t("badge")}</p>
                <h2 id={titleId} className="mt-1 text-lg font-semibold text-slate-100">
                  {t("title", { project: projectName })}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/15 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
                aria-label={t("close")}
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 px-5 py-4">
              <p className="text-sm leading-relaxed text-slate-300">{t("intro")}</p>

              <div className="flex gap-2 rounded-2xl border border-white/10 bg-slate-900/50 p-1">
                <button
                  type="button"
                  onClick={() => setPlatform("android")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    platform === "android"
                      ? "bg-cyan-400/20 text-cyan-100 ring-1 ring-cyan-300/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {t("tabAndroid")}
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform("ios")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    platform === "ios"
                      ? "bg-cyan-400/20 text-cyan-100 ring-1 ring-cyan-300/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Share2 size={16} className="opacity-80" />
                  {t("tabIos")}
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-slate-500">{t(`tip.${platform}`)}</p>
                  <StepList platform={platform} />
                  {/* <PlatformGif
                    src={platform === "android" ? ANDROID_GIF : IOS_GIF}
                    label={t(platform === "android" ? "gifLabelAndroid" : "gifLabelIos")}
                  /> */}
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
                >
                  {t("close")}
                </button>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {t("openDemo")} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
