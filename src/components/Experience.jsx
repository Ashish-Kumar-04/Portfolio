import React from 'react';

const experiences = [
  { role: 'Senior Frontend Engineer', company: 'TechNova Solutions', year: '2024 - Present', desc: 'Leading UI architecture for enterprise apps using React and modern CSS.' },
  { role: 'Full Stack Freelancer', company: 'Self-Employed', year: '2022 - 2024', desc: 'Developed cutting edge web applications for a variety of startups and creative agencies.' },
  { role: 'Web Developer Intern', company: 'Digital Core', year: '2021 - 2022', desc: 'Built responsive landing pages and implemented complex CSS animations.' }
];

const Experience = ({ mouseOffset }) => {
  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative', zIndex: 1 }}>
      <h2 className="orbitron neon-text-cyan" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        My Experience
      </h2>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        transform: `translate(${mouseOffset.x * 0.1}px, ${mouseOffset.y * 0.1}px)`,
        transition: 'transform 0.1s ease-out',
        position: 'relative'
      }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--cyber-cyan), var(--cyber-magenta))',
          boxShadow: '0 0 10px var(--cyber-cyan)'
        }}></div>

        {experiences.map((exp, i) => (
          <div key={i} className="glass-panel" style={{
            marginLeft: '50px',
            marginBottom: '2rem',
            padding: '2rem',
            position: 'relative'
          }}>
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '-36px',
              top: '30px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: 'var(--bg-color)',
              border: '3px solid var(--cyber-magenta)',
              boxShadow: '0 0 10px var(--cyber-magenta)'
            }}></div>
            
            <span style={{ color: 'var(--cyber-yellow)', fontSize: '0.9rem', fontWeight: 'bold' }}>{exp.year}</span>
            <h3 className="orbitron" style={{ color: 'var(--text-main)', fontSize: '1.5rem', margin: '0.5rem 0' }}>{exp.role}</h3>
            <h4 style={{ color: 'var(--cyber-cyan)', fontSize: '1.1rem', marginBottom: '1rem' }}>{exp.company}</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
