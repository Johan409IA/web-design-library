import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  ComparePicker,
  Footer,
  RelatedStyles,
  SectionHeader,
  StylePreview,
} from "@/components/library";
import { ColorPalette, DesignActions, FavoriteButton } from "@/components/client-controls";
import { Header } from "@/components/site-header";
import { getStyle, styles } from "@/designs";

export async function generateStaticParams() {
  return styles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getStyle(slug);
  return style
    ? { title: style.name + " — Web Design Library", description: style.shortDescription }
    : { title: "Diseño no encontrado" };
}

export default async function StyleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) return notFound();

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-5 py-6 text-xs text-library-muted sm:px-8 lg:px-12">
          <span>Diseños</span>
          <ChevronRight size={14} />
          <b className="text-library-foreground">{style.name}</b>
        </div>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[0.58fr_1.42fr] lg:px-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
              {style.id} / Interpretación web
            </span>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
              {style.name}<span className="text-library-accent">.</span>
            </h1>
            <p className="mt-5 text-base leading-7 text-library-muted">
              {style.shortDescription}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <FavoriteButton slug={style.slug} />
              <span className="text-sm text-library-muted">Guardar en favoritos</span>
            </div>
            <div className="mt-6">
              <ComparePicker current={style} />
            </div>
          </div>
          <div className="rounded-3xl border border-library-border bg-library-surface p-3 shadow-xl sm:p-5">
            <StylePreview style={style} />
          </div>
        </section>

        <section className="border-y border-library-border bg-library-surface">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.35fr_1fr] lg:px-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
              Resumen
            </span>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                ¿Qué representa esta interpretación?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-library-muted">
                {style.description}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Lenguaje visual"
            title="Características principales"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {style.characteristics.map((characteristic, index) => (
              <article
                className="rounded-2xl border border-library-border bg-library-surface p-6"
                key={characteristic}
              >
                <span className="text-xs font-bold text-library-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-xl font-semibold">{characteristic}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-library-border bg-library-surface">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
            <SectionHeader eyebrow="Color" title="Paleta y función" />
            <ColorPalette colors={style.colors} />
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
          <article className="rounded-2xl border border-library-border bg-library-surface p-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
              Tipografía
            </span>
            <h2 className="mt-6 text-3xl font-semibold">{style.typography.heading}</h2>
            <p className="mt-2 text-sm font-medium text-library-muted">
              Texto: {style.typography.body}
            </p>
            <p className="mt-6 text-sm leading-6 text-library-muted">
              {style.typography.description}
            </p>
          </article>
          <article className="rounded-2xl border border-library-border bg-library-surface p-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
              Composición
            </span>
            <h2 className="mt-6 text-3xl font-semibold">Ritmo y jerarquía.</h2>
            <p className="mt-6 text-sm leading-6 text-library-muted">
              {style.layout.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {style.layout.traits.map((trait) => (
                <span
                  className="rounded-full border border-library-border px-3 py-1 text-xs text-library-muted"
                  key={trait}
                >
                  {trait}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <DesignActions style={style} />
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Próximamente"
            title="Diseños relacionados"
          />
          <RelatedStyles slugs={style.relatedSlugs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
