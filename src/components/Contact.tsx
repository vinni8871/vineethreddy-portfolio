import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, FileDown, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Github, Linkedin } from './ui/BrandIcons'
import { useState } from 'react'
import { profile } from '../data'
import { Reveal } from './ui/Reveal'
import { Magnetic } from './ui/TiltCard'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const channels = [
    { icon: Github, label: 'GitHub', value: 'vinni8871', href: profile.links.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'Vineeth Kumar Reddy Pasala', href: profile.links.linkedin },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-ink-850 to-ink-900 p-7 sm:p-12 lg:p-16">
          {/* decorative */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent-500/15 blur-[90px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse at 50% 0%, black, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black, transparent 70%)',
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <Reveal direction="none">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-400/10 px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-brand-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-200">
                    Available for opportunities
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
                  Let's build
                  <br />
                  <span className="gradient-text">something useful.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-slate-400">
                  I'm actively looking for software engineering roles and internships. If you have a
                  problem worth solving — or just want to talk code — my inbox is open.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <a href={`mailto:${profile.email}`} className="btn-primary group">
                      <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                      Send an email
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
                      <FileDown size={15} />
                      Resume
                    </a>
                  </Magnetic>
                </div>
              </Reveal>

              {/* email chip */}
              <Reveal delay={0.24}>
                <button
                  onClick={copyEmail}
                  className="group mt-6 flex w-full max-w-sm items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-left transition-all duration-300 hover:border-brand-400/35 hover:bg-brand-400/[0.06]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-400/10">
                    <Mail size={14} className="text-brand-300" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </span>
                    <span className="block truncate text-[13px] text-slate-200">{profile.email}</span>
                  </span>
                  <span className="shrink-0 text-slate-500 transition-colors group-hover:text-brand-300">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </span>
                </button>
              </Reveal>

              <Reveal delay={0.28}>
                <p className="mt-4 flex items-center gap-1.5 text-[11.5px] text-slate-500">
                  <MapPin size={11} /> {profile.location} · Open to relocation
                </p>
              </Reveal>
            </div>

            {/* channels */}
            <div className="flex flex-col justify-center gap-2.5">
              {channels.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 5, transition: { type: 'spring', stiffness: 320, damping: 26 } }}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 transition-colors duration-300 hover:border-brand-400/30 hover:bg-brand-400/[0.06]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-brand-400/30">
                    <Icon size={15} className="text-slate-300 transition-colors group-hover:text-brand-300" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate text-[13px] text-slate-200">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300"
                  />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-2 rounded-xl border border-dashed border-white/[0.1] px-4 py-3.5"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                  Also on
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    { label: 'LeetCode', href: profile.links.leetcode },
                    { label: 'HackerRank', href: profile.links.hackerrank },
                    { label: 'ByteXL', href: profile.links.bytexl },
                  ].map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="chip chip-hover">
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] py-10">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-brand-400/25 bg-brand-400/10 font-display text-xs font-bold text-brand-300">
              V
            </span>
            <div>
              <p className="font-display text-[13px] font-semibold text-white">
                {profile.name}
              </p>
              <p className="font-mono text-[10px] text-slate-600">
                Built with React, TypeScript & Tailwind
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-white/5 hover:text-brand-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] text-slate-600">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
