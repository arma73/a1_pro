export function limitRange(
  number: number,
  [minimum, maximum]: [number, number]
): number {
  return Math.min(maximum, Math.max(minimum, number));
}
