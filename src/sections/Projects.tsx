import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { projects } from "../data/portfolio"

type TiltState = {
  rotateX: number
  rotateY: number
}

const initialTilt: TiltState = { rotateX: 0, rotateY: 0 }

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="SDKs and platform tooling."
            description="A snapshot of the SDK initiatives I led across iOS and cross-platform tooling."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.1}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>

        <AnimatePresence>
          {selected ? (
            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-6 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="glass-card w-full max-w-xl rounded-3xl p-7"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{selected.name}</h3>
                  </div>
                  <button
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </button>
                </div>
                <p className="mt-4 text-sm text-slate-300">{selected.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selected.link ? (
                  <a
                    href={selected.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-ink-200 transition hover:text-ink-100"
                  >
                    View reference
                    <span aria-hidden>↗</span>
                  </a>
                ) : null}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Details</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {selected.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

type Project = {
  name: string
  description: string
  tags: string[]
  highlights: string[]
  link?: string
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [tilt, setTilt] = useState<TiltState>(initialTilt)

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) * 2 - 1) * 6
    const rotateX = ((y / rect.height) * 2 - 1) * -6
    setTilt({ rotateX, rotateY })
  }

  return (
    <motion.button
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt(initialTilt)}
      onClick={onOpen}
      style={{ transformStyle: "preserve-3d" }}
      animate={tilt}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="glass-card group h-full rounded-3xl p-6 text-left"
    >
      <div
        className="relative mb-4 h-28 w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(56,189,248,0.25),rgba(139,92,246,0.2),rgba(14,165,233,0.15))] bg-[length:200%_200%] animate-shimmer"
        style={{ transform: "translateZ(14px)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      </div>
      <div className="flex items-center justify-between" style={{ transform: "translateZ(12px)" }}>
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Case</span>
      </div>
      <p className="mt-4 text-sm text-slate-300" style={{ transform: "translateZ(8px)" }}>
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2" style={{ transform: "translateZ(10px)" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div style={{ transform: "translateZ(10px)" }}>
        <div className="mt-6 inline-flex translate-y-2 items-center gap-2 text-sm text-ink-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View details
          <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </div>
      </div>
    </motion.button>
  )
}
