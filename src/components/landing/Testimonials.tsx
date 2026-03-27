"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    username: "@أحمد_التاجر",
    text: "وصول غيّر طريقة إدارتي للمتجر تماماً. الوكلاء يردون على العملاء بسرعة مذهلة، وأنا أركز على تطوير المنتجات.",
    avatar: "أ",
  },
  {
    username: "@سارة_ستور",
    text: "أفضل استثمار عملته لمتجري. خدمة العملاء صارت 24/7 بدون ما أوظف أحد إضافي.",
    avatar: "س",
  },
  {
    username: "@متجر_الأناقة",
    text: "من أهم الأمور سهولة استخدام الأداة. والخطة المجانية سخية جداً. عدد التكاملات الممكنة أيضاً من الأشياء المفضلة لدي.",
    avatar: "م",
  },
  {
    username: "@خالد_شوب",
    text: "التقارير الذكية كل صباح وفّرت علي ساعات من التحليل. أعرف وضع متجري قبل ما أشرب قهوتي.",
    avatar: "خ",
  },
  {
    username: "@ريم_بوتيك",
    text: "وصول منصة رائعة مع مجتمع قوي من التجار. مرحبين ومستعدون لمشاركة خبراتهم ومواردهم ونشر أفضل الممارسات.",
    avatar: "ر",
  },
  {
    username: "@عبدالله_تك",
    text: "تسهّل وصول إدارة المتجر على واتساب بشكل كبير. التكامل مع سلة ممتاز والدعم سريع الاستجابة.",
    avatar: "ع",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[300px] flex-shrink-0 bg-[#1a1a1a] border border-brand-primary/20 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm font-bold">
          {t.avatar}
        </div>
        <span className="text-sm text-brand-primary font-medium">{t.username}</span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{t.text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto mb-12">
        {/* Label */}
        <span className="text-sm text-[#8a8f98] block mb-4 text-right">انضم إلى المجتمع</span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-right mb-8"
        >
          انضم إلى مجتمع التجار.
        </motion.h2>

        {/* Feature pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-sm text-white/70">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            عدد لا محدود من التكاملات! إنه مثالي لأي نوع من سير العمل ترغب في تنفيذه.
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling testimonial cards — Botpress pattern */}
      <div className="relative">
        {/* Row 1 — scrolls right */}
        <div className="overflow-hidden mb-4">
          <div
            className="flex gap-4 w-max"
            style={{ animation: "marquee 40s linear infinite" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left (reversed) */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 w-max"
            style={{ animation: "marquee 45s linear infinite reverse" }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
