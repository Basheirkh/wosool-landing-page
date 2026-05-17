// Agents grid + Automations + Workflow story modal screens.

const AgentsGrid = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 760, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 80px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, padding: '6px 12px', fontSize: 12, color: '#6B7280', background: '#fff' }}>↻ تحديث</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>الوكلاء</div>
          <div style={{ fontSize: 12, color: '#6B7280' }}>إدارة وإعدادات الوكلاء الأذكياء</div>
        </div>
      </div>
      <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', fontSize: 13 }}>
        <span style={{ fontWeight: 600 }}>3 من 3 وكلاء نشطون · النظام يعمل بنسبة 100%</span>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#D1FAE5', color: '#10B981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>✓</span>
      </div>

      {/* 4 agent cards stacked vertically — each ~150px tall so we can zoom into each */}
      <div data-agent="customer" style={{ flexShrink: 0 }}>
        <AgentCard color="#3B82F6" badge="نشط" badgeBg="#D1FAE5" name="وكيل العملاء" desc="يرد على رسائل العملاء تلقائياً عبر واتساب" rows={[['0','محادثات نشطة'],['25','رسائل اليوم'],['0','سلات متروكة']]} link="عرض الرسائل" />
      </div>
      <div data-agent="manager" style={{ flexShrink: 0 }}>
        <AgentCard color="#8B5CF6" badge="نشط" badgeBg="#D1FAE5" name="وكيل المدير" desc="ينفذ عمليات المتجر تلقائياً — طلبات وشحن وتقارير" rows={[['8','عمليات اليوم'],['0','إفادة الصباح'],['0','طلبات جديدة']]} link="عرض الطلبات" />
      </div>
      <div data-agent="intel" style={{ flexShrink: 0 }}>
        <AgentCard color="#F5A623" badge="غير مفعل" badgeBg="#FFF8E6" name="وكيل الذكاء" desc="يحلل أداء متجرك ويرسل تقارير صباحية ومسائية عبر واتساب" body={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, gap: 12 }}><div style={{ fontSize: 12, color: '#6B7280', textAlign: 'right', flex: 1 }}>تقارير دورية تلقائية بأهم مؤشرات أداء متجرك — مبيعات، تحويلات، عملاء جدد</div><button style={{ background: '#F5A623', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', whiteSpace: 'nowrap' }}>فعّل الآن</button></div>} link="الإعدادات" />
      </div>
      <div data-agent="sales" style={{ flexShrink: 0 }}>
        <AgentCard color="#10B981" badge="نشط" badgeBg="#D1FAE5" name="وكيل المبيعات" desc="يتفاعل مع زوار متجرك مباشرة ويحوّلهم لمشترين" rows={[['1','حالة الويدجت'],['0','زوار متصلون الآن'],['0','إجمالي الزوار']]} link="عرض الزوار" />
      </div>
    </div>
  </div>
));

// Card is now WIDE and rectangular (full row) — fixed height for consistency
const AgentCard = ({ color, badge, badgeBg, name, desc, rows, body, link }) => (
  <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10, height: 130, justifyContent: 'space-between' }}>
    {/* Top row: title block on right, badge + icon on left */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 6, background: badgeBg, color, whiteSpace: 'nowrap' }}>{badge}</span>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 4, lineHeight: 1.4 }}>{desc}</div>
      </div>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
        {color === '#3B82F6' ? '💬' : color === '#8B5CF6' ? '🔧' : color === '#F5A623' ? '🌐' : '📈'}
      </div>
    </div>
    {/* Stats row OR custom body */}
    {rows ? (
      <div style={{ display: 'flex', gap: 24, justifyContent: 'flex-end', borderTop: '1px solid #F3F4F6', paddingTop: 10 }}>
        {rows.map(([v, l], i) => (
          <div key={i} style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#1A1A1A', lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4 }}>{l}</div>
          </div>
        ))}
        <div style={{ marginInlineEnd: 'auto', fontSize: 12, color, fontWeight: 600, alignSelf: 'center' }}>{link} ‹</div>
      </div>
    ) : (
      <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: 10 }}>{body}</div>
    )}
  </div>
);

// ─── Automations grid ───────────────────────────────────────────────────────

const AutomationGrid = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>

    <div style={{ flex: 1, padding: '0 80px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: 4, border: '1px solid #E5E5E5', borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ background: '#fff', padding: '4px 8px', fontSize: 11 }}>↻</div>
          <div style={{ background: '#004D5B', color: '#fff', padding: '4px 8px', fontSize: 11 }}>▦</div>
          <div style={{ background: '#fff', padding: '4px 8px', fontSize: 11, color: '#9CA3AF' }}>☰</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>الأتمتة</div>
          <div style={{ fontSize: 10, color: '#6B7280' }}>15 سيناريو · 15 مفعّل</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, flex: 1, overflow: 'hidden' }}>
        <AutoCard hilite name="استرداد السلة المتروكة" desc="استرداد السلات المتروكة برسالة متعددة الخطوات" icon="🛒" channels={['واتساب','SMS','بريد']} />
        <AutoCard name="رعاية العملاء المحتملين" desc="ترحيب ورعاية العملاء المحتملين الجدد" icon="👥" channels={['واتساب']} />
        <AutoCard name="سلسلة الترحيب" desc="رسائل ترحيب مخططة للمستخدم الجديد" icon="👤" channels={['SMS','واتساب']} />
        <AutoCard name="إعادة تنشيط العملاء" desc="إعادة تفاعل العملاء عبر التخفيض مع تواصل تدريجي" icon="↻" channels={['واتساب','بريد','SMS']} />
        <AutoCard name="تقييم ما بعد الشراء" desc="طلب تقييم المنتجات والخدمات بعد التوصيل" icon="⭐" channels={['واتساب','بريد']} />
        <AutoCard name="تنبيهات عودة المخزون" desc="إشعار العملاء المرتقبين عند عودة المنتجات للمخزون" icon="🏷" channels={['بريد','واتساب']} />
        <AutoCard name="تنبيه انخفاض السعر" desc="تنبيه العملاء المتطلعين لأسعار المنتجات المنافسة" icon="🏷" channels={['واتساب','SMS','بريد']} />
        <AutoCard name="التصفح المتروك" desc="إعادة تفاعل العملاء عالية الاهتمام في الإنترنت، بدون إضافة للسلة" icon="🛒" channels={['واتساب','بريد']} />
        <AutoCard name="مراحل الولاء" desc="إرسال مكافآت وتذكرات عند بلوغ مراحل، برنامج الولاء" icon="🏆" channels={['SMS','بريد','واتساب']} />
      </div>
    </div>
    <BottomNav active="auto"/>
  </div>
));

