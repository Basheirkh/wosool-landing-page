"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "انشر حيث يتواجد عملاءك.",
    description: "يمكن نشر الوكلاء على واتساب، أو تضمينهم في متجرك، أو تشغيلهم عبر واجهات صوتية دون الحاجة لتنفيذات منفصلة.",
    badge: "موظف العملاء",
    visual: (
      <div className="w-full h-full flex items-end justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-4 w-[280px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.424 10.58 46.872 28.387" width="14" height="9"><path fill="#fff" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"/></svg>
            </div>
            <span className="text-[#0a0a0a] text-sm font-medium">Agent</span>
            <div className="flex gap-1.5 mr-auto">
              <div className="w-6 h-6 rounded bg-[#25D366]/10 flex items-center justify-center"><span className="text-xs">💬</span></div>
              <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center"><span className="text-xs">🌐</span></div>
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs">+</div>
            </div>
          </div>
          <div className="text-xs text-[#0a0a0a]/70 border-t pt-3">
            <span className="font-medium text-[#0a0a0a]">Instructions</span>
            <p className="mt-1 text-[11px] leading-relaxed">أنت جزء أساسي من عمليات المتجر. استخدم الأدوات لتحسين تجربة العملاء.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "عزز سير عمل دعم العملاء.",
    description: "امنح الوكلاء القدرة على التعامل مع الاستفسارات الروتينية، والتصعيد عند الحاجة، والحفاظ على الاتساق عبر القنوات.",
    badge: "الأتمتة",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="space-y-3">
          <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 w-[260px]">
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">H</div>
            <div>
              <div className="text-sm font-medium text-[#0a0a0a]">WhatsApp User</div>
              <div className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded inline-block">Assigned</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 w-[260px]">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">A</div>
            <div>
              <div className="text-sm font-medium text-[#0a0a0a]">Webchat User</div>
              <div className="text-[11px] text-[#0a0a0a]/60">هل يمكنني استرداد المبلغ؟</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "قدّم محادثات سياقية.",
    description: "المحادثات ذات حالة مستمرة ودائمة، مما يُمكّن الوكلاء من تتبع السياق والعمل عبر الخطوات دون فقدان المعلومات.",
    badge: "السياق",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg w-[260px] overflow-hidden">
          <div className="px-3 py-2 border-b flex items-center gap-2">
            <span className="text-xs font-medium text-[#0a0a0a]">Emulator</span>
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
          </div>
          <div className="p-3 space-y-2">
            <div className="bg-gray-100 rounded-lg p-2 text-[11px] text-[#0a0a0a] max-w-[80%] mr-auto">
              أواجه مشكلة في الطلب. الدفع لا يعمل.
            </div>
            <div className="bg-[#f8f8f8] rounded-lg p-2 text-[11px] text-[#0a0a0a]/80 max-w-[85%]">
              شكراً لإبلاغنا. تم إنشاء تذكرة لهذه المشكلة. هل يمكنك إرسال لقطة شاشة؟
            </div>
          </div>
          <div className="px-3 py-2 border-t flex items-center gap-2">
            <input className="flex-1 text-[11px] text-gray-400 bg-transparent outline-none" placeholder="اكتب للاختبار..." readOnly />
            <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "ادمج مع الأنظمة الحالية.",
    description: "استخدم واجهات سلة وواتساب، وادخل إلى بيانات المتجر، وتفاعل مباشرة مع المنتجات والطلبات والعملاء.",
    badge: "التكامل",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-4 w-[240px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-[#0a0a0a]">Capabilities</span>
            <span className="w-5 h-5 rounded border border-gray-200 flex items-center justify-center text-gray-400 text-xs">+</span>
          </div>
          <div className="space-y-2">
            {[
              { icon: "🛒", name: "سلة", sub: "إدارة المتجر", color: "bg-purple-50" },
              { icon: "💬", name: "واتساب", sub: "رسائل العملاء", color: "bg-green-50" },
              { icon: "📊", name: "التقارير", sub: "تحليل البيانات", color: "bg-blue-50" },
            ].map((cap) => (
              <div key={cap.name} className={`flex items-center gap-3 p-2 rounded-lg ${cap.color}`}>
                <span className="text-lg">{cap.icon}</span>
                <div>
                  <div className="text-xs font-medium text-[#0a0a0a]">{cap.name}</div>
                  <div className="text-[10px] text-[#0a0a0a]/50">{cap.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="product" className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label + heading — Botpress style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Label with line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-sm text-[#8a8f98]">الإمكانات</span>
          </div>

          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-right max-w-4xl mr-0 ml-auto">
            وصول يوفر البنية التحتية الأساسية
            <br />
            لتشغيل وكلاء الذكاء الاصطناعي في بيئة
            <br />
            <span className="text-[#8a8f98]">الإنتاج.</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid of feature cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-[#141414] border border-white/[0.06] overflow-hidden hover:border-white/[0.10] transition-all duration-300"
            >
              {/* Card top — "تعرف على المزيد ↗" like Botpress */}
              <div className="flex justify-end p-5 pb-0">
                <a href="#" className="flex items-center gap-1 text-xs text-[#8a8f98] hover:text-white transition-colors">
                  تعرف على المزيد
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>

              {/* Visual area — UI mockup */}
              <div className="h-[260px] relative">
                {feature.visual}
              </div>

              {/* Text below card */}
              <div className="p-6 pt-4 border-t border-white/[0.04]">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#8a8f98] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
