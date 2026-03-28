"use client";

import Link from "next/link";
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
  return (
    <section className="relative px-6 py-24 bg-background">
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
            className="rounded-[28px] border border-subtle p-7"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 88%, #eef6f1 12%), var(--bg-surface))" }}
          >
            <div className="mb-4 text-sm text-brand-primary">Interaction Flow</div>
            <h3 className="text-[24px] font-bold leading-[1.2]">الموظفون يعملون معاً، لا منفصلين.</h3>
            <div className="mt-6 space-y-3">
              {flow.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl px-4 py-4" style={{ background: "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 74%, #eef2f7 26%))" }}>
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/12 text-[11px] text-brand-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-faint">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[28px] border border-subtle p-7"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-inset) 84%, #eef4ef 16%), var(--bg-surface))" }}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-secondary">ما يراه التاجر فوراً</div>
                <h3 className="mt-2 text-[24px] font-bold leading-[1.2]">المخطط يُفهم في 5 ثوان.</h3>
              </div>
              <Link href="/blog/wosool-agents-architecture" className="text-sm text-brand-primary">
                التفاصيل التقنية والتحريرية ←
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "متجرك في الأعلى كمصدر الحقيقة.",
                "وصول في الوسط كنظام تشغيل.",
                "4 موظفين في الأسفل كل واحد له قناة واضحة.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-subtle px-4 py-4 text-sm leading-7 text-faint" style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 86%, #f6efe4 14%), var(--bg-surface))" }}>
                  {item}
                </div>
              ))}
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
