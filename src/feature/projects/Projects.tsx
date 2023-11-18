"use client";

import ProjectItem from './ProjectItem';
import { data } from './data';

export default function ProjectsPage() {

  return (
    <div id='projects' className='min-h-screen relative pt-16'>
      <h1 className='text-center text-4xl font-bold mb-4'>My Projects</h1>
      <div className='flex justify-center items-center gap-2 flex-wrap px-2'>
        {data.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}