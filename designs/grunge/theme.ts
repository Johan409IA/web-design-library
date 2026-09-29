import type { TemplateTheme } from "../types.ts";

export const grungeTheme = {
  label: "con estilo grunge",
  canvas:
    "bg-[#171513] bg-[url('/designs/Grunge/chalk-texture.svg')] text-[#E9E1D3]",
  border: "border-[#8C8274]",
  header:
    "bg-[#201D19] bg-[url('/designs/Grunge/chalk-texture.svg')]",
  muted: "text-[#B6ADA0]",
  accent:
    "bg-[#D85A43] bg-[url('/designs/Grunge/chalk-texture.svg')]",
  accentText: "text-[#171513]",
  primaryButton:
    "border-2 border-[#171513] bg-[#D85A43] font-black uppercase tracking-wide text-[#171513] shadow-[3px_3px_0_#E9E1D3] hover:bg-[#E9E1D3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D3]",
  secondaryButton:
    "border-2 border-[#E9E1D3] bg-transparent font-bold uppercase tracking-wide text-[#E9E1D3] hover:bg-[#E9E1D3] hover:text-[#171513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D3]",
  card:
    "border-2 border-[#8C8274] bg-[#E9E1D3] bg-[url('/designs/Grunge/ink-texture.svg')] text-[#171513] [&_p]:text-[#514940] [&_span]:text-[#514940]",
  input:
    "border-2 border-[#8C8274] bg-[#E9E1D3] text-[#171513] placeholder:text-[#514940]",
  heading: "font-black uppercase leading-[0.9] tracking-[-0.055em]",
} satisfies TemplateTheme;
