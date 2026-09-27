"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bookmark, Check, Clipboard, Download, Search } from "lucide-react";

import type { DesignStyle } from "@/designs";
import { createDesignMarkdown } from "@/lib/design-md";

const FAVORITES_KEY = "wdl-favorites";
const filters = ["Todos", "Audaz", "Editorial", "Experimental"];

function readFavorites() {
  try {
    return new Set(JSON.parse(window.localStorage.getItem(FAVORITES_KEY) ?? "[]"));
  } catch {
    return new Set<string>();
  }
}

export function FavoriteButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const sync = () => setIsFavorite(readFavorites().has(slug));
    sync();
    window.addEventListener("favorites-changed", sync);
    return () => window.removeEventListener("favorites-changed", sync);
  }, [slug]);

  function toggleFavorite(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    const favorites = readFavorites();
    if (favorites.has(slug)) {
      favorites.delete(slug);
    } else {
      favorites.add(slug);
    }

    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    window.dispatchEvent(new Event("favorites-changed"));
    setIsFavorite(favorites.has(slug));
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      className={`inline-flex items-center justify-center border border-library-border bg-library-surface text-library-foreground transition hover:border-library-foreground ${
        compact ? "size-9 rounded-full" : "size-10 rounded-lg"
      }`}
    >
      <Bookmark className={isFavorite ? "size-4 fill-current" : "size-4"} />
    </button>
  );
}

export function SearchBar({
  initialValue = "",
  onValueChange,
  clearHref = "/search",
}: {
  initialValue?: string;
  onValueChange?: (value: string) => void;
  clearHref?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialValue);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : clearHref);
  }

  return (
    <form onSubmit={submitSearch} className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-library-faint" />
      <input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          onValueChange?.(event.target.value);
        }}
        placeholder="Buscar estilos, etiquetas o usos..."
        className="h-12 w-full rounded-full border border-library-border bg-library-surface px-11 pr-4 text-sm text-library-foreground outline-none transition placeholder:text-library-faint focus:border-library-foreground"
      />
    </form>
  );
}

export function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (filter: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Filtros de estilos">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          aria-pressed={active === filter}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            active === filter
              ? "bg-library-action text-library-action-foreground"
              : "border border-library-border bg-library-surface text-library-muted hover:border-library-foreground hover:text-library-foreground"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export function ColorPalette({ colors }: { colors: DesignStyle["colors"] }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyColor(hex: string) {
    await navigator.clipboard.writeText(hex);
    setCopied(hex);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {colors.map((color) => (
        <button
          key={color.hex}
          type="button"
          onClick={() => copyColor(color.hex)}
          className="flex items-center gap-3 rounded-xl border border-library-border bg-library-surface p-3 text-left transition hover:border-library-foreground"
        >
          <span
            className="size-10 rounded-lg border border-black/10"
            style={{ backgroundColor: color.hex }}
            aria-hidden="true"
          />
          <span>
            <span className="block text-sm font-semibold text-library-foreground">{color.name}</span>
            <span className="block text-xs text-library-muted">
              {copied === color.hex ? "Copiado" : `${color.hex} · ${color.role}`}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

export function DesignActions({ style }: { style: DesignStyle }) {
  const [copied, setCopied] = useState(false);

  function downloadDesignMarkdown() {
    const blob = new Blob([createDesignMarkdown(style)], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${style.slug}-DESIGN.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(style.aiPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={downloadDesignMarkdown}
        className="inline-flex items-center gap-2 rounded-full bg-library-action px-5 py-3 text-sm font-semibold text-library-action-foreground transition hover:opacity-80"
      >
        <Download className="size-4" />
        Descargar DESIGN.md
      </button>
      <button
        type="button"
        onClick={copyPrompt}
        className="inline-flex items-center gap-2 rounded-full border border-library-border-strong bg-library-surface px-5 py-3 text-sm font-semibold text-library-foreground transition hover:border-library-foreground"
      >
        {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
        {copied ? "Prompt copiado" : "Copiar prompt IA"}
      </button>
    </div>
  );
}
