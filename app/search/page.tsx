import { Footer } from "@/components/library";
import { SearchBar } from "@/components/client-controls";
import { Header } from "@/components/site-header";
import { StyleGrid } from "@/components/style-grid";
import { searchStyles } from "@/designs";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchStyles(q);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
              Buscar / {results.length} resultados
            </span>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
              {q ? "“" + q + "”" : "Encuentra un diseño."}
            </h1>
          </div>
          <SearchBar initialValue={q} />
        </div>
        <div className="mt-12">
          {results.length ? (
            <StyleGrid items={results} />
          ) : (
            <div className="rounded-2xl border border-dashed border-library-border-strong p-12 text-center">
              <h2 className="text-2xl font-semibold">No hay coincidencias.</h2>
              <p className="mt-2 text-sm text-library-muted">
                Prueba con otro término o explora todos los diseños.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
