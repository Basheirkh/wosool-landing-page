// WhatsApp light-mode mockup. All components RTL Arabic.
// Coordinate space: caller controls width/height. Default canvas: 470x720.

const WA_BG = '#EFEAE2';
const WA_HEADER = '#F0F2F5';
const WA_USER_BUBBLE = '#D9FDD3';   // green outgoing
const WA_AGENT_BUBBLE = '#FFFFFF';
const WA_TICK = '#53BDEB';
const WA_INPUT_BG = '#F0F2F5';
const WA_TEXT = '#111B21';
const WA_META = '#667781';
const WA_PATTERN_OPACITY = 0.06;

// ─── Header ─────────────────────────────────────────────────────────────────
const WAHeader = ({ title = 'وكيل المدير - وصول', subtitle = 'متصل الآن', showLogo = true, badge = null }) => (
  <div style={{
    height: 60, background: WA_HEADER, display: 'flex', alignItems: 'center',
    padding: '0 12px', gap: 10, borderBottom: '1px solid #E9EDEF',
    flexShrink: 0, direction: 'rtl',
  }}>
    {/* Avatar */}
    <div style={{
      width: 40, height: 40, borderRadius: '50%',
      background: showLogo ? '#0B1A1F' : '#0EA5E9',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {showLogo ? <WosoolInfinity size={22} color="#73FCD7"/> :
        <span style={{ color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: 'var(--w-font-ar)' }}>م</span>}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: 'var(--w-font-ar)', fontSize: 16, fontWeight: 600, color: WA_TEXT }}>{title}</div>
      <div style={{ fontFamily: 'var(--w-font-ar)', fontSize: 12, color: WA_META, marginTop: 1 }}>{subtitle}</div>
    </div>
    {/* Action icons */}
    <div style={{ display: 'flex', gap: 18, color: '#54656F' }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
    </div>
  </div>
);

// ─── Bubble ─────────────────────────────────────────────────────────────────
const WABubble = ({ from = 'agent', children, time = '10:31 ص', ticks = true, animKey = 0, slideIn = true }) => {
  const isUser = from === 'user';
  const bg = isUser ? WA_USER_BUBBLE : WA_AGENT_BUBBLE;
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-start' : 'flex-end',  // RTL: user left, agent right
      margin: '4px 0',
      animation: 'none',
    }}>
      <div style={{
        background: bg,
        borderRadius: 8,
        padding: '6px 9px 6px 9px',
        maxWidth: '78%',
        boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
        position: 'relative',
        fontFamily: 'var(--w-font-ar)',
        direction: 'rtl',
        textAlign: 'right',
      }}>
        <div style={{ fontSize: 14.2, lineHeight: 1.45, color: WA_TEXT, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {children}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          justifyContent: 'flex-start',  // RTL: time on left
          marginTop: 2, fontSize: 11, color: WA_META,
        }}>
          {isUser && ticks && (
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <path d="M11.071.653a.503.503 0 0 0-.754.063L4.65 8.25 1.738 5.273a.501.501 0 0 0-.749.667l3.331 3.4a.5.5 0 0 0 .76-.058l5.99-7.97a.5.5 0 0 0-.063-.659z" fill={WA_TICK}/>
              <path d="M15.071.653a.503.503 0 0 0-.754.063L8.65 8.25 7.4 6.973a.501.501 0 0 0-.749.667l1.668 1.7a.5.5 0 0 0 .76-.058l5.99-7.97a.5.5 0 0 0-.063-.659z" fill={WA_TICK}/>
            </svg>
          )}
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

