import { CheckCircle2 } from 'lucide-react'

import SectionShell from '../components/layout/SectionShell.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { profile } from '../data/profile.js'

function About() {
  return (
    <SectionShell id="about" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        eyebrow="About"
        title="Building reliable software with strong frontend and delivery ownership."
        description={profile.summary}
      />

      <div className="space-y-6 rounded-[1.75rem] border border-sky-100 bg-sky-50/70 p-6">
        {profile.highlights.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-0.5 rounded-full bg-white p-1 text-sky-600 shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <p className="text-sm leading-7 text-slate-700">{item}</p>
          </div>
        ))}

        <div className="flex flex-wrap gap-2 pt-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export default About
