import { MetadataRoute } from "next";
import i18nConfig from "../../i18nConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://payment4.com";

  // Get all locales from your i18n config
  const locales = i18nConfig.locales;

  // Define your static routes
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/cooperation",
    "/documents",
    "/faq",
    "/plugin",
    "/wp-plugin",
    "/terms-of-service",
    "/privacy-policy",
    "/blog",
  ];

  // Generate sitemap entries for each locale and route
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      const url = `${baseUrl}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  // Add blog posts if you have them
  // You can fetch blog posts from your CMS or database here
  // Example:
  // const blogPosts = await fetchBlogPosts();
  // blogPosts.forEach((post) => {
  //   locales.forEach((locale) => {
  //     sitemapEntries.push({
  //       url: `${baseUrl}/${locale}/blog/${post.slug}`,
  //       lastModified: new Date(post.updatedAt),
  //       changeFrequency: 'monthly',
  //       priority: 0.6,
  //     });
  //   });
  // });

  return sitemapEntries;
}
