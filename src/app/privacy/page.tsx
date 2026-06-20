import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
}

const sections = [
  ['1. 個人情報の収集について', '当社は、お問い合わせフォーム等を通じて、お名前、メールアドレス等の個人情報をご提供いただく場合があります。個人情報の収集は、適法かつ公正な手段により行います。'],
  ['2. 個人情報の利用目的', 'お問い合わせへの対応、商品・サービスに関するご案内、サービスの改善および新サービスの開発、その他上記に付随する業務に利用します。'],
  ['3. 個人情報の第三者への提供', '当社は、お客様の同意がある場合、法令に基づく場合、人の生命・身体または財産の保護のために必要な場合を除き、個人情報を第三者に提供いたしません。'],
  ['4. 個人情報の安全管理', '当社は、個人情報の漏洩、滅失またはき損の防止のため、適切な安全管理措置を講じます。'],
  ['5. Cookieの使用について', '当社ウェブサイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieの受け取りを拒否することも可能です。'],
  ['6. プライバシーポリシーの変更', '当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。'],
  ['7. お問い合わせ', '個人情報の取扱いに関するお問い合わせは、株式会社ARCATH（info@arcath-ltd.co.jp / 050-8893-5364）までご連絡ください。'],
]

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <FadeIn className="container-main max-w-4xl">
          <h1 className="font-mincho text-4xl font-medium md:text-5xl">プライバシーポリシー</h1>
          <p className="prose-soft mt-8">
            株式会社ARCATH（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、適切な取扱いに努めます。
          </p>
          <div className="mt-12 space-y-10">
            {sections.map(([title, body]) => (
              <section key={title}>
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="prose-soft mt-4">{body}</p>
              </section>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
