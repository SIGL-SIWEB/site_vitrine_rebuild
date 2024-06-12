'use client';

import { Container } from '@/app/components/Container'
import { SectionIntro } from '@/app/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/app/components/FadeIn'
import { useTranslation } from 'react-i18next'

export function ModuleList() {
  const { t } = useTranslation('fr', { useSuspense: false });
  return (
    <>
      <div id="modules">
        <SectionIntro
          title={t('home.modules.title')}
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
          {t('home.modules.description')}
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>{t('home.modules.leadership.title')}</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                    {t('home.modules.leadership.description')}
                  </p>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>{t('home.modules.cloud.title')}</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                  {t('home.modules.cloud.description')}
                  </p>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>{t('home.modules.mobility.title')}</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                    {t('home.modules.mobility.description')}
                  </p>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-darkblue'>{t('home.modules.digitalization.title')}</strong>
                  </h3>

                  <p className="mt-4 text-base text-neutral-600">
                    {t('home.modules.digitalization.description')}
                  </p>
                </article>
              </FadeIn>

          </FadeInStagger>
          <div className="ratio ratio-16x9 mt-16 flex justify-center">
            <iframe height="600px" width="1067px" src="https://www.youtube.com/embed/F6WOmx52qBY?showinfo=0&controls=0&rel=0" title="YouTube video" allowFullScreen></iframe>
          </div>
        </Container>
      </div>
    </>
  )
}
