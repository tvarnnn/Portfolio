import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { HashRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import { EmailRevealContext } from './components/EmailRevealContext'
import ExperienceDetail from './pages/ExperienceDetail'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { modeDestination, readRecruiterMode, saveRecruiterMode } from './utils/mode'

function EmailRevealScope({ children }) {
  const [revealed, setRevealed] = useState(false)
  return <EmailRevealContext.Provider value={{ revealed, setRevealed }}>{children}</EmailRevealContext.Provider>
}

function PortfolioSite() {
  const location = useLocation()
  const navigate = useNavigate()
  const [recruiterMode, setRecruiterMode] = useState(
    () => readRecruiterMode(() => window.localStorage),
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  function toggleMode() {
    const next = !recruiterMode
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const shell = document.querySelector('.site-shell')
    if (shell?.classList.contains('is-settling')) return
    const change = () => {
      const destination = modeDestination(location.pathname)
      flushSync(() => {
        setRecruiterMode(next)
        if (destination) navigate(destination)
      })
      saveRecruiterMode(() => window.localStorage, next)
      if (destination) window.scrollTo(0, 0)
    }

    if (document.startViewTransition && !reducedMotion) {
      if (next && shell) {
        shell.classList.add('is-settling')
        window.setTimeout(() => document.startViewTransition(change), 180)
      } else {
        document.startViewTransition(change)
      }
    } else {
      change()
    }
  }

  return (
    <EmailRevealScope key={location.pathname}>
      <div className={`site-shell ${recruiterMode ? 'mode-recruiter' : 'mode-story'}`}>
        <Nav recruiterMode={recruiterMode} onToggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home recruiterMode={recruiterMode} />} />
          <Route path="/projects/:id" element={<ProjectDetail recruiterMode={recruiterMode} />} />
          <Route path="/experience/:id" element={<ExperienceDetail recruiterMode={recruiterMode} />} />
          <Route path="*" element={<Home recruiterMode={recruiterMode} />} />
        </Routes>
      </div>
    </EmailRevealScope>
  )
}

export default function App() {
  return <HashRouter><PortfolioSite /></HashRouter>
}
