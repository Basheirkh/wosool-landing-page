"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const agents = [
  {
    name: "موظف العملاء",
    channel: "واتساب",
    status: "نشط — 24/7",
    text: "يرد على كل رسالة. يعرف كل طلب. لا انتظار. لا تكرار.",
    metric: "47",
    metricLabel: "رسالة رُدّ عليها اليوم",
    accent: "#25D366",
  },
  {
    name: "موظف المدير",
    channel: "واتساب المالك",
    status: "ينتظر أوامرك",
    text: "أرسل له أمراً فينفذه. اسأله فيجيب. صوتاً أو نصاً.",
    metric: "12",
    metricLabel: "عملية منجزة اليوم",
    accent: "#60A5FA",
  },
  {
    name: "موظف الذكاء",
    channel: "تقرير صباحي",
    status: "يعمل الليل كله",
    text: "يحلل بياناتك وأنت نائم. يرسل ما يهمك فقط كل صباح.",
    metric: "3",
    metricLabel: "insights هذا الأسبوع",
    accent: "#A78BFA",
  },
  {
    name: "موظف الويدجت",
    channel: "موقع المتجر",
    status: "يرى ما يراه عملاؤك",
    text: "يجلس في موقعك. يرى المنتج الذي يراه العميل. يجيب بدقة متناهية.",
    metric: "4.2%",
    metricLabel: "معدل تحويل هذا الشهر",
    accent: "#F6C453",
  },
];

const flow = [
  "موظف العملاء يُخبر المشتري: تم استلام طلبك ✓",
  "موظف المدير يُخبر المالك: طلب جديد — 350 ريال",
  "موظف الذكاء يُسجّل: منتج X يبيع جيداً اليوم",
  "موظف الويدجت جاهز للمشتري التالي على نفس المنتج",
];

