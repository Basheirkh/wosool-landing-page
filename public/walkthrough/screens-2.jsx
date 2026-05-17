// More screens: QR scan, OTP, success, dashboard active, agents, automation, workflow story.

Object.assign(STRINGS.ar, {
  sc2_breadcrumb_apps: "تطبيقاتي",
  sc2_breadcrumb_wosool: "وصول - موظف متجرك الذكي",
  sc2_breadcrumb_usage: "إستخدام التطبيق",

  // QR Screen
  sc2_qr_warn_title: "استخدم رقم واتساب المتجر",
  sc2_qr_warn_body: "هذا الرقم سيستقبل رسائل العملاء ويرد عليهم تلقائياً. استخدم الرقم المخصص لمتجرك، وليس رقمك الشخصي.",
  sc2_qr_steps_title: "خطوات ربط رقم المتجر",
  sc2_qr_step_1: "افتح واتساب على الجوال المخصص للمتجر",
  sc2_qr_step_2: "اذهب إلى الإعدادات › الأجهزة المرتبطة",
  sc2_qr_step_3: "اضغط على \"ربط جهاز\" ثم امسح الرمز أدناه",
  sc2_qr_waiting: "في انتظار المسح...",

  // OTP Screen
  sc2_otp_link_title: "ربط واتساب المتجر",
  sc2_otp_step_store: "رقم المتجر",
  sc2_otp_step_manager: "رقم المدير",
  sc2_otp_step_ready: "جاهز",
  sc2_otp_store_linked_title: "تم ربط رقم المتجر!",
  sc2_otp_store_linked_desc: "هذا الرقم سيستقبل رسائل العملاء ويرد عليهم تلقائياً",
  sc2_otp_manager_label: "رقم المدير (صاحب المتجر)",
  sc2_otp_manager_hint: "أدخل رقم واتساب المدير — سنرسل رمز تحقق عبر واتساب لتفعيله",
  sc2_otp_send_btn: "إرسال رمز التحقق",
  sc2_otp_skip_btn: "تخطي",

  // Success Screen
  sc2_success_title: "متجرك جاهز!",
  sc2_success_desc: "رقم المتجر مربوط والموظفون جاهزون للعمل",
  sc2_success_cta: "الذهاب للرئيسية",

  // Dashboard Active
  sc2_dash_refresh: "تحديث",
  sc2_dash_home_title: "الرئيسية",
  sc2_dash_home_subtitle: "نظرة عامة على أداء متجرك",
  sc2_dash_health_label: "صحة النظام 100%",
  sc2_dash_health_whatsapp: "واتساب",
  sc2_dash_health_customers: "العملاء",
  sc2_dash_health_manager: "المدير",
  sc2_dash_today: "اليوم",
  sc2_dash_orders_today: "طلبات اليوم",
  sc2_dash_messages_today: "رسائل اليوم",
  sc2_dash_agents_perf_today: "أداء الوكلاء اليوم",
  sc2_dash_agent_customers: "وكيل العملاء",
  sc2_dash_agent_manager: "وكيل المدير",
  sc2_dash_agent_sales: "وكيل المبيعات",
  sc2_dash_agent_status_active: "نشط",
  sc2_dash_metric_message_today: "رسالة اليوم",
  sc2_dash_metric_order_today: "طلب اليوم",
  sc2_dash_metric_total_visitors: "إجمالي الزوار",
});

