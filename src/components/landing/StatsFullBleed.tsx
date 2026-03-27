"use client";

import { motion } from "framer-motion";
import CounterNumber from "@/components/ui/CounterNumber";

export default function StatsFullBleed() {
  return (
    <section className="relative py-0">
      {/* Full-bleed stats section with grid lines — exact Botpress pattern */}
      <div className="relative grid-lines min-h-[400px] md:min-h-[500px] bg-[#080808] flex items-center">
        {/* Decorative arc curves like Botpress */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 500" fill="none" preserveAspectRatio="none">
            <path d="M0 400 Q350 100 700 250 T1400 100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
            <path d="M0 300 Q350 50 700 200 T1400 50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Two huge stat columns */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Right stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-right py-16 md:py-24"
          >
            <span className="text-sm text-[#8a8f98] block mb-4">المتاجر النشطة</span>
            <div className="font-mono text-[60px] md:text-[100px] lg:text-[130px] font-medium leading-none text-white/90 tracking-tight">
              <CounterNumber end={200} suffix="+" className="font-mono" />
            </div>
            <span className="text-base text-[#8a8f98] mt-4 block">متجر يثق بوصول</span>
          </motion.div>

          {/* Left stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-right py-16 md:py-24 md:border-r border-white/[0.04] md:pr-12"
          >
            <span className="text-sm text-[#8a8f98] block mb-4">نتائج حقيقية</span>
            <div className="font-mono text-[60px] md:text-[100px] lg:text-[130px] font-medium leading-none text-white/90 tracking-tight">
              <CounterNumber end={4200} suffix="+" className="font-mono" />
            </div>
            <span className="text-base text-[#8a8f98] mt-4 block">رسالة يومياً</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
