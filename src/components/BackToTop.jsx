import { useEffect, useState } from 'react'

/**
 * Back-to-top button — fades in when user scrolls past 600px
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`back-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  )
}
