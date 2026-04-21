"use client";

import { useEffect, useRef } from "react";
import type { PlaybackState } from "./types";
import { AUDIO_SCHEDULE } from "./audioSchedule";

interface Props {
  state: PlaybackState;
  sceneId: string;
  /** Increments each time playback starts from elapsed=0. Forces a full
   *  reset even when `state`/`sceneId` don't change across a replay. */
  generation: number;
  isMuted: boolean;
  /** Voice-over volume 0..1. Applied to every preloaded clip. */
  volume: number;
}

/**
 * Preloads every mapped clip once, then plays/pauses the active one in
 * lockstep with timeline state. Replay is keyed on `generation`, so hitting
 * Replay while the scene id is still `cold-open` (or any other edge case
 * where sceneId doesn't change) still resets audio properly.
 */
export function useVoiceOver({ state, sceneId, generation, isMuted, volume }: Props) {
  const audiosRef = useRef<Record<string, HTMLAudioElement>>({});
  const currentSrcRef = useRef<string | null>(null);

  // Keep latest state/muted/volume accessible inside effects that don't
  // depend on them (so we don't re-run the scene-start effect on every
  // play/pause or volume nudge).
  const stateRef = useRef(state);
  const mutedRef = useRef(isMuted);
  const volumeRef = useRef(volume);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  useEffect(() => {
    mutedRef.current = isMuted;
  }, [isMuted]);
  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  // One-time preload of every scheduled clip
  useEffect(() => {
    if (typeof window === "undefined") return;
    const audios: Record<string, HTMLAudioElement> = {};
    const uniqueSrcs = Array.from(new Set(Object.values(AUDIO_SCHEDULE)));
    for (const src of uniqueSrcs) {
      const a = new Audio(src);
      a.preload = "auto";
      a.volume = volumeRef.current;
      audios[src] = a;
    }
    audiosRef.current = audios;
    return () => {
      for (const a of Object.values(audios)) {
        a.pause();
        a.src = "";
      }
      audiosRef.current = {};
      currentSrcRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Source of truth for "what clip should be playing right now".
  // Fires on:
  //  - Scene boundary crossing (sceneId change)
  //  - Replay (generation bump) — even when sceneId stays the same
  useEffect(() => {
    const next = AUDIO_SCHEDULE[sceneId];
    if (!next) {
      // Unmapped scene (sub-scene) — let the current clip continue playing
      return;
    }

    // Stop anything currently audible. Cheap; only the active clip is playing.
    for (const a of Object.values(audiosRef.current)) {
      if (!a.paused) a.pause();
    }

    currentSrcRef.current = next;
    const a = audiosRef.current[next];
    if (!a) return;
    a.currentTime = 0;
    a.muted = mutedRef.current;
    if (stateRef.current === "playing") {
      a.play().catch(() => {
        /* autoplay blocked — will resume on next user interaction */
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneId, generation]);

  // Pause/resume follow timeline state. Does NOT touch currentTime — the
  // ref-driven scene-start effect above owns all seeking.
  useEffect(() => {
    const src = currentSrcRef.current;
    if (!src) return;
    const a = audiosRef.current[src];
    if (!a) return;

    if (state === "playing") {
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  }, [state]);

  // Mute toggle — apply to every preloaded element so queued clips are
  // silenced too, not just the active one.
  useEffect(() => {
    for (const a of Object.values(audiosRef.current)) {
      a.muted = isMuted;
    }
  }, [isMuted]);

  // Voice volume — live, applies to every clip (active + queued)
  useEffect(() => {
    const v = Math.max(0, Math.min(1, volume));
    for (const a of Object.values(audiosRef.current)) {
      a.volume = v;
    }
  }, [volume]);
}
