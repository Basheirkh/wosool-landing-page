// Split-screen promo scenes — WhatsApp on the left, storefront on the right.
// Stage is 1280x720. Layout:
//   WhatsApp panel:  490x680  at (50, 30)
//   Storefront panel: 700x500 at (560, 100)   — slightly tilted toward focus
// Caption strip below at y = 720 (using StageCaption).

Object.assign(STRINGS.ar, {
  // Common WA headers
  pr_wa_owner_agent_title: 'وكيل المدير - وصول',
  pr_wa_status_online: 'متصل الآن',
  pr_wa_status_morning: '8:00 صباحاً',
  pr_wa_store_name_ahmad: 'متجر أحمد',
  pr_wa_store_name_coffee: 'متجر القهوة المختصة',
  pr_wa_day_today: 'اليوم',
  // Brand intro / closing
  pr_brand_name: 'وصول',
  pr_brand_tagline: 'موظف متجرك الذكي',
  pr_brand_subtagline: 'كل شيء من واتساب',
  pr_brand_now_on_salla: 'متوفر الآن على سلة',
  // Captions
  pr_cap_product_creation: 'وكيل المدير — أنشئ منتجات من رسالة واتساب',
  pr_cap_voice_ship: '🎤 يفهم الصوت — يتحقق وينفّذ فوراً',
  pr_cap_coupon: '🏷️ كوبونات وعروض — بأمر واحد',
  pr_cap_morning_report: '📊 تقارير ذكية — اقتراحات + تنفيذ فوري',
  pr_cap_customer_chat: '🤖 وكيل العملاء — يرد ويبيع 24/7',
  pr_cap_cart_recovery: '🛒 استرجاع سلات متروكة — تلقائي بكوبونات مخصصة',
  pr_cap_sales_agent: '🛒 وكيل المبيعات — يفهم، يقترح، يوصّلك، ويبيع',
  pr_cap_sales_followup: '🔥 من الموقع → لواتساب → باسمها وسلتها — تلقائي',
  // Transitions
  pr_transition_morning: '☀️ صباح اليوم التالي...',
  pr_transition_morning_sub: 'وصول يحضر تقريرك تلقائياً',
  pr_transition_customer_agent: '🤖 في نفس الوقت... وكيل العملاء يشتغل',
  pr_transition_followup_3min: 'بعد 3 دقائق... على واتساب العميلة 📱',
  pr_transition_followup_sub: 'وصول يتابع تلقائياً — بالاسم، وبالسلة',
  // Scene 13 — Product creation
  pr_pc_user_msg: `السلام عليكم 🙏
أبي أضيف منتج جديد:
كوب حراري ذكي
السعر: 149 ريال • الكمية: 30`,
  pr_pc_agent_created: 'تم إنشاء المنتج وإضافته لمتجرك ✅',
  pr_pc_product_title: 'كوب حراري ذكي',
  pr_pc_product_desc: 'يحافظ على الحرارة حتى 12 ساعة',
  pr_pc_agent_followup: 'تحت قسم «أدوات منزلية» — تقدر تعدله أي وقت.',
  pr_pc_empty_msg: 'متجرك جاهز — أضف أول منتج',
  pr_pc_time_1030: '10:30 ص',
  pr_pc_time_1031: '10:31 ص',
  pr_pc_time_1032: '10:32 ص',
  // Scene 14 — Voice ship / inventory
  pr_vs_time_1042: '10:42 ص',
  pr_vs_time_1043: '10:43 ص',
  pr_vs_voice_duration: '0:05',
  pr_vs_voice_transcript: '«كم منتج عندي في المتجر؟ وأي منتج مخزونه خلص؟»',
  pr_vs_agent_inventory: `ابشر 👍
عندك ٣٥ منتج في المتجر.

⚠️ ٣ منتجات مخزونها صفر:
• حقيبة جلد بني
• ساعة كلاسيك
• نظارة شمسية

تبي أخفيهم لين ما يتوفر مخزون؟`,
  pr_vs_user_yes_hide: 'أيوا أخفيهم',
  pr_vs_agent_hidden: `✅ تم إخفاء ٣ منتجات.
يرجعون يظهرون أول ما تحدّث المخزون 👍`,
  pr_vs_product_shirt: 'قميص قطني',
  pr_vs_product_bag: 'حقيبة جلد بني',
  pr_vs_product_watch: 'ساعة كلاسيك',
  pr_vs_product_wallet: 'محفظة جلدية',
  pr_vs_product_sunglasses: 'نظارة شمسية',
  // Scene 15 — Coupon
  pr_cp_user_msg: `أنشئ كوبون خصم 15%
اسمه WELCOME
صالح لمدة أسبوع`,
  pr_cp_agent_created: 'تم إنشاء الكوبون ✅',
  pr_cp_validity_7days: 'ينتهي بعد 7 أيام',
  pr_cp_expires_7days: 'بعد 7 أيام',
  pr_cp_agent_share: 'شاركه مع عملائك! 🎉',
  pr_cp_time_1115: '11:15 ص',
  pr_cp_time_1116: '11:16 ص',
  // Scene 17 — Morning report
  pr_mr_agent_report: `صباح الخير يا أحمد ☀️

📊 تقرير أمس:
🛒 23 طلب جديد ↑18%
💰 8,430 ريال إيرادات
🛍️ 14 سلة متروكة
   → استرجعنا 4 تلقائياً 🎯
📦 19 شحنة تمت
⭐ 3 تقييمات جديدة (4.3)

💡 اقتراح: لديك 13 منتج ما عندهم بيانات SEO
لتحسين ظهورها في قوقل.
أحسنها لك؟`,
  pr_mr_user_yes: 'أيوا حسنها',
  pr_mr_agent_done: '✅ تم تحسين بيانات SEO لـ 13 منتج. راح تشوفين تحسن في الظهور بقوقل خلال 7 أيام 📈',
  pr_mr_revenue_str: '8,430',
  pr_mr_time_800: '8:00 ص',
  pr_mr_time_801: '8:01 ص',
  // Scene 19 — Customer chat
  pr_cc_user_msg: 'هلا، الكوب الحراري الذكي لسة متوفر؟',
  pr_cc_agent_reply1: `أهلاً وسهلاً نورة 👋✨
أيوا متوفر — الكوب الحراري الذكي ☕
يحافظ على حرارة مشروبك حتى 12 ساعة.
السعر: 149 ريال • متوفر ✅

🔗 رابط المنتج:
ahmad.salla.sa/p/smart-cup`,
  pr_cc_agent_cart_reminder: `بالمناسبة 🛒 لاحظت إن عندك منتج محفوظ بالسلة من زيارتك السابقة.
تبين تكملين الطلب؟`,
  pr_cc_user_yes_continue: 'أيوا أبي أكمل',
  pr_cc_agent_cart_link: `تمام 🎉 إكملي طلبك من هنا:
ahmad.salla.sa/cart`,
  pr_cc_product_cup: 'كوب حراري ذكي',
  pr_cc_product_blouse: 'بلوزة قطنية',
  pr_cc_product_handbag: 'حقيبة جلدية',
  pr_cc_product_cup_desc: 'كوب حراري بتقنية ذكية يحافظ على درجة حرارة مشروبك المثالية حتى 12 ساعة. مناسب للمكتب والسفر.',
  pr_cc_time_230: '2:30 م',
  pr_cc_time_231: '2:31 م',
  pr_cc_time_232: '2:32 م',
  // Scene 20 — Cart recovery
  pr_cr_timeskip: 'بعد ساعتين...',
  pr_cr_agent_offer: `هلا مرة ثانية! 👋
لاحظنا إن سلتك فيها الكوب الحراري الذكي ☕

عشانك — كوبون خاص:`,
  pr_cr_coupon_validity: 'صالح 24 ساعة فقط',
  pr_cr_agent_price: 'السعر بعد الخصم: 134 ريال 🎁',
  pr_cr_user_accept: 'حلو! أبي أكمل الطلب',
  pr_cr_agent_thanks: 'ممتاز! 🎉 شكراً لثقتك بمتجرنا 💕',
  pr_cr_customer_name: 'نورة العتيبي',
  pr_cr_city: 'الرياض',
  pr_cr_order_total: '134 ر.س',
  pr_cr_order_status_recovered: 'مسترجعة ✓',
  pr_cr_page_title: 'إدارة المتجر — السلات المتروكة',
  pr_cr_page_heading: 'السلات المتروكة',
  pr_cr_abandoned_meta: 'العميلة: نورة العتيبي • متروكة منذ ساعتين',
  pr_cr_status_abandoned: '● متروكة',
  pr_cr_time_430: '4:30 م',
  pr_cr_time_431: '4:31 م',
  // Scene 22 — Sales agent (web widget)
  pr_sa_launcher_label: 'وصول',
  pr_sa_widget_agent_name: 'وصول',
  pr_sa_product_vanilla_title: 'قهوة فانيلا كريمي',
  pr_sa_product_vanilla_desc: 'من أفضل حبوب البرازيل بنكهة فانيلا طبيعية 100% — قهوة عصرية بطعم ناعم وكريمي. ⭐ 4.8 (127 تقييم)',
  pr_sa_product_colombian: 'قهوة كولومبية',
  pr_sa_product_brazilian: 'قهوة برازيلية',
  pr_sa_product_ethiopian: 'قهوة أثيوبية',
  pr_sa_user_q: 'هلا، هالقهوة طعمها فيه فانيلا؟',
  pr_sa_agent_reply1: `هلا! 😊 الكولومبية غامقة ومكسّرات — بدون فانيلا.
عندنا قهوة بنكهة فانيلا طبيعية ☕✨`,
  pr_sa_agent_card: 'قهوة فانيلا كريمي\nالسعر: ٨٩ ر.س • ⭐ ٤.٨ (١٢٧ تقييم)',
  pr_sa_agent_take_me: 'تبين أوديك لصفحتها؟ 😉',
  pr_sa_user_yes: 'أيوا!',
  pr_sa_agent_lets_go: 'يلا نروح! 🚀',
  pr_sa_agent_on_page: `هذي هي! 😍 قهوة فانيلا كريمي
تبين أضيفها للسلة؟`,
  pr_sa_user_add_yes: 'أيوا أبيها',
  pr_sa_agent_added: 'تمت الإضافة! ✅',
  pr_sa_time_314: '3:14 م',
  pr_sa_time_315: '3:15 م',
  pr_sa_time_316: '3:16 م',
  // Scene 24 — Sales followup on WA
  pr_sf_agent_followup: `هلا نوره! 👋☕
شفت إنك أضفتي قهوة فانيلا كريمي لسلتك — ذوقك رفيع! 😍

🛒 سلتك الحين:
☕ قهوة فانيلا كريمي — 89 ريال

تبين تكملين الطلب من هنا؟
أقدر أساعدك بالدفع والشحن مباشرة من واتساب 🚚`,
  pr_sf_user_reply: `واو! كيف عرفتي اسمي 😂
أيوا أبي أكمل الطلب`,
  pr_sf_agent_confirm: `ابشري يا نوره! 🎉
هذا رابط إتمام الطلب:
🔗 store.salla.sa/checkout

الشحن يوصلك خلال 2-3 أيام 📦
شكراً لثقتك بمتجرنا 💕`,
  pr_sf_customer_name: 'نوره العتيبي',
  pr_sf_city: 'الرياض',
  pr_sf_time_319: '3:19 م',
  pr_sf_time_320: '3:20 م',
  // Scene 21 — Closing
  pr_close_feat1_title: 'وكيل المدير',
  pr_close_feat1_desc: 'دير متجرك من واتساب',
  pr_close_feat2_title: 'وكيل العملاء',
  pr_close_feat2_desc: 'يرد 24/7 بذكاء',
  pr_close_feat3_title: 'وكيل المبيعات',
  pr_close_feat3_desc: 'يبيع ويتابع على واتساب',
  pr_close_feat4_title: 'تقارير ذكية',
  pr_close_feat4_desc: 'اقتراحات + تنفيذ فوري',
  pr_close_flow_a: 'من الموقع',
  pr_close_flow_b: 'لواتساب',
  pr_close_flow_c: 'بالاسم',
  pr_close_flow_d: 'بالسلة',
  pr_close_flow_e: 'تلقائي',
});

