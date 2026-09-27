---
name: "Brutalista"
colors:
  tinta: "#111111"
  papel: "#F2F0E8"
  ácido: "#DFFF00"
  blanco: "#FFFFFF"
---

# Design System: Brutalista

## 1. Visual Theme & Atmosphere

El brutalismo web prioriza una presencia directa: retículas visibles, bordes duros, jerarquías abruptas y pocos elementos decorativos. La interfaz comunica su estructura en lugar de ocultarla y utiliza el contraste como herramienta funcional. Esta ficha documenta una aplicación web del estilo brutalista sin convertirla en una variante nueva ni en una especificación universal.

## 2. Color Palette & Roles

### Primary Foundation

- **Papel** (#F2F0E8) — Fondo general y áreas extensas de lectura
- **Blanco** (#FFFFFF) — Superficies de contraste, tarjetas y campos

### Accent & Interactive

- **Ácido** (#DFFF00) — Acciones principales, énfasis y estados activos

### Typography & Text Hierarchy

- **Tinta** (#111111) — Texto principal, bordes, foco y superficies oscuras

### Functional States

- Los estados reutilizan el acento y la tinta con contraste accesible; no se definen tokens semánticos adicionales.

## 3. Typography Rules

### Hierarchy & Weights

- **Heading:** DM Sans, 800–900
- **Body:** DM Sans, 400–600
- **Principle:** Titulares compactos de gran tamaño acompañados por texto funcional y etiquetas en mayúsculas.
- **Hierarchy:** Los titulares usan pesos 800–900 y saltos de escala evidentes. El cuerpo se mantiene entre 400 y 600; etiquetas y metadatos usan mayúsculas, tamaño reducido y peso alto.

### Spacing Principles

Interlineado cerrado en titulares, interlineado relajado en párrafos y tracking amplio en etiquetas funcionales.

## 4. Component Stylings

### Buttons

Rectangulares, borde grueso, sombra desplazada y estados hover, active y focus de alto contraste.

### Cards & Content Containers

Contenedores planos separados por bordes oscuros, sin sombras suaves ni desenfoque; las imágenes respetan el marco rígido.

### Navigation

Horizontal, compacta y tipográfica; se transforma en un menú explícito en pantallas pequeñas.

### Inputs & Forms

Fondos claros, bordes oscuros, etiquetas directas y foco de alto contraste claramente visible.

### Featured Project & Metric Panels

Los paneles de métricas y casos destacados usan fondos sólidos, cifras grandes y divisiones estructurales visibles.

## 5. Layout Principles

Retícula modular con divisiones explícitas, bloques de contenido amplios y cambios bruscos de escala.

### Grid & Structure

Contenedor amplio dividido por bordes visibles; combina paneles asimétricos, filas modulares y bloques de ancho completo.

### Whitespace Strategy

El espacio separa funciones, pero no busca delicadeza. Usa intervalos consistentes y áreas amplias alrededor de titulares dominantes.

### Alignment & Visual Balance

Predomina la alineación izquierda. El peso visual se equilibra mediante masas de color, bordes y cambios de escala deliberados.

### Responsive Behavior & Touch

Las columnas colapsan a una sola secuencia en pantallas pequeñas, los controles conservan objetivos táctiles claros y los bordes mantienen la estructura.

## 6. Design System Notes for Stitch Generation

### Language to Use

- audaz
- crudo
- alto contraste
- experimental

### Color References

- **Tinta** (#111111) — Texto principal, bordes, foco y superficies oscuras
- **Papel** (#F2F0E8) — Fondo general y áreas extensas de lectura
- **Ácido** (#DFFF00) — Acciones principales, énfasis y estados activos
- **Blanco** (#FFFFFF) — Superficies de contraste, tarjetas y campos

### Component Prompts

Aplica el estilo brutalista a esta interfaz. Conserva exactamente la estructura, el contenido, la jerarquía semántica y el orden de las secciones. Modifica únicamente la presentación visual mediante una retícula visible, bordes negros gruesos, tipografía dominante, fondo papel, superficies blancas y un acento ácido. Evita degradados, transparencias, sombras suaves y ornamentación innecesaria. Mantén contraste accesible, foco visible, objetivos táctiles adecuados y comportamiento responsive.

### Incremental Iteration

Aplica los cambios por capas: primero retícula y jerarquía, luego tipografía y color, después componentes y finalmente estados interactivos. Compara cada iteración con la misma plantilla para confirmar que el contenido y la semántica no cambiaron.
