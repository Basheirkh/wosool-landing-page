import type { ActId, ActiveScene, PhaseId, Scene, SceneContext, SceneKind } from "./types";
import ColdOpenScene from "../scenes/hook/ColdOpenScene";
import ThePromiseScene from "../scenes/hook/ThePromiseScene";
import MeetTheFourScene from "../scenes/hook/MeetTheFourScene";
import ResultsReelScene from "../scenes/closer/ResultsReelScene";
import RealMerchantScene from "../scenes/closer/RealMerchantScene";
import PricePunchScene from "../scenes/closer/PricePunchScene";
import DiscoveryScene from "../scenes/install/DiscoveryScene";
import DiscoveryHoverScene from "../scenes/install/DiscoveryHoverScene";
import DiscoveryClickScene from "../scenes/install/DiscoveryClickScene";
import InstallingScene from "../scenes/install/InstallingScene";
import InstallingPulseScene from "../scenes/install/InstallingPulseScene";
import InstalledScene from "../scenes/install/InstalledScene";
import InstalledToastScene from "../scenes/install/InstalledToastScene";
import DashboardDisconnectedScene from "../scenes/connection/DashboardDisconnectedScene";
import AgentsStaggerScene from "../scenes/connection/AgentsStaggerScene";
import StatsCounterScene from "../scenes/connection/StatsCounterScene";
import HealthTickerScene from "../scenes/connection/HealthTickerScene";
import SpotlightAlertScene from "../scenes/connection/SpotlightAlertScene";
import QrScreenScene from "../scenes/connection/QrScreenScene";
import PhoneEntersScene from "../scenes/connection/PhoneEntersScene";
import ScanningScene from "../scenes/connection/ScanningScene";
import ScanSweepScene from "../scenes/connection/ScanSweepScene";
import ConnectedScene from "../scenes/connection/ConnectedScene";
import HealthMorphScene from "../scenes/connection/HealthMorphScene";
import AgentsActivateScene from "../scenes/connection/AgentsActivateScene";
import PushInScene from "../scenes/connection/PushInScene";
import VoiceCommandScene from "../scenes/conversation/VoiceCommandScene";
import VoiceWaveScene from "../scenes/conversation/VoiceWaveScene";
import ParticlesScene from "../scenes/conversation/ParticlesScene";
import VoiceReplyScene from "../scenes/conversation/VoiceReplyScene";
import TextIphoneCommandScene from "../scenes/conversation/TextIphoneCommandScene";
import IphoneAddedScene from "../scenes/conversation/IphoneAddedScene";
import TextDeleteCommandScene from "../scenes/conversation/TextDeleteCommandScene";
import DeleteAnimationScene from "../scenes/conversation/DeleteAnimationScene";
import TextOrderCommandScene from "../scenes/conversation/TextOrderCommandScene";
import OrderStatusChangeScene from "../scenes/conversation/OrderStatusChangeScene";
import CustomerInquiryScene from "../scenes/conversation/CustomerInquiryScene";
import CustomerReplyScene from "../scenes/conversation/CustomerReplyScene";
import ShippingExtractScene from "../scenes/conversation/ShippingExtractScene";
import ManagerMessageScene from "../scenes/conversation/ManagerMessageScene";
import StorefrontEntryScene from "../scenes/sales/StorefrontEntryScene";
import VisitorSkinQuestionScene from "../scenes/sales/VisitorSkinQuestionScene";
import AgentSkinAnswerScene from "../scenes/sales/AgentSkinAnswerScene";
import AddToCartScene from "../scenes/sales/AddToCartScene";
import EndCardScene from "../scenes/conversation/EndCardScene";

const scene = (
  id: string,
  label: string,
  act: ActId,
  kind: SceneKind,
  phase: PhaseId,
  duration: number,
  Component: (p: { ctx: SceneContext }) => JSX.Element,
): Scene => ({
  id,
  act,
  kind,
  phase,
  label,
  duration,
  render: (ctx) => <Component ctx={ctx} />,
});

