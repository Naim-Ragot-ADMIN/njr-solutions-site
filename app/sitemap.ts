import type { MetadataRoute } from "next";
import { pages, robotModels, siteUrl } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map((page) => ({
    url: new URL(page.path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: (page.path === "/" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: page.priority,
  }));

  const productPages = robotModels.map((model) => ({
    url: new URL(`/boutique/${model.slug}`, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
