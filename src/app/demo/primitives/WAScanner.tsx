import { PhoneStatusBar } from "./PhoneMockup";

interface Props {
  /** 0..1 — position of the scan beam within the viewport */
  beamProgress: number;
  /** Extra bright flash during scan-sweep sub-scene */
  flashIntensity?: number;
}

export default function WAScanner({ beamProgress, flashIntensity = 0 }: Props) {
  // Beam travels vertically within the scanner frame (~280px tall)
  const beamY = -100 + beamProgress * 200;

  return (
    <div style={{ width: "100%", height: "100%", background: "#000", position: "relative", overflow: "hidden", color: "#fff" }}>
      <PhoneStatusBar white />
      <div style={{ position: "absolute", top: 60, left: 0, right: 0, padding: "0 28px", display: "flex", alignItems: "center", gap: 16, color: "#fff", zIndex: 2 }}>
        <span style={{ opacity: 0.85 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
        <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>امسح رمز الاستجابة</h2>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 34%, rgba(0,0,0,0.85) 70%)",
          }}
        />
        <div style={{ position: "relative", width: 280, height: 280, borderRadius: 16 }}>
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />
          <div
            style={{
              position: "absolute",
              left: 16,
              right: 16,
              top: "50%",
              height: 3,
              background: "linear-gradient(90deg, transparent, #00FFB2, transparent)",
              boxShadow: `0 0 ${24 + flashIntensity * 36}px #00FFB2`,
              borderRadius: 3,
              transform: `translateY(${beamY}px)`,
              opacity: 0.85 + flashIntensity * 0.15,
              willChange: "transform",
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#fff",
          fontSize: 15,
          opacity: 0.9,
          zIndex: 2,
        }}
      >
        <b style={{ display: "block", fontSize: 18, fontWeight: 600, marginBottom: 6 }}>وجّه الكاميرا نحو الرمز</b>
        <span style={{ opacity: 0.7 }}>سيتم الربط تلقائياً عند المسح</span>
      </div>
    </div>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const base = { position: "absolute" as const, width: 40, height: 40, borderColor: "#fff", borderStyle: "solid" as const };
  const styles: Record<string, React.CSSProperties> = {
    tl: { ...base, top: 0, left: 0, borderWidth: "4px 0 0 4px", borderTopLeftRadius: 14 },
    tr: { ...base, top: 0, right: 0, borderWidth: "4px 4px 0 0", borderTopRightRadius: 14 },
    bl: { ...base, bottom: 0, left: 0, borderWidth: "0 0 4px 4px", borderBottomLeftRadius: 14 },
    br: { ...base, bottom: 0, right: 0, borderWidth: "0 4px 4px 0", borderBottomRightRadius: 14 },
  };
  return <span style={styles[pos]} />;
}
