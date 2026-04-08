import { type CSSProperties, useEffect, useMemo, useState } from "react"
import {
  motion,
  type MotionValue,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { socialLinks } from "../data/portfolio"

const orbitSkills = [
  { name: "Swift", category: "mobile", years: 2.5, level: 92, icon: "🦅" },
  { name: "SwiftUI", category: "mobile", years: 2, level: 88, icon: "🧩" },
  { name: "UIKit", category: "mobile", years: 2.5, level: 86, icon: "🧱" },
  { name: "React", category: "frontend", years: 1.5, level: 78, icon: "⚛️" },
  { name: "React Native", category: "mobile", years: 1, level: 72, icon: "📱" },
  { name: "TypeScript", category: "frontend", years: 1.5, level: 76, icon: "🔷" },
  { name: "JavaScript", category: "frontend", years: 2, level: 74, icon: "✨" },
  { name: "Git", category: "tools", years: 3, level: 85, icon: "🌿" },
  { name: "REST APIs", category: "backend", years: 2, level: 80, icon: "🔗" },
  { name: "Firebase", category: "backend", years: 1.5, level: 70, icon: "🔥" },
]

const categoryStyles: Record<string, string> = {
  frontend: "orbit-skill orbit-skill--frontend",
  mobile: "orbit-skill orbit-skill--mobile",
  backend: "orbit-skill orbit-skill--backend",
  tools: "orbit-skill orbit-skill--tools",
}

const roles = ["iOS Developer", "Software Engineer", "SwiftUI Specialist"]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [paused, setPaused] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<(typeof orbitSkills)[number] | null>(
    null
  )

  const role = useMemo(() => roles[roleIndex] ?? roles[0], [roleIndex])
  const rotation = useMotionValue(0)
  const counterRotate = useTransform(rotation, (value) => -value)
  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)
  const smoothX = useSpring(parallaxX, { stiffness: 80, damping: 20 })
  const smoothY = useSpring(parallaxY, { stiffness: 80, damping: 20 })

  useAnimationFrame((_time, delta) => {
    if (paused || selectedSkill) return
    const next = (rotation.get() + delta * 0.02) % 360
    rotation.set(next)
  })

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < role.length) {
        setCharIndex((prev) => prev + 1)
        return
      }

      if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1)
        return
      }

      if (!isDeleting && charIndex === role.length) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, role])

  const typedText = role.slice(0, charIndex)

  return (
    <motion.section
      id="top"
      className="relative overflow-hidden pb-24 pt-32"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-ink-200">
            iOS Developer • Noida • +91-6202203179
          </span>
          <h1 className="text-gradient-hero text-5xl font-bold leading-tight md:text-6xl">
            Atul Kumar Tiwari
          </h1>
          <div className="flex items-center gap-3 text-lg text-slate-300">
            <span className="font-mono text-ink-200">{typedText}</span>
            <span className="h-5 w-[2px] animate-pulse bg-ink-200" />
          </div>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Building premium <span className="text-ink-200">iOS</span> experiences with
            <span className="text-ink-200"> Swift</span> and reliable cross-platform delivery in
            <span className="text-ink-200"> React</span> ecosystems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
            <a
              href="mailto:atulbhu001@gmail.com"
              className="glass-card rounded-full px-4 py-1"
            >
              atulbhu001@gmail.com
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="glass-card rounded-full px-4 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          style={{
            width: "min(82vw, 420px)",
            height: "min(82vw, 420px)",
            ...( { "--radius": "clamp(120px, 28vw, 170px)" } as CSSProperties ),
          }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            const x = (event.clientX - rect.left - rect.width / 2) / rect.width
            const y = (event.clientY - rect.top - rect.height / 2) / rect.height
            parallaxX.set(x * 12)
            parallaxY.set(y * 12)
          }}
          onMouseLeave={() => {
            parallaxX.set(0)
            parallaxY.set(0)
          }}
        >
          <motion.div className="absolute inset-0" style={{ x: smoothX, y: smoothY }}>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: "calc(var(--radius) * 2)", height: "calc(var(--radius) * 2)" }}
            >
              <svg className="h-full w-full" viewBox="-2 -2 104 104">
                <circle className="orbit-path" cx="50" cy="50" r="50" />
                {orbitSkills.map((skill, index) => {
                  const angle = (360 / orbitSkills.length) * index
                  const nextAngle = (360 / orbitSkills.length) * ((index + 1) % orbitSkills.length)
                  const radius = 50
                  const x1 = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180))
                  const y1 = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180))
                  const x2 = 50 + radius * Math.cos((nextAngle - 90) * (Math.PI / 180))
                  const y2 = 50 + radius * Math.sin((nextAngle - 90) * (Math.PI / 180))
                  return (
                    <line
                      key={`${skill.name}-line`}
                      className="orbit-line"
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                    />
                  )
                })}
              </svg>
            </div>

            <motion.div className="absolute inset-0" style={{ rotate: rotation }}>
              {orbitSkills.map((skill, index) => {
                const angle = (360 / orbitSkills.length) * index
                return (
                  <div
                    key={skill.name}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateX(var(--radius))`,
                    }}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <OrbitItem
                        name={skill.name}
                        category={skill.category}
                        icon={skill.icon}
                        rotation={rotation}
                        counterRotate={counterRotate}
                        angle={angle}
                        active={hoveredSkill === skill.name}
                        onEnter={() => {
                          setPaused(true)
                          setHoveredSkill(skill.name)
                        }}
                        onLeave={() => {
                          setPaused(false)
                          setHoveredSkill(null)
                        }}
                        onClick={() => setSelectedSkill(skill)}
                      />
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div className="glass-card no-hover absolute inset-0 z-10 m-auto flex h-28 w-28 items-center justify-center rounded-3xl text-2xl font-semibold text-white shadow-glow md:h-32 md:w-32">
            ATUL
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-ink-500 via-sky-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px]"
          >
            View projects
          </a>
          <a
            href="/Atulkumartiwari.pdf.pdf"
            download
            className="glass-card rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="glass-card rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Book a call
          </a>
        </motion.div>
      </div>

      <motion.div>
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedSkill ? 1 : 0 }}
          style={{ pointerEvents: selectedSkill ? "auto" : "none" }}
          onClick={() => setSelectedSkill(null)}
        >
          {selectedSkill ? (
            <motion.div
              className="glass-card w-full max-w-lg rounded-3xl p-6"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Skill</p>
                  <h3 className="mt-2 flex items-center gap-2 text-2xl font-semibold text-white">
                    <span>{selectedSkill.icon}</span>
                    {selectedSkill.name}
                  </h3>
                </div>
                <button
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
                  onClick={() => setSelectedSkill(null)}
                >
                  Close
                </button>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Experience</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {selectedSkill.years} years
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Category</p>
                  <p className="mt-2 text-lg font-semibold text-white">{selectedSkill.category}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Proficiency</span>
                  <span>{selectedSkill.level}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/5">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-ink-400 via-ink-500 to-ink-600"
                    style={{ width: `${selectedSkill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

type OrbitItemProps = {
  name: string
  category: string
  icon: string
  rotation: MotionValue<number>
  counterRotate: MotionValue<number>
  angle: number
  active: boolean
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}

function OrbitItem({
  name,
  category,
  icon,
  rotation,
  counterRotate,
  angle,
  active,
  onEnter,
  onLeave,
  onClick,
}: OrbitItemProps) {
  const depth = useTransform(rotation, (value: number) => {
    const combined = (value + angle) % 360
    const radians = ((combined - 90) * Math.PI) / 180
    return (Math.cos(radians) + 1) / 2
  })

  const scale = useTransform(depth, [0, 1], [0.98, 1.03])
  const opacity = useTransform(depth, [0, 1], [0.85, 1])
  const blur = useTransform(depth, (value: number) => `blur(${(1 - value) * 0.6}px)`)

  return (
      <motion.button
        type="button"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClick}
        style={{ rotate: counterRotate, scale, opacity, filter: blur }}
        className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(99,179,237,0.55)] md:text-sm ${
          categoryStyles[category]
        } ${active ? "shadow-[0_0_24px_rgba(90,108,255,0.5)]" : ""}`}
      >
      <span className="mr-2 text-sm" aria-hidden>
        {icon}
      </span>
      {name}
    </motion.button>
  )
}
