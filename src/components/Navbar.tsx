import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, FileDown } from 'lucide-react'
import { useState } from 'react'
import { navItems, profile } from '../data'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollY } = useScroll()
  const active = useActiveSection(navItems.map((n) => n.id))

  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 40))

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            solid
              ? 'border-b border-white/[0.07] bg-ink-950/75 backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <nav className="container-x flex h-16 items-center justify-between sm:h-[72px]">
            {/* logo */}
            <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-brand-400/30 bg-brand-400/10">
                <span className="font-display text-sm font-bold text-brand-300">V</span>
                <span className="absolute inset-0 translate-y-full bg-brand-400/15 transition-transform duration-500 group-hover:translate-y-0" />
              </span>
              <span className="hidden font-display text-[15px] font-semibold tracking-tight text-white sm:block">
                vineeth<span className="text-brand-400">.</span>dev
              </span>
            </a>

            {/* desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                      active === item.id ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {active === item.id && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full border border-white/[0.09] bg-white/[0.06]"
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-slate-200 transition-all duration-300 hover:border-brand-400/40 hover:bg-brand-400/10 hover:text-brand-200 sm:inline-flex"
              >
                <FileDown size={14} />
                Resume
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 lg:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="nav-sheet"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3 top-[72px] z-50 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                    active === item.id
                      ? 'bg-brand-400/10 text-brand-200'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  <span className="font-mono text-[10px] text-slate-600">
                    0{navItems.findIndex((n) => n.id === item.id) + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand-400 px-4 py-3 text-sm font-semibold text-ink-950"
              >
                <FileDown size={15} /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
