import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  action?: ReactNode
}) {
  const centered = align === 'center'
  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        <Reveal direction="none" duration={0.6}>
          <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
            <span className="h-px w-8 bg-brand-400/60" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title mt-4 text-balance">{title}</h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className={`muted mt-4 max-w-xl text-pretty ${centered ? 'mx-auto' : ''}`}>{description}</p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.15}>{action}</Reveal>}
    </div>
  )
}

/** Thin animated rule used to separate blocks. */
export function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'left' }}
      className="h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent"
    />
  )
}
