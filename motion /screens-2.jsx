// More screens: QR scan, OTP, success, dashboard active, agents, automation, workflow story.

// ─── Screen 3: QR Scan Screen ──────────────────────────────────────────────

const QRScreen = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 240px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
      <div style={{
        background: '#FFF8E6', border: '1px solid rgba(245,166,35,0.25)', borderRadius: 8,
        padding: '8px 14px', textAlign: 'right',
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#92400e', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6 }}>
          استخدم رقم واتساب المتجر <span>📞</span>
        </div>
        <div style={{ fontSize: 10, color: '#92400e', marginTop: 4 }}>
          هذا الرقم سيستقبل رسائل العملاء ويرد عليهم تلقائياً. استخدم الرقم المخصص لمتجرك، وليس رقمك الشخصي.
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '10px 14px' }}>
        <div style={{ fontSize: 10, color: '#6B7280', textAlign: 'right', marginBottom: 6 }}>خطوات ربط رقم المتجر</div>
        {[
          ['١', 'افتح واتساب على الجوال المخصص للمتجر'],
          ['٢', 'اذهب إلى الإعدادات › الأجهزة المرتبطة'],
          ['٣', 'اضغط على "ربط جهاز" ثم امسح الرمز أدناه'],
        ].map(([n, t]) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', justifyContent: 'flex-end', fontSize: 11, color: '#1A1A1A' }}>
            <span>{t}</span>
            <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#E6F2F4', color: '#004D5B', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>
          </div>
        ))}
      </div>

      <div data-id="qr-card" style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1, minHeight: 0 }}>
        <QRCode size={160} />
        <div style={{ fontSize: 11, color: '#6B7280', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>في انتظار المسح...</span>
          <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', border: '2px solid #004D5B', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }}/>
        </div>
      </div>
    </div>

    <BottomNav active="msg"/>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
));

const QRCode = ({ size = 160 }) => {
  // Pseudo QR — generated grid pattern with the wosool logo center
  const cells = 21;
  const c = size / cells;
  const grid = React.useMemo(() => {
    const g = [];
    for (let r = 0; r < cells; r++) {
      const row = [];
      for (let col = 0; col < cells; col++) {
        // finder squares in 3 corners
        const inFinder = (r < 7 && col < 7) || (r < 7 && col >= cells - 7) || (r >= cells - 7 && col < 7);
        if (inFinder) {
          const dr = Math.min(r, cells - 1 - r);
          const dc = Math.min(col, cells - 1 - col);
          // Approximate 3 corners
          let on = false;
          const tlx = r < 7 && col < 7;
          const trx = r < 7 && col >= cells - 7;
          const blx = r >= cells - 7 && col < 7;
          if (tlx || trx || blx) {
            const lr = tlx || trx ? r : cells - 1 - r;
            const lc = tlx || blx ? col : cells - 1 - col;
            on = lr === 0 || lr === 6 || lc === 0 || lc === 6 || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4);
          }
          row.push(on);
        } else {
          // pseudo random based on coords
          row.push(((r * 31 + col * 17 + r * col) % 7) < 3);
        }
      }
      g.push(row);
    }
    return g;
  }, []);
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size}>
        {grid.map((row, r) => row.map((on, col) => on ? (
          <rect key={`${r}-${col}`} x={col * c} y={r * c} width={c} height={c} fill="#1e40af"/>
        ) : null))}
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: size * 0.22, height: size * 0.22, borderRadius: 6, background: '#73FCD7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size * 0.16} height={size * 0.10} viewBox="0 0 24 14" fill="none">
            <path d="M6 7c0-2.5 2-4 4-4s2.5 1.5 4 4 1.5 4 4 4 4-1.5 4-4-1.5-4-4-4-2.5 1.5-4 4-1.5 4-4 4-4-1.5-4-4z" stroke="#0B1A1F" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

// ─── Screen 4: OTP / Manager number ─────────────────────────────────────────

