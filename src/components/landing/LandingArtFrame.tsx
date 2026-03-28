import { getArtBackground, type ArtTheme } from "@/lib/artBackground";

type LandingArtTheme = ArtTheme;

type LandingArtFrameProps = {
  theme: LandingArtTheme;
  word: string;
  eyebrow?: string;
  accent?: string;
  secondaryAccent?: string;
  className?: string;
  align?: "bottom" | "center";
  wordClassName?: string;
  muted?: boolean;
  hideWord?: boolean;
  minimal?: boolean;
  children?: React.ReactNode;
};

export default function LandingArtFrame({
  theme,
  word,
  eyebrow,
  accent = "#00D97E",
  secondaryAccent = "#6EE7B7",
  className = "",
  align = "bottom",
  wordClassName = "",
  muted = false,
  hideWord = false,
  minimal = false,
  children,
}: LandingArtFrameProps) {
  return (
    <div
      className={`theme-art-surface relative overflow-hidden rounded-[28px] ${className}`}
      style={{
        backgroundImage: getArtBackground(theme, accent, secondaryAccent),
      }}
    >
      {!minimal && <div className="absolute inset-0 dot-grid-static opacity-40" />}
      <div className="absolute inset-0" style={{ backgroundImage: "var(--art-overlay)" }} />

      {!minimal && theme === "signal" && (
        <>
          <div
            className="absolute -top-10 right-[10%] h-40 w-40 rounded-full border border-white/10 animate-float-1"
            style={{ boxShadow: `0 0 0 1px ${accent}22 inset` }}
          />
          <div
            className="absolute top-[32%] left-[10%] h-24 w-24 rotate-12 rounded-3xl border border-white/10 animate-float-2"
            style={{ background: `${accent}12` }}
          />
          <div
            className="absolute bottom-[18%] right-[16%] h-px w-40"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />
        </>
      )}

      {!minimal && theme === "market" && (
        <>
          <div className="absolute inset-x-[8%] top-[22%] flex items-end gap-3 opacity-80">
            {[46, 84, 58, 112, 74].map((height, index) => (
              <span
                key={`${word}-bar-${height}`}
                className="flex-1 rounded-t-full animate-pulse-glow"
                style={{
                  height,
                  background: `linear-gradient(180deg, ${index % 2 === 0 ? accent : secondaryAccent}, transparent)`,
                  animationDelay: `${index * 0.18}s`,
                }}
              />
            ))}
          </div>
          <div
            className="absolute bottom-[24%] left-[8%] right-[8%] h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${secondaryAccent}, transparent)` }}
          />
        </>
      )}

      {!minimal && theme === "memory" && (
        <>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={`${word}-memory-${index}`}
              className="absolute rounded-full border animate-float-1"
              style={{
                inset: `${18 + index * 9}% ${14 + index * 7}% ${22 + index * 8}% ${16 + index * 6}%`,
                borderColor: `${index % 2 === 0 ? accent : secondaryAccent}55`,
                animationDelay: `${index * 0.4}s`,
              }}
            />
          ))}
        </>
      )}

      {!minimal && theme === "vault" && (
        <>
          <div
            className="absolute top-[18%] right-[14%] h-28 w-28 rounded-[32px] animate-float-2"
            style={{ border: "1px solid var(--art-panel-border)", background: "var(--art-panel-soft)" }}
          />
          <div
            className="absolute top-[22%] right-[18%] h-20 w-20 rounded-full border"
            style={{ borderColor: `${accent}88` }}
          />
          <div
            className="absolute bottom-[18%] left-[12%] h-24 w-24 rounded-full"
            style={{ boxShadow: `0 0 0 1px ${secondaryAccent}55 inset, 0 0 60px ${secondaryAccent}22` }}
          />
        </>
      )}

      {!minimal && theme === "network" && (
        <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M6,64 C24,40 31,76 49,50 C58,38 70,40 94,18"
            fill="none"
            stroke={accent}
            strokeWidth="0.6"
            strokeDasharray="2 2"
          />
          <path
            d="M10,18 C26,28 38,20 50,34 C64,50 72,66 90,58"
            fill="none"
            stroke={secondaryAccent}
            strokeWidth="0.6"
          />
          {[["10", "18"], ["49", "50"], ["94", "18"], ["90", "58"], ["6", "64"]].map(([cx, cy]) => (
            <circle key={`${word}-${cx}-${cy}`} cx={cx} cy={cy} r="1.7" fill={accent} />
          ))}
        </svg>
      )}

      {!minimal && theme === "future" && (
        <>
          <div
            className="absolute top-[18%] left-[8%] h-36 w-36 rounded-full blur-2xl"
            style={{ background: `${accent}35` }}
          />
          <div
            className="absolute bottom-[18%] right-[10%] h-40 w-40 rounded-full blur-2xl"
            style={{ background: `${secondaryAccent}35` }}
          />
          <div className="absolute inset-x-[16%] top-[28%] h-px" style={{ background: "var(--art-divider)" }} />
          <div className="absolute inset-y-[20%] left-[52%] w-px" style={{ background: "var(--art-divider-soft)" }} />
        </>
      )}

      {!minimal && theme === "developer" && (
        <>
          <div
            className="absolute inset-x-[8%] top-[18%] rounded-2xl px-5 py-4 font-mono text-[10px] leading-5 shadow-2xl shadow-black/20"
            style={{
              border: "1px solid var(--art-panel-border)",
              background: "var(--art-panel)",
              color: "var(--art-code-text)",
            }}
          >
            <div>{`const agent = router.route(task)`}</div>
            <div>{`if (risk === "HIGH") await approve()`}</div>
            <div>{`memory.store("decision", context)`}</div>
          </div>
          <div
            className="absolute bottom-[18%] left-[10%] h-20 w-20 rounded-3xl rotate-12"
            style={{ boxShadow: `0 0 0 1px ${accent}55 inset` }}
          />
        </>
      )}

      {(!hideWord || eyebrow) && (
        <div
          className={`absolute inset-x-0 z-10 p-6 md:p-8 ${
            align === "center" ? "top-1/2 -translate-y-1/2" : "bottom-0"
          }`}
        >
          {eyebrow && (
            <div className="mb-5 flex items-center justify-between gap-4">
              <span
                className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.24em]"
                style={{
                  border: "1px solid var(--art-chip-border)",
                  background: "var(--art-chip-bg)",
                  color: "var(--art-chip-text)",
                }}
              >
                {eyebrow}
              </span>
            </div>
          )}

          {!hideWord && (
            <div
              className={`font-bold leading-none tracking-tight text-[44px] md:text-[72px] lg:text-[96px] ${wordClassName}`}
              style={{ color: muted ? "var(--art-ghost-muted)" : "var(--art-ghost)" }}
            >
              {word}
            </div>
          )}
        </div>
      )}

      {children ? <div className="absolute inset-0 z-20">{children}</div> : null}
    </div>
  );
}
