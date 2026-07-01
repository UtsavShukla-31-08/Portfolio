import { useEffect, useRef, useState } from 'react'

// ── Typewriter hook ──────────────────────────────────────────────
const WORDS = [
  'beautiful interfaces',
  'immersive experiences',
  'pixel-perfect UIs',
  'scalable design systems',
  'delightful interactions',
]

function useTypewriter() {
  const [display, setDisplay]  = useState('')
  const wordIdx  = useRef(0)
  const charIdx  = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    const tick = () => {
      const word = WORDS[wordIdx.current]
      if (deleting.current) {
        setDisplay(word.substring(0, charIdx.current - 1))
        charIdx.current--
      } else {
        setDisplay(word.substring(0, charIdx.current + 1))
        charIdx.current++
      }

      if (!deleting.current && charIdx.current === word.length) {
        deleting.current = true
        return setTimeout(tick, 1800)
      }
      if (deleting.current && charIdx.current === 0) {
        deleting.current = false
        wordIdx.current  = (wordIdx.current + 1) % WORDS.length
      }
      setTimeout(tick, deleting.current ? 50 : 90)
    }

    const id = setTimeout(tick, 2000)
    return () => clearTimeout(id)
  }, [])

  return display
}

// ── Magnetic button hook ─────────────────────────────────────────
function useMagnetic(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width  / 2
      const y = e.clientY - rect.top  - rect.height / 2
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2 - 3}px)`
    }
    const onLeave = () => { el.style.transform = '' }
    el.addEventListener('mousemove',  onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove',  onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])
}

// ── Hero illustration SVG ────────────────────────────────────────
function HeroIllustration() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor frame */}
      <rect x="30" y="60" width="140" height="100" rx="8"
        fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <rect x="38" y="68" width="124" height="76" rx="4"
        fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      {/* Screen content */}
      <line x1="50" y1="85"  x2="110" y2="85"  stroke="#C4922A" strokeWidth="1.5" opacity="0.7"/>
      <line x1="50" y1="98"  x2="140" y2="98"  stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="50" y1="108" x2="125" y2="108" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="50" y1="118" x2="135" y2="118" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="50" y1="128" x2="100" y2="128" stroke="#C4922A" strokeWidth="1" opacity="0.5"/>
      {/* Stand */}
      <line x1="100" y1="160" x2="100" y2="180" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <line x1="76"  y1="180" x2="124" y2="180" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      {/* Blinking cursor */}
      <rect x="112" y="82" width="1.5" height="10" fill="#C4922A" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite"/>
      </rect>
      {/* Code brackets */}
      <text x="18"  y="145" fill="#C4922A" fontSize="28" opacity="0.4" fontFamily="monospace">{'{'}</text>
      <text x="168" y="145" fill="#C4922A" fontSize="28" opacity="0.4" fontFamily="monospace">{'}'}</text>
      {/* Floating dots */}
      <circle cx="165" cy="68" r="3" fill="#C4922A" opacity="0.5">
        <animate attributeName="cy" values="68;62;68" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="175" cy="80" r="2" fill="#C4922A" opacity="0.3">
        <animate attributeName="cy" values="80;74;80" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="35" cy="72" r="2" fill="#C4922A" opacity="0.3">
        <animate attributeName="cy" values="72;66;72" dur="5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}

// ── Hero component ───────────────────────────────────────────────
export default function Hero() {
  const typed    = useTypewriter()
  const primaryRef  = useRef(null)
  const outlineRef  = useRef(null)
  useMagnetic(primaryRef)
  useMagnetic(outlineRef)

  return (
    <section id="hero" role="banner">
      <div className="container">
        <div className="hero__inner">

          {/* ── Text content ── */}
          <div className="hero__content">
            {/* Available badge */}
            <div className="hero__available">
              <span className="dot" />
              Available for freelance
            </div>

            {/* Name */}
            <h1 className="hero__name">
              Utsav<br />
              <span className="line2">Shukla</span>
            </h1>

            <p className="hero__title">Frontend Developer &amp; UI/UX </p>

            {/* Tagline with typewriter */}
            <p className="hero__tagline">
              I craft{' '}
              <span className="typewriter">{typed}</span>
              <br />
              that users love and businesses trust.
            </p>

            {/* CTA buttons */}
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary" ref={primaryRef}>
                <i className="fa-solid fa-eye" /> View Work
              </a>
              <a href="#contact" className="btn btn--outline" ref={outlineRef}>
                <i className="fa-solid fa-paper-plane" /> Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="hero__stats">
              {[
                { value: '5',  suffix: '+', label: 'Years Exp.'    },
                { value: '40', suffix: '+', label: 'Projects Done' },
                { value: '30', suffix: '+', label: 'Happy Clients' },
              ].map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="hero__stat-value">
                    {value}<span>{suffix}</span>
                  </div>
                  <div className="hero__stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="hero__visual">
            <div className="hero__avatar-wrap">
              <div className="hero__avatar-bg" />
              <div className="hero__avatar">
                <div className="hero__illustration">
                  <HeroIllustration />
                </div>
              </div>

              {/* Floating badges */}
              <div className="hero__badge hero__badge--1">
                <i className="fa-brands fa-figma" /> Figma Pro
              </div>
              <div className="hero__badge hero__badge--2">
                <i className="fa-brands fa-react" /> React Dev
              </div>
              <div className="hero__badge hero__badge--3">
                <i className="fa-solid fa-star" /> 5.0 Rating
              </div>
            </div>
          </div>

        </div>{/* /.hero__inner */}
      </div>{/* /.container */}

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
