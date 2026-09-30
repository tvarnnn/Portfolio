import { Link, useParams } from 'react-router-dom'
import CaseStudy from '../components/CaseStudy'
import RecruiterCaseStudy from '../components/RecruiterCaseStudy'
import { experienceCases } from '../data/caseStudies'
import { getTechnicalCase } from '../data/technicalCases'

export default function ExperienceDetail({ recruiterMode }) {
  const { id } = useParams()
  const study = experienceCases[id]

  if (!study) {
    return (
      <main className="case-study page-width not-found">
        <span className="eyebrow">NOT FOUND</span>
        <h1>That experience isn’t here.</h1>
        <Link className="button button-dark" to="/">Back to the homepage ↗</Link>
      </main>
    )
  }

  if (recruiterMode) {
    return <RecruiterCaseStudy id={id} study={study} technical={getTechnicalCase(id, study)} kind="experience" backLabel="Back to experience" />
  }

  return <CaseStudy study={study} kind="experience" backLabel="Back to experience" />
}
