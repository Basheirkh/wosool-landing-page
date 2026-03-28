import { BlogArticle } from "@/lib/blog";
import { getArtBackground } from "@/lib/artBackground";

type BlogCoverArtProps = {
  article: BlogArticle;
  compact?: boolean;
};

export default function BlogCoverArt({ article, compact = false }: BlogCoverArtProps) {
  const size = compact ? "h-[220px]" : "h-[340px] md:h-[420px]";
  const wordSize = compact
    ? "text-[42px] md:text-[56px]"
    : "text-[64px] md:text-[96px] lg:text-[128px]";

  return (
    <div
      className={`theme-art-surface relative overflow-hidden rounded-[28px] ${size}`}
      style={{
        backgroundImage: getArtBackground(article.visual.theme, article.visual.accent, article.visual.secondaryAccent),
      }}
    >
      <div className="absolute inset-0 dot-grid-static opacity-40" />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--art-overlay)" }} />

      {article.visual.theme === "signal" && (
        <>
          <div
            className="absolute -top-10 right-[10%] h-40 w-40 rounded-full border border-white/10 animate-float-1"
            style={{ boxShadow: `0 0 0 1px ${article.visual.accent}22 inset` }}
          />
          <div
            className="absolute top-[32%] left-[10%] h-24 w-24 rotate-12 rounded-3xl border border-white/10 animate-float-2"
            style={{ background: `${article.visual.accent}12` }}
          />
          <div
            className="absolute bottom-[18%] right-[16%] h-px w-40"
            style={{ background: `linear-gradient(90deg, transparent, ${article.visual.accent}, transparent)` }}
          />
        </>
      )}

      {article.visual.theme === "market" && (
        <>
          <div className="absolute inset-x-[8%] top-[22%] flex items-end gap-3 opacity-80">
            {[46, 84, 58, 112, 74].map((height, index) => (
              <span
                key={`${article.slug}-bar-${height}`}
                className="flex-1 rounded-t-full animate-pulse-glow"
                style={{
                  height,
                  background: `linear-gradient(180deg, ${index % 2 === 0 ? article.visual.accent : article.visual.secondaryAccent}, transparent)`,
                  animationDelay: `${index * 0.18}s`,
                }}
              />
            ))}
          </div>
          <div
            className="absolute bottom-[24%] left-[8%] right-[8%] h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${article.visual.secondaryAccent}, transparent)` }}
          />
        </>
      )}

      {article.visual.theme === "memory" && (
        <>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={`${article.slug}-memory-${index}`}
              className="absolute rounded-full border animate-float-1"
              style={{
                inset: `${18 + index * 9}% ${14 + index * 7}% ${22 + index * 8}% ${16 + index * 6}%`,
                borderColor: `${index % 2 === 0 ? article.visual.accent : article.visual.secondaryAccent}55`,
                animationDelay: `${index * 0.4}s`,
              }}
            />
          ))}
        </>
      )}

      {article.visual.theme === "vault" && (
        <>
          <div
            className="absolute top-[18%] right-[14%] h-28 w-28 rounded-[32px] animate-float-2"
            style={{ border: "1px solid var(--art-panel-border)", background: "var(--art-panel-soft)" }}
          />
          <div
            className="absolute top-[22%] right-[18%] h-20 w-20 rounded-full border"
            style={{ borderColor: `${article.visual.accent}88` }}
          />
          <div
            className="absolute bottom-[18%] left-[12%] h-24 w-24 rounded-full"
            style={{ boxShadow: `0 0 0 1px ${article.visual.secondaryAccent}55 inset, 0 0 60px ${article.visual.secondaryAccent}22` }}
          />
        </>
      )}

      {article.visual.theme === "network" && (
        <>
          <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M6,64 C24,40 31,76 49,50 C58,38 70,40 94,18"
              fill="none"
              stroke={article.visual.accent}
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />
            <path
              d="M10,18 C26,28 38,20 50,34 C64,50 72,66 90,58"
              fill="none"
              stroke={article.visual.secondaryAccent}
              strokeWidth="0.6"
            />
            {[["10", "18"], ["49", "50"], ["94", "18"], ["90", "58"], ["6", "64"]].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.7" fill={article.visual.accent} />
            ))}
          </svg>
        </>
      )}

      {article.visual.theme === "future" && (
        <>
          <div
            className="absolute top-[18%] left-[8%] h-36 w-36 rounded-full blur-2xl"
            style={{ background: `${article.visual.accent}35` }}
          />
          <div
            className="absolute bottom-[18%] right-[10%] h-40 w-40 rounded-full blur-2xl"
            style={{ background: `${article.visual.secondaryAccent}35` }}
          />
          <div className="absolute inset-x-[16%] top-[28%] h-px" style={{ background: "var(--art-divider)" }} />
          <div className="absolute inset-y-[20%] left-[52%] w-px" style={{ background: "var(--art-divider-soft)" }} />
        </>
      )}

      {article.visual.theme === "developer" && (
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
            style={{ boxShadow: `0 0 0 1px ${article.visual.accent}55 inset` }}
          />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
        {!compact && (
          <div className="mb-5 flex items-center justify-between gap-4">
            <span
              className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.24em]"
              style={{
                border: "1px solid var(--art-chip-border)",
                background: "var(--art-chip-bg)",
                color: "var(--art-chip-text)",
              }}
            >
              {article.visual.eyebrow}
            </span>
            <span className="text-xs" style={{ color: "var(--art-text-muted)" }}>{article.readTime}</span>
          </div>
        )}

        <div className="relative">
          {!compact && (
            <div
              className={`pointer-events-none font-bold leading-none tracking-tight ${wordSize}`}
              style={{ color: "var(--art-ghost)" }}
            >
              {article.visual.word}
            </div>
          )}
          <div className={`absolute inset-x-0 bottom-0 ${compact ? "pb-1" : "pb-2"}`}>
            <h3
              className={`${compact ? "text-xl" : "text-[32px] md:text-[42px]"} max-w-3xl font-bold leading-[1.2] text-right`}
              style={{ color: "var(--art-text-primary)" }}
            >
              {article.title}
            </h3>
            {!compact && (
              <p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: "var(--art-text-secondary)" }}>
                {article.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
