"use client";

import { motion } from "framer-motion";
import { UserPlus, QrCode, Rocket, Hand, Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ActivationJourney() {
  const t = useTranslations("ActivationJourney");

  const steps = [
    { num: "1", title: t("step1_title"), text: t("step1_text"), icon: UserPlus, accent: "#60A5FA" },
    { num: "2", title: t("step2_title"), text: t("step2_text"), icon: QrCode, accent: "#25D366" },
    { num: "3", title: t("step3_title"), text: t("step3_text"), icon: Rocket, accent: "#00D97E" },
  ];

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
          <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.1] text-start mb-4">
            {t("steps_heading")}
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
          <div className="text-[13px] text-brand-primary mb-3 font-medium">{t("first_message_label")}</div>
          <div className="rounded-[18px] px-5 py-4" style={{ background: "var(--ghost-bg)", border: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-[1.8] text-primary">
              {t("first_message_l1")} <Hand size={16} className="inline text-brand-primary" strokeWidth={1.8} />
              <br />
              {t("first_message_l2")}
              <br />
              {t("first_message_l3")}
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
          <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.1] text-start">
            {t("diff_heading")}
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
              {t("before_label")}
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-subtle px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "var(--ghost-bg)" }}>
                <span className="text-secondary text-sm block mb-1">{t("before_time1")}</span>
                {t("before_msg1")}
              </div>
              <div className="rounded-2xl border border-subtle px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "var(--ghost-bg)" }}>
                <span className="text-secondary text-sm block mb-1">{t("before_time2")}</span>
                {t("before_msg2")}
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
              {t("after_label")}
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-primary/14 px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "rgba(var(--brand-primary-rgb),0.04)" }}>
                <span className="text-brand-primary text-sm block mb-1">{t("after_time1")}</span>
                {t("after_msg1")}
              </div>
              <div className="rounded-2xl border border-brand-primary/14 px-5 py-4 text-[15px] leading-relaxed text-faint" style={{ background: "rgba(var(--brand-primary-rgb),0.04)" }}>
                <span className="text-brand-primary text-sm block mb-1">{t("after_time2")}</span>
                <span className="inline-flex items-center gap-1">{t("after_msg2")} <Check size={14} className="text-brand-primary" strokeWidth={2.5} /></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
