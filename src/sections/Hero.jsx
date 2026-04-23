import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

import profileImage from '../assets/images/knc-profile.jpg'
import { profile } from '../data/profile.js'

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/75 px-6 py-10 shadow-[0_24px_80px_rgba(14,165,233,0.10)] backdrop-blur sm:px-8 sm:py-12 lg:px-12 lg:py-16"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.30),transparent_62%)] lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-6 w-full max-w-[248px]">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_50px_rgba(14,165,233,0.12)]">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-sky-50">
                <img
                  src={profileImage}
                  alt={`${profile.name} portrait`}
                  className="aspect-square w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/15 to-transparent" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            <Sparkles className="h-4 w-4" />
            Software Developer & Team Lead
          </div>

          <p className="mt-6 text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase">
            {profile.role}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              View Experience
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-200 hover:text-sky-700"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          className="grid gap-4"
        >
          <div className="rounded-[1.75rem] border border-sky-100 bg-linear-to-br from-sky-100 via-white to-cyan-50 p-6">
            <p className="text-sm font-medium text-slate-500">Based in</p>
            <p className="mt-2 font-display text-2xl text-slate-950">
              {profile.location}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Focused on full-stack delivery, API integration, and modern
              interface development for financial platforms and digital
              products.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm shadow-sky-100/70"
              >
                <p className="text-2xl font-display text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
