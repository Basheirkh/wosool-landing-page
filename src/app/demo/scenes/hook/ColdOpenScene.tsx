import type { SceneContext } from "../../engine/types";
import PhoneMockup from "../../primitives/PhoneMockup";
import LockScreenNotification from "../../primitives/hook/LockScreenNotification";
import { easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

const NOTIFS = [
  { name: "فهد (عميل)",  preview: "وين طلبي؟ الرابط ما يفتح",    time: "٢:٣٤ ص" },
  { name: "نوره (عميلة)", preview: "موجود مقاس M؟ متحمسة أشتري", time: "٣:١٥ ص" },
  { name: "سالم",          preview: "الطلب ٢٨٤٧ لسا ما وصل…",      time: "٣:٤٢ ص" },
  { name: "ريم (عميلة)",  preview: "أبي أعرف سياسة الإرجاع",      time: "٤:٠٢ ص" },
];

export default function ColdOpenScene({ ctx }: Props) {
  // Notifications stack in one after another
  const entries = NOTIFS.map((_, i) => {
    const start = 0.1 + i * 0.14;
    return easeOutCubic(segment(ctx.progress, start, start + 0.18));
  });

  // Counter ticks: 0 → 24
  const counterT = easeOutCubic(segment(ctx.progress, 0.35, 0.95));
  const counter = Math.round(counterT * 24);

  // Overlay text fades in at 50% of scene
  const textIn = easeOutCubic(segment(ctx.progress, 0.5, 0.9));

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* Glow halo behind phone */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 600px 600px at 50% 45%, rgba(0, 168, 132, 0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Phone at physical left third (x ≈ 260–700) */}
      <PhoneMockup tilt={0} offsetX={120} offsetY={0}>
        <LockScreenStack notifications={NOTIFS} entries={entries} counter={counter} />
      </PhoneMockup>

      {/* Right-side dramatic copy — physical right, direct `left` so RTL
          logical properties don't flip it back under the phone. */}
      <div
        style={{
          position: "absolute",
          left: 860,
          right: 80,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--w-font-ar)",
          color: "#E9EDEF",
          opacity: textIn,
          willChange: "opacity",
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontFamily: "var(--w-font-mono)",
            color: "rgba(115, 252, 215, 0.75)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          ٢:٣٤ ص · الأحد
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            marginBottom: 18,
          }}
        >
          صاحب المتجر <span style={{ color: "rgba(255,255,255,0.45)" }}>نايم.</span>
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.35,
          }}
        >
          الطلبات تضيع.
        </div>
      </div>
    </div>
  );
}

function LockScreenStack({
  notifications,
  entries,
  counter,
}: {
  notifications: typeof NOTIFS;
  entries: number[];
  counter: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, #0B141A 0%, #05090C 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Lock screen: time + date */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#E9EDEF",
          fontFamily: "var(--w-font-ar)",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: 14, color: "#AEBAC1", marginBottom: 4 }}>الأحد · ١٥ شعبان</div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 200,
            color: "#fff",
            fontFamily: "var(--w-font-mono)",
            letterSpacing: "-0.02em",
          }}
        >
          ٢:٣٤
        </div>
      </div>

      {/* Counter pill top-right */}
      <div
        style={{
          position: "absolute",
          top: 34,
          insetInlineEnd: 30,
          padding: "6px 12px",
          borderRadius: 999,
          background: "rgba(245, 67, 74, 0.22)",
          border: "1px solid rgba(245, 67, 74, 0.45)",
          color: "#FFD5D7",
          fontSize: 12,
          fontFamily: "var(--w-font-mono)",
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          zIndex: 2,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5434A" }} />
        {toArabic(counter)} رسالة
      </div>

      {/* Notification stack */}
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          padding: "0 22px",
        }}
      >
        {notifications.map((n, i) => (
          <LockScreenNotification
            key={i}
            name={n.name}
            preview={n.preview}
            time={n.time}
            entry={entries[i]}
          />
        ))}
      </div>
    </div>
  );
}

function toArabic(n: number): string {
  return n.toString().replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}
