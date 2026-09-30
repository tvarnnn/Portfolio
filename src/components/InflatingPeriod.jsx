import { useEffect, useRef, useState } from 'react'

const HOVER_DELAY_MS = 500
const POP_DURATION_MS = 220
const MAX_SCALE = 10
const FULL_GROWTH_MS = 8000

function currentScale(period) {
  const scale = new DOMMatrixReadOnly(window.getComputedStyle(period).transform).a
  return Math.min(Math.max(scale, 1), MAX_SCALE)
}

function durationForScaleDistance(distance) {
  return Math.round((distance / (MAX_SCALE - 1)) * FULL_GROWTH_MS)
}

function canInflate() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function InflatingPeriod() {
  const periodRef = useRef(null)
  const hoverTimerRef = useRef(null)
  const popTimerRef = useRef(null)
  const hoveringRef = useRef(false)
  const [phase, setPhase] = useState('idle')
  const [growthDuration, setGrowthDuration] = useState(FULL_GROWTH_MS)
  const [deflateDuration, setDeflateDuration] = useState(0)

  function clearTimers() {
    window.clearTimeout(hoverTimerRef.current)
    window.clearTimeout(popTimerRef.current)
    hoverTimerRef.current = null
    popTimerRef.current = null
  }

  function startHoverDelay() {
    window.clearTimeout(hoverTimerRef.current)
    hoverTimerRef.current = window.setTimeout(() => {
      hoverTimerRef.current = null
      if (hoveringRef.current && canInflate()) {
        setGrowthDuration(durationForScaleDistance(MAX_SCALE - currentScale(periodRef.current)))
        setPhase('inflating')
      }
    }, HOVER_DELAY_MS)
  }

  function handlePointerEnter(event) {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    if (!canInflate()) return
    hoveringRef.current = true
    if (phase === 'idle') startHoverDelay()
  }

  function handlePointerLeave() {
    hoveringRef.current = false
    window.clearTimeout(hoverTimerRef.current)
    hoverTimerRef.current = null
    if (phase === 'popping') return
    clearTimers()
    if (phase === 'inflating') {
      setDeflateDuration(durationForScaleDistance(currentScale(periodRef.current) - 1))
    }
    setPhase('idle')
  }

  function handleClick() {
    if (phase !== 'inflating' || !canInflate()) return
    const period = periodRef.current
    const scale = currentScale(period)
    period.style.setProperty('--period-pop-start', String(scale))
    period.style.setProperty('--period-pop-peak', String(Math.min(scale * 1.2, MAX_SCALE + 1)))
    window.clearTimeout(hoverTimerRef.current)
    setPhase('popping')
    popTimerRef.current = window.setTimeout(() => {
      popTimerRef.current = null
      setPhase('idle')
      if (hoveringRef.current && canInflate()) startHoverDelay()
    }, POP_DURATION_MS)
  }

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const stopIfUnavailable = () => {
      if (hoverQuery.matches && !motionQuery.matches) return
      hoveringRef.current = false
      window.clearTimeout(hoverTimerRef.current)
      window.clearTimeout(popTimerRef.current)
      hoverTimerRef.current = null
      popTimerRef.current = null
      setPhase('idle')
    }
    hoverQuery.addEventListener('change', stopIfUnavailable)
    motionQuery.addEventListener('change', stopIfUnavailable)
    return () => {
      hoverQuery.removeEventListener('change', stopIfUnavailable)
      motionQuery.removeEventListener('change', stopIfUnavailable)
      window.clearTimeout(hoverTimerRef.current)
      window.clearTimeout(popTimerRef.current)
    }
  }, [])

  return (
    <span
      ref={periodRef}
      className={`accent-period inflating-period ${phase === 'inflating' ? 'is-inflating' : ''} ${phase === 'popping' ? 'is-popping' : ''}`}
      style={{
        '--period-max-scale': MAX_SCALE,
        '--period-growth-duration': `${growthDuration}ms`,
        '--period-deflate-duration': `${deflateDuration}ms`,
        '--period-pop-duration': `${POP_DURATION_MS}ms`,
      }}
      aria-hidden="true"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >.</span>
  )
}
