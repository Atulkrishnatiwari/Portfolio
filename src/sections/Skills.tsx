import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { SkillBar } from "../components/SkillBar"
import { skills } from "../data/portfolio"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Core iOS and cross-platform skills."
            description="Swift-first development with UIKit, SwiftUI, and SDK work across iOS ecosystems."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-[#101323] p-6">
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
                    SwiftUI, UIKit, MapKit, AVFoundation, Alamofire, Cocoa Touch, Firebase, React
                    Native
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
