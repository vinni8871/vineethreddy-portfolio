import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ExternalLink, Layers, Sparkles } from 'lucide-react'
import { Github, Linkedin } from './ui/BrandIcons'
import { useState } from 'react'
import { projects, repos } from '../data'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { TiltCard } from './ui/TiltCard'

export function Projects() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Things I've <span className="gradient-text">built & shipped</span>
            </>
          }
          description="Two end-to-end products — one built solo for a social problem, one built with a team of five in a 24-hour national hackathon. Both live in production."
          action={
            <a
              href={`https://github.com/vinni8871`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost group text-[13px]"
            >
              <Github size={15} />
              All repositories
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        {/* selector tabs */}
        <div className="mt-10 flex flex-col gap-2 sm:flex-row">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`group relative flex flex-1 items-center gap-3 overflow-hidden rounded-xl border px-4 py-3.5 text-left transition-all duration-500 ${
                active === i
                  ? 'border-brand-400/35 bg-brand-400/[0.07]'
                  : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
              }`}
            >
              <span
                className={`font-mono text-[10px] ${active === i ? 'text-brand-300' : 'text-slate-600'}`}
              >
                0{i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`block font-display text-sm font-semibold tracking-tight ${
                    active === i ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {p.name}
                </span>
                <span className="mt-0.5 block truncate text-[11px] text-slate-500">{p.subtitle}</span>
              </span>
              <ArrowUpRight
                size={14}
                className={`shrink-0 transition-transform duration-300 ${
                  active === i ? 'text-brand-300' : 'text-slate-600 group-hover:translate-x-0.5'
                }`}
              />
              {active === i && (
                <motion.span
                  layoutId="project-tab"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-400 to-accent-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]"
          >
            {/* left: content */}
            <TiltCard intensity={4} className="rounded-2xl">
              <div className="card h-full p-6 sm:p-8">
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-60`}
                />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.accent}`} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-300/90">{project.subtitle}</p>
                  </div>
                </div>

                <p className="mt-5 text-pretty text-[14.5px] leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-2.5">
                  {project.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                      className="flex gap-2.5 text-[13px] leading-relaxed text-slate-300"
                    >
                      <Check size={14} className="mt-[3px] shrink-0 text-brand-400" />
                      <span>{h}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/[0.07] pt-5">
                  <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    <Layers size={11} /> Tech stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span key={s} className="chip chip-hover">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary group px-5 py-2.5 text-[13px]"
                  >
                    <ExternalLink size={14} />
                    Live demo
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost px-5 py-2.5 text-[13px]"
                  >
                    <Github size={14} />
                    Source code
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* right: metrics + preview */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                {project.metric.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.12 + i * 0.07 }}
                    className="card flex flex-col items-center justify-center gap-1 px-2 py-5 text-center"
                  >
                    <span className="font-display text-lg font-semibold text-brand-300">{m.value}</span>
                    <span className="font-mono text-[9px] uppercase leading-tight tracking-wide text-slate-500">
                      {m.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <ProjectPreview id={project.id} name={project.name} accent={project.accent} />

              <div className="card flex items-center gap-3 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-400/10">
                  <Sparkles size={15} className="text-brand-300" />
                </span>
                <p className="text-[12px] leading-relaxed text-slate-400">
                  {project.id === 'wolvguard'
                    ? 'Built in 24 hours at a national-level hackathon — weighted risk scoring, AI explanations and client-side image hashing.'
                    : 'Designed with SDLC practices: requirement analysis, database design, implementation, testing and deployment.'}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* more on github */}
      <div className="container-x mt-20">
        <Reveal>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Github size={12} /> Also on GitHub
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                Practice, side quests & experiments
              </h3>
            </div>
            <a
              href="https://github.com/vinni8871?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand-300 hover:text-brand-200"
            >
              <span className="link-underline">All repositories</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-3">
          {repos.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-brand-400/[0.04]"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-mono text-[12px] font-medium text-slate-200 transition-colors group-hover:text-brand-200">
                    {r.name}
                  </p>
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300"
                  />
                </div>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-slate-500">{r.description}</p>
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400/60" />
                  {r.language}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Abstract generated UI mock-up so the section never depends on screenshots. */
function ProjectPreview({ id, name, accent }: { id: string; name: string; accent: string }) {
  return (
    <div className="card relative flex-1 overflow-hidden p-4">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-[0.06]`} />
      {/* browser chrome */}
      <div className="relative flex items-center gap-1.5 pb-3">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 flex-1 rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[8px] text-slate-500">
          {id === 'wolvguard' ? 'wolvguard.vercel.app' : 'blooddrop360.vercel.app'}
        </span>
      </div>

      {id === 'wolvguard' ? (
        <div className="relative space-y-2.5">
          <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-ink-900/60 p-2.5">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-wider text-slate-500">Risk score</p>
              <p className="font-display text-lg font-semibold text-rose-300">Critical</p>
            </div>
            <div className="relative grid h-11 w-11 place-items-center">
              <svg viewBox="0 0 36 36" className="h-11 w-11 -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="94.2"
                  initial={{ strokeDashoffset: 94.2 }}
                  whileInView={{ strokeDashoffset: 18 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                />
              </svg>
              <span className="absolute font-mono text-[8px] text-white">81</span>
            </div>
          </div>
          {[
            ['Name similarity', 35, 'bg-brand-400'],
            ['Logo similarity', 30, 'bg-accent-400'],
            ['Description match', 15, 'bg-amber-400'],
            ['Publisher diff.', 20, 'bg-rose-400'],
          ].map(([label, w, color], i) => (
            <div key={label as string} className="flex items-center gap-2">
              <span className="w-[86px] shrink-0 font-mono text-[8px] text-slate-500">{label}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(w as number) * 2.6}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                  className={`h-full rounded-full ${color}`}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative space-y-2.5">
          <div className="flex gap-2">
            {['A+', 'O+', 'B+', 'AB+'].map((g, i) => (
              <motion.div
                key={g}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`flex-1 rounded-md border p-1.5 text-center ${
                  i === 0
                    ? 'border-rose-400/40 bg-rose-400/10'
                    : 'border-white/[0.07] bg-white/[0.03]'
                }`}
              >
                <p className={`font-mono text-[9px] ${i === 0 ? 'text-rose-300' : 'text-slate-400'}`}>{g}</p>
              </motion.div>
            ))}
          </div>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.1 }}
              className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-ink-900/50 p-2"
            >
              <span className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-brand-400/40 to-brand-600/20" />
              <div className="flex-1 space-y-1">
                <div className="h-1 w-2/3 rounded-full bg-white/15" />
                <div className="h-1 w-1/3 rounded-full bg-white/[0.08]" />
              </div>
              <span className="rounded bg-brand-400/15 px-1.5 py-0.5 font-mono text-[7px] text-brand-300">
                match
              </span>
            </motion.div>
          ))}
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink-850 to-transparent" />
    </div>
  )
}
