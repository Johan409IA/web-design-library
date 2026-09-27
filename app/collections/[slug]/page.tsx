import { notFound } from "next/navigation";
import {
  Footer,
  SectionHeader,
} from "@/components/library";
import { Header } from "@/components/site-header";
import { StyleGrid } from "@/components/style-grid";
import { collections, getCollection } from "@/data/collections";
import { styles } from "@/designs";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return notFound();
  const items = styles.filter((style) =>
    collection.styleSlugs.includes(style.slug),
  );

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-library-subtle">
          Colección / Biblioteca personal
        </span>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          {collection.name}<span className="text-library-accent">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-library-muted">
          {collection.description}
        </p>
        <div className="mt-14">
          <SectionHeader
            eyebrow={items.length + " implementación"}
            title="Diseño incluido"
          />
          <StyleGrid items={items} />
        </div>
      </main>
      <Footer />
    </>
  );
}
