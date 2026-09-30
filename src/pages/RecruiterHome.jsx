import { Link } from 'react-router-dom'
import PortfolioFooter from '../components/PortfolioFooter'
import RevealEmail from '../components/RevealEmail'
import { recruiterProjects } from '../data/projects'
import { siteLinks } from '../data/site'

export default function RecruiterHome() {
  return (
    <>
      <main className="recruiter-page page-width">
        <section className="recruiter-hero" aria-labelledby="recruiter-title">
          <div className="recruiter-hero-main">
            <span className="eyebrow">TRISTAN VARNER / QUICK BRIEF</span>
            <h1 id="recruiter-title">Tristan Varner<span className="recruiter-period">.</span></h1>
            <p className="recruiter-role">Computer Science (AI &amp; Robotics)</p>
            <p className="recruiter-school">UNC Charlotte <span aria-hidden="true">·</span> December 2026</p>
            <div className="recruiter-actions">
              {siteLinks.resume
                ? <a className="button button-dark" href={siteLinks.resume} target="_blank" rel="noreferrer">Resume ↗</a>
                : <span className="button button-unavailable" aria-label="Updated resume coming soon">Resume · updating</span>}
              <a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={siteLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <RevealEmail />
            </div>
          </div>
          <aside className="recruiter-about" aria-labelledby="recruiter-about-title">
            <h2 id="recruiter-about-title">About</h2>
            <p>I build AI systems across retrieval, computer vision, data pipelines, and backend infrastructure.</p>
            <p>I work from requirements through prototypes and evaluation, with particular interest in client-facing engineering.</p>
          </aside>
        </section>
  
        <section className="recruiter-section" id="experience" aria-labelledby="experience-title">
          <div className="recruiter-section-heading"><span className="eyebrow">01 / EXPERIENCE</span><h2 id="experience-title">Experience</h2></div>
          <div className="recruiter-experience">
            <article>
              <div className="recruiter-entry-head"><div><h3>IBM Z</h3><p>Forward Deployed Engineering Intern</p></div><span>ENGINEERING / CLIENT WORK</span></div>
              <ul>
                <li>Built a reusable documentation MCP server and ingestion tools; indexed 200K+ IBM Z documents.</li>
                <li>Built the testing pipeline and partnered with senior FDEs on the broader agent effort.</li>
                <li>The team evaluated 800+ questions with an LLM judge followed by FDE ground-truth review; the agent recorded a 97% pass rate.</li>
              </ul>
              <Link className="recruiter-experience-link" to="/experience/ibm">View technical brief ↗</Link>
            </article>
            <article>
              <div className="recruiter-entry-head"><div><h3>Firebirds Wood Fired Grill</h3><p>Restaurant Manager</p></div><span>OPERATIONS / LEADERSHIP</span></div>
              <ul>
                <li>Led 30+ employees across staffing, inventory, cash management, and guest service at a restaurant serving 600–800 covers and $20K+ daily sales.</li>
                <li>Held peak ticket times under 20 minutes while managing food cost and labor to budget targets.</li>
              </ul>
              <Link className="recruiter-experience-link" to="/experience/firebirds">Explore this experience ↗</Link>
            </article>
          </div>
        </section>
  
        <section className="recruiter-section" aria-labelledby="recruiter-work-title">
          <div className="recruiter-section-heading"><span className="eyebrow">02 / SELECTED WORK</span><h2 id="recruiter-work-title">Selected work</h2></div>
          <div className="recruiter-projects">
            {recruiterProjects.map((project) => (
              <article key={project.id} className="recruiter-project">
                <div className="recruiter-project-heading">
                  <div className="recruiter-project-title"><h3><Link to={`/projects/${project.id}`}>{project.title} <span aria-hidden="true">↗</span></Link></h3>{project.status === 'in-development' && <span className="project-status-badge">IN DEVELOPMENT</span>}</div>
                  <span className="recruiter-stack">{project.stack.join(' · ')}</span>
                </div>
                {project.recruiter.description && <p className="recruiter-project-description">{project.recruiter.description}</p>}
                {!project.recruiter.description && project.recruiter.statusNote && <p className="recruiter-project-status-note">{project.recruiter.statusNote}</p>}
                <div className={`recruiter-project-proof ${project.recruiter.description ? 'recruiter-project-proof-two' : ''}`}>
                  {!project.recruiter.description && <div><span className="mini-label">PROBLEM</span><p>{project.recruiter.problem}</p></div>}
                  <div><span className="mini-label">MY WORK</span><p>{project.recruiter.contribution}</p></div>
                  <div><span className="mini-label">RESULT / CURRENT STATE</span><p>{project.recruiter.result}</p></div>
                </div>
                <Link className="recruiter-project-link" to={`/projects/${project.id}`}>View technical brief <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          <p className="recruiter-more-work">More projects are on <a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a></p>
        </section>
  
        <div className="recruiter-bottom-grid">
          <section className="recruiter-section" aria-labelledby="areas-title">
            <div className="recruiter-section-heading"><span className="eyebrow">03 / TECHNICAL AREAS</span><h2 id="areas-title">Where I work</h2></div>
            <ul className="recruiter-pill-list"><li>AI systems</li><li>RAG / LLM evaluation</li><li>Computer vision</li><li>Backend / infrastructure</li><li>ML systems</li><li>Distributed systems</li></ul>
          </section>
          <section className="recruiter-section" aria-labelledby="looking-title">
            <div className="recruiter-section-heading"><span className="eyebrow">04 / WHAT’S NEXT</span><h2 id="looking-title">Looking for</h2></div>
            <p>I’m interested in engineering roles across AI/ML, forward-deployed work, and software development.</p>
          </section>
        </div>
  
      </main>
    <PortfolioFooter />
    </>
  )
}
