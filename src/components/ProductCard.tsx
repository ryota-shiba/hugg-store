import Link from 'next/link'
import type { Product } from '@/lib/products'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block min-w-[290px] overflow-hidden bg-bg transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-4 p-7">
        <p className="text-sm leading-7 text-muted">{product.tagline}</p>
        <div>
          <p className="text-xs tracking-[0.18em] text-accent">{product.englishName}</p>
          <h3 className="mt-2 text-xl font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-muted">{product.volume}</p>
        </div>
        <p className="text-sm font-medium tracking-[0.18em] text-text">詳しく見る →</p>
      </div>
    </Link>
  )
}
