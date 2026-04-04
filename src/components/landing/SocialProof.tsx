"use client";

import { motion } from "framer-motion";
import { Lock, KeyRound, Trash2, Globe } from "lucide-react";

const guards = [
  {
    icon: Lock,
    title: "بياناتك لك",
    text: "ما نبيعها. ما نشاركها. ما نستخدمها لتدريب غيرك.",
    accent: "#00D97E",
  },
  {
    icon: KeyRound,
    title: "أنت المتحكم",
    text: "وصول ما يقرر بدون إذنك في الأشياء المهمة.",
    accent: "#60A5FA",
  },
  {
    icon: Trash2,
    title: "احذف متى تبي",
    text: "بياناتك — تقدر تحذفها أو تنزّلها بأي وقت.",
    accent: "#F97316",
  },
  {
    icon: Globe,
    title: "عربي من الأساس",
    text: "مو ترجمة. مبني بالعربي من أول يوم.",
    accent: "#A78BFA",
  },
];

export default function SocialProof() {
  return (
    <section className="relative bg-surface-inset px-5 py-16 md:px-6 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-right"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-primary leading-[1.15] mb-4">
            بياناتك أمانة.
            <br />
            <span className="text-secondary">مو بضاعة.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {guards.map((guard, index) => {
            const Icon = guard.icon;
            return (
              <motion.div
                key={guard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-subtle bg-surface-elevated p-7"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl mb-5"
                  style={{ background: `${guard.accent}14`, border: `1px solid ${guard.accent}24` }}
                >
                  <Icon size={22} style={{ color: guard.accent }} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{guard.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{guard.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
