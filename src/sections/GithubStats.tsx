import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { githubStats } from "../data/portfolio";

export function GithubStats() {
  return (
    <motion.section
      id="github"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="contributions"
            description="A quick snapshot of activity and community engagement."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {githubStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="glass-card rounded-3xl p-6 text-center">
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
