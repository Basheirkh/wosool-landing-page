# ElevenLabs Recording Guide — Wosool Demo VO

**Companion to:** `VOICEOVER_SCRIPT.md`
**Your current setup (from screenshot):**
- ✅ Voice: **Jeddawi — Calm, Confident, and Deep** (correct)
- ✅ Model: **Eleven Multilingual v2** (correct)

You'll generate **11 clips total** — 8 narrator (all with Jeddawi) + 3 character (two new voices). Full walkthrough below.

---

## 0 · Before you start — add 2 more voices

From the left sidebar, click **Voices → Browse Library**. Add these to your workspace:

| Voice slot | Search for | Why |
|---|---|---|
| Merchant | `Omar Saudi` or `Faisal Arabic` — pick a younger-sounding Saudi male | Voice note from the merchant should sound like a real busy shop owner, not the narrator |
| Visitor (female) | `Shahd` or any `Arabic Female` marked Saudi/Gulf | The sales-scene skin question should sound like a genuine customer |

If the library is thin, any "Middle Eastern Arabic" voice works — the key is that all 3 voices sound **different** from each other. Save each to your workspace so you can switch fast between generations.

---

## 1 · Universal settings baseline

Start with these on **every** generation. I'll flag per-clip tweaks below.

| Setting | Value | Why |
|---|---|---|
| **Speed** | `0.95` | Slightly slower than default — Arabic cinematic read |
| **Stability** | `55` | Middle: stable identity, room for emotion |
| **Similarity** | `80` | Keep the voice's Saudi accent locked |
| **Style Exaggeration** | `20` | A touch of drama without cartoon |
| **Language Override** | Off | v2 Multilingual auto-detects Arabic fine |
| **Output Format** | `mp3_44100_192` | 192 kbps MP3, 44.1 kHz — matches our target |

**Golden rule:** generate **3 takes** for each clip (click the regenerate button 2 more times). Pick the best one. ElevenLabs sometimes drifts into MSA or over-acts — having alternates saves you.

---

## 2 · The 11 clips — paste these directly

Each block below is **the exact text to paste into the text field**. Don't add quotes. Don't add the bracketed direction notes — those are for you, keep them out of the input. Ellipses (…) and punctuation are intentional — they trigger the right pauses.

### Clip 01 · HOOK · `01-hook.mp3`
**Voice:** Jeddawi · **Speed:** `0.88` (slower — dramatic) · **Stability:** `45` (more emotional) · **Style:** `30`

```
كل ليلة…

رسائل من عملاءك… تضيع.

من اليوم.

تكلّم متجرك — يسويه.

أربعة موظفين في متجرك. ما ينامون، ما يتعبون.
```

**Listen for:** whispered-quiet opening on the first two lines, then a confident shift at "من اليوم". If "متجرك" sounds like MSA (*matjaruka*), regenerate — we want *matjarak* (Saudi).

**Target duration:** ~11 seconds.

---

### Clip 02 · INSTALL · `02-setup.mp3`
**Voice:** Jeddawi · **Speed:** `0.95` · **Stability:** `60` · **Style:** `15`

```
تلقى وصول في متجر تطبيقات سلة.

ثواني — وخلصت.
```

**Listen for:** "تلقى" pronounced *tilga* (Saudi) — if it comes out *talqa* it's drifted to MSA, regenerate. "سلة" → *Salla*, clear enunciation.

**Target duration:** ~9 seconds.

---

### Clip 03 · CONNECT + GO LIVE · `03-connect.mp3`
**Voice:** Jeddawi · **Speed:** `0.95` · **Stability:** `55` · **Style:** `20`

```
اربط واتساب متجرك — مسحة وحدة بالجوال.

والحين… متجرك حيّ.

كل وكيل في مكانه، جاهز.
```

**Listen for:** "الحين" → *al-heen* (not *al-aan*). "حيّ" → *hayy* with weight on the doubled ي.

**Target duration:** ~11 seconds.

---

### Clip 04 · ADMIN AGENT · `04-admin-agent.mp3`
**Voice:** Jeddawi · **Speed:** `1.0` · **Stability:** `55` · **Style:** `25` (showing off)

```
وصول يسمع.

يسوّي.

ويرد — عبر وصول، بأمر من المتجر.

أو بالكتابة — نفس الوكيل، نفس السرعة.

يحذف. يحدّث حالة الطلب. والعميل يتنبّه تلقائياً.
```

