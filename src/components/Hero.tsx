import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, FileDown, Mail, MapPin, Sparkles, Terminal } from 'lucide-react'
import { Github, Linkedin } from './ui/BrandIcons'
import { useRef } from 'react'
import { marqueeSkills, profile, stats } from '../data'
import { AnimatedWords, Reveal } from './ui/Reveal'
import { CountUp } from './ui/CountUp'
import { Magnetic } from './ui/TiltCard'

const BASE = 0.95 // waits for the intro curtain to lift

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), { stiffness: 100, damping: 30 })
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <motion.div style={reduce ? undefined : { y, opacity }} className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ---------- copy ---------- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: BASE + 0.05 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-400/25 bg-brand-400/[0.07] py-1.5 pl-2 pr-3.5"
            >
              <span className="relative grid h-5 w-5 place-items-center">
                <span className="absolute inset-0 animate-pulseRing rounded-full bg-brand-400/50" />
                <span className="h-2 w-2 rounded-full bg-brand-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-200">
                {profile.availability}
              </span>
            </motion.div>

            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.2rem]">
              <AnimatedWords text="Hi, I'm" delay={BASE + 0.15} stagger={0.05} />{' '}
              <span className="relative inline-block">
                <AnimatedWords
                  text="Vineeth"
                  delay={BASE + 0.26}
                  className="bg-gradient-to-r from-brand-200 via-brand-300 to-brand-400 bg-clip-text text-transparent"
                />
                <motion.svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-400/70"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8c40-5 90-6 140-3 25 1.5 50 4 76 2"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: BASE + 0.9, ease: 'easeInOut' }}
                  />
                </motion.svg>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: BASE + 0.55 }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] uppercase tracking-[0.14em] text-slate-400"
            >
              <span className="text-brand-300">{profile.role}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Full Stack</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>AI Automation</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: BASE + 0.63 }}
              className="mt-6 max-w-xl text-pretty text-[15px] leading-[1.75] text-slate-400 sm:text-base"
            >
              I build responsive web applications and AI-powered tools — turning messy problems into
              clean, reliable software. Currently finishing my B.Tech in Computer Science while shipping
              full-stack and agent-based projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: BASE + 0.72 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a href="#projects" className="btn-primary group">
                  View my work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost group">
                  <FileDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </Magnetic>

              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: profile.links.github, icon: Github, label: 'GitHub' },
                  { href: profile.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* stats */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: BASE + 0.85 }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-white/[0.07] pt-7 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display text-xl font-semibold text-white">
                      <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
                    </span>
                    <p className="mt-0.5 font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-slate-500">
                      {s.label}
                    </p>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---------- portrait ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: BASE + 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
          >
            <PortraitCard />
          </motion.div>
        </div>

        {/* ---------- skill marquee ---------- */}
        <div className="relative mt-20 border-y border-white/[0.07] py-5 sm:mt-24">
          <div className="mask-fade-x flex overflow-hidden">
            <div className="flex animate-marquee">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                  {marqueeSkills.map((s) => (
                    <span
                      key={`${copy}-${s}`}
                      className="flex shrink-0 items-center gap-10 px-5 font-display text-sm font-medium tracking-tight text-slate-500"
                    >
                      {s}
                      <span className="h-1 w-1 rounded-full bg-brand-400/40" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function PortraitCard() {
  const reduce = useReducedMotion()

  return (
    <div className="group relative">
      {/* glow ring */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-transparent to-accent-500/20 blur-2xl transition-opacity duration-700 group-hover:opacity-80 lg:opacity-60" />

      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-b from-ink-800 to-ink-900 p-2.5 shadow-card">
          <div className="relative overflow-hidden rounded-[1.35rem]">
            <img
              src={profile.photo}
              alt="Portrait of Vineeth Kumar Reddy Pasala"
              className="aspect-[4/5] w-full object-cover object-[center_20%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              loading="eager"
            />
            {/* harmonising tint so the studio white sits inside the dark theme */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink-950/45 via-transparent to-brand-400/[0.06]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/[0.08]" />
          </div>

          {/* name plate */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-300/90">
                  B.Tech · CSE · 2027
                </p>
                <p className="mt-1 font-display text-lg font-semibold leading-tight text-white">
                  Vineeth Kumar Reddy
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin size={11} /> {profile.location}
                </p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">
                <Sparkles size={15} className="text-brand-300" />
              </div>
            </div>
          </div>
        </div>

        {/* floating badge: code */}
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -left-4 top-[22%] hidden rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 shadow-xl backdrop-blur-md sm:block"
        >
          <div className="flex items-center gap-1.5">
            <Terminal size={12} className="text-brand-400" />
            <span className="font-mono text-[10px] text-slate-300">Java · Python · React</span>
          </div>
        </motion.div>

        {/* floating badge: genai */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute -right-3 top-[12%] rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 shadow-xl backdrop-blur-md"
        >
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">GenAI</p>
          <p className="font-display text-xs font-semibold text-brand-300">22 badges</p>
        </motion.div>

        {/* floating: internship */}
        <motion.div
          animate={reduce ? undefined : { y: [0, 9, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute -bottom-5 -right-2 hidden items-center gap-2 rounded-xl border border-brand-400/25 bg-ink-900/95 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:flex"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-400/15">
            <Sparkles size={13} className="text-brand-300" />
          </span>
          <div>
            <p className="font-display text-[11px] font-semibold text-white">AI Automation</p>
            <p className="font-mono text-[9px] uppercase tracking-wide text-slate-500">Intern · 2026</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
