// Main animation. Coordinates for arrows/cursors/captions live in SCREEN
// space (0..1000, 0..500) and render INSIDE the ScreenStage so they zoom
// together with the UI.

Object.assign(STRINGS.ar, {
  // Scene captions
  app_scene1_caption:        "ابدأ من هنا — اضغط «استخدام التطبيق»",
  app_scene2_caption:        "أول خطوة: ربط رقم واتساب الخاص بمتجرك",
  app_scene3_caption:        "افتح واتساب على جوال المتجر وامسح الرمز",
  app_scene4_caption:        "تأكيد رقم المالك برمز عبر واتساب",
  app_scene5_caption:        "تم الربط بنجاح — متجرك جاهز",
  app_scene6_caption:        "✓ متصل — وكلاء وصول يعملون تلقائياً الآن",
  app_scene8_caption:        "استرداد السلة المتروكة — أكثر أتمتة فعّالية",

  // Scene 7 — agent names + captions
  app_scene7_agent1_name:    "وكيل العملاء",
  app_scene7_agent1_caption: "يرد على رسائل العملاء عبر واتساب تلقائياً ٢٤/٧",
  app_scene7_agent2_name:    "وكيل المدير",
  app_scene7_agent2_caption: "ينفّذ عمليات متجرك — طلبات، شحن، تقارير",
  app_scene7_agent3_name:    "وكيل الذكاء",
  app_scene7_agent3_caption: "يحلل بياناتك ويرسل تقارير صباحية ومسائية",
  app_scene7_agent4_name:    "وكيل المبيعات",
  app_scene7_agent4_caption: "يتفاعل مع زوار متجرك ويحوّلهم لمشترين",

  // Section dividers
  app_div_setup_number:      "٠١ — الإعداد",
  app_div_setup_title:       "اربط متجرك بوصول",
  app_div_setup_subtitle:    "٤ خطوات بسيطة عبر واتساب",
  app_div_agents_number:     "٠٢ — الوكلاء",
  app_div_agents_title:      "تعرّف على وكلاء وصول",
  app_div_agents_subtitle:   "أربعة وكلاء يشتغلون لمتجرك ٢٤/٧",
  app_div_demo_number:       "٠٣ — التجربة الحية",
  app_div_demo_title:        "شاهد وصول في العمل",
  app_div_demo_subtitle:     "يوم كامل في متجر أحمد — من الإدارة إلى البيع",

  // Workflow story captions
  app_workflow_step1:        "١. العميل يضيف منتج للسلة",
  app_workflow_step2:        "٢. ننتظر ساعتين...",
  app_workflow_step3:        "٣. لم يكمل؟ تذكير ذكي تلقائي",
});

Object.assign(STRINGS.en, {
  // Scene captions
  app_scene1_caption:        "Start here — click “Use the app”",
  app_scene2_caption:        "First step: connect your store's WhatsApp number",
  app_scene3_caption:        "Open WhatsApp on the store phone and scan the code",
  app_scene4_caption:        "Verify the owner's number with a WhatsApp code",
  app_scene5_caption:        "Connected successfully — your store is ready",
  app_scene6_caption:        "✓ Connected — Wosool agents are now working automatically",
  app_scene8_caption:        "Abandoned cart recovery — the highest-impact automation",

  // Scene 7 — agent names + captions
  app_scene7_agent1_name:    "Customer Agent",
  app_scene7_agent1_caption: "Replies to customer messages on WhatsApp automatically, 24/7",
  app_scene7_agent2_name:    "Manager Agent",
  app_scene7_agent2_caption: "Runs your store operations — orders, shipping, reports",
  app_scene7_agent3_name:    "Intelligence Agent",
  app_scene7_agent3_caption: "Analyzes your data and sends morning and evening reports",
  app_scene7_agent4_name:    "Sales Agent",
  app_scene7_agent4_caption: "Engages your store visitors and converts them into buyers",

  // Section dividers
  app_div_setup_number:      "01 — Setup",
  app_div_setup_title:       "Connect your store to Wosool",
  app_div_setup_subtitle:    "4 simple steps over WhatsApp",
  app_div_agents_number:     "02 — Agents",
  app_div_agents_title:      "Meet the Wosool agents",
  app_div_agents_subtitle:   "Four agents working for your store, 24/7",
  app_div_demo_number:       "03 — Live Demo",
  app_div_demo_title:        "See Wosool in action",
  app_div_demo_subtitle:     "A full day in Ahmed's store — from management to sales",

  // Workflow story captions
  app_workflow_step1:        "1. Customer adds a product to the cart",
  app_workflow_step2:        "2. We wait two hours...",
  app_workflow_step3:        "3. Didn't check out? A smart automated reminder",
});

