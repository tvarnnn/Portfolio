import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import PortfolioFooter from '../components/PortfolioFooter'
import ProjectFeature from '../components/ProjectFeature'
import RevealEmail from '../components/RevealEmail'
import ZoomableImage from '../components/ZoomableImage'
import { featuredProjects } from '../data/projects'
import { preferredScrollBehavior } from '../utils/mode'
import { portfolioImage } from '../data/portfolioImages'

export default function StoryHome() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
    elements.forEach((element) => {
      element.classList.add('will-reveal')
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  function scrollToWork(event) {
    event.preventDefault()
    document.getElementById('story-work')?.scrollIntoView({
      behavior: preferredScrollBehavior(window.matchMedia('(prefers-reduced-motion: reduce)').matches),
    })
  }

  return (
    <main id="top">
      <section className="hero-section page-width" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-main">
            <span className="eyebrow hero-kicker">ENGINEERING · AI SYSTEMS · COMPUTER VISION</span>
            <h1 id="hero-title">hey, i’m <em>tristan.</em></h1>
            <p className="hero-lede">I’m a computer science student focused on AI and robotics. I build systems that connect models, data, infrastructure, and the real world.</p>
            <p className="hero-current"><span className="little-star" aria-hidden="true">✳</span> currently building Cyclops: glasses, a phone, and a vision system learning to remember what they see.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#story-work" onClick={scrollToWork}>See selected work <span aria-hidden="true">↘</span></a>
              <RevealEmail className="text-link" />
            </div>
            <div className="hero-scrapbook">
              <PhotoPlaceholder label="Tristan Varner" caption="a face to the name" src={portfolioImage('tristan-portrait.jpeg')} tone="peach" className="hero-photo-main" reactive />
              <span className="hero-visual-note" aria-hidden="true">BUILDING THINGS<br />THAT HAVE TO WORK<br />OUTSIDE THE DEMO ↗</span>
            </div>
          </div>
          <aside className="hero-about" aria-labelledby="about-title">
            <div className="about-heading"><span className="eyebrow">THE SHORT VERSION</span><h2 id="about-title">About <span aria-hidden="true">↘</span></h2></div>
            <div className="about-entry"><h3>NOW</h3><p>Computer Science (AI &amp; Robotics) at UNC Charlotte. Interested in forward-deployed engineering and useful AI systems.</p></div>
            <div className="about-entry"><h3>WHAT I BUILD</h3><p>End-to-end prototypes across computer vision, retrieval, data pipelines, and backend infrastructure.</p></div>
            <div className="about-entry"><h3>HOW I WORK</h3><p>I like translating fuzzy requirements into working systems, then testing what the system can actually claim.</p></div>
          </aside>
        </div>
        <div className="hero-bottomline"><span>EXPERIENCE &amp; SELECTED WORK</span><span aria-hidden="true">↓</span></div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="page-width">
          <div className="experience-heading" data-reveal><span className="eyebrow">EXPERIENCE</span><h2 id="experience-title">Where I’ve <em>worked.</em></h2></div>
          <div className="ibm-grid">
            <div className="ibm-copy" data-reveal>
              <span className="eyebrow">IBM Z · FORWARD DEPLOYED ENGINEERING INTERN</span>
              <h3>Building enterprise <em>AI systems.</em></h3>
              <p>I built a reusable documentation MCP server and ingestion tools for IBM Z AI workflows, indexing 200,000+ documents. I also built the testing pipeline; in team evaluation, the agent passed 97% of 800+ questions.</p>
              <div className="ibm-facts"><span>200K+ DOCUMENTS</span><span>97% / 800+ QUESTIONS</span><span>MCP / WATSONX</span><span>OPENSHIFT / KUBERNETES</span></div>
              <Link className="experience-detail-link" to="/experience/ibm">Explore my IBM work <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="ibm-visual-wrap" data-reveal>
              <figure className="ibm-cover-photo">
                <ZoomableImage src={portfolioImage('ibm-internship.jpeg')} alt="Tristan with a colleague during his IBM internship" className="ibm-cover-zoom" />
                <figcaption>IBM Z / FORWARD DEPLOYED ENGINEERING</figcaption>
              </figure>
            </div>
          </div>
          <div className="operations-entry" data-reveal>
            <div><span className="eyebrow">PREVIOUSLY</span><h3>Firebirds Wood Fired Grill</h3><span>Restaurant Manager</span></div>
            <div className="operations-copy"><p>Led 30+ employees across front- and back-of-house operations in a restaurant serving 600–800 covers and $20K+ in daily sales. Held peak ticket times under 20 minutes.</p><Link className="experience-detail-link" to="/experience/firebirds">Explore this experience <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="work-section page-width" id="story-work" aria-labelledby="work-title">
        <div className="work-heading" data-reveal>
          <div><span className="eyebrow">A FEW THINGS I’VE BUILT</span><h2 id="work-title">selected <em>work.</em></h2></div>
          <p>Four projects across vision, AI, data, and systems. Each has a closer look if you want the details.</p>
        </div>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => <ProjectFeature key={project.id} project={project} index={index} total={featuredProjects.length} />)}
        </div>
      </section>

      <PortfolioFooter />
    </main>
  )
}
