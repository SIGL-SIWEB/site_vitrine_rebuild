'use client';

import { PageIntro } from '@/app/components/PageIntro'
import { ProjectDisplay } from '@/app/project/ProjectDisplay'
import { projects } from '@/app/project/ProjectList'
import { useTranslation } from 'react-i18next'

export default function Project() {
  const { t } = useTranslation('fr', { useSuspense: false });

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

      <ProjectDisplay projects={projects} />
    </>
  )
}