Object.assign(STRINGS.en, {
  // Common WA headers
  pr_wa_owner_agent_title: 'Owner Agent — Wosool',
  pr_wa_status_online: 'Online',
  pr_wa_status_morning: '8:00 AM',
  pr_wa_store_name_ahmad: "Ahmed's Store",
  pr_wa_store_name_coffee: 'Specialty Coffee Store',
  pr_wa_day_today: 'Today',
  // Brand intro / closing
  pr_brand_name: 'Wosool',
  pr_brand_tagline: 'Your smart store employee',
  pr_brand_subtagline: 'Everything from WhatsApp',
  pr_brand_now_on_salla: 'Now available on Salla',
  // Captions
  pr_cap_product_creation: 'Owner Agent — create products from a WhatsApp message',
  pr_cap_voice_ship: '🎤 Understands voice — checks and acts instantly',
  pr_cap_coupon: '🏷️ Coupons and offers — with a single command',
  pr_cap_morning_report: '📊 Smart reports — suggestions plus instant execution',
  pr_cap_customer_chat: '🤖 Customer Agent — replies and sells 24/7',
  pr_cap_cart_recovery: '🛒 Abandoned cart recovery — automatic with personalized coupons',
  pr_cap_sales_agent: '🛒 Sales Agent — understands, suggests, guides, and sells',
  pr_cap_sales_followup: '🔥 From the site → to WhatsApp → by her name and her cart — automatic',
  // Transitions
  pr_transition_morning: '☀️ Next morning...',
  pr_transition_morning_sub: 'Wosool prepares your report automatically',
  pr_transition_customer_agent: '🤖 At the same time... the Customer Agent is working',
  pr_transition_followup_3min: '3 minutes later... on the customer’s WhatsApp 📱',
  pr_transition_followup_sub: 'Wosool follows up automatically — by name, with her cart',
  // Scene 13 — Product creation
  pr_pc_user_msg: `Hi there 🙏
I want to add a new product:
Smart Thermal Mug
Price: 149 SAR • Quantity: 30`,
  pr_pc_agent_created: 'Product created and added to your store ✅',
  pr_pc_product_title: 'Smart Thermal Mug',
  pr_pc_product_desc: 'Keeps drinks hot for up to 12 hours',
  pr_pc_agent_followup: 'Filed under "Homewares" — you can edit it anytime.',
  pr_pc_empty_msg: 'Your store is ready — add your first product',
  pr_pc_time_1030: '10:30 AM',
  pr_pc_time_1031: '10:31 AM',
  pr_pc_time_1032: '10:32 AM',
  // Scene 14 — Voice ship / inventory
  pr_vs_time_1042: '10:42 AM',
  pr_vs_time_1043: '10:43 AM',
  pr_vs_voice_duration: '0:05',
  pr_vs_voice_transcript: '"How many products do I have in my store? And which products are out of stock?"',
  pr_vs_agent_inventory: `Got it 👍
You have 35 products in the store.

⚠️ 3 products are out of stock:
• Brown Leather Handbag
• Classic Watch
• Sunglasses

Want me to hide them until they’re back in stock?`,
  pr_vs_user_yes_hide: 'Yes, hide them',
  pr_vs_agent_hidden: `✅ 3 products hidden.
They’ll show up again as soon as you restock 👍`,
  pr_vs_product_shirt: 'Cotton Shirt',
  pr_vs_product_bag: 'Brown Leather Handbag',
  pr_vs_product_watch: 'Classic Watch',
  pr_vs_product_wallet: 'Leather Wallet',
  pr_vs_product_sunglasses: 'Sunglasses',
  // Scene 15 — Coupon
  pr_cp_user_msg: `Create a 15% discount coupon
called WELCOME
valid for one week`,
  pr_cp_agent_created: 'Coupon created ✅',
  pr_cp_validity_7days: 'Expires in 7 days',
  pr_cp_expires_7days: 'in 7 days',
  pr_cp_agent_share: 'Share it with your customers! 🎉',
  pr_cp_time_1115: '11:15 AM',
  pr_cp_time_1116: '11:16 AM',
  // Scene 17 — Morning report
  pr_mr_agent_report: `Good morning Ahmed ☀️

📊 Yesterday's report:
🛒 23 new orders ↑18%
💰 8,430 SAR in revenue
🛍️ 14 abandoned carts
   → recovered 4 automatically 🎯
📦 19 shipments completed
⭐ 3 new reviews (4.3)

💡 Suggestion: 13 products are missing SEO data
to improve their visibility on Google.
Want me to optimize them?`,
  pr_mr_user_yes: 'Yes, optimize them',
  pr_mr_agent_done: '✅ SEO data optimized for 13 products. You’ll see improved Google visibility within 7 days 📈',
  pr_mr_revenue_str: '8,430',
  pr_mr_time_800: '8:00 AM',
  pr_mr_time_801: '8:01 AM',
  // Scene 19 — Customer chat
  pr_cc_user_msg: 'Hi, is the Smart Thermal Mug still available?',
  pr_cc_agent_reply1: `Welcome Noura 👋✨
Yes, it’s available — the Smart Thermal Mug ☕
Keeps your drink hot for up to 12 hours.
Price: 149 SAR • In stock ✅

🔗 Product link:
ahmad.salla.sa/p/smart-cup`,
  pr_cc_agent_cart_reminder: `By the way 🛒 I noticed you have an item saved in your cart from a previous visit.
Want to finish that order?`,
  pr_cc_user_yes_continue: 'Yes, I want to continue',
  pr_cc_agent_cart_link: `Great 🎉 Complete your order here:
ahmad.salla.sa/cart`,
  pr_cc_product_cup: 'Smart Thermal Mug',
  pr_cc_product_blouse: 'Cotton Blouse',
  pr_cc_product_handbag: 'Leather Handbag',
  pr_cc_product_cup_desc: 'A smart thermal mug that keeps your drink at the perfect temperature for up to 12 hours. Ideal for the office and travel.',
  pr_cc_time_230: '2:30 PM',
  pr_cc_time_231: '2:31 PM',
  pr_cc_time_232: '2:32 PM',
  // Scene 20 — Cart recovery
  pr_cr_timeskip: 'Two hours later...',
  pr_cr_agent_offer: `Hi again! 👋
We noticed your cart has the Smart Thermal Mug ☕

Just for you — a special coupon:`,
  pr_cr_coupon_validity: 'Valid for 24 hours only',
  pr_cr_agent_price: 'Price after discount: 134 SAR 🎁',
  pr_cr_user_accept: 'Awesome! I want to complete the order',
  pr_cr_agent_thanks: 'Perfect! 🎉 Thank you for shopping with us 💕',
  pr_cr_customer_name: 'Noura Al-Otaibi',
  pr_cr_city: 'Riyadh',
  pr_cr_order_total: '134 SAR',
  pr_cr_order_status_recovered: 'Recovered ✓',
  pr_cr_page_title: 'Store admin — Abandoned carts',
  pr_cr_page_heading: 'Abandoned carts',
  pr_cr_abandoned_meta: 'Customer: Noura Al-Otaibi • abandoned 2 hours ago',
  pr_cr_status_abandoned: '● Abandoned',
  pr_cr_time_430: '4:30 PM',
  pr_cr_time_431: '4:31 PM',
  // Scene 22 — Sales agent (web widget)
  pr_sa_launcher_label: 'Wosool',
  pr_sa_widget_agent_name: 'Wosool',
  pr_sa_product_vanilla_title: 'Creamy Vanilla Coffee',
  pr_sa_product_vanilla_desc: 'Premium Brazilian beans with 100% natural vanilla — a modern coffee with a smooth, creamy taste. ⭐ 4.8 (127 reviews)',
  pr_sa_product_colombian: 'Colombian Coffee',
  pr_sa_product_brazilian: 'Brazilian Coffee',
  pr_sa_product_ethiopian: 'Ethiopian Coffee',
  pr_sa_user_q: 'Hi, does this coffee have a vanilla flavor?',
  pr_sa_agent_reply1: `Hi! 😊 The Colombian is dark with nutty notes — no vanilla.
We do have a coffee with natural vanilla flavor ☕✨`,
  pr_sa_agent_card: 'Creamy Vanilla Coffee\nPrice: 89 SAR • ⭐ 4.8 (127 reviews)',
  pr_sa_agent_take_me: 'Want me to take you to its page? 😉',
  pr_sa_user_yes: 'Yes!',
  pr_sa_agent_lets_go: 'Let’s go! 🚀',
  pr_sa_agent_on_page: `Here it is! 😍 Creamy Vanilla Coffee
Want me to add it to your cart?`,
  pr_sa_user_add_yes: 'Yes, I want it',
  pr_sa_agent_added: 'Added! ✅',
  pr_sa_time_314: '3:14 PM',
  pr_sa_time_315: '3:15 PM',
  pr_sa_time_316: '3:16 PM',
  // Scene 24 — Sales followup on WA
  pr_sf_agent_followup: `Hi Noura! 👋☕
I saw you added the Creamy Vanilla Coffee to your cart — great taste! 😍

🛒 Your cart right now:
☕ Creamy Vanilla Coffee — 89 SAR

Want to finish the order from here?
I can help you with payment and shipping right from WhatsApp 🚚`,
  pr_sf_user_reply: `Wow! How did you know my name 😂
Yes, I want to complete the order`,
  pr_sf_agent_confirm: `Right away, Noura! 🎉
Here’s your checkout link:
🔗 store.salla.sa/checkout

Shipping arrives in 2-3 days 📦
Thank you for shopping with us 💕`,
  pr_sf_customer_name: 'Noura Al-Otaibi',
  pr_sf_city: 'Riyadh',
  pr_sf_time_319: '3:19 PM',
  pr_sf_time_320: '3:20 PM',
  // Scene 21 — Closing
  pr_close_feat1_title: 'Owner Agent',
  pr_close_feat1_desc: 'Run your store from WhatsApp',
  pr_close_feat2_title: 'Customer Agent',
  pr_close_feat2_desc: 'Replies 24/7 with intelligence',
  pr_close_feat3_title: 'Sales Agent',
  pr_close_feat3_desc: 'Sells and follows up on WhatsApp',
  pr_close_feat4_title: 'Smart reports',
  pr_close_feat4_desc: 'Suggestions plus instant execution',
  pr_close_flow_a: 'From the site',
  pr_close_flow_b: 'to WhatsApp',
  pr_close_flow_c: 'by name',
  pr_close_flow_d: 'with the cart',
  pr_close_flow_e: 'automatic',
});

