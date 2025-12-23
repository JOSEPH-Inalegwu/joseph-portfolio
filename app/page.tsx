import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />

      {/* Placeholder for Education */}
      <section id="education" className="py-20 container mx-auto px-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

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
