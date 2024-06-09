'use client';

import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import { GridPattern } from '@/app/components/GridPattern'
import { alumnis } from '@/app/home/Quote'
import { slider } from '@/app/components/Slider'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/styles/quote.css'

export function Quote() {
  return (
    <div className='relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40'>
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-[#315888] stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
            <Slider { ...slider }>
                {alumnis.map((alumni, index) => (
                    <div key={index}>
                        <figure className="mx-auto max-w-4xl">
                            <blockquote className="relative font-display text-lg font-medium tracking-tight text-neutral-950">
                                <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                                    {alumni.quote}
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 text-darkblue">
                                <strong> {alumni.name} - SIGL {alumni.promotion}</strong>
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </Slider>
        </FadeIn>
      </Container>
    </div>
  );
}