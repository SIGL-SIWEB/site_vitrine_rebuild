import { Border } from '@/app/components/Border'
import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import { Button } from '@/app/components/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { moduleList } from '@/app/courses/ModuleList';
import * as React from 'react';
  
export function CourseList() {
    return (
      <div>
        <Container className="mt-40">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Courses
            </h2>
          </FadeIn>
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
                                        See the course project
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
      </Container>
    </div>
  )
}
