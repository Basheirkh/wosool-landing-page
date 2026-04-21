# Wosool Demo — Situation Handoff

**Date:** 2026-04-21
**Author:** Previous engineer
**For:** Next engineer picking this up
**Status:** Interactive `/demo` page works · Programmatic MP4 render pipeline produces a file but user reports "not working" (audio is the prime suspect, but root cause not yet isolated)

---

## 1 · TL;DR

The Wosool animated demo ships as **two surfaces**:

1. **Live page** at `/demo` (and a placeholder at `/demo/mobile` for Phase 6) — used for `wosool.ai/demo` marketing page. This **works** — interactive viewing, audio plays, 45 scenes across hook → setup → admin/customer/sales → closer → end. Runtime 129.9s.

2. **Programmatic MP4 render** at `renders/wosool-demo-1920x1080.mp4` — one-command render via `npm run render:demo` for the Salla app-store listing video. **This is where the handoff is needed.** The pipeline produces a file. ffprobe says audio+video tracks are both present with sane levels. The user reports playback "not working" — specific symptom not yet narrowed down on the current latest output.

If you're picking this up, **start at §6 (Next steps)**. The rest is context.

---

## 2 · What's in the repo

### Live demo
- **Route:** `src/app/demo/page.tsx` → `components/DemoStage.tsx`
- **Engine:** `engine/useTimeline.ts` (rAF-driven, 45 scene timeline, play/pause/replay/mute/music/voice-volume state)
- **Audio hooks:**
  - `engine/useVoiceOver.ts` — preloads 10 mp3s, plays per-scene-id at scene boundaries
  - `engine/useMusicBed.ts` — looping bg music, volume capped at `MUSIC_MAX = 0.3`
- **45 scenes** organized by act: `scenes/hook/` · `scenes/install/` · `scenes/connection/` · `scenes/conversation/` · `scenes/sales/` · `scenes/closer/`
- **Timeline:** `engine/timeline.tsx` — all 45 scenes with durations, phases, kinds
- **Render-mode trigger:** `?render=true` on `/demo` auto-plays + hides overlays/cursor and exposes `window.__DEMO_STATE__` (`preparing`/`playing`/`complete`) for puppeteer

### Render pipeline
- **Script:** `scripts/render-demo.mjs`
- **Dependencies:** `puppeteer@24` + `puppeteer-capture@1.48` + `ffmpeg-static`
- **npm script:** `render:demo`
- **Docs:**
  - `docs/demo/VOICEOVER_SCRIPT.md` — script + cue times
  - `docs/demo/ELEVENLABS_RECORDING_GUIDE.md` — voice generation guide
  - `docs/demo/HOOK_AND_CLOSER_PLAN.md` — hook + closer scene design (approved)

### Audio assets in place
```
public/audio/voice/   11 clips (01-hook through 08-closer, plus m1, m2, v1)
public/audio/music/   background.mp3 (192 kbps, 1:42, looping)
```

---

## 3 · Render pipeline — how it runs

```bash
# 1. Production build
npm run build

# 2. Stage assets into standalone output (required because next.config.mjs
#    uses output: "standalone" — `next start` is broken with that setting)
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# 3. Start standalone server in one terminal
cd .next/standalone && PORT=3000 node server.js

# 4. In another terminal, run the render
npm run render:demo
```

