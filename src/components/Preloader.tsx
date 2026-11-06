import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data'

/** Branded intro curtain that lifts once the page is ready. */
export function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setDone(true), reduce ? 80 : 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-sm font-semibold tracking-tight text-white"
            >
              vineeth<span className="text-brand-400">.</span>dev
            </motion.div>

            <div className="mx-auto mt-4 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full bg-gradient-to-r from-brand-500 via-brand-300 to-accent-400"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-4 font-mono text-[9px] uppercase tracking-[0.28em] text-slate-600"
            >
              {profile.role}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
