import { WorksItemDataInterface } from ".";

const SORT_ITEM_NAME = {
  IDPD: `Independent
  production`,
  CREATIVE_DIRECTION: "Creative direction",
  CLIENT_WORK: "Client work",
} as const;

const worksItems: WorksItemDataInterface[] = [
  {
    title: "Dining table",
    id: "0011",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/dining_table.webp"],
    createDate: "2024.10.11",
    text: `ペーパーコードで天板を固定する、アドホックなダイニングテーブルをデザインしました。

このダイニングテーブルは4つのパーツでできています。
鉄でできた脚、それに固定されたチークの契り、古材の天板、
そして、これらを固定するために巻きつけたペーパーコードです。

天板は、築70年の世田谷にあった民家の解体材を使用しています。
客間の床材でした。
ビス跡や傷はそのままに、渋墨塗装(松ヤニと墨でできた天然塗料)で仕上げています。
チークの契りとペーパーコードと合わさり、多様な素材感は、机に豊かな表情を持たせてくれます。

このダイニングテーブルは、天板と脚をビスで固定していないので、
別々に搬入することができます。
狭い搬入動線でも設置可能ですし、
解体が簡単なので引っ越し等の大きな移動も容易です。
また、天板だけ変えることも可能なので、
ライフスタイルに合わせて、小さくしても良いかもしれません。

ライフスタイルに如何様にも合わせられる、
可変性をもったアドホックなテーブルシステムを作りました。`,
    textEnglish: `I designed an ad-hoc dining table where the tabletop is secured with paper cord.

This dining table is composed of four parts: iron legs, teak butterfly joints fixed to them, a reclaimed wood tabletop, and the paper cord wrapped around to secure them.

The tabletop uses wood from a house in Setagaya that was demolished after 70 years. The wood was originally flooring from a guest room. The screw holes and scratches have been left as is, and it has been finished with a natural stain called Shibu-sumi, made from pine resin and sumi ink. The combination of teak butterfly joints and paper cord, along with the various textures of the materials, gives the table a rich and expressive character.

Since the tabletop and legs are not fixed together with screws, they can be brought in separately. This makes it possible to install the table even in narrow spaces, and the simple disassembly makes it easy to move, such as during a relocation. You can also change just the tabletop, so it might be worth considering downsizing the table to fit your lifestyle.

We’ve created an ad-hoc table system with flexibility that can be adapted to any lifestyle.
    `,
  },
  {
    title: "Upcycle coaster",
    id: "0012",
    category: SORT_ITEM_NAME.CREATIVE_DIRECTION,
    urls: ["/images/works/upcycle_coaster.webp"],
    createDate: "2024.10.11",
    text: `出荷の際に仕方なく廃棄されてしまうシンビジウムの一部花弁を利用したアップサイクル・コースターです。

シンビジウムというお花をご存知でしょうか。それはラン科の花で、胡蝶蘭の仲間でもあります。東南アジアを原産地とし現在の品種数は3000以上、花色は白やオレンジ、黄色、ピンクなど色とりどりです。花持ちが良く、発色も綺麗で、力強くも精細な佇まいがある、そんな美しい花です。

このコースターは、出荷の際に廃棄されるシンビジウムの花弁をすくいあげるプロジェクトの第一弾プロダクトとして制作しました。本プロジェクトはフローリストの室井凪砂さんと共同で進めており、シンビジウムのロスをアップサイクルで暮らしの道具に変換することで、シンビジウムの美しさと魅力を伝えることを目的としています。

コースターは、アクリルでシンビジウムを挟み込みネジで締め上げるシンプルな構成にしました。コースターを手放す際にはシンビジウムとアクリルを分けられますし、他の花や草を挟むこともできます。

さまざまな色のシンビジウムを描くように並べたこのコースターは、色鮮やかで繊細ながらも強さを感じさせるシンビジウムの魅力を伝える唯一無二のプロダクトです。`,
    textEnglish: `
    This is an upcycled coaster made from Cymbidium flower petals that would otherwise be discarded during the shipping process.

Are you familiar with the Cymbidium flower? It belongs to the orchid family, closely related to the Phalaenopsis. Native to Southeast Asia, there are now over 3,000 varieties, and they come in a wide range of colors, including white, orange, yellow, and pink. These flowers are known for their long-lasting blooms, vibrant colors, and a presence that is both strong and delicate—truly beautiful flowers.

This coaster was created as the first product in a project to salvage Cymbidium petals that would otherwise be discarded during shipping. We are working on this project in collaboration with florist Nagisa Muroi, with the aim of showcasing the beauty and charm of Cymbidium flowers by upcycling them into everyday items.

The coaster has a simple design, with the Cymbidium petals sandwiched between layers of acrylic and secured with screws. When it's time to part with the coaster, you can easily separate the flowers from the acrylic, or even replace them with other flowers or plants.

This unique product, with its arrangement of Cymbidium petals in various colors, beautifully captures the vibrant, delicate, yet strong appeal of the flower.`,
  },
  {
    title: "Temper color vase",
    id: "0041",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/temper_color_vase.webp"],
    createDate: "2024.10.11",
    text: `テンパーカラーという金属の表面にできる酸化膜を使って、鉄製の花器をデザインしました。

酸化膜の色は、加熱する温度によって多様な色づきになります。

鍛冶屋による手作業で、一つ一つ、色を見ながら丁寧に作りました。

挿花と共に、美しい色合いで暮らしを彩る花器です。`,
    textEnglish: `
    I designed an iron vase using a temper color, which is an oxide film that forms on the surface of metal.

The color of the oxide film varies depending on the temperature at which it is heated.

Each vase is carefully crafted by hand by a blacksmith, with attention to achieving the perfect color.

This vase, with its beautiful hues, adds a touch of color to your life alongside the flowers it holds.`,
  },
  {
    title: "Tightened object",
    id: "0019",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/tightened_object.webp"],
    createDate: "2024.10.11",
    text: `解体材の杉を用いたアップサイクルのオブジェです。

オブジェは大きく3つのパーツでできています。
杉の4つの角材とラワン合板の契り、そして、これらを締め上げているペーパーコードです。
釘を一切使用しておらず、解体しやすい構成になっています。

スベスベした杉の木肌に、ザラザラとしたペーパーコードの質感で、温かみのある触りたくなるようなオブジェを目指しました。

オブジェには十字の隙間があります。
ラワン合板の契りによって、杉の4つの角材の間に生まれた隙間です。

隙間にミラーを挟めば、日常使いのミラースタンドになり、
ミラーの代わりに商品説明のポップ・看板を挟めば、イベント時の簡単な什器になります。

また、ひっくり返して使えば、
ラワン合板の契りが愛らしい物置台としても使えます。

持ち運びにも適した20㎝角のサイズで、
フリーマーケットやハンドメイド作品の展示販売といったイベント出店時に、もちはこびができる什器になると考えています。

日常使いだけでない使い勝手のよさがある、素朴で温かみを持つオブジェを作りました。`,
    textEnglish: `This is an upcycled object made from dismantled cedar wood.

The object is composed of three main parts: four cedar timbers, Lauan plywood butterfly joints, and paper cord that holds everything together. No nails were used, making it easy to disassemble.

We aimed to create a warm, tactile object by combining the smooth surface of the cedar with the rough texture of the paper cord.

The object features a cross-shaped gap, created by the spacing between the four cedar timbers and secured with the Lauan plywood butterfly joints.

You can insert a mirror into the gap to use it as a mirror stand for everyday use, or replace the mirror with a product description or sign to create a simple display stand for events.

Additionally, by flipping it upside down, the object can serve as a charming little platform, showcasing the butterfly joints.

The object is 20 cm square, making it portable and suitable as a display stand for events like flea markets or handmade craft sales.

We have created a simple and warm object that offers versatile functionality beyond everyday use.`,
  },
  {
    title: "Wall art -iron-",
    id: "0027",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/wall_art_iron.webp"],
    createDate: "2024.10.11",
    text: `鉄を、テクスチャとして見つめ直した作品です。

壁に、タンニンと赤錆を反応させ黒く発色させた鉄板を飾っています。

床に、高温に熱された鉄が常温に冷える際にできる黒い酸化皮膜、
”黒皮”をまとった鉄板を敷いています。

その上に、大気中で加熱した温度によって色が異なる酸化皮膜、
いわゆる”テンパーカラー”で色づいた鉄の花器を置きました。

”鉄”という素材に、微細な差異を持つ”黒色”を与え、
奥行きのある表情を持った”間”を生みました。`,
    textEnglish: `This is a work that reexamines iron as a texture.

On the wall, I have placed an iron plate that has been blackened through a reaction between tannin and red rust.

On the floor, I have laid down an iron plate covered with "mill scale," a black oxide film that forms as hot iron cools to room temperature.

On top of that, I have placed an iron vase colored with a temper color, an oxide film that varies in hue depending on the temperature at which the iron was heated in the atmosphere.

By giving the material of "iron" subtle variations in "black," I have created a space with depth and a rich expression.`,
  },
  {
    title: "Flower arrangement -S2-",
    id: "0210",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/flower_arrangement_s2.webp"],
    createDate: "2024.10.11",
    text: `石化エニシダをペーパーコードで巻いた
素朴な印象の壁飾りです。
フローリストの室井さんと製作しました

ペーパーコードは、北欧で誕生しました。
一次世界大戦中に生産され、当時は麦などを束ねるために使われていたようです。

現代では椅子の座面など、家具で使われることが多い身近な素材。
ユニークな形の石化エニシダとラフに合わせました。`,
    textEnglish: `This is a wall decoration with a rustic impression, made by wrapping petrified broom with paper cord. It was created in collaboration with florist Nagisa Muroi.

Paper cord originated in Scandinavia. It was produced during World War I and was used at the time to bundle crops like wheat.

Today, it is a familiar material often used in furniture, such as chair seats. We paired it roughly with the uniquely shaped petrified broom.`,
  },
  {
    title: "Flower arrangement -S1-",
    id: "0111",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/flower_arrangement_s1.webp"],
    createDate: "2024.10.11",
    text: `フローリストの室井さんと製作した壁飾りです。
アンダーな色合いを主とした枝物を、ペーパーコードで巻き上げ、形作りました。

植物は、私たちの身の回り至る所に存在しています。

屋外だと、窓から見える遠くの山の木々から、街路樹や庭に生える木、雑草。
そして、道端に落ちてる落ち葉や小枝も含め植物です。

屋内だと、鉢で育てている観葉植物や、花器に生けている切花が当たると思います。
加え、壁や天井に飾るドライフラワーもでしょうか。

現代は、自生する植物と人工的に管理された植物が、入り混じって身近に存在していますが、”植物は外で自生する”という点で、
無意識下で、植物は屋外にある存在だと認識している側面はないでしょうか
（植物は自然の一部、生き物だからという側面もあるかもしれません）

生きた植物や、植物の気配を屋内に積極的に取り込むことで、
屋内にいながらも屋外の気配を感じることができないかと考えます。

この壁飾りは、ドライフラワー（言い換えれば、生物的に死んでしまった植物）が
屋内外の境界を感覚的に曖昧にさせる訴求力を
どの程度持つかという、実験も兼ねて製作しました。`,
    textEnglish: `This is a wall decoration created in collaboration with florist Nagisa Muroi. We shaped it by wrapping branches with muted tones in paper cord.

Plants are all around us.

Outdoors, they range from the trees on distant mountains visible from a window, to street trees, garden plants, and even weeds. Even fallen leaves and twigs on the roadside are part of this natural presence.

Indoors, we have potted houseplants and cut flowers arranged in vases. There are also dried flowers displayed on walls and ceilings.

Today, wild plants and artificially managed plants coexist closely with us. Yet, perhaps subconsciously, we still perceive plants as belonging outdoors, in their natural habitat (perhaps because plants are part of nature, living organisms).

By actively incorporating living plants or the presence of plants into indoor spaces, we can bring a sense of the outdoors inside, allowing us to feel connected to nature even while indoors.

This wall decoration was also created as an experiment to see to what extent dried flowers (which, in other words, are plants that have biologically died) can blur the sensory boundary between indoor and outdoor spaces.`,
  },
  {
    title: "Drop incense holder",
    id: "0987",
    category: SORT_ITEM_NAME.CLIENT_WORK,
    urls: ["/images/works/drop_incense_holder.webp"],
    createDate: "2024.10.11",
    text: `サイドテーブルのためにデザインした真鍮のお香立てです。
裏返すと、蓋になります。

”表”のお香立てとして使うとき、
”波うった天板”に一滴の雫が落ちたような動的な形を、
”裏”の蓋として使うとき、
”波うった天板”に浮かぶ月のような静的な形をイメージしました。`,
    textEnglish: `This is a brass incense holder designed for a side table. When turned upside down, it serves as a lid.

When used as an incense holder in its "upright" position, it evokes a dynamic shape, like a droplet of water falling onto a rippled surface. When used as a lid in its "inverted" position, it resembles a static image, like the moon floating on a rippled surface.`,
  },
  {
    title: "Side table",
    id: "0011",
    category: SORT_ITEM_NAME.CLIENT_WORK,
    urls: ["/images/works/side_table.webp"],
    createDate: "2024.10.11",
    text: `コーヒーを淹れる友人のためにデザインしたサイドテーブルです。

計画の始まりは、六畳一間の友人の家のサイドテーブルを買い替えるところからでした。
友人は、学生時にコーヒーで学生企業団体を立ち上げ、
社会に出た後も、副業的にカフェに立ったり、コーヒーに関するイベント出展を行う等、精力的な人です。
加えて、コーヒーを通じた活動から、
隣接するカルチャーに接する機会も多く、
多様なコミュニティを築き上げることができるホスピタリティに溢れた人柄です。

サイドテーブルは、六畳一間の限られたスペース中で日常的な利用が求められる一方で、
友人が客人にコーヒーをサーブする非日常時に、2つの魅力を引き出すことを目指しました。

それは、「友人が淹れるコーヒー」と「友人の人柄」の２つの魅力です。
この２つの魅力を引き出すための3つの”仕掛け”をサイドテーブルに設けました。

１つは、”波うった天板”です。
コーヒーと向かい合うための緊張感を求めました。
”波うった天板”は、転倒するほどではないにしても、マグを含め置いてるものが安定しません。
「マグを手に取り、コーヒーを口に含み、そして、マグを”そっと”天板に置く」
物を天板に置くときの細やかな動作が、使い手に自然と緊張感を与えます。
程よい緊張感は、五感を研ぎ澄ませ、よりコーヒーに没入させると考えています。
サイドテーブルの薄く細い構成も相まって、使い手に繊細な振る舞いを求めることを期待します。

２つ目は、天板に開けた”直径21mmの穴”です。
友人の興味関心が展開でき、かつ、客人をもてなすことができるよう、
サイドテーブルの使い方を広げることを意図しました。

”直径21mmの穴”は、試験管と
サイドテーブルに合わせ製作した真鍮の蓋を
挿入することができます
試験管は、花を活けることができ、
真鍮の蓋は、裏返すとお香立てになります

コーヒーによる味覚に加え、視覚と嗅覚においても、
客人をもてなすことができるようにしました。
また、友人の交友関係には、花や香りの専門家も多く、
彼のコミュニティや人柄が透けて感じられたらなと思います。

最後、３つ目は”友人と客人の距離をはかる寸法”です
サイドテーブルの大きさはW×D×Hで455mm×455mm×455mmとしました。
畳のモジュール（1820mm×910mm）に倣った寸法とすることで、六畳一間の空間に馴染むよう配慮しました。
一方で、コーヒーをサーブする友人と客人が向かい合うには、やや近すぎる距離です。
そこで、近すぎず、程よい距離になるように、
脚の位置を調整しています。
天板の中心から脚の位置をずらし、
２本の後脚を友人（サーブ）側に突き出して、１本の前脚は内側に引いています。
友人（サーブ）をサイドテーブルから離し、客人と距離を自然に取ります。
畳の1/8という455mm角の狭小なスペースで、
人が対面でコーヒーを淹れることができる最小寸法を目指しました。

3つの”仕掛け”を施したサイドテーブルを通じて、
友人のコミュニティが広がる一助となればと思います。
そして、このサイドテーブルが、物理的空間以上の空間の広がりを、
五感を通じて使い手に与えられることを期待しています。`,
    textEnglish: `This is a side table designed for a friend who loves making coffee.

The idea began with replacing the side table in my friend’s six-tatami mat room. My friend started a student-run coffee business in college, and even after entering the workforce, he remains actively involved in coffee-related events and part-time work at cafes. Additionally, his work with coffee has led him to engage with adjacent cultural fields, allowing him to build diverse communities. He is a person full of hospitality.

The side table needed to be functional for everyday use in the limited space of a six-tatami mat room, while also enhancing two key aspects when my friend serves coffee to guests: the quality of the coffee he brews and his warm personality.

To bring out these two qualities, I incorporated three “features” into the side table.

The first feature is the “rippled tabletop.” I wanted to create a sense of tension when interacting with the coffee. The rippled tabletop is not unstable to the point of causing spills, but items placed on it, including mugs, do not sit entirely steady. This subtle instability encourages the user to carefully pick up the mug, take a sip, and then gently place it back on the table. These delicate actions naturally introduce a sense of focus and tension, which I believe sharpens the senses and deepens the coffee experience. The table's thin and slender design also complements this, encouraging a refined and gentle manner of use.

The second feature is the “21mm diameter hole” in the tabletop. This was designed to extend the table’s functionality, allowing my friend to share his interests with guests and host them in a more engaging way.

The 21mm hole can hold a test tube or a custom-made brass lid. The test tube can be used as a vase, while the brass lid, when flipped over, becomes an incense holder. This allows the host to not only delight guests through taste, but also visually and olfactorily. Additionally, many of my friend’s acquaintances are experts in flowers and fragrances, so this feature subtly reflects his community and personality.

The third feature is the “dimensions that measure the distance between my friend and his guests.” The table's size is 455mm × 455mm × 455mm, based on the dimensions of a tatami mat module (1820mm × 910mm), ensuring it fits naturally within the space of a six-tatami mat room. However, this size makes the distance between my friend and his guest slightly too close for comfort when serving coffee. To create a more comfortable distance, I adjusted the position of the legs. The two back legs are extended towards the friend’s (serving) side, while the single front leg is pulled inward. This design moves my friend slightly away from the table, creating a natural space between him and his guest. The goal was to find the minimum size in a 455mm square area, one-eighth of a tatami mat, where two people can comfortably face each other while making coffee.

I hope that this side table, with its three unique features, will help expand my friend’s community. Moreover, I believe that this table can offer a sense of expanded space, beyond its physical dimensions, through an immersive sensory experience.`,
  },
  {
    title: "Curtain stool",
    id: "0012",
    category: SORT_ITEM_NAME.CLIENT_WORK,
    urls: [
      "/images/works/curtain_stool.webp",
      "/images/works/curtain_stool2.webp",
    ],
    createDate: "2024.10.11",
    text: `ワンちゃんと飼い主が、ほど良い距離でいられるスツールをデザインした。

ワンちゃんと飼い主の距離が問題で、ワンチャンに悲しい思いをさせてしまったことがないだろうか。
例えば、飼い主が食事をしている時。食事に興味をもったワンちゃんが食卓に潜り込んだことに気づかず、あやまって踏んでしまい痛い思いをさせてしまったことは、愛犬家なら誰しも経験があるだろう。
それなら、注意力散漫な食事中などはゲージにいれておけばいいという意見もある。
しかし、家族の一人であるワンちゃんを食事中に遠ざけるなんて寂しいし、ゲージに入れられたワンちゃんも悲しそうな表情を浮かべている。

そばにいたいのに、そばにいると危ない。
遠くにいれば安全だけど、遠くにいると寂しい。
飼い主とワンチャンのもどかしい距離感がほど良いものであるために、椅子とシェルターの機能を兼ね備えたスツールを考えた。

黒いカーテンを携えた丸い家具は、一見するとサイドテーブルを兼ね備えたスツールのようにみえるが、カーテンの中はワンちゃんのハウスにもなっている。
飼い主とワンちゃんの距離を近づけつつ、同時にワンちゃんを守るシェルターとしての役割も果たすようデザインした。

このスツールはクッション・カーテン・本体の3つの要素から構成されている。
本体は強度を考慮して鉄で製作し、ワンちゃんの誤飲を避けるために接合はすべて溶接で処理した。また、本体の座面はステンレスの磨き仕上げにして、座面を周囲の風景と溶け込ませることでワンちゃんの存在感をさらに強めている。
狭くて暗いところを好むワンちゃんの居心地の良さを考えて、座面下に取り外し可能なカーテンをデザインした。カーテンとクッションの生地色はクライアントのワンチャンの毛色に合わせ、クッションはそのモフモフな毛並みを表現している。

ワンちゃんの毛色や毛並みを再現したこのスツールが、飼い主とワンちゃんの距離をほど良いものにして、さらに愛ある関係性になることを期待している。`,
    textEnglish: `I designed a stool that allows a dog and its owner to be at a comfortable distance.

Have you ever unintentionally made your dog feel sad due to being too close or too far away? For example, when the owner is eating, a dog might sneak under the table out of curiosity, only to be accidentally stepped on, causing pain. Every dog lover has likely experienced something like this. Some might suggest putting the dog in a crate during meals to avoid such situations. However, it feels lonely to distance a beloved family member during mealtime, and the dog, confined to the crate, often looks sad.

They want to be close, but being close can be dangerous. Being far away is safe, but it’s also lonely. To address this frustrating dilemma between dogs and their owners, I designed a stool that functions as both a seat and a shelter.

This round piece of furniture with a black curtain might look like a stool that doubles as a side table, but inside the curtain, it’s a cozy house for the dog. It’s designed to bring the owner and dog closer together while also serving as a protective shelter for the dog.

The stool is made up of three elements: the cushion, the curtain, and the main body. The main body is made of iron for strength, and all joints are welded to prevent the dog from accidentally swallowing any parts. The seat surface is polished stainless steel, blending with the surrounding environment to subtly highlight the dog’s presence. Considering dogs' comfort in small, dark spaces, I designed a removable curtain under the seat. The fabric colors of the curtain and cushion are matched to the client's dog’s fur color, and the cushion mimics the fluffy texture of the dog's coat.

I hope that this stool, which reflects the dog’s fur color and texture, will help create a comfortable distance between the owner and their dog, fostering an even more loving relationship.`,
  },
  {
    title: "Curtain",
    id: "0041",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/curtain.webp"],
    createDate: "2024.10.11",
    text: `都内の6畳一間のために、
カーテンを軸とした開口周りをデザインした。

都内の住宅街は敷地一杯に建築をするため、隣地の住戸と距離が近いことが多い。
特に、アパートや低層マンションの居室によっては、
隣家に向かって開口部が開いていることも多いだろう。

そういった開口部はとざされ、
通気のためだけになってしまいがちである。

しかし、狭小な居室にとって数少ない開口部は、
生活の中で外の様子を感じ取れる重要な要素と考える。

景色に頼らず、そして、プライベートを守りながら、
屋外の気配を屋内に取り入れることはできないか考えた。

カーテンは2枚の布を重ねている。
オーガンジーを両面ラミネート加工した特殊な布と
目の細かいメッシュだ。
カーテンの折幅は、
シャープな印象を持たせるため5mm程度にした。
窓台周りは、窓台と同じレベルで
鉄板を敷いた棚の天板を設置した。

両面ラミネート加工された特殊な布は、
外光を程よく透過する一方で、
外からの視線はボカして遮断する。
また、反射率が高いため、
カーテンの屋外側で光を反射し拡散させている。

光を包み込んだかのような、
はっきりとした光の境界が鉄板にあらわれた。
また、カーテンそのものが鉄板に鈍く反射し、
窓周りに奥行きが生まれた。

メッシュは、緩やかなドレープをつけている。
メッシュの目に対し、
平行に見ると存在がなくなったかのように姿を消し、
垂直に見ると線が浮かび上がったように見える。

角度によって、見える目の密度に変化が生じ、
見え方が変わるメッシュは、微細な気流をキャチする。
軽やかになびくくことで、風を繊細に可視化した。

プライベートを守りつつ、境界線として光を強調し、
風を繊細に可視化することで、その日の天気や時間帯を印象的に居室に引き込んだ。`,
    textEnglish: `For a 6-tatami mat room in Tokyo, I designed a window opening area centered around curtains.

In residential areas of Tokyo, buildings are often constructed to maximize site usage, resulting in close proximity to neighboring units. Especially in apartments or low-rise buildings, windows frequently open directly towards neighboring homes.

These openings are often merely covered for ventilation purposes.

However, for a small room, these limited openings are crucial elements that allow a sense of the outside world to be felt within the living space.

I considered how to bring the presence of the outdoors inside without relying on the view and while maintaining privacy.

The curtain consists of two layers of fabric. One is a special fabric laminated on both sides with organza, and the other is a fine mesh. The pleats of the curtain are approximately 5mm wide to give a sharp impression. Around the window sill, a shelf with a metal plate, level with the window sill, was installed.

The special fabric laminated on both sides allows outside light to filter through moderately while blurring and blocking outside views. Additionally, its high reflectivity scatters and reflects light on the exterior side of the curtain.

The curtain creates a clear boundary of light on the metal plate, as if enveloping it. The curtain itself also reflects dullly on the metal plate, adding depth to the window area.

The mesh curtain features a gentle drape. When viewed parallel to the mesh, it seems to vanish, while viewed vertically, it appears as if lines emerge.

The mesh’s density changes with the angle of view, altering its appearance and capturing subtle air currents. Its light and fluttering movement delicately visualizes the wind.

By emphasizing light as a boundary while protecting privacy and delicately visualizing the wind, this design brings the day's weather and time of day into the room in an evocative manner.`,
  },
  {
    title: "Shelf",
    id: "0019",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/shelf.webp"],
    createDate: "2024.10.11",
    text: `音楽と写真を趣味に持つ夫婦のために、デザインした棚である。
CDとギターのエフェクター、カメラとレンズの収納に加え、デスクトップPCの作業スペースが求められた。
また、予算の都合上、自主制作を行う必要があったため、簡易な加工が求められた。

そこで、多彩な趣味が生活に溶け込みつつ、そして、生活を彩れるように、飾り棚としてオープンな作りを考えた。
また、飾り棚と作業スペースを一つの家具にまとめ、鑑賞・収納・作業の3つの機能をシームレスにつなぐことで、より生活に寄り添える家具を目指した。

構成としては、ラワンの角材を井桁状に組んだ脚に、ラワン合板の棚板とした。
天板には、黒皮鉄板を敷き、ペーパーコードで巻いて固定した。

作業スペースは、飾り棚の天板以上に構造的耐力が求められる。
30mmの補強材を入れつつ、ラワン合板の棚板と鉄板をペーパーコードで締め上げて一体としたことで、たわみを抑えた。

鉄板は、寸法上一枚で発注できなかったため3枚に分割しているが、
継いだ箇所にペーパーコードを巻くことで、継ぎ目が見えないようにしている。

椅子は、制作した棚と構成が近く、親和性の高いペーパーコードをあしらった製品を選定した。

黒く艶のある硬い鉄板が飾り棚としてシャープな印象も持たせている。
一方、リズミカルに配したペーパーコードは、マットで手触りの柔らかさから、マグをおいたり、携帯を置いたりと作業スペースの拠り所となることを期待した。

鉄とペーパーコード、そして、木組の棚は質素で温かみのある仕上がりとなった。

複数の機能と手触りをシームレスに繋げたたことで、夫婦の暮らしの多様なシーンに寄り添えただろう。`,
    textEnglish: `
    This is a shelf designed for a couple with hobbies in music and photography. They needed storage for CDs and guitar effects pedals, cameras and lenses, as well as a workspace for a desktop PC. Due to budget constraints, DIY production was necessary, requiring simple processing techniques.

To integrate their diverse hobbies into daily life while adding a touch of decoration, I designed an open display shelf. Additionally, by combining the display shelf and workspace into one piece of furniture, I aimed to seamlessly connect the three functions of display, storage, and work to create a piece that better complements their lifestyle.

The structure consists of ramin timber arranged in a lattice pattern for the legs, with ramin plywood shelves. The top surface features blackened steel plates, secured and wrapped with paper cord.

The workspace requires more structural strength than the display shelf. By adding 30mm reinforcement and securing the ramin plywood shelves and steel plates with paper cord, I minimized deflection.

The steel plates had to be ordered in three sections due to size constraints, but I wrapped paper cord around the joints to hide the seams.

For the chair, I selected a product with a similar structure and high compatibility, featuring paper cord.

The black, glossy, hard steel plates give the display shelf a sharp impression, while the rhythmically arranged paper cord offers a matte, soft texture, making the workspace suitable for placing mugs or phones.

The combination of steel, paper cord, and wooden shelves results in a simple yet warm finish.

By seamlessly connecting multiple functions and textures, this piece of furniture is designed to adapt to various scenes in the couple's life.`,
  },
  {
    title: "Tightened object",
    id: "0027",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/item_7.webp"],
    createDate: "2024.10.11",
    text: `音楽と写真を趣味に持つ夫婦のために、デザインした棚である。
CDとギターのエフェクター、カメラとレンズの収納に加え、デスクトップPCの作業スペースが求められた。
また、予算の都合上、自主制作を行う必要があったため、簡易な加工が求められた。

そこで、多彩な趣味が生活に溶け込みつつ、そして、生活を彩れるように、飾り棚としてオープンな作りを考えた。
また、飾り棚と作業スペースを一つの家具にまとめ、鑑賞・収納・作業の3つの機能をシームレスにつなぐことで、より生活に寄り添える家具を目指した。

構成としては、ラワンの角材を井桁状に組んだ脚に、ラワン合板の棚板とした。
天板には、黒皮鉄板を敷き、ペーパーコードで巻いて固定した。

作業スペースは、飾り棚の天板以上に構造的耐力が求められる。
30mmの補強材を入れつつ、ラワン合板の棚板と鉄板をペーパーコードで締め上げて一体としたことで、たわみを抑えた。

鉄板は、寸法上一枚で発注できなかったため3枚に分割しているが、
継いだ箇所にペーパーコードを巻くことで、継ぎ目が見えないようにしている。

椅子は、制作した棚と構成が近く、親和性の高いペーパーコードをあしらった製品を選定した。

黒く艶のある硬い鉄板が飾り棚としてシャープな印象も持たせている。
一方、リズミカルに配したペーパーコードは、マットで手触りの柔らかさから、マグをおいたり、携帯を置いたりと作業スペースの拠り所となることを期待した。

鉄とペーパーコード、そして、木組の棚は質素で温かみのある仕上がりとなった。

複数の機能と手触りをシームレスに繋げたたことで、夫婦の暮らしの多様なシーンに寄り添えただろう。`,
    textEnglish: `This is a shelf designed for a couple with hobbies in music and photography. They needed storage for CDs and guitar effects pedals, cameras and lenses, as well as a workspace for a desktop PC. Due to budget constraints, DIY production was necessary, requiring simple processing techniques.

To integrate their diverse hobbies into daily life while adding a touch of decoration, I designed an open display shelf. Additionally, by combining the display shelf and workspace into one piece of furniture, I aimed to seamlessly connect the three functions of display, storage, and work to create a piece that better complements their lifestyle.

The structure consists of ramin timber arranged in a lattice pattern for the legs, with ramin plywood shelves. The top surface features blackened steel plates, secured and wrapped with paper cord.

The workspace requires more structural strength than the display shelf. By adding 30mm reinforcement and securing the ramin plywood shelves and steel plates with paper cord, I minimized deflection.

The steel plates had to be ordered in three sections due to size constraints, but I wrapped paper cord around the joints to hide the seams.

For the chair, I selected a product with a similar structure and high compatibility, featuring paper cord.

The black, glossy, hard steel plates give the display shelf a sharp impression, while the rhythmically arranged paper cord offers a matte, soft texture, making the workspace suitable for placing mugs or phones.

The combination of steel, paper cord, and wooden shelves results in a simple yet warm finish.

By seamlessly connecting multiple functions and textures, this piece of furniture is designed to adapt to various scenes in the couple's life.`,
  },
  {
    title: "Tightened object",
    id: "0027",
    category: SORT_ITEM_NAME.IDPD,
    urls: ["/images/works/item_8.webp"],
    createDate: "2024.10.11",
    text: `音楽と写真を趣味に持つ夫婦のために、デザインした棚である。
CDとギターのエフェクター、カメラとレンズの収納に加え、デスクトップPCの作業スペースが求められた。
また、予算の都合上、自主制作を行う必要があったため、簡易な加工が求められた。

そこで、多彩な趣味が生活に溶け込みつつ、そして、生活を彩れるように、飾り棚としてオープンな作りを考えた。
また、飾り棚と作業スペースを一つの家具にまとめ、鑑賞・収納・作業の3つの機能をシームレスにつなぐことで、より生活に寄り添える家具を目指した。

構成としては、ラワンの角材を井桁状に組んだ脚に、ラワン合板の棚板とした。
天板には、黒皮鉄板を敷き、ペーパーコードで巻いて固定した。

作業スペースは、飾り棚の天板以上に構造的耐力が求められる。
30mmの補強材を入れつつ、ラワン合板の棚板と鉄板をペーパーコードで締め上げて一体としたことで、たわみを抑えた。

鉄板は、寸法上一枚で発注できなかったため3枚に分割しているが、
継いだ箇所にペーパーコードを巻くことで、継ぎ目が見えないようにしている。

椅子は、制作した棚と構成が近く、親和性の高いペーパーコードをあしらった製品を選定した。

黒く艶のある硬い鉄板が飾り棚としてシャープな印象も持たせている。
一方、リズミカルに配したペーパーコードは、マットで手触りの柔らかさから、マグをおいたり、携帯を置いたりと作業スペースの拠り所となることを期待した。

鉄とペーパーコード、そして、木組の棚は質素で温かみのある仕上がりとなった。

複数の機能と手触りをシームレスに繋げたたことで、夫婦の暮らしの多様なシーンに寄り添えただろう。`,
    textEnglish: `This is a shelf designed for a couple with hobbies in music and photography. They needed storage for CDs and guitar effects pedals, cameras and lenses, as well as a workspace for a desktop PC. Due to budget constraints, DIY production was necessary, requiring simple processing techniques.

To integrate their diverse hobbies into daily life while adding a touch of decoration, I designed an open display shelf. Additionally, by combining the display shelf and workspace into one piece of furniture, I aimed to seamlessly connect the three functions of display, storage, and work to create a piece that better complements their lifestyle.

The structure consists of ramin timber arranged in a lattice pattern for the legs, with ramin plywood shelves. The top surface features blackened steel plates, secured and wrapped with paper cord.

The workspace requires more structural strength than the display shelf. By adding 30mm reinforcement and securing the ramin plywood shelves and steel plates with paper cord, I minimized deflection.

The steel plates had to be ordered in three sections due to size constraints, but I wrapped paper cord around the joints to hide the seams.

For the chair, I selected a product with a similar structure and high compatibility, featuring paper cord.

The black, glossy, hard steel plates give the display shelf a sharp impression, while the rhythmically arranged paper cord offers a matte, soft texture, making the workspace suitable for placing mugs or phones.

The combination of steel, paper cord, and wooden shelves results in a simple yet warm finish.

By seamlessly connecting multiple functions and textures, this piece of furniture is designed to adapt to various scenes in the couple's life.`,
  },
];

export { worksItems, SORT_ITEM_NAME };
