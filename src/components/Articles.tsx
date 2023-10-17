import Image from 'next/image'

type ArticleList = {
  src: string,
  name: string,
  alt: string,
  header: string,
  desc: string,
}

const articlelists: Array<ArticleList> = [{
  src: './images/image-currency.jpg',
  alt: 'picture currency',
  name: 'By Claire Robinson',
  header: 'Receive money in any currency with no fees',
  desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
}, {
  src: './images/image-restaurant.jpg',
  alt: 'picture restaurant',
  name: 'By Wilson Hutton',
  header: 'Treat yourself without worrying about money',
  desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
}, {
  src: './images/image-plane.jpg',
  alt: 'picture plane',
  name: 'By Wilson Hutton',
  header: 'Take your Easybank card wherever you go',
  desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
}, {
  src: './images/image-confetti.jpg',
  alt: 'picture confetti',
  name: 'By Claire Robinson',
  header: 'Our invite-only Beta accounts are now live!',
  desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
}]

const Articles = () => (
  <section className="  bg-neutral-three px-5 py-14 text-center md:px-5percen md:text-left lg:px-10percen">

    <h1 className="pb-10 text-4xl md:text-xl lg:text-4xl">Latest Articles</h1>
    <div className="flex flex-col gap-10 md:flex-row md:gap-2 lg:gap-10">
      {articlelists.map(({ src, alt, name, header, desc }) => (
        <div key={src} className=" rounded-lg bg-white pb-5">
          <div>
            <Image className="h-[183px] w-[275px] rounded-t-lg object-cover md:h-[108px] md:w-[163px] lg:h-[166px] lg:w-[252px]" width={533} height={400} priority src={src} alt={alt} />
          </div>
          <div className="p-5 md:px-2 lg:px-5">
            <p className="pb-2 text-left text-xs text-neutral-one">{name}</p>
            <h1 className="pb-3 text-left hover:cursor-pointer hover:text-neutral-one">{header}</h1>
            <p className="text-left text-sm text-neutral-one">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Articles
