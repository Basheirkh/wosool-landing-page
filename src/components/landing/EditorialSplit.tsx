"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

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
        <div className="md:w-[55%] relative p-3 md:p-4 bg-surface-inset">
          <LandingArtFrame
            theme="signal"
            word="المكتب"
            eyebrow="Channel Strategy"
            accent="#25D366"
            secondaryAccent="#00D97E"
            className="h-full min-h-[280px]"
            wordClassName="text-[58px] md:text-[96px] lg:text-[118px]"
            hideWord
          >
            <div className="absolute inset-0 z-20 pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.68, 1, 0.68] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[10%] top-[14%] flex h-14 w-14 items-center justify-center rounded-2xl backdrop-blur-sm"
                style={{
                  border: "1px solid var(--art-panel-border)",
                  background: "var(--art-panel)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#25D366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 12.05A8 8 0 0 1 8.53 19.2L4 20l.82-4.44A8 8 0 1 1 20 12.05Z" />
                  <path d="M9 9.7c.2-.3.4-.3.7-.3h.4c.2 0 .4.1.5.4l.6 1.7c.1.2.1.4 0 .5l-.4.5c-.2.2-.2.3 0 .5.5.8 1.3 1.4 2.2 1.9.2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l1.6.7c.3.1.4.3.4.5 0 .5-.4 1.1-.9 1.4-.4.2-.9.3-1.4.2-2-.6-3.8-2.1-5-4-.4-.7-.4-1.5.2-2.3Z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[14%] top-[18%] h-px w-28"
                style={{ background: "linear-gradient(90deg, transparent, rgba(37,211,102,0.75), transparent)" }}
              />

              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[18%] top-[12%] h-24 w-24 rounded-full"
                style={{ boxShadow: "0 0 0 1px rgba(37,211,102,0.22) inset" }}
              />

              <motion.div
                animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute left-[18%] top-[42%] rounded-full px-4 py-2 text-[12px] font-medium"
                style={{
                  border: "1px solid var(--art-panel-border)",
                  background: "var(--art-chip-bg)",
                  color: "var(--art-text-secondary)",
                }}
              >
                رسالة جديدة
              </motion.div>
            </div>
            <div className="absolute inset-0 z-20 p-10 md:p-16 flex items-end">
              <div className="max-w-[78%]">
                <span
                  className="block text-[60px] md:text-[96px] lg:text-[122px] font-bold leading-none tracking-tight"
                  style={{ color: "var(--art-text-primary)", opacity: 0.22, textShadow: "0 10px 30px rgba(0,0,0,0.10)" }}
                >
                  واتساب
                </span>
                <span className="mt-2 block text-[38px] md:text-[56px] lg:text-[72px] font-bold leading-none text-brand-primary/55">
                  هو المكتب
                </span>
              </div>
            </div>
          </LandingArtFrame>
        </div>

        {/* Left side in RTL — cream/white panel */}
        <div className="md:w-[45%] bg-surface-light p-10 md:p-14 flex flex-col justify-center relative">
          {/* Corner ↗ arrow — exact Botpress pattern */}
          <Link
            href="/blog/why-whatsapp-is-the-office"
            className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center text-on-light-muted hover:text-on-light transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          <span className="text-sm text-on-light-muted mb-6">الفكرة</span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-on-light leading-[1.15] mb-5">
            4 موظفين ذكاء اصطناعي
            <br />
            يشغّلون عملك
            <br />
            من نفس مكان عملك.
          </h2>
          <p className="text-on-light-secondary text-[15px] leading-relaxed max-w-sm">
            واتساب هنا ليس قناة جانبية.
            <br />
            هو مكان التشغيل اليومي.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
