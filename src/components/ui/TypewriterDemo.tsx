"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Scene = {
  command: string;
  status: string;
  product: string;
  price: string;
  oldPrice?: string;
  stockLabel: string;
  stockWidth: string;
  badge: string;
  visible: boolean;
};

const scenes: Scene[] = [
  {
    command: "أضف منتج: سماعة X بسعر 149 ريال",
    status: "تمت إضافة المنتج",
    product: "سماعة X",
    price: "149 ر.س",
    stockLabel: "8 وحدات",
    stockWidth: "82%",
    badge: "جديد",
    visible: true,
  },
  {
    command: "عدّل السعر إلى 129 ريال",
    status: "تم تحديث السعر",
    product: "سماعة X",
    price: "129 ر.س",
    oldPrice: "149 ر.س",
    stockLabel: "8 وحدات",
    stockWidth: "82%",
    badge: "خصم",
    visible: true,
  },
  {
    command: "حدّث المخزون إلى 6 وحدات",
    status: "تم تحديث المخزون",
    product: "سماعة X",
    price: "129 ر.س",
    oldPrice: "149 ر.س",
    stockLabel: "6 وحدات",
    stockWidth: "38%",
    badge: "مخزون منخفض",
    visible: true,
  },
  {
    command: "احذف المنتج",
    status: "تم حذف المنتج",
    product: "سماعة X",
    price: "",
    stockLabel: "0 وحدات",
    stockWidth: "0%",
    badge: "محذوف",
    visible: false,
  },
];

function WosoolLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="74.424 10.58 46.872 28.387"
      width="18"
      height="11"
      aria-hidden="true"
    >
      <path
        fill="#00D97E"
        d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"
      />
    </svg>
  );
}

