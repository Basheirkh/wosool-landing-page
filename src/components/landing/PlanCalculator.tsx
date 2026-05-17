"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle, Workflow, Layers, Sparkles, TrendingUp, BadgeCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

type BiStr = { ar: string; en: string };
type PlanId = "starter" | "professional" | "advanced";

type Plan = {
  id: PlanId;
  name: BiStr;
  emoji: string;
  monthly: number;
  yearlyMonthly: number;
  chats: number;
  automations: number;
  writes: number; // write actions per month (master gate)
  color: string; // hex for accent
  ring: string;  // tailwind ring class
  borderClass: string;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: { ar: "الانطلاق", en: "Starter" },
    emoji: "🟢",
    monthly: 499,
    yearlyMonthly: 399,
    chats: 900,
    automations: 8,
    writes: 500,
    color: "#10b981",
    ring: "ring-emerald-500/30",
    borderClass: "border-emerald-500/40",
  },
  {
    id: "professional",
    name: { ar: "احترافي", en: "Professional" },
    emoji: "🔵",
    monthly: 1299,
    yearlyMonthly: 1039,
    chats: 2400,
    automations: 21,
    writes: 2500,
    color: "var(--brand-primary, #0ea5a5)",
    ring: "ring-brand-primary/30",
    borderClass: "border-brand-primary/40",
  },
  {
    id: "advanced",
    name: { ar: "متقدم", en: "Advanced" },
    emoji: "🟣",
    monthly: 2999,
    yearlyMonthly: 2399,
    chats: 5500,
    automations: 21,
    writes: 10000,
    color: "#f59e0b",
    ring: "ring-amber-500/30",
    borderClass: "border-amber-400/40",
  },
];

// CS rep monthly salary baseline (SAR)
const REP_SALARY = 3500;
// One CS rep handles ~ this many real conversations per month (rough industry estimate)
const CHATS_PER_REP = 1200;

function pickPlan(chats: number, automations: number, writes: number): Plan {
  for (const p of PLANS) {
    if (chats <= p.chats && automations <= p.automations && writes <= p.writes) return p;
  }
  return PLANS[PLANS.length - 1];
}

function formatAr(n: number, isAr: boolean) {
  const s = n.toLocaleString(isAr ? "ar-SA-u-nu-arab" : "en-US");
  return s;
}

type Props = {
  /** "compact" hides slider labels' helper text; "full" is for /pricing page */
  variant?: "compact" | "full";
};

