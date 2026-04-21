"use client";

import { useEffect, useRef, useState } from "react";
import type { PhaseId } from "../engine/types";

interface Props {
  /** Current scene id — drives target position via SCENE_TARGETS table */
  sceneId: string;
  /** Current phase — fallback when scene id isn't mapped */
  phase: PhaseId;
  /** Global elapsed (ms) — for subtle idle wander */
  elapsed: number;
}

/**
 * A persistent cursor overlay that eases toward the "action zone" of the
 * current scene. Each scene id can declare a specific target; unknown ids
 * fall back to the phase-level default. Never rendered during SSR so it
 * cannot cause hydration mismatches.
 */
export default function GlobalCursor({ sceneId, phase, elapsed }: Props) {
  const target = SCENE_TARGETS[sceneId] ?? PHASE_DEFAULTS[phase];
  const [pos, setPos] = useState(target);
  const rafRef = useRef<number | null>(null);
  const currentRef = useRef(target);
  const targetRef = useRef(target);

  // Client-only mount gate — cursor never appears during SSR
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    targetRef.current = target;
  }, [target.x, target.y, target.hidden, target]);

  useEffect(() => {
    const tick = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      // Ease 12% per frame toward target — feels "alive" without being twitchy
      const nx = cur.x + (tgt.x - cur.x) * 0.12;
      const ny = cur.y + (tgt.y - cur.y) * 0.12;
      currentRef.current = { x: nx, y: ny, hidden: tgt.hidden };
      setPos(currentRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!mounted || pos.hidden) return null;

  // Tiny idle drift so the cursor never looks frozen
  const driftX = Math.sin(elapsed / 1400) * 3;
  const driftY = Math.cos(elapsed / 1800) * 2;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translate(${pos.x + driftX}px, ${pos.y + driftY}px)`,
        transformOrigin: "top left",
        pointerEvents: "none",
        zIndex: 25,
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
        willChange: "transform",
      }}
    >
      <svg width="28" height="32" viewBox="0 0 28 32" aria-hidden>
        <path
          d="M2 2 L2 24 L8 18 L11.5 26.5 L14.5 25 L11 16.5 L19 16.5 Z"
          fill="#0B1A1F"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface Target {
  x: number;
  y: number;
  hidden?: boolean;
}

// Phase fallback — used when a scene doesn't declare a specific target
const PHASE_DEFAULTS: Record<PhaseId, Target> = {
  hook:     { x: 1700, y: 880 }, // idle corner during cinematic moments
  setup:    { x: 560,  y: 540 }, // action area for install / connection
  admin:    { x: 450,  y: 760 }, // near phone composer
  customer: { x: 450,  y: 460 }, // near phone messages
  sales:    { x: 1660, y: 480 }, // near sales chat widget
  results:  { x: 1700, y: 880 },
  end:      { x: 1700, y: 880 },
};

// Scene-specific pointers — these override the phase default. The cursor
// eases toward the declared spot at the start of the scene.
const SCENE_TARGETS: Record<string, Target> = {
  // Hook — keep cursor out of cinematic beats
  "cold-open":             { x: 0, y: 0, hidden: true },
  "the-promise":           { x: 0, y: 0, hidden: true },
  "meet-the-four":         { x: 0, y: 0, hidden: true },

  // Install — cursor stays on the Install button area
  "discovery":             { x: 560, y: 540 },
  "discovery-hover":       { x: 0, y: 0, hidden: true }, // scene owns its own cursor
  "discovery-click":       { x: 0, y: 0, hidden: true }, // scene owns its own cursor
  "installing":            { x: 560, y: 540 },
  "installing-pulse":      { x: 560, y: 540 },
  "installed":             { x: 560, y: 540 },
  "installed-toast":       { x: 960, y: 180 },

  // Connection — cursor wanders to the focal point of each frame
  "dashboard-disconnected":{ x: 1280, y: 540 },
  "agents-stagger":        { x: 1200, y: 760 },
  "stats-counter":         { x: 880,  y: 760 },
  "health-ticker":         { x: 1280, y: 360 },
  "spotlight-alert":       { x: 1200, y: 540 },
  "qr-screen":             { x: 700,  y: 640 },
  "phone-enters":          { x: 440,  y: 540 },
  "scanning":              { x: 440,  y: 540 },
  "scan-sweep":            { x: 440,  y: 540 },
  "connected":             { x: 1200, y: 540 },
  "health-morph":          { x: 1280, y: 360 },
  "agents-activate":       { x: 1200, y: 760 },
  "push-in":               { x: 440,  y: 540 },

  // Conversation — admin arcs: cursor hovers over the phone's active content
  "voice-command":         { x: 450,  y: 780 }, // mic area
  "voice-wave":            { x: 380,  y: 420 }, // waveform
  "particles":             { x: 920,  y: 520 }, // mid-flight
  "voice-reply":           { x: 1200, y: 280 }, // new product on dashboard
  "text-iphone-command":   { x: 450,  y: 720 }, // composer
  "iphone-added":          { x: 1200, y: 280 }, // new iPhone row
  "text-delete-command":   { x: 450,  y: 720 },
  "delete-animation":      { x: 1320, y: 760 }, // deleted row
  "text-order-command":    { x: 450,  y: 720 },
  "order-status-change":   { x: 1420, y: 440 }, // status pill
  // Customer arc
  "customer-inquiry":      { x: 450,  y: 440 }, // phone messages
  "customer-reply":        { x: 450,  y: 520 },
  // Policy arc
  "shipping-extract":      { x: 1220, y: 440 }, // policy card
  "manager-message":       { x: 450,  y: 460 },

  // Sales — cursor on the live chat widget / storefront CTA
  "storefront-entry":      { x: 0, y: 0, hidden: true }, // scene owns its own cursor
  "visitor-skin-question": { x: 1600, y: 480 }, // widget
  "agent-skin-answer":     { x: 1600, y: 480 },
  "add-to-cart":           { x: 1560, y: 80  }, // cart icon (the +1 moment)

  // Closer + End — no cursor
  "results-reel":          { x: 0, y: 0, hidden: true },
  "real-merchant":         { x: 0, y: 0, hidden: true },
  "price-punch":           { x: 0, y: 0, hidden: true },
  "end-card":              { x: 0, y: 0, hidden: true },
};
