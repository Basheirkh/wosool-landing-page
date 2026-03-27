"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "المنتج", href: "#product" },
    { label: "الأسعار", href: "#pricing" },
    { label: "المدونة", href: "#" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#080B0F]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" color="white" />

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#8a8f98] hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-[#8a8f98] hover:text-white transition-colors px-4 py-2"
            >
              تسجيل الدخول
            </a>
            <a
              href="#"
              className="text-sm font-medium bg-white text-[#080B0F] rounded-full px-5 py-2.5 hover:bg-white/90 transition-all hover:-translate-y-[1px]"
            >
              ابدأ مجاناً
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="القائمة"
          >
            <span
              className={`block w-5 h-[2px] bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080B0F]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-[60px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-white font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8 items-center">
            <a
              href="#"
              className="text-[#8a8f98] text-lg"
            >
              تسجيل الدخول
            </a>
            <a
              href="#"
              className="bg-brand-primary text-[#080B0F] rounded-full px-8 py-3 text-lg font-semibold"
            >
              ابدأ مجاناً
            </a>
          </div>
        </div>
      )}
    </>
  );
}