// ─── Helpers: time-windowed visibility ──────────────────────────────────────
// Uses opacity/transform driven directly by localTime instead of CSS animation,
// so it doesn't reset on every Stage frame re-render.
const ShowAfter = ({ at, dur = 0.32, children }) => {
  const { localTime } = useSprite();
  if (localTime < at) return null;
  const t = Math.min(1, (localTime - at) / dur);
  const eased = 1 - Math.pow(1 - t, 3);  // easeOutCubic
  return (
    <div style={{
      opacity: eased,
      transform: `translateY(${(1 - eased) * 8}px) scale(${0.96 + eased * 0.04})`,
      transformOrigin: 'center bottom',
      willChange: 'opacity, transform',
    }}>
      {children}
    </div>
  );
};

// Audio cue helper — plays a tiny synth tone exactly once per scene per cue
const useAudioCue = (cues) => {
  // cues: [{at: time, type: 'pop'|'beep'|'whoosh'}]
  const { localTime } = useSprite();
  const fired = React.useRef(new Set());
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.AudioContext && !window.webkitAudioContext) return;
    cues.forEach(({ at, type }, i) => {
      const key = `${i}-${at}-${type}`;
      if (localTime >= at && localTime < at + 0.3 && !fired.current.has(key)) {
        fired.current.add(key);
        playTone(type);
      }
    });
  });
};

let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) _audioCtx = new AC();
  }
  return _audioCtx;
}
function playTone(type = 'pop') {
  // Skip procedural sound in render mode — those would not be captured by
  // headless puppeteer (video-only). The renderer muxes audio in post.
  if (typeof window !== 'undefined' && (window.__RENDER_MODE__ || window.__MUTED__)) return;
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'click') {
      // Real mouse click — short broadband noise burst, no musical pitch.
      // Two micro-transients (press + release) for a tactile feel.
      const sampleRate = ctx.sampleRate;
      const len = Math.floor(sampleRate * 0.04);  // 40ms total
      const buffer = ctx.createBuffer(1, len, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < len; i++) {
        // Sharp attack → fast exponential decay
        const env = Math.exp(-i / (len * 0.08));
        // Second micro-transient at ~18ms (release)
        const release = i > sampleRate * 0.018 && i < sampleRate * 0.022
          ? 0.6 * Math.exp(-(i - sampleRate * 0.018) / (sampleRate * 0.003))
          : 0;
        data[i] = ((Math.random() * 2 - 1) * env) + ((Math.random() * 2 - 1) * release);
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 800;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 3500;
      bp.Q.value = 0.8;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.7, now);
      noise.connect(hp); hp.connect(bp); bp.connect(gain); gain.connect(ctx.destination);
      noise.start(now);
      return;
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if (type === 'pop') {
      osc.type = 'sine'; osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now); osc.stop(now + 0.13);
    } else if (type === 'beep') {
      osc.type = 'triangle'; osc.frequency.setValueAtTime(660, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now); osc.stop(now + 0.2);
    } else if (type === 'whoosh') {
      osc.type = 'sine'; osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now); osc.stop(now + 0.36);
    }
  } catch (e) { /* ignore */ }
}

