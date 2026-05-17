// Storefront / Salla store mockup - clean light theme.
// Used as the right-half of split scenes. Shows products, cart, order pages.

const SF_BG = '#FAFAFA';
const SF_TEXT = '#1A1A1A';
const SF_MUTED = '#6B7280';
const SF_ACCENT = '#C76C5B';   // Salla-ish coral red
const SF_BORDER = '#E5E7EB';

// ─── Storefront Header ─────────────────────────────────────────────────────
const SFHeader = ({ storeName = 'متجر أحمد', cartCount = 0, cartPulse = false }) => (
  <div style={{
    height: 56, background: '#fff', borderBottom: `1px solid ${SF_BORDER}`,
    display: 'flex', alignItems: 'center', padding: '0 24px', gap: 24,
    direction: 'rtl', flexShrink: 0,
    fontFamily: 'var(--w-font-ar)',
  }}>
    {/* Logo on right (RTL) */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8, background: SF_ACCENT,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 800, fontSize: 16,
      }}>أ</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: SF_TEXT }}>{storeName}</div>
    </div>
    {/* Nav */}
    <div style={{ display: 'flex', gap: 24, marginInlineStart: 32, fontSize: 14, color: SF_MUTED }}>
      <span style={{ color: SF_TEXT, fontWeight: 600 }}>الرئيسية</span>
      <span>المنتجات</span>
      <span>التصنيفات</span>
      <span>تواصل معنا</span>
    </div>
    {/* Spacer */}
    <div style={{ flex: 1 }}/>
    {/* Cart icon on left */}
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SF_TEXT} strokeWidth="1.8">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {cartCount > 0 && (
        <div style={{
          position: 'absolute', top: -6, right: -6,
          minWidth: 18, height: 18, borderRadius: '50%', background: SF_ACCENT,
          color: '#fff', fontSize: 11, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 5px',
          animation: cartPulse ? 'sf-cart-bounce 600ms cubic-bezier(0.36, 0, 0, 1.6)' : 'none',
        }}>{cartCount}</div>
      )}
    </div>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={SF_MUTED} strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0112 0v1" strokeLinecap="round"/></svg>
  </div>
);

// ─── Product card placeholder ──────────────────────────────────────────────
const SFProductCard = ({ title, price, oldPrice, color = '#E2E8F0', accent = '#94A3B8', glyph = '☕', appearAnim = false, addedAnim = false }) => (
  <div style={{
    background: '#fff', borderRadius: 8, overflow: 'hidden',
    border: `1px solid ${SF_BORDER}`, fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    animation: 'none',
    boxShadow: addedAnim ? `0 0 0 3px ${SF_ACCENT}55, 0 8px 20px rgba(199,108,91,0.2)` : '0 1px 2px rgba(0,0,0,0.04)',
    transition: 'box-shadow 300ms ease',
  }}>
    {/* Product image placeholder - colored block with glyph */}
    <div style={{
      height: 180, background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{ fontSize: 64, opacity: 0.55, color: accent }}>{glyph}</div>
      {/* Heart icon top-right */}
      <div style={{
        position: 'absolute', top: 10, [/*RTL flips*/'left']: 10,
        width: 32, height: 32, borderRadius: '50%', background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={SF_MUTED} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </div>
    </div>
    {/* Body */}
    <div style={{ padding: '12px 14px' }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: SF_ACCENT, textAlign: 'center' }}>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 4, alignItems: 'baseline' }}>
        {oldPrice && <span style={{ fontSize: 12, color: SF_MUTED, textDecoration: 'line-through' }}>{oldPrice}</span>}
        <span style={{ fontSize: 14, fontWeight: 700, color: SF_ACCENT }}>{price}</span>
      </div>
      <button style={{
        width: '100%', marginTop: 10, padding: '8px 12px',
        background: '#fff', border: `1px solid ${SF_ACCENT}`,
        borderRadius: 6, color: SF_ACCENT, fontFamily: 'var(--w-font-ar)',
        fontSize: 13, fontWeight: 600, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-8 4a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        إضافة للسلة
      </button>
    </div>
  </div>
);

// ─── Storefront: empty/products grid ───────────────────────────────────────
const SFProductsPage = ({ products = [], emptyMessage = 'لا توجد منتجات', cartCount = 0, cartPulse = false }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
  }}>
    <SFHeader cartCount={cartCount} cartPulse={cartPulse}/>
    <div style={{ flex: 1, padding: 28, overflow: 'hidden' }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: SF_TEXT, marginBottom: 20 }}>منتجاتنا</div>
      {products.length === 0 ? (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '60px 20px', background: '#fff', borderRadius: 12,
          border: `1px dashed ${SF_BORDER}`, color: SF_MUTED, fontSize: 15,
        }}>
          <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.5 }}>📦</div>
          <div>{emptyMessage}</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {products.map((p, i) => <SFProductCard key={i} {...p}/>)}
        </div>
      )}
    </div>
  </div>
);

