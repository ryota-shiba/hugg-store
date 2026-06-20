import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: '会社概要',
}

const company = [
  ['会社名', '株式会社ARCATH'],
  ['代表者', '代表取締役 柴 僚汰'],
  ['所在地', '〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8b'],
  ['電話番号', '050-8893-5364'],
  ['メール', 'info@arcath-ltd.co.jp'],
  ['事業内容', 'ペットケア用品の企画・製造・販売 / ECコンサルティング'],
  ['URL', 'https://hugg-store.com'],
]

export default function CompanyPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container-main">
          <FadeIn>
            <SectionLabel>COMPANY PROFILE</SectionLabel>
            <h1 className="section-title mt-4">Company</h1>
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
