# Añadir un diseño

Cada diseño del catálogo es un módulo autocontenido dentro de `designs/<slug>/`.
La definición TypeScript es la única fuente de verdad para los metadatos, el
prompt y el contenido de `DESIGN.md`.

## Flujo

1. Confirma que el estilo existe como corriente o lenguaje de diseño reconocible.
2. Crea `designs/<slug>/definition.ts` usando `DesignDefinition`.
3. Guarda una captura en `public/designs/<slug>/preview.png` y asigna esa ruta
   a `previewImage` en `definition.ts`. Los archivos de `public` se sirven desde
   la URL raíz, que es la que usan las cards.
4. Crea `designs/<slug>/theme.ts` usando `TemplateTheme`. Escribe las clases
   Tailwind completas como literales para que Tailwind pueda detectarlas.
5. Importa los archivos de definición y tema y añade el módulo a `designModules` en
   `designs/index.ts`.
6. Si será el diseño de trabajo para Stitch, cambia `activeDesignSlug`.
7. Ejecuta `pnpm designs:generate`.
8. Ejecuta `pnpm designs:check`, `pnpm typecheck` y `pnpm build`.
9. Comprueba `/styles/<slug>`, `/compare?base=<slug>&against=neutral`, la
   comparación contra otro diseño y la vista móvil en el servidor de desarrollo.

## Archivos generados

- `designs/<slug>/DESIGN.md`: documento distribuible de cada diseño.
- `.stitch/DESIGN.md`: documento del diseño activo que Stitch espera en el
  proyecto.

No edites esos documentos manualmente. Modifica `definition.ts` y vuelve a
generarlos para evitar que el catálogo, el prompt y la documentación diverjan.