// ─── Single product detail page ────────────────────────────────────────────
const SFProductDetail = ({ title, price, desc, color = '#A7F3D0', glyph = '☕', accent = '#10B981', cartCount = 0, cartPulse = false, addToCartHighlight = false, freeshipBadge = null }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
  }}>
    <SFHeader cartCount={cartCount} cartPulse={cartPulse}/>
    <div style={{ flex: 1, padding: 28, display: 'flex', gap: 28 }}>
      {/* Product image */}
      <div style={{
        flex: 1, background: `linear-gradient(135deg, ${color}, ${color}dd)`,
        borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: 300, position: 'relative',
      }}>
        <div style={{ fontSize: 160, opacity: 0.6, color: accent }}>{glyph}</div>
      </div>
      {/* Details */}
      <div style={{ flex: 1, padding: '12px 0' }}>
        <div style={{ fontSize: 13, color: SF_MUTED, marginBottom: 6 }}>أدوات منزلية</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: SF_TEXT, marginBottom: 10 }}>{title}</div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 16 }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: SF_ACCENT }}>{price}</span>
          <span style={{ fontSize: 13, color: '#10B981', fontWeight: 600 }}>● متوفر حالياً</span>
        </div>
        <div style={{ fontSize: 14, color: SF_MUTED, lineHeight: 1.7, marginBottom: 20 }}>{desc}</div>
        {freeshipBadge && (
          <div style={{
            background: '#ECFDF5', border: '1.5px solid #10B981',
            padding: '10px 14px', borderRadius: 8, marginBottom: 16,
            color: '#065F46', fontSize: 13, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 8,
            animation: 'none',
          }}>
            🚚 {freeshipBadge}
          </div>
        )}
        <button style={{
          width: '100%', padding: '14px 20px', background: SF_ACCENT, color: '#fff',
          border: 'none', borderRadius: 8, fontFamily: 'var(--w-font-ar)', fontSize: 16,
          fontWeight: 700, cursor: 'pointer',
          boxShadow: addToCartHighlight ? `0 0 0 4px ${SF_ACCENT}44, 0 8px 24px ${SF_ACCENT}55` : '0 2px 6px rgba(199,108,91,0.2)',
          animation: addToCartHighlight ? 'sf-pulse 1s ease-in-out infinite' : 'none',
        }}>
          إضافة للسلة
        </button>
      </div>
    </div>
  </div>
);

// ─── Empty store / dashboard view ─────────────────────────────────────────
const SFEmptyStore = ({ message = 'لا توجد منتجات بعد' }) => (
  <SFProductsPage products={[]} emptyMessage={message}/>
);

