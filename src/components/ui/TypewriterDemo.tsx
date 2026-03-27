"use client";

import { useEffect, useState, useCallback } from "react";

interface Message {
  sender: "customer" | "wosool";
  text: string;
}

const conversation: Message[] = [
  { sender: "customer", text: "وين طلبيتي رقم 4521؟" },
  {
    sender: "wosool",
    text: "طلبك #4521 جاري التجهيز 🔄\nمتوقع وصوله الخميس 27 مارس",
  },
  { sender: "customer", text: "شكراً 🙏" },
  { sender: "wosool", text: "بخدمتك دائماً ✨" },
];

export default function TypewriterDemo() {
  const [visibleMessages, setVisibleMessages] = useState<
    { sender: string; text: string; typing: boolean }[]
  >([]);
  const [cycleKey, setCycleKey] = useState(0);

  const runConversation = useCallback(async () => {
    setVisibleMessages([]);

    for (let i = 0; i < conversation.length; i++) {
      const msg = conversation[i];

      // Show typing indicator
      await new Promise((r) => setTimeout(r, 600));
      setVisibleMessages((prev) => [
        ...prev,
        { sender: msg.sender, text: "", typing: true },
      ]);

      // Type out the message
      await new Promise((r) => setTimeout(r, 800));

      const chars = Array.from(msg.text);
      for (let c = 0; c <= chars.length; c++) {
        const partial = chars.slice(0, c).join("");
        setVisibleMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            sender: msg.sender,
            text: partial,
            typing: c < chars.length,
          };
          return updated;
        });
        await new Promise((r) => setTimeout(r, 40));
      }

      await new Promise((r) => setTimeout(r, 400));
    }

    // Wait then restart
    await new Promise((r) => setTimeout(r, 4000));
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    runConversation();
  }, [cycleKey, runConversation]);

  return (
    <div className="w-full max-w-[360px] mx-auto">
      {/* WhatsApp-style header */}
      <div className="bg-[#1a1a2e] rounded-t-2xl px-4 py-3 flex items-center gap-3 border border-white/[0.06]">
        <div className="w-9 h-9 rounded-full bg-brand-primary/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.424 10.58 46.872 28.387" width="18" height="11" aria-label="Wosool">
            <path fill="#00D97E" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"/>
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">وصول</div>
          <div className="text-xs text-[#8a8f98]">متصل الآن</div>
        </div>
        <div className="mr-auto flex gap-4 text-[#8a8f98]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </div>
      </div>

      {/* Chat body */}
      <div className="bg-[#0d0d1a] min-h-[280px] p-4 flex flex-col gap-3 border-x border-white/[0.06]">
        {visibleMessages.map((msg, i) => (
          <div
            key={`${cycleKey}-${i}`}
            className={`flex ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed ${
                msg.sender === "customer"
                  ? "wa-bubble-sent text-white"
                  : "wa-bubble-received text-white"
              }`}
            >
              {msg.typing && !msg.text ? (
                <div className="flex gap-1 py-1 px-2">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              ) : (
                <span style={{ whiteSpace: "pre-line" }}>{msg.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#1a1a2e] rounded-b-2xl px-4 py-3 flex items-center gap-3 border border-t-0 border-white/[0.06]">
        <div className="flex-1 bg-white/[0.05] rounded-full px-4 py-2 text-sm text-[#8a8f98]">
          اكتب رسالة...
        </div>
        <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#080B0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
      </div>
    </div>
  );
}