export default function PlanCalculator({ variant = "full" }: Props) {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);
  const ArrowEnd = isAr ? ArrowLeft : ArrowRight;

  const [chats, setChats] = useState(1500);
  const [automations, setAutomations] = useState(10);
  const [writes, setWrites] = useState(800);
  const [yearly, setYearly] = useState(false);

  const plan = useMemo(() => pickPlan(chats, automations, writes), [chats, automations, writes]);

  const reps = Math.max(1, Math.ceil(chats / CHATS_PER_REP));
  const manualCost = reps * REP_SALARY;
  const planCost = yearly ? plan.yearlyMonthly : plan.monthly;
  const monthlySaving = Math.max(0, manualCost - planCost);
  const yearlySaving = monthlySaving * 12;

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 text-brand-primary px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider mb-4">
            <Calculator size={13} strokeWidth={2.5} />
            {t("Plan calculator", "حاسبة الباقة")}
          </div>
          <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-bold mb-3 leading-tight">
            {t("Find the right plan in seconds", "اعرف باقتك المناسبة في ثوانٍ")}
          </h2>
          <p className="text-secondary text-[14px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t(
              "Move three sliders — we recommend the plan and show how much you save vs hiring support staff.",
              "حرّك ٣ مؤشرات — ونرشّح لك الباقة الأنسب مع حجم التوفير مقارنة بتوظيف موظفين.",
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] items-stretch">
          {/* ── Sliders ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-subtle bg-surface-elevated p-6 md:p-8"
          >
            {/* Billing toggle */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[13px] font-bold text-muted uppercase tracking-wider">
                {t("Inputs", "المدخلات")}
              </span>
              <div className="inline-flex items-center gap-1 bg-ghost rounded-full p-1 border border-subtle">
                <button
                  onClick={() => setYearly(false)}
                  className={`px-3 py-1 rounded-full text-[12px] transition-all ${
                    !yearly ? "theme-btn-primary font-bold" : "text-secondary"
                  }`}
                >
                  {t("Monthly", "شهري")}
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`px-3 py-1 rounded-full text-[12px] flex items-center gap-1.5 transition-all ${
                    yearly ? "theme-btn-primary font-bold" : "text-secondary"
                  }`}
                >
                  {t("Yearly", "سنوي")}
                  <span className="theme-badge-accent text-[9px] px-1.5 py-px rounded-full font-bold">-20%</span>
                </button>
              </div>
            </div>

            {/* Slider — chats */}
            <SliderRow
              icon={MessageCircle}
              label={t("Unique conversations per month", "المحادثات الفريدة شهرياً")}
              value={chats}
              valueLabel={formatAr(chats, isAr)}
              min={100}
              max={6000}
              step={100}
              onChange={setChats}
              helper={variant === "full" ? t("One conversation = one customer session, not one message.", "المحادثة = جلسة عميل واحدة، وليست رسالة منفصلة.") : undefined}
            />

            {/* Slider — automations */}
            <SliderRow
              icon={Workflow}
              label={t("Automations needed (out of 21)", "عدد الأتمتات المطلوبة (من ٢١)")}
              value={automations}
              valueLabel={formatAr(automations, isAr)}
              min={1}
              max={17}
              step={1}
              onChange={setAutomations}
              helper={variant === "full" ? t("Cart recovery, order confirm, shipping alerts, review follow-ups…", "استرداد سلات · تأكيد طلبات · إشعار شحن · متابعة تقييمات…") : undefined}
            />

            {/* Slider — write actions per month */}
            <SliderRow
              icon={Layers}
              label={t("Write actions per month", "أوامر الكتابة شهرياً")}
              value={writes}
              valueLabel={formatAr(writes, isAr)}
              min={100}
              max={10000}
              step={100}
              onChange={setWrites}
              helper={variant === "full" ? t("Create/update/delete products, coupons, refunds, shipments…", "إنشاء وتعديل وحذف المنتجات والكوبونات وعمليات الاسترداد…") : undefined}
              last
            />
          </motion.div>

          {/* ── Recommendation ── */}
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className={`rounded-2xl border-2 ${plan.borderClass} bg-surface-elevated p-6 md:p-8 flex flex-col relative overflow-hidden`}
          >
            {/* glow */}
            <div
              className="absolute -top-20 -end-20 w-56 h-56 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: plan.color }}
            />

            <div className="relative flex items-center gap-2 mb-1">
              <Sparkles size={16} className="text-brand-primary" strokeWidth={2.4} />
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted font-bold">
                {t("We recommend", "الباقة المقترحة")}
              </span>
            </div>
            <div className="relative flex items-center gap-3 mb-5">
              <span className="text-3xl leading-none">{plan.emoji}</span>
              <h3 className="text-[26px] md:text-[32px] font-bold text-primary">{plan.name[isAr ? "ar" : "en"]}</h3>
            </div>

            {/* Price */}
            <div className="relative flex items-baseline gap-2 mb-6">
              <span className="text-[44px] md:text-[52px] font-bold font-mono text-primary leading-none">
                {formatAr(planCost, isAr)}
              </span>
              <span className="text-secondary text-[15px] font-semibold">
                {t("SAR / month", "ريال / شهر")}
              </span>
              {yearly && (
                <span className="text-[11px] text-faint">
                  · {t("billed yearly", "تُحتسب سنوياً")}
                </span>
              )}
            </div>

            {/* Plan limits matched */}
            <div className="grid grid-cols-3 gap-3 mb-6 relative">
              <LimitCell label={t("Chats", "محادثات")} value={formatAr(plan.chats, isAr)} />
              <LimitCell label={t("Automations", "أتمتات")} value={`${formatAr(plan.automations, isAr)}/${formatAr(21, isAr)}`} />
              <LimitCell label={t("Writes/mo", "كتابة/شهر")} value={formatAr(plan.writes, isAr)} />
            </div>

            {/* Savings */}
            <div className="relative rounded-xl bg-brand-primary/8 border border-brand-primary/25 p-4 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={16} className="text-brand-primary" strokeWidth={2.4} />
                <span className="text-[12px] uppercase tracking-[0.16em] text-brand-primary font-bold">
                  {t("Your savings vs hiring staff", "حجم التوفير مقارنة بالتوظيف")}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-muted font-bold mb-1">
                    {t("Per month", "شهرياً")}
                  </div>
                  <div className="text-[22px] md:text-[26px] font-bold font-mono text-primary leading-tight">
                    {formatAr(monthlySaving, isAr)}{" "}
                    <span className="text-[13px] font-semibold text-secondary">{t("SAR", "ريال")}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-muted font-bold mb-1">
                    {t("Per year", "سنوياً")}
                  </div>
                  <div className="text-[22px] md:text-[26px] font-bold font-mono text-primary leading-tight">
                    {formatAr(yearlySaving, isAr)}{" "}
                    <span className="text-[13px] font-semibold text-secondary">{t("SAR", "ريال")}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-brand-primary/15 flex items-center gap-2">
                <BadgeCheck size={15} className="text-brand-primary" strokeWidth={2.4} />
                <span className="text-[13px] text-secondary">
                  {t(
                    `≈ ${reps} customer-service ${reps === 1 ? "rep" : "reps"} you don't need to hire`,
                    `= ${formatAr(reps, isAr)} موظف خدمة عملاء ما تحتاج توظيفهم`,
                  )}
                </span>
              </div>
            </div>

            <a
              href="#"
              className="relative inline-flex items-center justify-center gap-2 theme-btn-accent rounded-full py-3 text-[14px] font-bold transition-all hover:-translate-y-[1px]"
            >
              {plan.id === "starter"
                ? t(`Start ${plan.name.en} free for 7 days`, `جرّب ${plan.name.ar} مجاناً ٧ أيام`)
                : t(`Get ${plan.name.en}`, `اشترك بـ ${plan.name.ar}`)}
              <ArrowEnd size={16} strokeWidth={2.6} />
            </a>

            <p className="relative text-center text-[11px] text-faint mt-3 leading-relaxed">
              {t(
                `Manual cost estimate: ${formatAr(reps, isAr)} × ${formatAr(REP_SALARY, isAr)} SAR = ${formatAr(manualCost, isAr)} SAR / month`,
                `حساب التكلفة اليدوية: ${formatAr(reps, isAr)} × ${formatAr(REP_SALARY, isAr)} ريال = ${formatAr(manualCost, isAr)} ريال شهرياً`,
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reusable bits ─── */
function SliderRow({
  icon: Icon, label, value, valueLabel, min, max, step, onChange, helper, last = false,
}: {
  icon: typeof MessageCircle;
  label: string;
  value: number;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  helper?: string;
  last?: boolean;
}) {
  return (
    <div className={`${last ? "" : "mb-7"}`}>
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary">
            <Icon size={16} strokeWidth={2.2} />
          </span>
          <span className="text-[14px] font-semibold text-primary">{label}</span>
        </div>
        <span className="text-[18px] font-bold font-mono text-primary tabular-nums">{valueLabel}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[var(--brand-primary)] bg-ghost-strong"
      />
      {helper && (
        <p className="text-[11.5px] text-faint mt-2 leading-relaxed">{helper}</p>
      )}
    </div>
  );
}

function LimitCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-ghost border border-subtle px-3 py-2.5 text-center">
      <div className="text-[10px] uppercase tracking-[0.14em] text-muted font-bold mb-0.5">{label}</div>
      <div className="text-[14px] font-bold text-primary font-mono">{value}</div>
    </div>
  );
}
