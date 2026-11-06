import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

/** Soft aurora blobs + grid that sit behind the whole page. */
export function Backdrop() {
  const reduce = useReducedMotion()
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.55] mask-fade-b"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 100% 60% at 50% 0%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 60% at 50% 0%, black 20%, transparent 75%)',
        }}
      />

      {/* aurora */}
      <motion.div
        className="absolute -left-[15%] -top-[20%] h-[55vw] w-[55vw] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(24,179,132,0.22), rgba(24,179,132,0.05) 55%, transparent 70%)',
        }}
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[10%] top-[8%] h-[45vw] w-[45vw] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(59,130,246,0.16), rgba(59,130,246,0.04) 55%, transparent 70%)',
        }}
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/3 top-[55%] h-[40vw] w-[40vw] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(20,120,200,0.12), transparent 68%)',
        }}
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,6,10,0.85)_100%)]" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  )
}

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-brand-500 via-brand-300 to-accent-400"
    />
  )
}

/** Cursor-following spotlight visible on large screens. */
export function CursorGlow() {
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (reduce) return
    if (!window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) return
    setEnabled(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduce])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(63,206,157,0.055), transparent 62%)`,
      }}
    />
  )
}
