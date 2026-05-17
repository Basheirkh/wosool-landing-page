"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FooterCTA() {
  const t = useTranslations("FooterCTA");
  return (
    <section className="relative px-6 py-8">
      <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden min-h-[400px] md:min-h-[480px] bg-surface-inset relative">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(var(--brand-primary-rgb),0.12), transparent 50%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-6"
          >
            {t("heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-secondary leading-relaxed max-w-lg mb-10"
          >
            {t("body_line1")}
            <br />
            {t("body_line2")}
            <br />
            {t("body_line3")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link
              href="/#pricing"
              className="theme-btn-accent inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold"
            >
              <span>{t("cta")}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rtl:-scale-x-100"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
