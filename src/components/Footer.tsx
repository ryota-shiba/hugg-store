import Link from 'next/link'

const footerNav = [
  { href: '/about', label: 'ABOUT US' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/#reading', label: 'NEWS' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-main py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-[0.2em]">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-12 text-sm leading-8 text-muted">
              <p>〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8b</p>
              <p>TEL: 050-8893-5364</p>
            </div>
          </div>
          <img src="/images/HUGG_logo.png" alt="HUGG" className="max-h-32 w-44 object-contain md:w-64" />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs tracking-[0.12em] text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition hover:text-accent">
              PRIVACY POLICY
            </Link>
            <Link href="/legal" className="transition hover:text-accent">
              特定商取引に関する表示
            </Link>
          </div>
          <p>© HUGG All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
