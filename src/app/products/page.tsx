import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import ProductCard from '@/components/ProductCard'
import SectionLabel from '@/components/SectionLabel'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'HUGGの商品ラインナップ。グルーミングスプレー、炭酸入浴シャンプー、ピュアリーミストをご紹介します。',
}

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container-main">
          <FadeIn className="max-w-3xl">
            <SectionLabel>商品ラインナップ</SectionLabel>
            <h1 className="section-title mt-5">Products</h1>
            <p className="prose-soft mt-8">
              天然成分にこだわった上質な原料のみを使用。「やさしさ」と「確かな実感」をあなたのわんちゃん、猫ちゃんに。
            </p>
          </FadeIn>

          <FadeIn className="mt-16 grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