const STAGE_W = 1280, STAGE_H = 720;
const TOTAL = 150;

// Final flow (150s, 2:30) — conversation scenes given extra reading time
// and stronger zooming so viewers can comfortably follow each chat.
const T = {
  title:        0,    // 2s    → 2
  div_setup:    2,    // 1.5s  → 3.5    ٠١ — الإعداد
  s1_app:     3.5,    // 4s    → 7.5
  s2_dash:    7.5,    // 4s    → 11.5
  s3_qr:     11.5,    // 3s    → 14.5
  s4_otp:    14.5,    // 2s    → 16.5
  s5_success:16.5,    // 2s    → 18.5
  s6_active: 18.5,    // 3s    → 21.5
  div_agents:21.5,    // 1.5s  → 23     ٠٢ — الوكلاء
  s7_agents:   23,    // 6s    → 29
  s8_auto:     29,    // 3s    → 32
  s9_w1:       32,    // 2s    → 34
  s10_w2:      34,    // 2s    → 36
  s11_w3:      36,    // 2s    → 38
  div_demo:    38,    // 2.5s  → 40.5   ٠٣ — التجربة الحية
  product:   40.5,    // 13.5s → 54
  voice:       54,    // 11.5s → 65.5
  coupon:    65.5,    // 6.5s  → 72
  trans1:      72,    // 2s    → 74     صباح اليوم التالي
  morning:     74,    // 15s   → 89
  trans2:      89,    // 2s    → 91     وكيل العملاء يشتغل
  customer:    91,    // 14s   → 105
  sales:      105,    // 16s   → 121
  trans3:     121,    // 2s    → 123    بعد 3 دقائق...
  followup:   123,    // 15s   → 138
  closing:    138,    // 12s   → 150
};

// Helper: compute camera (x,y) to center a screen-coord point at given scale.
const focusOn = (px, py, scale) => ({
  x: -scale * (px - 500),
  y: -scale * (py - 250),
  scale,
});

// Camera tween — interpolates {scale, x, y, scrollY} across keyframes
const useCamera = (kfs) => {
  const { localTime } = useSprite();
  const ts = kfs.map(k => k.t);
  const fScale  = interpolate(ts, kfs.map(k => k.scale ?? 0.85), Easing.easeInOutCubic);
  const fX      = interpolate(ts, kfs.map(k => k.x ?? 0),       Easing.easeInOutCubic);
  const fY      = interpolate(ts, kfs.map(k => k.y ?? 0),       Easing.easeInOutCubic);
  const fScroll = interpolate(ts, kfs.map(k => k.scrollY ?? 0), Easing.easeInOutCubic);
  return { scale: fScale(localTime), x: fX(localTime), y: fY(localTime), scrollY: fScroll(localTime) };
};

// ─── Scene 1: App Detail — point at "استخدام التطبيق" button ─────────────────
// Layout: 1000x500 screen. Top chrome ~38+32+48 = 118px tall. Main content
// has 24px padding + grid (filters 200, preview 240, main 488). In RTL, main
// column is at x=488..976. Action row uses justifyContent:flex-start (RTL=right).
// The use-app button is the first child → sits at the RIGHT end of main column.
// Button: x≈866, y≈122, w=110, h=32.

