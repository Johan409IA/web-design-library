# Web Design Library

Web Design Library reúne lenguajes visuales y los aplica sobre una misma página de prueba. Así puedes explorar cada propuesta y comparar sus diferencias sin cambiar el contenido ni la estructura de la plantilla.

## Funcionalidades

- Explorar los diseños disponibles y consultar su detalle.
- Buscar diseños y verlos agrupados en colecciones.
- Comparar dos temas en la plantilla compartida o previsualizar la plantilla neutral.
- Guardar diseños favoritos en el navegador.
- Consultar la paleta de color y los recursos documentados de cada diseño.

El catálogo incluye actualmente **Brutalista** y **Monochrome**. La lista y los metadatos se mantienen en `designs/`.

## Secciones

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio y diseño destacado |
| `/styles` | Catálogo de diseños |
| `/styles/<slug>` | Detalle de un diseño |
| `/collections` | Colecciones del catálogo |
| `/collections/<slug>` | Diseños de una colección |
| `/compare` | Comparación de temas |
| `/template` | Plantilla neutral |
| `/search` | Búsqueda |
| `/favorites` | Diseños guardados |
| `/about` | Información del proyecto |

## Tecnologías

- Next.js 16 con App Router y React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Desarrollo local

Requisitos: Node.js y pnpm (la versión del gestor está declarada en `package.json`).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm typecheck` | Comprueba los tipos de TypeScript |
| `pnpm designs:generate` | Genera los documentos de diseño desde sus definiciones |
| `pnpm designs:check` | Comprueba que los documentos generados estén actualizados |
| `pnpm build` | Comprueba los documentos de diseño y genera la versión de producción |
| `pnpm start` | Sirve la compilación de producción |

## Añadir un diseño

Cada diseño vive en `designs/<slug>/` y define sus metadatos, tema y documento `DESIGN.md`. Consulta [`designs/README.md`](designs/README.md) para conocer el flujo completo y los comandos de generación y validación.

## Despliegue

El proyecto puede desplegarse en Vercel desde su repositorio. La aplicación está construida con Next.js y no requiere variables de entorno para ejecutar las funciones documentadas.
