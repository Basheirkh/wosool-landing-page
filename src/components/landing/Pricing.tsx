"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "النمو",
    price: { monthly: "299", yearly: "239" },
    description: "كل شيء تحتاجه لتشغيل متجرك من واتساب.",
    features: [
      "4000 رصيد للمحادثات وأوامر المدير",
      "3 وكلاء ذكاء اصطناعي لمتجرك",
      "استعادة السلال المتروكة بذاكرة ذكية",
      "حفظ 5000 جهة اتصال في بياناتك",
      "رد آلي للعملاء عبر الواتساب 24/7",
      "استعلامين يومياً لتحليل متجرك",
    ],
    cta: "جرّب 7 أيام مجاناً",
    featured: false,
  },
  {
    name: "المتكاملة",
    price: { monthly: "599", yearly: "479" },
    description: "للمتاجر اللي تبي تحكّم أكثر وأتمتة أعمق.",
    features: [
      "تشمل كافة مميزات باقة النمو",
      "5500 رصيد للمحادثات وأوامر المدير",
      "استعادة سلال مطورة بسياق أعمق",
      "حفظ جهات اتصال بلا حدود",
      "17 مسار أتمتة جاهز للعمل فوراً",
      "وصول مبكر للوكلاء والميزات الجديدة",
      "6 استعلامات يومية لتحليل متجرك",
    ],
    cta: "جرّب 7 أيام مجاناً",
    featured: true,
    badge: "الأكثر طلباً",
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
            ادفع أقل من راتب موظف — خذ 4 موظفين
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-surface-elevated rounded-full p-1 border border-subtle mt-6">
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
              <span className="theme-badge-accent text-[10px] px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto pt-6 overflow-visible">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.featured
                  ? "bg-surface-elevated border-2 border-brand-primary/30 shadow-lg shadow-brand-primary/5 pt-10"
                  : "bg-surface border border-subtle"
              }`}
            >
              {plan.badge && (
                <div className="mb-4 flex justify-center -mt-11">
                  <span className="theme-badge-accent inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles size={12} strokeWidth={2.5} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-secondary mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-mono">
                    {yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-secondary text-sm">ريال/شهر</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                    <Check size={14} className="text-brand-primary flex-shrink-0" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block text-center rounded-full py-3 text-sm font-semibold ${
                  plan.featured
                    ? "theme-btn-accent"
                    : "bg-ghost-strong text-primary border border-medium hover:bg-ghost-strong transition-all hover:-translate-y-[1px]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom notes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <p className="text-sm text-secondary leading-relaxed">
            اشتراك شهري. بدون عقد. ألغِ متى تبي.
          </p>
          <div className="mt-4 inline-flex rounded-[20px] border border-subtle bg-ghost px-6 py-4 text-sm text-faint">
            <span>موظف واحد = 3,000+ ريال/شهر</span>
            <span className="mx-3 text-secondary">|</span>
            <span className="text-brand-primary font-medium">وصول = 299 ريال/شهر x 4 موظفين</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
