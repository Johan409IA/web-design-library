import Link from "next/link";
import { ArrowRight, Layers3, ScanSearch } from "lucide-react";
import {
  Footer,
  SectionHeader,
} from "@/components/library";
import { Header } from "@/components/site-header";
import { StyleCard } from "@/components/style-grid";
import { WebPageTemplate } from "@/components/web-page-template";
import { featuredStyles } from "@/designs";

export default function Home() {
  const style = featuredStyles[0];

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-library-border bg-library-surface">
          <div className="mx-auto grid min-h-620px w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
                Biblioteca visual en construcción
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
                Una estructura.
                <br />
                <em className="font-serif font-normal text-library-subtle">
                  Distintos lenguajes.
                </em>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-library-muted sm:text-lg">
                Cada diseño se aplica sobre la misma página web para que las
                diferencias sean visibles, comparables y verificables.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/template"
                  className="inline-flex items-center gap-2 rounded-lg bg-library-action px-5 py-3 text-sm font-bold text-library-action-foreground transition hover:opacity-80"
                >
                  Ver plantilla base <ArrowRight size={16} />
                </Link>
                <Link
                  href={"/styles/" + style.slug}
                  className="inline-flex items-center gap-2 rounded-lg border border-library-border-strong bg-library-surface px-5 py-3 text-sm font-bold transition hover:border-library-foreground"
                >
                  Ver {style.name}
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-library-border bg-library-surface-muted p-3 shadow-2xl sm:p-5">
              <WebPageTemplate compact />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="01 / Diseño destacado"
            title={style.name}
          />
          <StyleCard style={style} featured eager />
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-8 sm:px-8 md:grid-cols-2 lg:px-12">
          <article className="rounded-2xl border border-library-border bg-library-surface p-7">
            <Layers3 className="size-5" />
            <h2 className="mt-8 text-2xl font-semibold">Plantilla compartida</h2>
            <p className="mt-3 text-sm leading-6 text-library-muted">
              Navegación, hero, acciones, tarjetas y formulario mantienen el
              mismo contenido y la misma jerarquía semántica.
            </p>
          </article>
          <article className="rounded-2xl border border-library-border bg-library-surface p-7">
            <ScanSearch className="size-5" />
            <h2 className="mt-8 text-2xl font-semibold">Comparación honesta</h2>
            <p className="mt-3 text-sm leading-6 text-library-muted">
              El estilo cambia la presentación, no la plantilla. Así se puede
              evaluar qué aporta realmente cada lenguaje visual.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