Object.assign(STRINGS.en, {
  sc2_breadcrumb_apps: "My Apps",
  sc2_breadcrumb_wosool: "Wosool - Your Smart Store Employee",
  sc2_breadcrumb_usage: "Use App",

  // QR Screen
  sc2_qr_warn_title: "Use your store's WhatsApp number",
  sc2_qr_warn_body: "This number will receive customer messages and reply automatically. Use a dedicated store number, not your personal one.",
  sc2_qr_steps_title: "Steps to link the store number",
  sc2_qr_step_1: "Open WhatsApp on the store's dedicated phone",
  sc2_qr_step_2: "Go to Settings › Linked Devices",
  sc2_qr_step_3: "Tap \"Link a device\" then scan the code below",
  sc2_qr_waiting: "Waiting for scan...",

  // OTP Screen
  sc2_otp_link_title: "Link store WhatsApp",
  sc2_otp_step_store: "Store number",
  sc2_otp_step_manager: "Manager number",
  sc2_otp_step_ready: "Ready",
  sc2_otp_store_linked_title: "Store number linked!",
  sc2_otp_store_linked_desc: "This number will receive customer messages and reply automatically",
  sc2_otp_manager_label: "Manager number (store owner)",
  sc2_otp_manager_hint: "Enter the manager's WhatsApp number — we'll send a verification code via WhatsApp to activate it",
  sc2_otp_send_btn: "Send verification code",
  sc2_otp_skip_btn: "Skip",

  // Success Screen
  sc2_success_title: "Your store is ready!",
  sc2_success_desc: "Store number linked and agents are ready to work",
  sc2_success_cta: "Go to home",

  // Dashboard Active
  sc2_dash_refresh: "Refresh",
  sc2_dash_home_title: "Home",
  sc2_dash_home_subtitle: "Overview of your store performance",
  sc2_dash_health_label: "System health 100%",
  sc2_dash_health_whatsapp: "WhatsApp",
  sc2_dash_health_customers: "Customers",
  sc2_dash_health_manager: "Manager",
  sc2_dash_today: "Today",
  sc2_dash_orders_today: "Orders today",
  sc2_dash_messages_today: "Messages today",
  sc2_dash_agents_perf_today: "Agent performance today",
  sc2_dash_agent_customers: "Customer agent",
  sc2_dash_agent_manager: "Manager agent",
  sc2_dash_agent_sales: "Sales agent",
  sc2_dash_agent_status_active: "Active",
  sc2_dash_metric_message_today: "messages today",
  sc2_dash_metric_order_today: "orders today",
  sc2_dash_metric_total_visitors: "total visitors",
});

// ─── Screen 3: QR Scan Screen ──────────────────────────────────────────────

