import type { Metadata } from "next";

const SITE_NAME = "ANFAAS AL AMAL";
const BASE_URL = "https://www.anfaasarabia.com";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    keywords: keywords ?? [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_SA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
