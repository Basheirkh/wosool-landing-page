"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  { name: "واتساب Business", src: "/logos/whatsapp.svg", status: "جاهز الآن", available: true, note: "القناة الأساسية للتشغيل" },
  { name: "سلة", src: "/logos/salla.svg", status: "جاهز الآن", available: true, note: "الطلبات والمخزون والمنتجات" },
  { name: "Meta", src: "/logos/meta.svg", status: "قريباً", available: false, note: "طبقة القنوات الأوسع" },
  { name: "Instagram", src: "/logos/instagram.svg", status: "قريباً", available: false, note: "امتداد اجتماعي للتفاعل" },
  { name: "Facebook", src: "/logos/facebook.svg", status: "قريباً", available: false, note: "نفس الهوية عبر المنصات" },
  { name: "Zid", src: "/logos/zid.svg", status: "قريباً", available: false, note: "تكامل متجر إضافي" },
  { name: "Shopify", src: "/logos/shopify.svg", status: "قريباً", available: false, note: "امتداد عالمي للتجارة" },
  { name: "Google Analytics", src: "/logos/google-analytics.svg", status: "قريباً", available: false, note: "قراءة أعمق للأداء" },
];

export default function Integrations() {
  return (
    <section id="product" className="relative overflow-hidden px-6 py-24 bg-surface-inset">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 16% 22%, rgba(0,184,108,0.10), transparent 26%), radial-gradient(circle at 82% 18%, rgba(96,165,250,0.10), transparent 24%), radial-gradient(circle at 48% 78%, rgba(246,196,83,0.08), transparent 28%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-4xl text-right"
        >
          <span className="mb-4 block text-sm text-secondary">التكاملات</span>
          <h2 className="text-[30px] font-bold leading-[1.12] md:text-[42px] lg:text-[54px]">
            وصول لا يبدأ من لوحة فارغة.
            <br />
            <span className="text-secondary">يبدأ من الأدوات التي يعمل بها متجرك أصلًا.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-secondary">
            لهذا يجب أن يظهر قسم التكامل مبكرًا: التاجر يفهم سريعًا أن الوصول لن يفرض stack جديدًا، بل يدخل فوق واتساب والمتجر والتحليلات.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[28px] border p-6 ${
                item.available ? "border-brand-primary/20" : "border-subtle"
              }`}
              style={{
                background: item.available
                  ? "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 86%, rgba(var(--brand-primary-rgb),0.16)), var(--bg-surface))"
                  : "linear-gradient(135deg, color-mix(in srgb, var(--bg-surface) 92%, #edf2f5 8%), var(--bg-surface))",
                boxShadow: item.available
                  ? "0 18px 44px rgba(0,184,108,0.08)"
                  : "0 16px 38px rgba(16,32,42,0.06)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-70"
                style={{
                  background: item.available
                    ? "radial-gradient(circle at top, rgba(var(--brand-primary-rgb),0.14), transparent 68%)"
                    : "radial-gradient(circle at top, rgba(96,165,250,0.08), transparent 72%)",
                }}
              />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div
                  className="flex h-[110px] w-[110px] items-center justify-center rounded-[22px] border border-black/[0.06] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none"
                  style={{ borderColor: item.available ? "rgba(var(--brand-primary-rgb),0.16)" : undefined }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={220}
                    height={88}
                    className={`max-h-[74px] w-auto object-contain ${item.available ? "" : "opacity-72 grayscale"}`}
                  />
                </div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-[0_8px_20px_rgba(16,32,42,0.06)] ${
                    item.available
                      ? "bg-[rgba(var(--brand-primary-rgb),0.14)] text-brand-primary ring-1 ring-brand-primary/16"
                      : "bg-surface text-secondary ring-1 ring-[var(--border-subtle)]"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${item.available ? "bg-brand-primary shadow-[0_0_12px_rgba(0,184,108,0.45)]" : "bg-slate-400/70"}`} />
                  {item.status}
                </span>
              </div>

              <div className="relative z-10 mt-6">
                <h3 className="text-[22px] font-semibold leading-8 text-primary">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-secondary">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="mt-8 flex flex-wrap gap-3 text-sm"
        >
          {[
            "واتساب جاهز للتشغيل",
            "سلة جاهزة للربط",
            "Meta / Instagram / Facebook في الطريق",
            "Shopify / Zid / Analytics ضمن roadmap الواضحة",
          ].map((item) => (
            <span key={item} className="rounded-full border border-subtle bg-ghost px-4 py-2 text-secondary">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