// ─── Order status page (admin-ish) ────────────────────────────────────────
const SFOrderPage = ({ orderId = '#4532', customer = 'أحمد محمد', city = 'جدة', items = 1, total = '149 ر.س', status = 'قيد المراجعة', tracking = null, statusColor = '#F59E0B', justChanged = false, statusFlash = false }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    display: 'flex', flexDirection: 'column',
  }}>
    <SFHeader storeName="إدارة المتجر — الطلبات"/>
    <div style={{ flex: 1, padding: 28 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: SF_TEXT, marginBottom: 20 }}>الطلب {orderId}</div>
      <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${SF_BORDER}`, overflow: 'hidden' }}>
        {/* Status bar */}
        <div style={{
          padding: '16px 24px', borderBottom: `1px solid ${SF_BORDER}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: statusFlash ? `${statusColor}15` : 'transparent',
          transition: 'background 400ms ease',
        }}>
          <div style={{ fontSize: 14, color: SF_MUTED }}>الحالة</div>
          <div style={{
            padding: '6px 14px', borderRadius: 100,
            background: `${statusColor}20`, color: statusColor,
            fontSize: 13, fontWeight: 700,
            animation: justChanged ? 'sf-status-pulse 800ms ease' : 'none',
          }}>● {status}</div>
        </div>
        {/* Customer info */}
        <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 14 }}>
          <div>
            <div style={{ color: SF_MUTED, marginBottom: 4 }}>العميل</div>
            <div style={{ color: SF_TEXT, fontWeight: 600 }}>{customer}</div>
          </div>
          <div>
            <div style={{ color: SF_MUTED, marginBottom: 4 }}>المدينة</div>
            <div style={{ color: SF_TEXT, fontWeight: 600 }}>{city}</div>
          </div>
          <div>
            <div style={{ color: SF_MUTED, marginBottom: 4 }}>المنتجات</div>
            <div style={{ color: SF_TEXT, fontWeight: 600 }}>{items} منتج</div>
          </div>
          <div>
            <div style={{ color: SF_MUTED, marginBottom: 4 }}>الإجمالي</div>
            <div style={{ color: SF_TEXT, fontWeight: 700 }}>{total}</div>
          </div>
        </div>
        {/* Tracking */}
        {tracking && (
          <div style={{
            padding: '16px 24px', borderTop: `1px solid ${SF_BORDER}`,
            background: '#F0FDF4',
            animation: 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 24 }}>📦</div>
              <div>
                <div style={{ fontSize: 13, color: SF_MUTED }}>رقم التتبع</div>
                <div style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: '#065F46' }}>{tracking}</div>
              </div>
              <div style={{ flex: 1 }}/>
              <div style={{
                padding: '6px 12px', background: '#10B981', color: '#fff',
                borderRadius: 100, fontSize: 12, fontWeight: 700,
              }}>✓ تم إرسال رسالة التتبع للعميل</div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ─── Coupons page ─────────────────────────────────────────────────────────
