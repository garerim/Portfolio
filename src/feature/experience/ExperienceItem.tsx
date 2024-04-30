"use client";

import { Dot, ExternalLink } from 'lucide-react'
import BadgeTech from '../BadgeTech'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image';

type ExperienceItemProps = {
  job: string,
  image: string,
  company: string,
  link: string,
  description: string,
  date: string,
  techs: {
    svg: string,
    name: string
  }[]
}
export default function ExperienceItem({ experience }: {experience : ExperienceItemProps}) {
  return (
    <RevealWrapper className={'z-20'} rotate={{ x: 12, y: 40, z: 0 }} origin='right' delay={200} duration={1000} distance='400px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
      <div className='w-fit mx-auto  h-auto p-4 border-4 rounded-lg min-w-xs max-w-xl relative bg-card'>
        <a target='_blank' className='absolute top-4 right-4 cursor-pointer' href={experience.link}><ExternalLink /></a>
        <img src={`images/${experience.image}.png`} className='w-12 h-12 rounded-full border-2' alt="Logo POWINOO" />
        <div className='text-left mt-2'>
          <div className='text-2xl font-bold'>{experience.job}</div>
          <div className='text-lg font-bold flex items-center'>{experience.company} <Dot /> <span className='text-sm'>{experience.date}</span></div>
          <div>{experience.description}</div>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex gap-2 flex-wrap'>
          {experience.techs.map((tech, index) => (
            <BadgeTech key={index} svg={tech.svg} name={tech.name} />
          ))}
        </div>
      </div>
    </RevealWrapper>
  )
}
