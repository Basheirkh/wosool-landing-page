export const clamp01 = (t: number) => Math.max(0, Math.min(1, t));

export const easeOutCubic = (t: number) => {
  const c = clamp01(t);
  return 1 - Math.pow(1 - c, 3);
};

export const easeInOutCubic = (t: number) => {
  const c = clamp01(t);
  return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
};

export const easeOutBack = (t: number) => {
  const c = clamp01(t);
  const s = 1.70158;
  const q = c - 1;
  return 1 + (s + 1) * q * q * q + s * q * q;
};

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Remap ctx.progress (0..1) to a sub-range, clamped. */
export const segment = (t: number, start: number, end: number) => {
  if (end <= start) return t >= end ? 1 : 0;
  return clamp01((t - start) / (end - start));
};
