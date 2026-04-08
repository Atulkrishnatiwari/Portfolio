import { motion } from "framer-motion"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { SkillBar } from "../components/SkillBar"
import { skills } from "../data/portfolio"

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Core iOS and cross-platform skills."
            description={
              <>
                <span className="text-ink-200">Swift</span>-first development with UIKit,
                SwiftUI, and SDK work across <span className="text-ink-200">iOS</span>
                ecosystems.
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="glass-card animate-float rounded-3xl p-7"
            >
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="glass-card animate-float rounded-3xl p-7"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skill sets</p>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Programming Languages
                  </p>
                  <p className="mt-2">Objective-C, Swift, Java, JavaScript, TypeScript</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Libraries & Frameworks
                  </p>
                  <p className="mt-2">
                    SwiftUI, UIKit, MapKit, AVFoundation, Alamofire, Cocoa Touch, Firebase,
                    <span className="text-ink-200"> React</span> Native
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Tools</p>
                  <p className="mt-2">Git, GitHub, Xcode, VS Code, STS, Eclipse</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Other Skills</p>
                  <p className="mt-2">
                    MVC, MVVM, CocoaPods, Core Data, Auto Layout, DSA, OOP
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </motion.section>
  )
}
