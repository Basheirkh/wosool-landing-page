// Screens for the Wosool walkthrough animation.
// Each screen recreates the exact UI from the screenshots, sized to fit
// inside a 1000x500 area (matches screenshot aspect). All in RTL Arabic.

// ─── Shared chrome ──────────────────────────────────────────────────────────

const TopBar = ({ rightLabel = "تطبيقاتي" }) => (
  <div style={{
    height: 38, background: '#fff', borderBottom: '1px solid #E5E5E5',
    display: 'flex', alignItems: 'center', padding: '0 24px',
    justifyContent: 'space-between', flexShrink: 0,
  }}>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      border: '1px solid #B4FFE8', borderRadius: 6, padding: '4px 10px',
      fontSize: 12, color: '#004D5B', background: '#E7FFF7',
    }}>
      <span style={{ width: 14, height: 14, borderRadius: '50%', border: '1.5px solid #004D5B', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize: 10, fontWeight: 700 }}>؟</span>
      <span>مساعدة</span>
    </div>
    <div style={{ fontSize: 13, color: '#1A1A1A' }}>{rightLabel}</div>
  </div>
);

const Breadcrumb = ({ items }) => (
  <div style={{
    padding: '12px 24px', fontSize: 12, color: '#6B7280',
    display: 'flex', justifyContent: 'flex-end', gap: 6, flexShrink: 0,
  }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        <span style={{ color: i === items.length - 1 ? '#1A1A1A' : '#6B7280', fontWeight: i === items.length - 1 ? 600 : 400 }}>{it}</span>
        {i < items.length - 1 && <span style={{ color: '#9CA3AF' }}>›</span>}
      </React.Fragment>
    ))}
  </div>
);

