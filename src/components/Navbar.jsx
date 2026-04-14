import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cycleTheme, activeThemeName }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
      border: '1px solid var(--glass-border)',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(15px)',
      position: 'sticky',
      top: '1rem',
      width: '90%',
      maxWidth: '1000px',
      margin: '1rem auto 2rem auto',
      borderRadius: '50px',
      zIndex: 100,
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      transition: 'all 0.3s ease'
    }}>
      <div className="orbitron neon-text-cyan" style={{ fontSize: '1.5rem', fontWeight: 'bold', transition: 'color 1s ease' }}>
        Ashish.
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" className="orbitron" style={{ color: 'var(--text-main)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--cyber-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>TRAINING NODE</Link>
        <a href="/portfolio#services" className="orbitron" style={{ color: 'var(--text-main)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--cyber-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>SERVICES</a>
        <a href="/portfolio#skills" className="orbitron" style={{ color: 'var(--text-main)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--cyber-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>SKILLS</a>
        <a href="/portfolio#projects" className="orbitron" style={{ color: 'var(--text-main)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--cyber-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>PROJECTS</a>
        <a href="/portfolio#contact" className="orbitron" style={{ color: 'var(--text-main)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--cyber-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>CONTACT</a>
        
        {cycleTheme && (
          <button 
            onClick={cycleTheme} 
            title={`Switch Theme (Current: ${activeThemeName})`} 
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--cyber-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              marginLeft: '0.5rem',
              transition: 'transform 0.3s ease, color 1s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'rotate(180deg) scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"></path>
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
