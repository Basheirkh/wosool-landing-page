"use client";

import { useEffect, useState } from "react";

/**
 * Generate a QR SVG string at runtime. Lazy-imports `qrcode` so it stays
 * out of the initial bundle. The SVG uses transparent background so a
 * wrapper can supply its own surface color + center logo overlay.
 */
export function useQrCode(data: string): string | null {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("qrcode")
      .then(({ default: QRCode }) =>
        QRCode.toString(data, {
          type: "svg",
          errorCorrectionLevel: "H",
          margin: 0,
          color: { dark: "#0B1A1F", light: "#00000000" },
        }),
      )
      .then((result) => {
        if (!cancelled) setSvg(result);
      });
    return () => {
      cancelled = true;
    };
  }, [data]);

  return svg;
}
