"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Explorar" },
  { href: "/styles", label: "Diseños" },
  { href: "/template", label: "Plantilla base" },
  { href: "/compare", label: "Comparar" },
  { href: "/search", label: "Buscar" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/about", label: "Acerca de" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-library-border bg-library-surface">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link href="/" aria-label="Web Design Library, inicio" className="shrink-0">
          <Image
            src="/library-mark.png"
            width={1254}
            height={1254}
            alt=""
            priority
            className="size-11 object-contain"
          />
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto text-sm" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 transition",
                  isActive
                    ? "bg-library-action text-library-action-foreground"
                    : "text-library-muted hover:bg-library-background hover:text-library-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
