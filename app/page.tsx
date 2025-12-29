import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { EducationSkills } from "@/components/sections/education-skills"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <EducationSkills />

      {/* Placeholder for Contact */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="text-muted-foreground">
            Ready to build something together? <a href="mailto:joseph@example.com" className="text-primary underline">Email me</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
