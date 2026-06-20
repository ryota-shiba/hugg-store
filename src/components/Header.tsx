'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'border-b border-border bg-bg/95 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-main flex h-20 items-center justify-between">
        <Link href="/" aria-label="HUGG ホーム" onClick={() => setOpen(false)}>
          <img src="/images/HUGG_logo.png" alt="HUGG" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="pill-button bg-accent text-white hover:bg-dark">
            CONTACT
          </Link>
        </nav>

        <button
          type="button"
          className="pill-button bg-accent px-6 py-2.5 text-white md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <div className="min-h-[calc(100vh-80px)] border-t border-border bg-bg px-6 py-12 md:hidden">
          <nav className="mx-auto flex max-w-sm flex-col gap-8 font-serif text-5xl">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
