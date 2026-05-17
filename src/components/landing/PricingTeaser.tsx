"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Gift, Sparkles } from "lucide-react";
import { useLocale } from "next-intl";

type BiStr = { ar: string; en: string };

type BadgeStyle = "trial" | "popular";

const QUICK: { name: BiStr; price: BiStr; points: BiStr[]; emoji: string; badge?: BiStr; badgeStyle?: BadgeStyle; color: string }[] = [
  {
    emoji: "🟢",
    name: { ar: "الانطلاق", en: "Starter" },
    price: { ar: "٤٩٩ ريال / شهر", en: "499 SAR / mo" },
    badge: { ar: "تجربة ٧ أيام مجانية", en: "7-day free trial" },
    badgeStyle: "trial",
    points: [
      { ar: "حتى ٩٠٠ محادثة فريدة شهرياً", en: "Up to 900 unique conversations/month" },
      { ar: "موظفان ذكاء: المالك والعملاء على واتساب", en: "2 AI agents: Owner & Customer on WhatsApp" },
      { ar: "يرد على العملاء ٢٤/٧ ويدير الطلبات والشحن", en: "Replies to customers 24/7 + manages orders & shipping" },
      { ar: "تقرير صباحي + تنبيهات نفاذ المخزون", en: "Morning brief + low-stock alerts" },
      { ar: "٨ أتمتات جاهزة (سلات، طلبات، شحن، مراجعات)", en: "8 ready automations (carts, orders, shipping, reviews)" },
      { ar: "٥٠٠ أمر كتابة شهرياً مع حماية PIN", en: "500 write actions/month with PIN" },
      { ar: "خط واتساب · المالك يقدر يتدخل في أي محادثة", en: "1 WhatsApp line · owner can step into any chat" },
      { ar: "دعم فني عبر واتساب والبريد", en: "Customer support via WhatsApp & email" },
    ],
    color: "border-emerald-500/25",
  },
  {
    emoji: "🔵",
    name: { ar: "احترافي", en: "Professional" },
    price: { ar: "١٬٢٩٩ ريال / شهر", en: "1,299 SAR / mo" },
    badge: { ar: "الأكثر اختياراً", en: "Most popular" },
    badgeStyle: "popular",
    points: [
      { ar: "حتى ٢٬٤٠٠ محادثة فريدة شهرياً", en: "Up to 2,400 unique conversations/month" },
      { ar: "٣ موظفي ذكاء: المالك، العملاء، والتحليلات", en: "3 AI agents: Owner, Customer, Intelligence" },
      { ar: "٢١ أتمتة جاهزة (الأتمتات الكاملة لرحلة العميل)", en: "21 ready automations (full customer-journey set)" },
      { ar: "تقرير صباحي يومي محسن + تنبيهات المخزون", en: "Enhanced daily morning brief + inventory alerts" },
      { ar: "٢٬٥٠٠ أمر كتابة شهرياً مع حماية PIN", en: "2,500 write actions/month with PIN" },
      { ar: "تقارير ذكية شهرية من موظف التحليلات", en: "Smart monthly reports from the Intelligence agent" },
      { ar: "خط واتساب · رقمان للفريق · تدخل المالك يدوياً", en: "1 WhatsApp line · 2 team numbers · owner step-in" },
      { ar: "استرداد السلة المتروكة — حتى ٤ متابعات لكل سلة", en: "Abandoned-cart recovery — up to 4 follow-ups per cart" },
      { ar: "أولوية الدعم الفني عبر واتساب والبريد", en: "Priority support via WhatsApp & email" },
    ],
    color: "border-brand-primary/35",
  },
  {
    emoji: "🟣",
    name: { ar: "متقدم", en: "Advanced" },
    price: { ar: "٢٬٩٩٩ ريال / شهر", en: "2,999 SAR / mo" },
    points: [
      { ar: "حتى ٥٬٥٠٠ محادثة فريدة شهرياً (واتساب + ويدجت)", en: "Up to 5,500 conversations/mo (WhatsApp + Widget)" },
      { ar: "٤ موظفي ذكاء + ويدجت مبيعات على متجرك", en: "4 AI agents + sales widget on your storefront" },
      { ar: "ويدجت يحوّل زوار متجرك إلى محادثات مبيعات", en: "Widget converts visitors into sales chats" },
      { ar: "جميع الـ٢١ أتمتة لرحلة العميل الكاملة", en: "All 21 automations for the full customer journey" },
      { ar: "١٠٬٠٠٠ أمر كتابة شهرياً مع حماية PIN", en: "10,000 write actions/month with PIN protection" },
      { ar: "تقارير ذكية موسّعة من موظف التحليلات", en: "Expanded smart reports from the Intelligence agent" },
      { ar: "خط واتساب · ٣ أرقام للفريق · تدخل المالك أو الفريق", en: "1 WhatsApp line · 3 team numbers · owner/team step-in" },
      { ar: "أولوية الدعم + مدير حساب مخصّص", en: "Priority support + dedicated account manager" },
      { ar: "أولوية الوصول للميزات الجديدة", en: "Early access to new features" },
    ],
    color: "border-amber-400/30",
  },
];

