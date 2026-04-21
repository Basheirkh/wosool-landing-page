import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { TextBubble, WosoolReplyBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import InlineToast from "../../primitives/InlineToast";
import { clamp01, easeInOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function DeleteAnimationScene({ ctx }: Props) {
  // Deletion progress drives the strike+collapse on the holder row
  const deleteP = easeInOutCubic(segment(ctx.progress, 0.0, 0.7));
  // Once deletion completes (>0.7), switch to post-delete state (row removed)
  const postDelete = ctx.progress > 0.75;
  const replyIn = clamp01((ctx.progress - 0.6) / 0.3);
  const toastT = segment(ctx.progress, 0.7, 0.95);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      {toastT > 0.05 && <InlineToast progress={toastT}>−١ منتج — تم الحذف</InlineToast>}
      <DashboardShell variant="split" hideNav>
        {postDelete ? (
          <ProductsPage mode="post-delete" compact />
        ) : (
          <ProductsPage mode="iphone-deleting-holder" compact deleteProgress={deleteP} />
        )}
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          <TextBubble time="٢:١٨ م">احذف الحامل المغناطيسي من المنتجات</TextBubble>
          {replyIn > 0.05 && (
            <div style={{ opacity: replyIn, transform: `translateY(${(1 - replyIn) * 10}px)` }}>
              <WosoolReplyBubble time="٢:١٨ م">
                حذفت <b>حامل تلفون مغناطيسي</b>. العدد الآن <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٨٥</span> منتج.
              </WosoolReplyBubble>
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Deleted" ar="— اختفى من القائمة" />
    </LightSurface>
  );
}
