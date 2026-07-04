/**
 * About section
 * – Sticky portrait with decorative frame
 * – Availability badge
 * – Intro text
 * – Skill cards grid
 * – Animated skill progress bars (triggered by scroll reveal in App.jsx)
 */
export default function About() {
  const skills = [
    { icon: 'fa-solid fa-pen-nib',        name: 'UI/UX Design',      level: 'Expert'   },
    { icon: 'fa-brands fa-react',          name: 'React / Next.js',   level: 'Expert'   },
    { icon: 'fa-brands fa-figma',          name: 'Figma',             level: 'Expert'   },
    { icon: 'fa-brands fa-js',             name: 'TypeScript',        level: 'Advanced' },
    { icon: 'fa-brands fa-css3-alt',       name: 'CSS / Tailwind',    level: 'Expert'   },
    { icon: 'fa-solid fa-mobile-screen',   name: 'Responsive Design', level: 'Expert'   },
  ]

  const bars = [
    { name: 'UI/UX Design & Research',      pct: 95 },
    { name: 'React / Next.js',              pct: 90 },
    { name: 'TypeScript / JavaScript',      pct: 88 },
    { name: 'Figma & Design Systems',       pct: 93 },
  ]

  return (
    <section id="about">
      <div className="container">
        <div className="about__inner">

          {/* ── Portrait ── */}
          <div className="about__portrait reveal">
            <div className="about__img-frame">
              <div className="about__img-inner">
                <div className="about__img-pattern" />
                <div className="about__img-overlay">
                  {/* Abstract portrait illustration */}
                  <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="80" cy="65" rx="32" ry="36"
                      fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
                    <path d="M30 190 Q30 140 80 130 Q130 140 130 190"
                      fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
                    <circle cx="69" cy="61" r="3.5" fill="#C4922A" opacity="0.6"/>
                    <circle cx="91" cy="61" r="3.5" fill="#C4922A" opacity="0.6"/>
                    <path d="M70 79 Q80 87 90 79"
                      stroke="#C4922A" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round"/>
                    <line x1="10"  y1="100" x2="50"  y2="100" stroke="#C4922A" strokeWidth="1" opacity="0.2"/>
                    <line x1="110" y1="100" x2="150" y2="100" stroke="#C4922A" strokeWidth="1" opacity="0.2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="about__availability reveal delay-2">
              <div className="about__avail-icon">
                <i className="fa-solid fa-check" />
              </div>
              <div className="about__avail-text">
                <strong>Open to opportunities</strong>
                Remote &amp; Hybrid roles worldwide
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="about__content">
            <div className="reveal">
              <div className="section-label">About Me</div>
              <h2 className="section-heading">
                Crafting <em>digital</em><br />experiences with purpose
              </h2>
            </div>

            <p className="about__intro reveal delay-1">
              I'm a <em> Frontend Developer &amp; UI/UX Designer</em> passionate about turning complex problems into elegant, user-centered digital experiences.
             </p>

            <p className="about__body reveal delay-2">
              My journey began in graphic design, evolved into UX research, and landed in
              frontend engineering — giving me a rare end-to-end perspective. I believe the
              best digital products live at the intersection of beauty, functionality, and empathy.
              <br /><br />
               I use Figma for design and bring those designs to life using HTML, TailwindCSS,JavaScript, and React.js.
               Right now, I’m focused on learning, building, and growing in both design and development.
            </p>

            {/* Skill cards */}
            <p className="skills__title reveal delay-3">Core Expertise</p>
            <div className="skills__grid reveal delay-3">
              {skills.map(({ icon, name, level }) => (
                <div className="skill-card" key={name}>
                  <div className="skill-icon"><i className={icon} /></div>
                  <div>
                    <div className="skill-name">{name}</div>
                    <div className="skill-level">{level}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated skill bars — .animated class is added by scroll observer in App.jsx */}
            <div className="skill-bars reveal delay-4" id="skillBarsContainer">
              {bars.map(({ name, pct }) => (
                <div className="skill-bar" key={name}>
                  <div className="skill-bar__label">
                    <span className="skill-bar__name">{name}</span>
                    <span className="skill-bar__pct">{pct}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{ '--target-width': `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
