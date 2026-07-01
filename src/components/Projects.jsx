import { useState } from 'react'

// ── Mock browser UI inside each card ────────────────────────────
function MockUI({ accent, lineColor, cardColor, cardBorder, miniCardHeight = '40px', extraLines = [] }) {
  return (
    <div className={`project-card__img ${accent}`}>
      <div className="project-img-inner">
        <div className="project-mock">
          <div className="project-mock__bar">
            <div className="project-mock__dot" style={{ background: '#ff5f57' }} />
            <div className="project-mock__dot" style={{ background: '#febc2e' }} />
            <div className="project-mock__dot" style={{ background: '#28c840' }} />
          </div>
          <div className="project-mock__content">
            <div className="project-mock__line" style={{ width: '60%', background: lineColor }} />
            {extraLines.map((w, i) => (
              <div key={i} className="project-mock__line" style={{ width: w }} />
            ))}
            <div className="project-mock__card-row">
              <div className="project-mock__mini-card"
                style={{ height: miniCardHeight, background: cardColor, borderColor: cardBorder }} />
              <div className="project-mock__mini-card"
                style={{ height: miniCardHeight, background: cardColor, borderColor: cardBorder }} />
              <div className="project-mock__mini-card"
                style={{ height: miniCardHeight, background: cardColor, borderColor: cardBorder }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Project data ─────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    number: '01 / Featured',
    title: 'E-Commerece Website',
    desc: 'A comprehensive design system and component library built for scale. Includes 200+ components, dark/light theming, accessibility-first patterns, and Figma + code token sync.',
    tags: ['React', 'TypeScript', 'Storybook', 'Figma', 'Design Tokens'],
    category: 'UI/UX',
    layout: 'featured',
    accent: 'project-accent-1',
    lineColor: 'rgba(196,146,42,0.4)',
    cardColor: 'var(--gold-dim)',
    cardBorder: 'var(--border-hover)',
    extraLines: ['90%', '75%'],
    github: 'https://github.com/UtsavShukla-31-08',
  },
  {
    id: 2,
    number: '02',
    title: 'Auto Assist',
    desc: 'Personal finance management SaaS with real-time charts, budget tracking, and AI-powered spending insights.',
    tags: ['Next.js', 'Recharts', 'Tailwind'],
    category: 'Frontend',
    layout: 'side',
    accent: 'project-accent-2',
    lineColor: 'rgba(74,222,128,0.4)',
    cardColor: 'rgba(74,222,128,0.15)',
    cardBorder: 'rgba(74,222,128,0.3)',
    extraLines: ['100%', '85%'],
    miniCardHeight: '40px',
    hideLast: true,
    github: 'https://github.com/UtsavShukla-31-08',
  },
  {
    id: 3,
    number: '03',
    title: 'Secure Cert',
    desc: 'AI-powered creative tool that generates mood boards and color palettes from natural language descriptions.',
    tags: ['React', 'OpenAI API', 'Framer Motion'],
    category: 'Frontend',
    layout: 'half',
    accent: 'project-accent-3',
    lineColor: 'rgba(220,100,100,0.4)',
    cardColor: 'rgba(220,100,100,0.1)',
    cardBorder: 'rgba(220,100,100,0.3)',
    extraLines: [],
    miniCardHeight: '60px',
    github: 'https://github.com/UtsavShukla-31-08',
  },
  {
    id: 4,
    number: '04',
    title: 'Luxury Car Website',
    desc: 'Full-stack travel planning app with itinerary builder, budget tracker, and collaborative trip sharing.',
    tags: ['Next.js', 'Supabase', 'Maps API'],
    category: 'Full-stack',
    layout: 'half',
    accent: 'project-accent-4',
    lineColor: 'rgba(56,189,248,0.4)',
    cardColor: 'rgba(56,189,248,0.1)',
    cardBorder: 'rgba(56,189,248,0.3)',
    extraLines: ['100%'],
    miniCardHeight: '50px',
    github: 'https://github.com/UtsavShukla-31-08',
  },
]

const FILTERS = ['All', 'UI/UX', 'Frontend', 'Full-stack']

const layoutClass = {
  featured: 'project-card--featured',
  side:     'project-card--side',
  half:     'project-card--half',
}

// ── Projects component ───────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visible = PROJECTS.filter(
    p => activeFilter === 'All' || p.category === activeFilter
  )

  return (
    <section id="projects">
      <div className="container">

        {/* Header */}
        <div className="projects__header">
          <div className="reveal">
            <div className="section-label">Selected Work</div>
            <h2 className="section-heading">
              Projects that<br /><em>made an impact</em>
            </h2>
          </div>
          <div className="projects__filter reveal delay-2">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="projects__grid">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className={`project-card ${layoutClass[p.layout]} reveal${i > 0 ? ` delay-${i}` : ''}`}
              aria-label={`${p.title} project`}
            >
              {/* Mock browser image */}
              <MockUI
                accent={p.accent}
                lineColor={p.lineColor}
                cardColor={p.cardColor}
                cardBorder={p.cardBorder}
                miniCardHeight={p.miniCardHeight}
                extraLines={p.extraLines}
              />

              {/* Body */}
              <div className="project-card__body">
                <div className="project-card__number">{p.number}</div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>

                <div className="project-card__tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

                <div className="project-card__links">
                  <a href="#" className="project-link" aria-label={`Live demo of ${p.title}`}>
                    Live Demo <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                  <a href="https://github.com/UtsavShukla-31-08" className="project-link" aria-label={`GitHub for ${p.title}`}>
                    GitHub <i className="fa-brands fa-github" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
