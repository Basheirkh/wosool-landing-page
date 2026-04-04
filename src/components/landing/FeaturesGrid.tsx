"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Brain, Check, X, ArrowLeft } from "lucide-react";

const features = [
  {
    title: "يعرف عملاءك",
    description: "عميل رسلك قبل",
    descriptionHighlight: "وصول يتذكر اسمه وطلباته وآخر مشكلته.",
    descriptionEnd: "ما يسأل \"كيف أقدر أساعدك؟\" كل مرة.",
    icon: UserCheck,
    accent: "#25D366",
  },
  {
    title: "يسألك قبل ما يغلط",
    description: "عميل يبي استرداد 350 ريال. وصول ما يرد لحاله — يسألك أول: \"توافق؟\"",
    icon: ShieldCheck,
    accent: "#60A5FA",
    hasButtons: true,
  },
  {
    title: "يتعلم من متجرك — مو من الإنترنت",
    description: "يعرف أسعارك. مخزونك. سياساتك. ما يخترع إجابات من عنده.",
    icon: Brain,
    accent: "#A78BFA",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="product" className="relative px-5 py-16 md:px-6 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-right max-w-4xl mr-0 ml-auto">
            مو بوت. موظف يفهمك.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-[26px] border border-subtle bg-surface-elevated p-7"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl mb-5"
                  style={{ background: `${feature.accent}14`, border: `1px solid ${feature.accent}24` }}
                >
                  <Icon size={22} style={{ color: feature.accent }} strokeWidth={1.8} />
                </div>
                <h3 className="text-[18px] font-bold mb-3">{feature.title}</h3>
                {feature.descriptionHighlight ? (
                  <p className="text-sm text-secondary leading-relaxed">
                    {feature.description} <ArrowLeft size={12} className="inline text-brand-primary mx-1" strokeWidth={2} /> {feature.descriptionHighlight} {feature.descriptionEnd}
                  </p>
                ) : (
                  <p className="text-sm text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                )}

                {feature.hasButtons && (
                  <div className="flex gap-2 mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/12 text-brand-primary px-4 py-2 text-sm font-medium">
                      <Check size={14} strokeWidth={2.5} />
                      توافق
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-subtle px-4 py-2 text-sm text-secondary">
                      <X size={14} strokeWidth={2.5} />
                      لا
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
