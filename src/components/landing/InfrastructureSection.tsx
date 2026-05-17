"use client";

import { motion } from "framer-motion";

type InfraItem = {
  name: string;
  status: "جاهز الآن" | "قريباً";
  note: string;
  icon: "memory" | "owner" | "customer" | "widget" | "intelligence" | "procurement" | "internet";
};

const infrastructure: InfraItem[] = [
  { name: "الذاكرة", status: "جاهز الآن", note: "طبقة معرفة مستمرة تحفظ السياق والقرارات وما يتكرر في المتجر.", icon: "memory" },
  { name: "موظف المدير", status: "جاهز الآن", note: "يستقبل أوامرك، يرفع الموافقات، ويظل المكتب في واتساب.", icon: "owner" },
  { name: "موظف العملاء", status: "جاهز الآن", note: "يرد ويخدم ويتابع الطلبات ويعرف تاريخ كل عميل.", icon: "customer" },
  { name: "موظف المبيعات الأمامي", status: "جاهز الآن", note: "الويدجت الذي يرى الصفحة نفسها ويغلق الأسئلة أسرع.", icon: "widget" },
  { name: "موظف الذكاء", status: "جاهز الآن", note: "يلتقط الأنماط والفرص والتنبيهات ويحوّلها لتوصيات عملية.", icon: "intelligence" },
  { name: "المشتريات", status: "قريباً", note: "مساعد توريد ومتابعة إعادة الطلب والاحتياج قبل نفاد المخزون.", icon: "procurement" },
  { name: "قدرات الإنترنت", status: "قريباً", note: "بحث وربط خارجي مضبوط الصلاحيات عندما يحتاج العمل لسياق أوسع.", icon: "internet" },
];

function OrbitalIcon({ type }: { type: InfraItem["icon"] }) {
  const commonOrbit = (
    <>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
          <ellipse cx="60" cy="60" rx="38" ry="16" stroke="rgba(0,184,108,0.22)" strokeWidth="1.2" />
          <ellipse cx="60" cy="60" rx="38" ry="16" stroke="rgba(96,165,250,0.16)" strokeWidth="1.2" transform="rotate(60 60 60)" />
          <ellipse cx="60" cy="60" rx="38" ry="16" stroke="rgba(0,184,108,0.12)" strokeWidth="1.2" transform="rotate(120 60 60)" />
        </svg>
        <div className="absolute left-[12%] top-[46%] h-2.5 w-2.5 rounded-full bg-brand-primary/60" />
        <div className="absolute right-[13%] top-[24%] h-2 w-2 rounded-full bg-sky-400/45" />
        <div className="absolute right-[22%] bottom-[13%] h-2.5 w-2.5 rounded-full bg-brand-primary/40" />
      </motion.div>
    </>
  );

  return (
    <div className="relative h-32 w-32 md:h-36 md:w-36">
      {commonOrbit}
      <div className="absolute inset-[27%] flex items-center justify-center rounded-full border border-brand-primary/15 bg-white/78 shadow-[0_16px_36px_rgba(16,32,42,0.08)]">
        {type === "memory" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ color: "var(--brand-primary)" }}>
            <path d="M12 5.2c-2.8-2.2-7.2-.8-8.2 2.8-.8 2.6.2 5.2 2.4 6.7.5.4.8 1 .8 1.6v.5h10v-.5c0-.6.3-1.2.8-1.6 2.2-1.5 3.2-4.1 2.4-6.7-1-3.6-5.4-5-8.2-2.8Z" />
            <path d="M9 19h6M9.8 21h4.4" />
          </svg>
        )}
        {type === "owner" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "var(--brand-primary)" }}>
            <circle cx="12" cy="8" r="3.2" />
            <path d="M6.5 18.2c1.4-2.8 3.4-4.2 5.5-4.2s4.1 1.4 5.5 4.2" />
          </svg>
        )}
        {type === "customer" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "var(--brand-primary)" }}>
            <path d="M6 7.8A3.8 3.8 0 0 1 9.8 4h4.4A3.8 3.8 0 0 1 18 7.8v4.4A3.8 3.8 0 0 1 14.2 16H11l-3.6 3v-3A3.8 3.8 0 0 1 6 12.2Z" />
          </svg>
        )}
        {type === "widget" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "var(--brand-primary)" }}>
            <rect x="4.5" y="5.5" width="15" height="13" rx="2.6" />
            <path d="M8 10h8M8 13.5h5" />
          </svg>
        )}
        {type === "intelligence" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "var(--brand-primary)" }}>
            <path d="M7 15.5 10 12l2.4 2.4 4.6-5.4" />
            <circle cx="7" cy="15.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" />
            <circle cx="12.4" cy="14.4" r="1" fill="currentColor" stroke="none" />
            <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" />
          </svg>
        )}
        {type === "procurement" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "var(--brand-primary)" }}>
            <path d="M5.5 8h13l-1.3 8H6.8L5.5 8Z" />
            <path d="M9 8V6.8a3 3 0 0 1 6 0V8" />
            <path d="M12 11v2.5M12 15.8h.01" />
          </svg>
        )}
        {type === "internet" && (
          <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ color: "var(--brand-primary)" }}>
            <circle cx="12" cy="12" r="7.5" />
            <path d="M4.8 12h14.4M12 4.8c2.2 2.1 3.4 4.5 3.4 7.2S14.2 17.1 12 19.2M12 4.8c-2.2 2.1-3.4 4.5-3.4 7.2s1.2 5.1 3.4 7.2" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative overflow-hidden bg-background px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-65"
        style={{
          background:
            "radial-gradient(circle at 14% 18%, rgba(0,184,108,0.08), transparent 24%), radial-gradient(circle at 84% 26%, rgba(96,165,250,0.08), transparent 22%), radial-gradient(circle at 52% 82%, rgba(167,139,250,0.06), transparent 26%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-5xl text-start"
        >
          <span className="mb-4 block text-sm text-secondary">البنية الداخلية</span>
          <h2 className="text-[30px] font-bold leading-[1.12] md:text-[42px] lg:text-[54px]">
            هذه ليست قائمة Features.
            <br />
            <span className="text-secondary">هذه طبقات التشغيل والموظفون الذين يقفون خلف وصول.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-8 text-secondary">
            قسم منفصل عن التكاملات لأن السؤال هنا مختلف: ليس مع ماذا يتصل وصول، بل ما الذي يعيش داخله الآن وما الذي سيصل لاحقًا.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {infrastructure.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="relative overflow-hidden rounded-[30px] border border-subtle p-7"
              style={{
                background: item.status === "جاهز الآن"
                  ? "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 90%, rgba(var(--brand-primary-rgb),0.10)), var(--bg-surface))"
                  : "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 94%, #eef2f6 6%), var(--bg-surface))",
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-[0_8px_20px_rgba(16,32,42,0.06)] ${
                      item.status === "جاهز الآن"
                        ? "bg-[rgba(var(--brand-primary-rgb),0.14)] text-brand-primary ring-1 ring-brand-primary/16"
                        : "bg-white/82 text-secondary ring-1 ring-[var(--border-subtle)]"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${item.status === "جاهز الآن" ? "bg-brand-primary shadow-[0_0_12px_rgba(0,184,108,0.45)]" : "bg-slate-400/70"}`} />
                    {item.status}
                  </span>
                  <h3 className="mt-5 text-[26px] font-semibold leading-10 text-primary">{item.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-secondary">{item.note}</p>
                </div>
                <OrbitalIcon type={item.icon} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
