"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { TIMELINE, computeTotal, sceneAt } from "./timeline";
import type { ActiveScene, PhaseId, PlaybackState } from "./types";

const MIN_PRELOAD_MS = 300;

export interface UseTimelineResult {
  state: PlaybackState;
  elapsed: number;
  progress: number;
  active: ActiveScene;
  phase: PhaseId;
  totalMs: number;
  sceneCount: number;
  /** Increments every time playback starts from elapsed=0 (initial play from
   *  ended, or a replay). Downstream consumers (audio) use this to force a
   *  full reset even when `state` stays "playing" across a replay. */
  generation: number;
  isMuted: boolean;
  /** Music-only toggle — independent of the global mute */
  musicEnabled: boolean;
  /** Music volume 0..1 — user-facing slider value (caps at 30% system) */
  musicVolume: number;
  /** Voice-over volume 0..1 — defaults 1.0 (full) */
  voiceVolume: number;
  prefersReducedMotion: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  replay: () => void;
  setMuted: (muted: boolean) => void;
  setMusicEnabled: (enabled: boolean) => void;
  setMusicVolume: (volume: number) => void;
  setVoiceVolume: (volume: number) => void;
}

export function useTimeline(): UseTimelineResult {
  const reduced = useReducedMotion() ?? false;

  // For reduced-motion users: hero frames only. Preserves the narrative
  // (every state transition is still seen) while dropping the decorative
  // interstitials that caused the preference to be set in the first place.
  const scenes = useMemo(
    () => (reduced ? TIMELINE.filter((s) => s.kind === "hero") : TIMELINE),
    [reduced],
  );
  const totalMs = useMemo(() => computeTotal(scenes), [scenes]);

  const [state, setState] = useState<PlaybackState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [musicEnabled, setMusicEnabledState] = useState(true);
  // `musicVolume` is the user-facing slider value (0..1).
  // Actual audio volume in useMusicBed is volume × MUSIC_MAX (0.3). Default
  // 5% keeps the bg bed barely-there so voices dominate from frame one.
  const [musicVolume, setMusicVolumeState] = useState(0.05);
  // Voice-over volume 0..1, passed through directly. Full on by default.
  const [voiceVolume, setVoiceVolumeState] = useState(1);

  const frameRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);
  const elapsedRef = useRef(0);
  const totalMsRef = useRef(totalMs);

  useEffect(() => {
    totalMsRef.current = totalMs;
  }, [totalMs]);

  const stop = useCallback(() => {
    if (frameRef.current != null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    lastTickRef.current = null;
  }, []);

  const tick = useCallback(
    (now: number) => {
      if (lastTickRef.current == null) lastTickRef.current = now;
      const dt = now - lastTickRef.current;
      lastTickRef.current = now;
      const next = elapsedRef.current + dt;
      const total = totalMsRef.current;
      if (next >= total) {
        elapsedRef.current = total;
        setElapsed(total);
        setState("ended");
        stop();
        return;
      }
      elapsedRef.current = next;
      setElapsed(next);
      frameRef.current = requestAnimationFrame(tick);
    },
    [stop],
  );

  const play = useCallback(() => {
    setState((prev) => {
      if (prev === "playing") return prev;
      if (prev === "ended") {
        elapsedRef.current = 0;
        setElapsed(0);
        setGeneration((g) => g + 1);
      }
      lastTickRef.current = null;
      if (frameRef.current == null) {
        frameRef.current = requestAnimationFrame(tick);
      }
      return "playing";
    });
  }, [tick]);

  const pause = useCallback(() => {
    setState((prev) => {
      if (prev !== "playing") return prev;
      stop();
      return "paused";
    });
  }, [stop]);

  const toggle = useCallback(() => {
    setState((prev) => {
      if (prev === "playing") {
        stop();
        return "paused";
      }
      if (prev === "paused" || prev === "ready") {
        lastTickRef.current = null;
        if (frameRef.current == null) frameRef.current = requestAnimationFrame(tick);
        return "playing";
      }
      if (prev === "ended") {
        elapsedRef.current = 0;
        setElapsed(0);
        setGeneration((g) => g + 1);
        lastTickRef.current = null;
        if (frameRef.current == null) frameRef.current = requestAnimationFrame(tick);
        return "playing";
      }
      return prev;
    });
  }, [stop, tick]);

  const replay = useCallback(() => {
    stop();
    elapsedRef.current = 0;
    setElapsed(0);
    lastTickRef.current = null;
    frameRef.current = requestAnimationFrame(tick);
    setState("playing");
    setGeneration((g) => g + 1);
  }, [stop, tick]);

  const setMuted = useCallback((muted: boolean) => setIsMuted(muted), []);
  const setMusicEnabled = useCallback((enabled: boolean) => setMusicEnabledState(enabled), []);
  const setMusicVolume = useCallback((volume: number) => {
    setMusicVolumeState(Math.max(0, Math.min(1, volume)));
  }, []);
  const setVoiceVolume = useCallback((volume: number) => {
    setVoiceVolumeState(Math.max(0, Math.min(1, volume)));
  }, []);

  useEffect(() => {
    let cancelled = false;
    setState("preloading");
    const docFonts =
      typeof document !== "undefined" && "fonts" in document
        ? (document as Document & { fonts: { ready: Promise<unknown> } }).fonts.ready
        : Promise.resolve();
    const minHold = new Promise<void>((r) => window.setTimeout(r, MIN_PRELOAD_MS));
    Promise.all([docFonts, minHold]).then(() => {
      if (!cancelled) setState("ready");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => () => stop(), [stop]);

  const active = useMemo(() => sceneAt(scenes, elapsed), [scenes, elapsed]);
  const progress = totalMs > 0 ? elapsed / totalMs : 0;

  return {
    state,
    elapsed,
    progress,
    active,
    phase: active.scene.phase,
    totalMs,
    sceneCount: scenes.length,
    generation,
    isMuted,
    musicEnabled,
    musicVolume,
    voiceVolume,
    prefersReducedMotion: reduced,
    play,
    pause,
    toggle,
    replay,
    setMuted,
    setMusicEnabled,
    setMusicVolume,
    setVoiceVolume,
  };
}
