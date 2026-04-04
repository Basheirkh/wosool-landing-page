"use client";

import { motion } from "framer-motion";
import { Headphones, UserCog, BarChart3, Monitor, ShoppingBag, Wifi, Check } from "lucide-react";

const agents = [
  {
    name: "موظف العملاء",
    tagline: "يرد على عملاءك في واتساب. أسرع منك.",
    example: {
      from: "عميل",
      message: "وين طلبي؟",
      response: "طلبك في الشحن — يوصل بكرا إن شاء الله.",
    },
    icon: Headphones,
    accent: "#25D366",
  },
  {
    name: "موظف المدير",
    tagline: "قوله وش تبي — ينفّذ.",
    example: {
      from: "أنت",
      message: "خفّض الكاميرا 20 ريال",
      response: "تم — كان 299 — صار 279",
    },
    icon: UserCog,
    accent: "#60A5FA",
  },
  {
    name: "موظف الذكاء",
    tagline: "يرسلك تقرير كل صباح: شو بيع أمس. شو ناقص.",
    example: {
      from: "صباح الخير — أمس",
      message: "12 طلب | 4,350 ريال",
      response: "سماعة X — بقى 3 فقط",
    },
    icon: BarChart3,
    accent: "#A78BFA",
  },
  {
    name: "موظف الموقع",
    tagline: "عميلك يسأل عن منتج — يرى الصفحة ويرد بالتفاصيل.",
    example: {
      from: "عميل (في الموقع)",
      message: "بكم أول منتج؟",
      response: "149 ريال — وعندك خصم 10% لأول طلب",
    },
    icon: Monitor,
    accent: "#F6C453",
  },
];

export default function AgentsArchitectureSection() {
  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-right"
        >
          <h2 className="text-[30px] md:text-[42px] lg:text-[56px] font-bold leading-[1.1]">
            4 موظفين. شغّالين 24/7.
            <br />
            ما يتعبون.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-secondary">
            بدل ما توظّف 4 أشخاص — شغّل 4 موظفين جاهزين.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-subtle p-6 md:p-7"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 92%, ${agent.accent}12), var(--bg-surface))`,
                  boxShadow: `0 14px 36px ${agent.accent}08`,
                }}
              >
                {/* Agent header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: `${agent.accent}18`, border: `1px solid ${agent.accent}28` }}
                  >
                    <Icon size={20} style={{ color: agent.accent }} strokeWidth={1.8} />
                  </div>
                  <div className="text-[16px] font-bold" style={{ color: agent.accent }}>{agent.name}</div>
                </div>

                {/* Tagline */}
                <p className="text-[15px] leading-relaxed text-secondary mb-5">
                  {agent.tagline}
                </p>

                {/* Example conversation */}
                <div className="rounded-[20px] border border-subtle p-4 space-y-3" style={{ background: "var(--ghost-bg)" }}>
                  <div className="flex items-start gap-2">
                    <span className="text-[12px] text-secondary font-medium mt-0.5 flex-shrink-0">{agent.example.from}:</span>
                    <span className="text-[14px] text-faint">&quot;{agent.example.message}&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[12px] font-medium mt-0.5 flex-shrink-0" style={{ color: agent.accent }}>الموظف:</span>
                    <span className="inline-flex items-center gap-1 text-[14px] text-primary">
                      <Check size={13} className="text-brand-primary flex-shrink-0" strokeWidth={2.5} />
                      &quot;{agent.example.response}&quot;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coming soon items */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            { name: "المشتريات", note: "مساعد مشتريات ذكي", icon: ShoppingBag },
            { name: "قدرات الإنترنت", note: "يبحث ويقارن لك", icon: Wifi },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="rounded-[22px] border border-subtle px-6 py-4 flex items-center justify-between"
                style={{ background: "var(--ghost-bg)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ghost-strong flex-shrink-0">
                    <Icon size={16} className="text-secondary" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-primary">{item.name}</span>
                    <span className="text-[13px] text-secondary">{item.note}</span>
                  </div>
                </div>
                <span className="text-[12px] text-secondary rounded-full border border-subtle px-3 py-1">قريباً</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
