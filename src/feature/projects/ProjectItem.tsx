import { ExternalLink } from 'lucide-react'
import BadgeTech from '../BadgeTech'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'

type ProjectItemProps = {
  name: string,
  description: string,
  image: string,
  url: string,
  techs: {
    name: string
    svg: string,
  }[],
}

export default function ProjectItem({ project, index }: { project: ProjectItemProps, index: number }) {

  return (
    <RevealWrapper rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={200 + (index*100)} duration={1000} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
      <div className='border-4 h-[440px] bg-card rounded-lg w-fit p-3 min-w-xs max-w-lg max-sm:h-auto flex flex-col'>

        <img src={`/images/${project.image}.png`} alt={"Photo " + project.image} className='rounded-md max-h-64 w-full object-contain' />

        <h3 className='font-bold text-lg flex gap-2 justify-center items-center'>{project.name} {project.url && <a href={project.url}><ExternalLink className='w-5 h-5' /></a>}</h3>

        <p className='text-xs'>{project.description}</p>

        <div className='flex gap-2 flex-wrap justify-center mt-auto'>
          {project.techs.map((tech, index) => (
            <BadgeTech key={index} svg={tech.svg} name={tech.name} />
          ))}
        </div>

      </div>
    </RevealWrapper>
  )
}
