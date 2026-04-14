import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else {
      setStep(3);
      setTimeout(() => alert('Entity successfully registered into the matrix.'), 1000);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '500px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '3rem', position: 'relative' }}>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
          <div style={{ height: '4px', flex: 1, background: 'var(--cyber-cyan)', boxShadow: '0 0 10px var(--cyber-cyan)' }} />
          <div style={{ height: '4px', flex: 1, background: step >= 2 ? 'var(--cyber-cyan)' : '#333', boxShadow: step >= 2 ? '0 0 10px var(--cyber-cyan)' : 'none', transition: 'all 0.5s' }} />
        </div>

        <h2 className="orbitron" style={{ textAlign: 'center', color: 'var(--cyber-cyan)', marginBottom: '2rem', fontSize: '1.8rem' }}>
          {step === 1 ? 'ESTABLISH IDENTITY' : 'SECURE CONNECTION'}
        </h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {step === 1 && (
            <div style={{ animation: 'fadeIn 0.5s' }}>
              <div>
                <label style={{ color: 'var(--cyber-magenta)', fontFamily: 'Orbitron', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>DESIGNATION (USERNAME)</label>
                <input required type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--cyber-magenta)', color: '#fff', outline: 'none', fontFamily: 'monospace', boxSizing: 'border-box', marginBottom: '1.5rem' }} />
              </div>
              <div>
                <label style={{ color: 'var(--cyber-magenta)', fontFamily: 'Orbitron', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>COMMUNICATION NODE (EMAIL)</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--cyber-magenta)', color: '#fff', outline: 'none', fontFamily: 'monospace', boxSizing: 'border-box' }} />
              </div>
            </div>
          )}

          {step >= 2 && (
            <div style={{ animation: 'fadeIn 0.5s' }}>
              <div>
                <label style={{ color: 'var(--cyber-cyan)', fontFamily: 'Orbitron', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>ENCRYPTION KEY (PASSWORD)</label>
                <input required type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--cyber-cyan)', color: '#fff', outline: 'none', fontFamily: 'monospace', boxSizing: 'border-box', marginBottom: '1.5rem' }} />
              </div>
            </div>
          )}

          <button type="submit" style={{
            marginTop: '1rem', padding: '1rem', background: 'transparent', color: 'var(--cyber-cyan)', border: '1px solid var(--cyber-cyan)',
            fontFamily: 'Orbitron', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s'
          }}
          onMouseOver={e => { e.target.style.background = 'var(--cyber-cyan)'; e.target.style.color = '#000'; }}
          onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cyber-cyan)'; }}
          >
            {step === 1 ? 'PROCEED TO PHASE 2' : 'FINALIZE REGISTRATION'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
