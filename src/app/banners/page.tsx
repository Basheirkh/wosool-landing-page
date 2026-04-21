"use client";

import { useEffect, useMemo, useState } from "react";
import BannerFrame from "./components/BannerFrame";
import Banner1 from "./banners/Banner1";
import Banner2 from "./banners/Banner2";
import Banner3 from "./banners/Banner3";
import Banner4 from "./banners/Banner4";
import Banner5 from "./banners/Banner5";
import Banner6 from "./banners/Banner6";

interface BannerEntry {
  id: number;
  name: string;
  slug: string;
  Component: React.ComponentType;
}

/**
 * Single source of truth for banner order, naming, and routing.
 * The render script will consume this same list (via the page's
 * exported module or a parallel constant file) when it lands in Phase 8.
 */
const BANNERS: BannerEntry[] = [
  { id: 1, slug: "the-promise",    name: "The Promise",    Component: Banner1 },
  { id: 2, slug: "the-team",       name: "The Team",       Component: Banner2 },
  { id: 3, slug: "customer-agent", name: "Customer Agent", Component: Banner3 },
  { id: 4, slug: "manager-agent",  name: "Manager Agent",  Component: Banner4 },
  { id: 5, slug: "sales-agent",    name: "Sales Agent",    Component: Banner5 },
  { id: 6, slug: "trust",          name: "Trust",          Component: Banner6 },
];

interface Query {
  render: boolean;
  /** 1..6, or null to show all */
  banner: number | null;
}

export default function BannersPage() {
  // Client-mount gate: avoids SSR/CSR mismatch when reading window.location.
  const [query, setQuery] = useState<Query>({ render: false, banner: null });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawBanner = Number(params.get("banner"));
    setQuery({
      render: params.get("render") === "true",
      banner:
        Number.isInteger(rawBanner) && rawBanner >= 1 && rawBanner <= BANNERS.length
          ? rawBanner
          : null,
    });
    setMounted(true);
  }, []);

  const visible = useMemo(
    () => (query.banner ? BANNERS.filter((b) => b.id === query.banner) : BANNERS),
    [query.banner],
  );

  // On initial SSR render (before mount), show all banners with no chrome.
  // After mount, apply the real query state.
  const isRender = mounted && query.render;
  const showDevLinks = mounted && !query.render && process.env.NODE_ENV !== "production";

  const outerPad = isRender ? 0 : 40;
  const betweenBanners = isRender ? 0 : 48;
  const outerBg = isRender ? "#F8F8F8" : "#0B1A1F";

  return (
    <div
      style={{
        padding: outerPad,
        background: outerBg,
        minHeight: "100vh",
        // Banners are 1920px wide. Dev preview page scrolls horizontally on
        // narrow viewports rather than squishing them.
        overflow: "auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: betweenBanners }}>
        {visible.map(({ id, name, slug, Component }, i) => (
          <div key={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <BannerFrame id={id} name={name.toUpperCase()}>
              <Component />
            </BannerFrame>
            {showDevLinks && (
              <a
                href={`?banner=${id}&render=true`}
                style={{
                  color: "#73FCD7",
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                  opacity: 0.85,
                }}
              >
                Render banner {id} — {slug} →
              </a>
            )}
            {/* Suppress unused-index warning while still making intent clear */}
            {i === -1 && null}
          </div>
        ))}
      </div>
    </div>
  );
}