// ─── Split frame: WhatsApp left, storefront right ──────────────────────────
// Using ScreenStage to keep things consistent w/ other scenes. We size the
// inner space at 1200x600 (different aspect from default 1000x500), so we
// build our own simpler container.
const SplitFrame = ({ children, scale = 1, focusSide = null }) => {
  // focusSide = 'left' | 'right' | null — slight cinematic zoom-in
  let camScale = scale;
  let camX = 0;
  if (focusSide === 'left') { camScale = scale * 1.08; camX = 200; }
  if (focusSide === 'right') { camScale = scale * 1.08; camX = -200; }
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: `translate(-50%, -50%) translate(${camX}px, 0) scale(${camScale})`,
      transformOrigin: 'center center',
      width: 1200, height: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
      transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
    }}>
      {children}
    </div>
  );
};

// Smooth camera tween for split scenes
const useSplitCamera = (kfs) => {
  const { localTime } = useSprite();
  const ts = kfs.map(k => k.t);
  const fScale = interpolate(ts, kfs.map(k => k.scale ?? 1), Easing.easeInOutCubic);
  const fX     = interpolate(ts, kfs.map(k => k.x ?? 0),     Easing.easeInOutCubic);
  const fY     = interpolate(ts, kfs.map(k => k.y ?? 0),     Easing.easeInOutCubic);
  return { scale: fScale(localTime), x: fX(localTime), y: fY(localTime) };
};

// Panel wrappers — gives each side a subtle frame
const Panel = ({ children, width, height, glow = null }) => (
  <div style={{
    width, height, borderRadius: 12, overflow: 'hidden',
    background: '#fff',
    boxShadow: glow
      ? `0 0 0 2px ${glow}, 0 24px 60px rgba(0,0,0,0.35)`
      : '0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(11,26,31,0.1)',
    transition: 'box-shadow 400ms ease',
    flexShrink: 0,
  }}>
    {children}
  </div>
);

// ─── Scene 12 — Promo opening (split intro) ────────────────────────────────
const PromoIntro = () => {
  const { progress, localTime } = useSprite();
  const t1 = animate({ from: 0, to: 1, start: 0.2, end: 1.2 })(localTime);
  const t2 = animate({ from: 0, to: 1, start: 0.9, end: 1.6 })(localTime);
  const exitT = animate({ from: 0, to: 1, start: 2.6, end: 3.2 })(localTime);
  const opacity = 1 - exitT;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, #002A33, #00505E)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      opacity, fontFamily: 'var(--w-font-ar)',
    }}>
      <div style={{ transform: `scale(${0.85 + t1 * 0.15})`, opacity: t1, marginBottom: 24 }}>
        <div style={{
          width: 120, height: 120, borderRadius: 24, background: '#73FCD7',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 24px 60px rgba(115,252,215,0.3)',
        }}>
          <WosoolInfinity size={60} color="#0B1A1F"/>
        </div>
      </div>
      <div style={{
        textAlign: 'center', opacity: t1,
        transform: `translateY(${(1 - t1) * 16}px)`,
        whiteSpace: 'nowrap',
      }}>
        <div style={{ fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{t("pr_brand_name")}</div>
        <div style={{ fontSize: 22, color: '#73FCD7', marginTop: 10 }}>{t("pr_brand_tagline")}</div>
      </div>
      <div style={{
        fontSize: 18, color: 'rgba(255,255,255,0.85)',
        marginTop: 28, opacity: t2, transform: `translateY(${(1 - t2) * 12}px)`,
        whiteSpace: 'nowrap',
      }}>
        {t("pr_brand_subtagline")}
      </div>
    </div>
  );
};

