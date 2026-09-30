import RecruiterHome from './RecruiterHome'
import StoryHome from './StoryHome'

export default function Home({ recruiterMode }) {
  return recruiterMode ? <RecruiterHome /> : <StoryHome />
}
