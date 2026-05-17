"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Brain, Check, X, ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function FeaturesGrid() {
  const t = useTranslations("FeaturesGrid");
  const locale = useLocale();
  const ArrowFlowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const features = [
    {
      title: t("card1_title"),
      description: t("card1_description"),
      descriptionHighlight: t("card1_descriptionHighlight"),
      descriptionEnd: t("card1_descriptionEnd"),
      icon: UserCheck,
      accent: "#25D366",
    },
    {
      title: t("card2_title"),
      description: t("card2_description"),
      icon: ShieldCheck,
      accent: "#60A5FA",
      hasButtons: true,
    },
    {
      title: t("card3_title"),
      description: t("card3_description"),
      icon: Brain,
      accent: "#A78BFA",
    },
  ];

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
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-start max-w-4xl me-auto ms-0">
            {t("heading")}
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
                    {feature.description} <ArrowFlowIcon size={12} className="inline text-brand-primary mx-1" strokeWidth={2} /> {feature.descriptionHighlight} {feature.descriptionEnd}
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
                      {t("card2_yes")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-subtle px-4 py-2 text-sm text-secondary">
                      <X size={14} strokeWidth={2.5} />
                      {t("card2_no")}
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