const BottomNav = ({ active = 'home' }) => {
  const items = [
    { id: 'home', label: 'الرئيسية', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { id: 'msg',  label: 'الرسل', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
    { id: 'staff',label: 'الموظفون', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' },
    { id: 'auto', label: 'الأتمتة', icon: 'M13 2L3 14l9 0-1 8 10-12-9 0 1-8z' },
    { id: 'set',  label: 'الإعدادات', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' },
  ];
  return (
    <div style={{
      borderTop: '1px solid #E5E5E5', background: '#fff',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      padding: '8px 0', flexShrink: 0,
    }}>
      {items.map(it => {
        const on = active === it.id;
        return (
          <div key={it.id} data-nav={it.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            color: on ? '#004D5B' : '#9CA3AF', fontSize: 10,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              {it.icon.split('M').filter(Boolean).map((d, i) => <path key={i} d={'M' + d} />)}
            </svg>
            <span>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
};

// Wosool infinity logo (mint background variant) — uses real symbol path
const WosoolInfinity = ({ size = 28, color = '#0B1A1F' }) => (
  <svg width={size * 1.55} height={size} viewBox="74.424 10.582 46.872 28.387" fill="none">
    <path fill={color} d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"/>
  </svg>
);

const WosoolMark = ({ size = 28, bg = '#73FCD7', dark = '#0B1A1F' }) => (
  <div style={{
    width: size, height: size, borderRadius: 6, background: bg,
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    <WosoolInfinity size={size * 0.55} color={dark}/>
  </div>
);

// ─── Screen 1: Salla Apps (App Detail Page) ────────────────────────────────

const SallaAppDetail = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <div style={{
      height: 38, background: '#fff', borderBottom: '1px solid #E5E5E5',
      display: 'flex', alignItems: 'center', padding: '0 24px',
      justifyContent: 'space-between', flexShrink: 0,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        border: '1px solid #B4FFE8', borderRadius: 6, padding: '4px 10px',
        fontSize: 12, color: '#004D5B', background: '#E7FFF7',
      }}>
        <span>؟ مساعدة</span>
      </div>
      <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#1A1A1A' }}>
        <span>متجر التطبيقات</span><span>تطبيقاتي</span><span>الإعدادات</span>
      </div>
    </div>

    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي']}/>

    <div style={{ padding: '0 24px', display: 'flex', gap: 12, marginBottom: 8 }}>
      <div style={{ flex: 1, border: '1px solid #E5E5E5', borderRadius: 8, background: '#fff', padding: '8px 12px', fontSize: 12, color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>🔍</span>
        <span>ابحث باسم التطبيق أو الخدمة التي تحتاجها</span>
      </div>
      <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, background: '#fff', padding: '8px 12px', fontSize: 12, color: '#6B7280' }}>تصفية ⇋</div>
    </div>

    <div style={{ flex: 1, padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 240px 200px', gap: 12, minHeight: 0 }}>
      {/* Main details column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-start' }}>
          <button data-action="use-app" style={{
            border: '1px solid #004D5B', background: '#fff', color: '#004D5B', borderRadius: 8,
            padding: '8px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer',
          }}>استخدام التطبيق</button>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#6B7280', background: '#fff' }}>الدعم 🎧</div>
            <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#6B7280', background: '#fff' }}>⋯</div>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#004D5B', marginBottom: 12 }}>تفاصيل التطبيق</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <WosoolMark size={36} />
            <div style={{ fontSize: 14, fontWeight: 700 }}>وصول - موظف متجرك الذكي</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, fontSize: 11 }}>
            <div><div style={{ color: '#6B7280', marginBottom: 2 }}>المطور</div><div style={{ fontWeight: 600 }}>سبلكروز</div></div>
            <div><div style={{ color: '#6B7280', marginBottom: 2 }}>باقة التطبيق</div><div style={{ fontWeight: 600 }}>مجاني ⓘ</div></div>
            <div><div style={{ color: '#6B7280', marginBottom: 2 }}>تاريخ بداية الاشتراك</div><div style={{ fontWeight: 600 }}>2026-04-29</div></div>
          </div>
          <div style={{ marginTop: 14, background: '#FFF8E6', border: '1px solid rgba(245,166,35,0.25)', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#92400e', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#F5A623' }}>▶</span>
            <span>تعرف على كيفية البدء مع التطبيق</span>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: 16, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 14, color: '#9CA3AF' }}>×</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#004D5B', marginBottom: 8 }}>نبذة عن التطبيق</div>
          <div style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.6, direction: 'ltr', textAlign: 'left' }}>
            WOSOOL AI Agent is an intelligent system using advanced AI to enhance communication, boost user experience, and execute tasks with precision and efficiency across sectors.
          </div>
        </div>
      </div>

      {/* Middle: app preview area */}
      <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: 16, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600 }}>
          <span>وصول - موظف متجرك الذكي</span>
          <WosoolMark size={28} />
        </div>
      </div>

      {/* Right: filter panel */}
      <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#6B7280' }}>
        <div style={{ color: '#1A1A1A', fontWeight: 600, paddingBottom: 6, borderBottom: '1px solid #E5E5E5' }}>الكل</div>
        {['تطبيقات مفعلة', 'تطبيقات غير مفعلة', 'بانتظار الدفع', 'تطلب تحديث', 'تطلب تجديد اشتراك', 'إشتراك ينتهي قريباً', 'تطبيقات محذوفة', 'تطبيقات خاصة'].map(t => (
          <div key={t} style={{ padding: '4px 0' }}>{t}</div>
        ))}
      </div>
    </div>
    <div style={{ height: 16 }}/>
  </div>
));

// ─── Screen 2: Dashboard (Disconnected state with warning) ───────────────────

const DashboardWarning = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 200px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, padding: '6px 12px', fontSize: 12, color: '#6B7280', background: '#fff', display:'inline-flex', alignItems:'center', gap: 6 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/></svg>
          تحديث
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A' }}>الرئيسية</div>
          <div style={{ fontSize: 11, color: '#6B7280' }}>نظرة عامة على أداء متجرك</div>
        </div>
      </div>

      {/* System health 67% (warning) */}
      <div data-id="health-strip" style={{
        background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10,
        padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, fontWeight: 600 }}>صحة النظام 67%</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 4, fontSize: 9, color: '#6B7280' }}>
              <span>● واتساب</span><span>● العملاء</span><span style={{ color: '#10B981' }}>● المدير</span>
            </div>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FFF8E6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5A623' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
        </div>
      </div>

      {/* WhatsApp disconnected warning */}
      <div data-id="whatsapp-warn" style={{
        background: '#FFF0F0', border: '1px solid rgba(245,67,74,0.25)', borderRadius: 10,
        padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div data-id="connect-now-btn" style={{ background: '#fff', border: '1px solid rgba(245,67,74,0.35)', borderRadius: 8, padding: '6px 14px', fontSize: 11, color: '#F5434A', fontWeight: 600 }}>ربط الآن ‹</div>
        <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#F5434A' }}>واتساب غير متصل</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5434A" strokeWidth="1.75"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
        </div>
      </div>

      {/* Today stats */}
      <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4, textAlign: 'right' }}>اليوم</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ marginInlineStart: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>8</div>
            <div style={{ fontSize: 10, color: '#6B7280' }}>طلبات اليوم</div>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#EDE9FE', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ marginInlineStart: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
            <div style={{ fontSize: 10, color: '#6B7280' }}>رسائل اليوم</div>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#DBEAFE', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4, textAlign: 'right' }}>أداء الوكلاء اليوم</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <AgentRow color="#3B82F6" name="وكيل العملاء" status="نشط" metric="25" metricL="رسالة اليوم" />
        <AgentRow color="#8B5CF6" name="وكيل المدير" status="نشط" metric="8" metricL="طلب اليوم" />
      </div>
    </div>

    <BottomNav active="home"/>
  </div>
));

const AgentRow = ({ color, name, status, metric, metricL, icon }) => (
  <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontSize: 16, fontWeight: 800, color, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{metric}</div>
      <div style={{ fontSize: 9, color: '#6B7280', marginTop: 2 }}>{metricL}</div>
    </div>
    <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 12, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 9, color: '#10B981' }}>{status}</div>
      </div>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', position: 'relative' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <div style={{ position: 'absolute', bottom: -2, right: -2, width: 8, height: 8, borderRadius: '50%', background: '#10B981', border: '2px solid #fff' }}/>
      </div>
    </div>
  </div>
);

Object.assign(window, { TopBar, Breadcrumb, BottomNav, WosoolMark, WosoolInfinity, SallaAppDetail, DashboardWarning, AgentRow });
