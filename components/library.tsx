import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { comparisonTargets, styles, type ComparisonTarget, type DesignStyle } from "@/designs";
import { DesignPreviewImage, StyleGrid } from "@/components/style-grid";
import { WebPageTemplate } from "@/components/web-page-template";
import { cn } from "@/lib/utils";

const containerClass = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
const eyebrowClass = "text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle";
const textLinkClass =
  "inline-flex items-center gap-2 text-sm font-bold text-library-foreground underline decoration-library-border-strong underline-offset-4 transition hover:decoration-library-foreground";

export function StylePreview({
  style,
  compact = false,
}: {
  style: DesignStyle;
  compact?: boolean;
}) {
  return <WebPageTemplate theme={style.theme} compact={compact} />;
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-library-border bg-library-surface">
      <div className={cn(containerClass, "grid gap-5 py-10 text-sm text-library-muted sm:grid-cols-3")}>
        <span>Web Design Library - Hecho por Johan ❤️</span>
        <span>Una plantilla común, múltiples lenguajes visuales.</span>
        <Link className="inline-flex items-center gap-2 sm:justify-self-end" href="/about">
          Acerca del proyecto <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <span className={eyebrowClass}>{eyebrow}</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {href && (
        <Link href={href} className={textLinkClass}>
          Ver todo <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}

export function RelatedStyles({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => styles.find((style) => style.slug === slug))
    .filter(Boolean) as DesignStyle[];

  if (!related.length) {
    return (
      <p className="rounded-xl border border-dashed border-library-border-strong p-6 text-sm text-library-muted">
        No hay diseños relacionados en la biblioteca todavía.
      </p>
    );
  }

  return <StyleGrid items={related} />;
}

export function ComparePicker({ current }: { current: DesignStyle }) {
  return (
    <Link href={`/compare?base=${current.slug}&against=neutral`} className={textLinkClass}>
      Comparar este diseño <ArrowUpRight size={15} />
    </Link>
  );
}

export function ComparisonTargetSelect({
  base,
  selected,
}: {
  base: ComparisonTarget;
  selected: ComparisonTarget;
}) {
  return (
    <form action="/compare" className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <input type="hidden" name="base" value={base.slug} />
      <label className="grid flex-1 gap-2 text-sm font-semibold text-library-foreground">
        Comparar {base.name} con
        <select
          name="against"
          defaultValue={selected.slug}
          className="h-11 rounded-lg border border-library-border-strong bg-library-surface px-3 text-sm font-normal text-library-foreground outline-none focus:border-library-foreground"
        >
          {comparisonTargets
            .filter((target) => target.slug !== base.slug)
            .map((target) => (
              <option key={target.slug} value={target.slug}>
                {target.name}
              </option>
            ))}
        </select>
      </label>
      <button className="h-11 rounded-lg bg-library-action px-5 text-sm font-bold text-library-action-foreground transition hover:opacity-80">
        Actualizar comparación
      </button>
    </form>
  );
}

export function CompareView({
  base,
  against,
}: {
  base: ComparisonTarget;
  against: ComparisonTarget;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <article>
        <div className="mb-4">
          <span className={eyebrowClass}>A / Diseño base</span>
          <h2 className="mt-2 text-2xl font-semibold">{base.name}</h2>
        </div>
        <WebPageTemplate theme={base.theme} />
      </article>
      <article>
        <div className="mb-4">
          <span className={eyebrowClass}>B / Diseño comparado</span>
          <h2 className="mt-2 text-2xl font-semibold">{against.name}</h2>
        </div>
        <WebPageTemplate theme={against.theme} />
      </article>
    </div>
  );
}

export function ComparisonBaseChooser({ items }: { items: DesignStyle[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((style, index) => (
        <Link
          key={style.slug}
          href={`/compare?base=${style.slug}&against=neutral`}
          className="group overflow-hidden rounded-2xl border border-library-border bg-library-surface shadow-sm transition hover:-translate-y-1 hover:border-library-border-strong hover:shadow-xl"
        >
          <div className="relative overflow-hidden bg-library-surface-muted p-3 sm:p-4">
            <DesignPreviewImage style={style} eager={index < 2} />
            <span className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-xl bg-library-action px-4 py-3 text-sm font-bold text-library-action-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4">
              Elegir como base
              <ArrowUpRight size={16} />
            </span>
          </div>
          <div className="p-5 sm:p-6">
            <span className={eyebrowClass}>{style.category}</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{style.name}</h2>
            <p className="mt-2 text-sm leading-6 text-library-muted">{style.shortDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
