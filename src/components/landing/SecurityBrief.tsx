"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SecurityBrief() {
  const t = useTranslations("Testimonials");
  const testimonials = [
    { quote: t("t1_quote"), author: t("t1_author") },
    { quote: t("t2_quote"), author: t("t2_author") },
    { quote: t("t3_quote"), author: t("t3_author") },
  ];
  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-start"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] max-w-5xl me-auto ms-0">
            {t("heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-subtle bg-surface-elevated p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 mb-5">
                <Quote size={18} className="text-brand-primary" strokeWidth={1.8} />
              </div>
              <p className="text-[16px] leading-[1.8] text-primary mb-5">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-brand-primary/12 border border-brand-primary/20 flex items-center justify-center text-brand-primary text-sm font-bold">
                  {item.author[0]}
                </div>
                <span className="text-sm text-secondary">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
