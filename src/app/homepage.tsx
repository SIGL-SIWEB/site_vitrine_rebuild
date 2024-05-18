import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { List, ListItem } from '../components/List'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import { Testimonial } from '../components/Testimonial'
import imageLaptop from '../../assets/shutterstock/laptop.jpg'
import { Button } from '../components/Button'
import { Event } from '../components/Event'

export function CaseStudies({
  caseStudies,
}: {
  caseStudies: number
}) {
  if (caseStudies === 2) {
    return (
      <>
        <SectionIntro
          title="Opportunities"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
          Opportunities description
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-[#38598F]'>Technical</strong>
                  </h3>

                  <div className="mt-4 text-base text-neutral-600">
                      <li>Developper</li>
                      <li>Specialized Expert</li>
                      <li>Technical Consultant</li>
                      <li>System Engineer</li>
                      <li>Searcher</li>
                  </div>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-[#38598F]'>Commercial</strong>
                  </h3>

                  <div className="mt-4 text-base text-neutral-600">
                      <li>Business Engineer</li>
                      <li>Accountant Manager</li>
                      <li>Pre-Sales Manager</li>
                  </div>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-[#38598F]'>Organizational</strong>
                  </h3>

                  <div className="mt-4 text-base text-neutral-600">
                      <li>Managing Director</li>
                      <li>Production Director</li>
                      <li>Organizational Consultant</li>
                      <li>IT Strategy Consultant</li>
                  </div>
                </article>
              </FadeIn>

              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                  <strong className='text-[#38598F]'>Multidisciplinary</strong>
                  </h3>

                  <div className="mt-4 text-base text-neutral-600">
                      <li>Project Leader</li>
                      <li>QA Engineer</li>
                      <li>Assistance to Mastery of Work</li>
                      <li>Business Developper</li>
                  </div>
                </article>
              </FadeIn>

          </FadeInStagger>
        </Container>
      </>
    )

  } else {

    return (
      <>
        <div id="modules">
          <SectionIntro
            title="Modules SIGL"
            className="mt-24 sm:mt-32 lg:mt-40"
          >
            <p>
            In order to better prepare our students for the business community, SIGL specialty is focused on 4 major topics, every one of which bringing a part of the skills and culture required in order to build tomorrow's technologies.
            </p>
          </SectionIntro>
          <Container className="mt-16">
            <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                <FadeIn className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                    <strong className='text-[#38598F]'>Leadership and Management</strong>
                    </h3>

                    <p className="mt-4 text-base text-neutral-600">
                    Handling the new business models in order to answer the IT governance's new challenges and train tomorrow's managers
                    </p>
                  </article>
                </FadeIn>

                <FadeIn className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                    <strong className='text-[#38598F]'>Cloud and Architecture</strong>
                    </h3>

                    <p className="mt-4 text-base text-neutral-600">
                    Understanding the building and functioning process of Information Systems as well as its technical architecture. Discovering Cloud technologies and Big Data
                    </p>
                  </article>
                </FadeIn>

                <FadeIn className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                    <strong className='text-[#38598F]'>Mobility and Applications</strong>
                    </h3>

                    <p className="mt-4 text-base text-neutral-600">
                    Discover and grasp the new software challenges in order to integrate it in growing mobility requirements
                    </p>
                  </article>
                </FadeIn>

                <FadeIn className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                    <strong className='text-[#38598F]'>Digitalization and Transformation</strong>
                    </h3>

                    <p className="mt-4 text-base text-neutral-600">
                    Understanding and make Digital Transformation viable for companies as well as discovering the new innovation levers provided by the growing sector of IT business
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
}

export function Services() {
  return (
    <>
      <div id="projects">
        <SectionIntro
          title="Our projects"
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
              <ListItem title="Cloud Architecture">
              Creation of an hybrid cloud using Openstack technologies as well as PaaS Services such as AWS or Microsoft Azure
              </ListItem>
              <ListItem title="IoT">
              Creation of an IoT Object and build marketing & business processes (Business Case, Advertising) as well as the realization
              </ListItem>
              <ListItem title="Practice & Experiment">
              Group Project in partnership with several companies : Professional Relationships of EPITA, Capgemini, Deloitte Digital, SIGL, Cristal, Virtual Sports Traiding, GN
              </ListItem>
              <ListItem title="IS Urbanization">
              Creation of a reduced Information System simulating a Retail company's behavior
              </ListItem>
              <ListItem>
                <Button href="/work" invert>
                  See more projects
                </Button>
              </ListItem>
            </List>
          </div>
        </Container>
      </div>
    </>
  )
}