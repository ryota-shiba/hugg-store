import Link from 'next/link'
import BeholdWidget from '@/components/BeholdWidget'
import FadeIn from '@/components/FadeIn'
import ProductCard from '@/components/ProductCard'
import SectionLabel from '@/components/SectionLabel'
import { products } from '@/lib/products'

const journal = [
  ['2024.06.01', '天然成分95%とは？HUGGの原料へのこだわり'],
  ['2024.05.15', 'お風呂が苦手な子のドライケアの正しい使い方'],
  ['2024.04.01', 'ペットのニオイの原因と対処法'],
  ['2024.03.15', '炭酸マイクロバブルの仕組みを解説'],
]

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-dark text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/lifestyle/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(28,26,23,0.68) 0%, rgba(28,26,23,0.24) 60%, rgba(28,26,23,0.05) 100%)',
          }}
        />
        <div className="container-main relative flex min-h-screen flex-col items-center justify-center text-center">
          <FadeIn delay={1}>
            <h1 className="font-mincho text-5xl font-bold leading-[1.45] md:text-7xl">
              我が子に、<br />
              ありったけの愛を。
            </h1>
          </FadeIn>
          <p className="absolute bottom-16 text-xs tracking-[0.28em]">HUGG — pet specialty brand</p>
          <div className="absolute bottom-8 h-8 w-px animate-pulse bg-white/70" />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.92fr_1fr] md:items-center">
          <FadeIn>
            <img
              src="/images/lifestyle/care-scene.jpg"
              alt="HUGGのあるペットケア風景"
              className="aspect-[4/3] w-full object-cover"
            />
          </FadeIn>
          <FadeIn className="space-y-8" delay={0.1}>
            <SectionLabel>ミッション</SectionLabel>
            <h2 className="jp-heading">忙しい毎日でも、最善のケアを。</h2>
            <div className="prose-soft space-y-6">
              <p>
                わんちゃん・ねこちゃんは、心から愛おしい。でも、仕事に、家事に、育児に。ペットケアは、つい、あとまわしになってしまう。
              </p>
              <p>
                「もっと、ちゃんとしてあげたいのに。」胸の奥にある、その小さな罪悪感に。ずっと、寄り添えるブランドでありたい。
              </p>
              <p>
                HUGGは、その想いから生まれました。日々の手軽さのなかに、サロン帰りのような仕上がりを。
              </p>
            </div>
            <Link href="/about" className="pill-button border border-text hover:border-accent hover:bg-accent hover:text-white">
              Read More →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-main">
          <FadeIn className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div>
              <SectionLabel>商品ラインナップ</SectionLabel>
              <h2 className="section-title mt-4">Products</h2>
            </div>
            <p className="prose-soft">
              天然成分にこだわった上質な原料のみを使用。「やさしさ」と「確かな実感」をあなたのわんちゃん、猫ちゃんに。
            </p>
          </FadeIn>
          <FadeIn className="mt-14">
            <div className="flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between text-sm font-medium tracking-[0.18em]">
              <span className="text-muted">SCROLL →</span>
              <Link href="/products" className="transition hover:text-accent">
                VIEW ALL →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="reading" className="py-24 md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.88fr_1.12fr] md:items-start">
          <FadeIn>
            <SectionLabel>お役立ち情報</SectionLabel>
            <h2 className="section-title mt-4">Reading</h2>
            <img
              src="/images/lifestyle/journal.png"
              alt="HUGGブランドジャーナル"
              className="mt-10 aspect-[4/3] w-full object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-t border-border">
              {journal.map(([date, title]) => (
                <article key={title} className="grid gap-3 border-b border-border py-7 md:grid-cols-[120px_1fr]">
                  <time className="text-sm tracking-[0.12em] text-muted">{date}</time>
                  <h3 className="text-lg font-medium leading-8">{title}</h3>
                </article>
              ))}
            </div>
            <div className="mt-10 text-right">
              <Link href="/#reading" className="text-sm font-medium tracking-[0.18em] transition hover:text-accent">
                VIEW ALL →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-dark py-24 text-white md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.9fr_1fr] md:items-center">
          <FadeIn className="space-y-8">
            <SectionLabel>FOR BUSINESS</SectionLabel>
            <h2 className="section-title">Partner</h2>
            <h3 className="jp-heading text-white">法人・卸販売のご相談</h3>
            <p className="leading-[2] text-white/76">
              ペットショップ、トリミングサロン、動物病院、宿泊施設など、ペットと暮らす方々が集まる場所で、HUGGを取り扱っていただけるパートナーを募集しています。全国の専門店で取り扱い中。
            </p>
            <Link href="/contact" className="pill-button border border-white text-white hover:bg-white hover:text-dark">
              お問い合わせはこちら →
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden bg-bg/10">
              <img
                src="/images/lifestyle/partner01.png"
                alt="HUGGの法人・卸販売イメージ"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main grid gap-6 md:grid-cols-2">
          <FadeIn className="bg-surface p-8 md:p-10">
            <p className="text-sm tracking-[0.22em] text-accent">INSTAGRAM</p>
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_30%_105%,#feda75_0%,#fa7e1e_24%,#d62976_48%,#962fbf_72%,#4f5bd5_100%)] text-white shadow-soft">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="4" width="16" height="16" rx="5" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-medium leading-none">Instagram</h2>
                <p className="mt-2 text-sm tracking-[0.12em] text-muted">@hugg_official</p>
              </div>
            </div>
            <div className="mt-7 overflow-hidden bg-bg p-3">
              <BeholdWidget feedId="w7gIuuqKl9amjeNdcQeE" />
            </div>
            <p className="mt-8 text-lg font-medium">わんちゃん・ねこちゃんと、HUGGのある暮らし。</p>
            <a href="https://www.instagram.com/hugg_official/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-medium tracking-[0.18em]">
              フォローする →
            </a>
          </FadeIn>
          <FadeIn className="flex min-h-[360px] flex-col justify-between bg-[#06C755] p-8 text-white md:p-10" delay={0.1}>
            <div>
              <p className="text-sm tracking-[0.22em]">LINE</p>
              <h2 className="mt-10 font-mincho text-3xl leading-[1.6] md:text-4xl">
                LINE限定：Amazon 500円OFFクーポン配布中
              </h2>
            </div>
            <a href="#" className="pill-button mt-10 bg-white text-[#06C755] hover:bg-dark hover:text-white">
              友だち追加 →
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
