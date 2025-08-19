import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionStars from './SectionStars'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: "JobTrackAI",
      description: "AI-powered job tracking and career enhancement platform that intelligently suggests job opportunities based on your role, skills, and career goals. Features include automated job matching, application tracking, salary insights, skill gap analysis, and direct application functionality. The platform uses machine learning to analyze job market trends and provide personalized career recommendations to help users advance their professional journey.",
      image: "/images/projects/jobtrackaigif.gif",
      technologies: ["React", "Express.js", "Mongo Atlas", "Three.js", "Node.js", "Redis", "OpenAI API"],
      liveUrl: "https://jobtrackai.onrender.com/",
      githubUrl: "https://github.com/Carey99/JobTrackAI",
      featured: true
    },
    {
      title: "Amiran Driving School System",
      description: "Comprehensive digital scheduling and student management system designed specifically for driving schools. Features include student enrollment management, instructor scheduling, lesson booking system, progress tracking, payment processing, and automated reminders. The platform streamlines administrative tasks, improves communication between instructors and students, and provides detailed analytics on student performance and business metrics.",
      image: "/images/projects/amirangif.gif",
      technologies: ["Node.js", "TypeScript", "Prisma", "Mongo Atlas", "Stripe", "SendGrid", "Tailwind CSS", "React", "JWT"],
      liveUrl: "https://amirandrivingcollege.co.ke/",
      githubUrl: "https://github.com/Carey99/Amiran_mvp",
      featured: true
    },
    {
      title: "RentEase",
      description: "Modern property management application that simplifies rental property operations for landlords and property managers. Features include tenant management, rent collection automation, maintenance request tracking, lease document management, financial reporting, and communication tools. The platform provides a seamless experience for both property owners and tenants, with mobile-friendly interfaces and real-time notifications for important updates.",
      image: "/images/projects/renteasegif.gif",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Socket.io", "React", "Stripe", "Tailwind CSS", "Daraja API"],
      liveUrl: "https://rentflow.onrender.com/",
      githubUrl: "https://github.com/Carey99/RentEase",
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects section" ref={ref}>
      <SectionStars count={20} />
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
                <div className="featured-projects">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="featured-project glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div 
                className="project-image"
                style={{'--bg-image': `url(${project.image})`}}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="luxury-button small">Live Demo</a>
                    <a href={project.githubUrl} className="luxury-button small outline">Source Code</a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p>Want to see more of my work?</p>
          <a href="#contact" className="luxury-button">Let's Collaborate</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
