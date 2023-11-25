import Image from 'next/image';
type SkillItemProps = {
    name: string
    svg: string
}

export default function SkillItem({ item }: { item: SkillItemProps }) {

    return (
        <div className='rounded-full flex items-center w-fit px-2 py-0.5'>
            <img src={`/svg/${item.svg}.svg`} alt={item.name} width={25} height={25} className='mr-3' />
            <p className='font-bold text-lg text-black'>{item.name}</p>
        </div>
    )
}
