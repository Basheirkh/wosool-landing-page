# Phase 1 — Scaffolding Plan

**Status:** Awaiting approval before implementation
**Scope:** Scaffolding only. No scene visuals. Placeholder colored boxes that prove the timeline engine works end-to-end.

---

## Deliverable

Load `/demo` → see preloader → Play button appears → click → 29 scenes advance through in ~75 seconds as labeled colored panels → ends on "Complete" card. Controls work: Replay, Mute (toggles state even though no audio yet), Progress bar, keyboard Space + R. No scene code, no real visuals — that starts in Phase 2.

## File layout

```
src/app/demo/
├── layout.tsx                       # Scoped: RTL, IBM Plex Sans Arabic, full-bleed, hides navbar/footer
├── page.tsx                         # Server component: renders <DemoStage />
├── mobile/
│   └── page.tsx                     # Placeholder — "Mobile demo — Phase 6"
│
├── components/
│   ├── DemoStage.tsx                # Client orchestrator. Owns timeline state.
│   ├── Preloader.tsx                # "Preparing..." state while fonts load
│   ├── PlayOverlay.tsx              # Initial big Play button (dismissed after first play)
│   ├── Controls.tsx                 # Replay + Mute + Progress bar (bottom of viewport)
│   ├── SceneRenderer.tsx            # <AnimatePresence> wrapper; mounts active scene
│   └── DebugOverlay.tsx             # Dev-only: scene ID, elapsed, progress — hidden in prod
│
├── engine/
│   ├── types.ts                     # Scene, SceneContext, TimelineState, ActId, SceneKind
│   ├── timeline.ts                  # The 29-scene array (stub renders for Phase 1)
│   └── useTimeline.ts               # Playback hook — rAF driver, state machine
│
└── scenes/
    └── _stubs.tsx                   # 29 colored-box stubs + StubScene renderer
```

**~11 files.** No new top-level route siblings; everything scoped under `/demo`.

## Dependencies

- `framer-motion` — already installed (v12.38.0)
- **No `qrcode` yet.** Installed in Phase 3 when actually needed.
- **No new fonts.** `IBM_Plex_Sans_Arabic` already loaded in the root layout.

## Architectural decisions

### 1 · Single time source, rAF-driven

The timeline state is one number: `elapsedMs`. A single `requestAnimationFrame` loop in `useTimeline` updates it off `performance.now()` diffs while playing. No per-scene `setTimeout`. Pause just stops the loop and remembers `elapsedMs`. Seek sets `elapsedMs` directly. This is the only way to get pause/resume/seek without cumulative drift.

### 2 · Scenes are pure render functions, not mounted components that schedule themselves

```ts
interface Scene {
  id: string;                  // 'discovery', 'discovery-hover', ...
  act: 'install' | 'connection' | 'conversation' | 'end';
  kind: 'hero' | 'sub';
  label: string;               // debug overlay + a11y
  duration: number;            // ms
  render: (ctx: SceneContext) => ReactNode;
}

interface SceneContext {
  progress: number;            // 0..1 within this scene
  elapsed: number;             // ms since this scene started
  globalElapsed: number;       // ms since timeline start
  state: 'enter' | 'active' | 'exit';
  prefersReducedMotion: boolean;
}
```

Scenes don't own timers. The engine tells each scene where it is. This is what makes the 29-scene timeline composable in later phases — a scene doesn't know or care what comes before or after it.

### 3 · Scene swapping via `AnimatePresence`

`SceneRenderer` mounts only the active scene inside `<AnimatePresence mode="wait">`. Cross-fades between scenes are handled by Framer Motion, not manually tweened. Sub-scenes and their parent hero scenes are SEPARATE entries in the timeline — not variants of the same component — so that sub-scene timing stays explicit and editable.

### 4 · State machine

```
idle → preloading → ready → playing ⇄ paused → ended
                              ↑___________________|  (replay)
```

- `idle`: first paint, nothing loaded
- `preloading`: waiting on `document.fonts.ready` (Phase 1); adds image + audio preload in later phases
- `ready`: Play overlay visible
- `playing`: rAF loop active, scene renders every frame
- `paused`: rAF stopped, state preserved
- `ended`: timeline complete, Replay visible

### 5 · Scoped layout — `/demo` is its own surface

`src/app/demo/layout.tsx` wraps children in:
- Black background (`#000`) — the Salla recording needs clean letterboxing
- RTL direction, `lang="ar"`
- No Navbar, no Footer, no ScrollProgress, no BackToTop
- Full viewport height, no scroll

This is a cinema surface, not a subpage of the landing site. The user lands here to watch one thing.

### 6 · Preloader

Phase 1: resolves when `document.fonts.ready` fires. Phase 2+ adds image decoding. Phase 7 adds audio `canplaythrough`. Preloader never resolves in under 300ms — we deliberately hold for a beat so the play button feels earned, not jumpy.

### 7 · Controls