const Scene1 = () => {
  // Actual measured: button at x=856, y=126, w=120, h=37
  const btnX = 856, btnY = 126, btnW = 120, btnH = 37;
  const btnCx = btnX + btnW / 2, btnCy = btnY + btnH / 2;
  const focused = focusOn(btnCx, btnCy + 60, 1.05);  // light zoom only
  const cam = useCamera([
    { t: 0,   scale: 0.85, x: 0, y: 0 },
    { t: 1.2, ...focused },
    { t: 5,   ...focused },
    { t: 5.8, scale: 0.85, x: 0, y: 0 },
  ]);
  useAudioCue([{ at: 3.0, type: 'click' }]);
  const { localTime } = useSprite();

  const curX = interpolate([0, 2.2, 3.2, 4.5], [600, btnCx, btnCx, btnCx], Easing.easeInOutCubic)(localTime);
  const curY = interpolate([0, 2.2, 3.2, 4.5], [400, btnCy, btnCy, btnCy], Easing.easeInOutCubic)(localTime);
  const click = localTime > 3.0 && localTime < 3.4;
  const arrowOp = animate({ from: 0, to: 1, start: 1.8, end: 2.2 })(localTime)
                * (1 - animate({ from: 0, to: 1, start: 4.6, end: 5.0 })(localTime));

  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <SallaAppDetail/>
        <HighlightBox x={btnX - 4} y={btnY - 4} width={btnW + 8} height={btnH + 8} color="#73FCD7" opacity={arrowOp} radius={10}/>
        <PointerArrow from={{x: btnX - 30, y: btnY + 110}} to={{x: btnCx, y: btnY + btnH + 6}} color="#73FCD7" opacity={arrowOp} curve={-15}/>
        <Cursor x={curX} y={curY} click={click}/>
      </ScreenStage>
      <StageCaption text={t("app_scene1_caption")} color="#73FCD7"/>
    </React.Fragment>
  );
};

// ─── Scene 2: Dashboard Warning — point at "ربط الآن" button ─────────────────
// In 1000x500 screen, the dashboard is centered (200px side padding).
// WhatsApp warning bar sits roughly y=210, "ربط الآن" button at ~x=625, y=215.

const Scene2 = () => {
  // Actual measured: button at x=715, y=229, w=70, h=32
  const btnX = 715, btnY = 229, btnW = 70, btnH = 32;
  const btnCx = btnX + btnW / 2, btnCy = btnY + btnH / 2;
  const focused = focusOn(500, btnCy, 1.0);  // no zoom — keep caption clear
  const cam = useCamera([
    { t: 0,   scale: 0.85, x: 0, y: 0 },
    { t: 1.2, ...focused },
    { t: 5,   ...focused },
  ]);
  useAudioCue([{ at: 3.0, type: 'click' }]);
  const { localTime } = useSprite();

  const curX = interpolate([0, 2.2, 3.2, 4.8], [780, btnCx, btnCx, btnCx], Easing.easeInOutCubic)(localTime);
  const curY = interpolate([0, 2.2, 3.2, 4.8], [380, btnCy, btnCy, btnCy], Easing.easeInOutCubic)(localTime);
  const click = localTime > 3.0 && localTime < 3.4;
  const arrowOp = animate({ from: 0, to: 1, start: 1.6, end: 2.0 })(localTime)
                * (1 - animate({ from: 0, to: 1, start: 4.6, end: 5.0 })(localTime));

  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <DashboardWarning/>
        <HighlightBox x={btnX - 4} y={btnY - 4} width={btnW + 8} height={btnH + 8} color="#F5434A" opacity={arrowOp} radius={8}/>
        <PointerArrow from={{x: btnX - 60, y: btnY + 90}} to={{x: btnCx, y: btnY + btnH + 4}} color="#F5434A" opacity={arrowOp} curve={-12}/>
        <Cursor x={curX} y={curY} click={click}/>
      </ScreenStage>
      <StageCaption text={t("app_scene2_caption")} color="#F5434A"/>
    </React.Fragment>
  );
};

