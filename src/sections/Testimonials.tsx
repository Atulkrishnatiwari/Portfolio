import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { testimonials } from "../data/portfolio"

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20">
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
    </section>
  )
}
