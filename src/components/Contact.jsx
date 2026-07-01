import { useState, useRef } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  const submitRef = useRef(null)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      const btn = submitRef.current

      if (btn) {
        btn.style.animation = 'shake 0.4s ease'
        setTimeout(() => {
          btn.style.animation = ''
        }, 400)
      }

      return
    }

    setStatus('sending')

    setTimeout(() => {
      setStatus('success')

      setTimeout(() => {
        setStatus('idle')
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }, 3000)
    }, 1500)
  }

  const btnLabel =
    status === 'sending'
      ? 'Sending...'
      : status === 'success'
      ? 'Message Sent!'
      : 'Send Message'

  const btnIcon =
    status === 'sending'
      ? 'fa-solid fa-spinner fa-spin'
      : status === 'success'
      ? 'fa-solid fa-check'
      : 'fa-solid fa-paper-plane'

  const btnStyle = status === 'success' ? { background: '#4ADE80' } : {}

  const socials = [
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      link: 'https://github.com/UtsavShukla-31-08',
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/utsavshukla',
    },
    {
      icon: 'fa-brands fa-x-twitter',
      label: 'Twitter/X',
      link: 'https://twitter.com/utsavshukla',
    },
    {
      icon: 'fa-brands fa-dribbble',
      label: 'Dribbble',
      link: 'https://dribbble.com/utsavshukla',
    },
  ]

  return (
    <section id="contact">
      <div className="container">
        <div className="contact__inner">

          <div className="contact__left">
            <div className="reveal">
              <div className="section-label">Get In Touch</div>

              <h2 className="section-heading">
                Let's build
                <br />
                something <em>great</em>
              </h2>
            </div>

            <p
              className="section-subtext reveal delay-1"
              style={{ marginTop: '20px', marginBottom: '32px' }}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — my inbox is always open.
            </p>

            <a
              href="mailto:utsavjshukla@gmail.com"
              className="contact__email reveal delay-2"
            >
              utsavjshukla@gmail.com
            </a>

            <div className="reveal delay-2">
              <p className="skills__title">Find me online</p>

              <div className="contact__socials">
                {socials.map(({ icon, label, link }) => (
                  <a
                    href={link}
                    key={label}
                    className="social-link"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="contact__form reveal delay-2"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>

                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>

                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>

              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Enter Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>

              <textarea
                className="form-textarea"
                name="message"
                placeholder="Enter Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              ref={submitRef}
              disabled={
                status === 'sending' || status === 'success'
              }
              style={btnStyle}
            >
              <span>{btnLabel}</span>
              <i className={btnIcon} />
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}