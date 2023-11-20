"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { RevealWrapper } from "next-reveal";

export default function HomePage() {
    return (
        <>
            <div id="home" className="flex items-center justify-center h-screen relative">
                
                <div className="absolute top-0 left-0 -z-10 w-full h-full">
                    <div className="absolute h-1/4 left-0 w-full bottom-0 bg-home-gradient"></div>
                    <div className="w-full h-full bg-cover bg-home bg-center" ></div>
                </div>

                {/* <HomeItem text={'I love Alps Mountains'} image='/images/background.jpg' position={'top-[80px] left-[80px] scale-75'} />
                <HomeItem text={'I love Alps Mountains'} image='/images/background.jpg' position={'bottom-[40px] right-[80px] scale-75'} /> */}

                <RevealWrapper rotate={{ x: 0, y: 0, z: 0 }} origin='bottom' delay={0} duration={800} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                    <div className="border-[3px] border-black rounded-xl overflow-hidden p-2 mx-2 max-w-2xl flex bg-card animate-bounce-in">
                        <img src="images/photo.png" className="w-1/5 h-1/5 border-2 border-black rounded-md" alt="Picture of the author" />
                        <div className="ml-2 flex flex-col items-start">
                            <p className="text-lg font-bold flex items-center">
                                Mathéo GARERI
                                <img src="images/france.png" alt="France flag" className="w-5 h-5 ml-2" />
                                <img src="images/savoie.png" alt="France flag" className="w-5 h-[15px] ml-2 rounded-[3px]" />
                            </p>
                            <p className="text-left">Welcome to my portfolio! I am <strong>Mathéo GARERI</strong>, computer science student from Savoie in France, specialized in web development. Discover the <a className="font-bold hover:underline" href="#experience">experiences</a> and <a className="font-bold hover:underline" href="#skills">skills</a> I gained during my apprenticeship. Explore my <a className="font-bold hover:underline" href="#projects">projects</a> to discover my creative and technical path in the world of web development.</p>
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

            </div>
        </>
    )
}