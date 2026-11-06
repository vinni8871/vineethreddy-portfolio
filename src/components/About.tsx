import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Database, GitBranch, Layers, Rocket } from 'lucide-react'
import { profile } from '../data'
import { Reveal, staggerContainer, staggerItem } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const pillars = [
  {
    icon: Code2,
    title: 'Clean, working code',
    body: 'Java, Python and C++ fundamentals with a firm grip on OOP — building features that hold up under review.',
  },
  {
    icon: Layers,
    title: 'Full stack delivery',
    body: 'React interfaces on top of SQL-backed systems, following SDLC from requirement analysis to deployment.',
  },
  {
    icon: BrainCircuit,
    title: 'AI automation',
    body: 'Hands-on with AI agents, workflow automation and LLM APIs from a 2-month industry internship.',
  },
  {
    icon: Database,
    title: 'Data mindset',
    body: 'Comfortable modeling relational data in MySQL, plus MongoDB docs and Python-based analysis.',
  },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Fresher by title,
              <br className="hidden sm:block" /> <span className="gradient-text">ship-ready</span> by practice.
            </>
          }
          description="I'm a final-stage B.Tech Computer Science student who learns by building. Every project below started as a real problem — donors who couldn't be found fast enough, brands being impersonated online — and ended as deployed software."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* narrative */}
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <p className="text-pretty text-[15px] leading-[1.8] text-slate-300">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6">
                <span className="absolute -top-3 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-300">
                  How I work
                </span>
                <ul className="space-y-4">
                  {[
                    'Break the problem down before writing a line of code.',
                    'Ship something small and working, then iterate with real feedback.',
                    'Test and debug my own work — a feature is not done until it is verified.',
                    'Write code the next person can read.',
                  ].map((line, i) => (
                    <motion.li
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.5 }}
                      className="flex gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {line}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-brand-300"
                >
                  <GitBranch size={15} className="text-brand-400" />
                  <span className="link-underline">github.com/vinni8871</span>
                </a>
                <span className="h-4 w-px bg-white/10" />
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-brand-300"
                >
                  <Rocket size={15} className="text-brand-400" />
                  <span className="link-underline">LeetCode profile</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {pillars.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="card card-hover group p-5"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-brand-400/30 group-hover:bg-brand-400/10">
                  <Icon size={17} className="text-brand-300" />
                </div>
                <h3 className="font-display text-[15px] font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
