import { motion } from 'framer-motion'
import { Award, BadgeCheck, GraduationCap, Trophy } from 'lucide-react'
import { certifications, education } from '../data'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal, staggerContainer, staggerItem } from './ui/Reveal'

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Education & Credentials"
          title={
            <>
              A steady <span className="gradient-text">track record</span>
            </>
          }
          description="Consistent academic performance from SSC to B.Tech, backed by certifications that map directly to the work I do."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* education */}
          <div>
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-2">
                <GraduationCap size={13} /> Academics
              </p>
            </Reveal>
            <div className="space-y-3">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.04]">
                    <span className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-gradient-to-b from-brand-400 to-accent-400 transition-transform duration-500 group-hover:scale-y-100" />
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-display text-[14px] font-semibold leading-snug text-white">
                          {e.school}
                        </p>
                        <p className="mt-1 text-[12.5px] text-slate-400">{e.degree}</p>
                        <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-500">{e.detail}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="block rounded-full border border-brand-400/25 bg-brand-400/10 px-2 py-0.5 font-mono text-[10px] text-brand-200">
                          {e.score}
                        </span>
                        <span className="mt-1.5 block font-mono text-[10px] text-slate-600">{e.period}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-400/10">
                  <Trophy size={15} className="text-amber-300" />
                </span>
                <div>
                  <p className="text-[13px] font-medium text-amber-100">HacXLerate 2026</p>
                  <p className="text-[11.5px] text-amber-200/60">
                    National-level hackathon participant, organized by ByteXL
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* certifications */}
          <div>
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-2">
                <BadgeCheck size={13} /> Certifications
              </p>
            </Reveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {certifications.map((c) => (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className={`group relative overflow-hidden rounded-xl border p-4 transition-colors duration-500 ${
                    c.featured
                      ? 'border-brand-400/30 bg-gradient-to-br from-brand-400/[0.12] to-transparent sm:col-span-2'
                      : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                        c.featured ? 'bg-brand-400/20' : 'bg-white/[0.05]'
                      }`}
                    >
                      <Award size={14} className={c.featured ? 'text-brand-300' : 'text-slate-400'} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold leading-snug text-white">{c.title}</p>
                      <p className="mt-0.5 text-[11.5px] text-brand-300/80">{c.issuer}</p>
                      {c.featured && (
                        <p className="mt-2 text-[11.5px] leading-relaxed text-slate-400">{c.note}</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 font-mono text-[9.5px] uppercase tracking-wide text-slate-600">
                    {c.meta}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
