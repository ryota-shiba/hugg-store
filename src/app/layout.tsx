import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://hugg-store.com'),
  title: {
    default: 'HUGG | 犬猫のためのペットケアブランド',
    template: '%s | HUGG',
  },
  description:
    '天然成分にこだわった犬猫用ペットケアブランドHUGG（ハググ）。グルーミングスプレー・炭酸入浴シャンプー・消臭スプレーをAmazon・楽天で販売中。',
  openGraph: {
    title: 'HUGG | 犬猫のためのペットケアブランド',
    description:
      '天然成分にこだわった犬猫用ペットケアブランドHUGG（ハググ）。',
    url: 'https://hugg-store.com',
    siteName: 'HUGG',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
