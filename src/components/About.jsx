import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import SectionStars from './SectionStars'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMousePosition({ x, y, index })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, index: null })
  }

  return (
    <section id="about" className="about section" ref={ref}>
      <SectionStars count={17} />
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-card">
                <p>
                  I'm a passionate <span className="golden-accent">Full-Stack Developer</span> with a strong background in creating 
                  innovative digital solutions. With expertise in modern web technologies and AI integration, 
                  I specialize in building scalable applications that deliver exceptional user experiences.
                </p>
                
                <p>
                  My journey in software development has led me to work with cutting-edge technologies 
                  including <span className="golden-accent">React</span>, <span className="golden-accent">Node.js</span>, 
                  <span className="golden-accent"> Python</span>, and <span className="golden-accent">AI/ML frameworks</span>. 
                  I'm particularly interested in the intersection of web development and artificial intelligence.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or mentoring aspiring developers. I believe in continuous learning and staying 
                  ahead of the technological curve.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass-card">
                <h3>Professional Highlights</h3>
                <div className="highlights-grid">
                  {[
                    { icon: "sparkle", label: "Innovation Leader", desc: "Driving digital transformation" },
                    { icon: "lightning", label: "Performance Expert", desc: "Optimized & scalable solutions" },
                    { icon: "check", label: "Problem Solver", desc: "Creative & efficient approaches" },
                    { icon: "team", label: "Team Player", desc: "Collaborative & mentoring" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="highlight-item"
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={handleMouseLeave}
                      animate={{
                        rotateX: mousePosition.index === index ? mousePosition.y : 0,
                        rotateY: mousePosition.index === index ? mousePosition.x : 0,
                        scale: mousePosition.index === index ? 1.05 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="highlight-icon">
                        {item.icon === "sparkle" && (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M8 21L9.09 15.26L16 14L9.09 13.74L8 8L6.91 13.74L0 14L6.91 15.26L8 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === "lightning" && (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === "check" && (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === "team" && (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                            <path d="M22 21V19C22 18.1332 21.7361 17.2863 21.2447 16.5555C20.7533 15.8246 20.0573 15.2426 19.2426 14.8787C18.4279 14.5148 17.5251 14.3829 16.6379 14.4981C15.7506 14.6132 14.9145 14.9701 14.22 15.52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <div className="highlight-label">{item.label}</div>
                      <div className="highlight-desc">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="interests">
                  <h4>Interests & Passions</h4>
                  <div className="interest-tags">
                    <span className="interest-tag">AI & Machine Learning</span>
                    <span className="interest-tag">Web3 & Blockchain</span>
                    <span className="interest-tag">Open Source</span>
                    <span className="interest-tag">Mobile Development</span>
                    <span className="interest-tag">Cloud Computing</span>
                    <span className="interest-tag">DevOps</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
