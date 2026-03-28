"use client";

import { motion } from "framer-motion";

export default function ArchStatement() {
  return (
    <section className="relative py-28 px-6 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        {/* Label with line — Botpress pattern */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-ghost-strong" />
          <span className="text-sm text-secondary">البنية التشغيلية</span>
        </div>

        {/* Large statement text — Botpress style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mr-0 ml-auto text-right"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.2] mb-6">
            وصول لا يُنافس ChatGPT في الذكاء العام.
            <br />
            <span className="text-secondary">وصول أذكى في مجال واحد:</span>
            إدارة عملك أونلاين.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mr-0 ml-auto text-right mt-8"
        >
          <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.5] text-secondary">
            قوة النماذج العامة.
            <span className="text-brand-primary"> + ذاكرة العمل </span>
            <span className="text-primary"> + التنفيذ </span>
            <span className="text-purple-400"> + الحدود ∞</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
