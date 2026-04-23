function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.28em] text-sky-600 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  )
}

export default SectionHeading
