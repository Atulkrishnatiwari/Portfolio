import { motion } from "framer-motion"

type SkillBarProps = {
  name: string
  level: number
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{name}</span>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-ink-400 via-ink-500 to-ink-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
