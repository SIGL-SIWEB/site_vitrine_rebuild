import { PageIntro } from '@/app/components/PageIntro'
import { ProjectDisplay } from '@/app/project/ProjectDisplay'
import { projects } from '@/app/project/ProjectList'

export default async function Project() {

  return (
    <>
      <PageIntro
        eyebrow="Projects - SIGL"
        title="Innovative Solutions for Practical Challenges."
      >
        <p>
        Explore our array of projects designed to address real-world challenges and push the boundaries of technological innovation.
        From cloud architecture to IoT implementation, we strive to deliver impactful solutions that drive efficiency and value.
        </p>
      </PageIntro>

      <ProjectDisplay projects={projects} />
    </>
  )
}
