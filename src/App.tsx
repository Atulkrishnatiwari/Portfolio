import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Particles } from "./components/Particles"
import { Preloader } from "./components/Preloader"
import { ScrollProgress } from "./components/ScrollProgress"
import { About } from "./sections/About"
import { Achievements } from "./sections/Achievements"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Footer } from "./sections/Footer"
import { GithubStats } from "./sections/GithubStats"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { Testimonials } from "./sections/Testimonials"
import { WorkingOn } from "./sections/WorkingOn"

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-slate-100">
      <AnimatePresence mode="wait">{loading ? <Preloader /> : null}</AnimatePresence>
      <ScrollProgress />
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />
      <AnimatePresence mode="wait">
        <motion.main
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 -z-40 animated-gradient" />
          <Particles />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <WorkingOn />
          <GithubStats />
          <Achievements />
          <Testimonials />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
