"use client";

import ExperienceItem from './ExperienceItem'
import { GetTranslate } from "@/app/[locale]/getTranslate"

export default function ExperiencePage() {

  const experience = [
    {
      job: GetTranslate('ExperiencePage', 'experiences.experiences-1.title'),
      company: "POWINOO",
      link: "https://www.powinoo.ovh/",
      description: GetTranslate('ExperiencePage', 'experiences.experiences-1.description'),
      date: GetTranslate('ExperiencePage', 'experiences.experiences-1.date'),
      techs: [
        {
          svg: "react",
          name: "React"
        },
        {
          svg: "nodejs",
          name: "NodeJS"
        },
        {
          svg: "figma",
          name: "Figma"
        },
        {
          svg: "mysql",
          name: "MySQL"
        },
        {
          svg: "firebase",
          name: "Firebase"
        },
      ]
    }
  ]


  return (
    <div id='experience' className='min-h-screen h-fit relative pt-20 px-2 overflow-x-hidden'>
      <h2 className='text-center text-4xl font-bold mb-16'>{GetTranslate('ExperiencePage', 'title')}</h2>
      <div className='w-px bg-blue-600 h-[80%] absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 -z-10'></div>
      <ExperienceItem experience={experience[0]} />
    </div>
  )
}
