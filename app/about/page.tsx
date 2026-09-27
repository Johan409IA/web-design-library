import { Footer } from "@/components/library";
import { Header } from "@/components/site-header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
          Sobre el proyecto
        </span>
        <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          Una biblioteca para estudiar{" "}
          <em className="font-serif font-normal text-library-subtle">
            diferencias reales.
          </em>
        </h1>
        <div className="mt-12 grid gap-8 border-t border-library-border-strong pt-8 text-base leading-7 text-library-muted md:grid-cols-2">
          <p>
            Web Design Library documenta lenguajes visuales existentes y los
            aplica sobre una única plantilla de prueba.
          </p>
          <p>
            Cada entrada conserva su definición, prompt, DESIGN.md y tema para
            que el catálogo pueda crecer sin cambiar la plantilla compartida.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            ["02", "diseños implementados"],
            ["01", "plantilla común"],
            ["∞", "variantes futuras"],
          ].map(([value, label]) => (
            <div className="rounded-2xl border border-library-border bg-library-surface p-6" key={label}>
              <b className="text-4xl">{value}</b>
              <span className="mt-2 block text-sm text-library-muted">{label}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