// ─── Voice note bubble ──────────────────────────────────────────────────────
const WAVoiceNote = ({ from = 'user', duration = '0:05', time = '10:30 ص', playing = false }) => {
  const isUser = from === 'user';
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-start' : 'flex-end',
      margin: '4px 0',
      animation: 'none',
    }}>
      <div style={{
        background: isUser ? WA_USER_BUBBLE : WA_AGENT_BUBBLE,
        borderRadius: 8, padding: '8px 10px',
        boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
        display: 'flex', alignItems: 'center', gap: 10,
        minWidth: 230, direction: 'ltr',
      }}>
        {/* Avatar circle */}
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
        </div>
        {/* Play button */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#54656F"><path d="M8 5v14l11-7z"/></svg>
        {/* Waveform */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 20 }}>
          {Array.from({ length: 22 }).map((_, i) => {
            const heights = [3, 5, 8, 12, 7, 10, 14, 9, 11, 6, 13, 15, 8, 10, 5, 7, 11, 9, 6, 4, 3, 2];
            const playedThreshold = playing ? 14 : 6;
            const played = i < playedThreshold;
            return (
              <div key={i} style={{
                width: 2, height: heights[i] || 4,
                background: played ? '#54656F' : '#9DA8B0',
                borderRadius: 1,
                animation: playing && i === Math.floor(playedThreshold) ? 'wa-wave-pulse 0.6s ease-in-out infinite' : 'none',
              }}/>
            );
          })}
        </div>
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: WA_META, marginLeft: 2 }}>{duration}</span>
      </div>
    </div>
  );
};

// ─── Voice transcript (caption appearing under voice note) ──────────────────
const WAVoiceTranscript = ({ text }) => (
  <div style={{
    display: 'flex', justifyContent: 'flex-start',
    margin: '2px 0 8px 0',
    animation: 'none',
  }}>
    <div style={{
      maxWidth: '78%',
      background: 'rgba(217, 253, 211, 0.5)',
      border: '1px dashed #6FBA5C',
      borderRadius: 6,
      padding: '4px 8px',
      fontSize: 12.5, color: '#3B5C32',
      fontFamily: 'var(--w-font-ar)', direction: 'rtl',
      fontStyle: 'italic',
    }}>
      <span style={{ marginInlineEnd: 4 }}>📝</span>{text}
    </div>
  </div>
);

