"use client";

import { motion } from "framer-motion";

export default function EditorialSplit() {
  return (
    <section className="relative px-6 pt-32 lg:pt-40 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[420px]"
      >
        {/* Right side in RTL — colored gradient with large word */}
        <div className="md:w-[55%] relative bg-gradient-to-bl from-[#2a1540] via-[#1a1040] to-[#0d1a2e] p-10 md:p-16 flex flex-col justify-end overflow-hidden">
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b4513]/20 via-transparent to-[#6b21a8]/10" />

          <div className="relative z-10">
            {/* Large stylized word — like "Managed" in Botpress */}
            <span className="block text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-none text-white/20 tracking-tight" style={{ fontStyle: "italic" }}>
              WhatsApp
            </span>
            <span className="block text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-none text-brand-primary/30 mt-1" style={{ fontStyle: "italic" }}>
              Native
            </span>
          </div>
        </div>

        {/* Left side in RTL — cream/white panel */}
        <div className="md:w-[45%] bg-[#f0ede6] p-10 md:p-14 flex flex-col justify-center relative">
          {/* Corner ↗ arrow — exact Botpress pattern */}
          <a
            href="#product"
            className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <span className="text-sm text-[#0a0a0a]/40 mb-6">تقديم</span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0a0a0a] leading-[1.15] mb-5">
            وكلاء ذكاء اصطناعي
            <br />
            مخصصون، يعملون
            <br />
            لأجلك.
          </h2>
          <p className="text-[#0a0a0a]/55 text-[15px] leading-relaxed max-w-sm">
            يقوم فريق وصول بتشغيل وكلاء الذكاء الاصطناعي لمتجرك، ونشرهم، وتحسينهم باستمرار — دون أي عبء تقني.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
