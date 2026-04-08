import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { workingOn } from "../data/portfolio"

export function WorkingOn() {
  return (
    <section id="now" className="scroll-mt-24 py-20">
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
