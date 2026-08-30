import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Renders a breadcrumb trail with BreadcrumbList JSON-LD schema.
 * Server component — safe to use in any page.tsx without "use client".
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `https://www.anfaasarabia.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-2"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {idx === 0 && <Home className="w-3.5 h-3.5 text-zinc-400" />}
                {isLast ? (
                  <span
                    className="font-medium text-zinc-800"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-red-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
