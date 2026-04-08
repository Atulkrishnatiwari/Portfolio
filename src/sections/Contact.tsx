import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { contactLinks, socialLinks } from "../data/portfolio"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build reliable iOS experiences."
            description="Share your SDK or mobile product goals and I’ll get back within 48 hours."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Project inquiry</h3>
              <p className="mt-3 text-sm text-slate-300">
                Share a quick summary of what you&apos;re building and the impact you want. I can
                help with iOS SDK delivery or performance tuning.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-[#101323] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Details</p>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                {contactLinks.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs text-slate-500">{item.label}</span>
                    <span className="text-base text-white">{item.value}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:atulbhu001@gmail.com"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px]"
              >
                Send an email
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
