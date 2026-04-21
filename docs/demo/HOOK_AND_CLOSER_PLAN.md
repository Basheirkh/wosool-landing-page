# Demo · Hook + Closer Plan

**Status:** Proposal — awaiting approval before any code
**Date:** 2026-04-20
**Current runtime:** 94.8s · 39 scenes
**Proposed after:** ~111s · 45 scenes

---

## 1 · What the demo is missing

Watching the current demo, the story starts cold:

> *"Here's a card in the Salla app store. Someone moves a cursor to Install…"*

That's a **process shot**, not a **hook**. By 10 seconds in, a viewer has no reason to care yet. And the closer (end-card alone) states the tagline but doesn't land the *why*: no proof, no cost punch, no social credibility.

The landing repo has all the raw ingredients — they just aren't in the demo.

---

## 2 · What the landing repo actually says (content audit)

These are the lines the landing site ships today. All of them are battle-tested copy.

### From `Hero.tsx`
- **"تكلّم متجرك. يسويه."** — the tagline, the spine of the brand
- **"دير متجرك كله من واتساب"** — positioning
- **"صوت · صور · نص"** — input modalities
- **"بدون لابتوب · بدون موظف"** — the differentiator
- **"لأصحاب المتاجر الإلكترونية في السعودية"** — audience

### From `KpiTrustStrip.tsx` (4 headline stats)
- **24/7** وقت تشغيل الوكيل
- **<3 ث** متوسط زمن الرد
- **100٪** عربي من الأساس
- **99.9٪** توفّر البنية التحتية

### From `CaseStudy.tsx` (before/after)
- زمن الرد: **٤٥ دقيقة → ٣ ثوان** (أسرع ٩٠٠×)
- التكلفة الشهرية: **٥,٠٠٠ ريال → ٢٩٩ ريال** (توفير ٩٤٪)
- "من أول أسبوع مع وصول، كل رسالة تلاقي ردّاً — **وزادت الطلبات ٤٠٪** في نفس الشهر"

### From `Testimonials.tsx`
> "كنا نُضيّع طلبات كل ليلة لأن ما أحد يرد على العملاء بعد الدوام. من أول أسبوع مع وصول، كل رسالة تلاقي ردّاً — وزادت الطلبات ٤٠٪ في نفس الشهر."
> — صاحب متجر · قطاع الموضة النسائية · الرياض

### From `AgentsArchitectureSection.tsx` (the 4-agent roster)
- **موظف العملاء** — "يرد على عملاءك في واتساب. أسرع منك."
- **موظف المدير** — "قوله وش تبي — ينفّذ."
- **موظف الذكاء** — "يرسلك تقرير كل صباح: شو بيع أمس. شو ناقص."
- **موظف الموقع** — "عميلك يسأل عن منتج — يرى الصفحة ويرد."

### From `FooterCTA.tsx` + `Pricing.tsx` (the close)
- **متجرك ينتظرك**
- **أول موظف ما يحتاج راتب**
- **ما ينام. ما يتعب. وجاهز الحين.**
- **جرّب مجاناً — ٧ أيام بدون بطاقة**
- **موظف واحد = ٣,٠٠٠+ ريال/شهر** vs **وصول = ٢٩٩ ريال/شهر × ٤ موظفين**

These are gold. They belong in the demo, not just on a static page.

---

## 3 · The hook strategy (first 10 seconds)

**Structure:** Problem → Proof → Promise → People (agents).

Merchants scrolling Salla's store see the first frame and decide in ≤5 seconds whether to keep watching. A process shot of clicking Install is the wrong thing to show them. What they need to feel is:

1. **"That's my problem."** — a visceral image of something they lose nightly
2. **"The numbers work."** — a stat reel that makes the upside concrete
3. **"This is big."** — the tagline delivered cinematically
4. **"Four of them."** — the agent team as a reveal, then the demo proceeds normally

### Proposed opening — 3 new scenes inserted *before* `discovery`

