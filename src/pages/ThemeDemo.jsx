import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ThemeDemo = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const themeVars = {
    '--demo-bg': isDark ? '#05050A' : '#f0f4f8',
    '--demo-text': isDark ? '#ffffff' : '#1a202c',
    '--demo-panel': isDark ? 'rgba(15, 15, 25, 0.7)' : '#ffffff',
    '--demo-accent': isDark ? 'var(--cyber-cyan)' : '#3182ce',
    '--demo-border': isDark ? 'rgba(0, 255, 255, 0.3)' : '#e2e8f0'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <h2 className="orbitron neon-text-magenta" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>THEME MATRIX</h2>
      
      <div style={{
        ...themeVars,
        width: '100%', maxWidth: '600px', padding: '2rem', borderRadius: '15px',
        background: 'var(--demo-bg)', color: 'var(--demo-text)', transition: 'all 0.5s ease',
        boxShadow: isDark ? '0 0 30px rgba(0, 255, 255, 0.1)' : '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--demo-border)' }}>
          <h3 style={{ fontFamily: 'Orbitron', margin: 0 }}>DASHBOARD</h3>
          <button onClick={toggleTheme} style={{
            padding: '0.8rem 1.5rem', background: 'transparent',
            border: '2px solid var(--demo-accent)', color: 'var(--demo-text)',
            borderRadius: '25px', cursor: 'pointer', fontFamily: 'Orbitron', transition: 'all 0.3s'
          }}
          onMouseOver={e => { e.target.style.background = 'var(--demo-accent)'; e.target.style.color = isDark ? '#000' : '#fff'; }}
          onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--demo-text)'; }}
          >
            {isDark ? 'ACTIVATE LIGHT' : 'ACTIVATE DARK'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              background: 'var(--demo-panel)', padding: '1.5rem', borderRadius: '10px',
              border: '1px solid var(--demo-border)', transition: 'all 0.5s ease'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>METRIC 0{i}</div>
              <div style={{ fontSize: '2rem', fontFamily: 'monospace', color: 'var(--demo-accent)' }}>
                {(Math.random() * 100).toFixed(2)}%
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--demo-panel)', borderRadius: '10px', border: '1px solid var(--demo-border)', transition: 'all 0.5s ease' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--demo-accent)' }}>SYSTEM LOG</h4>
          <p style={{ lineHeight: '1.6', fontSize: '0.9rem', color: isDark ? '#ccc' : '#4a5568' }}>
            The Theme Matrix demonstrates localized CSS variable injection to flawlessly transition between visual states.
            Notice how the typography, borders, and shadows seamlessly react to the centralized state change.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ThemeDemo;
