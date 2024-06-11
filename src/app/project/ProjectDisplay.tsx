'use client';

import { useEffect, useRef } from 'react';
import { Border } from '@/app/components/Border';
import { Container } from '@/app/components/Container';
import { FadeIn } from '@/app/components/FadeIn';
import Image, { StaticImageData } from 'next/image';
import { useTranslation } from 'react-i18next';

export function ProjectDisplay({
  projects,
}: {
  projects: {
    course: string;
    href: string;
    logo: StaticImageData;
    title: string;
    summary: string[];
  }[];
}) {
  const { t } = useTranslation('fr', { useSuspense: false });
  const refs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && refs.current[hash]) {
      const element = refs.current[hash];
      setTimeout(() => {
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 0);
    }
  }, []);

  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          {t('project.subtitle')}
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20">
        {projects.map((project) => (
          <FadeIn key={project.course}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={project.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {project.course}
                    </h3>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p
                    id={project.course}
                    ref={(el) => {
                      refs.current[project.course] = el;
                    }}
                    className="font-display text-4xl font-medium text-darkblue"
                  >
                    {project.title}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {project.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex"></div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
