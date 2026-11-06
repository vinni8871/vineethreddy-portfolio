import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Experience"
              title={
                <>
                  Where I've <span className="gradient-text">worked</span>
                </>
              }
              description="Industry experience building AI automation inside a real engineering team — from requirement analysis through to deployment."
            />

            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { k: '3+', v: 'AI use cases built' },
                  { k: '5+', v: 'Team assignments' },
                  { k: '2', v: 'Months industry' },
                  { k: '5', v: 'Person project team' },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
                    <p className="font-display text-lg font-semibold text-brand-300">{s.k}</p>
                    <p className="mt-0.5 text-[11px] leading-tight text-slate-500">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* timeline */}
          <div className="relative">
            <div className="absolute bottom-0 left-[15px] top-2 w-px bg-gradient-to-b from-brand-400/60 via-white/10 to-transparent" />

            {experience.map((job, idx) => (
              <Reveal key={job.company} delay={0.1} direction="left">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-brand-400/30 bg-ink-900">
                    <Briefcase size={13} className="text-brand-300" />
                    <span className="absolute inset-0 animate-pulseRing rounded-full border border-brand-400/30" />
                  </span>

                  <div className="card p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-300">
                          Internship
                        </p>
                        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-white">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">{job.company}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-slate-400">
                        <Calendar size={10} />
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                      <MapPin size={10} /> {job.location}
                    </p>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-slate-400">{job.blurb}</p>

                    <ul className="mt-5 space-y-2.5">
                      {job.points.map((p, i) => (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.07 }}
                          className="flex gap-2.5 text-[13px] leading-relaxed text-slate-300"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                          {p}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
                      {job.stack.map((s) => (
                        <span key={s} className="chip chip-hover">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="relative mt-6 pl-12">
                <span className="absolute left-[9px] top-2 h-3 w-3 rounded-full border-2 border-white/15 bg-ink-950" />
                <p className="text-[13px] leading-relaxed text-slate-500">
                  <span className="font-medium text-slate-300">Next:</span> looking for a software
                  engineering role where I can keep shipping real features with a strong team.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