#### H1 · `cold-open` · 3000ms · phase: **hook**
- **Scene:** Pure black background. A single iPhone silhouette center-stage, screen off. Two taps of the power button light it up. The lock screen floods with a stack of unread WhatsApp notifications from customers, timestamps stamped `٢:٣٤ ص`, `٣:١٥ ص`, `٤:٠٢ ص`. Each notification slides in and pushes the next down. Counter ticks: `٣ رسائل`, `٧`, `١٢`, `٢٤`.
- **Copy overlay (top, fading in at 1.5s):** `صاحب المتجر نايم.` `الطلبات تضيع.`
- **Why it works:** It's the merchant's nightmare in 3 seconds. No corporate speak. Just the loss.
- **Motion:** Staggered-slide notifications, counter ticking with monospace, subtle phone-glow breathing.
- **Primitives needed:** `LockScreenNotification` (WA-green, avatar, message preview, timestamp), counter digit-flip animation. Reuses existing `PhoneMockup` — straight, no tilt.

#### H2 · `the-promise` · 3000ms · phase: **hook**
- **Scene:** Hard cut to bright cinematic canvas. The *Wosool infinity mark* breathes mint-green at center, large (240px). Below it, the tagline appears word by word:
  > `تكلّم` · `متجرك` · `.` · `يسويه.`
  
  Display size (88px), IBM Plex Sans Arabic at 700, the word `متجرك` picks up teal. The mint breath pulses with each word landing.
- **Copy:** Tagline exactly as it reads on the landing page.
- **Why it works:** This is the line. Every other scene rides on this being unforgettable.
- **Motion:** Logo breath (3.2s cycle), word-by-word reveal with clip-path wipe (RTL-safe, no character typewriter — Arabic ligatures break with character-by-character). Subtle mint radial wash.
- **Primitives needed:** None new — reuses `WosoolMark` + existing typography.

#### H3 · `meet-the-four` · 3000ms · phase: **hook**
- **Scene:** Four agent cards cascade in from the sides in sequence. Each card carries its identity color from tokens (blue/violet/green/teal), its icon, its name, and its one-line promise from `AgentsArchitectureSection`. On each landing, the agent's brief "signature line" appears below and fades out:
  - `موظف العملاء` → "يرد أسرع منك"
  - `موظف المدير` → "قوله — ينفّذ"
  - `موظف الذكاء` → "يرسلك تقرير كل صباح"
  - `موظف الموقع` → "يرد من داخل المتجر"
- **Closing overlay at 2.5s:** `أربعة موظفين. ما ينامون.`
- **Why it works:** Viewer now knows *who* they're about to meet in the demo. The install + setup acts make 10x more sense after this.
- **Motion:** Staggered entry (0ms, 180ms, 360ms, 540ms), spring easing, micro-pulse on each agent color as it lands, overlay tagline springs in at 2.5s.
- **Primitives needed:** `AgentBadgeCard` — a compact agent card (icon + name + signature). Reuses palette from existing `AgentRow`.

### Total hook runtime: 9.0 seconds → hook fires before the viewer would normally give up

The existing `discovery` (Salla app store install) naturally becomes scene 4 and now reads as *"and here's how you meet them"* — a payoff, not a cold entry.

---

## 4 · The closer strategy (before end-card)

**Structure:** Results → Social proof → Cost → End card (existing).

The current ending is just `end-card`. It's beautiful but it's a brand statement, not a pitch. After 90 seconds of showing what Wosool *does*, the viewer needs three pieces of evidence before the CTA:
1. **It works at scale** (the numbers)
2. **It works for someone like me** (testimonial)
3. **I can afford it** (price)

Then the tagline lands.

### Proposed closer — 3 new scenes inserted *before* `end-card`

#### C1 · `results-reel` · 3500ms · phase: **results**
- **Scene:** Clean canvas, warm-cream background. A centered panel labeled in small mono caps: `النتائج الفعلية`. Inside: a 2×2 grid of "counter cards" that tick their numbers up from zero to their final value over 1.8 seconds, staggered. Each card shows the number, the unit, and the label.
  - **٣ ث** — متوسط زمن الرد
  - **٩٠٠×** — أسرع من الرد اليدوي
  - **+٤٠٪** — طلبات في الشهر الأول
  - **٩٤٪** — توفير في التكلفة
