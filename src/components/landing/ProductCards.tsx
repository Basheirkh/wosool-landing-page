"use client";

import { motion } from "framer-motion";
import { Brain, Check, CheckCircle2, Smartphone } from "lucide-react";

export default function ProductCards() {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 — Morning brief */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-surface-accent-green border border-subtle min-h-[420px] md:min-h-[500px] relative"
          >
            <div className="p-6 pt-6">
              <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2]">
                تصحى الصبح — كل شيء تم.
              </h3>
              <p className="text-sm text-secondary mt-4 max-w-md leading-relaxed">
                وصول يشتغل الليل كله ويرسلك الملخص.
              </p>
            </div>

            <div className="px-6 pb-6 flex items-end justify-center">
              <div className="bg-surface-accent-green-inner rounded-xl border border-subtle p-4 w-full max-w-[380px]">
                <div className="flex items-center gap-2 text-xs text-brand-primary mb-3 font-medium">
                  <BarChart3Icon /> صباح الخير — ملخص الليلة
                </div>
                <div className="space-y-2">
                  {[
                    { text: "12 عميل ردّينا عليهم", ok: true },
                    { text: "3 طلبات أكّدناها", ok: true },
                    { text: "حالة وحدة تحتاج قرارك", ok: false },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="rounded-lg px-3 py-2.5 text-sm leading-relaxed flex items-center gap-2"
                      style={{
                        background: item.ok ? "var(--ghost-bg)" : "rgba(245,158,11,0.08)",
                        border: item.ok ? "1px solid var(--border-subtle)" : "1px solid rgba(245,158,11,0.16)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.ok ? (
                        <CheckCircle2 size={14} className="text-brand-primary flex-shrink-0" strokeWidth={2} />
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      )}
                      <span className="text-faint">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — How wosool works (simple visual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-surface-elevated border border-subtle min-h-[420px] md:min-h-[500px] relative"
          >
            <div className="p-6 pt-6">
              <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2]">
                ترسل رسالة. وصول يسويها.
              </h3>
              <p className="text-sm text-secondary mt-4 max-w-md leading-relaxed">
                كل شيء في خط واحد واضح.
              </p>
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-xl border border-subtle overflow-hidden" style={{ background: "var(--ghost-bg)" }}>
                {/* Simple 3-step flow */}
                <div className="grid grid-cols-3 text-center">
                  {[
                    { icon: Smartphone, label: "ترسل رسالة", sub: "واتساب", accent: "#25D366" },
                    { icon: Brain, label: "وصول يفهم", sub: "يقرأ ويقرر", accent: "#A78BFA" },
                    { icon: CheckCircle2, label: "ينفّذ", sub: "في متجرك", accent: "#00D97E" },
                  ].map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={step.label} className="relative p-5 md:p-6">
                        {i < 2 && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-primary/40 text-lg hidden md:block">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                          </div>
                        )}
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl mx-auto mb-3"
                          style={{ background: `${step.accent}14`, border: `1px solid ${step.accent}24` }}
                        >
                          <StepIcon size={20} style={{ color: step.accent }} strokeWidth={1.8} />
                        </div>
                        <div className="text-sm font-semibold text-primary mb-1">{step.label}</div>
                        <div className="text-[12px] text-secondary">{step.sub}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Example */}
                <div className="border-t border-subtle p-5">
                  <div className="text-[13px] text-secondary mb-2">مثال:</div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm">
                    <span className="rounded-lg bg-ghost px-3 py-2 text-faint">&quot;خفّض الكاميرا 20 ريال&quot;</span>
                    <span className="text-brand-primary hidden md:inline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </span>
                    <span className="text-secondary">فهم: تعديل سعر</span>
                    <span className="text-brand-primary hidden md:inline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </span>
                    <span className="inline-flex items-center gap-1 text-brand-primary font-medium"><Check size={14} strokeWidth={2.5} />تم</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BarChart3Icon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
      <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
    </svg>
  );
}
