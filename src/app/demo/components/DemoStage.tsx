"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTimeline } from "../engine/useTimeline";
import { useVoiceOver } from "../engine/useVoiceOver";
import { useMusicBed } from "../engine/useMusicBed";
import { TIMELINE } from "../engine/timeline";
import { computeAudioCueMs } from "../engine/audioSchedule";
import type { PlaybackState, SceneContext, SceneState } from "../engine/types";
import Preloader from "./Preloader";
import PlayOverlay from "./PlayOverlay";
import Controls from "./Controls";
import SceneRenderer from "./SceneRenderer";
import Stage from "../stage/Stage";
import GlobalCursor from "../primitives/GlobalCursor";

const CONTROLS_HIDE_MS = 2000;

function toSceneState(progress: number): SceneState {
  if (progress < 0.15) return "enter";
  if (progress > 0.85) return "exit";
  return "active";
}

/** Headless-render lifecycle phases exposed on window.__DEMO_STATE__ so
 *  the puppeteer script can wait on them. */
type RenderDemoState = "preparing" | "playing" | "complete";

function toRenderDemoState(state: PlaybackState): RenderDemoState {
  if (state === "playing" || state === "paused") return "playing";
  if (state === "ended") return "complete";
  return "preparing";
}

export default function DemoStage() {
  const tl = useTimeline();

  // `/demo?render=true` — headless render mode. Auto-plays, hides all
  // overlays/controls/cursor, exposes lifecycle to puppeteer via global.
  const [isRenderMode, setIsRenderMode] = useState(false);
  useEffect(() => {
    setIsRenderMode(new URLSearchParams(window.location.search).get("render") === "true");
  }, []);

  // Auto-play the demo once preloading resolves to "ready"
  const tlPlay = tl.play;
  useEffect(() => {
    if (!isRenderMode) return;
    if (tl.state === "ready") {
      tlPlay();
    }
  }, [isRenderMode, tl.state, tlPlay]);

  // Expose lifecycle to window so the render script can sync capture
  useEffect(() => {
    if (!isRenderMode) return;
    const w = window as typeof window & {
      __DEMO_STATE__?: RenderDemoState;
      __DEMO_AUDIO_CUES__?: Record<string, number>;
    };
    w.__DEMO_STATE__ = toRenderDemoState(tl.state);
    w.__DEMO_AUDIO_CUES__ = computeAudioCueMs(TIMELINE);
  }, [isRenderMode, tl.state]);

  // Audio layer — voice-over clips fire at scene boundaries, stay in
  // lockstep with the timeline's play/pause/replay + mute toggle.
  useVoiceOver({
    state: tl.state,
    sceneId: tl.active.scene.id,
    generation: tl.generation,
    isMuted: tl.isMuted,
    volume: tl.voiceVolume,
  });

  // Background music bed — volume + on/off controlled from the UI.
  useMusicBed({
    state: tl.state,
    generation: tl.generation,
    isMuted: tl.isMuted,
    enabled: tl.musicEnabled,
    volume: tl.musicVolume,
  });

  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimer = useRef<number | null>(null);

  const wakeControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setControlsVisible(false), CONTROLS_HIDE_MS);
  }, []);

  useEffect(() => {
    if (tl.state === "playing") {
      wakeControls();
    } else {
      setControlsVisible(true);
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    }
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [tl.state, wakeControls]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      if (e.code === "Space") {
        e.preventDefault();
        tl.toggle();
        wakeControls();
      } else if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        tl.replay();
        wakeControls();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        tl.setMuted(!tl.isMuted);
        wakeControls();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tl, wakeControls]);

  const ctx: SceneContext = {
    progress: tl.active.progress,
    elapsed: tl.active.elapsed,
    globalElapsed: tl.elapsed,
    state: toSceneState(tl.active.progress),
    prefersReducedMotion: tl.prefersReducedMotion,
  };

  const showPreloader = !isRenderMode && (tl.state === "idle" || tl.state === "preloading");
  const showPlayOverlay = !isRenderMode && tl.state === "ready";
  const showReplayOverlay = !isRenderMode && tl.state === "ended";
  const showScene = tl.state === "playing" || tl.state === "paused" || tl.state === "ended";
  const showControls = !isRenderMode && !showPreloader && !showPlayOverlay;
  // In render mode, hide the cursor too — a wandering cursor is noise in
  // a marketing MP4. Interactive viewing keeps it.
  const showCursor = !isRenderMode && showScene;

  return (
    <div
      onMouseMove={wakeControls}
      role="region"
      aria-label="عرض وصول المتحرك"
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        overflow: "hidden",
      }}
    >
      <Stage phase={tl.phase}>
        {showScene && <SceneRenderer scene={tl.active.scene} ctx={ctx} />}
        {showCursor && (
          <GlobalCursor sceneId={tl.active.scene.id} phase={tl.phase} elapsed={tl.elapsed} />
        )}
      </Stage>

      <AnimatePresence mode="wait">
        {showPreloader && <Preloader key="preloader" />}
        {showPlayOverlay && <PlayOverlay key="play" variant="initial" onPlay={tl.play} />}
        {showReplayOverlay && <PlayOverlay key="replay" variant="replay" onPlay={tl.replay} />}
      </AnimatePresence>

      {showControls && (
        <Controls
          state={tl.state}
          progress={tl.progress}
          isMuted={tl.isMuted}
          musicEnabled={tl.musicEnabled}
          musicVolume={tl.musicVolume}
          voiceVolume={tl.voiceVolume}
          visible={controlsVisible || tl.state !== "playing"}
          onToggle={tl.toggle}
          onReplay={tl.replay}
          onToggleMute={() => tl.setMuted(!tl.isMuted)}
          onToggleMusic={() => tl.setMusicEnabled(!tl.musicEnabled)}
          onMusicVolumeChange={tl.setMusicVolume}
          onVoiceVolumeChange={tl.setVoiceVolume}
        />
      )}

    </div>
  );
}
