import type { TemplateTheme } from "../types.ts";

export const brutalistTheme = {
  label: "con estilo brutalista",
  canvas: "bg-[#F2F0E8] text-[#111111]",
  border: "border-[#111111]",
  header: "bg-[#DFFF00]",
  muted: "text-[#111111]/65",
  accent: "bg-[#111111]",
  accentText: "text-[#DFFF00]",
  primaryButton:
    "border-2 border-[#111111] bg-[#DFFF00] font-black uppercase text-[#111111] shadow-[4px_4px_0_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111111]",
  secondaryButton:
    "border-2 border-[#111111] bg-white font-black uppercase text-[#111111] hover:bg-[#111111] hover:text-white",
  card: "border-2 border-[#111111] bg-white",
  input:
    "border-2 border-[#111111] bg-white text-[#111111] placeholder:text-[#111111]/50",
  heading: "font-black uppercase leading-[0.88] tracking-[-0.07em]",
} satisfies TemplateTheme;