// ─── Scene 13 — Owner: Product creation ────────────────────────────────────
const PromoProductCreation = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 1.0,  type: 'pop' },     // user msg
    { at: 3.5,  type: 'pop' },     // agent reply
    { at: 4.5,  type: 'beep' },    // product card in WA
    { at: 6.0,  type: 'whoosh' },  // store updates
    { at: 9.0,  type: 'pop' },     // agent followup
  ]);

  // Camera: read left → focus right when product enters store → read followup
  const cam = useSplitCamera([
    { t: 0,    scale: 0.9,   x: 0,    y: 0 },
    { t: 0.6,  scale: 0.92,  x: 0,    y: 0 },
    { t: 5.8,  scale: 0.92,  x: 0,    y: 0 },
    { t: 6.4,  scale: 1.05,  x: -120, y: 0 },  // focus right with stronger zoom
    { t: 11,   scale: 1.05,  x: -120, y: 0 },
    { t: 12,   scale: 0.92,  x: 0,    y: 0 },
  ]);

  // Product appears in store at t=6.0 (1.5s after the WA product card)
  const productInStore = localTime >= 6.0;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, ${cam.y}px) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        {/* Left: WhatsApp */}
        <Panel width={420} height={640}>
          <WAChat width={420} height={640}
            headerTitle={t("pr_wa_owner_agent_title")} headerSubtitle={t("pr_wa_status_online")} showLogo={true}
          >
            <ShowAfter at={1.0}>
              <WABubble from="user" time={t("pr_pc_time_1030")}>
                {t("pr_pc_user_msg")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={2.5}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={3.5}>
              <WABubble from="agent" time={t("pr_pc_time_1031")} ticks={false}>
                {t("pr_pc_agent_created")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={4.5}>
              <WAProductCard
                title={t("pr_pc_product_title")}
                desc={t("pr_pc_product_desc")}
                price={currency(149)}
                sku="SMART-CUP-BLK"
                time={t("pr_pc_time_1031")}
              />
            </ShowAfter>
            <ShowAfter at={9.0}>
              <WABubble from="agent" time={t("pr_pc_time_1032")} ticks={false}>
                {t("pr_pc_agent_followup")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>

        {/* Right: Storefront */}
        <Panel width={720} height={540} glow={productInStore ? '#73FCD7' : null}>
          <SFProductsPage
            products={productInStore ? [{
              title: t("pr_pc_product_title"),
              price: currency(149),
              color: '#1F2937', accent: '#FBBF24', glyph: '☕',
              appearAnim: true,
            }] : []}
            emptyMessage={t("pr_pc_empty_msg")}
          />
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_product_creation")} color="#73FCD7"/>
    </React.Fragment>
  );
};

// ─── Scene 14 — Owner: Voice note → inventory check → hide out-of-stock ───
const PromoVoiceShip = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 0.5, type: 'pop' },     // voice note
    { at: 3.2, type: 'pop' },     // agent inventory reply
    { at: 4.2, type: 'beep' },    // out-of-stock highlight on store
    { at: 7.5, type: 'pop' },     // owner says hide
    { at: 8.7, type: 'whoosh' },  // hide animation on store
    { at: 9.0, type: 'pop' },     // agent confirm
  ]);

  const cam = useSplitCamera([
    { t: 0,    scale: 0.92, x: 0,    y: 0 },
    { t: 3.0,  scale: 0.92, x: 0,    y: 0 },
    { t: 3.4,  scale: 1.05, x: -120, y: 0 },  // focus right on highlight + zoom
    { t: 10.5, scale: 1.05, x: -120, y: 0 },
    { t: 11,   scale: 0.92, x: 0,    y: 0 },
  ]);

  // Right-side phases:
  //  0   → 4.2 : products list, all مفعّل, total=35
  //  4.2 → 7.5 : red highlight on the 3 zero-stock products
  //  7.5 →     : 3 products toggle to مخفي, visible count 35 → 32
  const highlightOutOfStock = localTime >= 4.2 && localTime < 7.5;
  const hidePhase           = localTime >= 7.5;
  const visibleFlash        = hidePhase && localTime < 8.5;
  const outOfStockFlash     = localTime >= 4.2 && localTime < 5.2;

  const products = [
    { title: t("pr_vs_product_shirt"),      glyph: '👕', color: '#FEF3C7', stock: 24, hidden: false },
    { title: t("pr_vs_product_bag"),        glyph: '👜', color: '#FED7AA', stock: 0,  hidden: hidePhase, statusFlash: visibleFlash },
    { title: t("pr_vs_product_watch"),      glyph: '⌚', color: '#E0E7FF', stock: 0,  hidden: hidePhase, statusFlash: visibleFlash },
    { title: t("pr_vs_product_wallet"),     glyph: '👛', color: '#FDE68A', stock: 18, hidden: false },
    { title: t("pr_vs_product_sunglasses"), glyph: '🕶️', color: '#1F2937', stock: 0,  hidden: hidePhase, statusFlash: visibleFlash },
  ];

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        <Panel width={420} height={640}>
          <WAChat width={420} height={640} headerTitle={t("pr_wa_owner_agent_title")} headerSubtitle={t("pr_wa_status_online")}>
            <ShowAfter at={0.4}>
              <WAVoiceNote from="user" duration={t("pr_vs_voice_duration")} time={t("pr_vs_time_1042")}/>
            </ShowAfter>
            <ShowAfter at={1.4}>
              <WAVoiceTranscript text={t("pr_vs_voice_transcript")}/>
            </ShowAfter>
            <ShowAfter at={2.5}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={3.2}>
              <WABubble from="agent" time={t("pr_vs_time_1042")} ticks={false}>
                {t("pr_vs_agent_inventory")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={7.2}>
              <WABubble from="user" time={t("pr_vs_time_1043")}>
                {t("pr_vs_user_yes_hide")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={8.2}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={8.8}>
              <WABubble from="agent" time={t("pr_vs_time_1043")} ticks={false}>
                {t("pr_vs_agent_hidden")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>

        <Panel width={720} height={540} glow={visibleFlash ? '#10B981' : (outOfStockFlash ? '#DC2626' : null)}>
          <SFProductsAdmin
            totalCount={35}
            visibleCount={hidePhase ? 32 : 35}
            outOfStockCount={3}
            products={products}
            highlightOutOfStock={highlightOutOfStock}
            visibleFlash={visibleFlash}
            outOfStockFlash={outOfStockFlash}
          />
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_voice_ship")} color="#3B82F6"/>
    </React.Fragment>
  );
};

// ─── Scene 15 — Owner: Coupon creation ─────────────────────────────────────
const PromoCoupon = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 0.5, type: 'pop' },
    { at: 2.5, type: 'pop' },
    { at: 3.5, type: 'beep' },
    { at: 4.0, type: 'whoosh' },
  ]);

  const cam = useSplitCamera([
    { t: 0,   scale: 0.92, x: 0,    y: 0 },
    { t: 3.4, scale: 0.92, x: 0,    y: 0 },
    { t: 3.9, scale: 1.05, x: -110, y: 0 },
    { t: 6.0, scale: 1.05, x: -110, y: 0 },
    { t: 6.5, scale: 0.9,  x: 0,    y: 0 },
  ]);

  const couponInStore = localTime >= 4.0;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        <Panel width={420} height={640}>
          <WAChat width={420} height={640} headerTitle={t("pr_wa_owner_agent_title")} headerSubtitle={t("pr_wa_status_online")}>
            <ShowAfter at={0.5}>
              <WABubble from="user" time={t("pr_cp_time_1115")}>
                {t("pr_cp_user_msg")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={1.8}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={2.5}>
              <WABubble from="agent" time={t("pr_cp_time_1115")} ticks={false}>
                {t("pr_cp_agent_created")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={3.5}>
              <WACouponCard code="WELCOME" discount={`${toLocaleDigits(15)}%`} validity={t("pr_cp_validity_7days")} time={t("pr_cp_time_1116")}/>
            </ShowAfter>
            <ShowAfter at={5.0}>
              <WABubble from="agent" time={t("pr_cp_time_1116")} ticks={false}>
                {t("pr_cp_agent_share")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>

        <Panel width={720} height={540} glow={couponInStore ? '#FFB800' : null}>
          <SFCouponsPage coupons={couponInStore ? [
            { code: 'WELCOME', discount: `${toLocaleDigits(15)}%`, expires: t("pr_cp_expires_7days"), active: true, fresh: true },
          ] : []}/>
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_coupon")} color="#FFB800"/>
    </React.Fragment>
  );
};

// ─── Scene 16 — Transition: morning ────────────────────────────────────────
const PromoMorningTransition = () => {
  const { progress, localTime } = useSprite();
  useAudioCue([{ at: 0.3, type: 'whoosh' }]);
  const t = Easing.easeOutCubic(animate({ from: 0, to: 1, start: 0.1, end: 0.7 })(localTime));
  const exit = animate({ from: 0, to: 1, start: 1.5, end: 2 })(localTime);
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, #002A33, #00505E)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      opacity: 1 - exit,
    }}>
      <div style={{
        fontFamily: 'var(--w-font-ar)', fontSize: 64, fontWeight: 700, color: '#fff',
        opacity: t, transform: `translateY(${(1 - t) * 16}px)`,
        textAlign: 'center', whiteSpace: 'nowrap',
      }}>
        {t("pr_transition_morning")}
      </div>
      <div style={{
        marginTop: 24, fontSize: 18, color: '#FCD34D',
        opacity: t, fontFamily: 'var(--w-font-ar)', whiteSpace: 'nowrap',
      }}>
        {t("pr_transition_morning_sub")}
      </div>
    </div>
  );
};

// ─── Scene 17 — Morning intel report ───────────────────────────────────────
const PromoMorningReport = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 0.5,  type: 'pop' },     // agent stat report bubble
    { at: 1.5,  type: 'whoosh' },  // stats begin animating on the right
    { at: 6.5,  type: 'pop' },     // owner reply
    { at: 8.2,  type: 'pop' },     // agent confirm
    { at: 8.5,  type: 'beep' },    // store config updates
  ]);

  // Camera: read the big stat report first (focus left), then pan right to
  // show the store updating after the suggestion is accepted.
  const cam = useSplitCamera([
    { t: 0,    scale: 0.92, x: 0,    y: 0 },
    { t: 1.0,  scale: 1.05, x: 100,  y: 0 },  // focus LEFT to read big report
    { t: 6.2,  scale: 1.05, x: 100,  y: 0 },
    { t: 7.2,  scale: 0.92, x: 0,    y: 0 },  // wide briefly
    { t: 8.2,  scale: 1.05, x: -120, y: 0 },  // focus RIGHT — store config updates
    { t: 14,   scale: 1.05, x: -120, y: 0 },
    { t: 15,   scale: 0.92, x: 0,    y: 0 },
  ]);

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        <Panel width={420} height={640}>
          <WAChat width={420} height={640} headerTitle={t("pr_wa_owner_agent_title")} headerSubtitle={t("pr_wa_status_morning")}>
            <WADayPill text={t("pr_wa_day_today")}/>
            <ShowAfter at={0.5}>
              <WABubble from="agent" time={t("pr_mr_time_800")} ticks={false}>
                {t("pr_mr_agent_report")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={6.5}>
              <WABubble from="user" time={t("pr_mr_time_801")}>
                {t("pr_mr_user_yes")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={7.5}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={8.2}>
              <WABubble from="agent" time={t("pr_mr_time_801")} ticks={false}>
                {t("pr_mr_agent_done")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>

        <Panel width={720} height={540} glow={localTime >= 7.6 ? '#10B981' : null}>
          <SFStatsPage
            orders={23} ordersDelta={18} revenue={t("pr_mr_revenue_str")}
            abandoned={14} recovered={4} animate={true}
          />
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_morning_report")} color="#FCD34D"/>
    </React.Fragment>
  );
};

// ─── Scene 18 — Transition: customer agent ─────────────────────────────────
const PromoCustomerTransition = () => {
  const { localTime } = useSprite();
  useAudioCue([{ at: 0.3, type: 'whoosh' }]);
  const t = Easing.easeOutCubic(animate({ from: 0, to: 1, start: 0.1, end: 0.7 })(localTime));
  const exit = animate({ from: 0, to: 1, start: 1.4, end: 1.9 })(localTime);
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, #002A33, #00505E)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      opacity: 1 - exit,
    }}>
      <div style={{
        fontFamily: 'var(--w-font-ar)', fontSize: 56, fontWeight: 700, color: '#fff',
        opacity: t, transform: `translateY(${(1 - t) * 16}px)`,
        textAlign: 'center', maxWidth: 900, padding: '0 40px',
      }}>
        {t("pr_transition_customer_agent")}
      </div>
    </div>
  );
};

