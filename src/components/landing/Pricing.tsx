"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "التجربة",
    price: { monthly: "مجانية", yearly: "مجانية" },
    priceNum: { monthly: 0, yearly: 0 },
    features: [
      "500 نقطة",
      "موظفان فعالان",
      "واتساب واحد",
      "دعم مجتمعي",
    ],
    cta: "ابدأ مجاناً",
    featured: false,
  },
  {
    name: "النمو",
    price: { monthly: "299", yearly: "239" },
    priceNum: { monthly: 299, yearly: 239 },
    features: [
      "4,000 نقطة / شهر",
      "كل الموظفين",
      "تقارير أسبوعية",
      "دعم واتساب",
      "تكامل سلة + Zid",
    ],
    cta: "ابدأ تجربة 14 يوم",
    featured: true,
    badge: "الأكثر شعبية",
  },
  {
    name: "الاحترافي",
    price: { monthly: "599", yearly: "479" },
    priceNum: { monthly: 599, yearly: 479 },
    features: [
      "10,000 نقطة / شهر",
      "ذكاء المتجر",
      "تحليل المنافسين",
      "دعم أولوية",
      "مدير حساب مخصص",
    ],
    cta: "تحدث مع الفريق",
    featured: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 px-6 bg-[#0a0a0a]">
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
            الأسعار
          </h2>
          <p className="text-[#8a8f98] text-base mb-8">
            ابدأ مجاناً. ادفع فقط عندما تنمو.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#141414] rounded-full p-1 border border-white/[0.06]">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                !yearly ? "bg-white text-[#0a0a0a] font-medium" : "text-[#8a8f98]"
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                yearly ? "bg-white text-[#0a0a0a] font-medium" : "text-[#8a8f98]"
              }`}
            >
              سنوي
              <span className="text-[10px] bg-brand-primary text-[#080B0F] px-1.5 py-0.5 rounded-full font-bold">
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
                  ? "bg-[#1a1a1a] border-2 border-brand-primary/30 shadow-lg shadow-brand-primary/5"
                  : "bg-[#111111] border border-white/[0.06]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-[#080B0F] text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                {plan.priceNum.monthly === 0 ? (
                  <span className="text-3xl font-bold">مجانية</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-mono">
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-[#8a8f98] text-sm">ريال/شهر</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#8a8f98]">
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
                    ? "bg-brand-primary text-[#080B0F] hover:bg-brand-primary/90"
                    : "bg-white/[0.06] text-white border border-white/[0.10] hover:bg-white/[0.10]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
