"use client";

import { ExperienceModal } from '@/components/modal/experience-modal';
import { Dot, ExternalLink, Info } from 'lucide-react';
import { RevealWrapper } from 'next-reveal';
import { useState } from 'react';
import BadgeTech from '../BadgeTech';

type ExperienceItemProps = {
  job: string,
  summary?: boolean,
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
export default function ExperienceItem({ experience }: { experience: ExperienceItemProps }) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {experience.summary === true && (
        <ExperienceModal isModalOpen={isModalOpen} handleClose={handleClose} />
      )}
      <RevealWrapper className={'z-20'} rotate={{ x: 12, y: 40, z: 0 }} origin='right' delay={200} duration={1000} distance='400px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
        <div className='w-fit mx-auto  h-auto p-4 border-4 rounded-lg min-w-xs max-w-xl relative bg-card'>
          <a target='_blank' className='absolute top-4 right-4 cursor-pointer' href={experience.link}><ExternalLink /></a>
          {experience.summary === true && (
            <div className='absolute top-4 right-16 cursor-pointer' onClick={() => setIsModalOpen(true)}><Info /></div>
          )}
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
    </>
  )
}
