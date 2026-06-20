type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`text-[13px] font-normal tracking-[0.15em] text-accent ${className}`}>
      （ {children} ）
    </p>
  )
}
