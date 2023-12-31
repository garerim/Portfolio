"use client";

import { RevealWrapper } from 'next-reveal';
import { Tilt } from 'react-next-tilt';
import SkillItem from './SkillItem';
import { data } from './data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GetTranslate } from '@/app/[locale]/getTranslate';

export default function SkillPage() {
  return (
    <div id='skills' className='h-auto pb-16 pt-16 relative overflow-y-visible'>
      <h2 className='text-4xl font-bold'>{GetTranslate('SkillsPage', 'title')}</h2>
      <p className='text-sm text-gray-500'>{GetTranslate('SkillsPage', 'subtitle')}</p>
      <div className='flex flex-wrap items-center justify-center gap-3 w-full mt-3 h-fit'>

        <Tilt>
          <RevealWrapper className={'z-10'} rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={500} duration={1000} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <Card className='w-fit h-auto flex flex-col items-center border bg-[#02cdfa] border-blue-700'>
              <CardHeader>
                <CardTitle className='text-black'>Front-End</CardTitle>
                <CardDescription className='text-black'>{GetTranslate('SkillsPage', 'skills.skills-1.subtitle')}</CardDescription>
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
        </Tilt>

        <Tilt>
          <RevealWrapper className={'z-20'} rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={600} duration={1000} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <Card className='w-fit h-auto flex flex-col items-center border bg-[#02cdfa] border-blue-700'>
              <CardHeader>
                <CardTitle className='text-black'>Back-End</CardTitle>
                <CardDescription className='text-black'>{GetTranslate('SkillsPage', 'skills.skills-2.subtitle')}</CardDescription>
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
        </Tilt>

        <Tilt>
          <RevealWrapper className={'z-30'} rotate={{ x: 12, y: 40, z: 0 }} origin='bottom' delay={700} duration={1000} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <Card className='w-fit h-auto flex flex-col items-center border bg-[#02cdfa] border-blue-700'>
              <CardHeader>
                <CardTitle className='text-black'>{GetTranslate('SkillsPage', 'skills.skills-3.title')}</CardTitle>
                <CardDescription className='text-black'>{GetTranslate('SkillsPage', 'skills.skills-3.subtitle')}</CardDescription>
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
        </Tilt>

      </div>
    </div>
  )
}