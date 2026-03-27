import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#00D97E",
          glow: "rgba(0, 217, 126, 0.15)",
          dark: "#00B468",
        },
        surface: {
          DEFAULT: "#111111",
          elevated: "#1a1a1a",
          light: "#f0ede6",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
          medium: "rgba(255, 255, 255, 0.12)",
        },
      },
      fontFamily: {
        arabic: ["var(--font-ibm-arabic)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "hero-mobile": ["40px", { lineHeight: "1.1" }],
        "hero-tablet": ["64px", { lineHeight: "1.1" }],
        "hero-desktop": ["96px", { lineHeight: "1.05" }],
      },
      animation: {
        "float-1": "float3d 6s ease-in-out infinite alternate",
        "float-2": "float3d 6s ease-in-out infinite alternate 2s",
        "float-3": "float3d 6s ease-in-out infinite alternate 4s",
        marquee: "marquee 30s linear infinite",
        "slow-spin": "slow-spin 8s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float3d: {
          "0%": {
            transform: "translateY(0px) rotateY(0deg) rotateX(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotateY(15deg) rotateX(5deg)",
          },
          "100%": {
            transform: "translateY(-8px) rotateY(-10deg) rotateX(-5deg)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