export default function TypewriterDemo() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  const scene = scenes[activeScene];

  return (
    <div className="w-full max-w-[980px] mx-auto">
      <div
        className="relative min-h-[470px] overflow-hidden rounded-[26px] md:min-h-[560px] md:rounded-[30px]"
        style={{ background: "var(--demo-shell)", border: "1px solid var(--art-border)", boxShadow: "var(--demo-shell-shadow)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top right, var(--demo-glow) 0%, transparent 28%), radial-gradient(circle at 28% 78%, var(--demo-glow-strong) 0%, transparent 22%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.24]">
          <div className="h-full w-full [background-size:18px_18px]" style={{ backgroundImage: "radial-gradient(circle, var(--demo-dot-grid) 1px, transparent 1px)" }} />
        </div>

        {/* iPhone WhatsApp Notification + Status badge below */}
        <div className="absolute left-4 right-4 top-4 z-20 flex flex-col items-center gap-3 md:left-6 md:right-6 md:top-6">
          {/* Notification */}
          <motion.div
            key={`notif-${activeScene}`}
            initial={{ opacity: 0, y: -18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-[420px] rounded-[20px] px-4 py-3.5 backdrop-blur-2xl md:rounded-[24px] md:px-5 md:py-4"
            style={{ background: "var(--demo-bubble)", boxShadow: "var(--demo-bubble-shadow)" }}
          >
            <div className="flex items-start gap-3.5">
              {/* Profile picture with WhatsApp badge */}
              <div className="relative flex-shrink-0 mt-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full ring-1" style={{ background: "var(--demo-profile-bg)", boxShadow: "0 0 0 1px var(--demo-ring) inset" }}>
                  <WosoolLogo />
                </div>
                <div className="absolute -bottom-0.5 -left-0.5 flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#25D366]" style={{ boxShadow: "var(--demo-wa-badge-shadow)" }}>
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.252-.149-2.868.852.852-2.868-.168-.268A8 8 0 1112 20z" />
                  </svg>
                </div>
              </div>

              {/* Notification content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-semibold" style={{ color: "var(--demo-text-primary)" }}>وصول</span>
                    <span className="text-[12px]" style={{ color: "var(--demo-text-secondary)" }}>· واتساب</span>
                  </div>
                  <span className="text-[12px]" style={{ color: "var(--demo-text-secondary)" }}>الآن</span>
                </div>

                <p className="mt-1.5 text-[15px] leading-[1.5]" style={{ color: "var(--demo-text-primary)" }}>
                  {scene.command}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Status badge — outside notification */}
          <motion.div
            key={`status-${activeScene}`}
            initial={{ opacity: 0, y: -8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium backdrop-blur-lg"
            style={{ background: "var(--demo-status-bg)", color: "var(--demo-status-text)", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {scene.status}
          </motion.div>
        </div>

        {/* Product card area */}
        <div className="relative z-10 px-4 pb-4 pt-[158px] md:px-6 md:pb-6 md:pt-[195px]">
          <div className="grid min-h-[270px] gap-3 md:min-h-[340px] md:gap-4 md:grid-cols-[1fr_0.82fr]">
            {/* Store placeholder — desktop only */}
            <div
              className="hidden md:block relative overflow-hidden rounded-[22px] p-4 md:rounded-[26px] md:p-6"
              style={{ background: "var(--demo-panel)", border: "1px solid var(--demo-ring)" }}
            >
              <div className="grid grid-cols-2 gap-2.5 opacity-60 md:gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="h-20 rounded-[18px] md:h-24 md:rounded-2xl" style={{ border: "1px solid var(--demo-ring)", background: "var(--demo-placeholder-soft)" }} />
                ))}
              </div>
              <div className="mt-2.5 h-16 rounded-[18px] md:mt-3 md:h-20 md:rounded-[24px]" style={{ border: "1px solid var(--demo-ring)", background: "var(--demo-placeholder-soft)" }} />
            </div>

            <motion.div
              key={`card-${activeScene}`}
              initial={{ opacity: 0.4, scale: 0.96 }}
              animate={{
                opacity: scene.visible ? 1 : 0.2,
                scale: scene.visible ? [0.985, 1] : 0.985,
                borderColor:
                  activeScene > 0
                    ? "var(--demo-card-border)"
                    : "rgba(255,255,255,0.06)",
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[22px] p-4 md:rounded-[26px] md:p-5"
              style={{
                background: "var(--demo-card)",
                border: "1px solid var(--demo-card-border)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.34)",
              }}
            >
              <motion.div
                animate={{
                  opacity: scene.visible ? [0.14, 0.34, 0.14] : 0,
                  scale: scene.visible ? [1, 1.03, 1] : 1,
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 28% 34%, var(--demo-glow-strong) 0%, transparent 40%), linear-gradient(135deg, transparent, var(--demo-glow), transparent)",
                }}
              />
              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                  opacity: scene.visible ? [0, 0.38, 0] : 0,
                }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-[44%]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(0,217,126,0) 18%, var(--demo-glow-strong) 50%, rgba(0,217,126,0) 82%, transparent 100%)",
                  filter: "blur(12px)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="mb-4 rounded-[22px] p-4 md:mb-5 md:rounded-[24px] md:p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--demo-card-hero), var(--demo-placeholder-soft))",
                    border: "1px solid var(--demo-card-border)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
                  }}
                >
                  <div className="h-16 rounded-[16px] md:h-[72px]" style={{ background: "linear-gradient(135deg, var(--demo-placeholder-soft), rgba(var(--brand-primary-rgb),0.06))" }} />
                </div>
                <div className="text-center text-sm font-medium" style={{ color: "var(--demo-text-primary)" }}>
                  {scene.visible ? scene.product : "تم حذف المنتج"}
                </div>

                <div
                  className="mt-3 rounded-[22px] px-4 py-4 md:mt-4 md:px-5 md:py-5"
                  style={{
                    background: "linear-gradient(180deg, var(--demo-card-hero), rgba(var(--brand-primary-rgb),0.03))",
                    border: "1px solid var(--demo-card-border)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex min-h-[42px] items-end justify-center gap-2 md:min-h-[52px]">
                  {scene.visible ? (
                    <>
                      <motion.span
                        key={`price-${scene.price}`}
                        initial={{ opacity: 0.2, y: 14, scale: 0.86 }}
                        animate={{ opacity: 1, y: 0, scale: [1.12, 1] }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[30px] font-semibold leading-none md:text-[36px]"
                        style={{ color: "var(--demo-text-primary)" }}
                      >
                        {scene.price}
                      </motion.span>
                      {scene.oldPrice && (
                        <span className="mb-0.5 text-xs line-through md:mb-1 md:text-sm" style={{ color: "var(--demo-text-muted)" }}>
                          {scene.oldPrice}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-sm" style={{ color: "var(--demo-text-muted)" }}>لا يظهر في الموقع الآن</span>
                  )}
                  </div>

                  <div className="mt-3 flex items-center justify-center">
                    <div className="inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-brand-primary" style={{ background: "rgba(var(--brand-primary-rgb),0.14)", boxShadow: "inset 0 0 0 1px rgba(var(--brand-primary-rgb),0.16)" }}>
                      {scene.badge}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs" style={{ color: "var(--demo-text-secondary)" }}>
                    <span>المخزون</span>
                    <span>{scene.visible ? scene.stockLabel : "—"}</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full" style={{ background: "var(--demo-track)", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)" }}>
                    <motion.div
                      key={`stock-${scene.stockWidth}`}
                      initial={{ width: "82%" }}
                      animate={{ width: scene.stockWidth }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, rgba(var(--brand-primary-rgb),0.55), var(--brand-primary))", boxShadow: "0 0 18px rgba(var(--brand-primary-rgb),0.35)" }}
                    />
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-[10%] top-[38%] h-24 rounded-full blur-3xl"
                  style={{ background: "var(--demo-card-emphasis)", opacity: scene.visible ? 1 : 0 }}
                />
                <div
                  className="pointer-events-none absolute inset-x-[18%] bottom-[18%] h-px"
                  style={{ background: "linear-gradient(90deg, transparent, var(--brand-primary), transparent)", opacity: scene.visible ? 0.45 : 0 }}
                >
                  <motion.div
                    key={`stock-${scene.stockWidth}`}
                    initial={{ width: "82%" }}
                    animate={{ width: scene.stockWidth }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="h-full rounded-full bg-brand-primary"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
