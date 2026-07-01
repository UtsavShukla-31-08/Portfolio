import { useEffect, useRef, useState } from 'react'

/**
 * Full-screen loader shown on first mount.
 * Calls onDone() when the animation completes.
 */
export default function Loader({ onDone }) {
  const [progress, setProgress]   = useState(0)
  const [hidden,   setHidden]     = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden'

    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15
        if (next >= 100) {
          clearInterval(intervalRef.current)
          // Small delay then hide
          setTimeout(() => {
            setHidden(true)
            document.body.style.overflow = ''
            setTimeout(onDone, 600) // wait for fade-out transition
          }, 300)
          return 100
        }
        return next
      })
    }, 120)

    return () => {
      clearInterval(intervalRef.current)
      document.body.style.overflow = ''
    }
  }, [onDone])

  return (
    <div id="loader" className={hidden ? 'hidden' : ''} role="status" aria-label="Loading">
      <div className="loader__name">Utsav Shukla</div>
      <div className="loader__bar-wrap">
        <div className="loader__bar" />
      </div>
      <div className="loader__count">{Math.floor(progress)}%</div>
    </div>
  )
}
