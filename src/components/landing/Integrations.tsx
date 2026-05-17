"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Integrations() {
  const t = useTranslations("Integrations");

  const integrations = [
    { name: t("i1_name"), src: "/logos/whatsapp.svg", status: t("status_ready"), available: true, note: t("i1_note") },
    { name: t("i2_name"), src: "/logos/salla.svg", status: t("status_ready"), available: true, note: t("i2_note") },
    { name: t("i3_name"), src: "/logos/zid.svg", status: t("status_soon"), available: false, note: t("i3_note") },
    { name: t("i4_name"), src: "/logos/shopify.svg", status: t("status_soon"), available: false, note: t("i4_note") },
    { name: t("i5_name"), src: "/logos/meta.svg", status: t("status_soon"), available: false, note: t("i5_note") },
  ];

  return (
    <section id="product" className="relative overflow-hidden px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
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
          className="mb-10 max-w-4xl text-start md:mb-14"
        >
          <h2 className="text-[30px] font-bold leading-[1.12] md:text-[42px] lg:text-[54px]">
            {t("heading")}
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-secondary">
            {t("sub_line1")}
            <br />
            {t("sub_line2")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-5 md:gap-4">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[22px] border p-4 md:rounded-[28px] md:p-6 ${
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
                className="pointer-events-none absolute inset-x-0 top-0 hidden h-20 opacity-70 md:block"
                style={{
                  background: item.available
                    ? "radial-gradient(circle at top, rgba(var(--brand-primary-rgb),0.14), transparent 68%)"
                    : "radial-gradient(circle at top, rgba(96,165,250,0.08), transparent 72%)",
                }}
              />

              <div className="relative z-10 flex items-start justify-between gap-3 md:gap-4">
                <div
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-[16px] border border-black/[0.06] bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none md:h-[110px] md:w-[110px] md:rounded-[22px] md:p-4"
                  style={{ borderColor: item.available ? "rgba(var(--brand-primary-rgb),0.16)" : undefined }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={220}
                    height={88}
                    className={`max-h-[42px] w-auto object-contain md:max-h-[74px] ${item.available ? "" : "opacity-72 grayscale"}`}
                  />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium shadow-[0_8px_20px_rgba(16,32,42,0.06)] md:gap-2 md:px-4 md:py-2 md:text-xs ${
                    item.available
                      ? "bg-[rgba(var(--brand-primary-rgb),0.14)] text-brand-primary ring-1 ring-brand-primary/16"
                      : "bg-surface text-secondary ring-1 ring-[var(--border-subtle)]"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${item.available ? "bg-brand-primary shadow-[0_0_12px_rgba(0,184,108,0.45)]" : "bg-slate-400/70"}`} />
                  {item.status}
                </span>
              </div>

              <div className="relative z-10 mt-4 md:mt-6">
                <h3 className="text-[16px] font-semibold leading-6 text-primary md:text-[22px] md:leading-8">{item.name}</h3>
                <p className="mt-1.5 hidden text-[13px] leading-6 text-secondary md:mt-2 md:block md:text-sm md:leading-7">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