// ─── Scene 3: QR Scan ───────────────────────────────────────────────────────

const Scene3 = () => {
  const cam = useCamera([
    { t: 0,   scale: 0.85, x: 0, y: 0 },
    { t: 1,   scale: 1.0, x: 0, y: 30 },
    { t: 5,   scale: 1.0, x: 0, y: 30 },
  ]);
  const { localTime } = useSprite();
  const opacity = animate({ from: 0, to: 1, start: 1.5, end: 2 })(localTime);

  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <QRScreen/>
        {/* Scan animation line moves over QR */}
        {opacity > 0 && (
          <div style={{
            position: 'absolute', left: 420, top: 200, width: 160, height: 160,
            opacity, zIndex: 35, pointerEvents: 'none',
            overflow: 'hidden', borderRadius: 6,
          }}>
            <div style={{
              position: 'absolute', left: 0, right: 0, height: 3,
              background: 'linear-gradient(180deg, transparent, #73FCD7, transparent)',
              boxShadow: '0 0 14px #73FCD7',
              animation: 'qr-scan 1.5s ease-in-out infinite',
            }}/>
          </div>
        )}
      </ScreenStage>
      <StageCaption text={t("app_scene3_caption")} color="#73FCD7"/>
    </React.Fragment>
  );
};

// ─── Scene 4: OTP ───────────────────────────────────────────────────────────

const Scene4 = () => {
  const cam = useCamera([
    { t: 0,   scale: 0.95, x: 0, y: 30 },
    { t: 3.5, scale: 1.0,  x: 0, y: 50 },
  ]);
  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <OTPScreen/>
      </ScreenStage>
      <StageCaption text={t("app_scene4_caption")} color="#73FCD7"/>
    </React.Fragment>
  );
};

// ─── Scene 5: Success ───────────────────────────────────────────────────────

const Scene5 = () => {
  const cam = useCamera([
    { t: 0, scale: 0.95, x: 0, y: 30 },
    { t: 3.5, scale: 1.0, x: 0, y: 50 },
  ]);
  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <SuccessScreen/>
      </ScreenStage>
      <StageCaption text={t("app_scene5_caption")} color="#73FCD7"/>
    </React.Fragment>
  );
};

// ─── Scene 6: Active Dashboard ──────────────────────────────────────────────

const Scene6 = () => {
  // Actual measured: strip at x=200, y=142, w=600, h=64
  const stripX = 200, stripY = 142, stripW = 600, stripH = 64;
  const focused = focusOn(500, 280, 1.0);
  const cam = useCamera([
    { t: 0, scale: 0.85, x: 0, y: 0 },
    { t: 1, ...focused },
    { t: 4.5, ...focused },
  ]);
  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <DashboardActive/>
        <HighlightBox x={stripX - 4} y={stripY - 4} width={stripW + 8} height={stripH + 8} color="#10B981" radius={12}/>
      </ScreenStage>
      <StageCaption text={t("app_scene6_caption")} color="#10B981"/>
    </React.Fragment>
  );
};

// ─── Scene 7: Agents — scroll through and highlight each ────────────────────
// Agents grid is 2x2; scroll between rows to "see all"

