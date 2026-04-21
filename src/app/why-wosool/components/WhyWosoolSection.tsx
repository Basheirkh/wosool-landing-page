import type { CSSProperties } from "react";
import { MessagesSquare, Smartphone, Moon } from "lucide-react";
import WhyCard from "./WhyCard";

export default function WhyWosoolSection() {
  return (
    <section style={sectionStyle} dir="rtl" className="why-wosool-section">
      <div style={innerStyle}>
        <div style={gridStyle}>
          <WhyCard
            illustration={<MessagesSquare size={48} strokeWidth={1.5} />}
            title="ما تخسر بيعة مرة ثانية"
            description="عميلك يسأل الساعة ٢ فجراً؟ وصول يرد في ٣ ثوانٍ — بالعربي، بنبرتك، بمعلومات متجرك الحقيقية. كل رسالة تلاقي رد. كل عميل يلاقي بيعة."
            accentColor="teal"
          />
          <WhyCard
            illustration={<Smartphone size={48} strokeWidth={1.5} />}
            title="تدير متجرك من جوالك"
            description="أرسل رسالة صوتية، صورة، أو نص — وصول ينفّذ في متجر سلة فوراً. غيّر الأسعار، أضف منتج، تابع الطلبات. ما تحتاج لابتوب. ما تحتاج موظف."
            accentColor="mint"
          />
          <WhyCard
            illustration={<Moon size={48} strokeWidth={1.5} />}
            title="متجرك يبيع وأنت نايم"
            description="أربعة وكلاء أذكياء يشتغلون في متجرك ٢٤/٧ — يردون على العملاء، يساعدون الزوار، ينفّذون أوامرك، ويتعلمون من متجرك. تصحى الصبح وكل شيء تم."
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
