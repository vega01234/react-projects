import './App.css'
import TwitterCard from "./components/TwitterCard"

const users = [
  {
    name: "Fernando Vega",
    username: "vega_01234",
    image: "https://unavatar.io/google",
    initialFollow: true
  },
  {
    name: "Vicky Malpica",
    username: "vicky_01234",
    image: "https://unavatar.io/facebook",
    initialFollow: false
  },
  {
    name: "Fernando Camba",
    username: "camba_01234",
    image: "https://unavatar.io/tiktok",
    initialFollow: true
  }
]

function App() {
  
  return (
    <>
      <section className='App'>
        {
          users.map(({name, username, image, initialFollow}) =>  (
            <TwitterCard key={username} image={image} name={name} username={username} initialFollow={initialFollow} />
            
          ))
        }
      </section>
    </>
  )
}

export default App