export default function AgentsArchitectureSection() {
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFlow((current) => (current + 1) % flow.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div className="max-w-3xl text-right mr-0 ml-auto">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px flex-1 bg-ghost-strong" />
              <span className="text-sm text-secondary">فريق العمل داخل وصول</span>
            </div>
            <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.1]">
              4 موظفين. متجر واحد.
              <br />
              يعمل دائماً.
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-secondary">
              كل موظف متخصص في مهمته، ويعملون معاً بدون تعليمات منك.
              الفرق هنا ليس أربع أدوات. بل فريق تشغيل واحد.
            </p>
          </div>

          <Link
            href="/blog/wosool-agents-architecture"
            className="hidden md:inline-flex rounded-full px-6 py-3 text-sm font-medium theme-btn-primary"
          >
            اقرأ البنية كاملة
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-6 overflow-hidden rounded-[32px] border border-subtle bg-surface-elevated"
        >
          <div className="p-3 md:p-4">
            <div
              className="theme-art-surface relative overflow-hidden rounded-[28px] p-6 md:p-8"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 18% 18%, rgba(0,217,126,0.14), transparent 28%), radial-gradient(circle at 82% 22%, rgba(56,189,248,0.16), transparent 32%), linear-gradient(135deg, var(--art-bg-start) 0%, var(--art-bg-mid) 38%, var(--art-bg-end) 100%)",
              }}
            >
              <div className="absolute inset-0 dot-grid-static opacity-30" />
              <div className="relative z-20">
                <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
                  <div
                    className="w-full max-w-[320px] rounded-[28px] px-6 py-5"
                    style={{ border: "1px solid var(--art-panel-border)", background: "var(--art-panel)" }}
                  >
                    <div className="text-sm font-semibold text-brand-primary">متجرك على سلة</div>
                    <div className="mt-2 text-[13px] font-medium" style={{ color: "var(--art-text-secondary)" }}>
                      بيانات · طلبات · مخزون
                    </div>
                  </div>

                  <div
                    className="w-full max-w-[360px] rounded-[30px] px-6 py-6 text-center shadow-2xl shadow-black/20"
                    style={{ border: "1px solid var(--art-panel-border)", background: "var(--art-panel)" }}
                  >
                    <div className="text-[34px] font-bold leading-none text-brand-primary">∞</div>
                    <div className="mt-2 text-2xl font-bold" style={{ color: "var(--art-text-primary)" }}>وصول</div>
                    <div className="mt-2 text-sm font-medium" style={{ color: "var(--art-text-secondary)" }}>
                      نظام التشغيل الذكي
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {agents.map((agent, index) => (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="rounded-[26px] p-5 backdrop-blur-sm"
                      style={{
                        border: "1px solid var(--art-panel-border)",
                        background: `linear-gradient(180deg, var(--art-panel), color-mix(in srgb, ${agent.accent} 5%, var(--art-panel)))`,
                        boxShadow: `0 14px 36px ${agent.accent}12`,
                      }}
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span
                          className="rounded-full px-3 py-1.5 text-[11px] font-medium"
                          style={{ background: `${agent.accent}30`, color: agent.accent }}
                        >
                          {agent.channel}
                        </span>
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ background: agent.accent, boxShadow: `0 0 18px ${agent.accent}66` }}
                        />
                      </div>
                      <div className="text-[15px] font-bold" style={{ color: "var(--art-text-primary)" }}>{agent.name}</div>
                      <div className="mt-1 text-[12px]" style={{ color: "var(--art-text-muted)" }}>{agent.status}</div>
                      <p className="mt-3 min-h-[72px] text-[13px] leading-[1.7]" style={{ color: "var(--art-text-secondary)" }}>
                        {agent.text}
                      </p>
                      <div className="mt-4 rounded-2xl px-3 py-3" style={{ background: `linear-gradient(180deg, ${agent.accent}10, var(--art-chip-bg))` }}>
                        <div className="font-mono text-[28px] font-semibold leading-none" style={{ color: agent.accent }}>
                          {agent.metric}
                        </div>
                        <div className="mt-2 text-[12px] leading-5" style={{ color: "var(--art-text-muted)" }}>
                          {agent.metricLabel}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[28px] border border-subtle p-7"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 88%, #eef6f1 12%), var(--bg-surface))" }}
          >
            <motion.div
              animate={{ opacity: [0.08, 0.18, 0.08], x: [0, -14, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-[8%] top-[18%] h-24 w-40 rounded-full blur-3xl"
              style={{ background: "rgba(var(--brand-primary-rgb),0.12)" }}
            />
            <div className="mb-4 text-sm text-brand-primary">Interaction Flow</div>
            <h3 className="text-[24px] font-bold leading-[1.2]">الموظفون يعملون معاً، لا منفصلين.</h3>
            <div className="mt-6 space-y-3">
              {flow.map((item, index) => (
                <motion.div
                  key={item}
                  animate={{
                    opacity: index === activeFlow ? 1 : 0.62,
                    x: index === activeFlow ? -6 : 0,
                    scale: index === activeFlow ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.32 }}
                  className="relative flex items-start gap-3 overflow-hidden rounded-2xl px-4 py-4"
                  style={{
                    background:
                      index === activeFlow
                        ? "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.10), rgba(56,189,248,0.05))"
                        : "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 74%, #eef2f7 26%))",
                    border: index === activeFlow ? "1px solid rgba(var(--brand-primary-rgb),0.14)" : "1px solid transparent",
                  }}
                >
                  {index === activeFlow && (
                    <motion.div
                      key={`flow-progress-${index}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.8, ease: "linear" }}
                      className="absolute bottom-0 right-0 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, rgba(var(--brand-primary-rgb),0.85), rgba(56,189,248,0.7))",
                        boxShadow: "0 0 14px rgba(var(--brand-primary-rgb),0.35)",
                      }}
                    />
                  )}
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/12 text-[11px] text-brand-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-faint">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden rounded-[28px] border border-subtle p-7"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-inset) 84%, #eef4ef 16%), var(--bg-surface))" }}
          >
            <motion.div
              animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.05, 1] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[10%] top-[18%] h-28 w-28 rounded-full blur-3xl"
              style={{ background: "rgba(56,189,248,0.10)" }}
            />
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-secondary">ما يراه التاجر فوراً</div>
                <h3 className="mt-2 text-[24px] font-bold leading-[1.2]">المخطط يُفهم في 5 ثوان.</h3>
              </div>
              <Link href="/blog/wosool-agents-architecture" className="text-sm text-brand-primary">
                التفاصيل التقنية والتحريرية ←
              </Link>
            </div>
            <div className="relative mt-4 rounded-[28px] border border-subtle p-5 md:p-6" style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 86%, #f6efe4 14%), var(--bg-surface))" }}>
              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <div className="space-y-3">
                  <div className="rounded-2xl border border-subtle bg-white/40 px-4 py-3 text-sm leading-7 text-faint">متجرك في الأعلى كمصدر الحقيقة.</div>
                  <div className="rounded-2xl border border-subtle bg-white/40 px-4 py-3 text-sm leading-7 text-faint">4 موظفين في الأسفل كل واحد له قناة واضحة.</div>
                </div>

                <div className="relative mx-auto my-3 h-32 w-32 md:my-0">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 160 160" className="h-full w-full" fill="none">
                      <ellipse cx="80" cy="80" rx="56" ry="22" stroke="rgba(0,184,108,0.18)" strokeWidth="1.2" />
                      <ellipse cx="80" cy="80" rx="56" ry="22" stroke="rgba(56,189,248,0.14)" strokeWidth="1.2" transform="rotate(60 80 80)" />
                      <ellipse cx="80" cy="80" rx="56" ry="22" stroke="rgba(167,139,250,0.12)" strokeWidth="1.2" transform="rotate(120 80 80)" />
                    </svg>
                    <div className="absolute left-[11%] top-[47%] h-3 w-3 rounded-full bg-brand-primary/55" />
                    <div className="absolute right-[13%] top-[27%] h-2.5 w-2.5 rounded-full bg-sky-400/45" />
                    <div className="absolute right-[23%] bottom-[16%] h-3 w-3 rounded-full bg-violet-400/35" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[28%] flex items-center justify-center rounded-full border border-brand-primary/18 bg-white/78 text-center shadow-[0_16px_34px_rgba(16,32,42,0.08)]"
                  >
                    <div>
                      <div className="text-[24px] font-bold leading-none text-brand-primary">∞</div>
                      <div className="mt-1 text-[13px] font-semibold text-primary">وصول</div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-subtle bg-white/40 px-4 py-3 text-sm leading-7 text-faint">وصول في الوسط كنظام تشغيل.</div>
                  <div className="rounded-2xl border border-subtle bg-white/40 px-4 py-3 text-sm leading-7 text-faint">المخطط يشرح العلاقة بدون قراءة طويلة.</div>
                </div>
              </div>
            </div>
            <div className="mt-5 rounded-[24px] border border-brand-primary/18 bg-brand-primary/[0.06] p-5">
              <div className="text-sm text-brand-primary">CTA</div>
              <div className="mt-2 text-lg font-semibold">ابدأ مجاناً — موظفوك جاهزون خلال دقيقتين</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/blog/wosool-agents-architecture"
            className="inline-flex rounded-full px-6 py-3 text-sm font-medium theme-btn-primary"
          >
            اقرأ البنية كاملة
          </Link>
        </div>
      </div>
    </section>
  );
}
