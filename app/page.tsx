import ContactPage from "@/src/feature/Contact";
import ExperiencePage from "@/src/feature/experience/Experience";
import HomePage from "@/src/feature/home/Home";
import ProjectsPage from "@/src/feature/projects/Projects";
import SkillPage from "@/src/feature/skill/Skill";


export default function Home() {


  return (
    <>
      <HomePage />
      <SkillPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </>
  )
}