const Scene7 = () => {
  // Actual measured: card y = 198, 342, 486, 630
  const cardH = 130;
  const cards = [
    { y: 198, color: '#3B82F6', name: t("app_scene7_agent1_name"),
      caption: t("app_scene7_agent1_caption"),  t0: 0.6, t1: 1.9 },
    { y: 342, color: '#8B5CF6', name: t("app_scene7_agent2_name"),
      caption: t("app_scene7_agent2_caption"), t0: 1.9, t1: 3.2 },
    { y: 486, color: '#F5A623', name: t("app_scene7_agent3_name"),
      caption: t("app_scene7_agent3_caption"), t0: 3.2, t1: 4.5 },
    { y: 630, color: '#10B981', name: t("app_scene7_agent4_name"),
      caption: t("app_scene7_agent4_caption"), t0: 4.5, t1: 5.8 },
  ];

  const focusScale = 0.85;
  const maxScroll = 760 - 500;
  const scrollFor = (cy) => Math.min(Math.max(cy - 130, 0), maxScroll);

  const cam = useCamera([
    { t: 0,    scale: 0.85,        x: 0, y: 0, scrollY: 0 },
    { t: 0.5,  scale: focusScale,  x: 0, y: 0, scrollY: 0 },
    { t: 0.9,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[0].y) },
    { t: 1.9,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[0].y) },
    { t: 2.3,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[1].y) },
    { t: 3.2,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[1].y) },
    { t: 3.6,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[2].y) },
    { t: 4.5,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[2].y) },
    { t: 4.9,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[3].y) },
    { t: 5.8,  scale: focusScale,  x: 0, y: 0, scrollY: scrollFor(cards[3].y) },
    { t: 6.0,  scale: 0.85,        x: 0, y: 0, scrollY: scrollFor(cards[3].y) },
  ]);
  const { localTime } = useSprite();
  const active = [...cards].reverse().find(c => localTime >= c.t0) || cards[0];

  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y} scrollY={cam.scrollY}>
        <AgentsGrid/>
        <HighlightBox x={76} y={active.y - 4} width={848} height={cardH + 8} color={active.color} radius={14}/>
      </ScreenStage>
      <StageCaption key={active.name} name={active.name} text={active.caption} color={active.color}/>
    </React.Fragment>
  );
};

// ─── Scene 8: Automations grid ──────────────────────────────────────────────

const Scene8 = () => {
  // Actual measured: card at x=647, y=139, w=273, h=97
  const cardX = 647, cardY = 139, cardW = 273, cardH = 97;
  const cardCx = cardX + cardW / 2, cardCy = cardY + cardH / 2;
  const focused = focusOn(cardCx, cardCy + 70, 1.05);
  const cam = useCamera([
    { t: 0,   scale: 0.85, x: 0, y: 0 },
    { t: 0.7, ...focused },
    { t: 3.0, ...focused },
  ]);
  useAudioCue([{ at: 2.0, type: 'click' }]);
  const { localTime } = useSprite();
  const curX = interpolate([0, 1.6, 2.4], [200, cardCx, cardCx], Easing.easeInOutCubic)(localTime);
  const curY = interpolate([0, 1.6, 2.4], [400, cardCy, cardCy], Easing.easeInOutCubic)(localTime);
  const click = localTime > 2.0 && localTime < 2.4;
  const arrowOp = animate({ from: 0, to: 1, start: 0.9, end: 1.3 })(localTime);

  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <AutomationGrid/>
        <HighlightBox x={cardX - 4} y={cardY - 4} width={cardW + 8} height={cardH + 8} color="#10B981" radius={12} opacity={arrowOp}/>
        <Cursor x={curX} y={curY} click={click}/>
      </ScreenStage>
      <StageCaption text={t("app_scene8_caption")} color="#10B981"/>
    </React.Fragment>
  );
};

// ─── Workflow story scenes ──────────────────────────────────────────────────

const SceneWorkflow = ({ step, caption, accent }) => {
  const cam = useCamera([
    { t: 0, scale: 1.0, x: 0, y: 30 },
    { t: 2.5, scale: 1.0, x: 0, y: 50 },
  ]);
  return (
    <React.Fragment>
      <ScreenStage scale={cam.scale} x={cam.x} y={cam.y}>
        <WorkflowStoryScreen step={step}/>
      </ScreenStage>
      <StageCaption text={caption} color={accent}/>
    </React.Fragment>
  );
};

