import { useState, useEffect } from 'react'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import ThreeBackground from './components/ThreeBackground.jsx' // ✅ Import this

export default function App() {
  // ── Theme ────────────────────────────────────────────────────
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  // ── Loader ───────────────────────────────────────────────────
  const [loaded, setLoaded] = useState(false)

  // ── Scroll-reveal (IntersectionObserver on .reveal elements) ─
  useEffect(() => {
    if (!loaded) return

    const els = document.querySelectorAll('.reveal')

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')

            // Animate skill bars
            if (e.target.id === 'skillBarsContainer') {
              document
                .querySelectorAll('.skill-bar__fill')
                .forEach(f =>
                  setTimeout(() => f.classList.add('animated'), 100)
                )
            }
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    els.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [loaded])

  // ── Active-nav section highlight ─────────────────────────────
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (!loaded) return

    const sections = document.querySelectorAll('section[id]')

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach(s => obs.observe(s))

    return () => obs.disconnect()
  }, [loaded])

  return (
    <>
      <Cursor />
      <Loader onDone={() => setLoaded(true)} />

      {loaded && (
        <>
          {/* ✅ Three.js Background */}
          <ThreeBackground />

          {/* ✅ Navbar */}
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            activeSection={activeSection}
          />

          {/* ✅ Main Content */}
          <main style={{ position: 'relative', zIndex: 10 }}>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  )
}