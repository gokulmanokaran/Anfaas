import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; category: string }>;
}): Promise<Metadata> {
  const { brand, category } = await params;
  const canonicalUrl = `https://www.anfaasarabia.com/storage/${brand}/${category}`;
  const categoryTitle = category
    ? category.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
    : "Storage";
  const brandTitle = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : "Industrial";

  return {
    title: `${categoryTitle} - ${brandTitle} Systems | ANFAAS AL AMAL`,
    description: `High-quality industrial storage solutions for ${categoryTitle} by ${brandTitle}. Supplying Dammam, Riyadh, and Jeddah.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${categoryTitle} - ${brandTitle} Systems | ANFAAS AL AMAL`,
      description: `High-quality industrial storage solutions for ${categoryTitle} by ${brandTitle}.`,
      url: canonicalUrl,
    },
  };
}

export default function StorageCategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
