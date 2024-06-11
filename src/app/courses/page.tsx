'use client';

import { PageIntro } from '@/app/components/PageIntro'
import { CourseList } from '@/app/courses/Courses'
import { useTranslation  } from 'react-i18next';

export default function Courses() {
  const { t } = useTranslation('fr', { useSuspense: false });
  return (
    <>
      <PageIntro eyebrow={t('courses.header')} title={t('courses.title')}>
        <span>
        {t('courses.description')}
        </span>
      </PageIntro>
      <CourseList />
    </>
  )
}
