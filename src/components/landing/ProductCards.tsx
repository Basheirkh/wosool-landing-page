"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductCards() {
  const [activeDecision, setActiveDecision] = useState(0);
  const [statsCycle, setStatsCycle] = useState(0);

  useEffect(() => {
    const decisionTimer = window.setInterval(() => {
      setActiveDecision((current) => (current + 1) % 3);
    }, 1600);

    const statsTimer = window.setInterval(() => {
      setStatsCycle((current) => (current + 1) % 2);
    }, 2200);

    return () => {
      window.clearInterval(decisionTimer);
      window.clearInterval(statsTimer);
    };
  }, []);

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Two large colored cards side by side — Botpress developer section */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 — Teal/Green: owner morning brief */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-surface-accent-green border border-subtle min-h-[500px] relative group"
          >
            {/* Label */}
            <div className="flex items-center justify-between p-6 pb-0">
              <span className="text-sm text-muted">ملخص الصباح</span>
              <a href="#" className="flex items-center gap-1 text-xs text-muted hover:text-primary transition-colors">
                تعرف على المزيد
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Heading */}
            <div className="p-6 pt-4">
              <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2]">
                صباح الخير. هذا ما فعله
                <br />
                وصول الليلة من أجلك.
              </h3>
              <p className="text-sm text-secondary mt-4 max-w-md leading-relaxed">
                تبدأ يومك من نتيجة، لا من فوضى.
              </p>
            </div>

            <div className="px-6 pb-6 flex items-end justify-center">
              <div className="bg-surface-accent-green-inner rounded-xl border border-subtle p-4 w-full max-w-[340px]">
                <div className="flex items-center justify-between text-xs text-muted mb-3">
                  <span>07:02 AM</span>
                  <motion.span
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="text-brand-primary"
                  >
                    live
                  </motion.span>
                </div>
                <motion.div
                  animate={{ opacity: [0.78, 1, 0.82] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="bg-ghost-strong rounded-lg p-3 mb-3 text-sm text-faint leading-relaxed"
                >
                  تم الرد على 12 استفسار عميل، وتأكيد 3 طلبات، وتصعيد حالة واحدة تحتاج قرارك.
                </motion.div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: "محادثات", values: ["12", "14"] },
                    { label: "طلبات", values: ["3", "4"] },
                    { label: "تصعيد", values: ["1", "0"] },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      animate={{
                        y: statsCycle === index % 2 ? -2 : 0,
                        borderColor: statsCycle === index % 2 ? "rgba(0,217,126,0.18)" : "rgba(255,255,255,0.04)",
                      }}
                      transition={{ duration: 0.35 }}
                      className="rounded-lg border p-3"
                      style={{ background: "var(--ghost-bg)", borderColor: "var(--border-faint)" }}
                    >
                      <div className="font-mono text-lg text-primary">{item.values[statsCycle]}</div>
                      <div className="text-[11px] text-muted mt-1">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Dark: conversation, understanding, execution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-surface-elevated border border-subtle min-h-[500px] relative group"
          >
            {/* Label */}
            <div className="flex items-center justify-between p-6 pb-0">
              <span className="text-sm text-muted">طبقة التشغيل</span>
              <a href="#" className="flex items-center gap-1 text-xs text-muted hover:text-primary transition-colors">
                تعرف على المزيد
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Heading */}
            <div className="p-6 pt-4">
              <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2]">
                المحادثة، الفهم، والتنفيذ.
                <br />
                في خط واحد واضح.
              </h3>
              <p className="text-sm text-secondary mt-4 max-w-md leading-relaxed">
                ليس رداً فقط. بل قرار ثم تنفيذ.
              </p>
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-xl border border-subtle overflow-hidden bg-surface-inset">
                <div className="grid grid-cols-3 border-b border-subtle text-xs">
                  {["المحادثة", "الفهم", "التنفيذ"].map((item) => (
                    <div key={item} className="px-4 py-3 text-secondary">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-px bg-ghost-strong">
                  <div className="bg-surface-inset p-4">
                    <div className="text-[11px] text-muted mb-2">رسالة واردة</div>
                    <div className="rounded-lg bg-ghost p-3 text-sm text-faint">
                      وين طلبي رقم 4521؟
                    </div>
                  </div>
                  <div className="bg-surface-inset p-4">
                    <div className="text-[11px] text-muted mb-2">قرار الوكيل</div>
                    <div className="space-y-2 text-sm text-faint">
                      {["قراءة حالة الطلب", "تحديد موعد الشحن", "صياغة الرد"].map((item, index) => (
                        <motion.div
                          key={item}
                          animate={{
                            x: activeDecision === index ? -3 : 0,
                            borderColor:
                              activeDecision === index
                                ? "rgba(0,217,126,0.22)"
                                : "rgba(255,255,255,0.04)",
                            backgroundColor:
                              activeDecision === index
                                ? "rgba(0,217,126,0.08)"
                                : "rgba(255,255,255,0.04)",
                          }}
                          transition={{ duration: 0.35 }}
                          className="rounded-lg border px-3 py-2 flex items-center justify-between"
                        >
                          <span>{item}</span>
                          <motion.span
                            animate={{ opacity: activeDecision === index ? [0.35, 1, 0.35] : 0.25 }}
                            transition={{ duration: 1.1, repeat: Infinity }}
                            className="text-brand-primary text-[10px]"
                          >
                            ●
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-surface-inset p-4">
                    <div className="text-[11px] text-muted mb-2">النتيجة</div>
                    <motion.div
                      animate={{ opacity: [0.75, 1, 0.82] }}
                      transition={{ duration: 1.7, repeat: Infinity }}
                      className="rounded-lg bg-brand-primary/10 border border-brand-primary/20 p-3 text-sm text-faint leading-relaxed"
                    >
                      طلبك جاهز للشحن اليوم. إذا أردت، أرسل لك رابط التتبع فور صدوره.
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Positioning bar below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 rounded-2xl bg-brand-primary p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-right">
            <div className="font-mono text-xl md:text-2xl font-bold text-on-brand">
              4 موظفين. واتساب واحد. صباح أهدأ.
            </div>
            <div className="text-sm text-on-brand/70 mt-1">
              أذكى داخل عملك. هذا ما يهم.
            </div>
          </div>
          <a href="#" className="rounded-full px-6 py-2.5 text-sm font-medium transition-opacity theme-btn-secondary" style={{ background: "var(--text-on-brand)", color: "var(--background)", borderColor: "transparent" }}>
            اطلب الوصول المبكر
          </a>
        </motion.div>
      </div>
    </section>
  );
}
