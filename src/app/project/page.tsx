'use client';

import { PageIntro } from '@/app/components/PageIntro'
import { ProjectDisplay } from '@/app/project/ProjectDisplay'
import { useTranslation } from 'react-i18next'

export default function Project() {
  const { t } = useTranslation();

  return (
    <>
      <PageIntro
        eyebrow={t('project.header')}
        title={t('project.title')}
      >
        <p>
        {t('project.description')}
        </p>
      </PageIntro>

      <ProjectDisplay />
    </>
  )
}