- **Why it works:** Every stat is verifiable on the landing page's CaseStudy component. Not aspirational marketing — published metrics.
- **Motion:** Staggered counter tickers (120ms delays), each number using `tabular-nums` and JetBrains Mono, card scale 0.95 → 1 on start. Subtle mint underline appears per card as it finishes counting.
- **Primitives needed:** `MetricCard` (label + ticker number + unit) with a `StatTicker` helper that lerps from 0 → target with easeOutCubic.

#### C2 · `real-merchant` · 3000ms · phase: **results**
- **Scene:** Canvas darkens slightly (moves from cream toward a warm grey `#E8E0D0`). Large quote mark `"` in teal, then the testimonial appears line-by-line from `Testimonials.tsx`, set in IBM Plex Arabic at 40px:
  > كنا نُضيّع طلبات كل ليلة لأن ما أحد يرد على العملاء بعد الدوام. من أول أسبوع مع وصول، كل رسالة تلاقي ردّاً — وزادت الطلبات ٤٠٪ في نفس الشهر.
  
  Below, an attribution line: `— صاحب متجر · قطاع الموضة النسائية · الرياض`. Small Saudi flag glyph (🇸🇦). Mint checkmark next to the name signifying verified Salla merchant.
- **Why it works:** The stat reel is quantitative. This is qualitative. Together, they check both boxes for how trust gets built.
- **Motion:** Line-by-line wipe reveal (word-level for RTL safety, not character-level), quote mark scales in with overshoot, attribution slides up at the end. No parallax — still and confident.
- **Primitives needed:** `TestimonialPanel` — large quote block with line-by-line reveal driven by `ctx.progress`.

#### C3 · `price-punch` · 3000ms · phase: **results**
- **Scene:** Bright warm-cream canvas. Two columns, heavy contrast:
  - **Left (struck through, muted):** `موظف واحد بشري` · `٣,٠٠٠+ ريال/شهر` · `يتعب · ينام · يطلب إجازة`
  - **Right (vivid, mint glow):** `وصول` · `٢٩٩ ريال/شهر` · `٤ موظفين` · `يشتغلون ٢٤/٧`
  - **Between them:** A mint-green `vs` + arrow indicating the move.
- **Bottom line (appears at 2s):** `اشتراك شهري. بدون عقد. جرّب مجاناً ٧ أيام.`
- **Why it works:** Price is the final objection. Showing it as a visible comparison — exactly as it sits in `Pricing.tsx` — removes hesitation. The "٣,٠٠٠+ ريال/شهر = one human employee" reframe is Wosool's sharpest weapon.
- **Motion:** Columns slide in from outside edges, strikethrough line grows across the human-cost column after it lands, mint glow pulses once on the Wosool column. Bottom CTA line fades in last.
- **Primitives needed:** `CompareColumns` — a two-column before/after with strike/glow states.

#### C4 · `end-card` (existing, 4000ms)
No change. The existing breathing logo + tagline + Salla CTA now lands after three lines of evidence instead of cold.

### Total closer runtime: 9.5s → 13.5s including existing end-card

---

## 5 · Where these scenes fit in the timeline

```
  [HOOK · new, ~9s] ────────────────────────────
   H1 cold-open         (3.0s)  hook · phase:hook
   H2 the-promise       (3.0s)  hook · phase:hook
   H3 meet-the-four     (3.0s)  hook · phase:hook

  [SETUP · existing, 33.4s] ────────────────────
   …discovery through connected (unchanged)…

  [CONVERSATION · existing, ~50.4s] ────────────
   …admin arcs · customer arcs · policy arcs…

  [SALES · existing, 14.5s] ────────────────────
   …storefront · skin Q · agent answer · cart…

  [CLOSER · new, ~9.5s] ────────────────────────
   C1 results-reel      (3.5s)  end · phase:results
   C2 real-merchant     (3.0s)  end · phase:results
   C3 price-punch       (3.0s)  end · phase:results

  [END · existing, 4s] ─────────────────────────
   end-card             (4.0s)  end · phase:end
```

**New total: 94.8 + 9.0 + 9.5 = 113.3 seconds (1:53).** That's over the original 75–85s brief target, but the demo has grown into something richer than "Salla listing video" — this is now a merchant-facing pitch reel. The current length is acceptable for an on-site `/demo` page; for the Salla store listing an editor can cut a 75s trailer out of this long-form version.

