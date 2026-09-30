import { Link, useParams } from 'react-router-dom'
import CaseStudy from '../components/CaseStudy'
import RecruiterCaseStudy from '../components/RecruiterCaseStudy'
import { ProjectVisual } from '../components/ProjectFeature'
import { getProjectCase } from '../data/caseStudies'
import { projects } from '../data/projects'
import { getTechnicalCase } from '../data/technicalCases'

export default function ProjectDetail({ recruiterMode }) {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <main className="case-study page-width not-found">
        <span className="eyebrow">WELL, THAT’S AWKWARD</span>
        <h1>That project isn’t here.</h1>
        <p>The link may be old, or the project may have moved.</p>
        <Link className="button button-dark" to="/">Back to the homepage ↗</Link>
      </main>
    )
  }

  const study = { ...getProjectCase(project), title: project.title }
  const links = [
    project.github && { label: 'GitHub', href: project.github },
    project.demo && { label: 'Live demo', href: project.demo },
  ].filter(Boolean)
  const heroVisual = project.imageSrc || project.imagePending ? <ProjectVisual project={project} compact /> : null
  const statusLabel = project.status === 'in-development' ? 'IN DEVELOPMENT' : null

  if (recruiterMode) {
    return (
      <RecruiterCaseStudy
        id={project.id}
        study={study}
        technical={getTechnicalCase(project.id, study)}
        kind="project"
        backLabel="Back to selected work"
        links={links}
        statusLabel={statusLabel}
        statusNote={project.recruiter?.statusNote}
      />
    )
  }

  return (
    <CaseStudy
      study={study}
      kind="project"
      backLabel="Back to selected work"
      heroVisual={heroVisual}
      links={links}
      statusLabel={statusLabel}
      statusNote={project.recruiter?.statusNote}
    />
  )
}
