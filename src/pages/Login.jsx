import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      alert('Authentication Successful!');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '450px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '450px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        
        {isAuthenticating && (
          <div style={{
            position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 10, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', animation: 'fadeIn 0.3s'
          }}>
            <div style={{
              width: '50px', height: '50px', border: '3px solid transparent', borderTopColor: 'var(--cyber-cyan)',
              borderRadius: '50%', animation: 'spin 1s linear infinite'
            }} />
            <p className="orbitron" style={{ color: 'var(--cyber-cyan)', marginTop: '1rem', letterSpacing: '2px' }}>AUTHORIZING...</p>
          </div>
        )}

        <h2 className="orbitron" style={{ textAlign: 'center', color: 'var(--cyber-magenta)', marginBottom: '2rem', fontSize: '2rem' }}>
          SYSTEM LOGIN
        </h2>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ color: 'var(--cyber-cyan)', fontFamily: 'Orbitron', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>USER IDENTIFICATION</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--cyber-cyan)',
                color: '#fff', outline: 'none', fontFamily: 'monospace', boxSizing: 'border-box'
              }} 
            />
          </div>
          <div>
            <label style={{ color: 'var(--cyber-cyan)', fontFamily: 'Orbitron', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>ACCESS KEY</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--cyber-cyan)',
                color: '#fff', outline: 'none', fontFamily: 'monospace', boxSizing: 'border-box'
              }} 
            />
          </div>
          <button type="submit" style={{
            marginTop: '1rem', padding: '1rem', background: 'var(--cyber-cyan)', color: '#000', border: 'none',
            fontFamily: 'Orbitron', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
          }}
          onMouseOver={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cyber-cyan)'; e.target.style.border = '1px solid var(--cyber-cyan)'; }}
          onMouseOut={e => { e.target.style.background = 'var(--cyber-cyan)'; e.target.style.color = '#000'; e.target.style.border = 'none'; }}
          >
            GRANT ACCESS
          </button>
        </form>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
          <span style={{ color: '#aaa' }}>Unregistered Entity? </span>
          <Link to="/projects/registration" style={{ color: 'var(--cyber-magenta)', textDecoration: 'underline' }}>Initialize Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
