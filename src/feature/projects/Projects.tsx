"use client";

import { GetTranslate } from '@/app/[locale]/getTranslate';
import ProjectItem from './ProjectItem';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { RevealWrapper } from 'next-reveal';

export default function ProjectsPage() {

  const data = [
    {
      "name": "Miro Clone",
      "description": GetTranslate("ProjectsPage", 'projects.projects-5'),
      "image": ["miro-1", "miro-2"],
      "url": "https://miro-clone-sand.vercel.app",
      "techs": [
        {
          "name": "NextJS",
          "svg": "nextjs"
        },
        {
          "name": "TypeScript",
          "svg": "typescript"
        },
        {
          "name": "TailwindCSS",
          "svg": "tailwind"
        },
        {
          "name": "Convex",
          "svg": "convex"
        },
        {
          "name": "Liveblocks",
          "svg": "liveblocks"
        },
      ]
    },
    {
      "name": "Githread",
      "description": GetTranslate("ProjectsPage", 'projects.projects-1'),
      "image": ["githread-1"],
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
      "image": ["twitter-1"],
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
      "image": ["troc-1"],
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
    },
    {
      "name": "Pulse Chat",
      "description": GetTranslate("ProjectsPage", 'projects.projects-4'),
      "image": ["pulsechat"],
      "url": "https://pulsechat-poll.vercel.app/home",
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
  ]



  return (
    <div id='projects' className='h-auto pb-32 relative pt-16'>
      <h1 className='text-center text-4xl font-bold mb-4'>{GetTranslate('ProjectsPage', 'title')}</h1>
      {/* <div className='flex justify-center items-center gap-2 flex-wrap px-2'>
        {data.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
          ))}
          </div> */}
      <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={200} duration={1000} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 100, left: 5 }}>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-[80%] mx-auto"
        >
          <CarouselContent>
            {data.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProjectItem project={project} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </RevealWrapper>
    </div>
  )
}