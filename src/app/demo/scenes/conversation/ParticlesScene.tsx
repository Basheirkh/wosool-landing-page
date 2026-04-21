import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { VoiceNoteBubble, TypingBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import { CONNECTED_CHROME } from "../connection/chrome";
import { clamp01, easeInOutCubic } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

// 12 mint particles traveling phone (~x=460) → dashboard (~x=1300), staggered.
const PARTICLE_COUNT = 12;
const START_X = 460;
const START_Y = 540;
const END_X = 1300;
const END_Y = 500;

export default function ParticlesScene({ ctx }: Props) {
  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <div style={{ position: "absolute", inset: 0, filter: "saturate(0.25) brightness(1.02)", opacity: 0.7, pointerEvents: "none" }}>
        <DashboardShell variant="split" hideNav>
          <ProductsPage mode="disconnected-3" compact />
        </DashboardShell>
      </div>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen>
          <VoiceNoteBubble playhead={22 / 30} />
          <TypingBubble />
        </WAChatScreen>
      </PhoneMockup>
      {/* Particle trail overlay */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10 }}>
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => {
          const stagger = i / (PARTICLE_COUNT - 1);
          const localT = clamp01((ctx.progress - stagger * 0.35) / 0.5);
          if (localT <= 0 || localT >= 1) return null;
          const t = easeInOutCubic(localT);
          const x = START_X + (END_X - START_X) * t;
          // Arc the path slightly upward
          const arc = Math.sin(t * Math.PI) * 60;
          const y = START_Y + (END_Y - START_Y) * t - arc;
          const fade = Math.sin(localT * Math.PI);
          const size = 6 + 6 * fade;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: size,
                height: size,
                borderRadius: "50%",
                background: "var(--w-mint-500)",
                boxShadow: `0 0 ${12 * fade}px rgba(115, 252, 215, ${0.6 * fade})`,
                opacity: fade * 0.85,
                transform: "translate(-50%, -50%)",
                willChange: "transform, opacity",
              }}
            />
          );
        })}
      </div>
    </LightSurface>
  );
}
