import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

/**
 * Card that tilts in 3D toward the cursor and carries a spotlight highlight.
 */
export function TiltCard({
  children,
  className = '',
  intensity = 8,
  glow = 'rgba(63,206,157,0.18)',
}: {
  children: ReactNode
  className?: string
  intensity?: number
  glow?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const rx = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 })
  const ry = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 })
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, ${glow}, transparent 65%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px * 100)
    my.set(py * 100)
    ry.set((px - 0.5) * intensity * 2)
    rx.set(-(py - 0.5) * intensity * 2)
  }

  function onLeave() {
    rx.set(0)
    ry.set(0)
    mx.set(50)
    my.set(50)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`group relative ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  )
}

/** Magnetic wrapper for buttons — nudges toward the cursor. */
export function Magnetic({
  children,
  strength = 14,
  className = '',
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 220, damping: 20 })
  const y = useSpring(0, { stiffness: 220, damping: 20 })

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { x, y }}
      className={className}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2)
        y.set(((e.clientY - r.top) / r.height - 0.5) * strength * 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
