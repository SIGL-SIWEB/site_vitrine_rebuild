import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import { ModuleList } from '@/app/courses/ModuleList';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
  
export function CourseList() {
  const { t } = useTranslation('fr', { useSuspense: false });
    return (
      <div>
        <Container className="mt-40">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              {t('courses.subtitle')}
            </h2>
          </FadeIn>
          <ModuleList />
      </Container>
    </div>
  )
}