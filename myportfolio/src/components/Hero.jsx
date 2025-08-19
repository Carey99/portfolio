import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionStars from './SectionStars'
import './Hero.css'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="hero" className="hero section" ref={ref}>
      <SectionStars sectionId="hero" starCount={20} />
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="greeting-text">Hello, I'm</span>
          </motion.div>
          
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Carey Akida
          </motion.h1>
          
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="gradient-text">Full-Stack Developer</span>
            <span className="subtitle-separator"> & </span>
            <span className="gradient-text">AI Enthusiast</span>
          </motion.div>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Crafting innovative digital experiences with cutting-edge technology.
            Specialized in React, Node.js, Python, and AI integration.
          </motion.p>
          
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <button 
              className="luxury-button primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="luxury-button secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
