"use client";

import { useMemo, useState } from "react";
import { FilterBar, SearchBar } from "@/components/client-controls";
import { StyleGrid } from "@/components/style-grid";
import { styles } from "@/designs";

const filterMap: Record<string, string[]> = {
  Audaz: ["audaz", "alto contraste"],
  Editorial: ["editorial", "monocromático", "sobrio"],
  Experimental: ["experimental"],
};

export function StylesIndex() {
  const [active, setActive] = useState("Todos");
  const [query, setQuery] = useState("");
  const items = useMemo(
    () =>
      styles.filter((style) => {
        const searchable = [
          style.name,
          style.category,
          style.shortDescription,
          ...style.tags,
          ...style.keywords,
        ]
          .join(" ")
          .toLowerCase();
        const normalizedQuery = query.trim().toLowerCase();
        const terms = filterMap[active];
        const matchesQuery =
          !normalizedQuery || searchable.includes(normalizedQuery);
        const matchesFilter =
          active === "Todos" || terms?.some((term) => searchable.includes(term));
        return matchesQuery && matchesFilter;
      }),
    [active, query],
  );

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
            Diseños implementados
          </span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
            Diseño<span className="text-library-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-library-muted">
            Explora diseños existentes aplicados sobre la misma plantilla web.
          </p>
        </div>
        <SearchBar onValueChange={setQuery} clearHref="/styles" />
      </div>
      <div className="mt-10 flex items-center justify-between gap-5 border-y border-library-border py-5">
        <FilterBar active={active} onChange={setActive} />
        <p className="hidden text-xs font-semibold uppercase tracking-wider text-library-subtle sm:block">
          {items.length} resultado
        </p>
      </div>
      <div className="mt-8">
        {items.length ? (
          <StyleGrid items={items} />
        ) : (
          <div className="rounded-2xl border border-dashed border-library-border-strong p-12 text-center">
            <h2 className="text-2xl font-semibold">No hay coincidencias.</h2>
            <p className="mt-2 text-sm text-library-muted">
              Prueba otra búsqueda o filtro.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