// ─── Background music ──────────────────────────────────────────────────────
// Plain HTMLAudioElement — muted starts allow autoplay; setting muted=false
// later keeps playback in place so the soundtrack stays in sync with the
// video timeline. (Web Audio routing was dropped because MediaElementSource
// suspends until user interaction, which defeats the silent-but-running idea.)
const BackgroundMusic = ({ src, volume = 0.3, muted = false }) => {
  const { time, playing } = useTimeline();
  const audioRef = React.useRef(null);
  const lastTimeRef = React.useRef(time);

  React.useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audio.muted = muted;
    audio.preload = 'auto';
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  React.useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  React.useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => {});
      // Autoplay block fallback — retry on first user interaction.
      const handler = () => {
        audio.play().catch(() => {});
        document.removeEventListener('click', handler);
        document.removeEventListener('keydown', handler);
        document.removeEventListener('touchstart', handler);
      };
      document.addEventListener('click', handler);
      document.addEventListener('keydown', handler);
      document.addEventListener('touchstart', handler);
      return () => {
        document.removeEventListener('click', handler);
        document.removeEventListener('keydown', handler);
        document.removeEventListener('touchstart', handler);
      };
    } else {
      audio.pause();
    }
  }, [playing]);

  // Restart music when the video loops back to start (time jumps backward)
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (time < lastTimeRef.current - 0.5) {
      try { audio.currentTime = 0; } catch { /* ignore */ }
    }
    lastTimeRef.current = time;
  }, [time]);

  return null;
};

// ─── Timestamp tag ──────────────────────────────────────────────────────────

const TimestampLabel = () => {
  const time = useTime();
  React.useEffect(() => {
    const sec = Math.floor(time);
    const root = document.getElementById('video-root');
    if (root) root.setAttribute('data-screen-label', `${sec}s`);
  }, [Math.floor(time)]);
  return null;
};

// ─── App ────────────────────────────────────────────────────────────────────

// Render mode is triggered by ?render=true on the URL. In that mode:
//   - Stage starts paused (autoplay off) and doesn't loop — the renderer
//     starts playback via window.__startRender() and waits for completion.
//   - The PlaybackBar is hidden so the captured frame is 100% canvas.
//   - In-page background music is muted (the renderer muxes it post-capture).
//   - Procedural Web Audio sounds (clicks, tones) are suppressed by checking
//     window.__RENDER_MODE__ inside playTone.
const isRender = typeof window !== 'undefined'
  && new URLSearchParams(window.location.search).get('render') === 'true';
if (isRender && typeof window !== 'undefined') window.__RENDER_MODE__ = true;
// Start silent until the user interacts. Consumed by BackgroundMusic gating
// here and by playTone() in promo-scenes.jsx.
if (!isRender && typeof window !== 'undefined') window.__MUTED__ = true;

