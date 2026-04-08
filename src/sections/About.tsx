import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="iOS engineering with a focus on reliability."
            description="Experienced iOS Developer with Swift, UIKit, SwiftUI, REST APIs, Core Data, and cloud integration. I modernize legacy Objective-C/Swift codebases and ship stable SDK upgrades for iOS 18 compatibility."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Principles
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Stability and performance first.</li>
                <li>Clean architecture with MVVM/MVC.</li>
                <li>API-driven, modular SDKs.</li>
                <li>Modernizing legacy Objective-C.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-[#101323] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Toolset
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
                {["Swift", "SwiftUI", "UIKit", "MapKit", "AVFoundation", "Firebase"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Education</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Cetpa Info Tech, Noida</p>
                  <p>Java full stack development & DSA (Dec 2022 – July 2023)</p>
                </div>
                <div>
                  <p className="font-semibold text-white">A.K.T.U (UP Lucknow)</p>
                  <p>B.Tech in Computer Science (July 2017 – Sep 2021)</p>
                </div>
                <div className="pt-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  Hobbies
                </div>
                <p>Table tennis, watching movies, exploring new places.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
