import { PageIntro } from '@/app/components/PageIntro'
import { CourseList } from '@/app/courses/Courses'

export default async function Courses() {
  return (
    <>
      <PageIntro eyebrow="Courses - SIGL" title="SIGL Modules">
        <span>
          Explore the comprehensive list of modules and courses offered in SIGL. Organized into four main categories, this catalog covers a wide range of essential skills to train the engineers of tomorrow
        </span>
      </PageIntro>
      <CourseList />
    </>
  )
}
