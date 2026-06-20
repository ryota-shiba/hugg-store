import { products } from '@/lib/products'

type BeholdWidgetProps = {
  feedId: string
}

export default function BeholdWidget({ feedId }: BeholdWidgetProps) {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="grid grid-cols-3 gap-2">
        {products.concat(products).map((product, index) => (
          <img
            key={`${product.slug}-${index}`}
            src={product.image}
            alt=""
            className="aspect-square bg-bg object-cover"
          />
        ))}
      </div>
    )
  }

  const embedHtml = `<behold-widget feed-id="${feedId}"></behold-widget>
<script>
  (() => {
    const d=document,s=d.createElement("script");s.type="module";
    s.src="https://w.behold.so/widget.js";d.head.append(s);
  })();
</script>`

  return (
    <div
      className="behold-widget-wrap min-h-[320px]"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  )
}
