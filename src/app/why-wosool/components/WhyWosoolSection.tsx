import type { CSSProperties } from "react";
import { MessagesSquare, Smartphone, Clock } from "lucide-react";
import WhyCard from "./WhyCard";

export default function WhyWosoolSection() {
  return (
    <section style={sectionStyle} dir="rtl" className="why-wosool-section">
      <div style={innerStyle}>
        <div style={gridStyle}>
          <WhyCard
            illustration={<MessagesSquare size={48} strokeWidth={1.5} />}
            title="لا تخسر بيعة مرة أخرى"
            description="يسأل عميلك الساعة ٢ فجرًا؟ وصول يرد في ٣ ثوانٍ — بالعربية، بنبرة متجرك، وبمعلومات حقيقية. كل رسالة تجد ردًا، وكل عميل يجد فرصة شراء."
            accentColor="teal"
          />
          <WhyCard
            illustration={<Smartphone size={48} strokeWidth={1.5} />}
            title="أدر متجرك من جوالك"
            description="أرسل رسالة صوتية، صورة، أو نص — وصول ينفّذ في متجر سلة فورًا. حدّث الأسعار، أضف منتجًا، تابع الطلبات. كل ذلك من واتساب، بدون أدوات إضافية."
            accentColor="mint"
          />
          <WhyCard
            illustration={<Clock size={48} strokeWidth={1.5} />}
            title="متجرك يعمل على مدار الساعة"
            description="أربعة وكلاء أذكياء يعملون داخل متجرك ٢٤/٧ — يردون على العملاء، يساعدون الزوار، ينفّذون أوامرك، ويتعلمون من متجرك. تبدأ يومك وكل شيء جاهز."
            accentColor="deep-teal"
          />
        </div>
      </div>
    </section>
  );
}

const sectionStyle: CSSProperties = {
  width: "100%",
  background: "var(--w-canvas)",
  padding: "80px 24px",
};

const innerStyle: CSSProperties = {
  maxWidth: 1320,
  margin: "0 auto",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 32,
  alignItems: "stretch",
};
