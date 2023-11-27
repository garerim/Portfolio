import ContactPage from "@/src/feature/Contact";
import ExperiencePage from "@/src/feature/experience/Experience";
import HomePage from "@/src/feature/home/Home";
import Me from "@/src/feature/me/Me";
import ProjectsPage from "@/src/feature/projects/Projects";
import SkillPage from "@/src/feature/skill/Skill";



export default function Home() {
  return (
    <>
      <HomePage />
      <Me />
      <SkillPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </>
  )
}