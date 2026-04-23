import { BriefcaseBusiness, Mail, Phone } from 'lucide-react'

import SectionShell from '../components/layout/SectionShell.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { profile } from '../data/profile.js'

const icons = {
  LinkedIn: BriefcaseBusiness,
  Email: Mail,
  Phone: Phone,
}

function Contact() {
  return (
    <SectionShell id="contact" className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <SectionHeading
        eyebrow="Contact"
        title="Make it easy for the right opportunities to find you."
        description="Open to conversations around frontend engineering, full-stack product development, and team leadership opportunities."
      />

      <div className="min-w-0 rounded-[1.75rem] border border-slate-100 bg-slate-950 p-6 text-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
        <p className="text-sm tracking-[0.2em] text-sky-200 uppercase">
          Start here
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 block break-all font-display text-xl tracking-tight text-white transition hover:text-sky-300 sm:text-2xl"
        >
          {profile.email}
        </a>
        <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
          Feel free to reach out by email, LinkedIn, or phone for portfolio
          discussions, collaboration, or new opportunities.
        </p>

        <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.18em] text-sky-200 uppercase">
              Phone
            </p>
            <a
              href={profile.phoneHref}
              className="mt-2 inline-block font-medium text-white transition hover:text-sky-300"
            >
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-sky-200 uppercase">
              Location
            </p>
            <p className="mt-2 break-words font-medium text-white">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
          {profile.socials.map((social) => {
            const Icon = icons[social.label]

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  social.href.startsWith('http')
                    ? 'noreferrer noopener'
                    : undefined
                }
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-300/50 hover:bg-sky-400/10 sm:w-auto"
              >
                <Icon className="h-4 w-4" />
                {social.label}
              </a>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}

export default Contact
