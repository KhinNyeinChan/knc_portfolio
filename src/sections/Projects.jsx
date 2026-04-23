import { ArrowUpRight } from 'lucide-react'

import SectionShell from '../components/layout/SectionShell.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { profile } from '../data/profile.js'

function Projects() {
  return (
    <SectionShell id="projects" className="space-y-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across banking systems, product UI, and early software delivery."
        description="A few representative highlights from professional experience spanning fintech platforms, customer-facing interfaces, and internship product development."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {profile.projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm shadow-sky-100/70 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(14,165,233,0.12)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-600 uppercase">
                Featured
              </p>
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-sky-600" />
            </div>

            <h3 className="mt-5 font-display text-2xl tracking-tight text-slate-950">
              {project.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-sky-700"
            >
              Discuss this work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default Projects
