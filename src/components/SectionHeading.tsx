import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
        {eyebrow}
      </span>
      <h2 className="text-gradient text-4xl font-bold md:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
