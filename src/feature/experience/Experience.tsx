"use client";

import ExperienceItem from './ExperienceItem'
import { GetTranslate } from "@/app/[locale]/getTranslate"

export default function ExperiencePage() {

  const experience = [
    {
      job: GetTranslate('ExperiencePage', 'experiences.experiences-1.title'),
      image: "powinoo",
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
    },
    {
      job: GetTranslate('ExperiencePage', 'experiences.experiences-2.title'),
      summary: true,
      image: "perfactive",
      company: "PERFACTIVE",
      link: "https://perfactive.fr",
      description: GetTranslate('ExperiencePage', 'experiences.experiences-2.description'),
      date: GetTranslate('ExperiencePage', 'experiences.experiences-2.date'),
      techs: [
        {
          svg: "php",
          name: "PHP Laravel"
        },
        {
          svg: "mysql",
          name: "MySQL"
        },
        {
          svg: "git",
          name: "Git"
        },
        {
          svg: "openai",
          name: "OpenAI"
        },
      ]
    }
  ]


  return (
    <div id='experience' className='min-h-screen h-fit relative pt-20 pb-10 px-2 overflow-x-hidden overflow-y-clip'>
      <h2 className='text-center text-4xl font-bold mb-16'>{GetTranslate('ExperiencePage', 'title')}</h2>
      <div className='w-px bg-blue-600 h-[100%] absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 -z-10'></div>
      <div className='flex items-center flex-col gap-4'>
        {experience.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  )
}
