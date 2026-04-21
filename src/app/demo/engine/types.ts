import type { ReactNode } from "react";

export type ActId = "hook" | "install" | "connection" | "conversation" | "sales" | "closer" | "end";
export type SceneKind = "hero" | "sub";
export type SceneState = "enter" | "active" | "exit";
export type PhaseId = "hook" | "setup" | "admin" | "customer" | "sales" | "results" | "end";

export type PlaybackState =
  | "idle"
  | "preloading"
  | "ready"
  | "playing"
  | "paused"
  | "ended";

export interface SceneContext {
  progress: number;
  elapsed: number;
  globalElapsed: number;
  state: SceneState;
  prefersReducedMotion: boolean;
}

export interface Scene {
  id: string;
  act: ActId;
  kind: SceneKind;
  phase: PhaseId;
  label: string;
  duration: number;
  render: (ctx: SceneContext) => ReactNode;
}

export interface ActiveScene {
  index: number;
  scene: Scene;
  sceneStart: number;
  elapsed: number;
  progress: number;
}
