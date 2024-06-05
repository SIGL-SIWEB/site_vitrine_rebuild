import { Container } from '@/app/components/Container'
import { SectionIntro } from '@/app/components/SectionIntro'
import { FadeIn } from '@/app/components/FadeIn'
import { StylizedImage } from '@/app/components/StylizedImage'
import { List, ListItem } from '@/app/components/List'
import { Button } from '@/app/components/Button'
import imageLaptop from '@/app/assets/shutterstock/laptop.jpg'

export function ProjectList() {
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
                Creation of an hybrid cloud using Openstack technologies as well as PaaS ProjectList such as AWS or Microsoft Azure
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
                    <Button href="/project" invert>
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