import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { experiences } from "../data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Delivering stable iOS SDKs."
            description="Focused on iOS engineering, SDK development, and stability improvements across releases."
          />
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Reveal key={exp.role} delay={index * 0.1}>
                <div className="relative grid gap-6 md:grid-cols-[40px_1fr]">
                  <div className="hidden items-start justify-center md:flex">
                    <span className="mt-2 inline-flex h-3 w-3 rounded-full bg-ink-400 shadow-glow" />
                  </div>
                  <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">{exp.period}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="text-sm text-ink-200">{exp.company}</p>
                      </div>
                      <span className="rounded-full border border-ink-400/40 bg-ink-500/10 px-3 py-1 text-xs text-ink-200">
                        iOS
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-300">{exp.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {exp.highlights.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
