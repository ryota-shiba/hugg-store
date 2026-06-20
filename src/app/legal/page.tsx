import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
}

const rows = [
  ['販売業者名', '株式会社ARCATH'],
  ['代表者名', '代表取締役 柴 僚汰'],
  ['所在地', '〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8b'],
  ['電話番号', '050-8893-5364'],
  ['メールアドレス', 'info@arcath-ltd.co.jp'],
  ['販売URL', 'https://hugg-store.com'],
  ['販売価格', '各商品ページに記載（税込）'],
  ['送料', 'Amazonおよび楽天市場の各プラットフォームの規定に準ずる'],
  ['支払い方法', 'Amazonおよび楽天市場の各プラットフォームの規定に準ずる'],
  ['支払い時期', 'Amazonおよび楽天市場の各プラットフォームの規定に準ずる'],
  ['商品引渡し時期', 'ご注文後、Amazonおよび楽天市場の規定に準ずる'],
  ['返品・キャンセル', '未開封・未使用品に限り、商品到着後7日以内にご連絡ください。お客様都合の返品は送料お客様負担。'],
]

export default function LegalPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container-main">
          <FadeIn>
            <h1 className="font-mincho text-4xl font-medium md:text-5xl">特定商取引法に基づく表記</h1>
          </FadeIn>
          <FadeIn className="mt-12 overflow-x-auto">
            <table className="table-basic">
              <tbody>
                {rows.map(([label, value]) => (
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
