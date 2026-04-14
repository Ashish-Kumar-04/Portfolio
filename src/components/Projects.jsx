import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { title: 'System Login', desc: 'Secure portal access simulation with input validation.', type: 'AUTH', path: '/projects/login' },
  { title: 'Registration Hub', desc: 'New user onboarding interface with dynamic states.', type: 'AUTH', path: '/projects/registration' },
  { title: 'Chrono-Tracker', desc: 'Precision stopwatch tool with lap memory and dynamic neon displays.', type: 'UTILITY', path: '/projects/stopwatch' },
  { title: 'Quantum Counter', desc: 'Interactive tally counter showing satisfying hover states.', type: 'UTILITY', path: '/projects/counter' },
  { title: 'Symmetry AI', desc: 'Palindrome evaluator detecting string reversibility instantly.', type: 'ALGORITHM', path: '/projects/palindrome' },
  { title: 'Math Core', desc: 'A functional calculator module equipped with Armstrong number detection.', type: 'LOGIC', path: '/projects/calculator' },
  { title: 'Theme Matrix', desc: 'A localized dashboard demonstrating fluid Light/Dark mode state switching.', type: 'UI/UX', path: '/projects/theme' },
  { title: 'Global Recon', desc: 'Real-world Google Maps API integration for geospatial tracking.', type: 'API', path: '/projects/map' },
  { title: 'Atmosphere Node', desc: 'Live weather telemetry using Open-Meteo real-time data.', type: 'API', path: '/projects/weather' }
];

const Projects = ({ mouseOffset }) => {
  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <h1 style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 'clamp(4rem, 15vw, 10rem)',
        opacity: 0.05,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        fontFamily: 'Orbitron',
        letterSpacing: '10px',
        margin: 0,
        zIndex: 0
      }}>
        PROJECTS
      </h1>
      <h2 className="orbitron neon-text-magenta" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        Featured Projects
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        transform: `translate(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        {projects.map((proj, i) => (
          <div key={i} className="glass-panel" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '250px'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--cyber-yellow)' }}>{proj.type}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID:00{i + 1}</span>
              </div>
              <h3 className="orbitron" style={{ color: 'var(--cyber-cyan)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                {proj.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{proj.desc}</p>
            </div>

            <Link to={proj.path} style={{
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none',
              marginTop: '2rem',
              padding: '0.5rem',
              background: 'transparent',
              border: '1px solid var(--cyber-magenta)',
              color: 'var(--cyber-magenta)',
              cursor: 'pointer',
              fontFamily: 'Orbitron',
              transition: 'all 0.2s',
              width: '100%',
              boxSizing: 'border-box'
            }}
              onMouseOver={e => { e.target.style.background = 'var(--cyber-magenta)'; e.target.style.color = '#000'; }}
              onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cyber-magenta)'; }}
            >
              INITIALIZE
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
