import { Suspense, lazy, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Lenis from 'lenis'
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Scene = lazy(() => import('./components/Scene'))
const Navigation = lazy(() => import('./components/Navigation'))
const MouseLight = lazy(() => import('./components/MouseLight'))
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <MouseLight />
        <Navigation />
        <div className="canvas-container">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene />
          </Canvas>
        </div>
        <main className="content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </Suspense>
    </div>
  )
}

export default App
