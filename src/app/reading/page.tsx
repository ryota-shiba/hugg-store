import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import SectionLabel from '@/components/SectionLabel'
import { articleCategories, articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Reading | お役立ち情報',
  description: 'HUGGのペットケアに関するお役立ち記事、ブランド・商品情報、豆知識をまとめています。',
}

export default function ReadingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>お役立ち情報</SectionLabel>
            <h1 className="section-title mt-4">Reading</h1>
          </FadeIn>
          <FadeIn className="mt-14 border-t border-border" delay={0.1}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/reading/${article.slug}`}
                className="grid gap-4 border-b border-border py-8 transition hover:text-accent md:grid-cols-[160px_1fr_auto] md:items-center"
              >
                <span className={`w-fit px-3 py-1.5 text-xs font-medium tracking-[0.08em] ${articleCategories[article.category]}`}>
                  {article.category}
                </span>
                <h2 className="text-xl font-medium leading-8">{article.listTitle}</h2>
                <span className="text-sm font-medium tracking-[0.18em]">READ →</span>
              </Link>
            ))}
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
