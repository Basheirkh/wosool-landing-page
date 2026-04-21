import type { SceneContext } from "../../engine/types";
import TestimonialPanel from "../../primitives/closer/TestimonialPanel";

interface Props {
  ctx: SceneContext;
}

const LINES = [
  "كنا نُضيّع طلبات كل ليلة لأن ما أحد يرد على العملاء بعد الدوام.",
  "من أول أسبوع مع وصول، كل رسالة تلاقي ردّاً —",
  "وزادت الطلبات ٤٠٪ في نفس الشهر.",
];
const ATTRIBUTION = "صاحب متجر · قطاع الموضة النسائية · الرياض";

export default function RealMerchantScene({ ctx }: Props) {
  return <TestimonialPanel progress={ctx.progress} lines={LINES} attribution={ATTRIBUTION} />;
}