const SFCouponsPage = ({ coupons = [] }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    display: 'flex', flexDirection: 'column',
  }}>
    <SFHeader storeName="إدارة المتجر — الكوبونات"/>
    <div style={{ flex: 1, padding: 28 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: SF_TEXT, marginBottom: 20 }}>كوبونات الخصم</div>
      {coupons.length === 0 ? (
        <div style={{
          padding: 60, background: '#fff', borderRadius: 12, border: `1px dashed ${SF_BORDER}`,
          textAlign: 'center', color: SF_MUTED, fontSize: 15,
        }}>
          <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.4 }}>🏷️</div>
          لا توجد كوبونات
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {coupons.map((c, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 10, padding: '16px 20px',
              border: `1px solid ${SF_BORDER}`,
              display: 'flex', alignItems: 'center', gap: 16,
              animation: 'none',
              boxShadow: c.fresh ? '0 0 0 2px #10B98155, 0 4px 12px rgba(16,185,129,0.2)' : 'none',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 8,
                background: 'linear-gradient(135deg, #FFB800, #FF8A00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 20,
              }}>🏷️</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: SF_TEXT, letterSpacing: 0.5 }}>{c.code}</div>
                <div style={{ fontSize: 13, color: SF_MUTED, marginTop: 2 }}>خصم {c.discount} • ينتهي {c.expires}</div>
              </div>
              <div style={{
                padding: '6px 12px', borderRadius: 100,
                background: c.active ? '#D1FAE5' : '#F3F4F6',
                color: c.active ? '#065F46' : SF_MUTED,
                fontSize: 12, fontWeight: 700,
              }}>● {c.active ? 'فعّال' : 'متوقف'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── Insights/dashboard mini stats ─────────────────────────────────────────
const SFStatsPage = ({ orders = 0, ordersDelta = 0, revenue = '0', abandoned = 0, recovered = 0, animate = false }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    display: 'flex', flexDirection: 'column',
  }}>
    <SFHeader storeName="لوحة المتجر — أمس"/>
    <div style={{ flex: 1, padding: 28 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: SF_TEXT, marginBottom: 20 }}>إحصائيات أمس</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <SFStat icon="🛒" label="طلبات جديدة" value={orders} delta={ordersDelta} color="#0EA5E9" animate={animate}/>
        <SFStat icon="💰" label="الإيرادات" value={revenue} unit="ر.س" color="#10B981" animate={animate}/>
        <SFStat icon="🛍️" label="سلات متروكة" value={abandoned} color="#F59E0B" animate={animate}/>
        <SFStat icon="🎯" label="مسترجعة تلقائياً" value={recovered} color="#10B981" highlight animate={animate}/>
      </div>
      {/* AI suggestion banner */}
      <div style={{
        marginTop: 24, padding: 20, borderRadius: 12,
        background: 'linear-gradient(135deg, #002A33, #00505E)',
        color: '#fff', display: 'flex', gap: 16, alignItems: 'flex-start',
        animation: 'none',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10, background: 'rgba(115,252,215,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <WosoolInfinity size={22} color="#73FCD7"/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: '#73FCD7', fontWeight: 700, marginBottom: 4 }}>اقتراح من وكيل الذكاء</div>
          <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>
            فعّل شحن مجاني فوق 200 ريال — المتاجر المشابهة شافت زيادة 23% في المبيعات
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SFStat = ({ icon, label, value, delta, unit, color = '#0EA5E9', highlight = false, animate = false }) => {
  // Animate value count-up
  const [display, setDisplay] = React.useState(animate ? 0 : value);
  React.useEffect(() => {
    if (!animate) { setDisplay(value); return; }
    const target = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
    if (isNaN(target)) { setDisplay(value); return; }
    let frame; const start = performance.now(); const dur = 1200;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = Math.floor(eased * target);
      setDisplay(typeof value === 'string' ? cur.toLocaleString('ar-SA') : cur);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, value]);

  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: 20,
      border: `1px solid ${SF_BORDER}`,
      boxShadow: highlight ? `0 0 0 2px ${color}44, 0 4px 12px ${color}33` : '0 1px 2px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: `${color}18`, color, display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 18,
        }}>{icon}</div>
        <div style={{ fontSize: 13, color: SF_MUTED }}>{label}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: SF_TEXT }}>{display}</div>
        {unit && <span style={{ fontSize: 14, color: SF_MUTED }}>{unit}</span>}
        {delta != null && delta > 0 && (
          <div style={{
            marginInlineStart: 'auto', fontSize: 12, fontWeight: 700,
            color: '#10B981', background: '#D1FAE5', padding: '2px 8px', borderRadius: 100,
          }}>↑ {delta}%</div>
        )}
      </div>
    </div>
  );
};

