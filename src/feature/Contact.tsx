"use client";

import { GetTranslate } from "@/app/[locale]/getTranslate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail } from "lucide-react";
import { RevealList, RevealWrapper } from "next-reveal";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function ContactPage() {

  const form = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_878wdtc', 'template_yuconsc', form.current, 'V-JiOCQ_UnCpY0HS1')
        .then((result) => {
          console.log(result.text);
          router.refresh();
          form.current?.reset();
        }, (error) => {
          console.log(error.text);
        });
      }
  };

  return (
    <div id='contact' className='h-auto pb-16 pt-16 relative overflow-x-hidden overflow-y-visible'>
      <h2 className='text-4xl font-bold'>Contact</h2>
      <div className="flex flex-col items-center justify-center mx-2">
        <RevealWrapper rotate={{ x: 12, y: 40, z: 0 }} origin='right' delay={100} duration={1000} distance='100px' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }} className={'max-w-lg w-full m-2 mt-4 p-3 bg-card border-2 rounded-lg'}>
          <form ref={form} onSubmit={(e) => { sendEmail(e) }} className="flex flex-col items-center gap-2">
            <label htmlFor="user_name">{GetTranslate('ContactPage', 'name')}</label>
            <Input type="text" name="user_name" id="user_name" placeholder={GetTranslate('ContactPage', 'name')} required />
            <label htmlFor="user_email">Email</label>
            <Input type="email" name="user_email" id="user_email" placeholder="Email" required />
            <label htmlFor="message">{GetTranslate('ContactPage', 'content')}</label>
            <Textarea name="message" className="resize-none h-52" id="message" required placeholder="Message..." />
            <Button className="font-bold text-white">
              {GetTranslate('ContactPage', 'send')}
            </Button>
          </form>
        </RevealWrapper>

        <div className="flex gap-2 my-2 items-center w-fit">
          <hr className="w-10" />
          <p>{GetTranslate('ContactPage', 'or')}</p>
          <hr className="w-10" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 h-auto">
          <RevealList interval={60} delay={200} reset={false} className='flex flex-wrap gap-2 items-center justify-center h-auto'>
            <a target="_blank" href="https://www.linkedin.com/in/mathéo-gareri-b3a081239/" className="flex items-center gap-2 font-bold bg-[#0e76a8] py-1.5 px-3 rounded-full text-white"><Linkedin /> LinkdeIn</a>
            <a target="_blank" href="https://github.com/garerim" className="flex items-center gap-2 font-bold bg-black py-1 px-2 rounded-full text-white"><Github /> GitHub</a>
            <a target="_blank" href="mailto:matheo.gareri73@gmail.com" className="flex items-center gap-2 font-bold bg-blue-400 py-1 px-2 rounded-full text-white"><Mail /> Mail</a>
          </RevealList>
        </div>
      </div>
    </div>
  )
}