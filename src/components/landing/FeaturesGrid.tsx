"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

function MiniWindow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[24px] shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-sm ${className}`}
      style={{
        border: "1px solid var(--art-panel-border)",
        background: "var(--art-panel)",
      }}
    >
      {children}
    </div>
  );
}

function IconBadge({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "green" | "purple" | "blue";
  className?: string;
}) {
  const tones = {
    default: "",
    green: "bg-brand-primary/12 text-brand-primary",
    purple: "bg-violet-400/12 text-violet-300",
    blue: "bg-sky-400/12 text-sky-300",
  };

  return (
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-lg ${tones[tone]} ${className}`}
      style={tone === "default" ? { background: "var(--art-chip-bg)", color: "var(--art-text-secondary)" } : undefined}
    >
      {children}
    </div>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.8 8.8 0 0 1-4-.9L3 21l1.3-4.8A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 10.5h7" />
      <path d="M8.5 14h4.5" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5h16" />
      <path d="M6 10.5l1.2-4h9.6l1.2 4" />
      <path d="M6.5 10.5V18h11v-7.5" />
      <path d="M9.5 18v-4h5v4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12.05A8 8 0 0 1 8.53 19.2L4 20l.82-4.44A8 8 0 1 1 20 12.05Z" />
      <path d="M9 9.7c.2-.3.4-.3.7-.3h.4c.2 0 .4.1.5.4l.6 1.7c.1.2.1.4 0 .5l-.4.5c-.2.2-.2.3 0 .5.5.8 1.3 1.4 2.2 1.9.2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l1.6.7c.3.1.4.3.4.5 0 .5-.4 1.1-.9 1.4-.4.2-.9.3-1.4.2-2-.6-3.8-2.1-5-4-.4-.7-.4-1.5.2-2.3Z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 4.5a2.5 2.5 0 0 0-4 2v.2a3 3 0 0 0-1 5.6A3 3 0 0 0 6 18h.5" />
      <path d="M14.5 4.5a2.5 2.5 0 0 1 4 2v.2a3 3 0 0 1 1 5.6A3 3 0 0 1 18 18h-.5" />
      <path d="M9.5 4.5c.7-.3 1.5-.5 2.5-.5s1.8.2 2.5.5" />
      <path d="M9 9c.6.4 1.3.6 3 .6s2.4-.2 3-.6" />
      <path d="M9 15c.6-.4 1.3-.6 3-.6s2.4.2 3 .6" />
      <path d="M12 4v16" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 6 5.5v5.8c0 4 2.4 7.5 6 9.2 3.6-1.7 6-5.2 6-9.2V5.5L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.3" />
    </svg>
  );
}