// ─── Typing indicator ───────────────────────────────────────────────────────
const WATyping = () => (
  <div style={{
    display: 'flex', justifyContent: 'flex-end', margin: '4px 0',
    animation: 'none',
  }}>
    <div style={{
      background: WA_AGENT_BUBBLE,
      borderRadius: 8, padding: '10px 14px',
      boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
      display: 'flex', alignItems: 'center', gap: 4,
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: '#9DA8B0',
          animation: `wa-typing-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
        }}/>
      ))}
    </div>
  </div>
);

// ─── Date separator pill ───────────────────────────────────────────────────
const WADayPill = ({ text = 'اليوم' }) => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
    <div style={{
      background: '#E1F2FB', color: '#5E6D75', fontFamily: 'var(--w-font-ar)',
      padding: '4px 10px', borderRadius: 6, fontSize: 12,
      boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
    }}>{text}</div>
  </div>
);

// ─── Product card bubble (rich) ────────────────────────────────────────────
const WAProductCard = ({ image, title, desc, price, sku, time = '10:31 ص', from = 'agent' }) => {
  const isUser = from === 'user';
  return (
    <div style={{
      display: 'flex', justifyContent: isUser ? 'flex-start' : 'flex-end',
      margin: '4px 0',
      animation: 'none',
    }}>
      <div style={{
        background: isUser ? WA_USER_BUBBLE : WA_AGENT_BUBBLE,
        borderRadius: 8, padding: 4, width: 250,
        boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
        fontFamily: 'var(--w-font-ar)', direction: 'rtl',
      }}>
        <div style={{
          height: 130, borderRadius: 6, marginBottom: 6,
          background: image || 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#94a3b8', fontSize: 12,
        }}>
          {!image && '📷'}
        </div>
        <div style={{ padding: '0 6px 4px' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: WA_TEXT }}>{title}</div>
          {desc && <div style={{ fontSize: 12.5, color: '#54656F', marginTop: 2, lineHeight: 1.4 }}>{desc}</div>}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#00A884' }}>{price}</div>
            {sku && <div style={{ fontSize: 10.5, color: WA_META, fontFamily: 'monospace' }}>{sku}</div>}
          </div>
          <div style={{ textAlign: 'left', fontSize: 11, color: WA_META, marginTop: 2 }}>{time}</div>
        </div>
      </div>
    </div>
  );
};

// ─── Coupon card bubble ────────────────────────────────────────────────────
const WACouponCard = ({ code, discount, validity, time = '10:32 ص' }) => (
  <div style={{
    display: 'flex', justifyContent: 'flex-end',
    margin: '4px 0',
    animation: 'none',
  }}>
    <div style={{
      background: WA_AGENT_BUBBLE, borderRadius: 8, padding: 8, width: 230,
      boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
      fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #FFB800, #FF8A00)',
        borderRadius: 6, padding: '14px 10px', textAlign: 'center', color: '#fff',
      }}>
        <div style={{ fontSize: 11, opacity: 0.9 }}>كوبون خصم</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginTop: 2, letterSpacing: 1 }}>{code}</div>
        <div style={{ fontSize: 14, marginTop: 4 }}>خصم {discount}</div>
      </div>
      <div style={{ fontSize: 12, color: WA_META, textAlign: 'center', marginTop: 6 }}>
        ⏰ {validity}
      </div>
      <div style={{ textAlign: 'left', fontSize: 11, color: WA_META, marginTop: 2 }}>{time}</div>
    </div>
  </div>
);

// ─── Order/shipping card ────────────────────────────────────────────────────
const WAShippingCard = ({ carrier, recipient, city, tracking, time = '10:31 ص' }) => (
  <div style={{
    display: 'flex', justifyContent: 'flex-end', margin: '4px 0',
    animation: 'none',
  }}>
    <div style={{
      background: WA_AGENT_BUBBLE, borderRadius: 8, padding: 10, width: 250,
      boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
      fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 6, background: '#FEF3C7',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
        }}>📦</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: WA_TEXT }}>بوليصة شحن — {carrier}</div>
      </div>
      <div style={{ fontSize: 12.5, color: '#54656F', lineHeight: 1.7 }}>
        <div>المستلم: <span style={{ color: WA_TEXT, fontWeight: 600 }}>{recipient}</span></div>
        <div>المدينة: <span style={{ color: WA_TEXT, fontWeight: 600 }}>{city}</span></div>
        <div>رقم التتبع: <span style={{ fontFamily: 'monospace', color: '#0EA5E9', fontWeight: 700 }}>{tracking}</span></div>
      </div>
      <div style={{ textAlign: 'left', fontSize: 11, color: WA_META, marginTop: 4 }}>{time}</div>
    </div>
  </div>
);

// ─── PDF file attachment (WhatsApp-style) ─────────────────────────────────
const WAPDFCard = ({ filename = 'بوليصة-الشحن.pdf', pages = '1 صفحة', size = '124 KB', time = '10:43 ص' }) => (
  <div style={{
    display: 'flex', justifyContent: 'flex-end', margin: '4px 0',
  }}>
    <div style={{
      background: WA_AGENT_BUBBLE, borderRadius: 8, padding: 8, width: 250,
      boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
      fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: '#F5F6F6', borderRadius: 6, padding: '10px 12px',
      }}>
        <div style={{
          width: 38, height: 44, borderRadius: 4, background: '#fff',
          border: '1px solid #E5E7EB',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', flexShrink: 0,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -1, right: -1,
            width: 10, height: 10, background: '#fff',
            borderLeft: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB',
          }}/>
          <div style={{
            fontSize: 9, fontWeight: 800, color: '#DC2626',
            fontFamily: 'system-ui, sans-serif', letterSpacing: 0.5,
          }}>PDF</div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: WA_TEXT,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{filename}</div>
          <div style={{ fontSize: 11.5, color: WA_META, marginTop: 3 }}>{pages} • {size} • PDF</div>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: '#fff', border: '1px solid #E5E7EB',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v9m0 0l-3-3m3 3l3-3M3 13h10" stroke="#54656F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div style={{ textAlign: 'left', fontSize: 11, color: WA_META, marginTop: 4 }}>{time}</div>
    </div>
  </div>
);

// ─── Time skip indicator ───────────────────────────────────────────────────
const WATimeSkip = ({ text = 'بعد ساعتين...' }) => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0',
    animation: 'none',
  }}>
    <div style={{
      background: 'rgba(11,26,31,0.04)', color: '#54656F', fontFamily: 'var(--w-font-ar)',
      padding: '6px 14px', borderRadius: 100, fontSize: 12, fontStyle: 'italic',
      border: '1px dashed #cbd5e1',
    }}>{text}</div>
  </div>
);

// ─── Input bar ──────────────────────────────────────────────────────────────
const WAInput = () => (
  <div style={{
    height: 56, background: WA_INPUT_BG, padding: '8px 12px', display: 'flex',
    alignItems: 'center', gap: 8, flexShrink: 0, direction: 'rtl',
  }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#54656F"><circle cx="12" cy="12" r="10" fill="none" stroke="#54656F" strokeWidth="1.6"/><path d="M12 8v8M8 12h8" stroke="#54656F" strokeWidth="1.6"/></svg>
    <div style={{
      flex: 1, height: 38, borderRadius: 19, background: '#fff',
      display: 'flex', alignItems: 'center', padding: '0 12px',
      fontFamily: 'var(--w-font-ar)', fontSize: 14, color: WA_META,
    }}>
      اكتب رسالة
    </div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#54656F"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
  </div>
);

// ─── Frame: full WhatsApp chat container ───────────────────────────────────
// width/height in screen coords. children = messages.
const WAChat = ({
  width = 470, height = 720,
  headerTitle = 'وكيل المدير - وصول',
  headerSubtitle = 'متصل الآن',
  showLogo = true,
  children,
  hideInput = false,
}) => (
  <div style={{
    width, height, background: WA_BG, display: 'flex', flexDirection: 'column',
    borderRadius: 4, overflow: 'hidden', position: 'relative',
    border: '1px solid rgba(11,26,31,0.05)',
  }}>
    <WAHeader title={headerTitle} subtitle={headerSubtitle} showLogo={showLogo}/>
    {/* Pattern background using SVG */}
    <div style={{
      position: 'absolute', inset: '60px 0 56px 0', zIndex: 0,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><g fill='%23000' opacity='0.03'><circle cx='10' cy='10' r='2'/><circle cx='40' cy='25' r='1.5'/><circle cx='25' cy='45' r='2'/></g></svg>")`,
    }}/>
    <div style={{
      flex: 1, overflow: 'hidden', padding: '8px 12px',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      position: 'relative', zIndex: 1,
      minHeight: 0,
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column',
        marginTop: 'auto',
      }}>
        {children}
      </div>
    </div>
    {!hideInput && <WAInput/>}
  </div>
);

