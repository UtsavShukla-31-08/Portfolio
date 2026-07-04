/**
 * Footer — brand / copyright / nav links
 */
export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            Utsav<span>Shukla</span>
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Utsav Shukla · Crafted with care &amp; ☕
          </p>
          <ul className="footer__links" role="list">
            <li><a href="#hero">Top</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
