import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/library";
import { Header } from "@/components/site-header";
import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
          Biblioteca organizada
        </span>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          Colecciones<span className="text-library-accent">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-library-muted">
          Agrupa los diseños por criterios visuales para encontrarlos y
          compararlos con rapidez.
        </p>
        <div className="mt-12 grid gap-4">
          {collections.map((collection, index) => (
            <Link
              href={"/collections/" + collection.slug}
              className="group grid gap-5 rounded-2xl border border-library-border bg-library-surface p-6 transition hover:border-library-foreground sm:grid-cols-[auto_1fr_auto] sm:items-center"
              key={collection.slug}
            >
              <span className="text-xs font-bold text-library-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl font-semibold">{collection.name}</h2>
                <p className="mt-2 text-sm leading-6 text-library-muted">
                  {collection.description}
                </p>
              </div>
              <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={19} />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
