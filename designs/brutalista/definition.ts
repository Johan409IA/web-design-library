import type { DesignDefinition } from "../types.ts";

export const brutalistDefinition = {
  id: "01",
  slug: "brutalista",
  name: "Brutalista",
  previewImage: "/designs/brutalista/preview.png",
  category: "Crudo / Experimental",
  shortDescription:
    "Una interpretación web basada en contraste fuerte, estructura visible y tipografía dominante.",
  description:
    "El brutalismo web prioriza una presencia directa: retículas visibles, bordes duros, jerarquías abruptas y pocos elementos decorativos. La interfaz comunica su estructura en lugar de ocultarla y utiliza el contraste como herramienta funcional. Esta ficha documenta una aplicación web del estilo brutalista sin convertirla en una variante nueva ni en una especificación universal.",
  characteristics: [
    "Tipografía de gran escala",
    "Bordes y divisiones visibles",
    "Contraste cromático alto",
    "Composición deliberadamente rígida",
  ],
  keywords: ["audaz", "crudo", "alto contraste", "experimental"],
  colors: [
    {
      name: "Tinta",
      hex: "#111111",
      role: "Texto principal, bordes, foco y superficies oscuras",
      category: "typography",
    },
    {
      name: "Papel",
      hex: "#F2F0E8",
      role: "Fondo general y áreas extensas de lectura",
      category: "foundation",
    },
    {
      name: "Ácido",
      hex: "#DFFF00",
      role: "Acciones principales, énfasis y estados activos",
      category: "accent",
    },
    {
      name: "Blanco",
      hex: "#FFFFFF",
      role: "Superficies de contraste, tarjetas y campos",
      category: "foundation",
    },
  ],
  typography: {
    heading: "DM Sans, 800–900",
    body: "DM Sans, 400–600",
    description:
      "Titulares compactos de gran tamaño acompañados por texto funcional y etiquetas en mayúsculas.",
    hierarchy:
      "Los titulares usan pesos 800–900 y saltos de escala evidentes. El cuerpo se mantiene entre 400 y 600; etiquetas y metadatos usan mayúsculas, tamaño reducido y peso alto.",
    spacing:
      "Interlineado cerrado en titulares, interlineado relajado en párrafos y tracking amplio en etiquetas funcionales.",
  },
  layout: {
    description:
      "Retícula modular con divisiones explícitas, bloques de contenido amplios y cambios bruscos de escala.",
    traits: [
      "Retícula visible",
      "Alineación directa",
      "Espaciado funcional",
      "Responsive sin ornamento",
    ],
    grid:
      "Contenedor amplio dividido por bordes visibles; combina paneles asimétricos, filas modulares y bloques de ancho completo.",
    whitespace:
      "El espacio separa funciones, pero no busca delicadeza. Usa intervalos consistentes y áreas amplias alrededor de titulares dominantes.",
    alignment:
      "Predomina la alineación izquierda. El peso visual se equilibra mediante masas de color, bordes y cambios de escala deliberados.",
    responsive:
      "Las columnas colapsan a una sola secuencia en pantallas pequeñas, los controles conservan objetivos táctiles claros y los bordes mantienen la estructura.",
  },
  components: {
    buttons:
      "Rectangulares, borde grueso, sombra desplazada y estados hover, active y focus de alto contraste.",
    cards:
      "Contenedores planos separados por bordes oscuros, sin sombras suaves ni desenfoque; las imágenes respetan el marco rígido.",
    navigation:
      "Horizontal, compacta y tipográfica; se transforma en un menú explícito en pantallas pequeñas.",
    inputs:
      "Fondos claros, bordes oscuros, etiquetas directas y foco de alto contraste claramente visible.",
    domainSpecific:
      "Los paneles de métricas y casos destacados usan fondos sólidos, cifras grandes y divisiones estructurales visibles.",
  },
  bestFor: [
    "Portafolios creativos",
    "Cultura",
    "Moda",
    "Proyectos editoriales",
  ],
  avoidWhen: [
    "La marca exige una interfaz discreta o institucional",
    "La densidad del contenido requiere una jerarquía muy calmada",
  ],
  tags: ["audaz", "experimental", "alto contraste"],
  relatedSlugs: ["monochrome", "grunge"],
  aiPrompt:
    "Aplica el estilo brutalista a esta interfaz. Conserva exactamente la estructura, el contenido, la jerarquía semántica y el orden de las secciones. Modifica únicamente la presentación visual mediante una retícula visible, bordes negros gruesos, tipografía dominante, fondo papel, superficies blancas y un acento ácido. Evita degradados, transparencias, sombras suaves y ornamentación innecesaria. Mantén contraste accesible, foco visible, objetivos táctiles adecuados y comportamiento responsive.",
  iterationGuidance:
    "Aplica los cambios por capas: primero retícula y jerarquía, luego tipografía y color, después componentes y finalmente estados interactivos. Compara cada iteración con la misma plantilla para confirmar que el contenido y la semántica no cambiaron.",
} satisfies DesignDefinition;