// ─── Cart page ─────────────────────────────────────────────────────────────
const SFCart = ({ items = [], total = '0', cartCount = 0, freeshipMet = false, freeshipRemaining = 0 }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    display: 'flex', flexDirection: 'column',
  }}>
    <SFHeader cartCount={cartCount}/>
    <div style={{ flex: 1, padding: 28 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: SF_TEXT, marginBottom: 20 }}>سلة المشتريات</div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: `1px solid ${SF_BORDER}` }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '12px 0', borderBottom: i < items.length - 1 ? `1px solid ${SF_BORDER}` : 'none',
            animation: 'none',
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 8,
              background: `linear-gradient(135deg, ${it.color || '#A7F3D0'}, ${it.color || '#A7F3D0'}dd)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
            }}>{it.glyph || '☕'}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: SF_TEXT }}>{it.title}</div>
              <div style={{ fontSize: 13, color: SF_MUTED, marginTop: 2 }}>الكمية: {it.qty || 1}</div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: SF_ACCENT }}>{it.price}</div>
          </div>
        ))}
        {/* Total */}
        <div style={{
          marginTop: 14, paddingTop: 14, borderTop: `2px solid ${SF_BORDER}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ fontSize: 15, color: SF_MUTED }}>الإجمالي</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: SF_TEXT }}>{total} <span style={{ fontSize: 14 }}>ر.س</span></div>
        </div>
      </div>
      {/* Shipping promo */}
      <div style={{
        marginTop: 16, padding: '14px 18px', borderRadius: 12,
        background: freeshipMet ? '#ECFDF5' : '#FEF3C7',
        border: `1.5px solid ${freeshipMet ? '#10B981' : '#F59E0B'}`,
        color: freeshipMet ? '#065F46' : '#92400E',
        display: 'flex', alignItems: 'center', gap: 12,
        animation: 'none',
      }}>
        <span style={{ fontSize: 20 }}>🚚</span>
        <div style={{ fontSize: 14, fontWeight: 600 }}>
          {freeshipMet
            ? 'حصلت على شحن مجاني!'
            : `باقي ${freeshipRemaining} ر.س للحصول على شحن مجاني`}
        </div>
      </div>
    </div>
  </div>
);