const HIGHLIGHTS: BiStr[] = [
  { ar: "بدون شحن رصيد · بدون رسوم مفاجئة", en: "No top-ups · no surprise charges" },
  { ar: "حماية PIN في كل الباقات", en: "PIN protection on every plan" },
  { ar: "سياسة استخدام عادلة واضحة", en: "Clear fair-use policy" },
];

export default function PricingTeaser() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);
  const ArrowEnd = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="pricing" className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 text-brand-primary px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} strokeWidth={2.5} />
            {t("Pricing", "الباقات")}
          </div>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold mb-3 leading-tight">
            {t("Plans for every stage of your store's growth", "باقات لكل مرحلة من نمو متجرك")}
          </h2>
          <p className="text-secondary text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed">
            {t(
              "Three plans. Start with a 7-day free trial — upgrade anytime as your store grows.",
              "ثلاث باقات. ابدأ بتجربة ٧ أيام مجانية — وارتقِ متى ما احتجت.",
            )}
          </p>
        </motion.div>

        {/* 3 quick cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {QUICK.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-2xl border-2 ${q.color} bg-surface-elevated p-5 flex flex-col relative`}
            >
              {q.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 text-[11px] font-bold text-white px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-lg ring-2 ring-surface-elevated"
                  style={{
                    backgroundColor: q.badgeStyle === "trial" ? "#10b981" : "#F59E0B",
                    boxShadow:
                      q.badgeStyle === "trial"
                        ? "0 10px 25px -3px rgba(16,185,129,0.45)"
                        : "0 10px 25px -3px rgba(245,158,11,0.45)",
                  }}
                >
                  {q.badgeStyle === "trial" ? (
                    <Gift size={12} strokeWidth={2.6} />
                  ) : (
                    <Sparkles size={12} strokeWidth={2.6} />
                  )}
                  {q.badge[isAr ? "ar" : "en"]}
                </span>
              )}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl leading-none">{q.emoji}</span>
                <h3 className="text-[17px] font-bold text-primary">{q.name[isAr ? "ar" : "en"]}</h3>
              </div>
              <ul className="space-y-1.5 mb-4 flex-1">
                {q.points.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-1.5 text-[12.5px] text-secondary leading-relaxed">
                    <Check size={12} className="text-brand-primary mt-0.5 flex-shrink-0" strokeWidth={2.6} />
                    <span>{p[isAr ? "ar" : "en"]}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[18px] font-bold text-primary font-mono">
                {q.price[isAr ? "ar" : "en"]}
              </div>
            </motion.div>
          ))}
        </div>

        {/* highlights row */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8">
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} className="inline-flex items-center gap-1.5 text-[13px] text-secondary">
              <Check size={14} className="text-brand-primary" strokeWidth={2.6} />
              <span>{h[isAr ? "ar" : "en"]}</span>
            </div>
          ))}
        </div>

        {/* CTA to pricing page */}
        <div className="text-center">
          <Link
            href={`/${locale}/pricing`}
            className="inline-flex items-center gap-2 theme-btn-accent rounded-full px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-[1px]"
          >
            {t("View full pricing & compare plans", "شاهد كل الباقات والمقارنة الكاملة")}
            <ArrowEnd size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
