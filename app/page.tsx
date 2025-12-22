import { Hero } from "@/components/sections/hero"
import { Navbar } from "@/components/layout/navbar"
import { Services } from "@/components/sections/services"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
    </main>
  )
}
