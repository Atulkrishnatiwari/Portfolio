import { motion } from "framer-motion"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { workingOn } from "../data/portfolio"

export function WorkingOn() {
  return (
    <motion.section
      id="now"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Now"
            title="What I’m working on"
            description="Current focus areas centered on iOS SDK readiness and stability."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workingOn.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
