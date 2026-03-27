"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <section className="relative px-6 py-8">
      <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Right side in RTL — Artistic image/illustration */}
        <div className="md:w-[45%] relative bg-gradient-to-br from-[#2a1a4a] via-[#1a3040] to-[#0a2020] min-h-[300px] md:min-h-auto overflow-hidden">
          {/* Decorative artistic composition */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Abstract art placeholder — geometric shapes */}
            <div className="relative w-[300px] h-[400px]">
              {/* Vase shape */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120px] h-[200px] rounded-t-[60px] bg-gradient-to-b from-cyan-300/30 to-blue-400/20 border border-cyan-400/20" />
              {/* Plant stems */}
              <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2">
                <div className="w-[2px] h-[80px] bg-green-400/40 mx-auto" />
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/15 -translate-y-4" />
                <div className="w-12 h-12 rounded-full bg-green-600/15 border border-green-500/10 -translate-y-8 translate-x-6" />
              </div>
              {/* Books */}
              <div className="absolute bottom-0 right-0 w-16 h-6 bg-red-700/30 rounded-sm" />
              <div className="absolute bottom-6 right-2 w-14 h-5 bg-amber-700/25 rounded-sm" />
            </div>
          </div>

          {/* Matrix/code rain overlay — like Botpress */}
          <div className="absolute inset-0 opacity-[0.08] overflow-hidden pointer-events-none">
            <div className="font-mono text-[10px] text-white leading-none whitespace-pre-wrap break-all p-4">
              {Array(200).fill("01001010 وصول 11010100 ∞ 10101010 ").join("")}
            </div>
          </div>
        </div>

        {/* Left side in RTL — Giant stacked words + circular CTA */}
        <div className="md:w-[55%] bg-[#0a0a0a] relative overflow-hidden">
          {/* Matrix decoration in background */}
          <div className="absolute inset-0 opacity-[0.04] overflow-hidden pointer-events-none">
            <div className="font-mono text-[8px] text-white leading-tight whitespace-pre-wrap break-all p-4">
              {Array(300).fill("10110101 00101001 11001010 01010011 ").join("")}
            </div>
          </div>

          {/* Grid layout for words — Botpress style */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Row 1: "أطلق" */}
            <div className="flex-1 flex items-center justify-center border-b border-white/[0.04] px-8">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-white leading-none"
              >
                أطلق
              </motion.span>
            </div>

            {/* Row 2: "متجرك" */}
            <div className="flex-1 flex items-center justify-center border-b border-white/[0.04] px-8">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-white/80 leading-none"
              >
                متجرك
              </motion.span>
            </div>

            {/* Row 3: Circular CTA + "مع وصول ∞" */}
            <div className="flex-1 flex items-center justify-center gap-6 md:gap-10 px-8">
              {/* Circular CTA button — Botpress pattern */}
              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-brand-primary text-[#080B0F] flex flex-col items-center justify-center gap-1 font-semibold text-sm hover:scale-105 transition-transform flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                <span>ابدأ الآن</span>
              </motion.a>

              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-none"
              >
                مع{" "}
                <span className="text-brand-primary">وصول</span>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
