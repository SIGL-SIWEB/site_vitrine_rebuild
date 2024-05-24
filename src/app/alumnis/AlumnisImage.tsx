import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import Image, { StaticImageData } from 'next/image'

export function AlumnisImage({
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
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <Image src={image} alt="" className="w-1800 h-auto" />
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <FadeIn>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#38598F] sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </FadeIn>
          </div>
        </div>
      </Container>
    )
}