import type { CSSProperties, ReactNode } from "react";
import { PhoneStatusBar } from "../PhoneMockup";

export type ChatPeer = "wosool" | "customer" | "manager";

interface HeaderProps {
  peer?: ChatPeer;
  status?: string;
  statusColor?: string;
}

function peerInfo(peer: ChatPeer): { name: string; avatar: React.ReactNode; bg: string } {
  if (peer === "customer") {
    return {
      name: "أحمد (عميل)",
      bg: "#3B82F6",
      avatar: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    };
  }
  if (peer === "manager") {
    return {
      name: "المدير",
      bg: "var(--w-agent-owner)",
      avatar: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      ),
    };
  }
  return {
    name: "وصول",
    bg: "var(--w-teal-700)",
    avatar: (
      <svg width="26" height="26" viewBox="74.424 10.582 46.872 28.387" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path fill="var(--w-mint-500)" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z" />
      </svg>
    ),
  };
}

export function WAChatHeader({ peer = "wosool", status = "آخر ظهور الآن", statusColor = "#8696A0" }: HeaderProps) {
  const info = peerInfo(peer);
  return (
    <div
      style={{
        padding: "10px 16px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "#1F2C33",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        flexShrink: 0,
      }}
    >
      <span style={{ color: "#00A884", display: "inline-flex" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: info.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {info.avatar}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <b style={{ display: "block", color: "#E9EDEF", fontSize: 16, fontWeight: 600 }}>{info.name}</b>
        <span style={{ display: "block", color: statusColor, fontSize: 12, marginTop: 2 }}>{status}</span>
      </div>
      <div style={{ display: "flex", gap: 18, color: "#AEBAC1" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
    </div>
  );
}

export function WAComposer() {
  return (
    <div
      style={{
        padding: "8px 8px 14px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#0B141A",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          flex: 1,
          padding: "9px 14px",
          background: "#1F2C33",
          borderRadius: 999,
          color: "#8696A0",
          fontSize: 13,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
        <span>اكتب رسالة</span>
      </span>
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#00A884",
          color: "#fff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        </svg>
      </span>
    </div>
  );
}

export function WAMessageArea({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "16px 12px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        background: `linear-gradient(180deg, rgba(11,20,26,0.92), rgba(11,20,26,0.92)), radial-gradient(circle at 20% 10%, #0d3a2f 0%, transparent 40%), radial-gradient(circle at 80% 80%, #10423a 0%, transparent 40%), #0B141A`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          padding: "4px 12px",
          background: "rgba(33, 44, 54, 0.85)",
          color: "#AEBAC1",
          fontSize: 11,
          borderRadius: 8,
          marginBottom: 4,
        }}
      >
        اليوم
      </div>
      {children}
    </div>
  );
}

const WAVE_BAR_HEIGHTS = [6, 10, 16, 12, 18, 8, 14, 20, 10, 14, 6, 16, 12, 18, 8, 20, 14, 10, 16, 6, 12, 18, 8, 14, 10, 20, 6, 16, 12, 8];

interface VoiceNoteProps {
  /** 0..1 — how much of the waveform is "played" (mint green) */
  playhead?: number;
  /** Extra pulse on the played region (for voice-wave sub-scene) */
  pulse?: number;
  duration?: string;
  time?: string;
}

export function VoiceNoteBubble({ playhead = 8 / 30, pulse = 0, duration = "0:08", time = "٢:١٤ م" }: VoiceNoteProps) {
  const playedCount = Math.round(WAVE_BAR_HEIGHTS.length * playhead);
  return (
    <div
      style={{
        alignSelf: "flex-end",
        background: "#005C4B",
        borderRadius: 12,
        borderBottomRightRadius: 2,
        padding: "8px 10px 6px",
        maxWidth: "82%",
        position: "relative",
        color: "#E9EDEF",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 220, paddingTop: 2 }}>
        <span
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "#0A3430",
            color: "var(--w-mint-500)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            color: "#E9EDEF",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ marginInlineStart: 2 }}>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </span>
        <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 2, height: 24 }}>
          {WAVE_BAR_HEIGHTS.map((h, i) => {
            const played = i < playedCount;
            const pulseAmp = played ? 1 + pulse * 0.25 * Math.sin(i * 0.6) : 1;
            return (
              <i
                key={i}
                style={{
                  display: "block",
                  width: 2,
                  height: h * pulseAmp,
                  background: played ? "#34D399" : "rgba(255,255,255,0.55)",
                  borderRadius: 1,
                  willChange: "height",
                }}
              />
            );
          })}
        </span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "var(--w-font-mono)", minWidth: 28 }}>{duration}</span>
      </div>
      <span style={{ display: "inline-block", marginInlineStart: 8, fontSize: 10.5, color: "rgba(233,237,239,0.5)", float: "inline-end" as CSSProperties["float"], paddingTop: 4 }}>
        {time}
        <svg width="14" height="10" viewBox="0 0 18 18" aria-hidden style={{ verticalAlign: "middle", marginInlineStart: 3, color: "#53BDEB" }}>
          <path fill="currentColor" d="M11.07 2.68 9.66 1.27l-4.6 4.6-1.41-1.41-1.42 1.41L5.06 8.9l6.01-6.22zm4.34-1.41L8.4 8.28 6.53 6.41 5.12 7.83l3.28 3.28 8.43-8.43-1.42-1.41zM1 12.48l4.3 4.3L6.71 15.37l-4.3-4.3L1 12.48z" />
        </svg>
      </span>
    </div>
  );
}