// ─── Web chat widget — overlays the store page (Sales Agent on storefront) ─
const WC_BG = '#FFFFFF';
const WC_AGENT_BUBBLE = '#F5F6F7';
const WC_USER_BUBBLE = '#0B1A1F';
const WC_TEXT = '#0B1A1F';
const WC_MUTED = '#6B7280';
const WC_ACCENT = '#73FCD7';

const WCWidget = ({ width = 380, height = 520, agentName = 'وصول', children }) => (
  <div style={{
    width, height, borderRadius: 20,
    background: WC_BG, overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0,0,0,0.28), 0 0 0 1px rgba(11,26,31,0.06)',
    display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    position: 'relative',
  }}>
    {/* Minimal header */}
    <div style={{
      padding: '12px 14px',
      display: 'flex', alignItems: 'center', gap: 10,
      background: '#FAFAFA',
      borderBottom: '1px solid #F1F2F4',
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #2A323C 0%, #0B1A1F 70%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 0 0 2px #fff, 0 1px 4px rgba(0,0,0,0.18)',
      }}>
        <WosoolInfinity size={16} color={WC_ACCENT}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: WC_TEXT }}>{agentName}</div>
        <div style={{ fontSize: 10.5, color: '#10B981', marginTop: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981' }}/>
          متصل الآن
        </div>
      </div>
    </div>
    {/* Messages */}
    <div style={{
      flex: 1, padding: '14px 14px 8px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      background: WC_BG,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', gap: 6 }}>
        {children}
      </div>
    </div>
    {/* Input bar — matches screenshot */}
    <div style={{
      padding: '10px 12px 12px', background: WC_BG,
      display: 'flex', alignItems: 'center', gap: 10,
      borderTop: '1px solid #F1F2F4',
    }}>
      <div style={{
        flex: 1, background: '#F4F5F7', borderRadius: 100,
        padding: '11px 18px', fontSize: 12.5, color: '#9CA3AF',
        textAlign: 'right',
      }}>اسألني عن أي شيء في المتجر !</div>
      <div style={{
        width: 36, height: 36, borderRadius: '50%', background: WC_ACCENT,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 14px rgba(115,252,215,0.45)',
        flexShrink: 0,
      }}>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d="M8 13.5V2.5M8 2.5l-4.5 4.5M8 2.5l4.5 4.5" stroke="#0B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

// Closed-state launcher pill — small floating button on the store
const WCLauncher = ({ label = 'وصول' }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: '#0B1A1F', color: '#fff',
    padding: '8px 14px 8px 8px', borderRadius: 100,
    boxShadow: '0 12px 28px rgba(0,0,0,0.3)',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
  }}>
    <div style={{
      width: 30, height: 30, borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #2A323C 0%, #0B1A1F 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 0 0 2px rgba(255,255,255,0.08)',
    }}>
      <WosoolInfinity size={15} color={WC_ACCENT}/>
    </div>
    <div style={{ fontSize: 13, fontWeight: 700 }}>{label}</div>
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginInlineStart: 2, opacity: 0.85 }}>
      <path d="M3 5h10a1 1 0 011 1v6l-3-2H6a3 3 0 01-3-3V5z" fill={WC_ACCENT}/>
    </svg>
  </div>
);

