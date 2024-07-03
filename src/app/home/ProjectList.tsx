'use client';

import { Container } from '@/app/components/Container'
import { SectionIntro } from '@/app/components/SectionIntro'
import { FadeIn } from '@/app/components/FadeIn'
import { StylizedImage } from '@/app/components/StylizedImage'
import { List, ListItem } from '@/app/components/List'
import { Button } from '@/app/components/Button'
import imageLaptop from '@/app/assets/shutterstock/laptop.jpg'
import { useTranslation } from 'react-i18next'

export function ProjectList() {
    const { t } = useTranslation();
    return (
        <>
        <div id="projects">
            <SectionIntro
            title={t('home.projects.title')}
            className="mt-24 sm:mt-32 lg:mt-40"
            >
            </SectionIntro>
            <Container className="mt-16">
            <div className="lg:flex lg:items-center lg:justify-end">
                <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                    <StylizedImage
                    src={imageLaptop}
                    sizes="(min-width: 1024px) 41rem, 31rem"
                    className="justify-center lg:justify-end"
                    />
                </FadeIn>
                </div>
                <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title={t('home.projects.project1.title')}>
                    {t('home.projects.project1.description')}
                </ListItem>
                <ListItem title={t('home.projects.project2.title')}>
                {t('home.projects.project2.description')}
                </ListItem>
                <ListItem title={t('home.projects.project3.title')}>
                {t('home.projects.project3.description')}
                </ListItem>
                <ListItem title={t('home.projects.project4.title')}>
                {t('home.projects.project4.description')}
                </ListItem>
                <ListItem>
                    <Button href="/project" invert>
                    {t('home.projects.button')}
                    </Button>
                </ListItem>
                </List>
            </div>
            </Container>
        </div>
        </>
    )
}