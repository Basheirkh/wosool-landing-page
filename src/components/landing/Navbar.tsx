"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "المنتج", href: "/#product" },
    { label: "الأسعار", href: "/#pricing" },
    { label: "المدونة", href: "/blog" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center transition-all duration-300 ${
          scrolled
            ? "theme-nav-shell backdrop-blur-xl border-b"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" color="adaptive" />

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors relative group theme-link-muted"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/blog"
              className="text-sm transition-colors px-4 py-2 theme-link-muted"
            >
              المدونة
            </Link>
            <Link
              href="/#pricing"
              className="theme-btn-primary text-sm font-medium rounded-full px-5 py-2.5 transition-all hover:-translate-y-[1px]"
            >
              ابدأ مجاناً
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="القائمة"
          >
            <span
              className={`block w-5 h-[2px] bg-foreground transition-transform ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-foreground transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-foreground transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="theme-nav-overlay fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-[60px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="theme-text-primary text-2xl font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-8 items-center">
            <ThemeToggle />
            <Link
              href="/blog"
              className="theme-link-muted text-lg"
            >
              المدونة
            </Link>
            <Link
              href="/#pricing"
              className="theme-btn-primary rounded-full px-8 py-3 text-lg font-semibold"
            >
              ابدأ مجاناً
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
