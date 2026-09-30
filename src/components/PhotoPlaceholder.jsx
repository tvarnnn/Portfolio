import ZoomableImage from './ZoomableImage'

export default function PhotoPlaceholder({ label, caption, src, tone = 'peach', className = '', reactive = false }) {
  function move(event) {
    if (!reactive || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--pointer-x', `${x * 5}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${y * 5}px`)
  }

  function reset(event) {
    event.currentTarget.style.setProperty('--pointer-x', '0px')
    event.currentTarget.style.setProperty('--pointer-y', '0px')
  }

  return (
    <figure
      className={`photo-placeholder tone-${tone} ${className}`}
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : `Placeholder for ${label}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="photo-placeholder-art" aria-hidden={src ? undefined : 'true'}>
        {src
          ? <ZoomableImage src={src} alt={label} className="photo-zoom" />
          : <><span className="photo-placeholder-sun" /><span className="photo-placeholder-hill photo-placeholder-hill-one" /><span className="photo-placeholder-hill photo-placeholder-hill-two" /><span className="photo-placeholder-cross">✳</span></>}
      </div>
      <figcaption>
        <span className="photo-placeholder-kicker">{src ? 'HELLO, WORLD ↗' : 'PHOTO GOES HERE ↗'}</span>
        <strong>{label}</strong>
        {caption && <small>{caption}</small>}
      </figcaption>
    </figure>
  )
}
