import { Contact } from "@/components/sections/contact"
import { EducationSkills } from "@/components/sections/education-skills"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Services } from "@/components/sections/services"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <EducationSkills />
      <Contact />
    </main>
  )
}
