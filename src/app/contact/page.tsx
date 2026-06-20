import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'HUGGへのご質問・ご要望・卸販売に関するご相談はこちらからお気軽にどうぞ。',
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.8fr_1fr]">
          <FadeIn className="space-y-7">
            <SectionLabel>CONTACT</SectionLabel>
            <h1 className="font-mincho text-4xl font-medium leading-[1.5] md:text-5xl">お問い合わせ</h1>
            <p className="prose-soft">ご質問・ご要望・卸販売に関するご相談はこちらからお気軽にどうぞ。</p>
            <div className="border-t border-border pt-8 text-sm leading-8 text-muted">
              <p>株式会社ARCATH</p>
              <p>info@arcath-ltd.co.jp</p>
              <p>050-8893-5364</p>
            </div>
          </FadeIn>

          <FadeIn className="bg-surface p-8 md:p-10" delay={0.1}>
            <form action="https://formspree.io/f/mbdengda" method="POST" className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium">お名前（必須）</span>
                <input name="name" required className="mt-2 w-full border border-border bg-white px-4 py-3 outline-none focus:border-accent" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">メールアドレス（必須）</span>
                <input name="email" type="email" required className="mt-2 w-full border border-border bg-white px-4 py-3 outline-none focus:border-accent" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">お問い合わせ種別</span>
                <select name="category" className="mt-2 w-full border border-border bg-white px-4 py-3 outline-none focus:border-accent">
                  <option>商品について</option>
                  <option>ご注文・発送について</option>
                  <option>卸・法人のご相談</option>
                  <option>その他</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium">メッセージ（必須）</span>
                <textarea name="message" required rows={7} className="mt-2 w-full border border-border bg-white px-4 py-3 outline-none focus:border-accent" />
              </label>
              <button type="submit" className="pill-button bg-accent text-white hover:bg-dark">
                送信する
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
