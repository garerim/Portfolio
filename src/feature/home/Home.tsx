"use client";

import { Button } from "@/components/ui/button";
import { GetTranslate } from "@/app/[locale]/getTranslate";
import { ArrowDownToLine, Github, Linkedin, Mail, Phone } from "lucide-react";
import { RevealWrapper } from "next-reveal";

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent
} from '@/components/ui/dropdown-menu';


export default function HomePage() {

    return (
        <>
            <div id="home" className="flex items-center justify-center h-screen relative">

                <div className="absolute top-0 left-0 -z-10 w-full h-full">
                    <div className="absolute h-1/4 left-0 w-full bottom-0 bg-home-gradient"></div>
                    <div className="w-full h-full bg-cover bg-home bg-center" ></div>
                </div>

                <RevealWrapper rotate={{ x: 0, y: 0, z: 0 }} origin='bottom' delay={500} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                    <div className="border-[3px] border-black rounded-xl overflow-hidden p-2 mx-2 max-w-2xl flex bg-card animate-bounce-in">
                        <img src="images/photo.png" className="w-1/5 h-1/5 border-2 border-black rounded-md" alt="Picture of the author" />
                        <div className="ml-2 flex flex-col items-start">
                            <p className="text-lg font-bold flex items-center">
                                Mathéo GARERI
                                <img src="images/france.png" alt="France flag" className="w-5 h-5 ml-2" />
                                <img src="images/savoie.png" alt="France flag" className="w-5 h-[15px] ml-2 rounded-[3px]" />
                            </p>
                            <p className="text-left">
                                {GetTranslate('HomePage', 'text-post.text-1')}
                                <a href="#me" className="font-bold hover:underline">{GetTranslate('HomePage', 'text-post.text-2')}</a>
                                {GetTranslate('HomePage', 'text-post.text-3')}
                                <a href="#experience" className="font-bold hover:underline">{GetTranslate('HomePage', 'text-post.text-4')}</a>
                                {GetTranslate('HomePage', 'text-post.text-5')}
                                <a href="#skills" className="font-bold hover:underline">{GetTranslate('HomePage', 'text-post.text-6')}</a>
                                {GetTranslate('HomePage', 'text-post.text-7')}
                                <a href="#projects" className="font-bold hover:underline">{GetTranslate('HomePage', 'text-post.text-8')}</a>
                                {GetTranslate('HomePage', 'text-post.text-9')}
                            </p>
                            <hr className="w-full border-black" />
                            <div className="flex flex-wrap justify-center items-center gap-1 mt-2">
                                <a target="_blank" className="flex items-center gap-2 font-bold py-1 px-2 rounded-full bg-[#0e76a8] text-sm text-white" href="https://www.linkedin.com/in/mathéo-gareri-b3a081239/"> <Linkedin width={17} height={17} /> LinkedIn</a>
                                <a target="_blank" className="flex items-center gap-2 font-bold py-1 px-2 rounded-full bg-[#000] text-sm text-white" href="https://github.com/garerim"> <Github width={17} height={17} /> Github</a>
                                <a target="_blank" className="flex items-center gap-2 font-bold py-1 px-2 rounded-full bg-blue-400 text-sm text-white" href="mailto:matheo.gareri@etu.univ-smb.fr"> <Mail width={17} height={17} /> Mail</a>
                                <a target="_blank" className="flex items-center gap-2 font-bold py-1 px-2 rounded-full bg-[#41ab35] text-sm text-white" href="tel:+33669336354"> <Phone width={17} height={17} /> +33 6 69 33 63 54</a>
                            </div>
                        </div>
                    </div>
                </RevealWrapper>

                <RevealWrapper className='absolute left-1/2 bottom-8 -translate-x-1/2 -translate-y-1/2' rotate={{ x: 0, y: 0, z: 0 }} origin='bottom' delay={600} duration={500} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="cursor-pointer group flex gap-1.5 px-8 py-4 bg-foreground bg-opacity-80 rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                                <ArrowDownToLine />
                                {GetTranslate('HomePage', 'CV-btn')}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="w-full">
                                <a href="/images/Matheo-GARERI-CV-fr.pdf" className="flex items-center gap-2 w-full relative" download={true}>
                                    <img src="images/france.png" alt="France flag" className="absolute w-5 h-5 mr-2" />
                                    <p className="w-fit mx-auto">CV</p>
                                    <ArrowDownToLine className="w-4 h-4" />
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="w-full">
                                <a href="/images/Matheo-GARERI-CV-en.pdf" className="flex items-center gap-2 w-full relative" download={true}>
                                    <img src="images/uk.png" alt="United Kingdom flag" className="absolute w-5 h-5 mr-2" />
                                    <p className="w-fit mx-auto">CV</p>
                                    <ArrowDownToLine className="w-4 h-4" />
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </RevealWrapper>

            </div>
        </>
    )
}