"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const setupSteps = [
  {
    step: "الثانية 0",
    title: "سجّل دخولك",
    text: "بريد واسم العمل فقط.",
    time: "30 ثانية",
  },
  {
    step: "الثانية 30",
    title: "اربط قنواتك",
    text: "واتساب أولاً.",
    time: "20 ثانية",
  },
  {
    step: "الثانية 50",
    title: "تم بدء العمل",
    text: "وصول يدير متجرك بالكامل.",
    time: "20 ثانية",
  },
];

const liveMoments = [
  {
    title: "الثانية التالية",
    heading: "وصول يُعرّف نفسه لك فوراً",
    body: "عملك الآن يعمل ✓",
  },
  {
    title: "اللحظة الملموسة",
    heading: "موظف الويدجت يرى ما يراه العميل",
    body: "يرى الصفحة. ويرد فوراً.",
  },
  {
    title: "الدقيقة الثانية",
    heading: "العمل يبدأ قبل أن تفتح لابتوبك",
    body: "من الآن: ردود، تنفيذ، وإشراف.",
  },
];

const ownerActions = [
  "ورّني مبيعات اليوم",
  "أضف منتجاً جديداً",
  "خفّض سعر هذا المنتج 20 ريال",
  "أرسل ملخص الليلة",
];

const STEP_DURATION = 2200;

const journeyTimeline = [
  "الثانية 0 → سجّل دخولك",
  "الثانية 30 → اربط قنواتك",
  "الثانية 50 → تم بدء العمل",
  "الثانية 70 → وصول يرحب بك كمالك",
  "الثانية 90 → يبدأ قراءة عملك",
  "الدقيقة 2 → العمل يعمل بالكامل ✓",
];

const faq = [
  {
    q: "هل يحتاج شخص تقني؟",
    a: "لا. إذا كنت تستطيع استخدام واتساب، تستطيع تشغيل وصول.",
  },
  {
    q: "ماذا لو أراد العميل إنساناً؟",
    a: "وصول يعرف متى يتنحى، ويرفع لك الحالة فوراً.",
  },
  {
    q: "هل يبقى كما هو بعد التثبيت؟",
    a: "لا. يبدأ من معرفة عملك، ثم يتحسن مع الاستخدام والسياق والقرارات.",
  },
];

