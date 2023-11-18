"use client";

import { RevealWrapper } from 'next-reveal';
import SkillItem from './SkillItem';
import { data } from './data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SkillPage() {
  return (
    <div id='skills' className='h-auto pb-16 pt-16 relative overflow-y-visible'>
      <img src='/svg/lys.svg' className='w-80 opacity-30 h-auto object-cover absolute -bottom-52 right-3 -z-40' alt='lys flower' />
      <h2 className='text-4xl font-bold'>My Skills</h2>
      <p className='text-sm text-gray-500'>Skills that I use in my projects</p>

      <div className='flex flex-wrap items-center justify-center gap-3 w-full mt-3 h-fit'>
        <RevealWrapper className={'z-10'} rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={0} duration={1000} distance='100px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
          <Card className='w-fit h-auto flex flex-col items-center border bg-[#02cdfa] border-blue-700'>
            <CardHeader>
              <CardTitle className='text-black'>Front-End</CardTitle>
              <CardDescription className='text-black'>Front-end skills that I use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col'>
                {data.frontend.map((item, index) => (
                  <SkillItem key={index} item={item} />
                ))}
              </div>
            </CardContent>
          </Card>
        </RevealWrapper>

        <RevealWrapper className={'z-20'} rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={100} duration={1000} distance='100px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
          <Card className='w-fit h-auto flex flex-col items-center border bg-[#02cdfa] border-blue-700'>
            <CardHeader>
              <CardTitle className='text-black'>Back-End</CardTitle>
              <CardDescription className='text-black'>Back-end skills that I use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col'>
                {data.backend.map((item, index) => (
                  <SkillItem key={index} item={item} />
                ))}
              </div>
            </CardContent>
          </Card>
        </RevealWrapper>

        <RevealWrapper className={'z-30'} rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={200} duration={1000} distance='100px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
          <Card className='w-fit h-auto flex flex-col items-center border bg-[#02cdfa] border-blue-700'>
            <CardHeader>
              <CardTitle className='text-black'>Others</CardTitle>
              <CardDescription className='text-black'>Others skills that I use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col'>
                {data.others.map((item, index) => (
                  <SkillItem key={index} item={item} />
                ))}
              </div>
            </CardContent>
          </Card>
        </RevealWrapper>

      </div>
    </div>
  )
}