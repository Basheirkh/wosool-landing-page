"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "الدخول",
    price: { monthly: "مجانية", yearly: "مجانية" },
    priceNum: { monthly: 0, yearly: 0 },
    features: [
      "الدخول للقائمة التجريبية",
      "موظفان أساسيان",
      "واتساب واحد",
      "تعلّم المنتج مبكراً",
    ],
    cta: "اطلب الدعوة",
    featured: false,
  },
  {
    name: "الانطلاق",
    price: { monthly: "299", yearly: "239" },
    priceNum: { monthly: 299, yearly: 239 },
    features: [
      "4 موظفين تشغيل",
      "طبقات الذاكرة الكاملة",
      "تقارير المالك",
      "دعم واتساب",
      "أفضل نقطة بداية لقطاع التجارة الإلكترونية",
    ],
    cta: "اطلب مقعدك",
    featured: true,
    badge: "أفضل نقطة بداية",
  },
  {
    name: "التشغيل الخاص",
    price: { monthly: "599", yearly: "479" },
    priceNum: { monthly: 599, yearly: 479 },
    features: [
      "ضوابط موافقة أعمق",
      "سعات أعلى",
      "دعم أولوية",
      "متطلبات تشغيل خاصة",
      "مراجعة استخدام مع الفريق",
    ],
    cta: "تحدث مع الفريق",
    featured: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold mb-4">
            التسعير المبكر
          </h2>
          <p className="text-secondary text-base mb-8">
            3 باقات. قرار أوضح.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-surface-elevated rounded-full p-1 border border-subtle">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                !yearly ? "theme-btn-primary font-medium" : "text-secondary"
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                yearly ? "theme-btn-primary font-medium" : "text-secondary"
              }`}
            >
              سنوي
              <span className="text-[10px] bg-brand-primary text-on-brand px-1.5 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.featured
                  ? "bg-surface-elevated border-2 border-brand-primary/30 shadow-lg shadow-brand-primary/5"
                  : "bg-surface border border-subtle"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-brand-primary px-4 py-1 text-xs font-bold text-on-brand shadow-[0_10px_22px_rgba(0,0,0,0.12)] ring-4 ring-[var(--bg-inset)]">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-secondary mb-4">
                {plan.name === "الدخول"
                  ? "لمن يريد أن يرى المنتج مبكراً قبل الالتزام."
                  : plan.name === "الانطلاق"
                    ? "للعمل أونلاين الذي يريد تشغيل يومه فعلياً على واتساب."
                    : "للأعمال التي تحتاج ضوابط وتشغيلاً أقرب للخصوصية."}
              </p>

              {/* Price */}
              <div className="mb-6">
                {plan.priceNum.monthly === 0 ? (
                  <span className="text-3xl font-bold">بالدعوة</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-mono">
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-secondary text-sm">ريال/شهر</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                    <span className="text-brand-primary text-xs flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block text-center rounded-full py-3 text-sm font-medium transition-all hover:-translate-y-[1px] ${
                  plan.featured
                    ? "bg-brand-primary text-on-brand hover:bg-brand-primary/90"
                    : "bg-ghost-strong text-primary border border-medium hover:bg-ghost-strong"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-8 rounded-2xl border border-subtle bg-surface p-6 text-right"
        >
          <p className="text-sm text-faint leading-relaxed">
            افهم هل هذا مناسب لك الآن.
            <span className="text-secondary"> إذا كنت تريد التشغيل لا البناء من الصفر، فهنا تبدأ.</span>
          </p>
          <p className="text-sm text-secondary leading-relaxed mt-3">
            إذا كانت حالتك خاصة، تحدث مع الفريق.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