function OrbitCluster({
  tone = "neutral",
  size = "md",
  variant = "core",
  className = "",
}: {
  tone?: "neutral" | "brand";
  size?: "md" | "lg";
  variant?: "core" | "before" | "entry" | "connect" | "store";
  className?: string;
}) {
  const large = size === "lg";
  const shellSize = large ? "h-44 w-44" : "h-32 w-32";
  const centerSize = large ? "inset-[34%]" : "inset-[32%]";
  const ringColor =
    tone === "brand"
      ? "rgba(0,184,108,0.28)"
      : "rgba(16,32,42,0.14)";
  const ringColorSoft =
    tone === "brand"
      ? "rgba(56,189,248,0.2)"
      : "rgba(16,32,42,0.09)";
  const centerBg =
    tone === "brand"
      ? "rgba(var(--brand-primary-rgb),0.11)"
      : "rgba(255,255,255,0.42)";
  const centerBorder =
    tone === "brand"
      ? "rgba(var(--brand-primary-rgb),0.2)"
      : "var(--border-subtle)";

  return (
    <motion.div
      animate={{ y: [0, -7, 0], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: large ? 5 : 4.2, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute ${shellSize} ${className}`}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: large ? 16 : 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 160 160" className="h-full w-full" fill="none">
          <ellipse cx="80" cy="80" rx="56" ry="24" stroke={variant === "before" ? "rgba(245,158,11,0.18)" : ringColor} strokeWidth={large ? "1.7" : "1.5"} />
          <ellipse cx="80" cy="80" rx="56" ry="24" stroke={variant === "before" ? "rgba(148,163,184,0.14)" : ringColorSoft} strokeWidth={large ? "1.6" : "1.35"} transform="rotate(60 80 80)" />
          <ellipse cx="80" cy="80" rx="56" ry="24" stroke={variant === "before" ? "rgba(245,158,11,0.12)" : ringColorSoft} strokeWidth={large ? "1.5" : "1.25"} transform="rotate(120 80 80)" />
          {(variant === "connect" || variant === "store") && (
            <ellipse cx="80" cy="80" rx="44" ry="44" stroke={tone === "brand" ? "rgba(0,184,108,0.14)" : "rgba(16,32,42,0.08)"} strokeDasharray="3 8" />
          )}
        </svg>

        {variant === "before" && (
          <>
            <div className="absolute left-[12%] top-[46%] h-3.5 w-3.5 rounded-full bg-[#f59e0b]/40" />
            <div className="absolute right-[14%] top-[26%] h-3 w-3 rounded-full bg-slate-400/45" />
            <div className="absolute right-[25%] bottom-[14%] h-3.5 w-3.5 rounded-full bg-[#f59e0b]/32" />
          </>
        )}

        {variant !== "before" && (
          <>
            <div className="absolute left-[13%] top-[45%] h-3.5 w-3.5 rounded-full bg-brand-primary/55" />
            <div className="absolute right-[14%] top-[24%] h-3 w-3 rounded-full bg-sky-400/40" />
            <div className="absolute right-[25%] bottom-[14%] h-3.5 w-3.5 rounded-full bg-brand-primary/40" />
          </>
        )}
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute ${centerSize} flex items-center justify-center rounded-full`}
        style={{ background: centerBg, border: `1px solid ${centerBorder}` }}
      >
        {variant === "before" && (
          <div className="relative h-11 w-11">
            <div className="absolute left-1/2 top-1/2 h-11 w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400/70" />
            <div className="absolute left-1/2 top-1/2 h-[1.5px] w-8 -translate-x-[15%] -translate-y-1/2 rotate-45 rounded-full bg-[#f59e0b]/70" />
            <div className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-[10%] -translate-y-1/2 -rotate-45 rounded-full bg-slate-400/70" />
            <div className="absolute inset-0 rounded-full border border-slate-400/55" />
          </div>
        )}

        {variant === "core" && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.424 10.58 46.872 28.387" width={large ? "42" : "30"} height={large ? "24" : "17"} aria-hidden="true">
            <path fill="currentColor" style={{ color: "var(--brand-primary)" }} d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z" />
          </svg>
        )}

        {variant === "entry" && (
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border border-brand-primary/20" />
            <div className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/65" />
            <div className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-[12%] -translate-y-1/2 rounded-full bg-sky-400/55" />
            <div className="absolute right-[7%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-primary/70" />
          </div>
        )}

        {variant === "connect" && (
          <div className="relative h-12 w-12 rounded-2xl border border-brand-primary/16 bg-white/50">
            <div className="absolute inset-x-2 top-3 h-[1.5px] bg-brand-primary/35" />
            <div className="absolute inset-x-2 bottom-3 h-[1.5px] bg-brand-primary/35" />
            <div className="absolute inset-y-2 left-3 w-[1.5px] bg-sky-400/30" />
            <div className="absolute inset-y-2 right-3 w-[1.5px] bg-sky-400/30" />
            <div className="absolute inset-[32%] flex items-center justify-center rounded-full bg-brand-primary/8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.424 10.58 46.872 28.387" width="18" height="11" aria-hidden="true">
                <path fill="currentColor" style={{ color: "var(--brand-primary)" }} d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z" />
              </svg>
            </div>
          </div>
        )}

        {variant === "store" && (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "var(--brand-primary)" }}>
            <path d="M4 9h16M6.2 9l1 8h9.6l1-8M9 9V7.6a3 3 0 0 1 6 0V9" />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ActivationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeOwnerAction, setActiveOwnerAction] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % setupSteps.length);
      setActiveTimelineItem((current) => (current + 1) % journeyTimeline.length);
    }, STEP_DURATION);

    const ownerTimer = window.setInterval(() => {
      setActiveOwnerAction((current) => (current + 1) % ownerActions.length);
    }, 2200);

    return () => {
      window.clearInterval(stepTimer);
      window.clearInterval(ownerTimer);
    };
  }, []);

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "var(--journey-accent-wash)" }} />

      <div className="relative max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-right"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-ghost-strong" />
            <span className="text-sm text-secondary">من التسجيل إلى التشغيل</span>
          </div>

          <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.12] max-w-5xl mr-0 ml-auto">
            أقل من دقيقتين.
            <br />
            <span className="text-secondary">بدون تقنية. بدون تعقيد.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-subtle p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 84%, #f7efe3 16%), var(--bg-surface))" }}
          >
            <motion.div
              animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.06, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[8%] top-[14%] h-28 w-28 rounded-full blur-3xl"
              style={{ background: "rgba(var(--brand-primary-rgb),0.10)" }}
            />
            <OrbitCluster variant="before" size="lg" className="left-[4%] bottom-[4%]" />
            <span className="text-sm text-secondary block mb-5">قبل وصول</span>
            <h3 className="text-[28px] md:text-[38px] font-bold leading-[1.16] mb-5">
              الساعة 2 فجراً.
              <br />
              العميل ينتظر.
              <br />
              وأنت نائم.
            </h3>
            <p className="text-secondary leading-relaxed max-w-xl">
              العميل ينتظر. وأنت تبدأ يومك من الصفر.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-brand-primary/20 p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 12%, white), color-mix(in srgb, var(--bg-surface) 88%, transparent))" }}
          >
            <motion.div
              animate={{ opacity: [0.14, 0.24, 0.14], scale: [1, 1.08, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-[8%] top-[14%] h-32 w-32 rounded-full blur-3xl"
              style={{ background: "rgba(var(--brand-primary-rgb),0.14)" }}
            />
            <OrbitCluster tone="brand" variant="core" size="lg" className="left-[4%] bottom-[4%]" />
            <span className="text-sm text-brand-primary block mb-5">بعد وصول</span>
            <h3 className="text-[28px] md:text-[38px] font-bold leading-[1.16] mb-5">
              الثانية 70:
              <br />
              وصول يعرف عملك،
              <br />
              ويعرف أنك المالك.
            </h3>
            <p className="text-faint leading-relaxed max-w-xl">
              ربط سريع. وبدء فوري.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {setupSteps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-3xl border p-7 transition-colors duration-500 ${
                activeStep === index
                  ? "border-brand-primary/30 shadow-[0_0_0_1px_rgba(0,217,126,0.08)]"
                  : "border-subtle"
              }`}
              style={{
                background:
                  activeStep === index
                    ? "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 10%, white), var(--bg-surface))"
                    : "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 88%, #f7efe3 12%), var(--bg-surface))",
              }}
            >
              <div className="relative flex items-center justify-between mb-5">
                <span className="text-sm text-brand-primary">{item.step}</span>
                <span className="text-xs text-muted">{item.time}</span>
              </div>
              {activeStep === index && (
                <motion.div
                  animate={{ opacity: [0.08, 0.18, 0.08], x: [0, 10, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-x-[10%] top-[34%] h-10 rounded-full blur-2xl"
                  style={{ background: "rgba(var(--brand-primary-rgb),0.16)" }}
                />
              )}
              <OrbitCluster
                tone={activeStep === index ? "brand" : "neutral"}
                variant={index === 0 ? "entry" : index === 1 ? "connect" : "store"}
                className="left-[4%] bottom-[8%]"
              />
              <h3 className="relative z-10 text-[28px] md:text-[32px] font-semibold mb-3 leading-[1.15]">{item.title}</h3>
              <p className="relative z-10 text-[15px] text-secondary leading-relaxed">{item.text}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full" style={{ background: "color-mix(in srgb, var(--brand-primary) 12%, var(--ghost-bg-strong))" }}>
                {activeStep === index && (
                  <motion.div
                    key={`progress-${index}-${activeStep}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                    className="h-full rounded-full bg-brand-primary"
                    style={{ boxShadow: "0 0 14px rgba(var(--brand-primary-rgb),0.45)" }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-subtle p-6"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-inset) 86%, #eef5f0 14%), var(--bg-surface))" }}
          >
            <motion.div
              animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.04, 1] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[8%] top-[18%] h-24 w-24 rounded-full blur-3xl"
              style={{ background: "rgba(var(--brand-primary-rgb),0.10)" }}
            />
            <div className="text-xs text-muted mb-3">فور الربط</div>
            <div className="rounded-2xl border border-subtle overflow-hidden bg-surface">
              <div className="px-4 py-3 border-b border-subtle flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/15 flex items-center justify-center text-brand-primary text-sm">∞</div>
                <div>
                  <div className="text-sm font-semibold">وصول</div>
                  <div className="text-[11px] text-muted">رسالة المالك الأولى</div>
                </div>
              </div>
              <div className="p-4 space-y-3 text-sm leading-relaxed">
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
                  className="rounded-2xl bg-ghost p-4 text-faint"
                >
                  السلام عليكم 👋
                  <br />
                  أنا وصول. أنت الآن متصل كمالك.
                  <br />
                  كل ما يحتاج قرارك سيصل هنا.
                  <br />
                  <span className="text-brand-primary">عملك الآن يعمل ✓</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-subtle p-8"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 88%, #eef2f7 12%), var(--bg-surface))" }}
          >
            <motion.div
              animate={{ opacity: [0.06, 0.14, 0.06], x: [0, -12, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-[8%] top-[16%] h-24 w-40 rounded-full blur-3xl"
              style={{ background: "rgba(96,165,250,0.10)" }}
            />
            <span className="text-sm text-secondary block mb-4">اللحظات التي تبيع المنتج</span>
            <div className="space-y-5">
              {liveMoments.map((moment, index) => (
                <motion.div
                  key={moment.heading}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`rounded-2xl border p-5 transition-all duration-500 ${
                    activeStep === index
                      ? "border-brand-primary/25 translate-x-0"
                      : "border-subtle"
                  }`}
                  style={{
                    background:
                      activeStep === index
                        ? "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 8%, white), var(--ghost-bg))"
                        : "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 82%, #f8f2e8 18%))",
                  }}
                >
                  <div className="text-xs text-brand-primary mb-2">{moment.title}</div>
                  <h3 className="text-[24px] md:text-[28px] font-semibold mb-2 leading-[1.2]">{moment.heading}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{moment.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-subtle p-8"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 90%, #eef4f8 10%), var(--bg-surface))" }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-secondary">موظف الويدجت</span>
              <span className="text-xs text-muted">Page-aware</span>
            </div>
            <h3 className="text-[22px] md:text-[30px] font-bold leading-[1.2] mb-5">
              “أول منتج بكم؟”
              <br />
              الموظف يرى الصفحة، لا السؤال فقط.
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl p-5" style={{ background: "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 78%, #eef5f3 22%))" }}>
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "160%" }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none"
                />
                <div className="text-xs text-muted mb-3">ما يراه الموظف</div>
                <ul className="space-y-2 text-sm text-faint">
                  <li>السعر الحالي</li>
                  <li>الخصم النشط</li>
                  <li>المخزون المتبقي</li>
                  <li>التقييمات والشحن</li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0.75, x: 0 }}
                animate={{ opacity: [0.75, 1, 0.85], x: [0, -3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="rounded-2xl border border-brand-primary/15 p-5"
                style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 10%, white), color-mix(in srgb, var(--brand-primary) 4%, transparent))" }}
              >
                <div className="text-xs text-brand-primary mb-3">الرد الفوري</div>
                <p className="text-sm text-faint leading-relaxed">
                  هذا المنتج بـ 149 ريال، وعندك خصم 10% لأول طلب. السعر بعد الخصم 134 ريال. تبغى تكمل الطلب؟
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-3xl border border-subtle p-8"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-inset) 84%, #eef6ef 16%), var(--bg-surface))" }}
          >
            <motion.div
              animate={{ opacity: [0.06, 0.14, 0.06], x: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[10%] top-[24%] h-24 w-44 rounded-full blur-3xl"
              style={{ background: "rgba(var(--brand-primary-rgb),0.10)" }}
            />
            <span className="text-sm text-secondary block mb-4">موظف المدير</span>
            <h3 className="text-[26px] md:text-[34px] font-bold leading-[1.16] mb-5">
              واتساب هو مكتبك.
              <br />
              وأنت ما زلت في السيطرة.
            </h3>
            <div className="space-y-3">
              {ownerActions.map((item, index) => (
                <motion.div
                  key={item}
                  animate={{
                    opacity: activeOwnerAction === index ? 1 : 0.45,
                    scale: activeOwnerAction === index ? 1.02 : 1,
                    borderColor:
                      activeOwnerAction === index
                        ? "rgba(0,217,126,0.22)"
                        : "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border px-4 py-3 text-sm text-faint"
                  style={{
                    background:
                      activeOwnerAction === index
                        ? "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 10%, white), var(--ghost-bg))"
                        : "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 78%, #f5efe5 22%))",
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-subtle p-8"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 88%, #f7efe4 12%), var(--bg-surface))" }}
          >
            <span className="text-sm text-secondary block mb-5">الأسئلة قبل التجربة</span>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-subtle p-5"
                  style={{ background: "linear-gradient(135deg, var(--ghost-bg), color-mix(in srgb, var(--ghost-bg) 80%, #eef2f7 20%))" }}
                >
                  <h4 className="text-[24px] md:text-[28px] font-semibold mb-2 leading-[1.2]">{item.q}</h4>
                  <p className="text-sm text-secondary leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-3xl border border-brand-primary/20 p-8"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 9%, white), color-mix(in srgb, var(--bg-surface) 90%, transparent))" }}
          >
            <span className="text-sm text-brand-primary block mb-5">الخلاصة</span>
            <div className="rounded-[28px] border border-subtle bg-surface-inset p-6">
              <div className="mb-6 flex items-center justify-between text-xs text-muted">
                <span>00:00 → 02:00</span>
                <span>Progress</span>
              </div>
              <div className="space-y-4 text-sm">
                {journeyTimeline.map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{
                      opacity: index > activeTimelineItem ? 0.34 : index === activeTimelineItem ? 1 : 0.78,
                      x: index === activeTimelineItem ? -6 : 0,
                      scale: index === activeTimelineItem ? 1.015 : 1,
                    }}
                    transition={{ duration: 0.35 }}
                    className="flex items-start gap-4 rounded-2xl px-3 py-3"
                    style={{
                      background:
                        index === activeTimelineItem
                          ? "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.10), rgba(var(--brand-primary-rgb),0.03))"
                          : index < activeTimelineItem
                            ? "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.04), transparent)"
                            : "transparent",
                      border:
                        index === activeTimelineItem
                          ? "1px solid rgba(var(--brand-primary-rgb),0.16)"
                          : "1px solid transparent",
                    }}
                  >
                    <div
                      className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-mono"
                      style={{
                        background:
                          index === activeTimelineItem
                            ? "rgba(var(--brand-primary-rgb),0.16)"
                            : index < activeTimelineItem
                              ? "rgba(var(--brand-primary-rgb),0.10)"
                              : "var(--ghost-bg)",
                        color: index <= activeTimelineItem ? "var(--brand-primary)" : "var(--text-muted)",
                        boxShadow:
                          index === activeTimelineItem
                            ? "0 0 0 1px rgba(var(--brand-primary-rgb),0.14), 0 0 14px rgba(var(--brand-primary-rgb),0.14)"
                            : "none",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <span
                        className="block text-[15px] leading-7"
                        style={{
                          color:
                            index === activeTimelineItem
                              ? "var(--text-primary)"
                              : index < activeTimelineItem
                                ? "var(--text-faint)"
                                : "var(--text-muted)",
                        }}
                      >
                        {item}
                      </span>
                      {index === activeTimelineItem && (
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-ghost-strong">
                          <motion.div
                            key={`timeline-item-${index}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                            className="h-full rounded-full"
                            style={{
                              background: "linear-gradient(90deg, rgba(var(--brand-primary-rgb),0.8), var(--brand-primary))",
                              boxShadow: "0 0 12px rgba(var(--brand-primary-rgb),0.45)",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-subtle">
                <p className="text-[28px] md:text-[40px] font-bold leading-[1.18]">
                  أطول شيء في إعداد وصول
                  <br />
                  هو انتظار QR Code واتساب.
                </p>
                <p className="text-brand-primary text-lg mt-3">وهذا يأخذ 10 ثوان تقريباً.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
