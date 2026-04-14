import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Counter = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '300px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <h2 className="orbitron neon-text-magenta" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>QUANTUM COUNTER</h2>
      
      <div className="glass-panel" style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', gap: '2rem' }}>
        
        {/* Number Display */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', width: '150px', height: '150px',
          borderRadius: '50%', border: '4px solid', borderColor: count > 0 ? 'var(--cyber-cyan)' : count < 0 ? 'var(--cyber-magenta)' : '#555',
          fontFamily: 'Orbitron', fontSize: '4rem', color: '#fff',
          boxShadow: count > 0 ? '0 0 30px var(--cyber-cyan)' : count < 0 ? '0 0 30px var(--cyber-magenta)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', transform: `scale(${1 + Math.abs(count) * 0.05 > 1.5 ? 1.5 : 1 + Math.abs(count) * 0.05})`
        }}>
          {count}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
          <button onClick={decrement} style={{
            flex: 1, padding: '1rem', background: 'transparent', color: 'var(--cyber-magenta)', border: '1px solid var(--cyber-magenta)',
            fontFamily: 'Orbitron', cursor: 'pointer', fontSize: '1.5rem', transition: 'all 0.2s'
          }}
          onMouseOver={e => e.target.style.background = 'rgba(255, 0, 255, 0.2)'}
          onMouseOut={e => e.target.style.background = 'transparent'}>
            -
          </button>
          <button onClick={reset} style={{
            padding: '1rem', background: 'transparent', color: '#ccc', border: '1px solid #555',
            fontFamily: 'Orbitron', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.2s'
          }}
          onMouseOver={e => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
          onMouseOut={e => e.target.style.background = 'transparent'}>
            RST
          </button>
          <button onClick={increment} style={{
            flex: 1, padding: '1rem', background: 'transparent', color: 'var(--cyber-cyan)', border: '1px solid var(--cyber-cyan)',
            fontFamily: 'Orbitron', cursor: 'pointer', fontSize: '1.5rem', transition: 'all 0.2s'
          }}
          onMouseOver={e => e.target.style.background = 'rgba(0, 255, 255, 0.2)'}
          onMouseOut={e => e.target.style.background = 'transparent'}>
            +
          </button>
        </div>

      </div>
    </div>
  );
};

export default Counter;