Alternative: we can drop H3 `meet-the-four` (saves 3s) if you want to stay closer to 110s. I'd recommend keeping it — it's the strongest piece of context-setting for the rest of the demo.

---

## 6 · Two new phases in the Stage tint system

Add to the existing setup / admin / customer / sales / end palette:

- **hook** → `#0B1A1F` (ink-dark — cinematic cold open, big contrast moment). H1 uses this; H2 and H3 transition to lighter hook variants or you could treat the hook as a single dark-to-light gradient over the 9s.
- **results** → `#F2E9D6` (slightly warmer than sales cream — signals "summary / proof" section).

Both fade in via the existing 700ms canvas transition. The hook → setup transition will read as "dark drama → daylight build" which is visually satisfying.

---

## 7 · New primitives required

| Primitive | Used by | Complexity |
|---|---|---|
| `LockScreenNotification` | H1 | Medium — stack of WA-green notification cards with avatar + preview + timestamp |
| `AgentBadgeCard` | H3 | Low — compact card (icon + name + tagline); reuses `AgentRow` palette |
| `MetricCard` + `StatTicker` | C1 | Low — number tickers with lerp from 0, tabular-nums; standard |
| `TestimonialPanel` | C2 | Low — large quote block with line-by-line reveal |
| `CompareColumns` | C3 | Low — two columns with strike-through + glow states |

**Total new primitives: 5.** All small, none require third-party deps.

---

## 8 · Risks + open questions

### Risks
1. **Total runtime creep.** Going from 94.8s → 113.3s is a 20% increase. If you think the demo is already too long, we drop H3 + C2 (saves ~6s, lands at ~107s).
2. **Hook tone mismatch.** The cold open is the darkest, most dramatic scene in the demo. If that reads "too ominous" against the warm admin/customer/sales scenes, we can soften H1 to a daylit "merchant checking phone at breakfast, sees 47 unread" instead of a 2:34 AM nightmare. The 2:34 AM version is stronger.
3. **Testimonial attribution.** The landing page uses "صاحب متجر · قطاع الموضة النسائية · الرياض" — anonymous. If we can get a real named merchant (with photo) before the final render, we swap it in; the scene accepts a `photo` prop.
4. **Price copy sensitivity.** The "٣,٠٠٠+ ريال/شهر = human employee" framing could be seen as adversarial. It's exactly what the landing page says though — so approval here means we're comfortable carrying that framing into the demo.

### Open questions for you
1. **Approve runtime target?** `~113s (current plan) · ~107s (trim H3+C2) · ~100s (trim H3 only)`.
2. **Approve the H1 tone?** Nighttime nightmare vs. daytime overwhelm.
3. **Do you have a real named merchant quote we could use in C2?** If yes, I'll include photo + name.
4. **Should H3 show all 4 agents, or only 3 (skip "موظف الموقع" since the sales phase already demonstrates it)?** I lean all 4 — the preview reinforces the demo's structure.
5. **Do the new `hook` and `results` phase tints feel right, or should I test different values?**

---

## 9 · Acceptance criteria when this ships

If approved, the Phase-5.5 deliverable will:

- [ ] Add 6 new scenes (3 hook + 3 closer), each in its own file under `scenes/hook/` and `scenes/closer/`
- [ ] Add 5 new primitives in `primitives/`
- [ ] Add `hook` + `results` phases to `PhaseId` and `PHASE_BG` in `stage/Stage.tsx`
- [ ] Update `timeline.tsx` — insert hook before `discovery`, insert closer before `end-card`
- [ ] Total runtime lands at ~113s (or trimmed target if you pick that)
- [ ] tsc + lint + build all clean
- [ ] No regression on existing 39 scenes
- [ ] Browser test: hook fires in first 10s, closer triggers evidence-stack-then-CTA feel

---

## 10 · The ask

Read this, flag anything off, then say **"approved"** (or tell me what to change). Once approved I'll execute in one pass — primitives, scenes, timeline wiring, verification — and report back with the new runtime breakdown.

No code written yet. This is the plan.
