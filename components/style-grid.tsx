"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { FavoriteButton } from "@/components/client-controls";
import { WebPageTemplate } from "@/components/web-page-template";
import type { DesignStyle } from "@/designs";
import { cn } from "@/lib/utils";

export function StylePreview({
  style,
  compact = false,
}: {
  style: DesignStyle;
  compact?: boolean;
}) {
  return <WebPageTemplate theme={style.theme} compact={compact} />;
}

export function DesignPreviewImage({
  style,
  eager = false,
}: {
  style: DesignStyle;
  eager?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-library-surface-muted">
      <Image
        src={style.previewImage}
        alt={`Captura de una página web con el diseño ${style.name}`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading={eager ? "eager" : "lazy"}
        className="object-contain"
      />
    </div>
  );
}

export function StyleCard({
  style,
  featured = false,
  eager = false,
}: {
  style: DesignStyle;
  featured?: boolean;
  eager?: boolean;
}) {
  const href = `/styles/${style.slug}`;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-library-border bg-library-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:border-library-border-strong hover:shadow-xl",
        featured && "lg:col-span-2",
      )}
    >
      <div className="relative overflow-hidden bg-library-surface-muted p-3 sm:p-4">
        <Link href={href} className="block" aria-label={`Ver ${style.name}`}>
          <DesignPreviewImage style={style} eager={eager} />
          <span className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-xl bg-library-action px-4 py-3 text-sm font-bold text-library-action-foreground opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4">
            Ver aplicación
            <ArrowUpRight size={16} />
          </span>
        </Link>
        <div className="absolute right-5 top-5">
          <FavoriteButton slug={style.slug} compact />
        </div>
      </div>
      <Link href={href} className="block p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-library-subtle">
          <span>
            {style.id} / {style.category}
          </span>
          <span>{style.tags[0]}</span>
        </div>
        <h3 className="mt-6 text-3xl font-semibold tracking-tight">{style.name}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-library-muted">{style.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {style.tags.slice(0, 3).map((tag) => (
            <span className="rounded-full border border-library-border px-3 py-1 text-xs text-library-muted" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}

export function StyleGrid({ items }: { items: DesignStyle[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((style, index) => (
        <StyleCard key={style.slug} style={style} eager={index < 2} />
      ))}
    </div>
  );
}
