"use client";

import { useEffect, useRef } from "react";
import type { PlaybackState } from "./types";

const MUSIC_SRC = "/audio/music/background.mp3";
/** Hard cap on background bed volume. Slider `volume=1.0` → this value.
 *  Ensures music can never overpower the voice-overs. */
const MUSIC_MAX = 0.3;

interface Props {
  state: PlaybackState;
  /** Bumps on every play-from-zero so we can rewind music to the top */
  generation: number;
  /** Global mute — kills voice + music together */
  isMuted: boolean;
  /** Music-only toggle — pause music while voice keeps playing */
  enabled: boolean;
  /** User-facing slider intensity 0..1. Actual audio volume is this × MUSIC_MAX. */
  volume: number;
}

/**
 * Looping background music bed. Plays while timeline is `playing` AND
 * `enabled` is true AND not `isMuted`. Volume is user-controlled.
 */
export function useMusicBed({ state, generation, isMuted, enabled, volume }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // One-time setup
  useEffect(() => {
    if (typeof window === "undefined") return;
    const a = new Audio(MUSIC_SRC);
    a.loop = true;
    a.volume = volume * MUSIC_MAX;
    a.preload = "auto";
    a.addEventListener("error", (e) => {
      if (process.env.NODE_ENV !== "production") {
        // Shows up in DevTools so the user can diagnose missing/blocked files
        // without opening the network tab.
        // eslint-disable-next-line no-console
        console.warn("[demo/music] audio error on", MUSIC_SRC, a.error, e);
      }
    });
    audioRef.current = a;
    return () => {
      a.pause();
      a.src = "";
      audioRef.current = null;
    };
    // Mount-once; volume applied by the separate effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Play/pause decision combines timeline state + music toggle + mute
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const shouldPlay = state === "playing" && enabled && !isMuted;
    if (shouldPlay) {
      a.play().catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn("[demo/music] play() rejected:", err?.name, err?.message);
        }
      });
    } else {
      a.pause();
    }
  }, [state, enabled, isMuted]);

  // Replay → rewind to top of the loop
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    if (state === "playing" && enabled && !isMuted) {
      a.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation]);

  // Live volume control — no need to restart playback.
  // Slider 0..1 maps to audio 0..MUSIC_MAX (0.3) so music is always under voice.
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = Math.max(0, Math.min(1, volume)) * MUSIC_MAX;
  }, [volume]);

  // Global mute (keeps voice + music in sync)
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = isMuted;
  }, [isMuted]);
}
