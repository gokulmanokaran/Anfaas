import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/under-development", "/api/"],
    },
    sitemap: "https://anfaasarabia.com/sitemap.xml",
  };
}
