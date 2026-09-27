<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Reglas del proyecto

- Identifica primero la versión instalada de Next.js y el gestor de paquetes.
- Usa App Router y Server Components como opción predeterminada.
- Añade `"use client"` únicamente cuando el componente necesite estado,
  eventos, efectos o APIs exclusivas del navegador.
- Mantén los componentes cliente lo más pequeños posible.
- No desactives errores de TypeScript, ESLint o compilación para hacer pasar el build.
- No agregues dependencias de producción sin consultarlo.
- Después de cada cambio, ejecuta las verificaciones específicas del proyecto.
- Verifica en ejecución las páginas modificadas, no solamente el typecheck o build.
- Revisa errores del servidor, consola del navegador, hidratación y solicitudes de red.
- Usa la skill `next-dev-loop` después de cada cambio relevante.
- Cuando `pnpm dev` esté activo, usa el servidor MCP `next-devtools` para consultar
  errores, logs, rutas y problemas de compilación antes y después de modificar código.
- No crees una ruta ni una carpeta `/_next/mcp`: es un endpoint interno que Next.js
  16 expone automáticamente durante el desarrollo.
- No asumas que el MCP está conectado. Si sus herramientas no están disponibles,
  indícalo y continúa la verificación con la salida de `pnpm dev` y el navegador.
- Antes de finalizar, informa exactamente qué verificaciones pasaron y cuáles no se ejecutaron.