**Render steps (internal):**
1. Launch `chrome-headless-shell` (NOT regular Chrome — required for `HeadlessExperimental.beginFrame`)
2. Navigate to `http://localhost:3000/demo?render=true`
3. Start puppeteer-capture (this is when Chrome's deterministic clock starts advancing)
4. Wait for `window.__DEMO_STATE__ === 'complete'` (~7 min of real time for 130s of virtual time — 3× slower)
5. Stop recorder → produces `renders/wosool-demo-1920x1080-silent.mp4` (video only; puppeteer-capture does NOT capture audio)
6. Run ffmpeg mux: silent video + looped bg music + 9 voice clips at cue times → loudnorm → final MP4 at `renders/wosool-demo-1920x1080.mp4`

**Real-time budget:** ~7 min capture + ~20s mux = ~7.5 min per render run.

---

## 4 · What works (verified)

- [x] Live `/demo` loads, plays, voices and music audible in browser
- [x] All 45 scenes render with correct text/graphics
- [x] `/demo?render=true` auto-plays, hides UI, exposes `window.__DEMO_STATE__`
- [x] `npm run build` clean, `lint` clean, `tsc --noEmit` clean
- [x] Prod server at `.next/standalone/server.js` serves `/demo` HTTP 200, all JS chunks and audio assets serve correctly
- [x] Puppeteer-capture launches successfully, completes 130s capture in ~7 min
- [x] Silent MP4 produced with valid H.264 stream (7756 frames @ 60fps, ~18 MB)
- [x] ffmpeg mux completes, produces final MP4 with both streams
- [x] ffprobe on final output:
  ```
  Duration: 00:02:09.27
  Video: h264 (High), yuv420p, 1920x1080, 397 kb/s, 60 fps
  Audio: aac (LC), 44100 Hz, stereo, 196 kb/s
  Mean volume: -18.4 dB  (broadcast spec)
  Max volume:  -0.7 dB   (peak, clean)
  ```

---

## 5 · What's reportedly broken — needs triage

**User report:** "not working" on the current latest MP4.

History of the "not working" thread:
1. First render (bg 0.3, voice 1.0, no normalization): user said "no voice or music at all"
2. Adjusted to bg 0.07 / voice 1.0 (to user's spec). Re-rendered. Still "not working."
3. Added `loudnorm=I=-14:TP=-1:LRA=11` at filter tail → audio clearly measurable (mean -18.4 dB, max -0.7 dB). User: "not working."

**What I don't know:**
- Which player the user is using (browser, QuickTime, VLC, something else)
- Whether "not working" means silent, distorted, unsync, visuals corrupted, or file won't open
- Whether a specific part of the demo is broken (e.g., last 10s cuts off, specific scenes silent, specific voices missing)
- Whether the user got the **latest** loudnorm'd file or a previous version that was still quiet
- Whether the `silent.mp4` has an empty/zero-sample audio track that's somehow interfering (need to verify with `ffprobe -show_streams`)

**Non-blocking warnings observed during render:**
- React hydration error #418 (minified, fires 6 times at mount)
- React hydration error #423 (fires once)
- These don't affect the rendered frames but should be chased down in a separate pass — likely caused by the audio hooks or something touching `window` during first render pass that the server can't reproduce.

---

## 6 · Next steps (priority order)

### 6.1 · Narrow the "not working" symptom first
Before touching code. Ask the user:
1. Which player are you opening the MP4 in?
2. Is it totally silent, partially silent, distorted, or does the file refuse to open?
3. Does the video play correctly (visuals OK) or is that also broken?
4. Does the audio play for any portion of the 2:09 runtime, or is it silent throughout?

Without this, blind iteration wastes an hour per cycle (~7 min per render + verify).

### 6.2 · Sanity-check the output locally yourself
```bash
# Direct audio extraction — removes player as a variable
node_modules/ffmpeg-static/ffmpeg -i renders/wosool-demo-1920x1080.mp4 \
  -vn -ac 2 /tmp/audio-check.wav
# Play /tmp/audio-check.wav in a known-good player.
# If THAT is silent, the problem is in the mux. If audible, the problem is player-side.

# Timestamp probe: which frames have audio?
node_modules/ffmpeg-static/ffmpeg -i renders/wosool-demo-1920x1080.mp4 \
  -af astats=metadata=1:reset=1 -f null - 2>&1 | grep "RMS_level" | head -20
```

### 6.3 · Verify the silent.mp4 has NO audio stream
```bash
node_modules/ffmpeg-static/ffmpeg -i renders/wosool-demo-1920x1080-silent.mp4 2>&1 | grep "Stream"
```
If it DOES have an audio stream (shouldn't — puppeteer-capture is video-only), it might be interfering with the mux. The `-map 0:v:0` should handle it, but worth confirming.

### 6.4 · Try a different audio container
MP4/AAC works universally, but some players have quirks. Render a **webm/opus** variant as a comparison test:
```bash
node_modules/ffmpeg-static/ffmpeg -i renders/wosool-demo-1920x1080.mp4 \
  -c:v libvpx-vp9 -b:v 2M -c:a libopus -b:a 128k /tmp/test.webm
```
Play both. If `.webm` plays and `.mp4` doesn't, it's an AAC-in-MP4 decoder issue on the user's system.

### 6.5 · Cue-time drift audit
The scene-start timings hardcoded in `scripts/render-demo.mjs` (`CUES_MS`) must match the cumulative durations in `src/app/demo/engine/timeline.tsx`. These got out of sync at least once during the "stretch scenes to fit voice clips" pass. Worth regenerating programmatically:
```js
// sketch — extract from timeline.tsx at build time rather than hardcoding
import { TIMELINE } from "../src/app/demo/engine/timeline.tsx"; // not trivial from .mjs
// or just import the cue calculation into the same TS module
```
For now, `CUES_MS` hardcoded values are:
```
01-hook:             0
02-setup:            14000
03-connect:          32300
m1-merchant-voice:   47400
04-admin-agent:      55400
05-customer-agent:   78900
06-policy:           87400
07-sales-agent:      97400
08-closer:          111900
```
Re-verify against current `timeline.tsx` before next render.

### 6.6 · Fix React hydration errors (non-urgent)
Error #418 = "hydration mismatch", #423 = "hydration text mismatch". Likely culprits:
- `useMemo(() => new URLSearchParams(window.location.search)...)` in DemoStage — `window` only on client
- `useTimeline`'s `useReducedMotion()` hook
- GlobalCursor's `useMemo` on `window.location` patterns

Fix by wrapping client-only logic in `useEffect` + `useState`, not `useMemo`. Won't affect the rendered video (React recovers) but is technical debt.

### 6.7 · Phase 6 — mobile portrait variant (on backlog, don't do yet)
User explicitly deferred. Placeholder exists at `/demo/mobile`. See original 7-phase plan in `docs/demo/PHASE_1_PLAN.md`.

---

## 7 · Key files

```
src/app/demo/
├── components/DemoStage.tsx       # Main orchestrator + render-mode switch
├── engine/
│   ├── timeline.tsx               # All 45 scenes, durations, phases
│   ├── useTimeline.ts             # rAF loop, state machine, volume setters
│   ├── useVoiceOver.ts            # Per-scene-id audio trigger
│   └── useMusicBed.ts             # Looping bg, volume-scaled by MUSIC_MAX=0.3
├── scenes/                        # 45 scene components, 6 subdirs
└── stage/Stage.tsx                # Parametric 1920×1080 (or 1080×1920) canvas

scripts/render-demo.mjs            # The render pipeline, ~175 lines
public/audio/voice/                # 11 mp3 clips
public/audio/music/background.mp3  # Looping bed
renders/                           # Output dir (gitignored)

docs/demo/
├── SITUATION_HANDOFF.md           # This file
├── VOICEOVER_SCRIPT.md            # Script + cue timing
├── ELEVENLABS_RECORDING_GUIDE.md  # Voice generation guide
├── HOOK_AND_CLOSER_PLAN.md        # Hook/closer scene plan
└── REARRANGEMENT_PLAN.md          # Original file organization plan
```

---

## 8 · Open questions for the user

Answer these before the next attempt:

1. **Which MP4 was "not working"?** The most recent (`renders/wosool-demo-1920x1080.mp4` dated 10:48 today with loudnorm) or an earlier one? Check the file mtime.
2. **Symptom specifics:** silent / distorted / won't open / visuals broken / audio plays for part of it only?
3. **Playback environment:** browser (which one?), macOS/Windows/Linux player (QuickTime, VLC, Media Player)?
4. **Speaker volume when testing:** was the Mac/OS volume cranked up, or at default? The audio is at broadcast spec but broadcast is quieter than YouTube (-14 LUFS vs ~-11 LUFS); may need a touch more headroom if they're comparing against YouTube ads.

Once those are answered, most of §6 becomes unnecessary and the fix is a 10-minute change.

---

## 9 · Commands cheatsheet

```bash
# Run live demo in dev
npm run dev
# → http://localhost:3000/demo

# Test render-mode in browser (for debugging)
# http://localhost:3000/demo?render=true
# Open devtools, watch window.__DEMO_STATE__ transition preparing → playing → complete

# Full render (assumes server is running)
npm run render:demo

# Just re-mux audio on existing silent.mp4 (saves 7 min)
FF=node_modules/ffmpeg-static/ffmpeg
V=renders/wosool-demo-1920x1080-silent.mp4
F=renders/wosool-demo-1920x1080.mp4
M=public/audio/music/background.mp3
VD=public/audio/voice
$FF -y -i "$V" -stream_loop -1 -i "$M" \
  -i "$VD/01-hook.mp3" -i "$VD/02-setup.mp3" -i "$VD/03-connect.mp3" \
  -i "$VD/m1-merchant-voice.mp3" -i "$VD/04-admin-agent.mp3" \
  -i "$VD/05-customer-agent.mp3" -i "$VD/06-policy.mp3" \
  -i "$VD/07-sales-agent.mp3" -i "$VD/08-closer.mp3" \
  -filter_complex "[1:a]volume=0.07[bg];[2:a]volume=1.0,adelay=0|0[v0];[3:a]volume=1.0,adelay=14000|14000[v1];[4:a]volume=1.0,adelay=32300|32300[v2];[5:a]volume=1.0,adelay=47400|47400[v3];[6:a]volume=1.0,adelay=55400|55400[v4];[7:a]volume=1.0,adelay=78900|78900[v5];[8:a]volume=1.0,adelay=87400|87400[v6];[9:a]volume=1.0,adelay=97400|97400[v7];[10:a]volume=1.0,adelay=111900|111900[v8];[bg][v0][v1][v2][v3][v4][v5][v6][v7][v8]amix=inputs=10:duration=first:normalize=0,loudnorm=I=-14:TP=-1:LRA=11[aout]" \
  -map 0:v:0 -map "[aout]" \
  -c:v copy -c:a aac -b:a 192k -movflags +faststart -shortest "$F"

# Verify audio levels of a render
$FF -i "$F" -filter:a volumedetect -f null - 2>&1 | grep volume

# Kill a stuck server
fuser -k 3000/tcp
```

---

## 10 · Things that burned me, so you don't get burned too

1. **`next start` doesn't work with `output: "standalone"`.** Silent 500 errors. Must use `cd .next/standalone && node server.js`. And remember to `cp -r public .next/standalone/` and `cp -r .next/static .next/standalone/.next/` after every `npm run build` — the standalone bundle doesn't include them by default.

2. **`puppeteer-capture` requires `chrome-headless-shell`**, not regular Chrome. Install once: `npx puppeteer browsers install chrome-headless-shell`. In the script: `headless: "shell"`.

3. **`HeadlessExperimental.beginFrame` flags** are required for deterministic capture (see `render-demo.mjs` launch args). Miss one and puppeteer-capture throws `MissingHeadlessExperimentalRequiredArgs`.

4. **Puppeteer's default `protocolTimeout` is 30s.** Deterministic render takes ~7 min real time. Set `protocolTimeout: 30 * 60_000` on launch or `waitForFunction` dies mid-render.

5. **Setting `defaultViewport` BEFORE capture starts freezes rendering.** Known puppeteer-capture bug. Set `defaultViewport: null` on launch, call `page.setViewport(...)` AFTER `recorder.start()`.

6. **Deterministic mode means no time passes until capture starts.** If you `page.goto()` then `waitForFunction(...playing)` before `recorder.start()`, you deadlock — the demo's timeline never advances because Chrome's clock is frozen. Start capture first, then wait.

7. **`amix` with `normalize=1` (default) divides every input's amplitude by N.** With 10 inputs, voices come out at 1/10 = −20 dB attenuation. Always use `normalize=0` when mixing voices + bg.

8. **User's auto-memory says "Report first before code" for complex issues** and "Report = .md only" when the user says "report". This handoff is an .md file deliberately.

---

Signed off. Good luck.
