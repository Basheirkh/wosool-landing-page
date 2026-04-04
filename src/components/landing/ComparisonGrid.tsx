"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "يرد على عملاءك؟",
    whatsapp: "ردود جاهزة",
    chatgpt: "لا",
    wosool: "ذكي",
    wosoolCheck: true,
  },
  {
    label: "يعرف منتجاتك وأسعارك؟",
    whatsapp: "لا",
    chatgpt: "لا",
    wosool: "نعم",
    wosoolCheck: true,
  },
  {
    label: "ينفّذ أوامر (سعر/شحن)؟",
    whatsapp: "لا",
    chatgpt: "لا",
    wosool: "نعم",
    wosoolCheck: true,
  },
  {
    label: "يتكلم عربي خليجي؟",
    whatsapp: "محدود",
    chatgpt: "عامّ",
    wosool: "طبيعي",
    wosoolCheck: true,
  },
  {
    label: "يشتغل وأنت نايم؟",
    whatsapp: "لا",
    chatgpt: "لا",
    wosool: "24/7",
    wosoolCheck: true,
  },
  {
    label: "وقت التشغيل؟",
    whatsapp: "فوري",
    chatgpt: "—",
    wosool: "دقيقتين",
    wosoolCheck: false,
  },
];

const summaries = [
  "واتساب بزنس = ردود جاهزة",
  "ChatGPT = يكتب ويفكر — ما يسوي شيء في متجرك",
  "وصول = يدير متجرك فعلياً",
];

function CellIcon({ value }: { value: string }) {
  if (value === "لا") return <X size={16} className="text-red-400/60" strokeWidth={2} />;
  if (value === "—") return <Minus size={16} className="text-secondary/40" strokeWidth={2} />;
  return null;
}

export default function ComparisonGrid() {
  return (
    <section id="comparisons" className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-right"
        >
          <h2 className="text-[28px] font-bold leading-[1.15] md:text-[40px] lg:text-[52px]">
            وش الفرق؟
            <br />
            <span className="text-secondary">بصراحة.</span>
          </h2>
        </motion.div>

        {/* Mobile: stacked cards per row */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-2xl border border-subtle bg-surface overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-subtle">
                <span className="text-[15px] font-semibold text-primary">{row.label}</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-subtle" dir="ltr">
                {/* WhatsApp */}
                <div className="p-4 text-center" dir="rtl">
                  <div className="text-[11px] text-muted mb-2">واتساب بزنس</div>
                  <div className="flex items-center justify-center gap-1 text-sm text-secondary">
                    <CellIcon value={row.whatsapp} />
                    <span>{row.whatsapp === "لا" ? "" : row.whatsapp}</span>
                  </div>
                </div>
                {/* ChatGPT */}
                <div className="p-4 text-center" dir="rtl">
                  <div className="text-[11px] text-muted mb-2">ChatGPT</div>
                  <div className="flex items-center justify-center gap-1 text-sm text-secondary">
                    <CellIcon value={row.chatgpt} />
                    <span>{row.chatgpt === "لا" ? "" : row.chatgpt}</span>
                  </div>
                </div>
                {/* Wosool */}
                <div className="p-4 text-center rounded-bl-xl" dir="rtl" style={{ background: "linear-gradient(135deg, rgba(0,217,126,0.10), rgba(0,217,126,0.04))" }}>
                  <div className="text-[11px] text-brand-primary font-medium mb-2">وصول</div>
                  <div className="flex items-center justify-center gap-1 text-sm text-brand-primary font-semibold">
                    {row.wosoolCheck && <Check size={14} strokeWidth={2.5} />}
                    <span>{row.wosool}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: proper table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-subtle bg-surface">
          <div className="grid grid-cols-[240px_repeat(3,minmax(0,1fr))] border-b border-subtle bg-ghost">
            <div className="p-5 text-sm text-muted">السؤال</div>
            {["واتساب بزنس", "ChatGPT", "وصول"].map((col, i) => (
              <div
                key={col}
                className={`p-5 text-sm font-medium ${
                  i === 2
                    ? "text-brand-primary bg-brand-primary/[0.09]"
                    : "text-faint"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {i === 2 && <span className="h-2.5 w-2.5 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(0,217,126,0.45)]" />}
                  {col}
                </span>
              </div>
            ))}
          </div>

          {rows.map((row, rowIndex) => (
            <div
              key={row.label}
              className="grid grid-cols-[240px_repeat(3,minmax(0,1fr))] border-b border-subtle last:border-b-0"
            >
              <div className="p-5 text-sm text-primary">{row.label}</div>
              {/* WhatsApp */}
              <div className={`p-5 text-sm ${rowIndex % 2 !== 0 ? "bg-ghost" : ""}`}>
                <span className="inline-flex items-center gap-2 text-secondary">
                  <CellIcon value={row.whatsapp} />
                  {row.whatsapp !== "لا" ? row.whatsapp : ""}
                </span>
              </div>
              {/* ChatGPT */}
              <div className={`p-5 text-sm ${rowIndex % 2 !== 0 ? "bg-ghost" : ""}`}>
                <span className="inline-flex items-center gap-2 text-secondary">
                  <CellIcon value={row.chatgpt} />
                  {row.chatgpt !== "لا" && row.chatgpt !== "—" ? row.chatgpt : ""}
                </span>
              </div>
              {/* Wosool */}
              <div
                className={`p-5 text-sm font-medium text-primary border-r border-brand-primary/16 ${rowIndex % 2 !== 0 ? "bg-ghost" : ""}`}
                style={{ background: "linear-gradient(135deg, rgba(0,217,126,0.10), rgba(0,217,126,0.03))" }}
              >
                <span className="inline-flex items-center gap-2">
                  {row.wosoolCheck && <Check size={14} className="text-brand-primary" strokeWidth={2.5} />}
                  {row.wosool}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {summaries.map((note, index) => (
            <motion.div
              key={note}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`rounded-[24px] p-5 border ${
                index === summaries.length - 1
                  ? "border-brand-primary/28 bg-[linear-gradient(135deg,rgba(0,217,126,0.12),rgba(0,217,126,0.04))] text-primary shadow-[0_16px_36px_rgba(0,217,126,0.06)]"
                  : "border-subtle bg-surface text-faint"
              }`}
            >
              <p className="text-sm leading-relaxed">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
