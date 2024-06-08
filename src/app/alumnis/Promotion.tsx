import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import Image, { StaticImageData } from 'next/image'

export function Promotion({
    title,
    image,
    children,
  }: {
    title: string
    image: StaticImageData
    children: React.ReactNode
  }) {
    return (
      <Container className="group/section">
      <div className="lg:flex md:flex sm:flex lg:items-center md:items-center sm:items-center lg:justify-between md:justify-between sm:justify-between xl:gap-x-20 lg:gap-x-14 md:gap-x-8 sm:gap-x-6">
        <div className="flex items-center justify-center lg:max-w-2xl md:max-w-md sm:max-w-sm">
          <FadeIn>
            <Image src={image} alt="photo de promo"/>
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:flex-1 lg:group-even/section:order-first md:group-even/section:order-first sm:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#38598F] sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">
              {children}
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>

    )
}