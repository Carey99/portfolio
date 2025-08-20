import { useEffect, useState } from 'react'
import './MouseLight.css'

const MouseLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', updateMousePosition)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div
      className="mouse-light"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  )
}

export default MouseLight
