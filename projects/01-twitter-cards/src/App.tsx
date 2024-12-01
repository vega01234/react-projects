import './App.css'
import { TwitterCard } from './components/TwitterCard'

function App() {
  return (
    <>
      <TwitterCard username='midudev' isFollowing >Miguel Angel Duran</TwitterCard>
      <TwitterCard username='DevCaress' isFollowing >DevCaress</TwitterCard>
      <TwitterCard username='spacex' isFollowing={false} >Space X</TwitterCard>
    </>
  )
}

export default App
