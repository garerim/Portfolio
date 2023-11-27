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
import { LangToggle } from './LangToggle';
import { GetTranslate } from '@/app/[locale]/getTranslate';

export const Header = () => {

  return (
    <header className={'fixed top-0 left-0 w-full flex items-center mb-2 py-1 px-2 z-50 bg-background-op'}>
      <h2 className='text-2xl font-bold mr-auto'>Matheo Gareri</h2>
      <LangToggle />
      <ThemeToggle />
      <div className='block lg:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='bg-transparent border-none'>
            <Button className='px-2 ml-2' variant={'outline'}>
              <Menu size={30} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-background'>
            <DropdownMenuItem className='cursor-pointer'><Link href="#home">{GetTranslate('Menu', 'text-1')}</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#me">{GetTranslate('Menu', 'text-2')}</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#skills">{GetTranslate('Menu', 'text-3')}</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#experience">{GetTranslate('Menu', 'text-4')}</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#projects">{GetTranslate('Menu', 'text-5')}</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href="#contact">{GetTranslate('Menu', 'text-6')}</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <ul className='h-full hidden lg:flex items-center gap-2'>
          <li><Link className='text-lg font-bold' href='#home'>{GetTranslate('Menu', 'text-1')}</Link></li>
          <li><Link className='text-lg font-bold' href='#me'>{GetTranslate('Menu', 'text-2')}</Link></li>
          <li><Link className='text-lg font-bold' href='#skills'>{GetTranslate('Menu', 'text-3')}</Link></li>
          <li><Link className='text-lg font-bold' href='#experience'>{GetTranslate('Menu', 'text-4')}</Link></li>
          <li><Link className='text-lg font-bold' href='#projects'>{GetTranslate('Menu', 'text-5')}</Link></li>
          <li><Link className='text-lg font-bold' href='#contact'>{GetTranslate('Menu', 'text-6')}</Link></li>
        </ul>
      </div>
    </header>
  )
}
