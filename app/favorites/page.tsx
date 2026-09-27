"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/library";
import { Header } from "@/components/site-header";
import { StyleGrid } from "@/components/style-grid";
import { styles } from "@/designs";

function loadSlugs() {
  try {
    const value = JSON.parse(localStorage.getItem("wdl-favorites") || "[]");
    return Array.isArray(value) ? (value as string[]) : [];
  } catch {
    return [];
  }
}

export default function FavoritesPage() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const read = () => setSlugs(loadSlugs());
    read();
    window.addEventListener("favorites-changed", read);
    return () => window.removeEventListener("favorites-changed", read);
  }, []);

  const items = styles.filter((style) => slugs.includes(style.slug));

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
          Colección personal
        </span>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          Favoritos<span className="text-library-accent">.</span>
        </h1>
        <div className="mt-12">
          {items.length ? (
            <StyleGrid items={items} />
          ) : (
            <div className="rounded-2xl border border-dashed border-library-border-strong p-12 text-center">
              <h2 className="text-2xl font-semibold">Aún no guardaste diseños.</h2>
              <p className="mt-2 text-sm text-library-muted">
                Usa el botón de marcador en la ficha de cualquier diseño.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
