import { motion } from "framer-motion"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { achievements } from "../data/portfolio"

export function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition for engineering impact."
            description="Milestones that highlight stability improvements and impactful SDK delivery."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.1}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{achievement.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
