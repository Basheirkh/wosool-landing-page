"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const phases = [
  {
    label: "اليوم",
    title: "وصول يرد",
    subtitle: "على عملائك",
    owner: "أنت تُشرف",
    metric: "80%",
    note: "أتمتة",
  },
  {
    label: "غداً",
    title: "وصول يُقرّر",
    subtitle: "بدون سؤال",
    owner: "أنت تُوجّه",
    metric: "95%",
    note: "أتمتة",
  },
  {
    label: "المستقبل",
    title: "وصول يُشغّل",
    subtitle: "المتجر كاملاً",
    owner: "أنت تُبدع",
    metric: "0%",
    note: "تدخل روتيني",
  },
];

const quotes = [
  "في 2030، سيملك التاجر الناجح متجراً يعمل 24/7 دون أن يرد على رسالة واحدة.",
  "ليس لأنه وظّف فريقاً. لأن النظام تعلّم ما يريد.",
  "أنت لا تتوقف عن امتلاك المتجر. أنت تتوقف عن تشغيله يدوياً.",
];

export default function ZeroHumanInterventionSection() {
  return (
    <section className="relative overflow-hidden bg-surface-inset px-5 py-16 md:px-6 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(0,184,108,0.10), transparent 24%), radial-gradient(circle at 82% 20%, rgba(56,189,248,0.10), transparent 28%), radial-gradient(circle at 52% 78%, rgba(167,139,250,0.08), transparent 26%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-right"
        >
          <span className="mb-4 inline-flex rounded-full border border-brand-primary/18 bg-brand-primary/8 px-4 py-2 text-xs tracking-[0.24em] text-brand-primary uppercase">
            Future Vision
          </span>
          <h2 className="text-[32px] font-bold leading-[1.06] md:text-[50px] lg:text-[68px]">
            المتجر الذي لا يحتاجك.
          </h2>
          <p className="mt-4 text-[18px] leading-8 text-secondary md:text-[22px]">
            هذا ليس خيالًا علميًا.
            <br />
            هذا ما نبنيه.
          </p>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] border border-subtle p-7 md:p-9"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 88%, #eef5ef 12%), var(--bg-surface))" }}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {phases.map((phase, index) => (
                <div
                  key={phase.label}
                  className="relative overflow-hidden rounded-[28px] border p-5"
                  style={{
                    borderColor: index === 2 ? "rgba(var(--brand-primary-rgb),0.20)" : "var(--border-subtle)",
                    background:
                      index === 2
                        ? "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.10), var(--bg-surface))"
                        : "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 72%, #eef3f7 28%))",
                  }}
                >
                  <div className="mb-3 text-sm text-secondary">{phase.label}</div>
                  <h3 className="text-[24px] font-bold leading-[1.15] text-primary">
                    {phase.title}
                    <br />
                    {phase.subtitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-secondary">{phase.owner}</p>
                  <div className="mt-7">
                    <div className="flex items-end gap-2">
                      <div className="text-[42px] font-bold leading-none text-primary">{phase.metric}</div>
                      <div className="pb-1 text-sm text-secondary">{phase.note}</div>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-ghost">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: index === 0 ? "80%" : index === 1 ? "95%" : "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.15 }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            index === 2
                              ? "linear-gradient(90deg, rgba(var(--brand-primary-rgb),0.45), var(--brand-primary))"
                              : "linear-gradient(90deg, rgba(56,189,248,0.5), rgba(var(--brand-primary-rgb),0.9))",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {quotes.map((quote, index) => (
                <motion.div
                  key={quote}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-[24px] border border-subtle px-5 py-4 text-[15px] leading-8 text-faint"
                  style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 90%, #f8f1e8 10%), var(--bg-surface))" }}
                >
                  &quot;{quote}&quot;
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[32px] border border-subtle p-7 md:p-9"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-inset) 84%, #edf4ef 16%), var(--bg-surface))" }}
          >
            <div className="mb-4 text-sm text-brand-primary">Counter</div>
            <div className="rounded-[28px] border border-brand-primary/18 bg-brand-primary/[0.06] p-7 text-center">
              <div className="text-sm text-secondary">المهام التي ينجزها وصول بدون تدخل بشري</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-5 text-[42px] font-bold leading-none text-brand-primary md:text-[64px]"
              >
                4,200,000+
              </motion.div>
              <div className="mt-4 text-sm leading-7 text-faint">مهمة منذ أول يوم للتشغيل</div>
            </div>

            <div className="mt-6 rounded-[28px] border border-subtle p-6" style={{ background: "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 74%, #eef2f7 26%))" }}>
              <p className="text-[18px] font-semibold leading-9 text-primary">
                وصول لا يريد أن يكون أداة تستخدمها.
                <br />
                وصول يريد أن يكون النظام الذي يفكّر معك حتى لا تحتاج للتفكير فيه.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog/zero-human-intervention"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium theme-btn-primary"
              >
                اقرأ المقالة الكاملة
              </Link>
              <Link
                href="/blog/zero-human-intervention"
                className="inline-flex items-center justify-center rounded-full border border-medium px-6 py-3 text-sm text-faint transition-colors hover:border-strong hover:text-primary"
              >
                اقرأ رؤيتنا للمستقبل
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
