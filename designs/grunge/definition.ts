import type { DesignDefinition } from "../types.ts";

export const grungeDefinition = {
  id: "03",
  slug: "grunge",
  name: "Grunge",
  previewImage: "/designs/Grunge/preview.png",
  category: "Grunge / Experimental",
  shortDescription:
    "Texturas gastadas, tipografía expresiva y capas de papel y tinta para una composición deliberadamente cruda.",
  description:
    "El grunge es un lenguaje gráfico reconocible por su apariencia analógica e imperfecta: superficies desgastadas, marcas de impresión, collage y tipografía de gran presencia. Esta aplicación web toma esos rasgos y los adapta a una interfaz legible. La paleta carbón, papel envejecido y rojo óxido corresponde a esta muestra, no a una regla universal del estilo.",
  characteristics: [
    "Textura de tinta y papel desgastado",
    "Tipografía de impacto con apariencia impresa",
    "Capas, recortes y composición de collage",
    "Contraste entre superficies oscuras y papel claro",
  ],
  keywords: ["grunge", "desgastado", "collage", "analógico"],
  colors: [
    {
      name: "Carbón",
      hex: "#171513",
      role: "Lienzo oscuro, cabecera y áreas de alto contraste",
      category: "foundation",
    },
    {
      name: "Papel envejecido",
      hex: "#E9E1D3",
      role: "Tarjetas claras, texto principal y recortes de papel",
      category: "foundation",
    },
    {
      name: "Rojo óxido",
      hex: "#D85A43",
      role: "Acciones principales, sellos y énfasis editorial",
      category: "accent",
    },
    {
      name: "Tinta tenue",
      hex: "#B6ADA0",
      role: "Texto secundario sobre el lienzo oscuro",
      category: "typography",
    },
  ],
  typography: {
    heading: "Sans serif pesada, 800–900",
    body: "DM Sans, 400–600",
    description:
      "Titulares compactos en mayúsculas y de escala dominante; el cuerpo mantiene una tipografía sencilla para conservar la lectura.",
    hierarchy:
      "Contrasta titulares muy grandes y pesados con etiquetas pequeñas de aire editorial. El desgaste se aplica como tratamiento visual sin ocultar el texto.",
    spacing:
      "Interlineado ajustado en titulares, tracking discreto en etiquetas y espacio suficiente alrededor del texto funcional.",
  },
  layout: {
    description:
      "Composición por bloques y capas con bordes marcados, evocando carteles pegados y material impreso reutilizado.",
    traits: [
      "Capas de textura",
      "Recortes de papel",
      "Titulares dominantes",
      "Contraste irregular pero legible",
    ],
    grid:
      "La retícula funcional se conserva; las superficies y marcas de impresión aportan la sensación de collage sin desordenar el contenido.",
    whitespace:
      "Combina zonas densas de color y textura con separaciones claras para que cada bloque conserve su función.",
    alignment:
      "Alineación principal a la izquierda, con cambios de escala y color que generan tensión visual dentro de la misma estructura.",
    responsive:
      "Los bloques se apilan en móvil, los titulares reducen su escala y la textura permanece subordinada al texto y a los controles.",
  },
  components: {
    buttons:
      "Rectangulares, de color rojo óxido o papel, con borde oscuro, texto de alto contraste y estados hover y focus visibles.",
    cards:
      "Superficies de papel envejecido con tinta oscura, bordes secos y textura sutil de impresión.",
    navigation:
      "Compacta, tipográfica y en mayúsculas; mantiene enlaces y objetivos táctiles claros al adaptarse a móvil.",
    inputs:
      "Campos de papel claro con tinta oscura, borde explícito y anillo de foco evidente.",
    domainSpecific:
      "Casos y métricas se presentan como piezas de cartel, usando cifras pesadas, recortes y acentos rojos sin alterar su contenido.",
  },
  bestFor: [
    "Portafolios creativos",
    "Música y cultura",
    "Campañas editoriales",
    "Marcas con identidad expresiva",
  ],
  avoidWhen: [
    "El contexto exige una interfaz formal y contenida",
    "La textura competiría con información densa o crítica",
  ],
  tags: ["experimental", "texturizado", "editorial"],
  relatedSlugs: ["brutalista"],
  aiPrompt:
    "Aplica el estilo grunge a esta interfaz. Conserva exactamente la estructura, el contenido, la jerarquía semántica y el orden de las secciones. Usa textura de impresión gastada, capas que recuerden papel rasgado y collage, titulares sans serif pesados, superficies carbón y papel envejecido con un acento rojo óxido. Mantén el texto funcional nítido y legible: la textura debe ser decorativa y no tapar controles ni contenido. Evita acabados pulidos, degradados brillantes y sombras suaves. Conserva contraste accesible, foco visible, objetivos táctiles adecuados y comportamiento responsive.",
  iterationGuidance:
    "Define primero la jerarquía y el contraste, después las superficies y la tipografía; añade textura al final y verifica que no reduzca la legibilidad. Compara cada iteración sobre la misma plantilla y revisa el resultado en móvil.",
} satisfies DesignDefinition;
