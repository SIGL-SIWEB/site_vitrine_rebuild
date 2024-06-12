'use client';

import { Container } from '@/app/components/Container'
import { SectionIntro } from '@/app/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/app/components/FadeIn'
import { useTranslation } from 'react-i18next'

export function Opportunities() {
  const { t } = useTranslation('fr', { useSuspense: false });
  return (
    <>
      <SectionIntro
        title={t('home.opportunities.title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
         {t('home.opportunities.description')}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>{t('home.opportunities.technical.title')}</strong>
                </h3>

                <div className="mt-4 text-base text-neutral-600">
                    <li>{t('home.opportunities.technical.job1')}</li>
                    <li>{t('home.opportunities.technical.job2')}</li>
                    <li>{t('home.opportunities.technical.job3')}</li>
                    <li>{t('home.opportunities.technical.job4')}</li>
                    <li>{t('home.opportunities.technical.job5')}</li>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>{t('home.opportunities.commercial.title')}</strong>
                </h3>

                <div className="mt-4 text-base text-neutral-600">
                    <li>{t('home.opportunities.commercial.job1')}</li>
                    <li>{t('home.opportunities.commercial.job2')}</li>
                    <li>{t('home.opportunities.commercial.job3')}</li>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>{t('home.opportunities.organizational.title')}</strong>
                </h3>
                <div className="mt-4 text-base text-neutral-600">
                    <li>{t('home.opportunities.organizational.job1')}</li>
                    <li>{t('home.opportunities.organizational.job2')}</li>
                    <li>{t('home.opportunities.organizational.job3')}</li>
                    <li>{t('home.opportunities.organizational.job4')}</li>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                <strong className='text-darkblue'>{t('home.opportunities.multidisciplinary.title')}</strong>
                </h3>

                <div className="mt-4 text-base text-neutral-600">
                    <li>{t('home.opportunities.multidisciplinary.job1')}</li>
                    <li>{t('home.opportunities.multidisciplinary.job2')}</li>
                    <li>{t('home.opportunities.multidisciplinary.job3')}</li>
                    <li>{t('home.opportunities.multidisciplinary.job4')}</li>
                </div>
              </article>
            </FadeIn>

        </FadeInStagger>
      </Container>
    </>
  )
}