import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { preferredScrollBehavior } from '../utils/mode'

// Replace public/drake-logo.jpg if you want a different image.
const drakeLogo = `${import.meta.env.BASE_URL}drake-logo.jpg`

export default function Nav({ recruiterMode, onToggleMode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const hoverTimer = useRef(null)
  const hoverActive = useRef(false)
  const delayElapsed = useRef(false)
  const imageStatus = useRef('idle')
  const imageRef = useRef(null)
  const [showDrake, setShowDrake] = useState(false)

  useEffect(() => {
    return () => {
      window.clearTimeout(hoverTimer.current)
      if (imageRef.current) {
        imageRef.current.onload = null
        imageRef.current.onerror = null
      }
    }
  }, [])

  function startLogoHover(event) {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover)').matches) return
    hoverActive.current = true
    delayElapsed.current = false
    if (imageStatus.current === 'idle') {
      imageStatus.current = 'loading'
      const image = new Image()
      imageRef.current = image
      image.onload = () => {
        imageStatus.current = 'loaded'
        if (hoverActive.current && delayElapsed.current) setShowDrake(true)
      }
      image.onerror = () => { imageStatus.current = 'failed' }
      image.src = drakeLogo
    }
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => {
      delayElapsed.current = true
      if (imageStatus.current === 'loaded' && hoverActive.current) setShowDrake(true)
    }, 250)
  }

  function endLogoHover() {
    hoverActive.current = false
    window.clearTimeout(hoverTimer.current)
    setShowDrake(false)
  }

  function jumpTo(id) {
    if (location.pathname !== '/') navigate('/')
    const behavior = preferredScrollBehavior(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior }), 50)
  }

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link to="/" className="wordmark" aria-label="Tristan Varner, home" onPointerEnter={startLogoHover} onPointerLeave={endLogoHover}>
          <span className="wordmark-text" aria-hidden="true">tv<span className="wordmark-dot">.</span></span>
          {showDrake && <img className="wordmark-image" src={drakeLogo} alt="" aria-hidden="true" />}
        </Link>
        <div className="nav-links">
          <button type="button" onClick={() => jumpTo(recruiterMode ? 'experience' : 'story-work')}>
            {recruiterMode ? 'Experience' : 'Work'}
          </button>
          <button type="button" onClick={() => jumpTo('contact')}>Say hi</button>
        </div>
        <button
          type="button"
          className="mode-toggle"
          onClick={onToggleMode}
          aria-pressed={recruiterMode}
          aria-label={recruiterMode ? 'Back to regular view' : 'Recruiter eyes only'}
        >
          <span className="mode-toggle-spark" aria-hidden="true">{recruiterMode ? '↶' : '✳'}</span>
          <span>{recruiterMode ? 'Back to regular view' : 'Recruiter eyes only'}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </nav>
    </header>
  )
}
