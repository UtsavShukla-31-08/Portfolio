import { useState } from 'react'

/**
 * Fixed top navbar with:
 * - Logo
 * - Desktop nav links (with active highlight)
 * - Theme toggle
 * - Hire Me CTA
 * - Hamburger + slide-in mobile menu
 */
export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const links = [
    { href: '#about',      label: 'About'      },
    { href: '#projects',   label: 'Work'        },
    { href: '#experience', label: 'Experience'  },
    { href: '#contact',    label: 'Contact'     },
  ]

  const sectionId = (href) => href.replace('#', '')

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className="nav__logo">
          Utsav<span>.</span>
        </a>

        {/* Desktop links */}
        <ul className="nav__links" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === sectionId(href) ? 'active' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="nav__right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          </button>

          <a href="#contact" className="nav__cta">Hire Me</a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="mobile-link" onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
