"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LocaleSwitcher from "@/components/landing/LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: locale === "ar" ? "القدرات" : "Features", href: "/features" },
    { label: locale === "ar" ? "الموظفون الذكيون" : "Agents", href: "/agents" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("blog"), href: "/blog" },
  ];

  return (
    <>
      <nav
        dir={dir}
        style={{ direction: dir }}
        className={`fixed top-0 inset-x-0 z-50 h-[60px] flex items-center transition-all duration-300 ${
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
                <span className="absolute bottom-0 end-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* End buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher />
            <ThemeToggle />
            <a
              href="https://app.wosool.ai/login"
              target="_blank"
              rel="noreferrer"
              className="text-sm transition-colors px-4 py-2 theme-link-muted"
            >
              {t("login")}
            </a>
            <Link
              href="/pricing"
              className="theme-btn-primary text-sm font-medium rounded-full px-5 py-2.5 transition-all hover:-translate-y-[1px]"
            >
              {t("start_trial")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
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
            <LocaleSwitcher />
            <ThemeToggle />
            <a
              href="https://app.wosool.ai/login"
              target="_blank"
              rel="noreferrer"
              className="theme-link-muted text-lg"
            >
              {t("login")}
            </a>
            <Link
              href="/pricing"
              className="theme-btn-primary rounded-full px-8 py-3 text-lg font-semibold"
            >
              {t("start_trial")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
