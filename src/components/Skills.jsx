import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionStars from './SectionStars'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Django", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Linux", level: 80 },
        { name: "CI/CD", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section" ref={ref}>
      <SectionStars count={16} />
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="glass-card">
            <h3>Additional Expertise</h3>
            <div className="expertise-tags">
              <span className="expertise-tag">Agile Development</span>
              <span className="expertise-tag">Responsive Design</span>
              <span className="expertise-tag">Performance Optimization</span>
              <span className="expertise-tag">SEO</span>
              <span className="expertise-tag">Accessibility</span>
              <span className="expertise-tag">Code Review</span>
              <span className="expertise-tag">Team Leadership</span>
              <span className="expertise-tag">Technical Writing</span>
              <span className="expertise-tag">Project Management</span>
              <span className="expertise-tag">Mentoring</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