// ─── Checkout page ─────────────────────────────────────────────────────────
const SFCheckout = ({ storeName = 'متجر القهوة المختصة', customer = 'نوره العتيبي', city = 'الرياض', items = [], subtotal = '0', shipping = '15', total = '0', highlight = false }) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    display: 'flex', flexDirection: 'column',
  }}>
    <SFHeader storeName={storeName}/>
    <div style={{ flex: 1, padding: 20, overflow: 'hidden' }}>
      <div style={{
        fontSize: 18, fontWeight: 800, marginBottom: 14, color: SF_TEXT,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        إتمام الطلب
        <span style={{
          fontSize: 11, fontWeight: 700, color: '#10B981',
          background: '#D1FAE5', padding: '3px 8px', borderRadius: 100,
        }}>الخطوة الأخيرة</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14 }}>
        {/* Left: shipping/contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            background: '#fff', borderRadius: 10, padding: 14,
            border: `1px solid ${SF_BORDER}`,
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SF_MUTED, marginBottom: 8 }}>عنوان الشحن</div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: SF_TEXT }}>{customer}</div>
            <div style={{ fontSize: 12.5, color: SF_MUTED, marginTop: 3 }}>{city} • حي العليا</div>
            <div style={{ fontSize: 12.5, color: SF_MUTED, marginTop: 1 }}>+966 5• ••• 4732</div>
          </div>
          <div style={{
            background: '#fff', borderRadius: 10, padding: 14,
            border: `1px solid ${SF_BORDER}`,
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SF_MUTED, marginBottom: 8 }}>طريقة الدفع</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['💳', '🏦', '📱'].map((g, i) => (
                <div key={i} style={{
                  flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 6,
                  background: i === 0 ? '#0B1A1F' : '#F9FAFB',
                  color: i === 0 ? '#fff' : SF_TEXT,
                  fontSize: 16,
                  border: i === 0 ? 'none' : `1px solid ${SF_BORDER}`,
                }}>{g}</div>
              ))}
            </div>
          </div>
        </div>
        {/* Right: order summary */}
        <div style={{
          background: '#fff', borderRadius: 10, padding: 14,
          border: `1.5px solid ${highlight ? '#10B981' : SF_BORDER}`,
          boxShadow: highlight ? '0 0 0 4px rgba(16,185,129,0.15)' : 'none',
          transition: 'all 400ms ease',
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: SF_TEXT, marginBottom: 10 }}>ملخص الطلب</div>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 6,
                background: it.color || '#1F2937',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>{it.glyph || '☕'}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: SF_TEXT, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.title}</div>
                <div style={{ fontSize: 11, color: SF_MUTED, marginTop: 1 }}>الكمية: {it.qty || 1}</div>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: SF_TEXT }}>{it.price}</div>
            </div>
          ))}
          <div style={{ height: 1, background: SF_BORDER, margin: '10px 0' }}/>
          <div style={{ fontSize: 12, color: SF_MUTED, display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>المجموع الفرعي</span><span>{subtotal} ر.س</span>
          </div>
          <div style={{ fontSize: 12, color: SF_MUTED, display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>الشحن</span><span>{shipping} ر.س</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 800, color: SF_TEXT, display: 'flex', justifyContent: 'space-between' }}>
            <span>الإجمالي</span><span style={{ color: '#10B981' }}>{total} ر.س</span>
          </div>
          <button style={{
            width: '100%', marginTop: 12, padding: '11px 0',
            background: '#10B981', color: '#fff',
            border: 'none', borderRadius: 8,
            fontSize: 13.5, fontWeight: 800,
            fontFamily: 'var(--w-font-ar)',
            cursor: 'default',
            boxShadow: highlight ? '0 8px 20px rgba(16,185,129,0.4)' : 'none',
          }}>تأكيد الطلب 🚚</button>
        </div>
      </div>
    </div>
  </div>
);

// ─── Products admin view (manager dashboard — stock + visibility) ─────────
const SFAdminProductRow = ({ title, glyph, color, stock, hidden = false, redFlash = false, statusFlash = false }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '10px 12px', borderRadius: 10,
    background: '#fff',
    border: `1.5px solid ${redFlash ? '#FCA5A5' : SF_BORDER}`,
    boxShadow: redFlash ? '0 0 0 4px rgba(252,165,165,0.18)' : 'none',
    transition: 'all 350ms ease',
    opacity: hidden ? 0.55 : 1,
  }}>
    <div style={{
      width: 40, height: 40, borderRadius: 8,
      background: color || '#F3F4F6',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
      flexShrink: 0,
      filter: hidden ? 'grayscale(0.6)' : 'none',
    }}>{glyph}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: SF_TEXT,
        textDecoration: hidden ? 'line-through' : 'none',
      }}>{title}</div>
      <div style={{
        fontSize: 11.5, marginTop: 2,
        color: stock === 0 ? '#DC2626' : SF_MUTED,
        fontWeight: stock === 0 ? 700 : 500,
      }}>
        المخزون: {stock} قطعة {stock === 0 ? '⚠️' : ''}
      </div>
    </div>
    <div style={{
      padding: '5px 12px', borderRadius: 100,
      background: hidden ? '#F3F4F6' : '#D1FAE5',
      color: hidden ? '#6B7280' : '#059669',
      fontSize: 11, fontWeight: 800,
      letterSpacing: 0.2, flexShrink: 0,
      transform: statusFlash ? 'scale(1.08)' : 'scale(1)',
      transition: 'transform 300ms ease',
    }}>{hidden ? '⊝ مخفي' : '● مفعّل'}</div>
  </div>
);

const SFAdminStat = ({ label, value, icon, color = '#0EA5E9', flash = false }) => (
  <div style={{
    flex: 1, background: '#fff', borderRadius: 10,
    padding: '12px 14px',
    border: `1.5px solid ${flash ? color : SF_BORDER}`,
    boxShadow: flash ? `0 0 0 4px ${color}25` : 'none',
    transition: 'all 350ms ease',
    display: 'flex', alignItems: 'center', gap: 10,
  }}>
    <div style={{
      width: 34, height: 34, borderRadius: 8,
      background: `${color}15`, color,
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
      flexShrink: 0,
    }}>{icon}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 11, color: SF_MUTED, fontWeight: 600 }}>{label}</div>
      <div style={{
        fontSize: 22, fontWeight: 800, color: SF_TEXT, lineHeight: 1.1,
        transform: flash ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 300ms ease',
        transformOrigin: 'right center',
      }}>{value}</div>
    </div>
  </div>
);

