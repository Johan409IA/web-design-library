---
name: "Monochrome"
colors:
  negro-profundo: "#080808"
  marfil: "#F7F5F2"
  gris-humo: "#A3A3A3"
  grafito: "#1D1D1D"
---

# Design System: Monochrome

## 1. Visual Theme & Atmosphere

Monochrome reduce la interfaz a valores de negro, blanco y gris para que la jerarquía dependa de la proporción, la tipografía y el ritmo. El resultado es preciso y editorial: las superficies oscuras generan profundidad, los contornos discretos ordenan la información y los titulares ligeros aportan presencia sin añadir color.

## 2. Color Palette & Roles

### Primary Foundation

- **Negro profundo** (#080808) — Canvas principal y fondo de máxima profundidad
- **Grafito** (#1D1D1D) — Tarjetas y superficies elevadas dentro del fondo oscuro

### Accent & Interactive

- Sin token de acento exclusivo.

### Typography & Text Hierarchy

- **Marfil** (#F7F5F2) — Texto principal, acciones y contraste luminoso

### Functional States

- **Gris humo** (#A3A3A3) — Texto secundario, bordes y estados de baja intensidad

## 3. Typography Rules

### Hierarchy & Weights

- **Heading:** Serif editorial, 300–500
- **Body:** DM Sans, 400–500
- **Principle:** Titulares serif ligeros y amplios contrastan con una sans funcional para lectura, navegación y metadatos.
- **Hierarchy:** Los titulares usan una serif de peso ligero, escala amplia y mayúsculas controladas. El cuerpo mantiene tamaños moderados; los metadatos se reducen para dejar que la composición respire.

### Spacing Principles

El espacio vertical es generoso y las líneas de texto se separan con calma. El tracking se abre solo en etiquetas y navegación para reforzar la precisión editorial.

## 4. Component Stylings

### Buttons

Rectangulares, de contorno fino y sin sombras. La acción principal invierte blanco y negro; hover y focus modifican luminosidad y borde.

### Cards & Content Containers

Superficies grafito con bordes blancos de baja opacidad, sin esquinas exageradas ni elevación visual innecesaria.

### Navigation

Horizontal, discreta y espaciada; utiliza texto claro y estados activos definidos por contraste y subrayado, no por color.

### Inputs & Forms

Fondos transparentes o grafito, borde gris tenue, texto marfil y foco claro de alto contraste.

### Featured Project & Metric Panels

Los paneles de caso y métricas se integran al lienzo oscuro mediante cifras amplias, líneas divisorias y cambios de valor tonal.

## 5. Layout Principles

Composición amplia de un solo lienzo oscuro, con bloques delimitados por líneas tenues y un ritmo que prioriza la lectura pausada.

### Grid & Structure

Contenedor espacioso con paneles asimétricos y una retícula sencilla. Las divisiones son finas y se perciben por cambios sutiles de luminosidad.

### Whitespace Strategy

Los márgenes amplios y las áreas vacías dan prioridad a los titulares y evitan que la interfaz monocromática se sienta densa.

### Alignment & Visual Balance

Alineación izquierda para la lectura, acompañada por zonas de énfasis centradas mediante escala y contraste, no por color adicional.

### Responsive Behavior & Touch

Las columnas se convierten en una secuencia vertical clara. La tipografía conserva su carácter editorial sin perder legibilidad ni objetivos táctiles adecuados.

## 6. Design System Notes for Stitch Generation

### Language to Use

- monocromático
- editorial
- sobrio
- alto contraste

### Color References

- **Negro profundo** (#080808) — Canvas principal y fondo de máxima profundidad
- **Marfil** (#F7F5F2) — Texto principal, acciones y contraste luminoso
- **Gris humo** (#A3A3A3) — Texto secundario, bordes y estados de baja intensidad
- **Grafito** (#1D1D1D) — Tarjetas y superficies elevadas dentro del fondo oscuro

### Component Prompts

Aplica el estilo Monochrome a esta interfaz. Conserva exactamente la estructura, el contenido, la jerarquía semántica y el orden de las secciones. Usa una paleta limitada a negro, marfil y grises; crea contraste mediante luminosidad, escala tipográfica y espacio. Emplea titulares serif editoriales ligeros, texto funcional sans-serif, bordes tenues y superficies oscuras estratificadas. Evita colores de acento, degradados, sombras difusas y ornamentación. Mantén contraste accesible, foco visible, objetivos táctiles adecuados y comportamiento responsive.

### Incremental Iteration

Ajusta primero las proporciones y la escala tipográfica, después los valores tonales y el espaciado. Revisa al final contraste, foco y lectura en móvil sin alterar el contenido ni la semántica de la plantilla común.
