import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FadeIn from '@/components/FadeIn'
import MarkdownArticle from '@/components/MarkdownArticle'
import SectionLabel from '@/components/SectionLabel'
import { articleCategories, articles, getArticle } from '@/lib/articles'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <main className="pt-20">
      <section className="py-10 md:py-16">
        <div className="container-main">
          <div className="mb-10 text-sm text-muted">
            <Link href="/" className="hover:text-accent">
              HOME
            </Link>
            <span className="mx-3">/</span>
            <Link href="/reading" className="hover:text-accent">
              READING
            </Link>
            <span className="mx-3">/</span>
            <span>{article.listTitle}</span>
          </div>

          <FadeIn className="max-w-3xl">
            <SectionLabel>{article.category}</SectionLabel>
            <h1 className="mt-5 font-mincho text-4xl font-medium leading-[1.45] md:text-5xl">{article.title}</h1>
            <p className="mt-7 text-base leading-[2] text-muted">{article.description}</p>
            <span className={`mt-8 inline-block px-3 py-1.5 text-xs font-medium tracking-[0.08em] ${articleCategories[article.category]}`}>
              {article.category}
            </span>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-main grid gap-12 md:grid-cols-[minmax(0,760px)_1fr]">
          <FadeIn>
            <MarkdownArticle content={article.content} />
          </FadeIn>

          <FadeIn className="md:sticky md:top-28 md:self-start" delay={0.1}>
            <div className="bg-surface p-7">
              <p className="text-sm tracking-[0.18em] text-accent">OTHER ARTICLES</p>
              <div className="mt-6 space-y-5">
                {relatedArticles.map((item) => (
                  <Link key={item.slug} href={`/reading/${item.slug}`} className="block border-t border-border pt-5 hover:text-accent">
                    <span className={`inline-block px-3 py-1.5 text-xs font-medium tracking-[0.08em] ${articleCategories[item.category]}`}>
                      {item.category}
                    </span>
                    <p className="mt-3 text-sm font-medium leading-7">{item.listTitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
