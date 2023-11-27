"use client";

import { GetTranslate } from '@/app/[locale]/getTranslate';
import { Card } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Clock2, Code2, TentTree } from 'lucide-react';
import { RevealWrapper } from 'next-reveal';

export default function Me() {

    const hobbies = [
        {
            title: GetTranslate('MePage', 'hobbies.hobbies-1.title'),
            description: GetTranslate('MePage', 'hobbies.hobbies-1.description'),
            icon: Code2,
            color: "text-foreground",
            bgColor: "bg-black/10",
        },
        {
            title: GetTranslate('MePage', 'hobbies.hobbies-2.title'),
            description: GetTranslate('MePage', 'hobbies.hobbies-2.description'),
            icon: Clock2,
            color: "text-violet-500",
            bgColor: "bg-violet-500/10",
        },
        {
            title: GetTranslate('MePage', 'hobbies.hobbies-3.title'),
            description: GetTranslate('MePage', 'hobbies.hobbies-3.description'),
            icon: TentTree,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
    ]

    const birthday = new Date("2003-11-13");
    const today = Date.now();
    const diffTime = Math.abs(today.valueOf() - birthday.valueOf());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

    return (
        <div id='me' className='h-fit pb-16 pt-16 px-2 relative overflow-x-hidden overflow-y-clip'>
            <h1 className='text-4xl font-bold text-center'>{GetTranslate('MePage', 'title')}</h1>

            <div className='flex gap-x-2 flex-col items-center md:flex-row md:items-start w-fit mx-auto justify-center h-fit mt-12 overflow-y-visible'>
                <RevealWrapper className='flex-shrink-0' rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={500} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                    <img src="/images/photo.png" alt="Picture of Matheo GARERI" className='w-60 h-60 rounded-lg flex-shrink' />
                </RevealWrapper>
                <div className='flex flex-col items-start text-center md:text-left lg:w-1/3 w-full h-full'>
                    <RevealWrapper className='w-full text-center md:text-left' rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={550} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                        <h3 className='text-xl font-bold m-auto'>{GetTranslate('MePage', 'me')}</h3>
                    </RevealWrapper>
                    <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={600} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                        <p>
                            {GetTranslate('MePage', 'description-1')}
                            {diffYears}
                            {GetTranslate('MePage', 'description-2')}
                        </p>
                    </RevealWrapper>
                </div>
                <div className='flex flex-col gap-2 w-fit p-4 pt-0 overflow-y-visible'>
                    <RevealWrapper rotate={{ x: 0, y: 80, z: 0 }} origin='bottom' delay={500} duration={750} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                        <h3 className='text-xl font-bold text-center'>{GetTranslate('MePage', 'hobbies.title')}</h3>
                    </RevealWrapper>
                    {hobbies.map((hobby, index) => (
                        <RevealWrapper key={index} rotate={{ x: 0, y: 80, z: 0 }} origin='bottom' delay={500} duration={800 + (100 * index)} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Card
                                        key={index}
                                        className="p-2 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer w-full">
                                        <div className="flex items-center gap-x-4">
                                            <div className={cn("p-2 w-fit rounded-md", hobby.bgColor)}>
                                                <hobby.icon className={cn("w-8 h-8", hobby.color)} />
                                            </div>
                                            <div className="font-semibold">
                                                {hobby.title}
                                            </div>
                                        </div>
                                    </Card>
                                </PopoverTrigger>
                                <PopoverContent>
                                    {hobby.description}
                                </PopoverContent>
                            </Popover>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}
