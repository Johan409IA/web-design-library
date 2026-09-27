import type { TemplateTheme } from "../types.ts";

export const monochromeTheme = {
  label: "con estilo Monochrome",
  canvas: "bg-[#080808] text-[#F7F5F2]",
  border: "border-white/20",
  header: "bg-[#080808]",
  muted: "text-[#F7F5F2]/60",
  accent: "bg-[#F7F5F2]",
  accentText: "text-[#080808]",
  primaryButton:
    "border border-[#F7F5F2] bg-[#F7F5F2] font-medium text-[#080808] hover:bg-transparent hover:text-[#F7F5F2]",
  secondaryButton:
    "border border-white/35 bg-transparent font-medium text-[#F7F5F2] hover:border-[#F7F5F2] hover:bg-white/10",
  card: "border border-white/20 bg-[#1D1D1D]",
  input:
    "border border-white/35 bg-transparent text-[#F7F5F2] placeholder:text-white/40",
  heading: "font-serif font-light uppercase leading-[0.88] tracking-[-0.05em]",
} satisfies TemplateTheme;
