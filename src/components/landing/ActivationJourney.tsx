"use client";

import { motion } from "framer-motion";
import { UserPlus, QrCode, Rocket, Hand, Check } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "سجّل دخولك",
    text: "بريدك + اسم متجرك. بس.",
    icon: UserPlus,
    accent: "#60A5FA",
  },
  {
    num: "2",
    title: "وصّل واتسابك",
    text: "امسح QR code. 10 ثوان.",
    icon: QrCode,
    accent: "#25D366",
  },
  {
    num: "3",
    title: "متجرك صحّى",
    text: "وصول يرسلك أول رسالة ويبدأ الشغل.",
    icon: Rocket,
    accent: "#00D97E",
  },
];

export default function ActivationJourney() {
  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-background">
      <div className="mx-auto max-w-[1400px]">
        {/* Section: Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.1] text-right mb-4">
            من التسجيل للتشغيل — أقل من دقيقتين
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[28px] border border-subtle p-7"
                style={{
                  background: index === 2
                    ? "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.08), var(--bg-surface))"
                    : "linear-gradient(135deg, var(--ghost-bg), var(--bg-surface))",
                  borderColor: index === 2 ? "rgba(var(--brand-primary-rgb),0.20)" : undefined,
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
                  style={{ background: `${step.accent}14`, border: `1px solid ${step.accent}24` }}
                >
                  <Icon size={22} style={{ color: step.accent }} strokeWidth={1.8} />
                </div>
                <h3 className="text-[22px] font-bold mb-3">{step.title}</h3>
                <p className="text-secondary text-[15px] leading-relaxed">{step.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Wosool first message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto rounded-[24px] border border-brand-primary/18 bg-brand-primary/[0.06] p-6"
        >
          <div className="text-[13px] text-brand-primary mb-3 font-medium">رسالة وصول الأولى</div>
          <div className="rounded-[18px] px-5 py-4" style={{ background: "var(--ghost-bg)", border: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-[1.8] text-primary">
              السلام عليكم <Hand size={16} className="inline text-brand-primary" strokeWidth={1.8} />
              <br />
              أنا وصول — وكيل متجرك.
              <br />
              كل شيء جاهز. قولي وش تحتاج.
            </p>
          </div>
        </motion.div>

        {/* Section: Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20 mb-10"
        >
          <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.1] text-right">
            الفرق من أول ليلة
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border border-subtle p-7"
            style={{ background: "linear-gradient(135deg, var(--ghost-bg), var(--bg-surface))" }}
          >
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
              بدون وصول
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-subtle px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "var(--ghost-bg)" }}>
                <span className="text-secondary text-sm block mb-1">الساعة 2 فجراً</span>
                عميل يسأل — ما أحد يرد
              </div>
              <div className="rounded-2xl border border-subtle px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "var(--ghost-bg)" }}>
                <span className="text-secondary text-sm block mb-1">تصحى الصبح</span>
                15 رسالة فايتتك
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[28px] border border-brand-primary/20 p-7"
            style={{ background: "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.08), var(--bg-surface))" }}
          >
            <div className="flex items-center gap-2 text-brand-primary text-sm font-medium mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              مع وصول
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-primary/14 px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "rgba(var(--brand-primary-rgb),0.04)" }}>
                <span className="text-brand-primary text-sm block mb-1">الساعة 2 فجراً</span>
                وصول يرد في ثانية
              </div>
              <div className="rounded-2xl border border-brand-primary/14 px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "rgba(var(--brand-primary-rgb),0.04)" }}>
                <span className="text-brand-primary text-sm block mb-1">تصحى الصبح</span>
                <span className="inline-flex items-center gap-1">ملخص جاهز — كل شيء تم <Check size={14} className="text-brand-primary" strokeWidth={2.5} /></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
