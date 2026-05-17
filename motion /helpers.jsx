// Helpers — all overlays (arrows, cursor, captions, spotlight) live INSIDE
// the 1000x500 screen, so they zoom/pan together with the screen frame.
// Coords passed to these helpers are in SCREEN space (0-1000, 0-500).

// Curved arrow that points to a target.
const PointerArrow = ({ from, to, color = '#73FCD7', strokeWidth = 3, opacity = 1, curve = 30 }) => {
  if (!from || !to) return null;
  const dx = to.x - from.x, dy = to.y - from.y;
  const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 1) return null;
  const nx = -dy / len, ny = dx / len;
  const cp = { x: mid.x + nx * curve, y: mid.y + ny * curve };
  const ang = Math.atan2(to.y - cp.y, to.x - cp.x) * 180 / Math.PI;
  const filterId = `glow-${color.replace('#','')}`;
  return (
    <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity, zIndex: 50 }} width="1000" height="500" viewBox="0 0 1000 500">
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <path d={`M ${from.x} ${from.y} Q ${cp.x} ${cp.y} ${to.x} ${to.y}`}
        stroke={color} strokeWidth={strokeWidth} fill="none"
        strokeLinecap="round" filter={`url(#${filterId})`}/>
      <g transform={`translate(${to.x}, ${to.y}) rotate(${ang})`}>
        <path d="M 0 0 L -14 -7 L -10 0 L -14 7 Z" fill={color} filter={`url(#${filterId})`}/>
      </g>
    </svg>
  );
};

// Cursor — coords in screen space.
const Cursor = ({ x, y, click = false, opacity = 1 }) => (
  <div style={{
    position: 'absolute', left: x, top: y, opacity,
    transform: 'translate(-3px, -3px)', pointerEvents: 'none', zIndex: 60,
  }}>
    {click && (
      <div style={{
        position: 'absolute', left: -12, top: -12, width: 36, height: 36, borderRadius: '50%',
        background: 'rgba(115,252,215,0.5)', animation: 'click-pulse 500ms ease-out',
      }}/>
    )}
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
      <path d="M2 2 L2 22 L7 18 L10 25 L13 24 L10 17 L17 17 Z" fill="#fff" stroke="#0B1A1F" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  </div>
);

// Pulsing highlight rectangle (in screen coords)
const HighlightBox = ({ x, y, width, height, color = '#73FCD7', opacity = 1, radius = 10 }) => (
  <div style={{
    position: 'absolute', left: x, top: y, width, height,
    border: `2px solid ${color}`, borderRadius: radius, opacity,
    boxShadow: `0 0 0 4px ${color}33, 0 0 18px ${color}99`,
    pointerEvents: 'none', zIndex: 40,
    animation: 'highlight-pulse 1.6s ease-in-out infinite',
  }}/>
);

// Caption overlay — positioned ON the UI at given (x,y) anchor in screen coords.
// `anchor` controls which corner of the caption is at (x,y).
const SpotCaption = ({ x, y, text, accent = '#73FCD7', anchor = 'top-left', maxWidth = 260, entryDir = 'up' }) => {
  const { localTime, duration } = useSprite();
  const entry = 0.45, exit = 0.35;
  const exitStart = Math.max(0, duration - exit);
  let opacity = 1, off = 0;
  if (localTime < entry) {
    const t = Easing.easeOutCubic(clamp(localTime / entry, 0, 1));
    opacity = t; off = (1 - t) * 14;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exit, 0, 1));
    opacity = 1 - t; off = -t * 8;
  }
  const tx = anchor.includes('right') ? '-100%' : '0%';
  const ty = anchor.includes('bottom') ? '-100%' : '0%';
  const dx = entryDir === 'left' ? off : entryDir === 'right' ? -off : 0;
  const dy = entryDir === 'up' ? off : entryDir === 'down' ? -off : 0;
  return (
    <div style={{
      position: 'absolute', left: x, top: y, maxWidth,
      transform: `translate(${tx}, ${ty}) translate(${dx}px, ${dy}px)`,
      opacity, zIndex: 70,
      background: '#0B1A1F', color: '#fff',
      padding: '10px 14px',
      borderRadius: 10,
      border: `1.5px solid ${accent}`,
      boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
      fontFamily: 'var(--w-font-ar)', direction: 'rtl', textAlign: 'right',
      fontSize: 14, fontWeight: 600, lineHeight: 1.5,
      pointerEvents: 'none',
    }}>
      <div style={{ width: 22, height: 2, background: accent, borderRadius: 2, marginBottom: 5 }}/>
      {text}
    </div>
  );
};

// A combined Annotation: highlight box + caption + arrow (cursor optional).
// All coords in screen space (1000x500).
const Annotation = ({ box, caption, accent = '#73FCD7' }) => (
  <>
    {box && <HighlightBox {...box} color={accent}/>}
    {caption && <SpotCaption accent={accent} {...caption}/>}
  </>
);

// Screen container: holds children at (0,0)-(1000,500), scaled to fit the
// 1280x720 stage via transform. Camera coordinates are now interpreted as
// translation/scale OF THE SCREEN. Overlay children render INSIDE so they
// transform together.
const ScreenStage = ({ scale = 0.85, x = 0, y = 0, scrollY = 0, children, overlay = null }) => (
  <div style={{
    position: 'absolute', left: '50%', top: '50%',
    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
    transformOrigin: 'center center',
    width: 1000, height: 500,
    boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(11,26,31,0.1)',
    borderRadius: 8, overflow: 'hidden', background: '#fff',
  }}>
    {/* Inner screen — can be taller than 500 for scroll */}
    <div style={{
      position: 'absolute', left: 0, right: 0, top: 0,
      transform: `translateY(${-scrollY}px)`,
      transition: 'none',
    }}>
      {children}
    </div>
    {/* Fixed overlay — does NOT scroll with content */}
    {overlay && (
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {overlay}
      </div>
    )}
  </div>
);

