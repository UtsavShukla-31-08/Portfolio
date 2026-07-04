/**
 * Experience section
 * – Animated timeline (left column)
 * – Tech-stack icon grid (right column)
 * – Education timeline
 */

const TIMELINE = [
  {
    role:    'Frontend Developer',
    desc:    'Building responsive websites and interactive UI projects using React, JavaScript, and TailwindCSS. Learning modern frontend development and improving problem-solving skills through personal projects.',
  },
  {
    role:    'UI/UX Designer & Developer',
    desc:    'Designed portfolio websites, landing pages, and mobile UI concepts using Figma. Focused on clean layouts, animations, and user-friendly experiences..',
  },
  
]

const TECH = [
  { icon: <i className="fa-brands fa-react"    style={{ color: '#61DAFB' }} />, name: 'React'      },
  { icon: <span style={{ fontSize: '1.4rem' }}>▲</span>,                         name: 'Next.js'    },
  { icon: <i className="fa-brands fa-js"       style={{ color: '#F7DF1E' }} />, name: 'TypeScript' },
  { icon: <i className="fa-brands fa-figma"    style={{ color: '#A259FF' }} />, name: 'Figma'      },
  { icon: <span>🎨</span>,                                                        name: 'Tailwind'   },
  { icon: <i className="fa-brands fa-node-js"  style={{ color: '#68A063' }} />, name: 'Node.js'    },
  { icon: <span>🔥</span>,                                                        name: 'Framer'     },
  { icon: <i className="fa-brands fa-git-alt"  style={{ color: '#F05032' }} />, name: 'Git'        },
  { icon: <span>🐘</span>,                                                        name: 'PostgreSQL' },
  { icon: <i className="fa-brands fa-sass"     style={{ color: '#CC6699' }} />, name: 'Sass/CSS'   },
  { icon: <span>⚡</span>,                                                        name: 'Vite'       },
  { icon: <span>📦</span>,                                                        name: 'Storybook'  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <div className="section-label">Experience</div>
          <h2 className="section-heading">
            Where I've <em>made</em><br />my mark
          </h2>
        </div>

        <div className="experience__inner">

          {/* ── Timeline ── */}
          <div className="reveal">
            <div className="timeline">
              {TIMELINE.map(({ date, role, company, desc }) => (
                <div className="timeline-item" key={role}>
                  <div className="timeline-item__date">{date}</div>
                  <div className="timeline-item__role">{role}</div>
                  <div className="timeline-item__company">{company}</div>
                  <p className="timeline-item__desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tech stack + Education ── */}
          <div>
            <p className="skills__title reveal">Tech Stack</p>
            <div className="tech-grid reveal delay-1">
              {TECH.map(({ icon, name }) => (
                <div className="tech-item" key={name}>
                  <div className="tech-item__icon">{icon}</div>
                  <div className="tech-item__name">{name}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="reveal delay-3" style={{ marginTop: '48px' }}>
              <p className="skills__title">Education</p>
              <div className="timeline" style={{ paddingLeft: '28px' }}>
                <div className="timeline-item">
                  <div className="timeline-item__date">2020 — 2023</div>
                  <div className="timeline-item__role" style={{ fontSize: '1.2rem' }}>
                    N.G. Patel Polytechnic
                  </div>
                  {/* <div className="timeline-item__company">University of Edinburgh</div> */}
                  <p className="timeline-item__desc">
                     Computer Engineering 
                     </p>

                    <div className="timeline-item__date">2023 — 2026</div>
                  <div className="timeline-item__role" style={{ fontSize: '1.2rem' }}>
                    P P Savani University
                    </div>
                    <p className="timeline-item__desc">
                    B.Tech Computer Science Engineering  
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
