"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-background">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-start"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15]">
            {t("heading")}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full rounded-[20px] border border-subtle bg-surface-elevated p-5 md:p-6 text-start transition-all hover:border-medium"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[16px] font-semibold text-primary">{faq.q}</h3>
                  <span className={`flex-shrink-0 text-brand-primary transition-transform ${openIndex === index ? "rotate-45" : ""}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </div>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 text-[15px] text-secondary leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
