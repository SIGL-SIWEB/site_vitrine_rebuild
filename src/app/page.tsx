import { Container } from "@/app/components/Container"
import { FadeIn } from "@/app/components/FadeIn"
import { ModuleList } from "@/app/home/ModuleList"
import { Quote } from "@/app/components/Quote"
import { ProjectList } from "@/app/home/ProjectList"
import { Event } from "@/app/components/Event"
import { Opportunities } from "@/app/home/Opportunities"

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-darkblue [text-wrap:balance] sm:text-7xl">
            Information Systems & Software Engineering
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Nowadays, companies have to develop Information Systems and complex softwares which core features are their ability to evolve, their reliability as well as their performance. Companies requirements are evolving even faster with the apparition of new market actors and disruptive business models backed up by the promise of new technologies, even more connected and cheaper than ever. There is a need for faster technologies in order to transform existing systems and create the new business ProjectList for both today and tomorrow : Online Presence, Interconnection with all Information Systems, new real-time ProjectList, better understanding of client needs.
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