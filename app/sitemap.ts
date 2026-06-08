import type { MetadataRoute } from "next";

import { getAllWriting } from "@/lib/writing";

const baseUrl = "https://josenavarro.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const writingRoutes = getAllWriting().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.date
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString()
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: new Date().toISOString()
    },
    ...writingRoutes
  ];
}