export const TIMELINE: readonly Scene[] = [
  // Act 0 — HOOK · 14s cinematic opening, paced to let each beat land
  scene("cold-open",              "٢:٣٤ ص · الطلبات تضيع",         "hook", "hero", "hook",  4500, ColdOpenScene),
  // Hard cut from dark hook → bright setup canvas. The promise lands on light.
  scene("the-promise",            "تكلّم متجرك. يسويه.",           "hook", "hero", "setup", 5000, ThePromiseScene),
  scene("meet-the-four",          "أربعة موظفين. ما ينامون.",      "hook", "hero", "setup", 4500, MeetTheFourScene),

  // Act 1 — Install · phase: setup
  scene("discovery",              "Salla · Install highlighted",  "install", "hero", "setup", 2500, DiscoveryScene),
  scene("discovery-hover",        "Cursor hover ripple",          "install", "sub",  "setup",  800, DiscoveryHoverScene),
  scene("discovery-click",        "Click press",                  "install", "sub",  "setup",  400, DiscoveryClickScene),
  scene("installing",             "Progress 0→60%",               "install", "hero", "setup", 3000, InstallingScene),
  scene("installing-pulse",       "Progress 60→100%",             "install", "sub",  "setup",  800, InstallingPulseScene),
  scene("installed",              "Checkmark · تم التثبيت",       "install", "hero", "setup", 2000, InstalledScene),
  scene("installed-toast",        "Success toast slide-in",       "install", "sub",  "setup", 1000, InstalledToastScene),

  // Act 2 — Connection · phase: setup
  scene("dashboard-disconnected", "Dashboard · 67% · red alert",   "connection", "hero", "setup", 3500, DashboardDisconnectedScene),
  scene("agents-stagger",         "Agent cards cascade",           "connection", "sub",  "setup",  600, AgentsStaggerScene),
  scene("stats-counter",          "Zero-values pulse",             "connection", "sub",  "setup",  700, StatsCounterScene),
  scene("health-ticker",          "Health warn pulse",             "connection", "sub",  "setup",  500, HealthTickerScene),
  scene("spotlight-alert",        "WhatsApp alert pulses",         "connection", "hero", "setup", 2500, SpotlightAlertScene),
  scene("qr-screen",              "Channels · QR code",            "connection", "hero", "setup", 3000, QrScreenScene),
  scene("phone-enters",           "Split · phone tilts in",        "connection", "hero", "setup", 2000, PhoneEntersScene),
  scene("scanning",               "QR scanner beam",               "connection", "hero", "setup", 3500, ScanningScene),
  scene("scan-sweep",             "Beam sweep + capture flash",    "connection", "sub",  "setup", 1200, ScanSweepScene),
  scene("connected",              "100% health · all green",       "connection", "hero", "setup", 3000, ConnectedScene),
  scene("health-morph",           "67→100 · yellow→green",         "connection", "sub",  "setup",  800, HealthMorphScene),
  scene("agents-activate",        "Status dots flip green",        "connection", "sub",  "setup",  700, AgentsActivateScene),
  scene("push-in",                "Camera push-in",                "connection", "sub",  "setup",  900, PushInScene),

  // Act 3a — Admin agent: merchant commands
  // voice-command + wave + particles extended to 8s so the 7.5s merchant
  // voice note (M1) finishes before voice-reply's 04-admin-agent clip starts.
  scene("voice-command",        "Voice · add speaker",              "conversation", "hero", "admin", 5500, VoiceCommandScene),
  scene("voice-wave",           "Waveform pulse",                   "conversation", "sub",  "admin", 1500, VoiceWaveScene),
  scene("particles",            "Particles · phone → dashboard",    "conversation", "sub",  "admin", 1000, ParticlesScene),
  scene("voice-reply",          "Reply · trust chip · on board",    "conversation", "hero", "admin", 3500, VoiceReplyScene),
  scene("text-iphone-command",  "Text · add iPhone 17",             "conversation", "hero", "admin", 3500, TextIphoneCommandScene),
  scene("iphone-added",         "iPhone 17 · on dashboard",         "conversation", "hero", "admin", 3500, IphoneAddedScene),
  scene("text-delete-command",  "Text · delete holder",             "conversation", "hero", "admin", 3000, TextDeleteCommandScene),
  scene("delete-animation",     "Row strike · collapse · gone",     "conversation", "hero", "admin", 3500, DeleteAnimationScene),
  scene("text-order-command",   "Text · mark #2847 done",           "conversation", "hero", "admin", 3000, TextOrderCommandScene),
  scene("order-status-change",  "Status pill · yellow → green",     "conversation", "hero", "admin", 3500, OrderStatusChangeScene),

  // Act 3b — Customer agent: inbound inquiry (warmer tint)
  // customer-reply extended so the 8.1s 05-customer-agent clip finishes
  // before shipping-extract's 06-policy clip starts.
  scene("customer-inquiry",     "Customer · asks about order",      "conversation", "hero", "customer", 3500, CustomerInquiryScene),
  scene("customer-reply",       "Agent · replies with ETA",         "conversation", "hero", "customer", 5000, CustomerReplyScene),

  // Act 3c — Admin agent: policy extraction (back to admin tint)
  // manager-message extended so the 9.6s 06-policy clip finishes before
  // storefront-entry's 07-sales-agent clip starts.
  scene("shipping-extract",     "Merchant · send policy to manager","conversation", "hero", "admin", 3500, ShippingExtractScene),
  scene("manager-message",      "Manager · policy delivered",       "conversation", "hero", "admin", 6500, ManagerMessageScene),

  // Act 4 — Sales agent: lives on the storefront, live visitor interaction (warm sales tint)
  scene("storefront-entry",     "Storefront · visitor browsing",    "sales", "hero", "sales", 3000, StorefrontEntryScene),
  scene("visitor-skin-question","Visitor · skin-type question",     "sales", "hero", "sales", 3500, VisitorSkinQuestionScene),
  scene("agent-skin-answer",    "Agent · reasoned answer",          "sales", "hero", "sales", 4500, AgentSkinAnswerScene),
  scene("add-to-cart",          "Cart · visitor requests · agent acts","sales", "hero", "sales", 3500, AddToCartScene),

  // Act 5 — CLOSER · evidence stack: results → social proof → price
  // Stretched to fit the 16.6s 08-closer clip that narrates stats → testimonial
  // bridge → pricing → final tagline continuously across these 4 scenes.
  scene("results-reel",         "٣ث · ٩٠٠× · +٤٠٪ · ٩٤٪",           "closer", "hero", "results", 5000, ResultsReelScene),
  scene("real-merchant",        "Testimonial · real merchant",       "closer", "hero", "results", 3500, RealMerchantScene),
  scene("price-punch",          "٣,٠٠٠ ريال vs ٢٩٩ ريال × ٤",       "closer", "hero", "results", 4000, PricePunchScene),

  // End — held long enough for the final "تكلّم متجرك... يسويه" to land
  scene("end-card",             "تكلّم متجرك. يسويه.",              "end", "hero", "end", 5500, EndCardScene),
];

export function computeTotal(scenes: readonly Scene[]): number {
  return scenes.reduce((acc, s) => acc + s.duration, 0);
}

export function sceneAt(scenes: readonly Scene[], globalMs: number): ActiveScene {
  const total = computeTotal(scenes);
  const clamped = Math.max(0, Math.min(globalMs, total));
  let acc = 0;
  for (let i = 0; i < scenes.length; i++) {
    const s = scenes[i];
    const isLast = i === scenes.length - 1;
    if (clamped < acc + s.duration || isLast) {
      const elapsed = clamped - acc;
      const progress = Math.min(1, elapsed / s.duration);
      return { index: i, scene: s, sceneStart: acc, elapsed, progress };
    }
    acc += s.duration;
  }
  const last = scenes[scenes.length - 1];
  return {
    index: scenes.length - 1,
    scene: last,
    sceneStart: total - last.duration,
    elapsed: last.duration,
    progress: 1,
  };
}
