export type ArtTheme =
  | "signal"
  | "market"
  | "memory"
  | "vault"
  | "network"
  | "future"
  | "developer";

export function getArtBackground(theme: ArtTheme, accent: string, secondaryAccent: string) {
  const base = "linear-gradient(135deg, var(--art-bg-start) 0%, var(--art-bg-mid) 42%, var(--art-bg-end) 100%)";

  switch (theme) {
    case "signal":
      return [
        `radial-gradient(circle at 18% 24%, ${accent}24, transparent 30%)`,
        `radial-gradient(circle at 78% 18%, ${secondaryAccent}16, transparent 24%)`,
        base,
      ].join(", ");
    case "market":
      return [
        `radial-gradient(circle at 14% 26%, ${accent}24, transparent 24%)`,
        `radial-gradient(circle at 78% 22%, ${secondaryAccent}18, transparent 26%)`,
        `radial-gradient(circle at 48% 82%, ${accent}10, transparent 28%)`,
        base,
      ].join(", ");
    case "memory":
      return [
        `radial-gradient(circle at 22% 20%, ${accent}20, transparent 28%)`,
        `radial-gradient(circle at 80% 26%, ${secondaryAccent}16, transparent 24%)`,
        `radial-gradient(circle at 52% 72%, ${accent}0d, transparent 30%)`,
        base,
      ].join(", ");
    case "vault":
      return [
        `radial-gradient(circle at 20% 76%, ${secondaryAccent}18, transparent 26%)`,
        `radial-gradient(circle at 80% 22%, ${accent}16, transparent 24%)`,
        base,
      ].join(", ");
    case "network":
      return [
        `radial-gradient(circle at 20% 22%, ${secondaryAccent}18, transparent 26%)`,
        `radial-gradient(circle at 82% 24%, ${accent}1a, transparent 28%)`,
        `radial-gradient(circle at 50% 78%, ${secondaryAccent}0c, transparent 34%)`,
        base,
      ].join(", ");
    case "future":
      return [
        `radial-gradient(circle at 18% 20%, ${secondaryAccent}18, transparent 26%)`,
        `radial-gradient(circle at 78% 76%, ${accent}18, transparent 28%)`,
        base,
      ].join(", ");
    case "developer":
      return [
        `radial-gradient(circle at 18% 18%, ${accent}16, transparent 24%)`,
        `radial-gradient(circle at 84% 24%, ${secondaryAccent}16, transparent 24%)`,
        `radial-gradient(circle at 60% 80%, ${accent}0c, transparent 32%)`,
        base,
      ].join(", ");
    default:
      return [
        `radial-gradient(circle at 20% 20%, ${accent}22, transparent 30%)`,
        `radial-gradient(circle at 80% 30%, ${secondaryAccent}22, transparent 28%)`,
        base,
      ].join(", ");
  }
}
