"use client";

import { motion } from "framer-motion";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label with line — Botpress style */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-ghost-strong" />
          <span className="text-sm text-secondary">كيف يعمل وصول</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-20 max-w-5xl mr-0 ml-auto">
          {[
            "يفهم السياق",
            "يقرأ بيانات العمل",
            "ينفذ داخل الحدود",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-subtle bg-ghost px-5 py-4 text-sm text-faint"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="relative">
          <LandingArtFrame
            theme="developer"
            word="الموظفون"
            eyebrow="Execution Loop"
            accent="#60A5FA"
            secondaryAccent="#00D97E"
            className="min-h-[360px] md:min-h-[500px] flex items-center justify-center"
            muted
          >
          <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 p-8">
            {/* Right panel — Agent workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[300px] rounded-xl p-5 shadow-2xl shadow-black/40"
              style={{ background: "var(--art-panel)", border: "1px solid var(--art-border)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-brand-primary text-xs">✦</span>
                <span className="text-sm font-medium text-brand-primary">طبقات الذاكرة</span>
              </div>
              <div className="space-y-2">
                <div className="rounded-lg p-3" style={{ background: "var(--art-chip-bg)", border: "1px solid var(--art-border)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px]" style={{ color: "var(--art-text-muted)" }}>4 مستويات</span>
                    <span className="text-[10px]" style={{ color: "var(--art-text-muted)" }}>☰</span>
                  </div>
                  <div className="rounded p-2 text-[11px] leading-relaxed" style={{ background: "rgba(0,0,0,0.22)", color: "var(--art-text-secondary)" }}>
                    <span style={{ color: "var(--art-text-muted)" }}>## الذاكرة</span>
                    <br />
                    جلسة حالية، مهام معلقة، قرارات سابقة، وذاكرة متجر كاملة.
                  </div>
                </div>
                {["ذاكرة الجلسة", "سجل القرارات", "ذاكرة المتجر"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg px-3 py-2"
                    style={{ background: "var(--art-panel-soft)", border: "1px solid var(--art-border)" }}
                  >
                    <span className="text-[10px] text-brand-primary">→</span>
                    <span className="text-[12px]" style={{ color: "var(--art-text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Left panel — Actions/Results */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[280px] rounded-xl p-5 shadow-2xl shadow-black/40"
              style={{ background: "var(--art-panel)", border: "1px solid var(--art-border)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px]" style={{ color: "var(--art-text-muted)" }}>سياسة القرار</span>
                <span className="mr-auto text-[10px]" style={{ color: "var(--art-text-muted)" }}>☰</span>
              </div>
              <div className="space-y-2">
                {[
                  { icon: "✓", text: "تلقائي كامل", color: "bg-green-500/10 text-green-400" },
                  { icon: "↺", text: "ينفذ ثم يخبرك", color: "bg-blue-500/10 text-blue-400" },
                  { icon: "!", text: "ينتظر موافقتك", color: "bg-amber-500/10 text-amber-400" },
                ].map((action) => (
                  <div
                    key={action.text}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${action.color}`}
                    style={{ borderColor: "var(--art-border)" }}
                  >
                    <span className="text-sm">{action.icon}</span>
                    <span className="text-[12px]">{action.text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "var(--art-panel-soft)", border: "1px solid var(--art-border)" }}>
                  <span className="text-[10px] text-red-300">⛔</span>
                  <span className="text-[11px]" style={{ color: "var(--art-text-muted)" }}>قرارات لا يلمسها دون إذن صريح</span>
                </div>
              </div>
            </motion.div>
          </div>
          </LandingArtFrame>
        </div>
      </div>
    </section>
  );
}
