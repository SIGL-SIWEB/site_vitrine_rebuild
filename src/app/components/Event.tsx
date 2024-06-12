'use client'

import clsx from 'clsx'

import { Container } from '@/app/components/Container'
import Image from 'next/image'
import { FadeIn } from '@/app/components/FadeIn'
import { GridPattern } from '@/app/components/GridPattern'
import { SectionIntro } from '@/app/components/SectionIntro'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "@/app/styles/event.css"

import classe2023 from '@/app/assets/events/classe2023.jpg'
import bbq from '@/app/assets/events/bbq.png'
import laser from '@/app/assets/events/laser.png'
import disintegration from '@/app/assets/events/disintegration.jpg'

import { useTranslation } from 'react-i18next'

export function Event() {
  const { t } = useTranslation('fr', { useSuspense: false });

  const images = [
    {
      id: 1,
      titre: t('home.events.event1.title'),
      text: t('home.events.event1.description'),
      imgPath: classe2023,
    },
    {
      id: 2,
      titre: t('home.events.event2.title'),
      text: t('home.events.event2.description'),
      imgPath: bbq,
    },
    {
      id: 4,
      titre: t('home.events.event3.title'),
      text: t('home.events.event3.description'),
      imgPath: laser,
    },
    {
      id: 5,
      titre: t('home.events.event4.title'),
      text: t('home.events.event4.description'),
      imgPath: disintegration,
    },
  ];

  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 mt-24 sm:mt-32 lg:mt-40',
      )}
    >
      <SectionIntro
          title={t('home.events.title')}
          className="mt-24 sm:mt-32 lg:mt-40 mb-10"
        >
      </SectionIntro>
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-[#315888] stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <div className="flex items-center justify-center max-w-5xl">
              <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showThumbs={false}>
                {images.map((image) => (
                  <div key={image.id}>
                    <Image src={image.imgPath} alt=""/>
                    <div className="overlay">
                      <h2 className='overlay-title'>{image.titre}</h2>
                      <p>{image.text}</p>
                    </div>
                  </div>
                ))}
              </Carousel>        
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
