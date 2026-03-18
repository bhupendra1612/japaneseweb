import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main crawlers — allow everything public
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
      // Google AI (Gemini, Google Discover)
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
      // OpenAI / ChatGPT
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
      // Anthropic Claude
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
      // Apple AI
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/auth/", "/api/"],
      },
    ],
    sitemap: "https://japangolearn.com/sitemap.xml",
    host: "https://japangolearn.com",
  };
}
