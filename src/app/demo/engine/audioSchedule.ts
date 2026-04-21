/**
 * Scene id -> voice asset path used by both live playback and MP4 render mux.
 * Keeping this centralized avoids cue drift when timeline scenes are retimed.
 */
export const AUDIO_SCHEDULE: Record<string, string> = {
  // Hook
  "cold-open": "/audio/voice/01-hook.mp3",
  // Setup
  "discovery": "/audio/voice/02-setup.mp3",
  "qr-screen": "/audio/voice/03-connect.mp3",
  // Admin agent
  "voice-command": "/audio/voice/m1-merchant-voice.mp3",
  "voice-reply": "/audio/voice/04-admin-agent.mp3",
  // Customer agent
  "customer-inquiry": "/audio/voice/05-customer-agent.mp3",
  // Policy
  "shipping-extract": "/audio/voice/06-policy.mp3",
  // Sales agent
  "storefront-entry": "/audio/voice/07-sales-agent.mp3",
  // Closer
  "results-reel": "/audio/voice/08-closer.mp3",
};

interface SceneLite {
  id: string;
  duration: number;
}

/**
 * Compute cue offset (ms) per scheduled audio file by scanning timeline order.
 */
export function computeAudioCueMs(scenes: readonly SceneLite[]): Record<string, number> {
  const cues: Record<string, number> = {};
  let elapsedMs = 0;
  for (const scene of scenes) {
    const src = AUDIO_SCHEDULE[scene.id];
    if (src) {
      const file = src.split("/").pop();
      if (file) cues[file] = elapsedMs;
    }
    elapsedMs += scene.duration;
  }
  return cues;
}
