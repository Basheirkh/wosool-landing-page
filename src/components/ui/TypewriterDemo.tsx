"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mic, HelpCircle, Check, Play } from "lucide-react";

const waveformBars = [40, 65, 30, 80, 50, 90, 35, 70, 55, 85, 40, 60, 75, 45, 90, 55, 70, 35, 80, 50, 65, 40, 75, 55, 85, 45, 60, 70, 35, 80];

type Scene = {
  sender: string;
  message: string;
  isVoice?: boolean;
  response: string;
  responseDetail?: string;
  hasCheck?: boolean;
};

const scenes: Scene[] = [
  {
    sender: "أنت",
    message: "أضف سماعة X ب 149 ريال",
    response: "تم — سماعة X — 149 ريال — مخزون 8",
    hasCheck: true,
    responseDetail: "تبي أحط لها صورة؟",
  },
  {
    sender: "أنت",
    message: "خفّض الكاميرا عشرين ريال",
    isVoice: true,
    response: "تم — كاميرا X — كان 299 — صار 279 ريال",
    hasCheck: true,
  },
  {
    sender: "أنت",
    message: "كم بعنا اليوم؟",
    response: "اليوم: 12 طلب — 4,350 ريال",
    responseDetail: "أكثر منتج: سماعة X (5 حبات)",
  },
];

const sceneIndicators = [
  { icon: MessageCircle, label: "نص" },
  { icon: Mic, label: "صوت" },
  { icon: HelpCircle, label: "سؤال" },
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
    }, 4000);

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

        {/* WhatsApp-style chat area */}
        <div className="relative z-10 flex h-full min-h-[470px] md:min-h-[560px] flex-col justify-between p-5 md:p-8">
          {/* Chat header */}
          <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: "1px solid var(--art-border)" }}>
            <div className="relative flex-shrink-0">
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
            <div>
              <span className="text-[15px] font-semibold" style={{ color: "var(--demo-text-primary)" }}>وصول</span>
              <span className="text-[12px] mr-2" style={{ color: "var(--demo-text-secondary)" }}>· واتساب</span>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            {/* User message */}
            <motion.div
              key={`user-${activeScene}`}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="flex justify-start"
            >
              <div
                className="max-w-[80%] rounded-[18px] rounded-tr-[4px] px-5 py-3.5"
                style={{ background: "var(--demo-bubble)", boxShadow: "var(--demo-bubble-shadow)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[12px] font-medium text-brand-primary">{scene.sender}</span>
                </div>

                {scene.isVoice ? (
                  <div className="flex items-center gap-3">
                    {/* Play button */}
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary shadow-[0_4px_12px_rgba(0,217,126,0.3)]">
                      <Play size={16} className="text-on-brand mr-[-1px]" fill="currentColor" strokeWidth={0} />
                    </div>

                    {/* Waveform */}
                    <div className="flex-1 flex items-center gap-[3px] h-8">
                      {waveformBars.map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ scaleY: [1, 0.5 + Math.random() * 0.8, 1] }}
                          transition={{ duration: 0.6 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.05 }}
                          className="w-[3px] rounded-full bg-brand-primary/60"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    {/* Duration */}
                    <span className="text-[12px] flex-shrink-0" style={{ color: "var(--demo-text-muted)" }}>0:03</span>

                    {/* Mic icon */}
                    <Mic size={16} className="text-brand-primary flex-shrink-0" strokeWidth={2} />
                  </div>
                ) : (
                  <p className="text-[15px] leading-[1.6]" style={{ color: "var(--demo-text-primary)" }}>
                    {scene.message}
                  </p>
                )}

                {scene.isVoice && (
                  <p className="text-[13px] mt-2 leading-[1.5]" style={{ color: "var(--demo-text-secondary)" }}>
                    &quot;{scene.message}&quot;
                  </p>
                )}
              </div>
            </motion.div>

            {/* Wosool response */}
            <motion.div
              key={`resp-${activeScene}`}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="flex justify-end"
            >
              <div
                className="max-w-[75%] rounded-[18px] rounded-tl-[4px] px-5 py-3.5"
                style={{
                  background: "linear-gradient(135deg, rgba(var(--brand-primary-rgb),0.14), rgba(var(--brand-primary-rgb),0.06))",
                  border: "1px solid rgba(var(--brand-primary-rgb),0.16)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <WosoolLogo />
                  <span className="text-[12px] font-medium" style={{ color: "var(--demo-text-secondary)" }}>وصول</span>
                </div>
                <p className="text-[15px] leading-[1.6] font-medium inline-flex items-center gap-1.5 flex-wrap" style={{ color: "var(--demo-text-primary)" }}>
                  {scene.hasCheck && <Check size={15} className="text-brand-primary flex-shrink-0" strokeWidth={2.5} />}
                  {scene.response}
                </p>
                {scene.responseDetail && (
                  <p className="text-[13px] leading-[1.6] mt-1.5" style={{ color: "var(--demo-text-secondary)" }}>
                    {scene.responseDetail}
                  </p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Scene indicators */}
          <div className="flex items-center justify-center gap-3 mt-6 pt-4" style={{ borderTop: "1px solid var(--art-border)" }}>
            {sceneIndicators.map((indicator, i) => {
              const Icon = indicator.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveScene(i)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] transition-all"
                  style={{
                    background: i === activeScene ? "rgba(var(--brand-primary-rgb),0.14)" : "transparent",
                    color: i === activeScene ? "var(--brand-primary)" : "var(--demo-text-muted)",
                    border: i === activeScene ? "1px solid rgba(var(--brand-primary-rgb),0.20)" : "1px solid transparent",
                  }}
                >
                  <Icon size={12} strokeWidth={2} />
                  {indicator.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
