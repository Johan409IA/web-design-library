import type { TemplateTheme } from "./types.ts";

export const neutralTheme = {
  label: "neutral",
  canvas: "bg-white text-slate-900",
  border: "border-slate-200",
  header: "bg-white",
  muted: "text-slate-500",
  accent: "bg-slate-900",
  accentText: "text-white",
  primaryButton:
    "rounded-md border border-slate-900 bg-slate-900 text-white hover:bg-slate-700",
  secondaryButton:
    "rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  card: "rounded-lg border border-slate-200 bg-slate-50",
  input:
    "rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400",
  heading: "font-semibold tracking-tight",
} satisfies TemplateTheme;
