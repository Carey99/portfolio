import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

const Scene = () => {
  const pointsRef = useRef()
  const starsRef = useRef()
  const { viewport } = useThree()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  
  // Create particle field for the original golden particles
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), [])
  
  // Create starfield - more stars spread across a larger area
  const stars = useMemo(() => {
    const starPositions = new Float32Array(6000)
    const starColors = new Float32Array(6000)
    
    for (let i = 0; i < 2000; i++) {
      // Position stars in a large sphere around the scene
      starPositions[i * 3] = (Math.random() - 0.5) * 20
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 20
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      // Vary star colors between white and golden
      const colorVariation = Math.random()
      if (colorVariation > 0.7) {
        // Golden stars (30%)
        starColors[i * 3] = 1     // R
        starColors[i * 3 + 1] = 0.8 // G
        starColors[i * 3 + 2] = 0.2 // B
      } else {
        // White/blue-white stars (70%)
        const intensity = 0.8 + Math.random() * 0.2
        starColors[i * 3] = intensity
        starColors[i * 3 + 1] = intensity
        starColors[i * 3 + 2] = intensity * (0.9 + Math.random() * 0.1)
      }
    }
    
    return { positions: starPositions, colors: starColors }
  }, [])
  
  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Original golden particles rotation
      pointsRef.current.rotation.x -= delta / 10
      pointsRef.current.rotation.y -= delta / 15
      
      // Mouse interaction for golden particles
      pointsRef.current.rotation.x += mouse.y * 0.05 * delta
      pointsRef.current.rotation.y += mouse.x * 0.05 * delta
    }
    
    if (starsRef.current) {
      // Slow rotation for stars
      starsRef.current.rotation.x += delta * 0.02
      starsRef.current.rotation.y += delta * 0.01
      
      // Mouse parallax effect for stars
      starsRef.current.rotation.x += mouse.y * 0.02 * delta
      starsRef.current.rotation.y += mouse.x * 0.02 * delta
    }
  })

  return (
    <>
      {/* Starfield background */}
      <Points ref={starsRef} positions={stars.positions} colors={stars.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Original golden particle system */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#d4af37"
            size={0.004}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
    </>
  )
}

export default Scene
