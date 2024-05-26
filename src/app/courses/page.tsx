import { PageIntro } from '@/app/components/PageIntro'
import { CourseList } from '@/app/courses/Courses'

export default async function Courses() {
  return (
    <>
      <PageIntro eyebrow="Courses - SIGL" title="Courses' title">
        <span>
          Courses' description
        </span>
      </PageIntro>
      <CourseList />
    </>
  )
}
