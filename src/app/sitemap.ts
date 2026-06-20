import type { MetadataRoute } from 'next'
import { products } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hugg-store.com'
  const routes = ['', '/about', '/products', '/company', '/privacy', '/legal', '/contact']

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date('2026-06-19'),
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: new Date('2026-06-19'),
    })),
  ]
}
