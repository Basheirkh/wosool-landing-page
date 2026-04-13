"use client";

import { motion } from "framer-motion";

const kpis = [
  { value: "24/7", label: "وقت تشغيل الوكيل" },
  { value: "<3 ث", label: "متوسط زمن الرد" },
  { value: "100٪", label: "عربي من الأساس" },
  { value: "99.9٪", label: "توفّر البنية التحتية" },
];

const trust = [
  {
    label: "شريك سلة",
    sub: "تكامل مباشر",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Business API",
    sub: "عبر شريك Meta",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      </svg>
    ),
  },
  {
    label: "SDAIA AI Ethics",
    sub: "المبادئ السعودية",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "PDPL متوافق",
    sub: "حماية البيانات السعودي",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function KpiTrustStrip() {
  return (
    <section className="relative px-5 py-16 md:px-6 md:py-20 bg-surface-inset border-y border-subtle">
      <div className="max-w-[1400px] mx-auto">
        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative rounded-2xl border border-subtle bg-surface p-6 md:p-7"
            >
              <div className="text-[34px] md:text-[44px] font-bold leading-none tracking-tight text-primary">
                {kpi.value}
              </div>
              <div className="mt-3 text-sm text-secondary leading-6">
                {kpi.label}
              </div>
              <div
                className="absolute inset-x-6 -bottom-px h-px opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,217,126,0.55), transparent)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Divider label */}
        <div className="mt-14 flex items-center gap-4">
          <div className="flex-1 h-px bg-subtle" />
          <span className="text-xs uppercase tracking-[0.28em] text-muted">
            موثوق ومطابق للمعايير
          </span>
          <div className="flex-1 h-px bg-subtle" />
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {trust.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-subtle bg-surface px-5 py-4 transition-all hover:border-brand-primary/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                {t.icon}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-primary truncate">
                  {t.label}
                </div>
                <div className="text-xs text-muted mt-0.5 truncate">{t.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
