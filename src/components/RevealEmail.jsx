import { useContext, useState } from 'react'
import { siteLinks } from '../data/site'
import { EmailRevealContext } from './EmailRevealContext'

export default function RevealEmail({ className = '' }) {
  const sharedState = useContext(EmailRevealContext)
  const [localRevealed, setLocalRevealed] = useState(false)
  const revealed = sharedState?.revealed ?? localRevealed
  const reveal = () => sharedState ? sharedState.setRevealed(true) : setLocalRevealed(true)

  if (revealed) return <span className={`email-revealed ${className}`}>{siteLinks.emailAddress}</span>

  return (
    <button type="button" className={`reveal-email ${className}`} onClick={reveal}>
      Email
    </button>
  )
}
