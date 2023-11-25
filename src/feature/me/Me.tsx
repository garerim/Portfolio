"use client";

import { Card } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Clock2, Code2, TentTree } from 'lucide-react';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';

const hobbies = [
    {
        title: "Computer Science",
        description: 'Since I got my own computer for my 15th birthday, I fell in love with computer science like coding, video games... That is why I chose to study computer science.',
        icon: Code2,
        color: "text-foreground",
        bgColor: "bg-black/10",
    },
    {
        title: "History",
        description: 'History is something I am passionate about, and I watch documentaries about France, Europe, and the military history.',
        icon: Clock2,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        title: "Nature",
        description: 'Being from Savoie in the French Alps, I have a passion for camping outside and fishing in the forests and lakes of mountains.',
        icon: TentTree,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
]

export default function Me() {

    const birthday = new Date("2003-11-13");
    const today = Date.now();
    const diffTime = Math.abs(today.valueOf() - birthday.valueOf());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

    return (
        <div className='h-auto pb-16 pt-16 px-2 relative overflow-x-hidden overflow-y-visible'>
            <h1 className='text-4xl font-bold text-center'>Who am I ?</h1>

            <div className='flex gap-x-2 flex-col md:flex-row w-fit mx-auto justify-center items-start h-fit mt-12'>
                <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={500} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                    <img src="/images/photo.png" alt="Picture of Matheo GARERI" className='w-60 h-60 rounded-lg' />
                </RevealWrapper>
                <div className='flex flex-col items-start text-center lg:text-left lg:w-1/3 h-full'>
                    <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={550} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                        <h3 className='text-xl font-bold m-auto'>I'm Matheo GARERI</h3>
                    </RevealWrapper>
                    <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='bottom' delay={600} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                        <p>I am {diffYears} years old and I am from Savoie in the French Alps. I am currently studying Bachelor in Computer Science at the IUT of Annecy of the University Savoie Mont Blanc. I am passionate about computers, history, nature, space, manga/anime... During my career and my personal projects, web development became my main passion and I decided to make it my job.</p>
                    </RevealWrapper>
                </div>
                <div className='flex flex-col gap-2 w-fit p-4 pt-0'>
                    <RevealWrapper rotate={{ x: 0, y: 80, z: 0 }} origin='bottom' delay={500} duration={750} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                        <h3 className='text-xl font-bold text-center'>My Hobbies</h3>
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
