import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState } from 'react'
import { About } from './components/About'
import { Backdrop, CursorGlow, ScrollProgress } from './components/Backdrop'
import { Contact, Footer } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <Preloader />
      <Backdrop />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

function BackToTop() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700))

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-900/85 text-slate-300 shadow-xl backdrop-blur-md transition-colors hover:border-brand-400/40 hover:text-brand-300 sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
