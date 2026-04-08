import { motion } from "framer-motion"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { testimonials } from "../data/portfolio"

export function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted delivery, proven impact."
            description="A few words from teammates and collaborators."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="glass-card rounded-3xl p-7">
                <p className="text-sm text-slate-300">“{item.quote}”</p>
                <div className="mt-6 text-sm text-slate-400">
                  <p className="text-base font-semibold text-white">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
