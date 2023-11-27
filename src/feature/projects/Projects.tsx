"use client";

import { GetTranslate } from '@/app/[locale]/getTranslate';
import ProjectItem from './ProjectItem';

export default function ProjectsPage() {

  const data = [
    {
      "name": "Githread",
      "description": GetTranslate("ProjectsPage", 'projects.projects-1'),
      "image": "githread-1",
      "url": "https://github.com/garerim/Githread",
      "techs": [
        {
          "name": "NextJS",
          "svg": "nextjs"
        },
        {
          "name": "Prisma",
          "svg": "prisma"
        },
        {
          "name": "TypeScript",
          "svg": "typescript"
        },
        {
          "name": "TailwindCSS",
          "svg": "tailwind"
        }
      ]
    },
    {
      "name": "Clone Twitter",
      "description": GetTranslate("ProjectsPage", 'projects.projects-2'),
      "image": "twitter-1",
      "url": "https://github.com/garerim/Projet-Clone-Twitter-React",
      "techs": [
        {
          "name": "React",
          "svg": "react"
        },
        {
          "name": "NodeJS",
          "svg": "nodejs"
        },
        {
          "name": "MySQL",
          "svg": "mysql"
        },
        {
          "name": "Docker",
          "svg": "docker"
        }
      ]
    },
    {
      "name": "Clone Troc.com",
      "description": GetTranslate("ProjectsPage", 'projects.projects-3'),
      "image": "troc-1",
      "url": "https://github.com/garerim/SAE401-VueJS",
      "techs": [
        {
          "name": "VueJS",
          "svg": "vue"
        },
        {
          "name": "C#",
          "svg": "csharp"
        },
        {
          "name": "PHP Laravel",
          "svg": "php"
        },
        {
          "name": "PostgreSQL",
          "svg": "postgresql"
        }
      ]
    }
  ]



  return (
    <div id='projects' className='min-h-screen relative pt-16'>
      <h1 className='text-center text-4xl font-bold mb-4'>My Projects</h1>
      <div className='flex justify-center items-center gap-2 flex-wrap px-2'>
        {data.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}