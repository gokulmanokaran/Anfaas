import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/under-development", "/api/"],
    },
    sitemap: "https://www.anfaasarabia.com/sitemap.xml",
  };
}
