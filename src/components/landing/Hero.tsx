"use client";

import { motion } from "framer-motion";
import TypewriterDemo from "@/components/ui/TypewriterDemo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[60px] px-6">
      {/* Outer wrapper with margin and rounded border — Botpress pattern */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl border border-white/[0.06] overflow-hidden min-h-[85vh] flex items-center justify-center">
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-[#0a0a0a] dot-grid" />

        {/* Radial green glow from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,217,126,0.06)_0%,_transparent_55%)]" />

        {/* 3D Floating Objects — wireframe line-art style like Botpress */}
        {/* WhatsApp icon — top right */}
        <div
          className="absolute top-[12%] right-[6%] opacity-60 hidden md:block"
          style={{
            animation: "float3d 6s ease-in-out infinite alternate",
            transformStyle: "preserve-3d",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="drop-shadow-[0_0_20px_rgba(0,217,126,0.3)]">
            <rect x="8" y="8" width="64" height="64" rx="16" stroke="#00D97E" strokeWidth="1.5" strokeDasharray="4 2" fill="rgba(0,217,126,0.05)" />
            <path d="M40 20C29 20 20 29 20 40c0 3.5 1 6.8 2.7 9.6L20 60l10.4-2.7c2.8 1.5 6 2.4 9.6 2.4 11 0 20-9 20-20S51 20 40 20z" stroke="#00D97E" strokeWidth="1.2" fill="none" />
            <path d="M47.5 44.4c-.6-.3-3.5-1.7-4-1.9-.5-.2-.9-.3-1.3.3s-1.5 1.9-1.9 2.3c-.3.4-.7.4-1.3.1-.6-.3-2.5-.9-4.7-2.9-1.7-1.5-2.9-3.4-3.2-4s0-.9.3-1.2c.3-.3.6-.7.9-1 .3-.3.4-.6.6-1 .2-.4.1-.7-.1-1-.1-.3-1.3-3.2-1.8-4.4-.5-1.1-1-.9-1.3-1-.3 0-.7 0-1.1 0s-1 .1-1.6.7c-.5.6-2 2-2 4.9s2.1 5.7 2.4 6.1c.3.4 4.2 6.4 10.1 8.9 1.4.6 2.5 1 3.4 1.2 1.4.4 2.7.4 3.7.2 1.1-.2 3.5-1.4 4-2.8.5-1.4.5-2.6.3-2.8-.1-.3-.5-.4-1.1-.7z" fill="#00D97E" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Abstract star shape — top left */}
        <div
          className="absolute top-[18%] left-[8%] opacity-50 hidden md:block"
          style={{
            animation: "float3d 6s ease-in-out infinite alternate",
            animationDelay: "-2s",
            transformStyle: "preserve-3d",
          }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className="drop-shadow-[0_0_15px_rgba(0,217,126,0.2)]">
            <polygon points="35,5 42,25 62,25 46,38 52,58 35,46 18,58 24,38 8,25 28,25" stroke="#00D97E" strokeWidth="1" fill="rgba(0,217,126,0.04)" />
            <circle cx="35" cy="35" r="12" stroke="#00D97E" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
          </svg>
        </div>

        {/* Phone outline — bottom right */}
        <div
          className="absolute bottom-[15%] right-[10%] opacity-40 hidden lg:block"
          style={{
            animation: "float3d 6s ease-in-out infinite alternate",
            animationDelay: "-4s",
            transformStyle: "preserve-3d",
          }}
        >
          <svg width="50" height="90" viewBox="0 0 50 90" fill="none">
            <rect x="2" y="2" width="46" height="86" rx="10" stroke="rgba(0,217,126,0.4)" strokeWidth="1" fill="rgba(0,217,126,0.02)" />
            <rect x="8" y="12" width="34" height="58" rx="2" stroke="rgba(0,217,126,0.2)" strokeWidth="0.5" fill="none" />
            <circle cx="25" cy="80" r="4" stroke="rgba(0,217,126,0.3)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        {/* Cube — bottom left */}
        <div
          className="absolute bottom-[20%] left-[6%] opacity-40 hidden md:block"
          style={{
            animation: "float3d 6s ease-in-out infinite alternate",
            animationDelay: "-1s",
            transformStyle: "preserve-3d",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L55 18V42L30 55L5 42V18L30 5Z" stroke="rgba(139,92,246,0.5)" strokeWidth="1" fill="rgba(139,92,246,0.03)" />
            <path d="M30 5L30 55" stroke="rgba(139,92,246,0.2)" strokeWidth="0.5" />
            <path d="M5 18L55 42" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5" />
            <path d="M55 18L5 42" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          {/* Badge — green left border like Botpress */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.10] text-sm text-[#8a8f98] mb-10 hover:bg-white/[0.06] transition-colors border-r-2 border-r-brand-primary"
          >
            جديد: تكامل مع سلة — تعرف على المزيد
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </motion.a>

          {/* H1 — massive centered like Botpress */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold leading-[1.08] mb-6 tracking-tight"
          >
            <span className="block">نظام تشغيل المتجر</span>
            <span className="block">
              بالذكاء الاصطناعي{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.424 10.58 46.872 28.387" className="inline-block w-[0.6em] h-[0.36em] align-middle mb-1" aria-label="Wosool">
                <path fill="#00D97E" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"/>
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[15px] md:text-base text-[#8a8f98] max-w-lg mb-10 leading-relaxed"
          >
            أنشئ وكلاءك الذكيين، وأدرهم عبر الواتساب والأدوات والبيانات.
          </motion.p>

          {/* CTAs — pill buttons like Botpress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-3"
          >
            <a
              href="#"
              className="bg-white text-[#080B0F] font-medium rounded-full px-7 py-3 text-sm hover:bg-white/90 transition-all hover:-translate-y-[1px]"
            >
              ابدأ مجاناً
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-white/80 hover:text-white border border-white/[0.15] rounded-full px-7 py-3 text-sm transition-all hover:border-white/[0.3]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              عرض الخطط
            </a>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Demo — floating below hero, overlapping */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <div className="relative">
          <div className="absolute -inset-6 bg-brand-primary/5 rounded-3xl blur-3xl" />
          <div className="relative shadow-2xl shadow-black/60 rounded-2xl overflow-hidden" style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}>
            <TypewriterDemo />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
