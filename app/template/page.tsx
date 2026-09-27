import { Footer } from "@/components/library";
import { Header } from "@/components/site-header";
import { WebPageTemplate } from "@/components/web-page-template";

export const metadata = {
  title: "Plantilla base — Web Design Library",
  description: "Plantilla web neutral reutilizada por todos los diseños.",
};

export default function TemplatePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
          Plantilla común / Sin diseño aplicado
        </span>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            El punto de partida neutral.
          </h1>
          <p className="text-sm leading-6 text-library-muted">
            Esta estructura permanece idéntica para cada diseño. El tema neutral
            evita atribuirle una estética concreta antes de aplicar una variante.
          </p>
        </div>
        <div className="mt-10 rounded-3xl border border-library-border bg-library-surface p-3 shadow-xl sm:p-6">
          <WebPageTemplate />
        </div>
      </main>
      <Footer />
    </>
  );
}
