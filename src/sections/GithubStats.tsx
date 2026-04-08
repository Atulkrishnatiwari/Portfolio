import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { githubStats } from "../data/portfolio"

export function GithubStats() {
  return (
    <section id="github" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Open-source footprint"
            description="A quick snapshot of activity and community engagement."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {githubStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="rounded-3xl border border-white/10 bg-[#101323] p-6 text-center">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
