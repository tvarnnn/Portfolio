import { useRef } from 'react'

export default function ZoomableImage({ src, alt, className = '', imageClassName = '' }) {
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  function closeImage() {
    dialogRef.current?.close()
  }

  function closeOnBackdrop(event) {
    if (event.target === event.currentTarget) closeImage()
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`zoomable-image-trigger ${className}`}
        aria-label={`Enlarge ${alt}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <img className={imageClassName} src={src} alt="" />
      </button>
      <dialog
        ref={dialogRef}
        className="image-lightbox"
        aria-label={`Enlarged view of ${alt}`}
        onClick={closeOnBackdrop}
        onClose={() => triggerRef.current?.focus()}
      >
        <div className="image-lightbox-frame">
          <img src={src} alt={alt} />
        </div>
      </dialog>
    </>
  )
}