const WCBubble = ({ from = 'agent', children, time }) => {
  const isUser = from === 'user';
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-start' : 'flex-end',
      margin: '2px 0',
    }}>
      <div style={{
        background: isUser ? WC_USER_BUBBLE : WC_AGENT_BUBBLE,
        color: isUser ? '#fff' : WC_TEXT,
        borderRadius: isUser ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
        padding: '9px 13px',
        maxWidth: '80%',
        fontSize: 13,
        lineHeight: 1.55,
        whiteSpace: 'pre-line',
        boxShadow: isUser ? 'none' : '0 1px 2px rgba(11,26,31,0.06)',
        fontFamily: 'var(--w-font-ar)',
      }}>
        {children}
        {time && (
          <div style={{
            fontSize: 10, marginTop: 4,
            color: isUser ? 'rgba(255,255,255,0.55)' : WC_MUTED,
            textAlign: 'left',
          }}>{time}</div>
        )}
      </div>
    </div>
  );
};

const WCTyping = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '2px 0' }}>
    <div style={{
      background: WC_AGENT_BUBBLE, padding: '10px 14px',
      borderRadius: '14px 14px 14px 4px',
      display: 'flex', gap: 4, alignItems: 'center',
      boxShadow: '0 1px 2px rgba(11,26,31,0.06)',
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: '#9CA3AF',
          animation: `wa-typing-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}/>
      ))}
    </div>
  </div>
);

const WCProductSuggest = ({ title, price, rating, glyph = '☕', accent = '#FBBF24' }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '2px 0' }}>
    <div style={{
      background: WC_AGENT_BUBBLE, borderRadius: 12, padding: 8, width: 240,
      boxShadow: '0 1px 2px rgba(11,26,31,0.08)',
      direction: 'rtl', fontFamily: 'var(--w-font-ar)',
    }}>
      <div style={{
        height: 92, borderRadius: 8, background: `linear-gradient(135deg, #1F2937, #0F172A)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        marginBottom: 8,
      }}>
        <div style={{ fontSize: 44 }}>{glyph}</div>
        <div style={{
          position: 'absolute', top: 6, right: 6,
          background: accent, color: '#0B1A1F',
          fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 100,
        }}>الأكثر طلباً</div>
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: WC_TEXT }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
        <span style={{ fontSize: 11.5, color: '#F59E0B' }}>★ {rating}</span>
        <span style={{ fontSize: 11.5, color: WC_MUTED }}>(127 تقييم)</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 800, color: WC_ACCENT, marginTop: 6, background: '#0B1A1F', padding: '5px 10px', borderRadius: 6, display: 'inline-block' }}>{price}</div>
    </div>
  </div>
);

Object.assign(window, {
  WAChat, WAHeader, WABubble, WAVoiceNote, WAVoiceTranscript, WATyping,
  WADayPill, WAProductCard, WACouponCard, WAShippingCard, WAPDFCard, WATimeSkip, WAInput,
  WCWidget, WCBubble, WCTyping, WCProductSuggest, WCLauncher,
});
