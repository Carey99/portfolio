import './App.css'

function App() {
  return (
    <div className="app">
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: 'white',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '100vh'
      }}>
        <h1 style={{ color: '#d4af37', fontSize: '3rem', marginBottom: '2rem' }}>
          Carey Akida
        </h1>
        <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '2rem' }}>
          Portfolio Loading Test
        </h2>
        <p style={{ color: '#b8b8b8', fontSize: '1.2rem' }}>
          If you see this, the basic React app is working!
        </p>
        
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: '#d4af37', marginBottom: '1rem' }}>About Me</h3>
          <p style={{ color: '#b8b8b8', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Content Moderator at CloudFactory with expertise in AI/NLP classifiers, 
            Salesforce, Zendesk, and full-stack development. Currently building modern 
            web applications with React, Node.js, and Three.js.
          </p>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: '#d4af37', marginBottom: '1rem' }}>Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {['React', 'Node.js', 'JavaScript', 'Python', 'Three.js', 'Salesforce', 'Zendesk'].map(skill => (
              <span key={skill} style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
