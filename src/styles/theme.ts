/**
 * Single source of truth for design tokens.
 * Wired into Tailwind via CSS variables in globals.css / layout.
 */
export const theme = {
  colors: {
    bg: "#e8e8e8",
    bgElevated: "#f2f2f2",
    bgDark: "#0f0f0f",
    ink: "#0a0a0a",
    inkMuted: "#5c5c5c",
    inkOnDark: "#f5f5f5",
    inkMutedOnDark: "#9a9a9a",
    line: "#1a1a1a",
    lineSoft: "#c8c8c8",
    lineOnDark: "#2e2e2e",
    accent: "#0a0a0a",
  },
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
    hero: "clamp(2.75rem, 9vw, 5.75rem)",
    section: "clamp(2rem, 5vw, 3.5rem)",
    projectTitle: "clamp(1.75rem, 4vw, 3rem)",
    panelTitle: "clamp(2rem, 4vw, 3.25rem)",
    body: "1.0625rem",
    bodySm: "0.9375rem",
    label: "0.6875rem",
  },
  radius: {
    panel: "1.25rem",
    control: "0.5rem",
    pill: "999px",
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

/** CSS custom properties injected on `:root` from theme.ts */
export function themeCssVars(): Record<string, string> {
  const { colors, space, type, radius, motion, layout } = theme;
  return {
    "--theme-bg": colors.bg,
    "--theme-bg-elevated": colors.bgElevated,
    "--theme-bg-dark": colors.bgDark,
    "--theme-ink": colors.ink,
    "--theme-ink-muted": colors.inkMuted,
    "--theme-ink-on-dark": colors.inkOnDark,
    "--theme-ink-muted-on-dark": colors.inkMutedOnDark,
    "--theme-line": colors.line,
    "--theme-line-soft": colors.lineSoft,
    "--theme-line-on-dark": colors.lineOnDark,
    "--theme-accent": colors.accent,
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
