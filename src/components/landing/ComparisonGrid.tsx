"use client";

import { motion } from "framer-motion";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

const columns = ["WhatsApp Business", "ChatGPT", "Botpress", "وصول"];

const rows = [
  {
    label: "لمن صُمم",
    values: ["ردود ثابتة بسيطة", "مساعد عام", "للمطورين", "للأعمال أونلاين"],
  },
  {
    label: "يعرف بيانات المتجر",
    values: ["لا", "لا", "بعد بناء مخصص", "نعم"],
  },
  {
    label: "واتساب أساسي",
    values: ["نعم", "لا", "يحتاج setup", "نعم"],
  },
  {
    label: "يتخذ قراراً داخل حدود",
    values: ["لا", "لا", "بعد إعداد كثيف", "نعم"],
  },
  {
    label: "العربية الخليجية",
    values: ["محدودة", "عامة", "ليست الجوهر", "في القلب"],
  },
  {
    label: "وقت البدء",
    values: ["فوري لكن محدود", "فوري لكن منفصل", "أسابيع", "دقائق"],
  },
];

const notes = [
  "WhatsApp Business: ردود ثابتة.",
  "ChatGPT: تفكير وكتابة.",
  "Botpress: بناء مخصص.",
  "وصول: تشغيل فعلي.",
];

export default function ComparisonGrid() {
  return (
    <section id="comparisons" className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <LandingArtFrame
            theme="market"
            word="أذكى"
            eyebrow="المقارنة الصريحة"
            accent="#F6C453"
            secondaryAccent="#00D97E"
            className="min-h-[250px]"
            hideWord
          >
            <div className="absolute inset-0 z-20">
              <motion.div
                animate={{ opacity: [0.28, 0.48, 0.28], scale: [1, 1.04, 1] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[8%] top-[18%] hidden h-28 w-28 rounded-full md:block"
                style={{ background: "radial-gradient(circle, rgba(var(--brand-primary-rgb),0.24), transparent 70%)" }}
              />
              <motion.div
                animate={{ opacity: [0.18, 0.34, 0.18], y: [0, 8, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[24%] top-[16%] hidden h-20 w-20 rounded-full border md:block"
                style={{ borderColor: "rgba(246,196,83,0.32)", background: "rgba(246,196,83,0.08)" }}
              />
              <motion.div
                animate={{ opacity: [0.16, 0.3, 0.16], x: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[10%] top-[28%] hidden h-24 w-24 rounded-full border md:block"
                style={{ borderColor: "rgba(56,189,248,0.26)", background: "rgba(56,189,248,0.05)" }}
              />
              <motion.div
                animate={{ opacity: [0.1, 0.24, 0.1], scale: [1, 1.08, 1] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[28%] bottom-[26%] hidden h-16 w-16 rounded-full md:block"
                style={{ background: "radial-gradient(circle, rgba(246,196,83,0.24), transparent 72%)" }}
              />
            </div>
            <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end text-right">
              <h2 className="max-w-5xl mr-0 ml-auto text-[28px] font-bold leading-[1.15] md:text-[40px] lg:text-[52px]" style={{ color: "var(--art-text-primary)" }}>
                مقارنة سريعة.
                <br />
                <span style={{ color: "var(--art-text-secondary)" }}>بلا مبالغة.</span>
              </h2>
            </div>
          </LandingArtFrame>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-subtle bg-surface group/comparison">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[220px_repeat(4,minmax(0,1fr))] border-b border-subtle bg-ghost">
              <div className="p-5 text-sm text-muted">المعيار</div>
              {columns.map((column, index) => (
                <div
                  key={column}
                  tabIndex={0}
                  className={`p-5 text-sm font-medium transition-all duration-300 outline-none ${
                    index === columns.length - 1
                      ? "text-brand-primary bg-brand-primary/[0.09] group-hover/comparison:bg-brand-primary/[0.11] focus:bg-brand-primary/[0.14] shadow-[inset_0_1px_0_rgba(0,217,126,0.10)]"
                      : "text-faint"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {index === columns.length - 1 && <span className="h-2.5 w-2.5 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(0,217,126,0.45)]" />}
                    {column}
                  </span>
                </div>
              ))}
            </div>

            {rows.map((row, rowIndex) => (
              <div
                key={row.label}
                className="grid grid-cols-[220px_repeat(4,minmax(0,1fr))] border-b border-subtle last:border-b-0"
              >
                <div className="p-5 text-sm text-primary">{row.label}</div>
                {row.values.map((value, valueIndex) => (
                  <div
                    key={`${row.label}-${value}`}
                    tabIndex={valueIndex === row.values.length - 1 ? 0 : -1}
                    className={`p-5 text-sm leading-relaxed transition-all duration-300 outline-none ${
                      valueIndex === row.values.length - 1
                        ? "text-primary bg-[linear-gradient(135deg,rgba(0,217,126,0.10),rgba(0,217,126,0.03))] group-hover/comparison:bg-[linear-gradient(135deg,rgba(0,217,126,0.13),rgba(0,217,126,0.05))] focus:bg-[linear-gradient(135deg,rgba(0,217,126,0.16),rgba(0,217,126,0.06))] border-r border-brand-primary/16 font-medium"
                        : "text-secondary"
                    } ${rowIndex % 2 === 0 ? "bg-transparent" : "bg-ghost"}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {valueIndex === row.values.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />}
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {notes.map((note, index) => (
            <motion.div
              key={note}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`rounded-[24px] p-5 border ${
                index === notes.length - 1
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
