"use client";

import { motion } from "framer-motion";
import MarqueeScroll from "@/components/ui/MarqueeScroll";

const testimonials = [
  {
    username: "عميل",
    text: "وين طلبي رقم 4521؟",
    avatar: "ط",
  },
  {
    username: "عميل",
    text: "أبغى أغيّر العنوان قبل الشحن.",
    avatar: "ع",
  },
  {
    username: "عميل",
    text: "المقاس طلع غير مناسب. كيف أستبدله؟",
    avatar: "ق",
  },
  {
    username: "مالك المتجر",
    text: "كم طلب متأخر يحتاج متابعة اليوم؟",
    avatar: "م",
  },
  {
    username: "مالك المتجر",
    text: "أرسل لي تقرير الليلة على واتساب قبل 8 الصباح.",
    avatar: "ص",
  },
  {
    username: "العمل اليومي",
    text: "راجع المخزون. رد على التقييمات. أكد الطلبات المعلقة.",
    avatar: "ي",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[300px] flex-shrink-0 bg-surface-elevated border border-brand-primary/20 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm font-bold">
          {t.avatar}
        </div>
        <span className="text-sm text-brand-primary font-medium">{t.username}</span>
      </div>
      <p className="text-sm text-faint leading-relaxed">{t.text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset overflow-hidden">
      <div className="max-w-[1400px] mx-auto mb-12">
        {/* Label */}
        <span className="text-sm text-secondary block mb-4 text-right">المشكلة اليومية</span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-right mb-8"
        >
          هذا هو العمل الذي
          <br />
          يستهلك يوم التاجر.
        </motion.h2>

        {/* Feature pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-sm text-faint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            هذا ما يأخذه وصول عنك.
          </div>
        </motion.div>
      </div>

      {/* Marquee of repeated store tasks */}
      <div className="relative">
        <div className="mb-4">
          <MarqueeScroll speed={36}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </MarqueeScroll>
        </div>

        <div>
          <MarqueeScroll speed={42} reverse>
            {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </MarqueeScroll>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-inset to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-inset to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
