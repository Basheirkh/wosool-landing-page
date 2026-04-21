"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import WosoolMark from "../../demo/primitives/WosoolMark";
import {
  WAChatHeader,
  WAMessageArea,
  VoiceNoteBubble,
  WosoolReplyBubble,
  TrustChip,
  WAComposer,
} from "../../demo/primitives/whatsapp/WAChat";
import { PhoneStatusBar } from "../../demo/primitives/PhoneMockup";

/**
 * Square 1600×1600 social promo asset distributed through Salla's social
 * channels (Twitter/X, Instagram, LinkedIn). Rendered via Puppeteer at
 * exact 1600×1600, deviceScaleFactor 1, clipped to [data-social-promo].
 *
 * Composition: one idea, one message. Logo (RTL top-right),
 * centered phone + single WhatsApp voice→action exchange, two-line
 * Arabic headline, muted subtitle, Salla availability pill.
 *
 * Safe margins: 100px on all four sides are reserved blank in case Salla
 * overlays their own frame when promoting on social.
 */
export default function SocialPromoPage() {
  const [mounted, setMounted] = useState(false);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsRender(params.get("render") === "true");
    setMounted(true);
  }, []);

  const outerPad = isRender ? 0 : 40;
  const outerBg = isRender ? "#F8F8F8" : "#0B1A1F";

  return (
    <div
      style={{
        padding: outerPad,
        background: outerBg,
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div data-social-promo="1" dir="rtl" lang="ar" className="demo-canvas" style={canvas}>
          <SoftGlow />
          <WosoolLogoCluster />
          <PhoneCenter />
          <TextStack />
          <SallaPill />
        </div>
        {mounted && !isRender && process.env.NODE_ENV !== "production" && (
          <a href="?render=true" style={devLink}>
            Render social promo →
          </a>
        )}
      </div>
    </div>
  );
}

// ── Canvas ──────────────────────────────────────────────────────────────

const canvas: CSSProperties = {
  width: 1600,
  height: 1600,
  position: "relative",
  overflow: "hidden",
  background: "#F8F8F8",
  color: "var(--w-text)",
  fontFamily: "var(--w-font-ar)",
  flexShrink: 0,
};

// ── Soft mint radial glow behind the phone ──────────────────────────────

function SoftGlow() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 720px 600px at 800px 720px, rgba(115, 252, 215, 0.20), transparent 70%)",
        pointerEvents: "none",
      }}
    />
  );
}

// ── Wosool logo cluster (visually top-right under RTL) ──────────────────

function WosoolLogoCluster() {
  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        // dir="rtl" flips inset-inline-start to physical right — use `right`
        // explicitly so the logo lives in the top-RIGHT safe-zone corner.
        right: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // flex-start under RTL = physical right edge
        gap: 18,
      }}
    >
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: 32,
          background: "var(--w-teal-700)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 32px rgba(0, 77, 91, 0.20)",
        }}
      >
        <WosoolMark size={96} color="var(--w-mint-500)" />
      </div>
      <span
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "var(--w-ink)",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        وصول
      </span>
    </div>
  );
}

// ── Phone centered ──────────────────────────────────────────────────────

function PhoneCenter() {
  return (
    <div
      style={{
        position: "absolute",
        top: 260,
        left: "50%",
        transform: "translateX(-50%) rotate(3deg)",
        transformOrigin: "center center",
      }}
    >
      <PhoneShell>
        <PhoneStatusBar />
        <WAChatHeader peer="wosool" status="متصل" statusColor="#73FCD7" />
        <WAMessageArea>
          <VoiceNoteBubble playhead={1} duration="0:08" time="٢:١٤ م" />
          <WosoolReplyBubble time="٢:١٤ م">
            سماعة X مضافة
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 14,
                height: 14,
                marginInlineStart: 6,
                borderRadius: 3,
                background: "var(--w-mint-500)",
                color: "#0B1A1F",
                verticalAlign: "-2px",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </WosoolReplyBubble>
          <TrustChip />
        </WAMessageArea>
        <WAComposer />
      </PhoneShell>
    </div>
  );
}

/**
 * Local phone shell — the demo's PhoneMockup is absolutely-positioned for
 * the 1920×1080 banner canvas, which doesn't compose cleanly here. This
 * mirrors its visual treatment without the absolute anchor.
 */
function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: 420,
        height: 620,
        borderRadius: 52,
        background: "#111",
        padding: 12,
        boxShadow: "0 60px 120px rgba(11, 26, 31, 0.22), 0 0 0 2px #1f2937, inset 0 0 0 2px #000",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 42,
          overflow: "hidden",
          background: "#0B141A",
          position: "relative",
          color: "#E9EDEF",
          fontFamily: "var(--w-font-ar), -apple-system, BlinkMacSystemFont, sans-serif",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 28,
            background: "#000",
            borderRadius: 18,
            zIndex: 3,
          }}
        />
        {children}
      </div>
    </div>
  );
}

// ── Headline + subtitle ─────────────────────────────────────────────────

function TextStack() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 340,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 24,
        padding: "0 100px",
      }}
    >
      <h1
        style={{
          fontSize: 88,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: "var(--w-ink)",
          margin: 0,
        }}
      >
        تكلّم <span style={{ color: "var(--w-teal-700)" }}>متجرك</span>.
        <br />
        يسويه.
      </h1>
      <p
        style={{
          fontSize: 32,
          lineHeight: 1.42,
          color: "var(--w-text-soft)",
          fontWeight: 500,
          margin: 0,
          maxWidth: 1200,
        }}
      >
        نظام تشغيل متجرك على سلة — من واتساب
      </p>
    </div>
  );
}

// ── Salla availability pill ─────────────────────────────────────────────

function SallaPill() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 24px",
          borderRadius: 999,
          background: "var(--w-teal-50)",
          border: "1px solid var(--w-teal-300)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "var(--w-mint-500)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WosoolMark size={22} color="var(--w-ink)" />
        </span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "var(--w-teal-900)",
          }}
        >
          متوفر في متجر تطبيقات سلة
        </span>
      </div>
    </div>
  );
}

const devLink: CSSProperties = {
  color: "#73FCD7",
  fontFamily: "var(--w-font-mono, monospace)",
  fontSize: 13,
  letterSpacing: "0.05em",
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  opacity: 0.85,
  marginTop: 8,
};
