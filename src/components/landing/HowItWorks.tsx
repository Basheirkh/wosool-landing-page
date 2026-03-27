"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label with line — Botpress style */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/[0.08]" />
          <span className="text-sm text-[#8a8f98]">كيف يعمل وصول</span>
        </div>

        {/* Two-column description */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-5xl mr-0 ml-auto">
          <div>
            <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.3] mb-4">
              جوهر كل وكيل في وصول هو محرك استدلال مخصص، يتولى تنسيق سلوك الوكيل:
            </h3>
            <p className="text-[15px] text-[#8a8f98] leading-relaxed">
              تفسير التعليمات، إدارة الذاكرة، اختيار الأدوات المناسبة، تنفيذ المهام، وإرجاع استجابات قابلة للاستخدام.
            </p>
          </div>
          <div>
            <p className="text-[15px] text-[#8a8f98] leading-relaxed">
              على عكس أطر العمل التقليدية التي تعتمد على أوامر جامدة وتنظيم خارجي، يعمل محرك الاستدلال المخصص في وصول داخلياً بالكامل.
            </p>
            <p className="text-[15px] text-[#8a8f98] leading-relaxed mt-4">
              يمكنه التعامل مع منطق معقد متعدد الخطوات، وتنفيذ جافاسكربت في بيئة آمنة، وتوليد استجابات منظمة دون إعدادات إضافية.
            </p>
          </div>
        </div>

        {/* Giant background word + floating UI panels */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Giant BG word — "الموظفون" at ~25vw, very low opacity */}
          <div className="bg-word font-arabic">الموظفون</div>

          {/* Floating UI panels over the word */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Right panel — Agent workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-5 w-[300px] shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-brand-primary text-xs">✦</span>
                <span className="text-sm font-medium text-brand-primary">مستقل</span>
              </div>
              <div className="space-y-2">
                <div className="bg-white/[0.04] rounded-lg p-3 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-[#8a8f98]">الخطوة 1</span>
                    <span className="text-[10px] text-white/30">☰</span>
                  </div>
                  <div className="bg-[#111] rounded p-2 text-[11px] text-white/70 leading-relaxed">
                    <span className="text-white/40">## الهوية</span>
                    <br />
                    أنت وكيل دعم عملاء. هدفك هو توجيه العميل إلى الحل الصحيح بناءً على بيانات المتجر.
                  </div>
                </div>
                {["استرداد الأموال", "سؤال عن المنتج", "تتبع الطلب"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.04]"
                  >
                    <span className="text-[10px] text-brand-primary">→</span>
                    <span className="text-[12px] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Left panel — Actions/Results */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-5 w-[280px] shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] text-white/50">إجراء</span>
                <span className="text-[10px] text-white/30 mr-auto">☰</span>
              </div>
              <div className="space-y-2">
                {[
                  { icon: "💬", text: "بدء محادثة", color: "bg-green-500/10 text-green-400" },
                  { icon: "📋", text: "إنشاء تذكرة", color: "bg-blue-500/10 text-blue-400" },
                  { icon: "📦", text: "تتبع الطلب", color: "bg-amber-500/10 text-amber-400" },
                ].map((action) => (
                  <div
                    key={action.text}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ${action.color} border border-white/[0.04]`}
                  >
                    <span className="text-sm">{action.icon}</span>
                    <span className="text-[12px]">{action.text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.04]">
                  <span className="text-[10px] text-white/30">+</span>
                  <span className="text-[11px] text-white/30">إضافة بطاقة</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