const OTPScreen = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 240px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 700, color: '#1A1A1A' }}>
        ربط واتساب المتجر <span style={{ color: '#004D5B' }}>→</span>
      </div>

      {/* Stepper */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          { n: '١', label: 'رقم المتجر', state: 'done' },
          { n: '٢', label: 'رقم المدير', state: 'active' },
          { n: '٣', label: 'جاهز', state: 'todo' },
        ].map(s => (
          <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
            <div style={{ height: 3, width: '100%', background: s.state === 'done' || s.state === 'active' ? '#004D5B' : '#D1D5DB', borderRadius: 2 }}/>
            <div style={{ fontSize: 11, fontWeight: 600, color: s.state === 'todo' ? '#9CA3AF' : '#1A1A1A' }}>{s.n} {s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#D1FAE5', color: '#10B981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A' }}>تم ربط رقم المتجر!</div>
        <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4 }}>هذا الرقم سيستقبل رسائل العملاء ويرد عليهم تلقائياً</div>
      </div>

      <div data-id="otp-card" style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1A1A', textAlign: 'right', marginBottom: 4 }}>رقم المدير (صاحب المتجر)</div>
        <div style={{ fontSize: 10, color: '#004D5B', textAlign: 'right', marginBottom: 10 }}>أدخل رقم واتساب المدير — سنرسل رمز تحقق عبر واتساب لتفعيله</div>
        <div data-id="phone-input" style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, border: '1px solid #E5E5E5', borderRadius: 8, padding: '8px 10px', fontSize: 12, background: '#fff' }}>
            <div style={{ width: 18, height: 12, background: 'linear-gradient(#0a7c3e 50%, #fff 50%)', borderRadius: 2 }}/>
            <span>+966</span>
            <span style={{ color: '#9CA3AF' }}>▾</span>
          </div>
          <div style={{ flex: 1, border: '1px solid #E5E5E5', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#9CA3AF', background: '#fff', textAlign: 'right', direction: 'ltr', fontFamily: 'var(--w-font-mono)' }}>5XXXXXXXX</div>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-start' }}>
          <button data-id="send-otp-btn" style={{ background: '#004D5B', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 600, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <span>📤</span> إرسال رمز التحقق
          </button>
          <button style={{ background: '#fff', color: '#6B7280', border: '1px solid #E5E5E5', borderRadius: 8, padding: '8px 16px', fontSize: 12, fontFamily: 'inherit' }}>تخطي</button>
        </div>
      </div>
    </div>

    <BottomNav active="msg"/>
  </div>
));

// ─── Screen 5: Success ──────────────────────────────────────────────────────

const SuccessScreen = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 240px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0, justifyContent: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 700, color: '#1A1A1A' }}>
        ربط واتساب المتجر <span style={{ color: '#004D5B' }}>→</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {['رقم المتجر', 'رقم المدير', 'جاهز'].map((label, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
            <div style={{ height: 3, width: '100%', background: '#004D5B', borderRadius: 2 }}/>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#1A1A1A' }}>{['١','٢','٣'][i]} {label}</div>
          </div>
        ))}
      </div>

      <div data-id="success-card" style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '24px 16px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Pulse ring */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 8 }}>
          <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '2px solid #10B981', opacity: 0.3, animation: 'pulse-success 2s ease-out infinite' }}/>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#D1FAE5', color: '#10B981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A' }}>متجرك جاهز!</div>
        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>رقم المتجر مربوط والموظفون جاهزون للعمل</div>
        <button style={{ marginTop: 14, background: '#004D5B', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
          الذهاب للرئيسية
        </button>
      </div>
    </div>

    <BottomNav active="msg"/>
    <style>{`@keyframes pulse-success { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }`}</style>
  </div>
));

// ─── Screen 6: Dashboard ACTIVE (100%) ─────────────────────────────────────

const DashboardActive = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 200px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, padding: '6px 12px', fontSize: 12, color: '#6B7280', background: '#fff' }}>↻ تحديث</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A' }}>الرئيسية</div>
          <div style={{ fontSize: 11, color: '#6B7280' }}>نظرة عامة على أداء متجرك</div>
        </div>
      </div>

      <div style={{
        background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10,
        padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, fontWeight: 600 }}>صحة النظام 100%</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 4, fontSize: 9, color: '#10B981' }}>
              <span>● واتساب</span><span>● العملاء</span><span>● المدير</span>
            </div>
          </div>
          <div style={{ position: 'relative', width: 28, height: 28 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10B981', opacity: 0.4, animation: 'pulse 2.5s ease-in-out infinite' }}/>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4, textAlign: 'right' }}>اليوم</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ marginInlineStart: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>8</div>
            <div style={{ fontSize: 9, color: '#6B7280' }}>طلبات اليوم</div>
          </div>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: '#EDE9FE', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🔧</div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ marginInlineStart: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>25</div>
            <div style={{ fontSize: 9, color: '#6B7280' }}>رسائل اليوم</div>
          </div>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: '#DBEAFE', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>💬</div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4, textAlign: 'right' }}>أداء الوكلاء اليوم</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <AgentRow color="#3B82F6" name="وكيل العملاء" status="نشط" metric="25" metricL="رسالة اليوم" />
        <AgentRow color="#8B5CF6" name="وكيل المدير" status="نشط" metric="8" metricL="طلب اليوم" />
        <AgentRow color="#10B981" name="وكيل المبيعات" status="نشط" metric="0" metricL="إجمالي الزوار" />
      </div>
    </div>

    <BottomNav active="home"/>
    <style>{`@keyframes pulse { 0%,100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.4); opacity: 0; } }`}</style>
  </div>
));

Object.assign(window, { QRScreen, OTPScreen, SuccessScreen, DashboardActive, QRCode });