// ─── Scene 19 — Customer chat & sale ───────────────────────────────────────
const PromoCustomerChat = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 0.6,  type: 'pop' },     // customer msg
    { at: 2.2,  type: 'pop' },     // agent reply 1 (greet + details + link)
    { at: 3.2,  type: 'whoosh' },  // right panel switches to product detail
    { at: 6.8,  type: 'pop' },     // agent reply 2 (cart reminder)
    { at: 7.0,  type: 'beep' },    // right panel switches to cart
    { at: 9.3,  type: 'pop' },     // customer accepts
    { at: 10.7, type: 'pop' },     // agent confirms with cart link
  ]);

  const cam = useSplitCamera([
    { t: 0,    scale: 0.92, x: 0,    y: 0 },
    { t: 2.8,  scale: 0.92, x: 0,    y: 0 },
    { t: 3.2,  scale: 1.05, x: -120, y: 0 }, // product detail appears (stronger zoom)
    { t: 6.7,  scale: 1.05, x: -120, y: 0 },
    { t: 7.0,  scale: 1.1,  x: -120, y: 0 }, // cart pulse — bigger zoom
    { t: 7.6,  scale: 1.05, x: -120, y: 0 },
    { t: 13,   scale: 1.05, x: -120, y: 0 },
    { t: 14,   scale: 0.92, x: 0,    y: 0 },
  ]);

  // Right side state — customer is RETURNING with an item already in cart
  //  0   → 3.2 : products grid (cart already has 1)
  //  3.2 → 7.0 : product detail of cup (link agent shared)
  //  7.0 →     : cart page reminding her of the saved item
  let rightView;
  if (localTime < 3.2) {
    rightView = <SFProductsPage cartCount={1} products={[
      { title: t("pr_cc_product_cup"),     price: currency(149), color: '#1F2937', accent: '#FBBF24', glyph: '☕' },
      { title: t("pr_cc_product_blouse"),  price: currency(189), color: '#FCE7F3', accent: '#EC4899', glyph: '👚' },
      { title: t("pr_cc_product_handbag"), price: currency(329), color: '#FEF3C7', accent: '#D97706', glyph: '👜' },
    ]}/>;
  } else if (localTime < 7.0) {
    rightView = <SFProductDetail
      title={t("pr_cc_product_cup")}
      price={currency(149)}
      desc={t("pr_cc_product_cup_desc")}
      color="#0F172A" glyph="☕" accent="#FBBF24"
      cartCount={1}
    />;
  } else {
    rightView = <SFCart
      cartCount={1}
      items={[{ title: t("pr_cc_product_cup"), price: currency(149), qty: 1, color: '#0F172A', glyph: '☕', fresh: localTime < 8 }]}
      total="149"
      freeshipMet={false} freeshipRemaining={51}
    />;
  }

  // Cart icon pulse when agent reminds about saved cart
  const cartPulse = localTime > 6.9 && localTime < 7.5;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        <Panel width={420} height={640}>
          <WAChat width={420} height={640}
            headerTitle={t("pr_wa_store_name_ahmad")} headerSubtitle={t("pr_wa_status_online")}
            showLogo={false}
          >
            <ShowAfter at={0.6}>
              <WABubble from="user" time={t("pr_cc_time_230")}>
                {t("pr_cc_user_msg")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={1.6}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={2.2}>
              <WABubble from="agent" time={t("pr_cc_time_230")} ticks={false}>
                {t("pr_cc_agent_reply1")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={6.2}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={6.8}>
              <WABubble from="agent" time={t("pr_cc_time_231")} ticks={false}>
                {t("pr_cc_agent_cart_reminder")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={9.3}>
              <WABubble from="user" time={t("pr_cc_time_232")}>
                {t("pr_cc_user_yes_continue")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={10.0}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={10.7}>
              <WABubble from="agent" time={t("pr_cc_time_232")} ticks={false}>
                {t("pr_cc_agent_cart_link")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>

        <Panel width={720} height={540}>
          {React.cloneElement(rightView, { cartPulse })}
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_customer_chat")} color="#10B981"/>
    </React.Fragment>
  );
};

// ─── Scene 20 — Cart recovery ──────────────────────────────────────────────
const PromoCartRecovery = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 0.5, type: 'whoosh' },
    { at: 2, type: 'pop' },
    { at: 3.5, type: 'beep' },
    { at: 6, type: 'pop' },
    { at: 7, type: 'whoosh' },
  ]);

  const cam = useSplitCamera([
    { t: 0, scale: 0.92, x: 0, y: 0 },
    { t: 6, scale: 0.92, x: 0, y: 0 },
    { t: 6.5, scale: 1.0, x: -110, y: 0 },
    { t: 9, scale: 1.0, x: -110, y: 0 },
    { t: 9.8, scale: 0.9, x: 0, y: 0 },
  ]);

  // Right side: shows abandoned cart at first, then "recovered" state
  const recovered = localTime >= 7;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        <Panel width={420} height={640}>
          <WAChat width={420} height={640}
            headerTitle={t("pr_wa_store_name_ahmad")} headerSubtitle={t("pr_wa_status_online")} showLogo={false}
          >
            <ShowAfter at={0.4}>
              <WATimeSkip text={t("pr_cr_timeskip")}/>
            </ShowAfter>
            <ShowAfter at={1.8}>
              <WABubble from="agent" time={t("pr_cr_time_430")} ticks={false}>
                {t("pr_cr_agent_offer")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={3.5}>
              <WACouponCard code="SAVE10" discount={`${toLocaleDigits(10)}%`} validity={t("pr_cr_coupon_validity")} time={t("pr_cr_time_430")}/>
            </ShowAfter>
            <ShowAfter at={5}>
              <WABubble from="agent" time={t("pr_cr_time_430")} ticks={false}>
                {t("pr_cr_agent_price")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={6}>
              <WABubble from="user" time={t("pr_cr_time_431")}>
                {t("pr_cr_user_accept")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={7.5}>
              <WABubble from="agent" time={t("pr_cr_time_431")} ticks={false}>
                {t("pr_cr_agent_thanks")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>

        <Panel width={720} height={540} glow={recovered ? '#10B981' : null}>
          {recovered ? (
            <SFOrderPage
              orderId="#4533" customer={t("pr_cr_customer_name")} city={t("pr_cr_city")} items={1} total={currency(134)}
              status={t("pr_cr_order_status_recovered")} statusColor="#10B981"
              justChanged={localTime < 8} statusFlash={localTime < 8.5}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%', background: '#FAFAFA',
              fontFamily: 'var(--w-font-ar)', direction: window.__LOCALE__ === 'en' ? 'ltr' : 'rtl',
              display: 'flex', flexDirection: 'column',
            }}>
              <SFHeader storeName={t("pr_cr_page_title")}/>
              <div style={{ flex: 1, padding: 28 }}>
                <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: '#1A1A1A' }}>{t("pr_cr_page_heading")}</div>
                <div style={{
                  background: '#fff', borderRadius: 12, padding: 20,
                  border: '1px solid #E5E7EB',
                  display: 'flex', alignItems: 'center', gap: 16,
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 8,
                    background: 'linear-gradient(135deg, #0F172A, #0F172Add)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                  }}>☕</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A' }}>{t("pr_cc_product_cup")}</div>
                    <div style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>{t("pr_cr_abandoned_meta")}</div>
                  </div>
                  <div style={{
                    padding: '6px 12px', borderRadius: 100,
                    background: '#FEF3C7', color: '#92400E',
                    fontSize: 12, fontWeight: 700,
                  }}>{t("pr_cr_status_abandoned")}</div>
                </div>
              </div>
            </div>
          )}
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_cart_recovery")} color="#10B981"/>
    </React.Fragment>
  );
};

