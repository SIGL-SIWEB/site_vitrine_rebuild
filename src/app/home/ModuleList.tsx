import { Container } from '@/app/components/Container'
import { SectionIntro } from '@/app/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/app/components/FadeIn'

export function ModuleList() {
  return (
    <>
      <div id="modules">
        <SectionIntro
          title="Modules SIGL"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
          In order to better prepare our students for the business community, SIGL specialty is focused on 4 major topics, every one of which bringing a part of the skills and culture required in order to build tomorrow's technologies.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>Leadership and Management</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                  Handling the new business models in order to answer the IT governance's new challenges and train tomorrow's managers
                  </p>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>Cloud and Architecture</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                  Understanding the building and functioning process of Information Systems as well as its technical architecture. Discovering Cloud technologies and Big Data
                  </p>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>Mobility and Applications</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                  Discover and grasp the new software challenges in order to integrate it in growing mobility requirements
                  </p>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>Digitalization and Transformation</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                  Understanding and make Digital Transformation viable for companies as well as discovering the new innovation levers provided by the growing sector of IT business
                  </p>
                </article>
              </FadeIn>

          </FadeInStagger>
          <div className="ratio ratio-16x9 mt-16 flex justify-center">
            {/* <iframe height="600px" width="1067px" src="https://www.youtube.com/embed/F6WOmx52qBY?showinfo=0&controls=0&rel=0" title="YouTube video" allowFullScreen></iframe> */}
          </div>
        </Container>
      </div>
    </>
  )
}