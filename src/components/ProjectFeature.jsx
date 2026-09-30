import { Link } from 'react-router-dom'
import ZoomableImage from './ZoomableImage'

export function ProjectVisual({ project, compact = false, showWipTape = false }) {
  const captionLabel = project.imageSrc
    ? project.visual === 'finance' ? 'OVERVIEW*' : 'PROJECT IMAGE'
    : project.visual === 'agent' ? 'SYSTEM SKETCH' : 'IMAGE PLACEHOLDER'
  const captionDetail = project.visual === 'agent' && !project.imageSrc
    ? 'Planner → Coder → Reviewer · backend gate'
    : project.imageNote || project.imageLabel || project.title + ' visual'

  return (
    <figure className={`project-visual visual-${project.visual} ${project.imageSrc ? 'project-visual-has-image' : ''} ${compact ? 'project-visual-compact' : ''}`} role={project.imageSrc ? undefined : 'img'} aria-label={project.imageSrc ? undefined : `Placeholder for ${project.imageLabel || project.title + ' screenshot'}`}>
      <div className="visual-canvas" aria-hidden={project.imageSrc ? undefined : 'true'}>
        {project.imageSrc && <ZoomableImage src={project.imageSrc} alt={project.imageLabel || project.title} className="project-visual-zoom" imageClassName="project-visual-image" />}
        {!project.imageSrc && project.visual === 'glasses' && (
          <>
            {/* REPLACE: Cyclops glasses photo or World Builder image. */}
            <span className="visual-glasses-frame"><i /><i /></span>
            <span className="visual-glasses-dot dot-one" /><span className="visual-glasses-dot dot-two" />
            <span className="visual-glasses-caption">OBJECT OBSERVATIONS<br />FRAME 01 / PROTOTYPE</span>
          </>
        )}
        {!project.imageSrc && project.visual === 'finance' && (
          /* REPLACE: Finance Advisor UI screenshot. */
          <div className="visual-receipt">
            <span>STATEMENT / 09.26</span><strong>making sense<br />of the numbers</strong>
            <i /><i /><i /><b>↗  categorized</b>
          </div>
        )}
        {!project.imageSrc && project.visual === 'music' && (
          <>
            {/* REPLACE: Last.fm dashboard screenshot. */}
            <div className="visual-record"><span /></div>
            <div className="visual-music-type">100,000+<span> plays and counting</span></div>
          </>
        )}
        {!project.imageSrc && project.visual === 'agent' && (
          <div className="visual-agent">
            {/* REPLACE: Gary VS Code view or architecture diagram. */}
            <span className="visual-agent-top">GARY / WHO GETS TO DECIDE?</span>
            <div className="visual-agent-roles"><span>plan</span><span>code</span><span>review</span></div>
            <div className="visual-agent-gate"><span>BACKEND GATE</span><strong>permissions<br />state<br />tools</strong></div>
            <span className="visual-agent-bottom">the model asks. the system checks. ↗</span>
          </div>
        )}
        {!project.imageSrc && project.visual === 'gradience' && (
          <div className="visual-graph">
            {/* REPLACE: Gradience loss landscape or decision-boundary screenshot. */}
            <span className="graph-axis-x" /><span className="graph-axis-y" />
            <span className="graph-line" /><span className="graph-point point-one" />
            <span className="graph-point point-two" /><span className="graph-point point-three" />
            <b>find the minimum →</b>
          </div>
        )}
        {!project.imageSrc && project.visual === 'archive' && <span className="visual-archive-mark">↗</span>}
      </div>
      {showWipTape && <span className="project-wip-tape">UNDER CONSTRUCTION</span>}
      <figcaption><span>{captionLabel}</span><strong>{captionDetail}</strong></figcaption>
    </figure>
  )
}

export default function ProjectFeature({ project, index, total }) {
  return (
    <article className={`project-feature project-feature-${project.visual}`} data-reveal>
      <div className="project-feature-copy">
        <span className="eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p className="project-intro">{project.homeHook}</p>
        <ul className="project-home-notes">
          {project.homeNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
        <div className="project-feature-bottom">
          <Link className="text-link" to={`/projects/${project.id}`}>{project.homeAction} <span aria-hidden="true">↗</span></Link>
          <span className="project-index">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>
        <div className="project-home-tags" aria-label="Technologies used">{project.stack.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}</div>
      </div>
      {project.imageSrc
        ? <div className="project-visual-link"><ProjectVisual project={project} /></div>
        : <Link className="project-visual-link" to={`/projects/${project.id}`} aria-label={`Read the ${project.title} story`}><ProjectVisual project={project} showWipTape={project.status === 'in-development'} /></Link>}
    </article>
  )
}
