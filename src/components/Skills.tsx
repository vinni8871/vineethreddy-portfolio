import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '../data'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal, staggerContainer, staggerItem } from './ui/Reveal'
import { TiltCard } from './ui/TiltCard'

const groups = ['All', 'Languages', 'Frontend', 'Database', 'Tools', 'Concepts'] as const

const tools = [
  { name: 'Java', color: '#f89820' },
  { name: 'Python', color: '#4b8bbe' },
  { name: 'React', color: '#61dafb' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'MySQL', color: '#00758f' },
  { name: 'MongoDB', color: '#4db33d' },
  { name: 'Git', color: '#f05032' },
  { name: 'C++', color: '#00599c' },
]

export function Skills() {
  const [filter, setFilter] = useState<(typeof groups)[number]>('All')
  const shown = filter === 'All' ? skills : skills.filter((s) => s.group === filter)

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The toolkit I <span className="gradient-text">actually use</span>
            </>
          }
          description="Languages, frameworks and databases I've shipped with — not just read about. Filter by category to explore."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* bars */}
          <div>
            <Reveal direction="none">
              <div className="mb-7 flex flex-wrap gap-2">
                {groups.map((g) => (
                  <button
                    key={g}
                    onClick={() => setFilter(g)}
                    className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-300 ${
                      filter === g ? 'text-ink-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {filter === g && (
                      <motion.span
                        layoutId="skill-filter"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        className="absolute inset-0 -z-10 rounded-full bg-brand-400"
                      />
                    )}
                    {g}
                  </button>
                ))}
              </div>
            </Reveal>

            <motion.div layout className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {shown.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group"
                >
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-[13px] font-medium text-slate-200">{skill.name}</span>
                    <span className="font-mono text-[10px] text-slate-600 transition-colors group-hover:text-brand-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* stack tiles */}
          <div>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-5">Core stack</p>
            </Reveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            >
              {tools.map((t) => (
                <motion.div key={t.name} variants={staggerItem}>
                  <TiltCard intensity={10} className="h-full">
                    <div className="card flex h-full flex-col items-center justify-center gap-2 px-3 py-5 transition-colors duration-300 hover:border-white/15">
                      <span
                        className="h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
                        style={{ backgroundColor: t.color, boxShadow: `0 0 12px ${t.color}88` }}
                      />
                      <span className="font-mono text-[11px] tracking-wide text-slate-300">{t.name}</span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <Reveal delay={0.2}>
              <div className="mt-6 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-brand-500/[0.08] to-transparent p-5">
                <p className="font-display text-sm font-semibold text-white">Also comfortable with</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['OOP', 'SDLC', 'Supabase', 'Gemini API', 'YouTube Data API', 'Computer Vision', 'MongoDB', 'HTML5 Canvas'].map(
                    (x) => (
                      <span key={x} className="chip chip-hover">
                        {x}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