export function TypingBubble() {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        background: "#1F2C33",
        border: "1px solid rgba(115, 252, 215, 0.25)",
        padding: "10px 14px",
        borderRadius: 12,
        borderBottomLeftRadius: 2,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ fontSize: 11, color: "rgba(115, 252, 215, 0.85)", letterSpacing: "0.04em" }}>وصول يكتب</span>
      <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
        <i style={{ width: 6, height: 6, borderRadius: "50%", background: "#8696A0", opacity: 1, animation: "demo-typing 1.4s ease-in-out infinite" }} />
        <i style={{ width: 6, height: 6, borderRadius: "50%", background: "#8696A0", opacity: 0.65, animation: "demo-typing 1.4s ease-in-out 0.2s infinite" }} />
        <i style={{ width: 6, height: 6, borderRadius: "50%", background: "#8696A0", opacity: 0.35, animation: "demo-typing 1.4s ease-in-out 0.4s infinite" }} />
      </span>
      <style>{`@keyframes demo-typing { 0%, 100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(-3px); opacity: 1; } }`}</style>
    </div>
  );
}

export function ReplyBubble({ time = "٢:١٤ م" }: { time?: string }) {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        background: "#1F2C33",
        borderRadius: 12,
        borderBottomLeftRadius: 2,
        border: "1px solid rgba(115, 252, 215, 0.35)",
        boxShadow: "0 0 0 1px rgba(115, 252, 215, 0.08)",
        padding: "8px 10px 6px",
        maxWidth: "82%",
        color: "#E9EDEF",
        fontSize: 14,
        lineHeight: 1.4,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 2 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 14,
            height: 14,
            background: "var(--w-mint-500)",
            borderRadius: 3,
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          <svg width="10" height="6" viewBox="74.424 10.582 46.872 28.387" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fill="#0B1A1F" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z" />
          </svg>
        </span>
        <span style={{ color: "var(--w-mint-300)", fontSize: 11, fontWeight: 700 }}>وصول</span>
      </div>
      <div>
        <span style={{ color: "var(--w-mint-300)", display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 600, marginInlineEnd: 4 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          تم
        </span>
        سماعة X بلوتوث — <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٤٩ ريال</span> — مخزون{" "}
        <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٢٥</span>.
        <br />
        تبي أحط لها صور من المعرض؟
      </div>
      <span style={{ display: "inline-block", marginInlineStart: 8, fontSize: 10.5, color: "rgba(233,237,239,0.5)", float: "inline-end" as CSSProperties["float"], paddingTop: 4 }}>
        {time}
      </span>
    </div>
  );
}

export function TrustChip() {
  return (
    <span
      style={{
        alignSelf: "flex-start",
        marginTop: 2,
        marginInlineStart: 4,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        background: "rgba(115, 252, 215, 0.12)",
        border: "1px solid rgba(115, 252, 215, 0.35)",
        borderRadius: 999,
        fontSize: 10.5,
        color: "var(--w-mint-300)",
        letterSpacing: "0.02em",
      }}
    >
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: 3,
          background: "var(--w-mint-500)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="9" height="9" viewBox="74.424 10.582 46.872 28.387" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#0B1A1F" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z" />
        </svg>
      </span>
      عبر وصول · بأمر من المتجر
    </span>
  );
}

export function WAChatScreen({
  children,
  online = false,
  peer = "wosool",
}: {
  children: ReactNode;
  online?: boolean;
  peer?: ChatPeer;
}) {
  return (
    <>
      <PhoneStatusBar />
      <WAChatHeader peer={peer} status={online ? "متصل" : "آخر ظهور الآن"} statusColor={online ? "#73FCD7" : "#8696A0"} />
      <WAMessageArea>{children}</WAMessageArea>
      <WAComposer />
    </>
  );
}

/** Outgoing text bubble (merchant or customer speaks in text) */
export function TextBubble({ children, time = "٢:١٤ م", small = false }: { children: ReactNode; time?: string; small?: boolean }) {
  return (
    <div
      style={{
        alignSelf: "flex-end",
        background: "#005C4B",
        borderRadius: 12,
        borderBottomRightRadius: 2,
        padding: "8px 10px 6px",
        maxWidth: "82%",
        color: "#E9EDEF",
        fontSize: small ? 13 : 14,
        lineHeight: 1.4,
      }}
    >
      <div>{children}</div>
      <span style={{ display: "inline-block", marginInlineStart: 8, fontSize: 10.5, color: "rgba(233,237,239,0.5)", float: "inline-end" as CSSProperties["float"], paddingTop: 4 }}>
        {time}
        <svg width="14" height="10" viewBox="0 0 18 18" aria-hidden style={{ verticalAlign: "middle", marginInlineStart: 3, color: "#53BDEB" }}>
          <path fill="currentColor" d="M11.07 2.68 9.66 1.27l-4.6 4.6-1.41-1.41-1.42 1.41L5.06 8.9l6.01-6.22zm4.34-1.41L8.4 8.28 6.53 6.41 5.12 7.83l3.28 3.28 8.43-8.43-1.42-1.41zM1 12.48l4.3 4.3L6.71 15.37l-4.3-4.3L1 12.48z" />
        </svg>
      </span>
    </div>
  );
}

/** Flexible Wosool reply bubble — takes arbitrary body content */
export function WosoolReplyBubble({
  children,
  time = "٢:١٤ م",
  showDone = true,
}: {
  children: ReactNode;
  time?: string;
  showDone?: boolean;
}) {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        background: "#1F2C33",
        borderRadius: 12,
        borderBottomLeftRadius: 2,
        border: "1px solid rgba(115, 252, 215, 0.35)",
        boxShadow: "0 0 0 1px rgba(115, 252, 215, 0.08)",
        padding: "8px 10px 6px",
        maxWidth: "82%",
        color: "#E9EDEF",
        fontSize: 14,
        lineHeight: 1.4,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 2 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 14,
            height: 14,
            background: "var(--w-mint-500)",
            borderRadius: 3,
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          <svg width="10" height="6" viewBox="74.424 10.582 46.872 28.387" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fill="#0B1A1F" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z" />
          </svg>
        </span>
        <span style={{ color: "var(--w-mint-300)", fontSize: 11, fontWeight: 700 }}>وصول</span>
      </div>
      <div>
        {showDone && (
          <span style={{ color: "var(--w-mint-300)", display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 600, marginInlineEnd: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            تم
          </span>
        )}
        {children}
      </div>
      <span style={{ display: "inline-block", marginInlineStart: 8, fontSize: 10.5, color: "rgba(233,237,239,0.5)", float: "inline-end" as CSSProperties["float"], paddingTop: 4 }}>
        {time}
      </span>
    </div>
  );
}
