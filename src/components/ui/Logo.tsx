import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "white" | "dark" | "brand" | "adaptive";
}

const sizeMap = {
  sm: { symbol: 20, text: "text-sm" },
  md: { symbol: 26, text: "text-lg" },
  lg: { symbol: 36, text: "text-2xl" },
};

export default function Logo({
  className = "",
  showText = true,
  size = "md",
  color = "white",
}: LogoProps) {
  const s = sizeMap[size];
  const fill = color === "white"
    ? "#F5F5F5"
    : color === "brand"
      ? "#00D97E"
      : color === "adaptive"
        ? "currentColor"
        : "#111827";
  const textColor =
    color === "white"
      ? "text-white"
      : color === "brand"
        ? "text-brand-primary"
        : color === "adaptive"
          ? "theme-text-primary"
          : "text-[#111827]";

  return (
    <Link href="/" className={`flex items-center gap-2 ${textColor} ${className}`}>
      {/* Custom infinity symbol from logo-wosool-sympol.svg — adapted color */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="74.424 10.58 46.872 28.387"
        width={s.symbol}
        height={s.symbol * 0.605}
        role="img"
        aria-label="Wosool logo"
      >
        <path
          fill={fill}
          d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"
        />
      </svg>
      {showText && <span className={`${s.text} font-semibold`}>وصول</span>}
    </Link>
  );
}
