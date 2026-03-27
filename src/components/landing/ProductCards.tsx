"use client";

import { motion } from "framer-motion";

export default function ProductCards() {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Two large colored cards side by side — Botpress developer section */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 — Teal/Green: واجهة المحادثة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-[#0a2a1a] border border-white/[0.06] min-h-[500px] relative group"
          >
            {/* Label */}
            <div className="flex items-center justify-between p-6 pb-0">
              <span className="text-sm text-white/40">واجهة المحادثة</span>
              <a href="#" className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors">
                تعرف على المزيد
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Heading */}
            <div className="p-6 pt-4">
              <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2]">
                ادخل إلى واجهة المحادثة التي
                <br />
                تحتاجها لبناء وإدارة الوكلاء.
              </h3>
            </div>

            {/* Chat demo visual */}
            <div className="px-6 pb-6 flex items-end justify-center">
              <div className="bg-[#0d1f15] rounded-xl border border-white/[0.06] p-4 w-full max-w-[320px]">
                <div className="bg-white/[0.06] rounded-lg p-3 mb-3 text-sm text-white/70">
                  مرحباً بك في وصول! كيف يمكنني مساعدتك اليوم؟
                </div>
                <div className="flex items-center gap-2 text-sm text-white/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <span>Inspect</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Purple: المراقبة والتحكم */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-[#1a1030] border border-white/[0.06] min-h-[500px] relative group"
          >
            {/* Label */}
            <div className="flex items-center justify-between p-6 pb-0">
              <span className="text-sm text-white/40">تفقد</span>
              <a href="#" className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors">
                تعرف على المزيد
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Heading */}
            <div className="p-6 pt-4">
              <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2]">
                حافظ على مراقبة كاملة لإجراءات
                <br />
                الوكيل وتنفيذاته.
              </h3>
            </div>

            {/* Hooks/Code visual */}
            <div className="px-6 pb-6 flex gap-4">
              {/* Hooks panel */}
              <div className="bg-white rounded-xl shadow-lg p-3 w-[200px] text-[10px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-[#0a0a0a] text-xs">Hooks</span>
                </div>
                <div className="space-y-1.5">
                  {["Before Incoming", "After Incoming", "Before Outgoing", "Before LLM Execution"].map((hook) => (
                    <div key={hook} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
                      <span className="text-[#0a0a0a]/70">{hook}</span>
                      <span className="text-[#0a0a0a]/30 text-[9px]">0</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code snippet */}
              <div className="flex-1 bg-[#0d0d1a] rounded-xl border border-white/[0.06] p-3 font-mono text-[10px] text-white/50 overflow-hidden">
                <div><span className="text-purple-400">async</span> <span className="text-blue-300">function</span> hook(event,</div>
                <div className="pl-2">execution): <span className="text-green-400">Promise</span>&lt;void&gt; {"{"}</div>
                <div className="pl-4 text-white/30">{"/** Your code below */"}</div>
                <div className="pl-4"><span className="text-purple-400">await</span> actions[<span className="text-amber-300">&quot;track&quot;</span>]</div>
                <div className="pl-4">.trackIterations({"{"}</div>
                <div className="pl-6">conversationId: event.id,</div>
                <div className="pl-6">userId: event.userId,</div>
                <div className="pl-4">{"}"})</div>
                <div>{"}"}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar below — Botpress pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 rounded-2xl bg-[#0a2a1a] border border-white/[0.06] p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xl font-bold text-white">4,200,000+</span>
            <span className="text-sm text-white/50">رسالة معالجة حتى الآن</span>
          </div>
          <a href="#" className="bg-brand-primary text-[#080B0F] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-brand-primary/90 transition-colors">
            أنشئ وكيلك الآن →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
