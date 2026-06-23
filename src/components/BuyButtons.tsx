type BuyButtonsProps = {
  amazon: string
  rakuten: string
  className?: string
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.6 13.1a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 6H6" />
    </svg>
  )
}

export default function BuyButtons({ amazon, rakuten, className = '' }: BuyButtonsProps) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <a
        href={amazon}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FFE98A] to-[#FFC021] px-8 py-4 text-lg font-medium tracking-[0.06em] text-text shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <CartIcon />
        Amazonで購入
      </a>
      <a
        href={rakuten}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F56578] to-[#EF1F24] px-8 py-4 text-lg font-medium tracking-[0.06em] text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <CartIcon />
        楽天で購入
      </a>
    </div>
  )
}
