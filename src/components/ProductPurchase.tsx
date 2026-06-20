'use client'

import { useState } from 'react'
import BuyButtons from '@/components/BuyButtons'
import type { BuyLink, Product } from '@/lib/products'

type ProductPurchaseProps = {
  product: Product
}

export default function ProductPurchase({ product }: ProductPurchaseProps) {
  const [selected, setSelected] = useState<BuyLink | null>(product.variants?.[0] ?? null)
  const active = selected ?? {
    label: product.volume,
    price: product.price,
    amazon: product.buy.amazon,
    rakuten: product.buy.rakuten,
  }

  return (
    <div className="space-y-6 border-y border-border py-7">
      {product.variants && (
        <div>
          <p className="mb-3 text-sm font-medium tracking-[0.12em] text-muted">サイズを選ぶ</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.label}
                type="button"
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  active.label === variant.label
                    ? 'border-accent bg-accent text-white'
                    : 'border-border bg-white text-text hover:border-accent'
                }`}
                onClick={() => setSelected(variant)}
              >
                {variant.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <span className="text-sm tracking-[0.12em] text-muted">定価</span>
        <strong className="text-2xl font-medium">{active.price}</strong>
      </div>
      <BuyButtons amazon={active.amazon} rakuten={active.rakuten} />
    </div>
  )
}
