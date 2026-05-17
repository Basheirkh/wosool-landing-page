"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Building2, Gift } from "lucide-react";
import { useLocale } from "next-intl";

type BiStr = { ar: string; en: string };

const SHOW_ENTERPRISE = false;

type Card = {
  emoji: string;
  name: BiStr;
  points: BiStr[];
  price?: { monthly: string; yearly: string };
  priceCustom?: BiStr;
  cta: BiStr;
  ctaHref: string;
  variant: "starter" | "featured" | "premium" | "enterprise";
  badge?: BiStr;
  badgeIcon?: typeof Sparkles;
  color: string;
  ctaStyle: string;
  badgeStyle: string;
};

const CARDS: Card[] = [
  {
    emoji: "🟢",
    name: { ar: "الانطلاق", en: "Starter" },
    price: { monthly: "499", yearly: "399" },
    points: [
      { ar: "حتى ٩٠٠ محادثة فريدة شهرياً", en: "Up to 900 unique conversations/month" },
      { ar: "موظفان ذكاء: المالك والعملاء على واتساب", en: "2 AI agents: Owner & Customer on WhatsApp" },
      { ar: "يرد على العملاء ٢٤/٧ ويدير الطلبات والشحن", en: "Replies to customers 24/7 + manages orders & shipping" },
      { ar: "تقرير صباحي يومي + تنبيهات نفاذ المخزون", en: "Daily morning brief + low-stock alerts" },
      { ar: "٨ أتمتات جاهزة (سلات، طلبات، شحن، مراجعات)", en: "8 ready automations (carts, orders, shipping, reviews)" },
      { ar: "٥٠٠ أمر كتابة شهرياً مع حماية PIN", en: "500 write actions/month with PIN protection" },
      { ar: "خط واتساب واحد · المالك يقدر يتدخل في أي محادثة", en: "1 WhatsApp line · owner can step into any chat" },
      { ar: "دعم فني عبر واتساب والبريد", en: "Customer support via WhatsApp & email" },
    ],
    cta: { ar: "ابدأ التجربة المجانية ٧ أيام", en: "Start 7-day free trial" },
    ctaHref: "#",
    variant: "starter",
    badge: { ar: "تجربة ٧ أيام مجانية", en: "7-day free trial" },
    badgeIcon: Gift,
    color: "border-emerald-500/25 bg-surface",
    ctaStyle: "bg-ghost-strong text-primary border border-medium hover:bg-ghost-strong transition-all hover:-translate-y-[1px]",
    badgeStyle: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 ring-2 ring-surface-elevated",
  },
  {
    emoji: "🔵",
    name: { ar: "احترافي", en: "Professional" },
    price: { monthly: "1,299", yearly: "1,039" },
    points: [
      { ar: "حتى ٢٬٤٠٠ محادثة فريدة شهرياً", en: "Up to 2,400 unique conversations/month" },
      { ar: "٣ موظفي ذكاء: المالك، العملاء، والتحليلات", en: "3 AI agents: Owner, Customer, Intelligence" },
      { ar: "٢١ أتمتة جاهزة (الأتمتات الكاملة لرحلة العميل)", en: "21 ready automations (full customer-journey set)" },
      { ar: "تقرير صباحي يومي محسن + تنبيهات المخزون", en: "Enhanced daily morning brief + inventory alerts" },
      { ar: "٢٬٥٠٠ أمر كتابة شهرياً مع حماية PIN", en: "2,500 write actions/month with PIN protection" },
      { ar: "تقارير ذكية شهرية من موظف التحليلات", en: "Smart monthly reports from the Intelligence agent" },
      { ar: "خط واتساب · رقمان للفريق · تدخل المالك في أي محادثة", en: "1 WhatsApp line · 2 team numbers · owner can step in" },
      { ar: "استرداد السلة المتروكة — حتى ٤ متابعات لكل سلة", en: "Abandoned-cart recovery — up to 4 follow-ups per cart" },
      { ar: "أولوية الدعم الفني عبر واتساب والبريد", en: "Priority support via WhatsApp & email" },
    ],
    cta: { ar: "اشترك باحترافي", en: "Get Professional" },
    ctaHref: "#",
    variant: "featured",
    badge: { ar: "الأكثر اختياراً", en: "Most popular" },
    badgeIcon: Sparkles,
    color: "bg-surface-elevated border-2 border-brand-primary/35 shadow-lg shadow-brand-primary/8",
    ctaStyle: "theme-btn-accent",
    badgeStyle: "bg-brand-primary text-white shadow-lg shadow-brand-primary/40 ring-2 ring-surface-elevated",
  },
  {
    emoji: "🟣",
    name: { ar: "متقدم", en: "Advanced" },
    price: { monthly: "2,999", yearly: "2,399" },
    points: [
      { ar: "حتى ٥٬٥٠٠ محادثة فريدة شهرياً (واتساب + ويدجت)", en: "Up to 5,500 conversations/mo (WhatsApp + Widget)" },
      { ar: "٤ موظفي ذكاء + ويدجت مبيعات على متجرك", en: "4 AI agents + sales widget on your storefront" },
      { ar: "ويدجت يحوّل زوار متجرك إلى محادثات مبيعات", en: "Widget converts storefront visitors into sales chats" },
      { ar: "جميع الـ٢١ أتمتة لرحلة العميل الكاملة", en: "All 21 automations for the full customer journey" },
      { ar: "١٠٬٠٠٠ أمر كتابة شهرياً مع حماية PIN", en: "10,000 write actions/month with PIN protection" },
      { ar: "تقارير ذكية موسّعة من موظف التحليلات", en: "Expanded smart reports from the Intelligence agent" },
      { ar: "خط واتساب · ٣ أرقام للفريق · تدخل المالك أو الفريق", en: "1 WhatsApp line · 3 team numbers · owner/team can step in" },
      { ar: "أولوية الدعم + مدير حساب مخصّص", en: "Priority support + dedicated account manager" },
      { ar: "أولوية الوصول للميزات الجديدة", en: "Early access to new features" },
    ],
    cta: { ar: "اشترك بمتقدم", en: "Get Advanced" },
    ctaHref: "#",
    variant: "premium",
    badge: { ar: "للعلامات المتميزة", en: "For premium brands" },
    badgeIcon: Crown,
    color: "bg-surface-elevated border-2 border-amber-400/30 shadow-lg shadow-amber-500/5",
    ctaStyle: "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:opacity-90 transition-all hover:-translate-y-[1px]",
    badgeStyle: "bg-amber-500 text-white shadow-lg shadow-amber-500/40 ring-2 ring-surface-elevated",
  },
];

