import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ConnectPage from "../../primitives/dashboard/ConnectPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import WALinkedDevices from "../../primitives/WALinkedDevices";
import { easeOutCubic, lerp, segment } from "../../primitives/easing";
import { PHONE_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

export default function PhoneEntersScene({ ctx }: Props) {
  const phoneT = easeOutCubic(segment(ctx.progress, 0, 0.75));
  const offsetX = lerp(-600, 0, phoneT);
  const opacity = phoneT;
  const tilt = lerp(-18, -8, phoneT);

  return (
    <LightSurface>
      <StoreChrome {...PHONE_CHROME} />
      <DashboardShell variant="split" hideNav>
        <ConnectPage compact />
      </DashboardShell>
      <PhoneMockup tilt={tilt} offsetX={offsetX} opacity={opacity}>
        <WALinkedDevices />
      </PhoneMockup>
      <FrameCaption num="07 / 09" label="Phone Enters" ar="— المشهد يتسع" />
    </LightSurface>
  );
}
