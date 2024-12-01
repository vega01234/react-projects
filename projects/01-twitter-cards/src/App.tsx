import './App.css'
import { TwitterCard } from './components/TwitterCard'

const users = [ 
  {
    username: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    username: 'devcaress',
    name: 'DevCaress',
    isFollowing: true
  },
  {
    username: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  }
]

function App() {
  return (
    <>
      {
        users.map(user => {
          const { username, name, isFollowing } = user;
          return (
            <TwitterCard key={username} username={username} initialIsFollowing={isFollowing}>{name}</TwitterCard>
          );
        })
      }
    </>
  )
}

export default App