const features = [
  {
    title: "يعرف من يتكلم معه قبل أن يسأل.",
    description: "يرى العميل وسياقه قبل أن يرد.",
    badge: "معرفة العميل",
    visual: (
      <div className="flex h-full w-full items-end justify-center p-6">
        <MiniWindow className="w-[300px] overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-4" style={{ borderBottom: "1px solid var(--art-border)" }}>
            <div className="flex gap-1.5">
              <IconBadge>
                <ClockIcon />
              </IconBadge>
              <IconBadge tone="purple">
                <StoreIcon />
              </IconBadge>
              <IconBadge tone="green">
                <MessageIcon />
              </IconBadge>
            </div>
            <span className="text-[13px] font-semibold" style={{ color: "var(--art-text-primary)" }}>Customer Agent</span>
            <div className="mr-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-[#080B0F] shadow-[0_8px_18px_rgba(0,217,126,0.25)]">
              <ShieldIcon />
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-semibold" style={{ color: "var(--art-text-primary)" }}>Profile Match</span>
              <span className="rounded-full bg-brand-primary/12 px-2 py-1 text-[10px] text-brand-primary">
                matched
              </span>
            </div>
            <p className="text-[12px] leading-6" style={{ color: "var(--art-text-secondary)" }}>
              رقم العميل مطابق لـ 3 طلبات سابقة. آخر تواصل كان قبل 5 أيام. استخدم رداً مباشراً وواضحاً.
            </p>
          </div>
        </MiniWindow>
      </div>
    ),
  },
  {
    title: "4 طبقات ذاكرة بدل محادثة تنسى كل شيء.",
    description: "جلسة، مهام، قرارات، ومتجر.",
    badge: "الذاكرة",
    visual: (
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="w-[290px] space-y-4">
          <MiniWindow className="px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/12 text-brand-primary">
                <LayersIcon />
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold" style={{ color: "var(--art-text-primary)" }}>Session Memory</div>
                <div className="mt-1 inline-flex rounded-full bg-brand-primary/12 px-2 py-1 text-[10px] text-brand-primary">
                  نشطة
                </div>
              </div>
            </div>
          </MiniWindow>
          <MiniWindow className="px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400/12 text-sky-300">
                <ShieldIcon />
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold" style={{ color: "var(--art-text-primary)" }}>Decision Log</div>
                <div className="mt-1 text-[11px]" style={{ color: "var(--art-text-muted)" }}>لا خصم تحت 100 ريال</div>
              </div>
            </div>
          </MiniWindow>
        </div>
      </div>
    ),
  },
  {
    title: "يعرف متى ينفذ، ومتى يسأل، ومتى يتوقف.",
    description: "ينفذ، أو يسأل، أو يتوقف.",
    badge: "الموافقة",
    visual: (
      <div className="flex h-full w-full items-center justify-center p-6">
        <MiniWindow className="w-[300px] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid var(--art-border)" }}>
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
              <span className="text-[13px] font-semibold" style={{ color: "var(--art-text-primary)" }}>Approval Engine</span>
            </div>
          </div>
          <div className="space-y-3 px-4 py-4">
            <div className="mr-auto max-w-[78%] rounded-2xl px-3 py-2.5 text-[12px]" style={{ background: "var(--art-chip-bg)", color: "var(--art-text-primary)" }}>
              عميل يطلب استرداد 350 ريال.
            </div>
            <div className="max-w-[85%] rounded-2xl px-3 py-2.5 text-[12px] leading-6" style={{ background: "var(--art-panel-soft)", color: "var(--art-text-secondary)" }}>
              هذه الحالة تحتاج موافقتك أولاً. هل توافق على الاسترداد؟
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-3 text-[12px]" style={{ borderTop: "1px solid var(--art-border)", color: "var(--art-text-muted)" }}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/12">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2.3">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
            <span>نعم / لا</span>
          </div>
        </MiniWindow>
      </div>
    ),
  },
  {
    title: "ليس أذكى من ChatGPT عموماً. أذكى داخل متجرك.",
    description: "ليس أذكى عموماً. أذكى داخل عملك.",
    badge: "الطبقة الذكية",
    visual: (
      <div className="flex h-full w-full items-center justify-center p-6">
        <MiniWindow className="w-[280px] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[13px] font-semibold" style={{ color: "var(--art-text-primary)" }}>Context Layers</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-md" style={{ border: "1px solid var(--art-panel-border)", color: "var(--art-text-muted)" }}>
              <PlusIcon />
            </span>
          </div>
          <div className="space-y-2.5">
            {[
              {
                icon: <StoreIcon />,
                name: "سلة",
                sub: "الطلبات والمنتجات",
                color: "bg-violet-400/12",
                iconTone: "text-violet-300",
              },
              {
                icon: <WhatsAppIcon />,
                name: "واتساب",
                sub: "المحادثات المباشرة",
                color: "bg-brand-primary/12",
                iconTone: "text-brand-primary",
              },
              {
                icon: <BrainIcon />,
                name: "الذاكرة",
                sub: "القرارات والسياسات",
                color: "bg-sky-400/12",
                iconTone: "text-sky-300",
              },
            ].map((cap) => (
              <div
                key={cap.name}
                className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${cap.color}`}
              >
                <span className={cap.iconTone}>{cap.icon}</span>
                <div>
                  <div className="text-[12px] font-semibold" style={{ color: "var(--art-text-primary)" }}>{cap.name}</div>
                  <div className="text-[10px]" style={{ color: "var(--art-text-muted)" }}>{cap.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </MiniWindow>
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
            <div className="flex-1 h-px bg-ghost-strong" />
            <span className="text-sm text-secondary">الإمكانات</span>
          </div>

          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15] text-right max-w-4xl mr-0 ml-auto">
            لا نبيع Chatbot بواجهة عربية.
            <br />
            نبيع طبقة تشغيل
            <br />
            <span className="text-secondary">تفهم. تقرر. تنفذ.</span>
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
              className="group overflow-hidden rounded-[26px] border border-subtle bg-surface-elevated transition-all duration-300 hover:border-medium hover:bg-surface-elevated"
            >
              {/* Card top — "تعرف على المزيد ↗" like Botpress */}
              <div className="flex justify-end p-5 pb-0">
                <a href="#" className="flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors">
                  تعرف على المزيد
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>

              <div className="relative h-[260px]">
                <LandingArtFrame
                  theme={i === 0 ? "signal" : i === 1 ? "memory" : i === 2 ? "vault" : "network"}
                  word={feature.badge}
                  accent={i === 0 ? "#FB7185" : i === 1 ? "#A78BFA" : i === 2 ? "#F97316" : "#00D97E"}
                  secondaryAccent={i === 0 ? "#00D97E" : i === 1 ? "#00D97E" : i === 2 ? "#F6C453" : "#38BDF8"}
                  className="h-full rounded-none border-0"
                  hideWord
                  minimal
                >
                  {feature.visual}
                </LandingArtFrame>
              </div>

              {/* Text below card */}
              <div className="border-t border-faint p-6 pt-4">
                <div className="inline-flex items-center gap-2 text-[11px] text-brand-primary mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {feature.badge}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
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
