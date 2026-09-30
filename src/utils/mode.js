const storageKey = 'portfolio-mode'

export function readRecruiterMode(storage) {
  try {
    const target = typeof storage === 'function' ? storage() : storage
    return target?.getItem(storageKey) === 'recruiter'
  } catch {
    return false
  }
}

export function saveRecruiterMode(storage, enabled) {
  try {
    const target = typeof storage === 'function' ? storage() : storage
    target?.setItem(storageKey, enabled ? 'recruiter' : 'story')
  } catch {
    // Storage may be unavailable in private browsing; the current view still works.
  }
}

export function modeDestination(pathname) {
  if (pathname === '/' || /^\/(projects|experience)\/[^/]+$/.test(pathname)) return null
  return '/'
}

export function preferredScrollBehavior(reducedMotion) {
  return reducedMotion ? 'auto' : 'smooth'
}
