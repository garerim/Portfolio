"use client";

import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export const LangToggle = () => {

    const pathname = usePathname();

    return (
        <Button className='mr-2' variant={'ghost'} size={'sm'}>
            <a href={pathname === '/fr' ? '/en' : '/fr'}>
                {pathname === '/en' ?
                    <img src="/images/france.png" alt="French flag" className='w-6 h-6' /> :
                    <img src="/images/uk.png" alt="English flag" className='w-6 h-6' />}
            </a>

            <span className='sr-only'></span>
        </Button>
    )
}
