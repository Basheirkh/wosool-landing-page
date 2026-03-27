"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "سلة", icon: "🛒", status: "متكامل", featured: true },
  { name: "واتساب Business", icon: "💬", status: "متكامل", featured: true },
  { name: "Zid", icon: "🏪", status: "متكامل", featured: false },
  { name: "ومضة", icon: "📱", status: "متكامل", featured: false },
  { name: "ElevenLabs", icon: "🎙️", status: "متكامل", featured: false },
  { name: "المزيد قريباً", icon: "✨", status: "قريباً", featured: false },
];

export default function Integrations() {
  return (
    <section className="relative py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
            يتكامل مع ما تعرفه بالفعل
          </h2>
          <p className="text-[#8a8f98] text-base max-w-md mx-auto">
            ربط سلة في دقيقتين. لا API تقني مطلوب. يعمل مع رقم واتساب الموجود.
          </p>
        </motion.div>

        {/* Integration grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-xl border p-6 text-center transition-all duration-300 hover:scale-[1.02] ${
                int.featured
                  ? "bg-[#1a1a1a] border-brand-primary/20 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5"
                  : "bg-[#141414] border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              <span className="text-3xl block mb-3">{int.icon}</span>
              <h3 className="text-sm font-semibold mb-2">{int.name}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  int.status === "متكامل"
                    ? "bg-brand-primary/10 text-brand-primary"
                    : "bg-white/5 text-[#8a8f98]"
                }`}
              >
                {int.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Feature list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-[#8a8f98]"
        >
          {[
            "ربط سلة في دقيقتين",
            "لا API تقني مطلوب",
            "يعمل مع رقم واتساب الموجود",
            "بيانات المتجر تتزامن تلقائياً",
          ].map((feature) => (
            <span key={feature} className="flex items-center gap-2">
              <span className="text-brand-primary text-xs">✓</span>
              {feature}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
