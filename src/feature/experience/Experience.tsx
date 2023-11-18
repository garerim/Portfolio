import ExperienceItem from './ExperienceItem'
import { data } from './data'

export default function ExperiencePage() {
  
  const experience = data[0];

  return (
    <div id='experience' className='min-h-screen h-fit relative pt-20 px-2 overflow-x-hidden'>
        <h2 className='text-center text-4xl font-bold mb-16'>My Experiences</h2>
        <div className='w-px bg-blue-600 h-[80%] absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 -z-10'></div>
        <ExperienceItem experience={experience}/>
    </div>
  )
}
