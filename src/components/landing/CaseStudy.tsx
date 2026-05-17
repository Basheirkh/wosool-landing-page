"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CaseStudy() {
  const t = useTranslations("CaseStudy");

  const metrics = [
    { label: t("m1_label"), before: t("m1_before"), after: t("m1_after"), improvement: t("m1_improvement") },
    { label: t("m2_label"), before: t("m2_before"), after: t("m2_after"), improvement: t("m2_improvement") },
    { label: t("m3_label"), before: t("m3_before"), after: t("m3_after"), improvement: t("m3_improvement") },
    { label: t("m4_label"), before: t("m4_before"), after: t("m4_after"), improvement: t("m4_improvement") },
  ];

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-start"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="text-xs text-brand-primary font-medium tracking-wider uppercase">
              {t("eyebrow")}
            </span>
          </div>
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15]">
            {t("heading_line1")}
            <br />
            <span className="text-secondary">{t("heading_line2")}</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative overflow-hidden rounded-[24px] border border-subtle bg-surface p-6"
            >
              <div className="text-xs text-muted uppercase tracking-[0.2em] mb-5">
                {m.label}
              </div>

              {/* Before */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-muted">{t("before")}</span>
                <span className="text-sm text-secondary line-through decoration-red-400/40">
                  {m.before}
                </span>
              </div>

              {/* After */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] text-brand-primary font-medium">
                  {t("after")}
                </span>
                <span className="text-[22px] md:text-[26px] font-bold text-primary leading-none">
                  {m.after}
                </span>
              </div>

              {/* Improvement badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/25 bg-brand-primary/8 px-2.5 py-1">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-primary"
                >
                  <polyline points="17 6 23 6 23 12" />
                  <path d="M23 6 13 16l-4-4L1 20" />
                </svg>
                <span className="text-[11px] text-brand-primary font-medium">
                  {m.improvement}
                </span>
              </div>

              {/* Accent line */}
              <div
                className="absolute inset-x-6 -bottom-px h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,217,126,0.5), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-[28px] p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,217,126,0.10), rgba(0,217,126,0.02))",
            border: "1px solid rgba(0,217,126,0.22)",
          }}
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              {/* Quote icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-brand-primary mb-5 opacity-70"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2.016-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.76-2.016-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>

              <p className="text-[18px] md:text-[22px] leading-[1.7] text-primary font-medium max-w-2xl">
                {t("quote")}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-primary/15 border border-brand-primary/25 flex items-center justify-center text-brand-primary font-bold">
                  {t("quote_author").charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    {t("quote_author")}
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    {t("quote_role")} — {t("quote_location")}
                  </div>
                </div>
              </div>
            </div>

            {/* Big number accent */}
            <div className="lg:border-s lg:border-brand-primary/20 lg:ps-8">
              <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2">
                {t("metric_label")}
              </div>
              <div className="text-[64px] md:text-[84px] font-bold leading-none text-brand-primary tracking-tight">
                {t("metric_value")}
              </div>
              <div className="text-sm text-secondary mt-2">
                {t("metric_sub")}
              </div>
            </div>
          </div>

          {/* Decorative blur */}
          <div
            className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(0,217,126,0.3), transparent 60%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
