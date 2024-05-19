import { Container } from '@/app/components/Container'
import { SectionIntro } from '@/app/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/app/components/FadeIn'

export function Opportunities() {
  return (
    <>
      <SectionIntro
        title="Opportunities"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Opportunities description
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>Technical</strong>
                </h3>

                <div className="mt-4 text-base text-neutral-600">
                    <li>Developper</li>
                    <li>Specialized Expert</li>
                    <li>Technical Consultant</li>
                    <li>System Engineer</li>
                    <li>Searcher</li>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>Commercial</strong>
                </h3>

                <div className="mt-4 text-base text-neutral-600">
                    <li>Business Engineer</li>
                    <li>Accountant Manager</li>
                    <li>Pre-Sales Manager</li>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>Organizational</strong>
                </h3>
                <div className="mt-4 text-base text-neutral-600">
                    <li>Managing Director</li>
                    <li>Production Director</li>
                    <li>Organizational Consultant</li>
                    <li>IT Strategy Consultant</li>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>Multidisciplinary</strong>
                </h3>

                <div className="mt-4 text-base text-neutral-600">
                    <li>Project Leader</li>
                    <li>QA Engineer</li>
                    <li>Assistance to Mastery of Work</li>
                    <li>Business Developper</li>
                </div>
              </article>
            </FadeIn>

        </FadeInStagger>
      </Container>
    </>
  )
}