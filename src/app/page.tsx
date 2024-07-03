'use client';

import { Container } from "@/app/components/Container"
import { FadeIn } from "@/app/components/FadeIn"
import { ModuleList } from "@/app/home/ModuleList"
import { Quote } from "@/app/components/Quote"
import { ProjectList } from "@/app/home/ProjectList"
import { Event } from "@/app/components/Event"
import { Opportunities } from "@/app/home/Opportunities"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-darkblue [text-wrap:balance] sm:text-7xl">
            {t('home.title')}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            {t('home.description')}
          </p>
        </FadeIn>
      </Container>

      <ModuleList />

      <Quote />

      <ProjectList />

      <Opportunities />
      
      <Event />

    </>
  )
}