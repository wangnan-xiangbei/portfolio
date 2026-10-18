import { useCallback, useEffect, useState } from "react"
import { Navbar } from "@/sections/Navbar"
import { Hero } from "@/sections/Hero"
import { Works } from "@/sections/Works"
import { About } from "@/sections/About"
import { Contact } from "@/sections/Contact"
import { AppDetail } from "@/sections/AppDetail"
import { works } from "@/data/site"

/** 从 hash 解析出当前应用 id：#/app/lianti -> lianti */
function parseHash(): string | null {
  const m = window.location.hash.match(/^#\/app\/([\w-]+)$/)
  if (!m) return null
  return works.some((w) => w.id === m[1]) ? m[1] : null
}

function App() {
  // 用 hash 路由做详情页：#/app/<id>，静态托管（GitHub Pages）无需服务端配置，链接可分享
  const [activeId, setActiveId] = useState<string | null>(parseHash)

  useEffect(() => {
    const onHashChange = () => setActiveId(parseHash())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const openApp = useCallback((id: string) => {
    window.location.hash = `#/app/${id}`
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const closeApp = useCallback(() => {
    window.location.hash = "#/"
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const active = activeId ? works.find((w) => w.id === activeId) ?? null : null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {active ? (
          <AppDetail work={active} onBack={closeApp} />
        ) : (
          <>
            <Hero />
            <Works onSelect={openApp} />
            <About />
            <Contact />
          </>
        )}
      </main>
    </div>
  )
}

export default App
