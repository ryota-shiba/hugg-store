export type BuyLink = {
  label: string
  amazon: string
  rakuten: string
  price: string
}

export type Product = {
  slug: string
  englishName: string
  name: string
  subName: string
  tagline: string
  lead: string
  volume: string
  price: string
  image: string
  galleryImages?: string[]
  youtube: string
  buy: {
    amazon: string
    rakuten: string
  }
  variants?: BuyLink[]
  features: { title: string; body: string }[]
  steps: { title: string; body: string }[]
  safetyTitle: string
  safetyBody: string
  free?: string
  specs: { label: string; value: string }[]
  faqs: { q: string; a: string }[]
  finalCopy: string
}

export const products: Product[] = [
  {
    slug: 'grooming-spray',
    englishName: 'HUGG GROOMING DRY SHAMPOO',
    name: 'グルーミングスプレー',
    subName: 'Organic Dry Shampoo 300ml',
    tagline: 'ひとふきで、気になる汚れもニオイも、すっきり。',
    lead:
      '洗い流し不要のペット用ドライシャンプー。シュッと吹きかけるだけで、たった10秒でお手入れ完了。天然成分95%のオーガニック処方で、消臭・除菌99.9%を実現しながら、シャンプー後のようなふわふわの毛並みに仕上げます。',
    volume: '300ml',
    price: '¥3,280（税込）',
    image: '/images/products/grooming-spray.jpg',
    galleryImages: ['/images/products/grooming-spray.jpg'],
    youtube: 'https://www.youtube.com/embed/_01eJJO0AfY',
    buy: {
      amazon: 'https://www.amazon.co.jp/dp/B0CJ2W4CSJ',
      rakuten: 'https://item.rakuten.co.jp/hugg-shop/hg-gds/',
    },
    features: [
      {
        title: '手軽なのに、確かな効果実感。',
        body:
          'お水を使わず、シュッと気になる部分に吹きかけるだけ。まるでお風呂に入ったかのような爽快感と、洗い流し不要のふわふわな仕上がりを両立しました。',
      },
      {
        title: '肌を想った、95%オーガニック処方。',
        body:
          '天然成分95%配合。低刺激でありながら、しっかりと体を清潔に保てる設計です。敏感肌・乾燥肌の子でも安心してお使いいただけます。',
      },
      {
        title: '合成香料不使用。天然精油のほのかな香り。',
        body:
          'わんちゃん・ねこちゃんの繊細な嗅覚を考え、合成香料は一切不使用。天然精油だけで仕立てた、ほのかに香るやさしい癒しの香りです。',
      },
    ],
    steps: [
      { title: '気になる部位にスプレー', body: 'ニオイや汚れが気になる部分にシュッと吹きかけてください。' },
      { title: 'やさしくブラッシング', body: '毛を強く引っ張らないように、やさしくブラッシングで毛並みを整えます。' },
      { title: '揉むようにタオルドライ', body: '最後にタオルでやさしく揉むように拭いて、ケア完了です。' },
    ],
    safetyTitle: '安全性に徹底的にこだわった、安心の国内製造。',
    safetyBody:
      '天然成分95%配合のオーガニック処方。専門機関による消臭力・除菌力・安全性の試験もクリアしています。',
    free: '合成香料・着色剤・サンフェート・鉱物油・パラベン・赤外線吸収剤・シリコン',
    specs: [
      { label: '商品名', value: 'HUGG Grooming Dry Shampoo（グルーミングスプレー）' },
      { label: '内容量', value: '300ml' },
      { label: '対象', value: '犬・猫' },
      { label: '香り', value: '無香料（天然精油のほのかにやさしい香り）' },
      { label: '製造国', value: '日本' },
      { label: '天然成分比率', value: '95%' },
      { label: '主な消臭成分', value: 'ヒノキ水、チャ葉エキス、ドクダミエキス、カキタニン' },
      { label: '主な保湿成分', value: 'ユズセラミド、アロエベラ液汁、ローマカミツレ花エキス、ローズマリー葉エキス' },
      { label: 'フリー処方', value: '合成香料・着色剤・サンフェート・鉱物油・パラベン・赤外線吸収剤・シリコン' },
    ],
    faqs: [
      { q: '肌の弱い子でも平気ですか？', a: '刺激の少ないやさしい天然オーガニック成分を使用していますので、敏感肌の子でもお使いいただけます。' },
      { q: '舐めても大丈夫ですか？', a: '天然オーガニック成分の配合で作られており、第三者機関の検査で「舐めても安心」の基準をクリアしています。' },
      { q: 'いつ使うのが効果的ですか？', a: 'ケアしやすいタイミングでご使用ください。お散歩帰りや、汚れ・ニオイが気になる時におすすめです。' },
    ],
    finalCopy: 'たった10秒で、いつもの毎日がもっと清潔に。',
  },
  {
    slug: 'carbonated-shampoo',
    englishName: 'HUGG SPARKLING CARBONATED BUBBLES',
    name: '炭酸入浴シャンプー',
    subName: 'Sparkling Micro Bubble Formula',
    tagline: '浸かるだけで、サロンのような仕上がりを。',
    lead:
      'お湯に溶かして、浸かるだけ。重炭酸イオンが毛の内側まで浸透し、汚れやニオイを浮かして落とす、新発想のペット用入浴シャンプー。厳選された植物エキス＆オイルが、被毛と地肌にうるおいを与えます。',
    volume: '400g / 800g',
    price: '¥3,680（税込）',
    image: '/images/products/carbonated-shampoo400g.jpg',
    galleryImages: [
      '/images/products/carbonated-shampoo400g.jpg',
      '/images/products/carbonated-shampoo800g.jpg',
    ],
    youtube: 'https://www.youtube.com/embed/H5EClF57UJ0',
    buy: {
      amazon: 'https://www.amazon.co.jp/dp/B0CZDSTRGD',
      rakuten: 'https://item.rakuten.co.jp/hugg-shop/hg-sbs400/',
    },
    variants: [
      {
        label: '400g',
        price: '¥3,680（税込）',
        amazon: 'https://www.amazon.co.jp/dp/B0CZDSTRGD',
        rakuten: 'https://item.rakuten.co.jp/hugg-shop/hg-sbs400/',
      },
      {
        label: '800g',
        price: '¥5,980（税込）',
        amazon: 'https://www.amazon.co.jp/dp/B0CZDSLL83',
        rakuten: 'https://item.rakuten.co.jp/hugg-shop/hg-sbs800/',
      },
    ],
    features: [
      {
        title: '微細なマイクロバブルが、汚れやニオイを分解除去。',
        body:
          '重炭酸イオンがお湯にしっかり溶け込み、毛の内側まで浸透。毛穴の奥に潜む汚れやニオイを、こすらず浮かし落とします。',
      },
      {
        title: '植物エキス & オイルで、被毛と地肌をしっかり保湿。',
        body:
          'ローズマリー、ホホバ、ツボクサ、カンゾウなど、厳選された植物由来成分を配合。毛先までしっとりまとまる仕上がりに。',
      },
      {
        title: '舐めても、目に入っても安心。安心安全の日本製。',
        body:
          '日本の検査機関による安全基準検査をクリア。人よりも繊細な家族に安心してお使いいただける、7つの無添加フリー処方です。',
      },
    ],
    steps: [
      { title: 'お湯に溶かす', body: '50Lのぬるま湯（36〜38℃）に本品スプーン1杯（20g）を入れ、よくかきまぜてください。' },
      { title: '約5分、浸からせる', body: 'お顔・からだ・肉球などにかけ湯をしながら、優しくなで洗いしてください。' },
      { title: 'シャワーで流す', body: '入浴後は軽く洗い流し、タオルドライをしてから、よく乾かしてあげてください。' },
    ],
    safetyTitle: '安全性を第一に考えた、安心安全の日本製。',
    safetyBody:
      'HUGGスパークリング炭酸入浴シャンプーは、日本の検査機関による厳しい安全基準検査をクリアしています。',
    free: '石油系界面活性剤・合成香料・合成着色料・アルコール・パラベン・鉱物油・紫外線吸着材',
    specs: [
      { label: '商品名', value: 'HUGG Sparkling Carbonated Bubbles（スパークリング炭酸入浴シャンプー）' },
      { label: '内容量', value: '400g / 800g' },
      { label: '対象', value: '犬・猫' },
      { label: '香り', value: '無香料' },
      { label: '製造国', value: '日本' },
      { label: '主な保湿成分', value: 'ローズマリー葉エキス、ホホバオイル、ツボクサ、カンゾウエキス' },
      { label: '機能性成分', value: 'ニームリーフエキス、ティーツリー、ユズセラミド' },
      { label: 'フリー処方', value: '石油系界面活性剤・合成香料・合成着色料・アルコール・パラベン・鉱物油・紫外線吸着材' },
    ],
    faqs: [
      { q: '猫にも使えますか？', a: 'わんちゃん・猫ちゃんどちらにもお使いいただける商品設計です。浸かるだけでOKなので、シャンプーを嫌がる子にもおすすめです。' },
      { q: '肌の弱い子でも使用して平気ですか？', a: '刺激の強い成分を使わない7つのフリー処方で、敏感肌の子にも配慮した低刺激の入浴剤です。' },
      { q: 'どうして汚れが落ちるの？', a: '炭酸マイクロバブルの細かい粒子が、毛穴から汚れやニオイを浮かせて落とします。' },
    ],
    finalCopy: '毎日のバスタイムが、特別な時間になる。',
  },
  {
    slug: 'purely-mist',
    englishName: 'HUGG PURELY MIST',
    name: 'ピュアリーミスト',
    subName: 'Natural Deodorizing Spray 300ml',
    tagline: '天然成分100%。舐めても、安心。なのに、しっかり消臭。',
    lead:
      '化学成分・アルコール、一切ゼロ。全成分はヒノキエキスのみ。植物の浄化パワーだけで、おしっこ臭・動物臭をニオイの元から分解する、本物の消臭スプレーです。',
    volume: '300ml',
    price: '¥2,480（税込）',
    image: '/images/products/purely-mist.jpg',
    galleryImages: ['/images/products/purely-mist.jpg'],
    youtube: 'https://www.youtube.com/embed/sIxIkVmhFhg',
    buy: {
      amazon: 'https://www.amazon.co.jp/dp/B0CY1YC9BN',
      rakuten: 'https://item.rakuten.co.jp/hugg-shop/hg-pmt/',
    },
    features: [
      {
        title: '全成分、ヒノキエキスだけ。',
        body:
          '配合成分はたった1つ。天然のヒノキエキス100%。化学成分もアルコールも一切使わず、植物の浄化パワーだけでニオイの元から分解します。',
      },
      {
        title: 'おしっこ臭、99.9%消臭。',
        body:
          'トイレ、ケージ、ペットシーツ、ソファー、床まで。家中まるごと使いやすく、動物臭・おしっこ臭をすっきり分解します。',
      },
      {
        title: '舐めても、ペットには無害。',
        body:
          '第三者機関による安全試験クリア済み。天然成分100%・国内製造だから、ペットのいるご家庭や赤ちゃんのいる空間にも。',
      },
    ],
    steps: [
      { title: '気になる場所にシュッと塗布', body: 'トイレ、ケージ、ペットシーツ、おもちゃ、床、ソファーなどにスプレーしてください。' },
      { title: 'そのまま乾かすだけ', body: '拭き取り不要。スプレー後は自然乾燥でOKです。ヒノキエキスがニオイの元を分解します。' },
    ],
    safetyTitle: '化学成分・アルコール、ゼロ。',
    safetyBody:
      '全成分は、ヒノキエキスただ1つ。第三者機関による急性経口毒性試験をクリアし、万が一ペットが舐めてしまっても無害であることが証明されています。',
    specs: [
      { label: '商品名', value: 'HUGG Purely Mist（ピュアリーミスト）' },
      { label: '内容量', value: '300ml' },
      { label: '対象', value: 'ペットのいるご家庭全般（犬・猫・その他）' },
      { label: '香り', value: 'ヒノキのほのかな香り' },
      { label: '製造国', value: '日本' },
      { label: '天然成分比率', value: '100%' },
      { label: '全成分', value: 'ヒノキエキス' },
      { label: '用途', value: 'トイレ、ケージ、ペットシーツ、おもちゃ、床・フローリング、ソファー・家具' },
    ],
    faqs: [
      { q: '化学的な成分は入っていますか？', a: '天然成分100%処方ですので、化学成分は一切使用していません。' },
      { q: 'ニオイはありますか？', a: '合成香料は使っておらず、ベース成分であるヒノキの香りがほんのりあります。' },
      { q: 'なぜペットの家庭におすすめなのですか？', a: 'ペットにとって有害となるアルコールを使わず、天然成分100%で作られた消臭スプレーだからです。' },
    ],
    finalCopy: 'ペットのいる暮らしを、もっと心地よく。',
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
