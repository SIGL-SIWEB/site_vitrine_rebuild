'use client'
import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import { TwitterFollowButton } from 'react-twitter-embed'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-[#1E3C63] px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl grid gap-4 grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Contact us
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Ask questions
              </Button>
            </div>
          </div>
          <div className="selfCenter spaceBetween">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl mb-6">
              Follow us on Twitter
            </h2>
            <TwitterFollowButton
              onLoad={function noRefCheck(){}}
              options={{
                size: 'large'
              }}
              screenName="SIGL_EPITA"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
