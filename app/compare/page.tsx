import { notFound } from "next/navigation";
import {
  ComparisonBaseChooser,
  ComparisonTargetSelect,
  CompareView,
  Footer,
} from "@/components/library";
import { Header } from "@/components/site-header";
import { getComparisonTarget, getStyle, styles, type ComparisonTarget } from "@/designs";

export const metadata = {
  title: "Comparar diseños — Web Design Library",
  description: "Aplica dos diseños sobre la misma plantilla para compararlos.",
};

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ base?: string; against?: string }>;
}) {
  const { base, against } = await searchParams;

  if (!base) {
    return (
      <>
        <Header />
        <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
            Comparación / Elige un diseño base
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            ¿Qué diseño quieres analizar?
          </h1>
          <p className="mb-12 mt-5 max-w-2xl text-base leading-7 text-library-muted">
            Elige el diseño base. En el siguiente paso podrás contrastarlo con
            la plantilla neutral o con otro diseño de la biblioteca.
          </p>
          <ComparisonBaseChooser items={styles} />
        </main>
        <Footer />
      </>
    );
  }

  const baseStyle = getStyle(base);
  const selected = getComparisonTarget(against ?? "neutral");
  if (!baseStyle || !selected || selected.slug === baseStyle.slug) return notFound();

  const baseTarget: ComparisonTarget = {
    slug: baseStyle.slug,
    name: baseStyle.name,
    theme: baseStyle.theme,
    isNeutral: false,
  };

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
          Comparación / Misma estructura
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {baseStyle.name} frente a{" "}
          <em className="font-serif font-normal text-library-subtle">{selected.name}.</em>
        </h1>
        <p className="mb-12 mt-5 max-w-2xl text-base leading-7 text-library-muted">
          Ambos paneles contienen exactamente las mismas secciones. Solo cambia
          el sistema visual aplicado.
        </p>
        <div className="mb-10 rounded-2xl border border-library-border bg-library-surface p-5">
          <ComparisonTargetSelect base={baseTarget} selected={selected} />
        </div>
        <CompareView base={baseTarget} against={selected} />
      </main>
      <Footer />
    </>
  );
}
