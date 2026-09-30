import { Link } from 'react-router-dom'
import { getRecruiterOutline } from '../data/recruiterOutlines'
import InflatingPeriod from './InflatingPeriod'
import PortfolioFooter from './PortfolioFooter'
import ZoomableImage from './ZoomableImage'

function RecruiterSectionBody({ section, study, technical }) {
  if (section.kind === 'copy') {
    const paragraphs = [
      ...(section.fields || []).map((field) => study[field]),
      ...(section.paragraphs || []),
    ].filter((value) => value?.trim() && !value.startsWith('['))

    return <div className="recruiter-case-copy">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
  }

  if (section.kind === 'flow') {
    const steps = section.stepCount ? technical.flow.slice(0, section.stepCount) : technical.flow
    return <ol className="recruiter-case-flow">{steps.map((step, index) => <li key={step.label}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.label}</h3><p>{step.detail}</p></div></li>)}</ol>
  }

  if (section.kind === 'decisions') {
    return <div className="recruiter-case-decisions">{technical.decisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.body}</p></article>)}</div>
  }

  if (section.kind === 'details') {
    return <div className="recruiter-case-decisions">{technical.details.map((detail) => <article key={detail.title}><h3>{detail.title}</h3><p>{detail.body}</p></article>)}</div>
  }

  if (section.kind === 'visuals') {
    return <div className="recruiter-case-visual-proof">
      {section.intro && <p className="recruiter-case-visual-intro">{section.intro}</p>}
      {section.items.filter((item) => item.src).map((item) => <div className="recruiter-case-visual-row" key={item.src}>
        <div><h3>{item.title}</h3><p>{item.detail}</p></div>
        <figure><ZoomableImage src={item.src} alt={item.alt} className="recruiter-case-visual-zoom" /><figcaption>{item.title}</figcaption></figure>
      </div>)}
    </div>
  }

  if (section.kind === 'outcome') {
    const note = section.note ?? (section.suppressBoundary ? null : technical.boundary)
    return <div className="recruiter-case-outcome">
      {note && <p className="recruiter-case-boundary">{note}</p>}
      <ul>{technical.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  }

  return null
}

export default function RecruiterCaseStudy({ id, study, technical, kind, backLabel, links = [], statusLabel, statusNote }) {
  const knownMeta = study.meta.filter(({ value }) => !value.startsWith('['))
  const outline = getRecruiterOutline(id, study, technical)

  return (
    <>
      <main className="recruiter-case page-width">
        <Link className="back-link" to="/">← {backLabel}</Link>

        <header className="recruiter-case-hero">
          <div>
            <span className="eyebrow">{kind === 'project' ? 'SELECTED WORK / TECHNICAL BRIEF' : 'EXPERIENCE / CLOSER LOOK'}</span>
            {statusLabel && <span className="project-status-badge case-status-badge">{statusLabel}</span>}
            <h1>{technical.title || study.title}{kind === 'project' ? <InflatingPeriod /> : <span className="accent-period">.</span>}</h1>
            <p>{technical.focus}</p>
            {statusNote && <p className="recruiter-case-status-note">{statusNote}</p>}
            {links.length > 0 && <div className="case-links">{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}
          </div>
        </header>

        <dl className="case-meta recruiter-case-meta" aria-label="Case study details">
          {knownMeta.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>

        <div className="recruiter-case-reading-flow">
          {outline.map((section, index) => <section key={`${section.label}-${index}`} className={`recruiter-case-section recruiter-case-section-${section.kind}`} aria-labelledby={`recruiter-case-section-${index}`}>
            <span className="eyebrow">{String(index + 1).padStart(2, '0')} / {section.label}</span>
            <h2 id={`recruiter-case-section-${index}`}>{section.title}</h2>
            <RecruiterSectionBody section={section} study={study} technical={technical} />
          </section>)}
        </div>

        <Link className="text-link case-end-link" to="/">← {backLabel}</Link>
      </main>
      <PortfolioFooter />
    </>
  )
}
