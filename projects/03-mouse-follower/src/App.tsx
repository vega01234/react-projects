import { useEffect, useState } from "react"

function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log("Effect: " + enable)
    const handleMove = (event) => {
      const { clientX, clientY } =  event
      console.log("handleMove: ", {clientX, clientY})
      setPosition({x: clientX, y:clientY})
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])
  const handleClick = () => {
    setEnable(!enable)
  }
  return (
    <>
      <main>
        <div>
        <h3>Mouse Follower</h3>
        <div style={{
          position:'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8, 
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}/>
        <button onClick={handleClick}>{enable ? "Desactivar" : "Activar"} Seguir Puntero</button>
        </div>
      </main>
    </>
  )
}

export default App
