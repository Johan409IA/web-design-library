import type { DesignDefinition } from "../types.ts";

export const monochromeDefinition = {
  id: "02",
  slug: "monochrome",
  name: "Monochrome",
  previewImage: "/designs/monochrome/preview.png",
  category: "Monocromático / Editorial",
  shortDescription:
    "Una composición sobria que concentra el contraste, la escala tipográfica y el espacio en una sola familia tonal.",
  description:
    "Monochrome reduce la interfaz a valores de negro, blanco y gris para que la jerarquía dependa de la proporción, la tipografía y el ritmo. El resultado es preciso y editorial: las superficies oscuras generan profundidad, los contornos discretos ordenan la información y los titulares ligeros aportan presencia sin añadir color.",
  characteristics: [
    "Paleta restringida a blanco, negro y grises",
    "Tipografía editorial de gran escala",
    "Contraste construido por luminosidad",
    "Espaciado amplio y composición silenciosa",
  ],
  keywords: ["monocromático", "editorial", "sobrio", "alto contraste"],
  colors: [
    {
      name: "Negro profundo",
      hex: "#080808",
      role: "Canvas principal y fondo de máxima profundidad",
      category: "foundation",
    },
    {
      name: "Marfil",
      hex: "#F7F5F2",
      role: "Texto principal, acciones y contraste luminoso",
      category: "typography",
    },
    {
      name: "Gris humo",
      hex: "#A3A3A3",
      role: "Texto secundario, bordes y estados de baja intensidad",
      category: "state",
    },
    {
      name: "Grafito",
      hex: "#1D1D1D",
      role: "Tarjetas y superficies elevadas dentro del fondo oscuro",
      category: "foundation",
    },
  ],
  typography: {
    heading: "Serif editorial, 300–500",
    body: "DM Sans, 400–500",
    description:
      "Titulares serif ligeros y amplios contrastan con una sans funcional para lectura, navegación y metadatos.",
    hierarchy:
      "Los titulares usan una serif de peso ligero, escala amplia y mayúsculas controladas. El cuerpo mantiene tamaños moderados; los metadatos se reducen para dejar que la composición respire.",
    spacing:
      "El espacio vertical es generoso y las líneas de texto se separan con calma. El tracking se abre solo en etiquetas y navegación para reforzar la precisión editorial.",
  },
  layout: {
    description:
      "Composición amplia de un solo lienzo oscuro, con bloques delimitados por líneas tenues y un ritmo que prioriza la lectura pausada.",
    traits: [
      "Jerarquía por escala",
      "Superficies oscuras estratificadas",
      "Bordes de bajo contraste",
      "Ritmo editorial",
    ],
    grid:
      "Contenedor espacioso con paneles asimétricos y una retícula sencilla. Las divisiones son finas y se perciben por cambios sutiles de luminosidad.",
    whitespace:
      "Los márgenes amplios y las áreas vacías dan prioridad a los titulares y evitan que la interfaz monocromática se sienta densa.",
    alignment:
      "Alineación izquierda para la lectura, acompañada por zonas de énfasis centradas mediante escala y contraste, no por color adicional.",
    responsive:
      "Las columnas se convierten en una secuencia vertical clara. La tipografía conserva su carácter editorial sin perder legibilidad ni objetivos táctiles adecuados.",
  },
  components: {
    buttons:
      "Rectangulares, de contorno fino y sin sombras. La acción principal invierte blanco y negro; hover y focus modifican luminosidad y borde.",
    cards:
      "Superficies grafito con bordes blancos de baja opacidad, sin esquinas exageradas ni elevación visual innecesaria.",
    navigation:
      "Horizontal, discreta y espaciada; utiliza texto claro y estados activos definidos por contraste y subrayado, no por color.",
    inputs:
      "Fondos transparentes o grafito, borde gris tenue, texto marfil y foco claro de alto contraste.",
    domainSpecific:
      "Los paneles de caso y métricas se integran al lienzo oscuro mediante cifras amplias, líneas divisorias y cambios de valor tonal.",
  },
  bestFor: [
    "Portafolios de fotografía y diseño",
    "Marcas premium",
    "Estudios creativos",
    "Experiencias editoriales",
  ],
  avoidWhen: [
    "El producto depende de muchos estados semánticos simultáneos",
    "La marca requiere una codificación intensa por color",
  ],
  tags: ["editorial", "sobrio", "alto contraste"],
  relatedSlugs: ["brutalista"],
  aiPrompt:
    "Aplica el estilo Monochrome a esta interfaz. Conserva exactamente la estructura, el contenido, la jerarquía semántica y el orden de las secciones. Usa una paleta limitada a negro, marfil y grises; crea contraste mediante luminosidad, escala tipográfica y espacio. Emplea titulares serif editoriales ligeros, texto funcional sans-serif, bordes tenues y superficies oscuras estratificadas. Evita colores de acento, degradados, sombras difusas y ornamentación. Mantén contraste accesible, foco visible, objetivos táctiles adecuados y comportamiento responsive.",
  iterationGuidance:
    "Ajusta primero las proporciones y la escala tipográfica, después los valores tonales y el espaciado. Revisa al final contraste, foco y lectura en móvil sin alterar el contenido ni la semántica de la plantilla común.",
} satisfies DesignDefinition;
