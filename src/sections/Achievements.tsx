import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { achievements } from "../data/portfolio"

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-20">
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
              <div className="rounded-3xl border border-white/10 bg-[#101323] p-6 transition hover:-translate-y-1 hover:border-white/20">
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{achievement.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