Bottom-center, auto-hide after 2s of no interaction (same pattern as `<deck-stage>`'s overlay).
- **Play/Pause**: Space
- **Replay**: `R`
- **Mute**: `M` (state only in Phase 1, wired to audio in Phase 7)
- **Progress bar**: click to seek (optional — behind a feature check; screen recording doesn't need it)

### 8 · Debug overlay

Top-left, mono font: `scene 7/29 · connected · 54.2s / 82.4s`. Visible only when `process.env.NODE_ENV !== 'production'` — gone in the final build so screen recording is clean.

### 9 · `prefers-reduced-motion`

Honored via `useReducedMotion()` from Framer Motion. When active: durations scale 0.3x, sub-scenes skip entirely (hero-only playback), no parallax, no particles. Phase 1 just plumbs the boolean through `SceneContext`.

## The 29-scene timeline (Phase 1 entries — all stubs)

| # | id | act | kind | ms | label |
|---|---|---|---|---|---|
| 1 | `discovery` | install | hero | 2500 | Salla card, Install highlighted |
| 2 | `discovery-hover` | install | sub | 800 | Cursor hover ripple |
| 3 | `discovery-click` | install | sub | 400 | Click press |
| 4 | `installing` | install | hero | 3000 | Progress bar 0→60% |
| 5 | `installing-pulse` | install | sub | 800 | Progress 60→100% |
| 6 | `installed` | install | hero | 2000 | Checkmark |
| 7 | `installed-toast` | install | sub | 1000 | Success toast slide-in |
| 8 | `dashboard-disconnected` | connection | hero | 3500 | Dashboard, 67% health, red alert |
| 9 | `agents-stagger` | connection | sub | 600 | 4 agent cards cascade |
| 10 | `stats-counter` | connection | sub | 700 | Numbers tick up |
| 11 | `health-ticker` | connection | sub | 500 | 0→67% ticker |
| 12 | `spotlight-alert` | connection | hero | 2500 | WhatsApp alert pulses |
| 13 | `qr-screen` | connection | hero | 3000 | Channels page + QR |
| 14 | `phone-enters` | connection | hero | 2000 | Split: phone tilts in |
| 15 | `scanning` | connection | hero | 3500 | QR scanner beam |
| 16 | `scan-sweep` | connection | sub | 1200 | Beam sweep overlay |
| 17 | `connected` | connection | hero | 3000 | 100% health, green |
| 18 | `health-morph` | connection | sub | 800 | 67→100, yellow→green |
| 19 | `agents-activate` | connection | sub | 700 | Status dots flip green |
| 20 | `push-in` | connection | sub | 900 | Camera push-in to phone |
| 21 | `voice-command` | conversation | hero | 3500 | Merchant voice note |
| 22 | `voice-wave` | conversation | sub | 1000 | Waveform pulse |
| 23 | `particles` | conversation | sub | 900 | Particle trail phone→dashboard |
| 24 | `dashboard-synced` | conversation | hero | 3000 | New product appears |
| 25 | `product-ripple` | conversation | sub | 600 | Grid ripple on insert |
| 26 | `reply` | conversation | hero | 3000 | Wosool reply + عبر وصول chip |
| 27 | `instant-changes` | conversation | hero | 3500 | Price morph animation |
| 28 | `price-morph` | conversation | sub | 800 | 299→279 green |
| 29 | `end-card` | end | hero | 4000 | Logo, tagline, CTA |

**Total runtime:** ~61.9s. Room to tune up to 85s by widening hero holds in Phase 5 polish. (The big brief targets 75–85s; we're under budget, which is healthy — easier to stretch than to cut.)

## What Phase 1 explicitly does NOT include

- No dashboard component — reserved for Phase 3
- No phone mockup — Phase 3
- No QR generation — Phase 3
- No WhatsApp bubble components — Phase 4
- No real animations inside scenes — every scene is a labeled colored panel with its ID and timer
- No audio anywhere — Phase 7
- No mobile variant — Phase 6 (just a "coming soon" stub page)
- No voiceover sync logic — Phase 7
- No particle/confetti — Phase 4+

## Acceptance criteria for Phase 1

When you pull this branch and run `npm run dev`, then visit `/demo`:

1. ☐ Page loads against black bg, no navbar/footer, no scroll
2. ☐ "Preparing..." pulses for ≥300ms, then resolves
3. ☐ Play button appears centered, large, hoverable
4. ☐ Click Play: button fades out, scene stubs begin advancing
5. ☐ Each stub shows: scene ID, act name, kind (hero/sub), elapsed time
6. ☐ All 29 scenes play in order with correct durations (checkable against table above)
7. ☐ Total runtime lands within 200ms of 61.9s
8. ☐ Space pauses/resumes. `R` replays from scene 1
9. ☐ Progress bar fills linearly 0 → 100%
10. ☐ On end: Replay button appears centered
11. ☐ Debug overlay shows current state in dev mode only
12. ☐ No console errors, no React warnings, no TS errors
13. ☐ `npm run build` succeeds
14. ☐ `npm run lint` passes

If any of these fail when you review, I fix before starting Phase 2.

## Risks I'm watching

1. **`AnimatePresence mode="wait"` + rAF can double-render on scene change.** Mitigation: scene change is driven by `activeSceneId` memoized from `elapsedMs`; scene duration is authoritative. If I see flicker, I'll switch to `mode="sync"` and hand-tune the fade.

2. **Arabic font + FOUT on first paint** can shift the play button. Mitigation: preloader holds until `document.fonts.ready` so play button paints with final metrics.

3. **React 18 Strict Mode double-invoke of effects** would start two rAF loops. Mitigation: cleanup function cancels the frame; I'll test in dev strict mode before claiming done.

4. **Scene object instability across renders** would thrash `AnimatePresence`. Mitigation: timeline is a module-level constant, not constructed per render.

## What I need from you to proceed

Just approval. Once you approve this plan I'll implement Phase 1 as described, stop at the acceptance criteria above, and wait for review before starting Phase 2.

If anything here is wrong or scoped incorrectly, tell me now — it's 10x cheaper to correct the plan than the code.
