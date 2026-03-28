"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

export default function SocialProof() {
  return (
    <section className="relative bg-surface-inset py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          <div className="hidden md:block w-[180px]">
            <LandingArtFrame
              theme="future"
              word="Trust"
              accent="#38BDF8"
              secondaryAccent="#A78BFA"
              className="h-[180px]"
              align="center"
              hideWord
            >
              <div className="absolute inset-0 z-20">
                <div className="absolute left-[18%] top-[26%] h-10 w-10 rounded-full border border-sky-300/25" />
                <div className="absolute right-[18%] top-[36%] h-px w-20 bg-gradient-to-r from-transparent via-brand-primary/80 to-transparent" />
                <div className="absolute right-[20%] bottom-[22%] h-3 w-3 rounded-full bg-brand-primary/80" />
              </div>
            </LandingArtFrame>
          </div>

          <div className="text-right flex-1 max-w-3xl mr-0 ml-auto">
            <span className="text-sm text-muted block mb-4">لماذا يثق التاجر بهذه الفكرة</span>
            <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-primary leading-[1.15] mb-6">
              فكرة واضحة.
              <br />
              وحدود أوضح.
            </h2>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 theme-btn-primary rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              تعرّف على أين يناسبك وصول
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[280px]"
          >
            <LandingArtFrame theme="developer" word="AR" accent="#60A5FA" secondaryAccent="#00D97E" className="h-full" hideWord>
              <div className="absolute inset-0 z-20">
                <div className="absolute left-[12%] top-[36%] rounded-2xl border border-sky-300/20 bg-sky-300/8 px-4 py-3 text-right text-sm text-sky-200">
                  العربية
                </div>
                <div className="absolute right-[14%] top-[48%] rounded-2xl border border-brand-primary/20 bg-brand-primary/8 px-4 py-3 text-right text-sm text-brand-primary">
                  الخليجية
                </div>
                <div className="absolute right-[10%] bottom-[14%] rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]" style={{ border: "1px solid var(--art-chip-border)", background: "var(--art-chip-bg)", color: "var(--art-chip-text)" }}>
                  Language
                </div>
                <div className="absolute inset-x-[18%] bottom-[28%] h-px bg-gradient-to-r from-transparent via-[var(--art-divider)] to-transparent" />
              </div>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="mb-3 text-lg font-bold" style={{ color: "var(--art-text-primary)" }}>العربية أولاً</h3>
                <span className="text-sm" style={{ color: "var(--art-text-secondary)" }}>ليست طبقة ترجمة فوق أداة غربية</span>
              </div>
            </LandingArtFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 relative min-h-[280px]"
          >
            <LandingArtFrame theme="network" word="∞" accent="#25D366" secondaryAccent="#00D97E" className="h-full" hideWord>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Link
                    href="/blog/why-whatsapp-is-the-office"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    style={{
                      border: "1px solid var(--art-panel-border)",
                      background: "var(--art-chip-bg)",
                      color: "var(--art-text-muted)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </Link>
                  <div className="flex gap-3 text-sm" style={{ color: "var(--art-text-secondary)" }}>
                    <span className="rounded-full px-4 py-2" style={{ border: "1px solid var(--art-panel-border)" }}>متجر</span>
                    <span className="rounded-full border border-brand-primary/20 bg-brand-primary/8 px-4 py-2 text-brand-primary">وصول</span>
                    <span className="rounded-full px-4 py-2" style={{ border: "1px solid var(--art-panel-border)" }}>واتساب</span>
                  </div>
                </div>
                <div className="absolute left-[10%] top-[12%] rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]" style={{ border: "1px solid var(--art-chip-border)", background: "var(--art-chip-bg)", color: "var(--art-chip-text)" }}>
                  Operating Layer
                </div>
                <svg className="absolute inset-x-[10%] top-[34%] h-[90px] w-[80%]" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path d="M10 10 C24 10, 28 16, 42 16" fill="none" stroke="var(--art-divider)" strokeWidth="0.45" />
                  <path d="M58 16 C72 16, 76 10, 90 10" fill="none" stroke="#25D366" strokeWidth="0.45" />
                  <circle cx="10" cy="10" r="1.8" fill="var(--art-text-muted)" />
                  <circle cx="50" cy="16" r="2.2" fill="#00D97E" />
                  <circle cx="90" cy="10" r="1.8" fill="#25D366" />
                </svg>
                <div>
                  <h3 className="mb-2 text-xl font-bold" style={{ color: "var(--art-text-primary)" }}>واتساب + التشغيل</h3>
                  <span className="block text-sm" style={{ color: "var(--art-text-secondary)" }}>الطبقة الذكية بين العمل والمحادثة</span>
                </div>
              </div>
            </LandingArtFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 relative min-h-[250px]"
          >
            <LandingArtFrame theme="future" word="وضوح" accent="#A78BFA" secondaryAccent="#00D97E" className="h-full" hideWord>
              <div className="absolute inset-0 z-20">
                <div className="absolute left-[8%] top-[14%] rounded-full px-4 py-2 text-xs" style={{ border: "1px solid var(--art-panel-border)", color: "var(--art-text-muted)" }}>
                  لكل أحد
                </div>
                <div className="absolute right-[10%] top-[14%] rounded-full border border-brand-primary/20 bg-brand-primary/8 px-4 py-2 text-xs text-brand-primary">
                  لهذا السوق
                </div>
                <div className="absolute left-[18%] top-[30%] h-px w-[48%] bg-gradient-to-r from-[var(--art-divider-soft)] via-brand-primary/60 to-transparent" />
                <div className="absolute left-[8%] bottom-[14%] rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]" style={{ border: "1px solid var(--art-chip-border)", background: "var(--art-chip-bg)", color: "var(--art-chip-text)" }}>
                  Positioning
                </div>
              </div>
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-between">
                <p className="max-w-[68%] pt-10 text-[16px] leading-relaxed md:text-[18px]" style={{ color: "var(--art-text-primary)" }}>
                  لسنا الأفضل لكل أحد. نحن الأنسب عندما تريد التشغيل اليوم.
                </p>
                <div className="mt-6 text-right">
                  <span className="text-sm font-medium" style={{ color: "var(--art-text-primary)" }}>وضوح قبل المبالغة</span>
                  <br />
                  <span className="text-xs" style={{ color: "var(--art-text-muted)" }}>هذا هو المبدأ</span>
                </div>
              </div>
            </LandingArtFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative min-h-[250px]"
          >
            <LandingArtFrame theme="vault" word="≠" accent="#F97316" secondaryAccent="#F6C453" className="h-full" hideWord>
              <div className="absolute inset-0 z-20">
                <div className="absolute left-[16%] top-[22%] h-16 w-16 rounded-full border border-amber-400/25" />
                <div
                  className="absolute left-[14%] top-[18%] rounded-2xl px-4 py-3 text-xs"
                  style={{
                    border: "1px solid var(--art-panel-border)",
                    background: "var(--art-panel-soft)",
                    color: "var(--art-text-muted)",
                  }}
                >
                  موافقة قبل القرار
                </div>
                <div className="absolute right-[10%] top-[14%] rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]" style={{ border: "1px solid var(--art-chip-border)", background: "var(--art-chip-bg)", color: "var(--art-chip-text)" }}>
                  Boundaries
                </div>
              </div>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="mb-3 text-lg font-bold" style={{ color: "var(--art-text-primary)" }}>حدود واضحة</h3>
                <span className="text-sm" style={{ color: "var(--art-text-secondary)" }}>لا نضمن صحة كل رد 100% ولهذا توجد مستويات موافقة</span>
              </div>
            </LandingArtFrame>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 grid md:grid-cols-3 gap-4"
        >
          {[
            "Botpress للبناء المخصص.",
            "WhatsApp Business للردود الثابتة.",
            "وصول للتشغيل اليومي.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-subtle bg-ghost p-5 text-sm text-faint leading-relaxed"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
