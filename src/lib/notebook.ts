// Notebook design tokens, ported verbatim from the Claude Design handoff
// (design-reference/project/notebook.jsx). Single source of truth for
// colors used across all notebook components and pages.

export const NB = {
  paper: '#fbfaf5',
  ink: '#1a1a1a',
  inkSoft: '#2a2a2a',
  pencil: '#5a5a5a',
  grid: 'rgba(60, 90, 180, 0.085)',
  gridStrong: 'rgba(60, 90, 180, 0.14)',
  yellow: '#ffe45c',
  yellowDeep: '#ffd633',
  pink: '#ffc9d4',
  blue: '#bcdfff',
  green: '#c6efb0',
  red: 'oklch(0.58 0.19 25)',
  redInk: 'oklch(0.48 0.18 25)',
} as const;

// Named sticky-note / logo colors, used by content (logoColor field) so the
// CMS can pick a swatch by name instead of a raw hex value.
export const SWATCHES: Record<string, string> = {
  yellow: NB.yellow,
  pink: NB.pink,
  blue: NB.blue,
  green: NB.green,
};

export type SwatchName = keyof typeof SWATCHES;

// Resolve a swatch name (from content) to a hex value; falls back to yellow.
export function swatch(name?: string | null): string {
  return (name && SWATCHES[name]) || NB.yellow;
}
