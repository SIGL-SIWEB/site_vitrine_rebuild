import { Button } from '@/app/components/Button';
import { Border } from '@/app/components/Border'
import { FadeIn } from '@/app/components/FadeIn'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from "react-i18next";

export function ModuleList() {
  const { t } = useTranslation();

  const moduleList = [
    {
      title: t('courses.leadership.title'),
      courses: [
        {
          name: t('courses.leadership.courses.course1.title'),
          teacher: [{
            name: t('courses.leadership.courses.course1.teachers.teacher1.name'),
            role: t('courses.leadership.courses.course1.teachers.teacher1.role'),
          
          },],
          obj : t('courses.leadership.courses.course1.objectives.title'),
          objectives: [t('courses.leadership.courses.course1.objectives.objective1'), t('courses.leadership.courses.course1.objectives.objective2')],
        },
        {
          name: t('courses.leadership.courses.course2.title'),
          teacher: [{
              name: t('courses.leadership.courses.course2.teachers.teacher1.name'),
              role: t('courses.leadership.courses.course2.teachers.teacher1.role'),
          }],
          obj: t('courses.leadership.courses.course2.objectives.title'),
          objectives: [
              t('courses.leadership.courses.course2.objectives.objective1'),
              t('courses.leadership.courses.course2.objectives.objective2'),
              t('courses.leadership.courses.course2.objectives.objective3'),
          ],
        },
        {
          name: t('courses.leadership.courses.course3.title'),
          teacher: [{
              name: t('courses.leadership.courses.course3.teachers.teacher1.name'),
              role: t('courses.leadership.courses.course3.teachers.teacher1.role'),
          }],
          obj: t('courses.leadership.courses.course3.objectives.title'),
          objectives: [
              t('courses.leadership.courses.course3.objectives.objective1'),
              t('courses.leadership.courses.course3.objectives.objective2'),
              t('courses.leadership.courses.course3.objectives.objective3'),
              t('courses.leadership.courses.course3.objectives.objective4'),
          ],
        },
        {
          name: t('courses.leadership.courses.course4.title'),
          teacher: [{
            name: t('courses.leadership.courses.course4.teachers.teacher1.name'),
            role: t('courses.leadership.courses.course4.teachers.teacher1.role'),
          }],
          obj: t('courses.leadership.courses.course4.objectives.title'),
          objectives: [
            t('courses.leadership.courses.course4.objectives.objective1'),
            t('courses.leadership.courses.course4.objectives.objective2'),
            t('courses.leadership.courses.course4.objectives.objective3'),
          ],
        },
        {
          name: t('courses.leadership.courses.course5.title'),
          teacher: [{
            name: t('courses.leadership.courses.course5.teachers.teacher1.name'),
            role: t('courses.leadership.courses.course5.teachers.teacher1.role'),
          }],
          obj: t('courses.leadership.courses.course5.objectives.title'),
          objectives: [
            t('courses.leadership.courses.course5.objectives.objective1'),
            t('courses.leadership.courses.course5.objectives.objective2'),
            t('courses.leadership.courses.course5.objectives.objective3'),
            t('courses.leadership.courses.course5.objectives.objective4'),
            t('courses.leadership.courses.course5.objectives.objective5'),
          ],
        },
      ],
    },
    {
      title: t('courses.cloud.title'),
      courses: [
        {
          name: t('courses.cloud.courses.course1.title'),
          teacher: [{
            name: t('courses.cloud.courses.course1.teachers.teacher1.name'),
            role: t('courses.cloud.courses.course1.teachers.teacher1.role'),
          }],
          obj: t('courses.cloud.courses.course1.objectives.title'),
          objectives: [
            t('courses.cloud.courses.course1.objectives.objective1'),
            t('courses.cloud.courses.course1.objectives.objective2'),
            t('courses.cloud.courses.course1.objectives.objective3'),
          ],
          project: '/project#ARCL',
          button: t('courses.cloud.courses.course1.project'),
        },
        {
          name: t('courses.cloud.courses.course2.title'),
          teacher: [{
            name: t('courses.cloud.courses.course2.teachers.teacher1.name'),
            role: t('courses.cloud.courses.course2.teachers.teacher1.role'),
          }, {
            name: t('courses.cloud.courses.course2.teachers.teacher2.name'),
            role: t('courses.cloud.courses.course2.teachers.teacher2.role'),
          }],
          obj: t('courses.cloud.courses.course2.objectives.title'),
          objectives: [
            t('courses.cloud.courses.course2.objectives.objective1'),
            t('courses.cloud.courses.course2.objectives.objective2'),
            t('courses.cloud.courses.course2.objectives.objective3'),
          ],
        },
        {
          name: t('courses.cloud.courses.course3.title'),
          teacher: [{
            name: t('courses.cloud.courses.course3.teachers.teacher1.name'),
            role: t('courses.cloud.courses.course3.teachers.teacher1.role'),
          }],
          obj: t('courses.cloud.courses.course3.objectives.title'),
          objectives: [
            t('courses.cloud.courses.course3.objectives.objective1'),
            t('courses.cloud.courses.course3.objectives.objective2'),
            t('courses.cloud.courses.course3.objectives.objective3'),
            t('courses.cloud.courses.course3.objectives.objective4'),
          ],
        },
        {
          name: t('courses.cloud.courses.course4.title'),
          teacher: [{
            name: t('courses.cloud.courses.course4.teachers.teacher1.name'),
            role: t('courses.cloud.courses.course4.teachers.teacher1.role'),
          }, {
            name: t('courses.cloud.courses.course4.teachers.teacher2.name'),
            role: t('courses.cloud.courses.course4.teachers.teacher2.role'),
          }],
          obj: t('courses.cloud.courses.course4.objectives.title'),
          objectives: [
            t('courses.cloud.courses.course4.objectives.objective1'),
            t('courses.cloud.courses.course4.objectives.objective2'),
          ],
        },
        {
          name: t('courses.cloud.courses.course5.title'),
          teacher: [{
            name: t('courses.cloud.courses.course5.teachers.teacher1.name'),
            role: t('courses.cloud.courses.course5.teachers.teacher1.role'),
          }],
          obj: t('courses.cloud.courses.course5.objectives.title'),
          objectives: [
            t('courses.cloud.courses.course5.objectives.objective1'),
            t('courses.cloud.courses.course5.objectives.objective2'),
            t('courses.cloud.courses.course5.objectives.objective3'),
            t('courses.cloud.courses.course5.objectives.objective4'),
          ],
          project: '/project#UBSI',
          button: t('courses.cloud.courses.course5.project'),
        },
      ],
    },
  
    {
      title: t('courses.mobility.title'),
      courses: [
        {
          name: t('courses.mobility.courses.course1.title'),
          teacher: [{
            name: t('courses.mobility.courses.course1.teachers.teacher1.name'),
            role: t('courses.mobility.courses.course1.teachers.teacher1.role'),
          }],
          obj: t('courses.mobility.courses.course1.objectives.title'),
          objectives: [
            t('courses.mobility.courses.course1.objectives.objective1'),
            t('courses.mobility.courses.course1.objectives.objective2'),
            t('courses.mobility.courses.course1.objectives.objective3'),
            t('courses.mobility.courses.course1.objectives.objective4'),
          ],
          project: '/project#ACOO',
          button: t('courses.mobility.courses.course1.project'),
        },
        {
          name: t('courses.mobility.courses.course2.title'),
          teacher: [{
            name: t('courses.mobility.courses.course2.teachers.teacher1.name'),
            role: t('courses.mobility.courses.course2.teachers.teacher1.role'),
          }],
          obj: t('courses.mobility.courses.course2.objectives.title'),
          objectives: [
            t('courses.mobility.courses.course2.objectives.objective1'),
            t('courses.mobility.courses.course2.objectives.objective2'),
          ],
        },
        {
          name: t('courses.mobility.courses.course3.title'),
          teacher: [{
            name: t('courses.mobility.courses.course3.teachers.teacher1.name'),
            role: t('courses.mobility.courses.course3.teachers.teacher1.role'),
          }],
          obj: t('courses.mobility.courses.course3.objectives.title'),
          objectives: [
            t('courses.mobility.courses.course3.objectives.objective1'),
            t('courses.mobility.courses.course3.objectives.objective2'),
            t('courses.mobility.courses.course3.objectives.objective3'),
          ],
        },
        {
          name: t('courses.mobility.courses.course4.title'),
          teacher: [{
            name: t('courses.mobility.courses.course4.teachers.teacher1.name'),
            role: t('courses.mobility.courses.course4.teachers.teacher1.role'),
          }],
          obj: t('courses.mobility.courses.course4.objectives.title'),
          objectives: [
            t('courses.mobility.courses.course4.objectives.objective1'),
            t('courses.mobility.courses.course4.objectives.objective2'),
            t('courses.mobility.courses.course4.objectives.objective3'),
          ],
          project: '/project#MEPA',
          button: t('courses.mobility.courses.course4.project'),
        },
        {
          name: t('courses.mobility.courses.course5.title'),
          teacher: [{
            name: t('courses.mobility.courses.course5.teachers.teacher1.name'),
            role: t('courses.mobility.courses.course5.teachers.teacher1.role'),
          }],
          obj: t('courses.mobility.courses.course5.objectives.title'),
          objectives: [
            t('courses.mobility.courses.course5.objectives.objective1'),
            t('courses.mobility.courses.course5.objectives.objective2'),
            t('courses.mobility.courses.course5.objectives.objective3'),
          ],
        },
        {
          name: t('courses.mobility.courses.course6.title'),
          teacher: [{
            name: t('courses.mobility.courses.course6.teachers.teacher1.name'),
            role: t('courses.mobility.courses.course6.teachers.teacher1.role'),
          }, {
            name: t('courses.mobility.courses.course6.teachers.teacher2.name'),
            role: t('courses.mobility.courses.course6.teachers.teacher2.role'),
          }],
          obj: t('courses.mobility.courses.course6.objectives.title'),
          objectives: [
            t('courses.mobility.courses.course6.objectives.objective1'),
            t('courses.mobility.courses.course6.objectives.objective2'),
            t('courses.mobility.courses.course6.objectives.objective3'),
          ],
          project: '/project#SOCRA',
          button: t('courses.mobility.courses.course6.project'),
        },
      ],
    },
  
    {
      title: t('courses.digitalization.title'),
      courses: [
        {
          name: t('courses.digitalization.courses.course1.title'),
          teacher: [{
            name: t('courses.digitalization.courses.course1.teachers.teacher1.name'),
            role: t('courses.digitalization.courses.course1.teachers.teacher1.role'),
          }],
          obj: t('courses.digitalization.courses.course1.objectives.title'),
          objectives: [
            t('courses.digitalization.courses.course1.objectives.objective1'),
            t('courses.digitalization.courses.course1.objectives.objective2'),
          ],
        },
        {
          name: t('courses.digitalization.courses.course2.title'),
          teacher: [{
            name: t('courses.digitalization.courses.course2.teachers.teacher1.name'),
            role: t('courses.digitalization.courses.course2.teachers.teacher1.role'),
          }],
          obj: t('courses.digitalization.courses.course2.objectives.title'),
          objectives: [
            t('courses.digitalization.courses.course2.objectives.objective1'),
            t('courses.digitalization.courses.course2.objectives.objective2'),
          ],
        },
        {
          name: t('courses.digitalization.courses.course3.title'),
          teacher: [{
            name: t('courses.digitalization.courses.course3.teachers.teacher1.name'),
            role: t('courses.digitalization.courses.course3.teachers.teacher1.role'),
          }],
          obj: t('courses.digitalization.courses.course3.objectives.title'),
          objectives: [
            t('courses.digitalization.courses.course3.objectives.objective1'),
            t('courses.digitalization.courses.course3.objectives.objective2'),
            t('courses.digitalization.courses.course3.objectives.objective3'),
          ],
        },
        {
          name: t('courses.digitalization.courses.course4.title'),
          teacher: [{
            name: t('courses.digitalization.courses.course4.teachers.teacher1.name'),
            role: t('courses.digitalization.courses.course4.teachers.teacher1.role'),
          }, {
            name: t('courses.digitalization.courses.course4.teachers.teacher2.name'),
            role: t('courses.digitalization.courses.course4.teachers.teacher2.role'),
          }],
          obj: t('courses.digitalization.courses.course4.objectives.title'),
          objectives: [
            t('courses.digitalization.courses.course4.objectives.objective1'),
            t('courses.digitalization.courses.course4.objectives.objective2'),
            t('courses.digitalization.courses.course4.objectives.objective3'),
          ],
          project: '/project#PIT',
          button: t('courses.digitalization.courses.course4.project'),
        },
        {
          name: t('courses.digitalization.courses.course5.title'),
          teacher: [{
            name: t('courses.digitalization.courses.course5.teachers.teacher1.name'),
            role: t('courses.digitalization.courses.course5.teachers.teacher1.role'),
          }],
          obj: t('courses.digitalization.courses.course5.objectives.title'),
          objectives: [
            t('courses.digitalization.courses.course5.objectives.objective1'),
            t('courses.digitalization.courses.course5.objectives.objective2'),
            t('courses.digitalization.courses.course5.objectives.objective3'),
          ],
        },
        {
          name: t('courses.digitalization.courses.course6.title'),
          teacher: [{
            name: t('courses.digitalization.courses.course6.teachers.teacher1.name'),
            role: t('courses.digitalization.courses.course6.teachers.teacher1.role'),
          }],
          obj: t('courses.digitalization.courses.course6.objectives.title'),
          objectives: [
            t('courses.digitalization.courses.course6.objectives.objective1'),
            t('courses.digitalization.courses.course6.objectives.objective2'),
            t('courses.digitalization.courses.course6.objectives.objective3'),
          ],
        },
      ],
    },
];

  return (
    <div className="mt-10 space-y-20">
      {moduleList.map((group, index) => (
        <FadeIn key={index}>
          <Border className="grid grid-cols-1 gap-x-8 gap-y-8 pt-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-[#38598F]">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                {group.courses.map((course, index) => (
                  <div key={index}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='p-4 bg-[#F0F4F8] rounded-lg'
                      >
                        <Typography className='text-[#38598F] font-semibold text-lg'>{course.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails className='bg-[#F0F4F8]'>
                        {course.teacher.map((teacher, index) => (
                          <div key={index} className='mb-7'>
                            <span className='text-lg text-[#1E3C63]'>{teacher.name}</span>
                            <br />
                            <span className='text-sm text-black'>{teacher.role}</span>
                          </div>
                        ))}
                        <div className='flex'>
                          <div>
                            <span className='text-lg text-[#1E3C63]'>{course.obj}</span>
                            {course.objectives.map((objective, index) => (
                                <li key={index} className="text-base text-black">{objective}</li>
                            ))}
                          </div>
                        </div>
                        <div className='flex justify-end'>
                          {course.project && (
                            <Button href={course.project}>
                              {course.button}
                            </Button>
                          )}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </Border>
        </FadeIn>
      ))}
    </div>
  );
}