// ─── Scene 22 — Sales Agent: launcher click → widget → navigate → cart toast ──
// Story beats (16s):
//   0.0 → 1.2  Customer browsing the coffee category. Cursor enters and
//              clicks the small "وصول" launcher pill at bottom-right.
//   1.2 → 1.6  Launcher pops open into the full chat widget.
//   1.6 → 7.0  Customer asks → agent replies with details + suggestion.
//   7.0 → 7.5  Agent says "let's go" — store transitions to product detail.
//   7.5 → 12.0 Agent confirms product → customer says yes → typing.
//  12.3        "تمت الإضافة!" → Salla-style cart toast slides in at top.
//  ≥ 14.5      Toast fades, settle.
const PromoSalesAgent = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 1.05, type: 'click' },  // launcher click
    { at: 1.4,  type: 'whoosh' }, // widget pops open
    { at: 1.8,  type: 'pop' },    // customer types
    { at: 3.0,  type: 'pop' },    // agent reply
    { at: 7.5,  type: 'whoosh' }, // navigate to product page
    { at: 9.0,  type: 'pop' },    // agent on product page
    { at: 12.3, type: 'beep' },   // cart toast
  ]);

  // Camera: stronger zoom on the widget when chat is happening, brief zoom-in
  // on the store at the navigate moment, and a final zoom for the cart toast.
  const cam = useSplitCamera([
    { t: 0,    scale: 0.85, x: 0,    y: 0 },
    { t: 1.5,  scale: 0.85, x: 0,    y: 0 },
    { t: 2.0,  scale: 0.92, x: -100, y: 0 },  // focus on widget area for reading
    { t: 7.0,  scale: 0.92, x: -100, y: 0 },
    { t: 7.4,  scale: 0.95, x: 0,    y: 0 },  // store transitions — wider view
    { t: 8.5,  scale: 0.92, x: -100, y: 0 },  // back to widget for confirmation
    { t: 12.0, scale: 0.92, x: -100, y: 0 },
    { t: 12.4, scale: 1.0,  x: 0,    y: 0 },  // toast emphasis (zoom in on top)
    { t: 14.5, scale: 1.0,  x: 0,    y: 0 },
    { t: 15.5, scale: 0.85, x: 0,    y: 0 },
  ]);

  // ─── Phase: store products → product detail ──────────────────────────────
  const showProductDetail = localTime >= 7.5;
  const rightView = showProductDetail ? (
    <SFProductDetail
      title={t("pr_sa_product_vanilla_title")}
      price={currency(89)}
      desc={t("pr_sa_product_vanilla_desc")}
      color="#3E2723" glyph="☕" accent="#FBBF24"
      cartCount={localTime > 12.3 ? 1 : 0}
      addToCartHighlight={localTime > 9.1 && localTime < 12.3}
    />
  ) : (
    <SFProductsPage cartCount={0}
      products={[
        { title: t("pr_sa_product_colombian"), price: currency(79), color: '#3E2723', accent: '#A0522D', glyph: '☕' },
        { title: t("pr_sa_product_brazilian"), price: currency(69), color: '#5D4037', accent: '#8B4513', glyph: '☕' },
        { title: t("pr_sa_product_ethiopian"), price: currency(99), color: '#4E342E', accent: '#D97706', glyph: '☕' },
      ]}
    />
  );

  // ─── Launcher → widget transition ────────────────────────────────────────
  const launcherOpacity = 1 - animate({ from: 0, to: 1, start: 1.2, end: 1.4 })(localTime);
  const widgetT       = animate({ from: 0, to: 1, start: 1.2, end: 1.6 })(localTime);
  const widgetOpacity = widgetT;
  const widgetScale   = 0.4 + widgetT * 0.6;
  const showLauncher  = launcherOpacity > 0.02;
  const showWidget    = widgetT > 0.02;

  // ─── Cursor click animation on the launcher ──────────────────────────────
  const cursorOp = animate({ from: 0, to: 1, start: 0.3, end: 0.6 })(localTime)
                 * (1 - animate({ from: 0, to: 1, start: 1.3, end: 1.5 })(localTime));
  const curX  = interpolate([0.3, 1.0, 1.5], [560, 1093, 1093], Easing.easeInOutCubic)(localTime);
  const curY  = interpolate([0.3, 1.0, 1.5], [380, 613, 613],   Easing.easeInOutCubic)(localTime);
  const click = localTime > 1.0 && localTime < 1.2;

  // ─── Add-to-cart toast (Salla-style) ─────────────────────────────────────
  const toastIn   = Easing.easeOutCubic(animate({ from: 0, to: 1, start: 12.3, end: 12.65 })(localTime));
  const toastOut  = animate({ from: 0, to: 1, start: 14.5, end: 15.0 })(localTime);
  const toastOp   = toastIn * (1 - toastOut);
  const showToast = toastOp > 0.02;

  const navGlow  = localTime > 7.4 && localTime < 7.9;
  const cartGlow = showToast && localTime < 13.0;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        width: 1180, height: 660,
        direction: 'ltr',
      }}>
        {/* Store fills the frame */}
        <Panel width={1180} height={660} glow={navGlow ? '#73FCD7' : (cartGlow ? '#10B981' : null)}>
          {rightView}
          {/* Cart toast — positioned within the panel, below the SFHeader */}
          {showToast && (
            <SFCartNotification
              productTitle={t("pr_sa_product_vanilla_title")}
              productGlyph="☕"
              productColor="#3E2723"
              opacity={toastOp}
              slideIn={toastIn}
            />
          )}
        </Panel>

        {/* Cursor for the launcher click — only visible during 0.3 – 1.5s */}
        {cursorOp > 0.02 && (
          <Cursor x={curX} y={curY} click={click} opacity={cursorOp}/>
        )}

        {/* Launcher (closed state) — fades out as the widget pops open */}
        {showLauncher && (
          <div style={{
            position: 'absolute',
            bottom: 24, right: 24,
            zIndex: 12,
            opacity: launcherOpacity,
            transform: `scale(${0.96 + launcherOpacity * 0.04})`,
            transformOrigin: 'bottom right',
          }}>
            <WCLauncher label={t("pr_sa_launcher_label")}/>
          </div>
        )}

        {/* Sales agent widget — pops open from the launcher anchor */}
        {showWidget && (
          <div style={{
            position: 'absolute',
            bottom: 24, right: 24,
            zIndex: 10,
            opacity: widgetOpacity,
            transform: `scale(${widgetScale})`,
            transformOrigin: 'bottom right',
          }}>
            <WCWidget agentName={t("pr_sa_widget_agent_name")} width={380} height={520}>
              <ShowAfter at={1.7}>
                <WCBubble from="user" time={t("pr_sa_time_314")}>{t("pr_sa_user_q")}</WCBubble>
              </ShowAfter>
              <ShowAfter at={2.5}>
                <WCTyping/>
              </ShowAfter>
              <ShowAfter at={3.0}>
                <WCBubble from="agent" time={t("pr_sa_time_314")}>
                  {t("pr_sa_agent_reply1")}
                </WCBubble>
              </ShowAfter>
              <ShowAfter at={4.2}>
                <WCBubble from="agent">
                  {t("pr_sa_agent_card")}
                </WCBubble>
              </ShowAfter>
              <ShowAfter at={5.3}>
                <WCBubble from="agent">{t("pr_sa_agent_take_me")}</WCBubble>
              </ShowAfter>
              <ShowAfter at={6.1}>
                <WCBubble from="user" time={t("pr_sa_time_315")}>{t("pr_sa_user_yes")}</WCBubble>
              </ShowAfter>
              <ShowAfter at={6.8}>
                <WCBubble from="agent">{t("pr_sa_agent_lets_go")}</WCBubble>
              </ShowAfter>
              <ShowAfter at={9.0}>
                <WCBubble from="agent" time={t("pr_sa_time_315")}>
                  {t("pr_sa_agent_on_page")}
                </WCBubble>
              </ShowAfter>
              <ShowAfter at={11.0}>
                <WCBubble from="user" time={t("pr_sa_time_316")}>{t("pr_sa_user_add_yes")}</WCBubble>
              </ShowAfter>
              <ShowAfter at={11.8}>
                <WCTyping/>
              </ShowAfter>
              <ShowAfter at={12.3}>
                <WCBubble from="agent" time={t("pr_sa_time_316")}>{t("pr_sa_agent_added")}</WCBubble>
              </ShowAfter>
            </WCWidget>
          </div>
        )}
      </div>
      <StageCaption text={t("pr_cap_sales_agent")} color="#73FCD7"/>
    </React.Fragment>
  );
};