const QRScreen = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={[t('sc2_breadcrumb_apps'), t('sc2_breadcrumb_wosool'), t('sc2_breadcrumb_usage')]}/>

    <div style={{ flex: 1, padding: '0 240px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
      <div style={{
        background: '#FFF8E6', border: '1px solid rgba(245,166,35,0.25)', borderRadius: 8,
        padding: '8px 14px', textAlign: 'right',
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#92400e', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6 }}>
          {t('sc2_qr_warn_title')} <span>📞</span>
        </div>
        <div style={{ fontSize: 10, color: '#92400e', marginTop: 4 }}>
          {t('sc2_qr_warn_body')}
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '10px 14px' }}>
        <div style={{ fontSize: 10, color: '#6B7280', textAlign: 'right', marginBottom: 6 }}>{t('sc2_qr_steps_title')}</div>
        {[
          [toLocaleDigits('١'), t('sc2_qr_step_1')],
          [toLocaleDigits('٢'), t('sc2_qr_step_2')],
          [toLocaleDigits('٣'), t('sc2_qr_step_3')],
        ].map(([n, label]) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', justifyContent: 'flex-end', fontSize: 11, color: '#1A1A1A' }}>
            <span>{label}</span>
            <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#E6F2F4', color: '#004D5B', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>
          </div>
        ))}
      </div>

      <div data-id="qr-card" style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1, minHeight: 0 }}>
        <QRCode size={160} />
        <div style={{ fontSize: 11, color: '#6B7280', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>{t('sc2_qr_waiting')}</span>
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
    <Breadcrumb items={[t('sc2_breadcrumb_apps'), t('sc2_breadcrumb_wosool'), t('sc2_breadcrumb_usage')]}/>

    <div style={{ flex: 1, padding: '0 240px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 700, color: '#1A1A1A' }}>
        {t('sc2_otp_link_title')} <span style={{ color: '#004D5B' }}>→</span>
      </div>

      {/* Stepper */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          { n: toLocaleDigits('١'), label: t('sc2_otp_step_store'), state: 'done' },
          { n: toLocaleDigits('٢'), label: t('sc2_otp_step_manager'), state: 'active' },
          { n: toLocaleDigits('٣'), label: t('sc2_otp_step_ready'), state: 'todo' },
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
        <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A' }}>{t('sc2_otp_store_linked_title')}</div>
        <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4 }}>{t('sc2_otp_store_linked_desc')}</div>
      </div>

      <div data-id="otp-card" style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1A1A', textAlign: 'right', marginBottom: 4 }}>{t('sc2_otp_manager_label')}</div>
        <div style={{ fontSize: 10, color: '#004D5B', textAlign: 'right', marginBottom: 10 }}>{t('sc2_otp_manager_hint')}</div>
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
            <span>📤</span> {t('sc2_otp_send_btn')}
          </button>
          <button style={{ background: '#fff', color: '#6B7280', border: '1px solid #E5E5E5', borderRadius: 8, padding: '8px 16px', fontSize: 12, fontFamily: 'inherit' }}>{t('sc2_otp_skip_btn')}</button>
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
    <Breadcrumb items={[t('sc2_breadcrumb_apps'), t('sc2_breadcrumb_wosool'), t('sc2_breadcrumb_usage')]}/>

    <div style={{ flex: 1, padding: '0 240px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0, justifyContent: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 700, color: '#1A1A1A' }}>
        {t('sc2_otp_link_title')} <span style={{ color: '#004D5B' }}>→</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[t('sc2_otp_step_store'), t('sc2_otp_step_manager'), t('sc2_otp_step_ready')].map((label, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
            <div style={{ height: 3, width: '100%', background: '#004D5B', borderRadius: 2 }}/>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#1A1A1A' }}>{[toLocaleDigits('١'),toLocaleDigits('٢'),toLocaleDigits('٣')][i]} {label}</div>
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
        <div style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A' }}>{t('sc2_success_title')}</div>
        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>{t('sc2_success_desc')}</div>
        <button style={{ marginTop: 14, background: '#004D5B', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
          {t('sc2_success_cta')}
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
    <Breadcrumb items={[t('sc2_breadcrumb_apps'), t('sc2_breadcrumb_wosool'), t('sc2_breadcrumb_usage')]}/>

    <div style={{ flex: 1, padding: '0 200px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, padding: '6px 12px', fontSize: 12, color: '#6B7280', background: '#fff' }}>↻ {t('sc2_dash_refresh')}</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A' }}>{t('sc2_dash_home_title')}</div>
          <div style={{ fontSize: 11, color: '#6B7280' }}>{t('sc2_dash_home_subtitle')}</div>
        </div>
      </div>

      <div style={{
        background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10,
        padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, fontWeight: 600 }}>{t('sc2_dash_health_label')}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 4, fontSize: 9, color: '#10B981' }}>
              <span>● {t('sc2_dash_health_whatsapp')}</span><span>● {t('sc2_dash_health_customers')}</span><span>● {t('sc2_dash_health_manager')}</span>
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

      <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4, textAlign: 'right' }}>{t('sc2_dash_today')}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ marginInlineStart: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>{toLocaleDigits('8')}</div>
            <div style={{ fontSize: 9, color: '#6B7280' }}>{t('sc2_dash_orders_today')}</div>
          </div>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: '#EDE9FE', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🔧</div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ marginInlineStart: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>{toLocaleDigits('25')}</div>
            <div style={{ fontSize: 9, color: '#6B7280' }}>{t('sc2_dash_messages_today')}</div>
          </div>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: '#DBEAFE', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>💬</div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4, textAlign: 'right' }}>{t('sc2_dash_agents_perf_today')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <AgentRow color="#3B82F6" name={t('sc2_dash_agent_customers')} status={t('sc2_dash_agent_status_active')} metric={toLocaleDigits('25')} metricL={t('sc2_dash_metric_message_today')} />
        <AgentRow color="#8B5CF6" name={t('sc2_dash_agent_manager')} status={t('sc2_dash_agent_status_active')} metric={toLocaleDigits('8')} metricL={t('sc2_dash_metric_order_today')} />
        <AgentRow color="#10B981" name={t('sc2_dash_agent_sales')} status={t('sc2_dash_agent_status_active')} metric={toLocaleDigits('0')} metricL={t('sc2_dash_metric_total_visitors')} />
      </div>
    </div>

    <BottomNav active="home"/>
    <style>{`@keyframes pulse { 0%,100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.4); opacity: 0; } }`}</style>
  </div>
));

Object.assign(window, { QRScreen, OTPScreen, SuccessScreen, DashboardActive, QRCode });
