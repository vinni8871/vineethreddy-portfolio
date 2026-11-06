import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 28,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.25,
}: {
  children: ReactNode
  delay?: number
  direction?: Direction
  distance?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}) {
  const reduce = useReducedMotion()
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction]

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(6px)', ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Splits a string into words that rise into place one by one. */
export function AnimatedWords({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.055,
  once = true,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  once?: boolean
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            aria-hidden
            className={`inline-block ${wordClassName}`}
            initial={reduce ? undefined : { y: '110%', opacity: 0, rotate: 4 }}
            animate={reduce ? undefined : { y: '0%', opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
