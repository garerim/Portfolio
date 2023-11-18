"use client";

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from '@/src/themes/ThemeToggle';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {

  return (
    <header className={'fixed top-0 left-0 w-full flex items-center mb-2 py-1 px-2 z-50 bg-background-op'}>
      <h2 className='text-2xl font-bold mr-auto'>Matheo Gareri</h2>
      <ThemeToggle />
      <div className='hidden max-sm:block'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='bg-transparent border-none'>
            <Button className='px-2 ml-2' variant={'outline'}>
              <Menu size={30} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-background'>
            <DropdownMenuItem className='cursor-pointer'><Link href="#home">Home</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#skills">Skills</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#experience">Experience</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#projects">Projects</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#contact">Contact</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <ul className='h-full sm:flex items-center gap-2 hidden '>
          <li><Link className='text-lg font-bold' href='#home'>Home</Link></li>
          <li><Link className='text-lg font-bold' href='#skills'>Skills</Link></li>
          <li><Link className='text-lg font-bold' href='#experience'>Experience</Link></li>
          <li><Link className='text-lg font-bold' href='#projects'>Projects</Link></li>
          <li><Link className='text-lg font-bold' href='#contact'>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