// Title card — full-screen intro with real Wosool logo
const TitleCard = () => {
  const { progress } = useSprite();
  const t = Easing.easeOutCubic(progress);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #002A33, #00505E)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 28 }}>
      <div style={{ transform: `scale(${0.85 + t * 0.15})`, opacity: t }}>
        <div style={{ width: 140, height: 140, borderRadius: 28, background: '#73FCD7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 24px 60px rgba(115,252,215,0.3)' }}>
          <WosoolInfinity size={70} color="#0B1A1F"/>
        </div>
      </div>
      <div style={{ textAlign: 'center', opacity: t, fontFamily: 'var(--w-font-ar)' }}>
        <div style={{ fontSize: 64, fontWeight: 700, color: '#fff' }}>وصول</div>
        <div style={{ fontSize: 20, color: '#73FCD7', marginTop: 8 }}>موظفك الذكي داخل سلة</div>
      </div>
    </div>
  );
};

const OutroCard = () => {
  const { progress } = useSprite();
  const t = Easing.easeOutCubic(progress);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #002A33, #00505E)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 32 }}>
      <div style={{ transform: `scale(${0.9 + t * 0.1})`, opacity: t }}>
        <div style={{ width: 160, height: 160, borderRadius: 32, background: '#73FCD7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 32px 80px rgba(115,252,215,0.35)' }}>
          <WosoolInfinity size={90} color="#0B1A1F"/>
        </div>
      </div>
      <div style={{ textAlign: 'center', opacity: t, fontFamily: 'var(--w-font-ar)' }}>
        <div style={{ fontSize: 60, fontWeight: 700, color: '#fff' }}>وصول</div>
        <div style={{ fontSize: 24, color: '#73FCD7', marginTop: 12 }}>يخلي متجرك يشتغل عنك</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 24 }}>متاح الآن في متجر تطبيقات سلة</div>
      </div>
    </div>
  );
};

// Stage caption — wide horizontal callout BELOW the screen frame, in stage
// coords (not affected by ScreenStage scale). Use this when a caption would
// overlap UI inside the screen.
const StageCaption = ({ name, text, color = '#73FCD7', y = 'calc(50% + 280px)' }) => (
  <div style={{
    position: 'absolute',
    left: '50%',
    top: y,
    transform: 'translate(-50%, 0)',
    zIndex: 60,
  }}>
    <div style={{
      background: '#0B1A1F',
      border: `2px solid ${color}`,
      borderRadius: 12,
      padding: '14px 22px',
      color: '#fff',
      fontFamily: 'var(--w-font-ar)',
      direction: 'rtl',
      fontSize: 17,
      fontWeight: 600,
      maxWidth: 900,
      textAlign: 'right',
      boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      whiteSpace: 'nowrap',
    }}>
      {name && (
        <div style={{
          background: color, color: '#0B1A1F',
          padding: '4px 12px', borderRadius: 6,
          fontSize: 13, fontWeight: 800,
          letterSpacing: 0.3,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>{name}</div>
      )}
      <div>{text}</div>
    </div>
  </div>
);

// Section divider — full-screen transition card between video chapters.
// Style matches the existing PromoMorningTransition / PromoCustomerTransition
// look so the whole video has consistent professional dividers.
const SectionDivider = ({
  number,
  title,
  subtitle,
  bg = 'linear-gradient(135deg, #002A33, #00505E)',
  accent = '#73FCD7',
  icon = null,
}) => {
  const { localTime, duration } = useSprite();
  const t = Easing.easeOutCubic(animate({ from: 0, to: 1, start: 0.1, end: 0.7 })(localTime));
  const tSub = Easing.easeOutCubic(animate({ from: 0, to: 1, start: 0.4, end: 1.0 })(localTime));
  const exitStart = Math.max(0, duration - 0.5);
  const exit = animate({ from: 0, to: 1, start: exitStart, end: duration })(localTime);
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      opacity: 1 - exit,
      fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    }}>
      {number && (
        <div style={{
          fontSize: 18, fontWeight: 800, color: accent,
          opacity: t, marginBottom: 18, letterSpacing: 6,
          transform: `translateY(${(1 - t) * 8}px)`,
        }}>
          {number}
        </div>
      )}
      {icon && (
        <div style={{
          fontSize: 64, marginBottom: 18,
          opacity: t, transform: `scale(${0.85 + t * 0.15})`,
        }}>{icon}</div>
      )}
      <div style={{
        fontSize: 56, fontWeight: 700, color: '#fff',
        opacity: t, transform: `translateY(${(1 - t) * 16}px)`,
        textAlign: 'center', maxWidth: 1100, padding: '0 40px',
        lineHeight: 1.2,
      }}>
        {title}
      </div>
      {subtitle && (
        <div style={{
          marginTop: 20, fontSize: 22, color: 'rgba(255,255,255,0.85)',
          opacity: tSub, transform: `translateY(${(1 - tSub) * 12}px)`,
          textAlign: 'center', maxWidth: 900, padding: '0 40px',
          lineHeight: 1.5,
        }}>
          {subtitle}
        </div>
      )}
      <div style={{
        marginTop: 32, height: 3, width: 80,
        background: accent, opacity: tSub,
        boxShadow: `0 0 18px ${accent}`,
        borderRadius: 2,
        transform: `scaleX(${0.3 + tSub * 0.7})`,
      }}/>
    </div>
  );
};

Object.assign(window, { PointerArrow, Cursor, HighlightBox, SpotCaption, Annotation, ScreenStage, TitleCard, OutroCard, SectionDivider, StageCaption });
