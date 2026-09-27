export type DesignColorCategory =
  | "foundation"
  | "accent"
  | "typography"
  | "state";

export type DesignColor = {
  name: string;
  hex: string;
  role: string;
  category: DesignColorCategory;
};

export type TemplateTheme = {
  label: string;
  canvas: string;
  border: string;
  header: string;
  muted: string;
  accent: string;
  accentText: string;
  primaryButton: string;
  secondaryButton: string;
  card: string;
  input: string;
  heading: string;
};

export type DesignDefinition = {
  id: string;
  slug: string;
  name: string;
  previewImage: string;
  category: string;
  shortDescription: string;
  description: string;
  characteristics: string[];
  keywords: string[];
  colors: DesignColor[];
  typography: {
    heading: string;
    body: string;
    description: string;
    hierarchy: string;
    spacing: string;
  };
  layout: {
    description: string;
    traits: string[];
    grid: string;
    whitespace: string;
    alignment: string;
    responsive: string;
  };
  components: {
    buttons: string;
    cards: string;
    navigation: string;
    inputs: string;
    domainSpecific: string;
  };
  bestFor: string[];
  avoidWhen: string[];
  tags: string[];
  relatedSlugs: string[];
  aiPrompt: string;
  iterationGuidance: string;
};

export type DesignStyle = DesignDefinition & {
  theme: TemplateTheme;
};

export type DesignModule = {
  definition: DesignDefinition;
  theme: TemplateTheme;
};
