type BuyButtonsProps = {
  amazon: string
  rakuten: string
  className?: string
}

export default function BuyButtons({ amazon, rakuten, className = '' }: BuyButtonsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={amazon}
        target="_blank"
        rel="noopener noreferrer"
        className="pill-button bg-accent text-white hover:bg-dark"
      >
        Amazonで購入する →
      </a>
      <a
        href={rakuten}
        target="_blank"
        rel="noopener noreferrer"
        className="pill-button border border-accent bg-white text-accent hover:bg-accent hover:text-white"
      >
        楽天市場で購入する →
      </a>
    </div>
  )
}
