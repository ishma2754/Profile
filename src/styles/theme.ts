/**
 * Single source of truth for design tokens.
 * Wired into Tailwind via CSS variables in globals.css / layout.
 */
const lightColors = {
  canvas: "#e4dccb",
  bg: "#fffdf3",
  bgElevated: "#fbf9f3",
  bgDark: "#1c1b19",
  ink: "#1c1b19",
  inkMuted: "#6f6c64",
  inkOnDark: "#f4f1e8",
  inkMutedOnDark: "#b7b2a6",
  inkInverse: "#f4f1e8",
  line: "#ddd8cc",
  lineSoft: "#e8e3d8",
  lineOnDark: "#3a3832",
  accent: "#e6a31a",
  accentInk: "#1c1b19",
} as const;

const darkColors = {
  canvas: "#0c0b0a",
  bg: "#161513",
  bgElevated: "#1e1d1a",
  bgDark: "#0e0d0c",
  ink: "#f4f1e8",
  inkMuted: "#b7b2a6",
  inkOnDark: "#f4f1e8",
  inkMutedOnDark: "#8f8b82",
  inkInverse: "#141311",
  line: "#3a3832",
  lineSoft: "#2a2824",
  lineOnDark: "#3a3832",
  accent: "#e6a31a",
  accentInk: "#1c1b19",
} as const;

export const theme = {
  colors: lightColors,
  font: {
    display: "var(--font-display)",
    body: "var(--font-body)",
  },
  space: {
    sectionY: "6rem",
    sectionYSm: "3.5rem",
    sectionX: "1.5rem",
    sectionXLg: "3rem",
    rowGap: "0",
    panelGap: "2rem",
    stack: "1.25rem",
    stackLg: "2rem",
  },
  type: {
    hero: "clamp(3rem, 5.6vw, 4.75rem)",
    section: "clamp(2.25rem, 3.8vw, 3.25rem)",
    projectTitle: "clamp(1.7rem, 2.4vw, 2.15rem)",
    panelTitle: "clamp(1.5rem, 2vw, 1.85rem)",
    body: "1.0625rem",
    bodySm: "0.9375rem",
    label: "0.6875rem",
  },
  radius: {
    panel: "0.125rem",
    control: "0.125rem",
    pill: "0.125rem",
  },
  motion: {
    marqueeDuration: "32s",
    accordion: "420ms",
  },
  layout: {
    max: "80rem",
    metaWidth: "22rem",
  },
} as const;

export type Theme = typeof theme;

function colorVars(colors: { [K in keyof typeof lightColors]: string }) {
  return [
    `--theme-canvas:${colors.canvas}`,
    `--theme-bg:${colors.bg}`,
    `--theme-bg-elevated:${colors.bgElevated}`,
    `--theme-bg-dark:${colors.bgDark}`,
    `--theme-ink:${colors.ink}`,
    `--theme-ink-muted:${colors.inkMuted}`,
    `--theme-ink-on-dark:${colors.inkOnDark}`,
    `--theme-ink-muted-on-dark:${colors.inkMutedOnDark}`,
    `--theme-ink-inverse:${colors.inkInverse}`,
    `--theme-line:${colors.line}`,
    `--theme-line-soft:${colors.lineSoft}`,
    `--theme-line-on-dark:${colors.lineOnDark}`,
    `--theme-accent:${colors.accent}`,
    `--theme-accent-ink:${colors.accentInk}`,
  ].join(";");
}

/** Light colors on :root, dark colors when `data-theme="dark"`. */
export function themeColorCss() {
  return `:root{${colorVars(lightColors)};color-scheme:light}[data-theme="dark"]{${colorVars(darkColors)};color-scheme:dark}`;
}

/** Non-color tokens. Colors live in themeColorCss so the theme can switch. */
export function themeCssVars(): Record<string, string> {
  const { space, type, radius, motion, layout } = theme;
  return {
    "--theme-section-y": space.sectionY,
    "--theme-section-y-sm": space.sectionYSm,
    "--theme-section-x": space.sectionX,
    "--theme-section-x-lg": space.sectionXLg,
    "--theme-row-gap": space.rowGap,
    "--theme-panel-gap": space.panelGap,
    "--theme-stack": space.stack,
    "--theme-stack-lg": space.stackLg,
    "--theme-type-hero": type.hero,
    "--theme-type-section": type.section,
    "--theme-type-project": type.projectTitle,
    "--theme-type-panel": type.panelTitle,
    "--theme-type-body": type.body,
    "--theme-type-body-sm": type.bodySm,
    "--theme-type-label": type.label,
    "--theme-radius-panel": radius.panel,
    "--theme-radius-control": radius.control,
    "--theme-radius-pill": radius.pill,
    "--theme-marquee-duration": motion.marqueeDuration,
    "--theme-accordion": motion.accordion,
    "--theme-layout-max": layout.max,
    "--theme-meta-width": layout.metaWidth,
  };
}
