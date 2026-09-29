import { brutalistDefinition } from "./brutalista/definition.ts";
import { brutalistTheme } from "./brutalista/theme.ts";
import { grungeDefinition } from "./grunge/definition.ts";
import { grungeTheme } from "./grunge/theme.ts";
import { monochromeDefinition } from "./monochrome/definition.ts";
import { monochromeTheme } from "./monochrome/theme.ts";
import { neutralTheme } from "./neutral-theme.ts";
import type {
  DesignDefinition,
  DesignModule,
  DesignStyle,
} from "./types.ts";

const designModules = [
  {
    definition: brutalistDefinition,
    theme: brutalistTheme,
  },
  {
    definition: monochromeDefinition,
    theme: monochromeTheme,
  },
  {
    definition: grungeDefinition,
    theme: grungeTheme,
  },
] satisfies DesignModule[];

function assertUniqueDesigns(definitions: DesignDefinition[]) {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const definition of definitions) {
    if (ids.has(definition.id)) {
      throw new Error(`El id de diseño "${definition.id}" está duplicado.`);
    }
    if (slugs.has(definition.slug)) {
      throw new Error(`El slug de diseño "${definition.slug}" está duplicado.`);
    }
    ids.add(definition.id);
    slugs.add(definition.slug);
  }
}

export const designDefinitions = designModules.map(
  ({ definition }) => definition,
);

assertUniqueDesigns(designDefinitions);

export const styles: DesignStyle[] = designModules.map(({ definition, theme }) => ({
  ...definition,
  theme,
}));

export const featuredStyles = styles;
export const activeDesignSlug = brutalistDefinition.slug;

export type ComparisonTarget = {
  slug: string;
  name: string;
  theme: DesignStyle["theme"];
  isNeutral: boolean;
};

export const comparisonTargets: ComparisonTarget[] = [
  {
    slug: "neutral",
    name: "Plantilla neutral",
    theme: neutralTheme,
    isNeutral: true,
  },
  ...styles.map((style) => ({
    slug: style.slug,
    name: style.name,
    theme: style.theme,
    isNeutral: false,
  })),
];

export const getStyle = (slug: string) =>
  styles.find((style) => style.slug === slug);

export const getComparisonTarget = (slug: string) =>
  comparisonTargets.find((target) => target.slug === slug);

export const searchStyles = (query: string) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return styles;

  return styles.filter((style) =>
    [
      style.name,
      style.category,
      style.shortDescription,
      style.description,
      ...style.tags,
      ...style.keywords,
      ...style.characteristics,
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery),
  );
};

export type {
  DesignColor,
  DesignColorCategory,
  DesignDefinition,
  DesignModule,
  DesignStyle,
  TemplateTheme,
} from "./types.ts";