const AutoCard = ({ name, desc, icon, channels, hilite }) => (
  <div data-auto={hilite ? 'cart-recovery' : ''} style={{
    background: '#fff', border: hilite ? '1.5px solid #10B981' : '1px solid #E5E5E5',
    boxShadow: hilite ? '0 0 0 3px rgba(16,185,129,0.12)' : 'none',
    borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'column', gap: 6,
    transition: 'border-color 200ms, box-shadow 200ms',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F0FDF4', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{icon}</div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A' }}>{name}</div>
        <div style={{ fontSize: 9, color: '#6B7280', marginTop: 2 }}>{desc}</div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
      <div style={{ width: 32, height: 18, borderRadius: 9, background: '#10B981', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 2, left: 2, width: 14, height: 14, borderRadius: '50%', background: '#fff' }}/>
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        <div data-eye={hilite ? 'true' : ''} style={{ width: 22, height: 18, borderRadius: 4, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>👁</div>
        {channels.map(c => (
          <span key={c} style={{
            fontSize: 8, fontWeight: 600, padding: '2px 6px', borderRadius: 4,
            background: c === 'واتساب' ? 'rgba(37,211,102,0.12)' : c === 'SMS' ? 'rgba(0,122,255,0.12)' : 'rgba(99,102,241,0.12)',
            color: c === 'واتساب' ? '#25D366' : c === 'SMS' ? '#007AFF' : '#6366F1',
          }}>{c}</span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Workflow modal (story-style) ───────────────────────────────────────────

const WorkflowModal = ({ step, total = 10 }) => {
  const steps = [
    { kind: 'TRIGGER', kindAr: 'WORKFLOW TRIGGER', title: 'إنشاء سلة', icon: '⚡', tone: 'green' },
    { kind: 'WAIT', kindAr: 'WAIT', title: 'ساعتان', icon: '🕐', tone: 'gray' },
    { kind: 'CONDITION', kindAr: 'CONDITION', title: 'تم الطلب؟', icon: '🪝', tone: 'orange' },
  ];
  const s = steps[step - 1] || steps[0];

  const toneBg = s.tone === 'green' ? '#1B5E5E' : s.tone === 'orange' ? '#7B3F0E' : '#2A2A2A';
  const toneIconBg = s.tone === 'green' ? '#73FCD7' : s.tone === 'orange' ? '#F5A623' : '#fff';
  const toneIconColor = s.tone === 'green' ? '#0B1A1F' : s.tone === 'orange' ? '#fff' : '#1A1A1A';

  return (
    <div style={{
      width: 320, background: toneBg, borderRadius: 12, padding: 16,
      color: '#fff', textAlign: 'center', position: 'relative',
      boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
      transition: 'background 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      {/* Top bar with progress bars */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 10 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 2, background: i < step ? '#fff' : 'rgba(255,255,255,0.25)', borderRadius: 1, transition: 'background 300ms' }}/>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>×</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>استرداد السلة المتروكة</div>
          <div style={{ fontSize: 10, opacity: 0.7 }}>{s.title}</div>
        </div>
      </div>
      <div style={{ width: 56, height: 56, borderRadius: 12, background: toneIconBg, color: toneIconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '14px auto 8px' }}>{s.icon}</div>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', opacity: 0.8 }}>{s.kindAr}</div>
      <div style={{ fontSize: 22, fontWeight: 700, margin: '4px 0 2px' }}>{s.title}</div>
      <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 12 }}>Step {step} of {total}</div>
      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 12, fontSize: 11, lineHeight: 1.7, textAlign: 'right' }}>
        مرحباً <span style={{ direction: 'ltr' }}>{'{{name}}'}</span>! 👋<br/>
        لاحظنا أن سلتك في <span style={{ direction: 'ltr' }}>{'{{store}}'}</span> بقيمة <span style={{ direction: 'ltr' }}>{'{{total}}'}</span> ريال لا تزال تنتظرك 🛒<br/>
        أتمم طلبك الآن قبل نفاد الكميات!
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>‹</div>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>›</div>
      </div>
    </div>
  );
};

const WorkflowStoryScreen = React.forwardRef(({ step }, ref) => (
  <div ref={ref} style={{
    width: 1000, height: 500, background: '#F8F8F8', display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--w-font-ar)', direction: 'rtl', overflow: 'hidden', position: 'relative',
  }}>
    <TopBar />
    <Breadcrumb items={['تطبيقاتي', 'وصول - موظف متجرك الذكي', 'إستخدام التطبيق']}/>
    {/* Dim background */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 5 }}/>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 6 }}>
      <WorkflowModal step={step} />
    </div>
  </div>
));

Object.assign(window, { AgentsGrid, AgentCard, AutomationGrid, AutoCard, WorkflowModal, WorkflowStoryScreen });
