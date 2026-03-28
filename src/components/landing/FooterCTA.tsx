"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

export default function FooterCTA() {
  return (
    <section className="relative px-6 py-8">
      <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[420px] md:min-h-[500px]">
        <div className="md:w-[45%] relative min-h-[240px] md:min-h-auto p-3 bg-surface-inset">
          <LandingArtFrame
            theme="future"
            word="دعوة"
            eyebrow="Early Access"
            accent="#38BDF8"
            secondaryAccent="#00D97E"
            className="h-full min-h-[220px] md:min-h-[280px]"
            hideWord
          >
            <div className="absolute inset-0 z-20 flex items-center justify-center p-10">
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg width="320" height="200" viewBox="0 0 320 200" fill="none">
                    <path
                      d="M104 100C104 74 123 58 147 58C169 58 182 72 195 100C207 128 221 142 243 142C267 142 286 126 286 100C286 74 267 58 243 58C221 58 207 72 195 100C182 128 169 142 147 142C123 142 104 126 104 100Z"
                      stroke="url(#loopStrokeLarge)"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="loopStrokeLarge" x1="104" y1="58" x2="286" y2="142" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38BDF8" />
                        <stop offset="0.55" stopColor="#00D97E" />
                        <stop offset="1" stopColor="#6EE7B7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <motion.div
                  animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.76, 1, 0.76] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
                    <path
                      d="M40 70C40 48 56 34 78 34C96 34 108 46 118 70C128 94 140 106 158 106C180 106 196 92 196 70C196 48 180 34 158 34C140 34 128 46 118 70C108 94 96 106 78 106C56 106 40 92 40 70Z"
                      stroke="url(#wosoolLoop)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="wosoolLoop" x1="40" y1="34" x2="196" y2="106" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38BDF8" />
                        <stop offset="0.55" stopColor="#00D97E" />
                        <stop offset="1" stopColor="#6EE7B7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ x: [-34, 34, -34], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-3 w-3 rounded-full bg-brand-primary shadow-[0_0_18px_rgba(0,217,126,0.55)]"
                />
              </div>
            </div>
          </LandingArtFrame>
        </div>

        <div className="md:w-[55%] bg-surface-inset relative overflow-hidden">
          <div className="relative z-10 h-full flex flex-col">
            <div className="absolute top-6 right-6 text-xs text-muted">
              ليس لكل أحد. ومصمم لهذا السوق تحديداً.
            </div>
            <div className="flex-1 flex items-center justify-center border-b border-faint px-8">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-primary leading-none"
              >
                دع متجرك
              </motion.span>
            </div>

            <div className="flex-1 flex items-center justify-center border-b border-faint px-8">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-faint leading-none"
              >
                يعمل
              </motion.span>
            </div>

            <div className="flex-1 flex items-center justify-center gap-6 md:gap-10 px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex-shrink-0"
              >
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-7 py-4 text-sm font-semibold text-on-brand transition-transform hover:scale-[1.03]"
                >
                  اطلب الدعوة
                </Link>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-none"
              >
                وأنت <span className="text-brand-primary">نائم</span>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
