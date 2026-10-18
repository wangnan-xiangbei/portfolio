import { Navbar } from "@/sections/Navbar"
import { Hero } from "@/sections/Hero"
import { Works } from "@/sections/Works"
import { About } from "@/sections/About"
import { Contact } from "@/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
