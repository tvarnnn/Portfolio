import { siteLinks } from '../data/site'
import RevealEmail from './RevealEmail'

export default function PortfolioFooter() {
  return (
    <footer className="portfolio-footer" id="contact" aria-label="Contact and links">
      <div className="page-width portfolio-footer-inner">
        <div className="footer-signoff"><span className="footer-mark" aria-hidden="true">tv.</span><strong>Tristan Varner</strong></div>
        <div className="footer-links">
          <RevealEmail />
          <a href={siteLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          {siteLinks.resume
            ? <a href={siteLinks.resume} target="_blank" rel="noreferrer">Resume ↗</a>
            : <span aria-label="Updated resume coming soon">Resume · updating</span>}
        </div>
        <p>© 2026 Tristan Varner · designed &amp; built by me</p>
      </div>
    </footer>
  )
}
