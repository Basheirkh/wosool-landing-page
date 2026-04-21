# Demo Page — Rearrangement Plan

**Status:** Proposal, awaiting approval
**Date:** 2026-04-20
**Target:** `/demo` route on landing site

---

## 1 · What was actually extracted into `/demo`

You dropped three **identical** folders (download duplicates) at repo root:

```
demo/
├── Wosool Salla Demo — Storyboard Frames/
├── Wosool Salla Demo — Storyboard Frames (1)/   ← byte-identical to #1
└── Wosool Salla Demo — Storyboard Frames (2)/   ← byte-identical to #1
```

Inside each folder (verified with `diff -rq`, all three folders match):

| File | Size | What it is |
|---|---|---|
| `tokens.css` | 7 KB | Design tokens: teal/mint palette, agent colors, typography, RTL defaults |
| `deck-stage.js` | 22 KB | Self-contained web component `<deck-stage>` — handles slides, keyboard nav, auto-scale to viewport, localStorage persistence, print-to-PDF |
| `Wosool Demo - Install Act.html` | 24 KB, 605 lines, **3 slides** | Discovery · Installing · Installed |
| `Wosool Demo - Connection Act.html` | 90 KB, 1526 lines, **6 slides** | Dashboard Disconnected · Spotlight on Alert · QR Code · Phone Enters · Scanning · Connected |
| `Wosool Demo - Conversation Act.html` | 67 KB, 1404 lines, **5 slides** | Voice Command · Dashboard Synced · Reply · Instant Changes · End Card |
| `assets/logo-wosool-symbol.svg` | 685 B | Single Wosool mark |
| `scraps/` | ~30 PNGs | Design iteration leftovers (`01-after2.png`, `probe.png`, etc.) — **not production** |

**Total production payload:** 3 HTML decks + 1 CSS + 1 JS + 1 SVG = ~190 KB. Everything else is cruft.

---

## 2 · The fork in the road

The big brief you pasted describes rebuilding the 14 frames as **React components driven by Framer Motion with a 29-scene timeline, audio sync, preloader, mobile variant** — that's the 7-phase plan.

But what you actually have in `/demo/` is something different: **three finished, self-contained HTML decks** with a working web component that already handles slide navigation, keyboard controls, auto-scaling, and persistence. They're screen-record-ready today.

So the call is: **ship the HTML as-is, or rebuild in React?**

### Option A · Ship the HTML decks (fast path — ~1 hour)

Serve the existing HTML through Next.js at `/demo`. The `<deck-stage>` web component already does slideshow duties.

**Pros**
- Works in ~1 hour, not ~7 hours
- What you designed is what ships — no re-interpretation drift
- The web component already has keyboard nav, auto-scale, print-to-PDF
- You can screen-record all 14 slides today for the Salla listing
- Zero new dependencies

**Cons**
- No cinematic sub-scene motion (the "29-scene expansion" in the big brief doesn't happen)
- No voiceover/music wiring — static slide advance only
- No click-to-play overlay, no progress bar, no replay control (only keyboard `←/→/R`)
- Three separate URLs (or one combined) — not one seamless 85-second video
- Arabic text inside HTML is baked — not easily i18n-able

### Option B · Rebuild in React per the big brief (full path — ~7 hours)

Rewrite all 14 frames as React components, author the 29-scene timeline in Framer Motion, wire audio.

**Pros**
- Matches the big brief exactly
- Cinematic micro-animations between frames
- Audio sync, click-to-play, progress control, replay, mobile variant
- Reuses landing repo conventions (TSX, Tailwind, framer-motion already installed)

**Cons**
- 7x the effort
- The existing HTML becomes **reference material only** — scraps, not source
- Higher risk of visual drift from the Claude Design intent during rebuild
- Audio assets don't exist yet (ElevenLabs voiceovers need to be generated)

### Option C · Stage in two phases (recommended)

**Phase 0 (this session, ~1 hour)**: Do Option A. Get `/demo` live with the HTML decks so you can record the Salla video today.

**Phase 1 (next session, ~7 hours)**: Do Option B. Rebuild in React once audio assets are ready and you've seen the HTML version in production.

This unblocks the Salla listing now without committing to the full rebuild before you have voiceovers.

---

## 3 · Proposed SaaS-grade file layout

Regardless of Option A or B, the files belong in standard Next.js locations — not a folder called `demo/` at the repo root.

### For Option A (ship HTML)

```
landing/
├── public/
│   └── demo/
│       ├── install.html                    ← renamed, no spaces
│       ├── connection.html
│       ├── conversation.html
│       ├── tokens.css
│       ├── deck-stage.js
│       └── assets/
│           └── logo-wosool-symbol.svg
│
├── src/
│   └── app/
│       └── demo/
│           ├── page.tsx                    ← landing page: title + 3 act links
│           ├── install/page.tsx            ← <iframe src="/demo/install.html">
│           ├── connection/page.tsx
│           └── conversation/page.tsx
│
└── docs/
    └── demo/
        ├── DEMO_PAGE_REARRANGEMENT_PLAN.md ← this file
        └── storyboard-scraps/              ← moved here from demo/*/scraps
```

**Delete:** the three duplicate `demo/Wosool Salla Demo — Storyboard Frames*/` folders after extracting one copy.

### For Option B (full rebuild)

Adds `src/app/demo/scenes/`, `src/app/demo/components/`, `src/app/demo/timeline.ts`, `public/audio/voice/`, `public/audio/music/` per the big brief. The HTML files move to `docs/demo/reference-html/` as read-only source.

---

## 4 · Salla listing context

Salla's app store listing wants **one portrait MP4**, not three web pages. Whichever option you pick, the deliverable to Salla is a screen-recording. So the question "Option A or B" is really "do you want to screen-record a keyboard-advanced HTML slideshow, or a cinematic auto-playing video?"

---

## 5 · What I want from you before I touch any code

**Decide:**

1. **Option A, B, or C?**
2. If **A or C**: do you want `/demo` to link to all three acts (user picks), or auto-chain them into one continuous deck? (The `<deck-stage>` web component could be wrapped to load all 14 slides across 3 files into one continuous experience — another ~30 min of work.)
3. **Keep `scraps/` PNGs?** They're 30 PNG iterations — my vote is move them to `docs/demo/storyboard-scraps/` so they don't pollute `public/`.

Once you pick, I'll execute the rearrangement + route wiring in one pass. No code until you answer.

---

## 6 · Why I'm reporting instead of just moving files

Moving the files is cheap and reversible. But "use them" is ambiguous — embedding the HTML decks is a 1-hour job, rebuilding them in React is a 7-hour job, and the rearrangement structure is different for each. I don't want to move 30 PNGs into `public/demo/` only to delete them 2 minutes later because you picked Option B.

One decision from you → one correct rearrangement.
