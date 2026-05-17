"use client";

import { motion } from "framer-motion";
import { Check, ChevronLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import MarqueeScroll from "@/components/ui/MarqueeScroll";

type TItem = { username: string; text: string; avatar: string; response: string };

function TestimonialCard({ t, brandLabel }: { t: TItem; brandLabel: string }) {
  return (
    <div className="w-[340px] flex-shrink-0 rounded-2xl border border-subtle bg-surface-elevated p-6 transition-shadow hover:shadow-lg hover:shadow-brand-primary/5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-brand-primary/14 border border-brand-primary/20 text-brand-primary flex items-center justify-center text-sm font-bold">
          {t.avatar}
        </div>
        <span className="text-sm text-primary font-medium">{t.username}</span>
      </div>
      <p className="text-[15px] text-faint leading-relaxed mb-4">{t.text}</p>
      <div
        className="relative overflow-hidden rounded-xl px-4 py-3 text-[13px] leading-relaxed"
        style={{
          background: "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.14), rgba(var(--brand-primary-rgb),0.06))",
          border: "1px solid rgba(var(--brand-primary-rgb),0.22)",
          boxShadow: "0 4px 16px rgba(0,217,126,0.08), inset 0 1px 0 rgba(0,217,126,0.10)",
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.424 10.58 46.872 28.387" width="12" height="7" aria-hidden="true">
              <path fill="#080B0F" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"/>
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-brand-primary">{brandLabel}</span>
          <Check size={13} className="text-brand-primary" strokeWidth={2.5} />
        </div>
        <span className="text-primary font-medium">{t.response}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("DailyWork");

  const testimonials: TItem[] = [
    { username: t("username_customer"), text: t("t1_text"), avatar: t("username_customer").charAt(0), response: t("t1_response") },
    { username: t("username_customer"), text: t("t2_text"), avatar: t("username_customer").charAt(0), response: t("t2_response") },
    { username: t("username_customer"), text: t("t3_text"), avatar: t("username_customer").charAt(0), response: t("t3_response") },
    { username: t("username_owner"), text: t("t4_text"), avatar: t("username_owner").charAt(0), response: t("t4_response") },
    { username: t("username_owner"), text: t("t5_text"), avatar: t("username_owner").charAt(0), response: t("t5_response") },
    { username: t("username_daily"), text: t("t6_text"), avatar: t("username_daily").charAt(0), response: t("t6_response") },
  ];

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset overflow-hidden">
      <div className="max-w-[1400px] mx-auto mb-12">
        <span className="text-sm text-secondary block mb-4 text-start">{t("eyebrow")}</span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-start mb-8"
        >
          {t("heading_line1")}
          <br />
          {t("heading_line2")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-sm text-faint">
            <ChevronLeft size={14} className="text-brand-primary rtl:scale-x-100 ltr:-scale-x-100" strokeWidth={2} />
            {t("tagline")}
          </div>
        </motion.div>
      </div>

      {/* Slow marquee rows */}
      <div className="relative">
        <div className="mb-5">
          <MarqueeScroll speed={55}>
            {testimonials.map((item, i) => (
              <TestimonialCard key={`a-${i}`} t={item} brandLabel="Wosool" />
            ))}
          </MarqueeScroll>
        </div>

        <div>
          <MarqueeScroll speed={65} reverse>
            {[...testimonials.slice(3), ...testimonials.slice(0, 3)].map((item, i) => (
              <TestimonialCard key={`b-${i}`} t={item} brandLabel="Wosool" />
            ))}
          </MarqueeScroll>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 end-0 w-40 bg-gradient-to-l from-[var(--bg-inset)] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 start-0 w-40 bg-gradient-to-r from-[var(--bg-inset)] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
