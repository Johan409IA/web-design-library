import type {
  DesignColorCategory,
  DesignDefinition,
} from "../designs/types.ts";

const list = (items: string[]) => items.map((item) => "- " + item).join("\n");

const colorSection = (
  style: DesignDefinition,
  category: DesignColorCategory,
  fallback: string,
) => {
  const colors = style.colors.filter((color) => color.category === category);
  return colors.length
    ? colors
        .map(
          (color) =>
            "- **" + color.name + "** (" + color.hex + ") — " + color.role,
        )
        .join("\n")
    : fallback;
};

const yamlValue = (value: string) => `"${value.replaceAll('"', '\\"')}"`;

export function createDesignMarkdown(style: DesignDefinition) {
  const colorTokens = style.colors
    .map(
      (color) =>
        "  " +
        color.name.toLowerCase().replace(/\s+/g, "-") +
        ': "' +
        color.hex +
        '"',
    )
    .join("\n");
  const palette = style.colors
    .map(
      (color) =>
        "- **" + color.name + "** (" + color.hex + ") — " + color.role,
    )
    .join("\n");

  return [
    "---",
    "name: " + yamlValue(style.name),
    "colors:",
    colorTokens,
    "---",
    "",
    "# Design System: " + style.name,
    "",
    "## 1. Visual Theme & Atmosphere",
    "",
    style.description,
    "",
    "## 2. Color Palette & Roles",
    "",
    "### Primary Foundation",
    "",
    colorSection(style, "foundation", "- Sin tokens exclusivos para superficies."),
    "",
    "### Accent & Interactive",
    "",
    colorSection(style, "accent", "- Sin token de acento exclusivo."),
    "",
    "### Typography & Text Hierarchy",
    "",
    colorSection(style, "typography", "- Usa los colores de la base para el texto."),
    "",
    "### Functional States",
    "",
    colorSection(
      style,
      "state",
      "- Los estados reutilizan el acento y la tinta con contraste accesible; no se definen tokens semánticos adicionales.",
    ),
    "",
    "## 3. Typography Rules",
    "",
    "### Hierarchy & Weights",
    "",
    "- **Heading:** " + style.typography.heading,
    "- **Body:** " + style.typography.body,
    "- **Principle:** " + style.typography.description,
    "- **Hierarchy:** " + style.typography.hierarchy,
    "",
    "### Spacing Principles",
    "",
    style.typography.spacing,
    "",
    "## 4. Component Stylings",
    "",
    "### Buttons",
    "",
    style.components.buttons,
    "",
    "### Cards & Content Containers",
    "",
    style.components.cards,
    "",
    "### Navigation",
    "",
    style.components.navigation,
    "",
    "### Inputs & Forms",
    "",
    style.components.inputs,
    "",
    "### Featured Project & Metric Panels",
    "",
    style.components.domainSpecific,
    "",
    "## 5. Layout Principles",
    "",
    style.layout.description,
    "",
    "### Grid & Structure",
    "",
    style.layout.grid,
    "",
    "### Whitespace Strategy",
    "",
    style.layout.whitespace,
    "",
    "### Alignment & Visual Balance",
    "",
    style.layout.alignment,
    "",
    "### Responsive Behavior & Touch",
    "",
    style.layout.responsive,
    "",
    "## 6. Design System Notes for Stitch Generation",
    "",
    "### Language to Use",
    "",
    list(style.keywords),
    "",
    "### Color References",
    "",
    palette,
    "",
    "### Component Prompts",
    "",
    style.aiPrompt,
    "",
    "### Incremental Iteration",
    "",
    style.iterationGuidance,
    "",
  ].join("\n");
}