const App = () => {
  const [audioUnlocked, setAudioUnlocked] = React.useState(false);

  React.useEffect(() => {
    if (isRender || audioUnlocked) return;
    const unlock = () => {
      window.__MUTED__ = false;
      setAudioUnlocked(true);
    };
    document.addEventListener('click', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
    document.addEventListener('touchstart', unlock, { once: true });
    return () => {
      document.removeEventListener('click', unlock);
      document.removeEventListener('keydown', unlock);
      document.removeEventListener('touchstart', unlock);
    };
  }, [audioUnlocked]);

  return (
  <div id="video-root" data-screen-label="0s" style={{ position: 'absolute', inset: 0 }}>
    <Stage
      width={STAGE_W} height={STAGE_H} duration={TOTAL}
      background="linear-gradient(135deg, #002A33, #00505E)"
      persistKey="wosool-walkthrough-v6"
      autoplay={!isRender}
      loop={!isRender}
      hideBar={isRender}
    >
      <TimestampLabel/>
      {!isRender && <BackgroundMusic src="background-new.mp3" volume={0.3} muted={!audioUnlocked}/>}

      <Sprite start={T.title}      end={T.div_setup}>  <TitleCard/>                    </Sprite>
      <Sprite start={T.div_setup}  end={T.s1_app}>     <SectionDivider number={t("app_div_setup_number")} title={t("app_div_setup_title")} subtitle={t("app_div_setup_subtitle")} bg="linear-gradient(135deg, #002A33, #00505E)" accent="#73FCD7" icon="🔗"/></Sprite>
      <Sprite start={T.s1_app}     end={T.s2_dash}>    <Scene1/>                       </Sprite>
      <Sprite start={T.s2_dash}    end={T.s3_qr}>      <Scene2/>                       </Sprite>
      <Sprite start={T.s3_qr}      end={T.s4_otp}>     <Scene3/>                       </Sprite>
      <Sprite start={T.s4_otp}     end={T.s5_success}> <Scene4/>                       </Sprite>
      <Sprite start={T.s5_success} end={T.s6_active}>  <Scene5/>                       </Sprite>
      <Sprite start={T.s6_active}  end={T.div_agents}> <Scene6/>                       </Sprite>
      <Sprite start={T.div_agents} end={T.s7_agents}>  <SectionDivider number={t("app_div_agents_number")} title={t("app_div_agents_title")} subtitle={t("app_div_agents_subtitle")} bg="linear-gradient(135deg, #1E1B4B, #312E81)" accent="#A78BFA" icon="🤖"/></Sprite>
      <Sprite start={T.s7_agents}  end={T.s8_auto}>    <Scene7/>                       </Sprite>
      <Sprite start={T.s8_auto}    end={T.s9_w1}>      <Scene8/>                       </Sprite>
      <Sprite start={T.s9_w1}      end={T.s10_w2}>     <SceneWorkflow step={1} caption={t("app_workflow_step1")} accent="#73FCD7"/></Sprite>
      <Sprite start={T.s10_w2}     end={T.s11_w3}>     <SceneWorkflow step={2} caption={t("app_workflow_step2")} accent="#9CA3AF"/></Sprite>
      <Sprite start={T.s11_w3}     end={T.div_demo}>   <SceneWorkflow step={3} caption={t("app_workflow_step3")} accent="#F5A623"/></Sprite>
      <Sprite start={T.div_demo}   end={T.product}>    <SectionDivider number={t("app_div_demo_number")} title={t("app_div_demo_title")} subtitle={t("app_div_demo_subtitle")} bg="linear-gradient(135deg, #002A33, #047857)" accent="#73FCD7" icon="🚀"/></Sprite>
      <Sprite start={T.product}    end={T.voice}>      <PromoProductCreation/>         </Sprite>
      <Sprite start={T.voice}      end={T.coupon}>     <PromoVoiceShip/>               </Sprite>
      <Sprite start={T.coupon}     end={T.trans1}>     <PromoCoupon/>                  </Sprite>
      <Sprite start={T.trans1}     end={T.morning}>    <PromoMorningTransition/>       </Sprite>
      <Sprite start={T.morning}    end={T.trans2}>     <PromoMorningReport/>           </Sprite>
      <Sprite start={T.trans2}     end={T.customer}>   <PromoCustomerTransition/>      </Sprite>
      <Sprite start={T.customer}   end={T.sales}>      <PromoCustomerChat/>            </Sprite>
      <Sprite start={T.sales}      end={T.trans3}>     <PromoSalesAgent/>              </Sprite>
      <Sprite start={T.trans3}     end={T.followup}>   <PromoSalesFollowupTransition/> </Sprite>
      <Sprite start={T.followup}   end={T.closing}>    <PromoSalesFollowup/>           </Sprite>
      <Sprite start={T.closing}    end={TOTAL}>        <PromoClosing/>                 </Sprite>
    </Stage>
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
