import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'HUGGとは | ブランドストーリー',
  description:
    '忙しい飼い主さんのために生まれたHUGGのブランドストーリー。天然成分へのこだわりと安全性への取り組みについてご紹介します。',
}

const commitments = [
  ['SAFETY', '徹底した安全性', '人より繊細な犬・猫のカラダを一番に考え、肌にやさしい植物由来の成分を中心に使用。大切な家族に使うものだから、安全性を何より大切にしています。'],
  ['EFFICACY', '妥協のない効果の追求', '安全性に配慮しながらも、確かな効果を実感していただくため、何度も処方を繰り返し、審査を通過したもののみを製品化しています。'],
  ['SIMPLICITY', '忙しい日常への寄り添い', 'シュッとひとふき、お湯に溶かすだけ。毎日続けられるシンプルさにこだわって開発しています。ケアは特別な日だけのものじゃない。'],
]

const company = [
  ['会社名', '株式会社ARCATH'],
  ['代表者', '代表取締役 柴 僚汰'],
  ['所在地', '〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8b'],
  ['電話番号', '050-8893-5364'],
  ['メール', 'info@arcath-ltd.co.jp'],
  ['事業内容', 'ペットケア用品の企画・製造・販売 / ECコンサルティング'],
  ['URL', 'https://hugg-store.com'],
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24 text-center md:py-32">
        <FadeIn className="container-main">
          <p className="text-sm tracking-[0.22em] text-accent">ABOUT HUGG</p>
          <h1 className="mt-8 font-mincho text-4xl font-medium leading-[1.75] md:text-6xl">
            愛する我が子と、<br />
            いつまでも健やかに。
          </h1>
        </FadeIn>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.8fr_1fr] md:items-start">
          <FadeIn>
            <img src="/images/lifestyle/representative.jpg" alt="代表メッセージ" className="aspect-[4/5] w-full object-cover" />
          </FadeIn>
          <FadeIn className="space-y-8" delay={0.1}>
            <SectionLabel>MESSAGE</SectionLabel>
            <h2 className="jp-heading">代表メッセージ</h2>
            <div className="prose-soft space-y-6">
              <p>私自身、犬を飼っています。</p>
              <p>
                毎日の暮らしのなかで「もっとちゃんとケアしてあげたい」と思いながらも、つい後まわしにしてしまう。そんな自分自身の経験が、HUGGの出発点でした。
              </p>
              <p>
                飼い主だからこそわかる、「手軽で、毎日続けられて、本当にいいもの」がほしいという気持ち。世の中にありそうでなかった、その「こんな商品があったらいいな」を自分たちの手で形にしようと決めました。
              </p>
              <p>
                HUGGを通じて、日々のケアが少しだけ手軽になって、その分、愛犬や愛猫とのコミュニケーションの時間が増えたら、こんなに嬉しいことはありません。
              </p>
            </div>
            <p className="text-sm font-medium">株式会社ARCATH 代表取締役　柴 僚汰</p>
          </FadeIn>
        </div>
      </section>

      <section id="company" className="py-24 md:py-32">
        <div className="container-main grid gap-12 md:grid-cols-[0.7fr_1fr]">
          <FadeIn>
            <SectionLabel>OUR VISION</SectionLabel>
            <h2 className="jp-heading mt-6">忙しい毎日でも、最善のケアを。</h2>
          </FadeIn>
          <FadeIn className="prose-soft space-y-6" delay={0.1}>
            <p>わんちゃん・ねこちゃんは、心から愛おしい。でも、仕事に、家事に、育児に。ペットケアは、つい、あとまわしになってしまう。</p>
            <p>「もっと、ちゃんとしてあげたいのに。」胸の奥にある、その小さな罪悪感に。ずっと、寄り添えるブランドでありたい。</p>
            <p>HUGGは、その想いから生まれました。シュッとひと吹き、泡立てて、洗うだけ。日々の手軽さのなかに、サロン帰りのような仕上がりを。</p>
            <p>大切な家族と過ごす時間が、いつまでも、健やかでありますように。その想いを、HUGGに込めて。</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-dark py-24 text-white md:py-32">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>OUR COMMITMENT</SectionLabel>
            <h2 className="jp-heading mt-6 text-white">大切な家族に使うものだから</h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {commitments.map(([en, title, body], index) => (
              <FadeIn key={en} className="border border-white/18 p-8 md:p-10" delay={index * 0.08}>
                <p className="font-serif text-4xl text-accent">{en}</p>
                <h3 className="mt-8 text-xl font-medium">{title}</h3>
                <p className="mt-5 leading-[2] text-white/76">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>COMPANY PROFILE</SectionLabel>
            <h2 className="section-title mt-4">Company</h2>
          </FadeIn>
          <FadeIn className="mt-12 overflow-x-auto">
            <table className="table-basic">
              <tbody>
                {company.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
