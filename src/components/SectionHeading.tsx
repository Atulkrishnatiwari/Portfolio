type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
