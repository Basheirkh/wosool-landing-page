"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <section className="relative px-6 py-8">
      <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden min-h-[400px] md:min-h-[480px] bg-surface-inset relative">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(var(--brand-primary-rgb),0.12), transparent 50%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-6"
          >
            متجرك ينتظرك.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-secondary leading-relaxed max-w-lg mb-10"
          >
            أول موظف ما يحتاج راتب.
            <br />
            ما ينام. ما يتعب.
            <br />
            وجاهز الحين.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-[15px] font-semibold text-on-brand transition-transform hover:scale-[1.03] shadow-[0_12px_32px_rgba(0,217,126,0.25)]"
            >
              جرّب مجاناً — 7 أيام بدون بطاقة
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
