import { useEffect, useRef, useState } from 'react'
import './SectionStars.css'

const SectionStars = ({ count = 15 }) => {
  const containerRef = useRef()
  const [stars, setStars] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate random star positions
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 3
    }))
    setStars(newStars)
  }, [count])

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePos({ x, y })
    }
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div 
      ref={containerRef}
      className="section-stars"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="golden-star"
          style={{
            '--x': `${star.x}%`,
            '--y': `${star.y}%`,
            '--size': `${star.size}px`,
            '--opacity': star.opacity,
            '--delay': `${star.delay}s`,
            '--mouse-x': mousePos.x * 20,
            '--mouse-y': mousePos.y * 20,
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
          }}
        />
      ))}
    </div>
  )
}

export default SectionStars
