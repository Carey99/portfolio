import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionStars from './SectionStars'
import './Experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      title: "Content Moderator",
      company: "CloudFactory (Remote)",
      period: "Current Role",
      description: "Efficiently resolve over 3,000 flagged reports daily using advanced content moderation tools, maintaining high standards of accuracy and platform integrity. Collaborate with cross-functional teams to drive data quality improvements and streamline processes, achieving 10% improvement in reporting accuracy. Conduct in-depth analysis of flagged content, identifying operational trends that enhance moderation system efficiency.",
      technologies: ["AI/NLP Classifiers", "Salesforce", "Zendesk", "Postmark", "Google Sheets"]
    }
  ]

  const education = [
    {
      degree: "Computer Software Engineering",
      institution: "African Leadership Experience(ALX)",
      period: "Academic Foundation",
      description: "Graduated with honors. Specialized in software engineering and artificial intelligence."
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "Professional Training",
      description: "Intensive program covering modern web development technologies and practices."
    }
  ]

  return (
    <section id="experience" className="experience section" ref={ref}>
      <SectionStars count={18} />
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="experience-grid">
          <motion.div
            className="experience-column"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="section-subtitle">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="job-title">{exp.title}</h4>
                    <div className="company-period">
                      <span className="company golden-accent">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p className="job-description">{exp.description}</p>
                    <div className="technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="achievements">
                      <div className="achievement-item">
                        <span className="metric">3,000+</span>
                        <span className="metric-label">Daily Reports Resolved</span>
                      </div>
                      <div className="achievement-item">
                        <span className="metric">15%</span>
                        <span className="metric-label">Productivity Increase</span>
                      </div>
                      <div className="achievement-item">
                        <span className="metric">10%</span>
                        <span className="metric-label">Accuracy Improvement</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="education-column"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="section-subtitle">Skills & Technologies</h3>
            <div className="education-list">
              <motion.div
                className="education-item glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="degree-title">Computer Software Engineering</h4>
                <div className="institution-period">
                  <span className="institution golden-accent">African Leadership Experince (ALX)</span>
                  <span className="period">Academic Foundation</span>
                </div>
                <p className="education-description">Intensive program covering backend and frontend development. Gained hands-on experience in building scalable applications using languages and tools such as Python, JavaScript, C, SQL/NoSQL databases, Flask, Express.js, HTML, CSS, and Git/GitHub. The program emphasized problem-solving, algorithms & data structures, system design, and collaborative project development in real-world team environments.</p>
              </motion.div>
              
              <motion.div
                className="education-item glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="degree-title">Technical Development</h4>
                <div className="institution-period">
                  <span className="institution golden-accent">Self-Taught & Continuous Learning</span>
                  <span className="period">Ongoing</span>
                </div>
                <p className="education-description">Full-stack web development with React, Node.js, and modern JavaScript. Building this portfolio and various personal projects to expand technical capabilities. Additionally exploring mobile development with Flutter and modern API frameworks like FastAPI to stay current with emerging technologies and industry best practices.</p>
              </motion.div>
            </div>
            
            <motion.div
              className="certifications glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h4>Certifications & Achievements</h4>
              <ul className="cert-list">
                <li>
                  <a 
                    href="https://savanna.alxafrica.com/certificates/5FpE3P9HLR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    Full-stack Development
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1Whs5FstaHprsXb2dVVLWF7kLkvFcyTTu/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    Flutter Certification
                  </a>
                </li>
                <li>AWS Cloud Practitioner Essentials</li>
                <li>CS50's Introduction to Computer Science</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
