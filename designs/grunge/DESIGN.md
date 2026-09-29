---
name: "Grunge"
colors:
  carbón: "#171513"
  papel-envejecido: "#E9E1D3"
  rojo-óxido: "#D85A43"
  tinta-tenue: "#B6ADA0"
---

# Design System: Grunge

## 1. Visual Theme & Atmosphere

El grunge es un lenguaje gráfico reconocible por su apariencia analógica e imperfecta: superficies desgastadas, marcas de impresión, collage y tipografía de gran presencia. Esta aplicación web toma esos rasgos y los adapta a una interfaz legible. La paleta carbón, papel envejecido y rojo óxido corresponde a esta muestra, no a una regla universal del estilo.

## 2. Color Palette & Roles

### Primary Foundation

- **Carbón** (#171513) — Lienzo oscuro, cabecera y áreas de alto contraste
- **Papel envejecido** (#E9E1D3) — Tarjetas claras, texto principal y recortes de papel

### Accent & Interactive

- **Rojo óxido** (#D85A43) — Acciones principales, sellos y énfasis editorial

### Typography & Text Hierarchy

- **Tinta tenue** (#B6ADA0) — Texto secundario sobre el lienzo oscuro

### Functional States

- Los estados reutilizan el acento y la tinta con contraste accesible; no se definen tokens semánticos adicionales.

## 3. Typography Rules

### Hierarchy & Weights

- **Heading:** Sans serif pesada, 800–900
- **Body:** DM Sans, 400–600
- **Principle:** Titulares compactos en mayúsculas y de escala dominante; el cuerpo mantiene una tipografía sencilla para conservar la lectura.
- **Hierarchy:** Contrasta titulares muy grandes y pesados con etiquetas pequeñas de aire editorial. El desgaste se aplica como tratamiento visual sin ocultar el texto.

### Spacing Principles

Interlineado ajustado en titulares, tracking discreto en etiquetas y espacio suficiente alrededor del texto funcional.

## 4. Component Stylings

### Buttons

Rectangulares, de color rojo óxido o papel, con borde oscuro, texto de alto contraste y estados hover y focus visibles.

### Cards & Content Containers

Superficies de papel envejecido con tinta oscura, bordes secos y textura sutil de impresión.

### Navigation

Compacta, tipográfica y en mayúsculas; mantiene enlaces y objetivos táctiles claros al adaptarse a móvil.

### Inputs & Forms

Campos de papel claro con tinta oscura, borde explícito y anillo de foco evidente.

### Featured Project & Metric Panels

Casos y métricas se presentan como piezas de cartel, usando cifras pesadas, recortes y acentos rojos sin alterar su contenido.

## 5. Layout Principles

Composición por bloques y capas con bordes marcados, evocando carteles pegados y material impreso reutilizado.

### Grid & Structure

La retícula funcional se conserva; las superficies y marcas de impresión aportan la sensación de collage sin desordenar el contenido.

### Whitespace Strategy

Combina zonas densas de color y textura con separaciones claras para que cada bloque conserve su función.

### Alignment & Visual Balance

Alineación principal a la izquierda, con cambios de escala y color que generan tensión visual dentro de la misma estructura.

### Responsive Behavior & Touch

Los bloques se apilan en móvil, los titulares reducen su escala y la textura permanece subordinada al texto y a los controles.

## 6. Design System Notes for Stitch Generation

### Language to Use

- grunge
- desgastado
- collage
- analógico

### Color References

- **Carbón** (#171513) — Lienzo oscuro, cabecera y áreas de alto contraste
- **Papel envejecido** (#E9E1D3) — Tarjetas claras, texto principal y recortes de papel
- **Rojo óxido** (#D85A43) — Acciones principales, sellos y énfasis editorial
- **Tinta tenue** (#B6ADA0) — Texto secundario sobre el lienzo oscuro

### Component Prompts

Aplica el estilo grunge a esta interfaz. Conserva exactamente la estructura, el contenido, la jerarquía semántica y el orden de las secciones. Usa textura de impresión gastada, capas que recuerden papel rasgado y collage, titulares sans serif pesados, superficies carbón y papel envejecido con un acento rojo óxido. Mantén el texto funcional nítido y legible: la textura debe ser decorativa y no tapar controles ni contenido. Evita acabados pulidos, degradados brillantes y sombras suaves. Conserva contraste accesible, foco visible, objetivos táctiles adecuados y comportamiento responsive.

### Incremental Iteration

Define primero la jerarquía y el contraste, después las superficies y la tipografía; añade textura al final y verifica que no reduzca la legibilidad. Compara cada iteración sobre la misma plantilla y revisa el resultado en móvil.
