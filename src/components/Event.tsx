'use client'

import clsx from 'clsx'

import { Container } from './Container'
import Image from 'next/image'
import { FadeIn } from './FadeIn'
import { GridPattern } from './GridPattern'
import { SectionIntro } from './SectionIntro'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../styles/event.css"

import classe2023 from '../assets/events/classe2023.jpg'
import bbq from '../assets/events/bbq.jpg'
import afterwork from '../assets/events/afterwork.jpg'
import laser from '../assets/events/laser.jpg'
import disintegration from '../assets/events/disintegration.jpg'

const images = [
  {
    id: 1,
    titre: 'SIGL\'s 2023 End of year picture',
    text: '',
    imgPath: classe2023,
  },
  {
    id: 2,
    titre: 'Barbecue SIGL',
    text: 'Maintain and renew the link with former students, and allow future engineers to exchange with those who preceded them: it is with this in mind that the SIGL BBQ is organized each year, bringing together teachers,\nformer students and future graduates',
    imgPath: bbq,
  },
  {
    id: 3,
    titre: 'Afterwork SIGL',
    text: 'To establish a culture of team cohesion and in order to boost up the dialogue between teams, moments of exchange and relaxation bringing together teachers and students are organised',
    imgPath: afterwork,
  },
  {
    id: 4,
    titre: 'Laser Game',
    text: 'Class representatives are taking the initiative to regulary organize some ecents within the major (cinema, laser game, etc.) in order to give students the opportunity to connect with each others beyond the professional environment',
    imgPath: laser,
  },
  {
    id: 5,
    titre: 'SIGL\'s Disintegration',
    text: 'In order to celebrate together the end of studies and the success of their year, a disintegration event is organized by the students at the end of their courses. Lastest destination is: Lisbon!',
    imgPath: disintegration,
  },
];

export function Event() {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 mt-24 sm:mt-32 lg:mt-40',
      )}
    >
      <SectionIntro
          title="Our events"
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