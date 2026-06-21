import fs from 'fs'
import path from 'path'

export const articleCategories = {
  'ブランド・商品': 'bg-accent/12 text-accent',
  'お役立ち': 'bg-[#06C755]/12 text-[#14843f]',
  '豆知識': 'bg-[#4F5BD5]/12 text-[#4F5BD5]',
} as const

export type ArticleCategory = keyof typeof articleCategories

export type ArticleSummary = {
  slug: string
  listTitle: string
  category: ArticleCategory
  fileName: string
}

export type Article = ArticleSummary & {
  title: string
  description: string
  content: string
}

export const articles: ArticleSummary[] = [
  {
    slug: 'ingredients-commitment',
    listTitle: 'HUGGの原料へのこだわり',
    category: 'ブランド・商品',
    fileName: 'ingredients-commitment.md',
  },
  {
    slug: 'dry-care-guide',
    listTitle: 'お風呂が苦手な子のドライケアの正しい使い方',
    category: 'お役立ち',
    fileName: 'dry-care-guide.md',
  },
  {
    slug: 'bath-frequency',
    listTitle: '愛犬の最適なお風呂の頻度は？',
    category: 'お役立ち',
    fileName: 'bath-frequency.md',
  },
  {
    slug: 'microbubble-mechanism',
    listTitle: '炭酸マイクロバブルの仕組みを解説',
    category: 'ブランド・商品',
    fileName: 'microbubble-mechanism.md',
  },
]

const contentDirectory = path.join(process.cwd(), 'src/content/reading')

function readArticleFile(fileName: string) {
  return fs.readFileSync(path.join(contentDirectory, fileName), 'utf8')
}

function extractMetaDescription(markdown: string) {
  const match = markdown.match(/\*\*meta description:\*\*\s*(.+)/)
  return match?.[1]?.trim() ?? ''
}

function extractTitle(markdown: string) {
  const match = markdown.match(/^#\s+(.+)$/m)
  return match?.[1]?.trim() ?? ''
}

function stripEditorialMeta(markdown: string) {
  return markdown
    .replace(/^#\s+.+\n+/, '')
    .replace(/^\*\*メインKW:\*\*.*\n?/gm, '')
    .replace(/^\*\*サブKW:\*\*.*\n?/gm, '')
    .replace(/^\*\*meta description:\*\*.*\n?/gm, '')
    .replace(/^---\n?/gm, '')
    .replace(/^## リード文\n+/m, '')
    .trim()
}

export function getArticle(slug: string): Article | undefined {
  const summary = articles.find((article) => article.slug === slug)
  if (!summary) return undefined

  const markdown = readArticleFile(summary.fileName)

  return {
    ...summary,
    title: extractTitle(markdown) || summary.listTitle,
    description: extractMetaDescription(markdown),
    content: stripEditorialMeta(markdown),
  }
}

export function getAllArticles() {
  return articles.map((article) => getArticle(article.slug)).filter(Boolean) as Article[]
}