export default function Pricing() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);
  const [yearly, setYearly] = useState(false);
  const currencyPerMonth = isAr ? "ريال / شهر" : "SAR / mo";

  return (
    <section id="pricing" className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold mb-4 leading-tight">
            {t("Pick the right plan for your store", "اختر الباقة المناسبة لمتجرك")}
          </h2>
          <p className="text-secondary text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed">
            {t(
              "No complexity. No top-ups. No surprise charges.",
              "بدون تعقيد. بدون شحن رصيد. بدون رسوم مفاجئة.",
            )}
          </p>
          <div className="inline-flex items-center gap-3 bg-surface-elevated rounded-full p-1 border border-subtle mt-6">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                !yearly ? "theme-btn-primary font-medium" : "text-secondary"
              }`}
            >
              {t("Monthly", "شهري")}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                yearly ? "theme-btn-primary font-medium" : "text-secondary"
              }`}
            >
              {t("Yearly", "سنوي")}
              <span className="theme-badge-accent text-[10px] px-2 py-0.5 rounded-full font-bold">
                {t("-20%", "-20%")}
              </span>
            </button>
          </div>
        </motion.div>

        <div className={`grid gap-5 max-w-[1400px] mx-auto pt-6 items-start md:grid-cols-2 ${SHOW_ENTERPRISE ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
          {CARDS.filter((c) => SHOW_ENTERPRISE || c.variant !== "enterprise").map((card, i) => {
            const BadgeIcon = card.badgeIcon ?? Sparkles;
            const showYearly = yearly && card.price;

            return (
              <motion.div
                key={card.variant}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl p-6 flex flex-col ${card.color}`}
              >
                {card.badge && (() => {
                  const badgeColor =
                    card.variant === "featured"
                      ? "#F59E0B"
                      : card.variant === "premium"
                        ? "#F59E0B"
                        : "#10b981";
                  const shadowRGBA =
                    card.variant === "featured" || card.variant === "premium"
                      ? "rgba(245,158,11,0.45)"
                      : "rgba(16,185,129,0.45)";
                  return (
                    <div className="mb-4 flex justify-center -mt-11">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white ring-2 ring-surface-elevated"
                        style={{
                          backgroundColor: badgeColor,
                          boxShadow: `0 10px 25px -3px ${shadowRGBA}`,
                        }}
                      >
                        <BadgeIcon size={12} strokeWidth={2.5} />
                        {card.badge[isAr ? "ar" : "en"]}
                      </span>
                    </div>
                  );
                })()}

                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-xl leading-none">{card.emoji}</span>
                  <h3 className="text-lg font-semibold">{card.name[isAr ? "ar" : "en"]}</h3>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-subtle">
                  {card.price ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold font-mono">
                          {showYearly ? card.price.yearly : card.price.monthly}
                        </span>
                        <span className="text-secondary text-sm">{currencyPerMonth}</span>
                      </div>
                      {showYearly && (
                        <span className="text-[11px] text-faint mt-1 block">
                          {t("billed yearly", "تُحتسب سنوياً")}
                        </span>
                      )}
                    </>
                  ) : (
                    <div className="text-[22px] font-bold text-primary">
                      {card.priceCustom![isAr ? "ar" : "en"]}
                    </div>
                  )}
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6 flex-1">
                  {card.points.map((p, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-[13px] text-secondary leading-relaxed">
                      <Check size={14} className="text-brand-primary flex-shrink-0 mt-0.5" strokeWidth={2.6} />
                      <span>{p[isAr ? "ar" : "en"]}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={card.ctaHref}
                  className={`block text-center rounded-full py-3 text-sm font-semibold ${card.ctaStyle}`}
                >
                  {card.cta[isAr ? "ar" : "en"]}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
