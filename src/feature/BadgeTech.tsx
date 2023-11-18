import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function BadgeTech({svg, name} : {svg: string, name: string }) {
    return (
        <Badge className='flex items-center gap-2'>
            <img src={`svg/${svg}.svg`} alt={name + "Logo"} className='w-[1.5em] h-[1.5em]' />
            <span className='font-bold text-sm text-black'>{name}</span>
        </Badge>
    )
}