// ─── Scene 23 — Transition: 3 minutes later, on customer's WhatsApp ────────
const PromoSalesFollowupTransition = () => {
  const { localTime } = useSprite();
  useAudioCue([{ at: 0.3, type: 'whoosh' }]);
  const t = Easing.easeOutCubic(animate({ from: 0, to: 1, start: 0.1, end: 0.7 })(localTime));
  const exit = animate({ from: 0, to: 1, start: 1.4, end: 1.9 })(localTime);
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, #002A33, #00505E)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      opacity: 1 - exit, gap: 14,
    }}>
      <div style={{
        fontFamily: 'var(--w-font-ar)', fontSize: 48, fontWeight: 700, color: '#fff',
        opacity: t, transform: `translateY(${(1 - t) * 16}px)`,
        textAlign: 'center', maxWidth: 1000, padding: '0 40px',
        whiteSpace: 'nowrap',
      }}>
        {t("pr_transition_followup_3min")}
      </div>
      <div style={{
        fontFamily: 'var(--w-font-ar)', fontSize: 18, color: '#73FCD7',
        opacity: t, letterSpacing: 0.5,
      }}>
        {t("pr_transition_followup_sub")}
      </div>
    </div>
  );
};

// ─── Scene 24 — Sales Followup: proactive WA → checkout ────────────────────
const PromoSalesFollowup = () => {
  const { localTime } = useSprite();
  useAudioCue([
    { at: 0.5, type: 'whoosh' },  // proactive WA arrives
    { at: 1.0, type: 'pop' },     // agent message
    { at: 6.5, type: 'pop' },     // customer reply
    { at: 9.0, type: 'pop' },     // agent confirm
    { at: 9.5, type: 'whoosh' },  // checkout opens
    { at: 10.5, type: 'beep' },   // checkout highlight
  ]);

  const cam = useSplitCamera([
    { t: 0,    scale: 0.92, x: 0,    y: 0 },
    { t: 1.5,  scale: 0.92, x: 0,    y: 0 },
    { t: 2.5,  scale: 1.05, x: -120, y: 0 },  // focus right (cart) with zoom
    { t: 8.7,  scale: 1.05, x: -120, y: 0 },
    { t: 9.4,  scale: 1.1,  x: -120, y: 0 },  // checkout zoom (stronger)
    { t: 13.5, scale: 1.05, x: -120, y: 0 },
    { t: 15,   scale: 0.92, x: 0,    y: 0 },
  ]);

  const showCheckout = localTime >= 9.4;
  const rightView = showCheckout ? (
    <SFCheckout
      storeName={t("pr_wa_store_name_coffee")}
      customer={t("pr_sf_customer_name")}
      city={t("pr_sf_city")}
      items={[{ title: t("pr_sa_product_vanilla_title"), price: currency(89), qty: 1, color: '#3E2723', glyph: '☕' }]}
      subtotal="89"
      shipping="15"
      total="104"
      highlight={localTime > 9.6 && localTime < 12}
    />
  ) : (
    <SFCart
      cartCount={1}
      items={[{ title: t("pr_sa_product_vanilla_title"), price: currency(89), qty: 1, color: '#3E2723', glyph: '☕', fresh: localTime < 3 }]}
      total="89"
      freeshipMet={false} freeshipRemaining={111}
    />
  );

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) translate(${cam.x}px, 0) scale(${cam.scale})`,
        transformOrigin: 'center center',
        display: 'flex', gap: 20, alignItems: 'center', direction: 'ltr',
      }}>
        <Panel width={420} height={640}>
          <WAChat width={420} height={640}
            headerTitle={t("pr_wa_store_name_coffee")} headerSubtitle={t("pr_wa_status_online")} showLogo={false}
          >
            <ShowAfter at={0.8}>
              <WABubble from="agent" time={t("pr_sf_time_319")} ticks={false}>
                {t("pr_sf_agent_followup")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={6.5}>
              <WABubble from="user" time={t("pr_sf_time_320")}>
                {t("pr_sf_user_reply")}
              </WABubble>
            </ShowAfter>
            <ShowAfter at={8.0}>
              <WATyping/>
            </ShowAfter>
            <ShowAfter at={8.7}>
              <WABubble from="agent" time={t("pr_sf_time_320")} ticks={false}>
                {t("pr_sf_agent_confirm")}
              </WABubble>
            </ShowAfter>
          </WAChat>
        </Panel>
        <Panel width={720} height={540} glow={showCheckout && localTime < 9.5 ? '#10B981' : null}>
          {rightView}
        </Panel>
      </div>
      <StageCaption text={t("pr_cap_sales_followup")} color="#10B981"/>
    </React.Fragment>
  );
};

// ─── Scene 21 — Closing ───────────────────────────────────────────────────
const PromoClosing = () => {
  const { localTime } = useSprite();
  const t1 = animate({ from: 0, to: 1, start: 0.2, end: 0.8 })(localTime);
  const t2 = animate({ from: 0, to: 1, start: 0.5, end: 1.1 })(localTime);
  const t3 = animate({ from: 0, to: 1, start: 0.8, end: 1.4 })(localTime);
  const t4 = animate({ from: 0, to: 1, start: 1.1, end: 1.7 })(localTime);
  const tFlow = animate({ from: 0, to: 1, start: 2.0, end: 2.8 })(localTime);
  const tLogo = animate({ from: 0, to: 1, start: 3.0, end: 3.8 })(localTime);

  const features = [
    { icon: '📱', title: t("pr_close_feat1_title"), desc: t("pr_close_feat1_desc"), op: t1 },
    { icon: '🤖', title: t("pr_close_feat2_title"), desc: t("pr_close_feat2_desc"), op: t2 },
    { icon: '🛒', title: t("pr_close_feat3_title"), desc: t("pr_close_feat3_desc"), op: t3 },
    { icon: '📊', title: t("pr_close_feat4_title"), desc: t("pr_close_feat4_desc"), op: t4 },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, #002A33, #00505E)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      gap: 28,
    }}>
      {/* Feature cards */}
      <div style={{ display: 'flex', gap: 16 }}>
        {features.map((f, i) => (
          <div key={i} style={{
            width: 220, padding: 24, borderRadius: 18,
            background: 'rgba(255,255,255,0.06)',
            border: '1.5px solid rgba(115,252,215,0.2)',
            backdropFilter: 'blur(12px)',
            opacity: f.op, transform: `translateY(${(1 - f.op) * 20}px)`,
            fontFamily: 'var(--w-font-ar)', textAlign: 'center',
          }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontSize: 19, fontWeight: 700, color: '#73FCD7', marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{f.desc}</div>
          </div>
        ))}
      </div>
      {/* Killer flow line */}
      <div style={{
        fontFamily: 'var(--w-font-ar)',
        fontSize: 20, fontWeight: 700, color: '#73FCD7',
        opacity: tFlow, transform: `translateY(${(1 - tFlow) * 12}px)`,
        textAlign: 'center', letterSpacing: 0.3,
        textShadow: '0 0 24px rgba(115,252,215,0.4)',
      }}>
        {t("pr_close_flow_a")} <span style={{ color: 'rgba(255,255,255,0.5)' }}>→</span> {t("pr_close_flow_b")} <span style={{ color: 'rgba(255,255,255,0.5)' }}>→</span> {t("pr_close_flow_c")} <span style={{ color: 'rgba(255,255,255,0.5)' }}>→</span> {t("pr_close_flow_d")} <span style={{ color: 'rgba(255,255,255,0.5)' }}>→</span> {t("pr_close_flow_e")}
      </div>
      {/* Logo + tagline */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 18, marginTop: 4,
        opacity: tLogo, transform: `translateY(${(1 - tLogo) * 16}px)`,
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: 20, background: '#73FCD7',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 24px 60px rgba(115,252,215,0.3)',
        }}>
          <WosoolInfinity size={50} color="#0B1A1F"/>
        </div>
        <div style={{ fontFamily: 'var(--w-font-ar)', textAlign: window.__LOCALE__ === 'en' ? 'left' : 'right' }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{t("pr_brand_name")}</div>
          <div style={{ fontSize: 17, color: '#73FCD7', marginTop: 6 }}>{t("pr_brand_tagline")}</div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', marginTop: 10 }}>{t("pr_brand_now_on_salla")}</div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, {
  PromoIntro, PromoProductCreation, PromoVoiceShip, PromoCoupon,
  PromoMorningTransition, PromoMorningReport,
  PromoCustomerTransition, PromoCustomerChat, PromoCartRecovery,
  PromoSalesAgent, PromoSalesFollowupTransition, PromoSalesFollowup,
  PromoClosing,
  useAudioCue, playTone, ShowAfter,
});
