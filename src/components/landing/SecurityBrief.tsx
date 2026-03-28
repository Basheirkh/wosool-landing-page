"use client";

import { motion } from "framer-motion";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

const guards = [
  {
    title: "ما نحميه",
    text: "طلباتك، محادثاتك، وبيانات متجرك تُعامل كأمانة تشغيلية لا كوقود تسويقي.",
  },
  {
    title: "ما لا نفعله",
    text: "لا نبيع البيانات، لا نستخدم بيانات متجرك لتدريب الآخرين، ولا نعدك بأن كل رد صحيح 100%.",
  },
  {
    title: "كيف نُخفّف المخاطر",
    text: "العزل، التشفير، وسلّم موافقات واضح حتى لا يتجاوز وصول ما يجب أن يبقى بيدك.",
  },
  {
    title: "حقك دائماً",
    text: "يمكنك حذف بياناتك أو تصديرها، ومعرفة ما نحتفظ به ولماذا نحتفظ به.",
  },
];

export default function SecurityBrief() {
  return (
    <section className="relative py-24 px-6 bg-surface-inset">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-right"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-ghost-strong" />
            <span className="text-sm text-secondary">الأمان والشفافية</span>
          </div>

          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] max-w-5xl mr-0 ml-auto">
            الأمان بوضوح.
            <br />
            <span className="text-secondary">لا شعارات طويلة.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {guards.map((guard, index) => (
            <motion.div
              key={guard.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[28px] border border-subtle bg-surface-elevated"
            >
              <div className="p-3">
                <LandingArtFrame
                  theme={index === 0 ? "vault" : index === 1 ? "developer" : index === 2 ? "signal" : "memory"}
                  word={`0${index + 1}`}
                  accent={index === 0 ? "#F97316" : index === 1 ? "#60A5FA" : index === 2 ? "#00D97E" : "#A78BFA"}
                  secondaryAccent={index === 0 ? "#F6C453" : index === 1 ? "#22D3EE" : index === 2 ? "#6EE7B7" : "#00D97E"}
                  className="h-[160px]"
                  align="center"
                  wordClassName="text-[68px] md:text-[76px]"
                />
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-lg font-semibold mb-3">{guard.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{guard.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
