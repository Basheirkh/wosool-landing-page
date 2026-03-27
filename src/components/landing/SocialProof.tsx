"use client";

import { motion } from "framer-motion";

const editorialCards = [
  {
    name: "متجر الورد",
    stat: "30%",
    statLabel: "تقليل وقت الرد",
    bg: "bg-[#e8b4d8]",
    textColor: "text-[#0a0a0a]",
    type: "stat" as const,
  },
  {
    name: "WAIVER GROUP",
    stat: "x9",
    statLabel: "زيادة في تفاعل الزوار",
    bg: "bg-[#2a5a3a]",
    textColor: "text-white",
    type: "image" as const,
  },
  {
    quote: "كان وصول خياراً ممتازاً لأنه يمكنه الوصول إلى قنوات متعددة، والاندماج مع الأنظمة الحالية، والاستفادة من قاعدة معرفية واسعة. والأهم من ذلك، أنه يمكننا البدء فوراً دون القلق بشأن الخوادم أو الصيانة.",
    author: "أحمد الراشد",
    role: "مؤسس، متجر الورد",
    bg: "bg-[#a8d4a8]",
    textColor: "text-[#0a0a0a]",
    type: "quote" as const,
  },
  {
    name: "HOSTIFAI",
    stat: "57%",
    statLabel: "معدل الحل",
    bg: "bg-white",
    textColor: "text-[#0a0a0a]",
    type: "stat" as const,
  },
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#f0ede6] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header area */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          {/* 3D sphere decoration — left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[120px] h-[120px] relative hidden md:block"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-200/60 to-indigo-300/40 border border-blue-200/30" />
            <div className="absolute inset-2 rounded-full border border-blue-300/20" />
            <div className="absolute inset-4 rounded-full border border-blue-300/15 rotate-45" />
          </motion.div>

          {/* Text */}
          <div className="text-right flex-1 max-w-3xl mr-0 ml-auto">
            <span className="text-sm text-[#0a0a0a]/40 block mb-4">نتائج حقيقية</span>
            <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.15] mb-6">
              موثوق به من قبل التجار
              <br />
              في المنطقة العربية.
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#1a1a1a] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              تعرّف على عملائنا
            </a>
          </div>
        </div>

        {/* Editorial colored cards grid — Botpress pattern */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Row 1: two stat cards side by side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${editorialCards[0].bg} rounded-2xl p-8 relative min-h-[280px] flex flex-col justify-end`}
          >
            {/* ↗ corner arrow */}
            <a href="#" className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
            <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{editorialCards[0].name}</h3>
            <div className="font-mono text-[64px] font-bold text-[#0a0a0a] leading-none">
              {editorialCards[0].stat}
            </div>
            <span className="text-sm text-[#0a0a0a]/60 mt-2">{editorialCards[0].statLabel}</span>
          </motion.div>

          {/* Photo card — spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 rounded-2xl relative min-h-[280px] bg-gradient-to-br from-[#1a3d2e] to-[#0a2e1a] overflow-hidden flex flex-col justify-end p-8"
          >
            {/* ↗ corner arrow */}
            <a href="#" className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
            {/* Abstract visual placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">{editorialCards[1].name}</h3>
              <div className="font-mono text-[72px] font-bold text-white/90 leading-none">
                {editorialCards[1].stat}
              </div>
              <span className="text-sm text-white/60 mt-2 block">{editorialCards[1].statLabel}</span>
            </div>
          </motion.div>

          {/* Quote card — spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`md:col-span-2 ${editorialCards[2].bg} rounded-2xl p-8 md:p-10 relative min-h-[250px] flex flex-col justify-between`}
          >
            <p className="text-[16px] md:text-[18px] text-[#0a0a0a] leading-relaxed max-w-2xl">
              {editorialCards[2].quote}
            </p>
            <div className="mt-6 text-right">
              <span className="text-sm font-medium text-[#0a0a0a]">{editorialCards[2].author}</span>
              <br />
              <span className="text-xs text-[#0a0a0a]/50">{editorialCards[2].role}</span>
            </div>
          </motion.div>

          {/* Small stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`${editorialCards[3].bg} rounded-2xl p-8 relative min-h-[250px] flex flex-col justify-end border border-[#0a0a0a]/5`}
          >
            <a href="#" className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
            <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{editorialCards[3].name}</h3>
            <div className="font-mono text-[64px] font-bold text-[#0a0a0a] leading-none">
              {editorialCards[3].stat}
            </div>
            <span className="text-sm text-[#0a0a0a]/60 mt-2">{editorialCards[3].statLabel}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