const SFProductsAdmin = ({
  totalCount = 35,
  visibleCount,
  outOfStockCount = 3,
  products = [],
  highlightOutOfStock = false,
  visibleFlash = false,
  outOfStockFlash = false,
}) => (
  <div style={{
    width: '100%', height: '100%', background: SF_BG,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    display: 'flex', flexDirection: 'column',
  }}>
    <SFHeader storeName="إدارة المتجر — المنتجات"/>
    <div style={{ flex: 1, padding: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        fontSize: 20, fontWeight: 800, marginBottom: 14, color: SF_TEXT,
      }}>المنتجات</div>
      {/* Stats row */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        <SFAdminStat label="إجمالي المنتجات" value={totalCount} icon="📦" color="#0EA5E9"/>
        <SFAdminStat label="المرئية" value={visibleCount ?? totalCount} icon="👁️" color="#10B981" flash={visibleFlash}/>
        <SFAdminStat label="مخزون صفر" value={outOfStockCount} icon="⚠️" color="#DC2626" flash={outOfStockFlash}/>
      </div>
      {/* Products list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, overflow: 'hidden' }}>
        {products.map((p, i) => (
          <SFAdminProductRow key={i} {...p} redFlash={highlightOutOfStock && p.stock === 0 && !p.hidden}/>
        ))}
      </div>
    </div>
  </div>
);

// ─── Add-to-cart toast (Salla-style notification) ──────────────────────────
const SFCartNotification = ({
  productTitle = '',
  productGlyph = '☕',
  productColor = '#3E2723',
  opacity = 1,
  slideIn = 1,
}) => (
  <div style={{
    position: 'absolute',
    top: 80,  // below the SFHeader
    left: '50%',
    transform: `translate(-50%, ${(1 - slideIn) * -28}px)`,
    background: '#fff',
    padding: '12px 16px',
    borderRadius: 12,
    boxShadow: '0 16px 40px rgba(16,185,129,0.28), 0 0 0 1.5px #10B981',
    display: 'flex', alignItems: 'center', gap: 14,
    minWidth: 380, maxWidth: 480,
    opacity,
    zIndex: 100,
    fontFamily: 'var(--w-font-ar)', direction: 'rtl',
    transition: 'opacity 250ms ease, transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  }}>
    <div style={{
      width: 46, height: 46, borderRadius: 8,
      background: productColor,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 24, flexShrink: 0,
    }}>{productGlyph}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontSize: 11.5, color: '#059669', fontWeight: 700,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span style={{
          width: 16, height: 16, borderRadius: '50%', background: '#10B981',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 9, fontWeight: 800,
          flexShrink: 0,
        }}>✓</span>
        تمت الإضافة للسلة
      </div>
      <div style={{
        fontSize: 13.5, fontWeight: 700, color: SF_TEXT, marginTop: 3,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>{productTitle}</div>
    </div>
    <div style={{
      padding: '8px 14px', borderRadius: 8,
      background: '#10B981', color: '#fff',
      fontSize: 12, fontWeight: 800,
      flexShrink: 0,
      display: 'flex', alignItems: 'center', gap: 5,
    }}>
      <span>عرض السلة</span>
      <span style={{ fontSize: 13 }}>🛒</span>
    </div>
  </div>
);

Object.assign(window, {
  SFHeader, SFProductCard, SFProductsPage, SFProductDetail, SFEmptyStore,
  SFOrderPage, SFCouponsPage, SFStatsPage, SFCart, SFCheckout,
  SFProductsAdmin, SFAdminProductRow, SFAdminStat, SFCartNotification,
});
