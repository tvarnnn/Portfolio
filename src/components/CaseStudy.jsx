import { Link } from 'react-router-dom'
import InflatingPeriod from './InflatingPeriod'
import PortfolioFooter from './PortfolioFooter'
import ZoomableImage from './ZoomableImage'

function CaseText({ children }) {
  return <p className={children?.startsWith('[') ? 'case-prompt' : ''}>{children}</p>
}

function SectionCopy({ study, section, fallbackField }) {
  const fields = section.body || fallbackField
  return (Array.isArray(fields) ? fields : [fields]).map((field) => <CaseText key={field}>{study[field]}</CaseText>)
}

export function VisualSlot({ visual, number }) {
  if (!visual) return null
  return (
    <figure className={`case-visual ${visual.portrait ? 'case-visual-portrait' : ''}`} role={visual.src ? undefined : 'img'} aria-label={visual.src ? undefined : `Placeholder for ${visual.label}`}>
      {visual.src
        ? <ZoomableImage src={visual.src} alt={visual.label} className="case-visual-zoom" />
        : <div className="case-visual-art" aria-hidden="true"><span>VISUAL / {number}</span><i>↗</i><strong>ADD REAL VISUAL</strong></div>}
      <figcaption>{visual.src ? visual.label : `REPLACE WITH · ${visual.label}`}{visual.note && <small className="case-visual-note">{visual.note}</small>}</figcaption>
    </figure>
  )
}

export default function CaseStudy({ study, kind, backLabel, heroVisual, links = [], statusLabel, statusNote }) {
  const sectionOrder = ['context', 'problem', 'approach', 'decisions', 'implementation', 'evaluation', 'next']
    .filter((key) => study.sections?.[key] && (key !== 'decisions' || study.decisions?.length) && (key !== 'next' || study.next))
  const introSections = sectionOrder.filter((key) => key === 'context' || key === 'problem')
  const section = (key) => study.sections[key]
  const eyebrow = (key) => `${String(sectionOrder.indexOf(key) + 1).padStart(2, '0')} / ${section(key).label}`

  return (
    <>
      <main className="case-study page-width">
        <Link className="back-link" to="/">← {backLabel}</Link>

        <header className={`case-hero ${heroVisual || study.visuals?.hero ? '' : 'case-hero-no-visual'}`}>
          <div className="case-hero-copy">
            <span className="eyebrow">{kind === 'experience' ? 'EXPERIENCE / A CLOSER LOOK' : 'SELECTED WORK / A CLOSER LOOK'}</span>
            {statusLabel && <span className="project-status-badge case-status-badge">{statusLabel}</span>}
            <h1>{study.title}{kind === 'project' ? <InflatingPeriod /> : <span className="accent-period">.</span>}</h1>
            <CaseText>{study.summary}</CaseText>
            {statusNote && <p className="case-status-note">{statusNote}</p>}
            {links.length > 0 && <div className="case-links">{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}
          </div>
          {heroVisual || <VisualSlot visual={study.visuals?.hero} number="01" />}
        </header>

        <dl className={`case-meta ${study.meta.length < 4 ? 'case-meta-compact' : ''}`} aria-label="Case study details">
          {study.meta.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd className={value.startsWith('[') ? 'case-prompt' : ''}>{value}</dd></div>)}
        </dl>

        {study.contribution && <aside className="case-contribution"><span className="eyebrow">MY CONTRIBUTION</span><CaseText>{study.contribution}</CaseText></aside>}

        {introSections.length > 0 && <div className={`case-intro ${introSections.length === 1 ? 'case-intro-single' : ''}`}>
          {introSections.map((key) => (
            <section key={key} className="case-section" aria-labelledby={`case-${key}`}>
              <span className="eyebrow">{eyebrow(key)}</span>
              <h2 id={`case-${key}`}>{section(key).title}</h2>
              <SectionCopy study={study} section={section(key)} fallbackField={key} />
            </section>
          ))}
        </div>}

        {sectionOrder.includes('approach') && <section className={`case-section case-split ${study.visuals?.approach ? '' : 'case-split-text'}`} aria-labelledby="case-approach">
          <div><span className="eyebrow">{eyebrow('approach')}</span><h2 id="case-approach">{section('approach').title}</h2><SectionCopy study={study} section={section('approach')} fallbackField="approach" /></div>
          <VisualSlot visual={study.visuals?.approach} number="02" />
        </section>}

        {sectionOrder.includes('decisions') && (
          <section className="case-section case-decisions" aria-labelledby="case-decisions">
            <div><span className="eyebrow">{eyebrow('decisions')}</span><h2 id="case-decisions">{section('decisions').title}</h2></div>
            <div className="case-decision-grid">{study.decisions.map((decision, index) => <article key={decision.title}><span className="eyebrow">{String(index + 1).padStart(2, '0')}</span><h3>{decision.title}</h3><CaseText>{decision.body}</CaseText></article>)}</div>
          </section>
        )}

        {sectionOrder.includes('implementation') && <section className={`case-section case-split case-split-reverse ${study.visuals?.implementation ? '' : 'case-split-text'}`} aria-labelledby="case-implementation">
          <VisualSlot visual={study.visuals?.implementation} number="03" />
          <div><span className="eyebrow">{eyebrow('implementation')}</span><h2 id="case-implementation">{section('implementation').title}</h2><SectionCopy study={study} section={section('implementation')} fallbackField="implementation" /></div>
        </section>}

        {sectionOrder.includes('evaluation') && <section className="case-section case-evaluation" aria-labelledby="case-evaluation">
          <span className="eyebrow">{eyebrow('evaluation')}</span>
          <h2 id="case-evaluation">{section('evaluation').title}</h2>
          <SectionCopy study={study} section={section('evaluation')} fallbackField="evaluation" />
        </section>}

        {sectionOrder.includes('next') && <section className="case-section case-next" aria-labelledby="case-next"><span className="eyebrow">{eyebrow('next')}</span><h2 id="case-next">{section('next').title}</h2><SectionCopy study={study} section={section('next')} fallbackField="next" /></section>}
        <Link className="text-link case-end-link" to="/">← {backLabel}</Link>
      </main>
      <PortfolioFooter />
    </>
  )
}
