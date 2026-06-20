import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BuyButtons from '@/components/BuyButtons'
import FadeIn from '@/components/FadeIn'
import ProductCard from '@/components/ProductCard'
import ProductPurchase from '@/components/ProductPurchase'
import SectionLabel from '@/components/SectionLabel'
import { getProduct, products } from '@/lib/products'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug)
  if (!product) return {}

  const descriptions: Record<string, string> = {
    'grooming-spray':
      '洗い流し不要。シュッとひとふきで消臭・除菌99.9%。天然成分95%のオーガニック処方で犬・猫どちらにも使えるドライシャンプー。',
    'carbonated-shampoo':
      'お湯に溶かして浸かるだけ。炭酸マイクロバブルが毛穴汚れを浮かし落とし、植物エキスで被毛と地肌をしっとり保湿。',
    'purely-mist':
      '全成分ヒノキエキスのみ。化学成分・アルコールゼロの本物の消臭スプレー。舐めても安心、おしっこ臭99.9%除去。',
  }

  return {
    title: `${product.name} | ${product.subName}`,
    description: descriptions[product.slug],
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)
  if (!product) notFound()

  const otherProducts = products.filter((item) => item.slug !== product.slug)
  const galleryImages = product.galleryImages?.length ? product.galleryImages : [product.image]

  return (
    <main className="pt-20">
      <section className="py-10 md:py-16">
        <div className="container-main">
          <div className="mb-10 text-sm text-muted">
            <Link href="/" className="hover:text-accent">
              HOME
            </Link>
            <span className="mx-3">/</span>
            <Link href="/products" className="hover:text-accent">
              PRODUCTS
            </Link>
            <span className="mx-3">/</span>
            <span>{product.name}</span>
          </div>

          <FadeIn className="grid gap-12 md:grid-cols-[0.95fr_1fr] md:items-center">
            <div>
              <div className="bg-surface">
                <img src={galleryImages[0]} alt={product.name} className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {galleryImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={index === 0 ? product.name : `${product.name} ${index + 1}`}
                    className="aspect-square bg-surface object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-xs tracking-[0.18em] text-accent">{product.englishName}</p>
              <div>
                <h1 className="font-mincho text-4xl font-medium leading-[1.45] md:text-5xl">{product.name}</h1>
                <p className="mt-2 text-lg text-muted">{product.subName}</p>
              </div>
              <h2 className="font-mincho text-2xl leading-[1.65] md:text-3xl">{product.tagline}</h2>
              <p className="prose-soft">{product.lead}</p>
              <ProductPurchase product={product} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>FEATURES</SectionLabel>
            <h2 className="section-title mt-4">Features</h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {product.features.map((feature, index) => (
              <FadeIn key={feature.title} className="bg-bg p-8 md:p-10" delay={index * 0.08}>
                <p className="font-serif text-5xl text-accent">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-8 text-xl font-medium leading-8">{feature.title}</h3>
                <p className="prose-soft mt-5">{feature.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main grid gap-14 md:grid-cols-[0.7fr_1fr]">
          <FadeIn>
            <SectionLabel>HOW TO USE</SectionLabel>
            <h2 className="section-title mt-4">Steps</h2>
          </FadeIn>
          <div className="space-y-5">
            {product.steps.map((step, index) => (
              <FadeIn key={step.title} className="grid gap-5 border-t border-border py-7 md:grid-cols-[96px_1fr]">
                <p className="text-sm tracking-[0.18em] text-accent">STEP {String(index + 1).padStart(2, '0')}</p>
                <div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="prose-soft mt-3">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-24 text-white md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.9fr_1fr] md:items-center">
          <FadeIn>
            <img src="/images/lifestyle/care-scene.jpg" alt="" className="aspect-[4/3] w-full object-cover" />
          </FadeIn>
          <FadeIn className="space-y-7" delay={0.1}>
            <SectionLabel>SAFETY</SectionLabel>
            <h2 className="jp-heading text-white">{product.safetyTitle}</h2>
            <p className="leading-[2] text-white/76">{product.safetyBody}</p>
            {product.free && (
              <div className="border border-white/22 p-6">
                <p className="text-sm tracking-[0.16em] text-accent">FREE</p>
                <p className="mt-3 leading-8 text-white/82">{product.free}</p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>SPEC</SectionLabel>
            <h2 className="section-title mt-4">Details</h2>
          </FadeIn>
          <FadeIn className="mt-12 overflow-x-auto">
            <table className="table-basic">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label}>
                    <th>{spec.label}</th>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>MOVIE</SectionLabel>
            <h2 className="section-title mt-4">PR Movie</h2>
          </FadeIn>
          <FadeIn className="mt-12 aspect-video overflow-hidden bg-dark">
            <iframe
              src={product.youtube}
              title={`${product.name} PR動画`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.65fr_1fr]">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="section-title mt-4">Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <FadeIn key={faq.q} className="border-t border-border py-6">
                <h3 className="font-medium">Q. {faq.q}</h3>
                <p className="prose-soft mt-3">A. {faq.a}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-main">
          <FadeIn className="flex items-end justify-between gap-6">
            <div>
              <SectionLabel>OTHER PRODUCTS</SectionLabel>
              <h2 className="section-title mt-4">Lineup</h2>
            </div>
            <Link href="/products" className="hidden text-sm font-medium tracking-[0.18em] hover:text-accent md:block">
              VIEW ALL →
            </Link>
          </FadeIn>
          <FadeIn className="mt-12 grid gap-7 md:grid-cols-2">
            {otherProducts.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <FadeIn className="container-main text-center">
          <h2 className="font-mincho text-3xl leading-[1.65] md:text-5xl">{product.finalCopy}</h2>
          <BuyButtons amazon={product.buy.amazon} rakuten={product.buy.rakuten} className="mt-10 justify-center" />
        </FadeIn>
      </section>
    </main>
  )
}
