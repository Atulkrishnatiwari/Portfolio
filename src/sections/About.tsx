import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { metrics } from "../data/portfolio"

export function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="iOS engineering with a focus on reliability."
            description={
              <>
                Experienced <span className="text-ink-200">iOS</span> Developer with
                <span className="text-ink-200"> Swift</span>, UIKit, SwiftUI, REST APIs, Core Data,
                and cloud integration. I modernize legacy Objective-C/Swift codebases and ship
                stable SDK upgrades for iOS 18 compatibility.
              </>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <AnimatedMetric value={metric.value} label={metric.label} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Principles
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Stability and performance first.</li>
                <li>Clean architecture with MVVM/MVC.</li>
                <li>API-driven, modular SDKs.</li>
                <li>Modernizing legacy Objective-C.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Toolset
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
                {["Swift", "SwiftUI", "UIKit", "MapKit", "AVFoundation", "Firebase"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Education</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Cetpa Info Tech, Noida</p>
                  <p>Java full stack development & DSA (Dec 2022 – July 2023)</p>
                </div>
                <div>
                  <p className="font-semibold text-white">A.K.T.U (UP Lucknow)</p>
                  <p>B.Tech in Computer Science (July 2017 – Sep 2021)</p>
                </div>
                <div className="pt-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  Hobbies
                </div>
                <p>Table tennis, watching movies, exploring new places.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.section>
  )
}

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, "")) || 0
  const suffix = value.replace(/[0-9.]/g, "")
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toString())

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, numeric, { duration: 1.2, ease: "easeOut" })
    return () => controls.stop()
  }, [count, inView, numeric])

  return (
    <div ref={ref} className="glass-card rounded-3xl p-6 text-center">
      <div className="text-3xl font-semibold text-white">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
    </div>
  )
}
