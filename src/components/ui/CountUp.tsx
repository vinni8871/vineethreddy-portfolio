import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export function CountUp({
  to,
  decimals = 0,
  duration = 1600,
  suffix = '',
  prefix = '',
  className = '',
}: {
  to: number
  decimals?: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/** Horizontal animated skill meter. */
export function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <div className="group/skill">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-slate-200">{name}</span>
        <span className="font-mono text-[10px] text-slate-500 transition-colors group-hover/skill:text-brand-300">
          {level}%
        </span>
      </div>
      <div className="h-[5px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-300"
        >
          <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_12px_2px_rgba(63,206,157,0.6)] transition-opacity duration-300 group-hover/skill:opacity-100" />
        </motion.div>
      </div>
    </div>
  )
}