**Listen for:** the staccato "يسمع. يسوّي. ويرد." should land like three hammer beats, not flowing together. If the VO merges them, add more periods: "يسمع... يسوّي... ويرد..."

**Target duration:** ~16 seconds.

---

### Clip 05 · CUSTOMER AGENT · `05-customer-agent.mp3`
**Voice:** Jeddawi · **Speed:** `0.92` (slower — softer moment) · **Stability:** `60` · **Style:** `25`

```
وفي الثالثة الصبح…

عميل يسأل عن طلبه.

موظف العملاء يرد — بالعربي، بذوقك.

ما يخلّي رسالة تضيع.
```

**Listen for:** **tone shift from Clip 04**. This is the compassionate moment. If it reads the same as the admin clip, regenerate with Stability 65 and Style Exaggeration 30. "بذوقك" → *bi-dhawqak*, warm.

**Target duration:** ~10 seconds.

---

### Clip 06 · POLICY / MANAGER · `06-policy.mp3`
**Voice:** Jeddawi · **Speed:** `0.98` · **Stability:** `55` · **Style:** `15`

```
تبي تبعث سياسة الشحن للمدير؟

يستخرجها من متجرك. ويرسلها له — جاهزة.
```

**Listen for:** "تبي" → *tabi* (Saudi, not *tureed*). "يستخرجها" → clear enunciation, *yastakhrijha*.

**Target duration:** ~8 seconds.

---

### Clip 07 · SALES AGENT · `07-sales-agent.mp3`
**Voice:** Jeddawi · **Speed:** `0.95` · **Stability:** `50` · **Style:** `25`

```
وعلى الموقع نفسه…

موظف المبيعات يشاهد زوارك معك.

الزائرة تسأله: مناسب لبشرة حساسة؟

يرد من بيانات منتجاتك — بدون ما يحتاج منك أحد.

طلبت إضافة للسلة؟ يسوّيها فوراً.
```

**Listen for:** the word "الزائرة" (female visitor) should sound natural — if Jeddawi genders it wrong, change to "الزائر" (male) and we'll caption-only the female customer on screen. "بشرة حساسة" should land clearly — it's the product question.

**Target duration:** ~14 seconds.

---

### Clip 08 · CLOSER + CTA · `08-closer.mp3`
**Voice:** Jeddawi · **Speed:** `0.92` · **Stability:** `60` (locked, confident) · **Style:** `25`

```
النتائج؟

ثلاث ثواني للرد. تسع مية مرة أسرع من موظف بشري. وزيادة أربعين بالمية في الطلبات — من أول شهر.

موظف بشري واحد؟ ثلاثة آلاف ريال في الشهر.

وصول؟ مئتين وتسعة وتسعين — وأربعة موظفين.

تكلّم متجرك…

يسويه.
```

**Why the numbers are spelled out in words:** ElevenLabs reads "٣ ثواني" as "thalaatha thawaani" correctly ~70% of the time but sometimes says "three thawaani" (English three). Spelling in Arabic words forces correct reading. **Do not** use digits (٣, ٩٠٠, ٤٠٪) in this clip.

**Listen for:** the final "تكلّم متجرك… يسويه" should match Clip 01's delivery of the same line. Same cadence, same warmth. It's the bookend — listen to Clip 01 again before finalizing this one.

**Target duration:** ~13 seconds.

---

### Clip M1 · MERCHANT VOICE NOTE · `m1-merchant-voice.mp3`
**Voice:** Omar/Faisal (the younger Saudi male) · **Speed:** `1.02` (busy, slightly rushed) · **Stability:** `40` · **Style:** `35`

```
يا وصول… ضيف سماعة X، بمية وتسعة وأربعين ريال، مخزون خمسة وعشرين قطعة. بسرعة.
```

**Listen for:** should sound like a real merchant talking between tasks — not a narrator. Casual "يا وصول" → *ya Wosool*. If it sounds polished like a radio ad, regenerate with Stability 30.

**Target duration:** ~5 seconds.

---

### Clip M2 · CUSTOMER INQUIRY (optional) · `m2-customer-inquiry.mp3`
**Voice:** Omar/Faisal (same younger male) · **Speed:** `0.98` · **Stability:** `50` · **Style:** `20`

