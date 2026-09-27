import { ArrowRight, Check, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { neutralTheme } from "@/designs/neutral-theme";
import type { TemplateTheme } from "@/designs";

type WebPageTemplateProps = {
  theme?: TemplateTheme;
  compact?: boolean;
  className?: string;
};

export function WebPageTemplate({
  theme = neutralTheme,
  compact = false,
  className,
}: WebPageTemplateProps) {
  return (
    <div
      aria-label={`Plantilla web ${theme.label}`}
      className={cn(
        "w-full overflow-hidden border",
        compact ? "aspect-[16/10]" : "min-h-[620px]",
        theme.canvas,
        theme.border,
        className,
      )}
    >
      <header
        className={cn(
          "flex items-center justify-between border-b px-4 py-3 sm:px-6",
          theme.header,
          theme.border,
        )}
      >
        <div className="flex items-center gap-2">
          <span className={cn("grid size-7 place-items-center text-xs font-black", theme.accent, theme.accentText)}>
            AC
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.16em]">
            Acme Studio
          </span>
        </div>
        <nav className="hidden items-center gap-5 text-[10px] font-semibold uppercase tracking-wider sm:flex">
          <span>Servicios</span>
          <span>Trabajo</span>
          <span>Contacto</span>
        </nav>
        <Menu className="size-4 sm:hidden" aria-hidden="true" />
      </header>

      <main>
        <section
          className={cn(
            "grid border-b sm:grid-cols-[1.45fr_0.55fr]",
            theme.border,
          )}
        >
          <div className={cn(compact ? "p-4" : "p-7 sm:p-10")}>
            <p className={cn("mb-4 text-[10px] font-bold uppercase tracking-[0.2em]", theme.muted)}>
              Estrategia · Diseño · Desarrollo
            </p>
            <h1
              className={cn(
                compact ? "max-w-xl text-3xl" : "max-w-3xl text-5xl sm:text-7xl",
                theme.heading,
              )}
            >
              Productos digitales que se entienden.
            </h1>
            <p
              className={cn(
                "mt-5 max-w-xl leading-relaxed",
                compact ? "text-xs" : "text-sm sm:text-base",
                theme.muted,
              )}
            >
              Diseñamos experiencias claras para equipos que necesitan convertir
              una idea compleja en un producto útil.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 text-xs transition",
                  theme.primaryButton,
                )}
              >
                Ver proyectos <ArrowRight className="size-3.5" />
              </button>
              <button
                type="button"
                className={cn(
                  "px-4 py-2 text-xs transition",
                  theme.secondaryButton,
                )}
              >
                Conocer el proceso
              </button>
            </div>
          </div>
          <aside
            className={cn(
              "hidden border-l p-6 sm:flex sm:flex-col sm:justify-between",
              theme.border,
              theme.accent,
              theme.accentText,
            )}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Proyecto destacado
            </span>
            <div>
              <strong className="block text-4xl font-black">24%</strong>
              <span className="text-xs">menos fricción en el flujo principal</span>
            </div>
          </aside>
        </section>

        <section className={cn("grid gap-3 p-4 sm:grid-cols-3", compact ? "" : "sm:p-6")}>
          {[
            ["01", "Descubrimiento", "Entender el problema antes de dibujar la solución."],
            ["02", "Prototipo", "Validar estructura, contenido e interacción."],
            ["03", "Entrega", "Convertir decisiones en un sistema mantenible."],
          ].map(([number, title, copy]) => (
            <article className={cn("p-4", theme.card)} key={number}>
              <span className={cn("text-[10px] font-bold", theme.muted)}>
                {number}
              </span>
              <h2 className={cn("mt-5 text-sm", theme.heading)}>{title}</h2>
              {!compact && (
                <p className={cn("mt-2 text-xs leading-relaxed", theme.muted)}>
                  {copy}
                </p>
              )}
            </article>
          ))}
        </section>

        {!compact && (
          <section
            className={cn(
              "mx-4 mb-4 grid gap-5 border p-5 sm:mx-6 sm:mb-6 sm:grid-cols-[1fr_auto] sm:items-end",
              theme.border,
            )}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                Recibe el próximo caso
              </p>
              <p className={cn("mt-2 text-xs", theme.muted)}>
                Una actualización breve, sin ruido.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                aria-label="Correo de ejemplo"
                className={cn("min-w-0 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-current", theme.input)}
                placeholder="correo@ejemplo.com"
              />
              <button
                type="button"
                className={cn("grid size-9 shrink-0 place-items-center", theme.primaryButton)}
                aria-label="Suscribirse"
              >
                <Check className="size-4" />
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
