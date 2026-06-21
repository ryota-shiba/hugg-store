import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { products } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hugg-store.com'
  const routes = ['', '/about', '/products', '/reading', '/company', '/privacy', '/legal', '/contact']

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date('2026-06-19'),
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: new Date('2026-06-19'),
    })),
    ...articles.map((article) => ({
      url: `${base}/reading/${article.slug}`,
      lastModified: new Date('2026-06-22'),
    })),
  ]
}
