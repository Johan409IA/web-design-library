export type DesignCollection = {
  slug: string;
  name: string;
  description: string;
  styleSlugs: string[];
};

export const collections: DesignCollection[] = [
  {
    slug: "alto-contraste",
    name: "Alto contraste",
    description:
      "Diseños que priorizan legibilidad, jerarquía y una presencia visual marcada.",
    styleSlugs: ["brutalista", "monochrome"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    description:
      "Diseños guiados por ritmo tipográfico, composición y lectura pausada.",
    styleSlugs: ["monochrome"],
  },
  {
    slug: "experimental",
    name: "Experimental",
    description:
      "Diseños que hacen visible la estructura y exploran contrastes más directos.",
    styleSlugs: ["brutalista", "grunge"],
  },
];

export const getCollection = (slug: string) =>
  collections.find((collection) => collection.slug === slug);