```
السلام عليكم… وين طلبي؟ رقمه ألفين وثمان مية وسبعة وأربعين.
```

**Listen for:** polite, friendly register. Not terse. Skip this clip if the on-screen chat bubbles feel clear enough without audio.

**Target duration:** ~4 seconds.

---

### Clip V1 · VISITOR (sales scene) · `v1-visitor.mp3`
**Voice:** Shahd (or any Saudi female) · **Speed:** `0.95` · **Stability:** `50` · **Style:** `25`

```
عندي سؤال… هل هذا الشامبو مناسب لبشرة حساسة؟ عندي تحسّس من السلفات.
```

**Listen for:** "الشامبو" should be pronounced naturally (*ash-shampu*, English loanword style — not *ash-shampuu* as Classical would render). Curious + slightly hesitant delivery.

**Target duration:** ~4 seconds.

---

## 3 · Download + name

For each generation you like:

1. Click the **⬇ download arrow** in the bottom right (after playback)
2. Choose **MP3 · 192 kbps · 44.1 kHz** if asked
3. Rename the file **exactly** to the filename listed per clip (e.g. `01-hook.mp3`). Case-sensitive — these names are what the timeline wiring will look up in Phase 7.
4. Drop all files into `public/audio/voice/` in the repo

When you're done you should have this folder:

```
public/audio/voice/
├── 01-hook.mp3
├── 02-setup.mp3
├── 03-connect.mp3
├── 04-admin-agent.mp3
├── 05-customer-agent.mp3
├── 06-policy.mp3
├── 07-sales-agent.mp3
├── 08-closer.mp3
├── m1-merchant-voice.mp3
├── v1-visitor.mp3
└── (m2-customer-inquiry.mp3 — optional)
```

Plus background music (any royalty-free warm instrumental bed, 1 continuous track) at:

```
public/audio/music/background.mp3
```

---

## 4 · Quality checks before committing

Play each clip back with this checklist. If any fail, regenerate (don't "fix in post"):

**Every clip:**
- [ ] Sounds Saudi, not MSA or Egyptian
- [ ] Numbers read as full Arabic words (not digit-by-digit, not English)
- [ ] Brand words clear: **وصول** = *wosool*, **سلة** = *Salla*, **واتساب** = *WhatsApp* (English)
- [ ] Duration is within ±1s of the target listed above
- [ ] No robotic pauses, no awkward breaths

**Clip-specific:**
- [ ] Clip 01 and Clip 08 end with the same tagline, delivered the same way
- [ ] Clip 04's three-verb hammer ("يسمع. يسوّي. ويرد.") has clear beats
- [ ] Clip 05 is audibly softer than Clip 04
- [ ] M1 doesn't sound like the narrator

---

## 5 · Common gotchas

**The voice drifts into MSA mid-clip.**
→ Regenerate. Don't accept. Reduce Similarity to 75. Add more Saudi-specific words if possible.

**Numbers are read in English.**
→ Always spell numbers in Arabic words when they appear in a clip. See Clip 08 for the pattern. Digits (١٢٣) also work but are less reliable.

**The voice over-acts (sounds like a movie trailer).**
→ Lower Style Exaggeration to 10. Lower Stability to 50.

**The voice under-delivers (sounds flat).**
→ Raise Style Exaggeration to 35. Make sure you're not using Stability 80+ (that locks emotion out).

**Pauses are too short.**
→ Use `…` (ellipsis) instead of `.` (period) for longer pauses. For 1-second gaps, put the line on its own with blank line above/below (ElevenLabs interprets paragraph breaks as ~0.8s pauses).

**A word is mispronounced even after 3 takes.**
→ Spell it phonetically. E.g. "وصول" can become *waa-sool* if you write it as "وَصول" with the fatha diacritic. ElevenLabs responds to Arabic diacritics.

---

## 6 · Ping me when done

Once all MP3s are in `public/audio/voice/`, tell me — I'll wire Phase 7:
- Preload hook triggers on the play button (so audio starts synced)
- Per-clip fire times from the timing table in `VOICEOVER_SCRIPT.md`
- Mute toggle respects both narrator + character clips
- Background music ducks -9 dB under any voice clip
- `prefers-reduced-motion` users skip the narrative music layer

Phase 7 wiring time estimate: ~30 minutes once files are in place.
