import { useEffect, useRef, useState } from 'react'

/**
 * Custom cursor — a dot that follows the mouse exactly,
 * and a ring that lags slightly behind for a premium feel.
 */
export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  // Track positions separately for lag effect
  const cursorPos = useRef({ x: 0, y: 0 })
  const ringPos   = useRef({ x: 0, y: 0 })
  const rafId     = useRef(null)

  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Move dot instantly
    const onMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    // Smooth ring follow
    const animate = () => {
      const dx = cursorPos.current.x - ringPos.current.x
      const dy = cursorPos.current.y - ringPos.current.y
      ringPos.current.x += dx * 0.12
      ringPos.current.y += dy * 0.12
      ring.style.left = ringPos.current.x + 'px'
      ring.style.top  = ringPos.current.y + 'px'
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    // Hover on interactive elements
    const hoverEls = document.querySelectorAll(
      'a, button, .skill-card, .project-card, .tech-item, .social-link, .filter-btn'
    )
    const onEnter = () => setIsHover(true)
    const onLeave = () => setIsHover(false)
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const onDown  = () => setIsClick(true)
    const onUp    = () => setIsClick(false)
    const onLeaveDoc = () => setVisible(false)
    const onEnterDoc = () => setVisible(true)

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onLeaveDoc)
    document.addEventListener('mouseenter', onEnterDoc)

    return () => {
      cancelAnimationFrame(rafId.current)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onLeaveDoc)
      document.removeEventListener('mouseenter', onEnterDoc)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  const cursorClass = [
    'cursor',
    isHover ? 'cursor--hover' : '',
    isClick ? 'cursor--click' : '',
  ].join(' ').trim()

  return (
    <div
      className={cursorClass}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className="cursor__dot"  ref={dotRef}  />
      <div className="cursor__ring" ref={ringRef} />
    </div>
  )
}
