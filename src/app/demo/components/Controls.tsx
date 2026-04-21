"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { PlaybackState } from "../engine/types";

interface Props {
  state: PlaybackState;
  progress: number;
  isMuted: boolean;
  musicEnabled: boolean;
  musicVolume: number;
  voiceVolume: number;
  visible: boolean;
  onToggle: () => void;
  onReplay: () => void;
  onToggleMute: () => void;
  onToggleMusic: () => void;
  onMusicVolumeChange: (volume: number) => void;
  onVoiceVolumeChange: (volume: number) => void;
}

const btn: CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  padding: 0,
};

const divider: CSSProperties = {
  width: 1,
  height: 20,
  background: "rgba(255,255,255,0.12)",
};

export default function Controls({
  state,
  progress,
  isMuted,
  musicEnabled,
  musicVolume,
  voiceVolume,
  visible,
  onToggle,
  onReplay,
  onToggleMute,
  onToggleMusic,
  onMusicVolumeChange,
  onVoiceVolumeChange,
}: Props) {
  const isPlaying = state === "playing";

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ duration: 0.2 }}
      role="toolbar"
      aria-label="عناصر تحكم العرض"
      style={{
        position: "absolute",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 16px",
        borderRadius: 999,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        pointerEvents: visible ? "auto" : "none",
        fontFamily: "var(--font-jetbrains)",
      }}
    >
      <button type="button" onClick={onToggle} aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"} style={btn}>
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </button>

      <div
        aria-label="شريط التقدم"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        style={{
          width: 260,
          height: 3,
          background: "rgba(255,255,255,0.15)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${Math.min(100, progress * 100)}%`,
            background: "var(--brand-primary, #00D97E)",
          }}
        />
      </div>

      <button type="button" onClick={onReplay} aria-label="إعادة" style={btn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
      </button>

      <button type="button" onClick={onToggleMute} aria-label={isMuted ? "إلغاء الكتم" : "كتم"} style={btn}>
        {isMuted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>

      {/* Voice volume slider */}
      <VolumeSlider
        label="مستوى الصوت"
        icon="voice"
        value={voiceVolume}
        disabled={isMuted}
        onChange={onVoiceVolumeChange}
      />

      <span aria-hidden style={divider} />

      {/* Music toggle — independent of global mute */}
      <button
        type="button"
        onClick={onToggleMusic}
        aria-label={musicEnabled ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        aria-pressed={musicEnabled}
        style={{
          ...btn,
          color: musicEnabled ? "#fff" : "rgba(255,255,255,0.4)",
        }}
      >
        {musicEnabled ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
            <line x1="3" y1="3" x2="21" y2="21" />
          </svg>
        )}
      </button>

      {/* Music volume slider — disabled when music is off */}
      <VolumeSlider
        label="مستوى صوت الموسيقى"
        icon="music"
        value={musicVolume}
        disabled={!musicEnabled}
        onChange={onMusicVolumeChange}
      />
    </motion.div>
  );
}

function VolumeSlider({
  label,
  icon,
  value,
  disabled,
  onChange,
}: {
  label: string;
  icon: "voice" | "music";
  value: number;
  disabled: boolean;
  onChange: (v: number) => void;
}) {
  const pct = Math.round(value * 100);
  return (
    <label
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 4px 4px 8px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.04)",
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "opacity 160ms ease-out",
        direction: "ltr",
      }}
    >
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={pct}
        onChange={(e) => onChange(Number(e.target.value) / 100)}
        disabled={disabled}
        aria-label={label}
        style={{
          width: 90,
          height: 3,
          appearance: "none",
          WebkitAppearance: "none",
          background: `linear-gradient(to right, var(--brand-primary, #00D97E) 0%, var(--brand-primary, #00D97E) ${pct}%, rgba(255,255,255,0.18) ${pct}%, rgba(255,255,255,0.18) 100%)`,
          borderRadius: 2,
          outline: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          margin: 0,
        }}
      />
      <span
        aria-hidden
        style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: 10,
          color: "rgba(255,255,255,0.7)",
          minWidth: 26,
          textAlign: "right",
          letterSpacing: "0.02em",
        }}
      >
        {pct}%
      </span>
      {/* Tiny icon hint — voice mic or music note, so the two sliders are
          distinguishable at a glance */}
      <span aria-hidden style={{ color: "rgba(255,255,255,0.5)", display: "inline-flex" }}>
        {icon === "voice" ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="16" r="2.5" />
          </svg>
        )}
      </span>
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </label>
  );
}
