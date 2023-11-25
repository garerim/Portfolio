import clsx from 'clsx'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'

type HomeItemProps = {
    text: string,
    image: string,
    position: string
}

export const HomeItem = ({ text, image, position }: HomeItemProps) => {

    return (
        <RevealWrapper className={clsx('hidden absolute lg:block', position)} rotate={{ x: 0, y: 0, z: 0 }} origin='bottom' delay={500} duration={800} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <div className="border-[3px] border-black rounded-xl overflow-hidden p-2 mx-2 max-w-lg flex bg-card animate-bounce-in-delay">
                <Image src="images/photo.png" className="w-1/5 h-1/5 border-2 border-black rounded-md" alt="Picture of the author" />
                <div className="ml-2 flex flex-col items-start">
                    <p className="text-lg font-bold flex items-center">
                        Mathéo GARERI
                        <Image src="images/france.png" alt="France flag" className="w-5 h-5 ml-2" />
                        <Image src="images/savoie.png" alt="France flag" className="w-5 h-5 ml-2" />
                    </p>
                    <p className="text-left">{text}</p>
                    <Image src={image} alt="..." />
                </div>
            </div>
        </RevealWrapper>
    )
}
