import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Palindrome = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  
  const cleanInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const isPalindrome = cleanInput.length > 0 && cleanInput === cleanInput.split('').reverse().join('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '450px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <h2 className="orbitron neon-text-cyan" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>SYMMETRY AI</h2>
      
      <div className="glass-panel" style={{ width: '100%', maxWidth: '450px', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '2rem' }}>
          Evaluate structural string reversibility in real-time.
        </p>

        <input 
          type="text" 
          placeholder="INPUT SEQUENCE..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: '100%', padding: '1.5rem', background: 'rgba(0,0,0,0.5)',
            border: '2px solid', borderColor: isPalindrome ? 'var(--cyber-cyan)' : input.length > 0 ? 'var(--cyber-magenta)' : '#555',
            color: '#fff', fontSize: '1.2rem', outline: 'none', fontFamily: 'monospace', textAlign: 'center', boxSizing: 'border-box',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: isPalindrome ? '0 0 20px rgba(0, 255, 255, 0.3)' : 'none'
          }}
        />

        <div style={{ marginTop: '3rem', width: '100%', position: 'relative', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {input.length === 0 ? (
            <span style={{ color: '#555', fontFamily: 'Orbitron' }}>WAITING FOR INPUT...</span>
          ) : isPalindrome ? (
            <div style={{ animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', color: 'var(--cyber-cyan)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✓</div>
              <div style={{ fontFamily: 'Orbitron', letterSpacing: '2px' }}>SYMMETRY DETECTED</div>
            </div>
          ) : (
            <div style={{ animation: 'shake 0.5s', color: 'var(--cyber-magenta)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✗</div>
              <div style={{ fontFamily: 'Orbitron', letterSpacing: '2px' }}>ASYMMETRICAL</div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes popIn { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
      `}</style>
    </div>
  );
};

export default Palindrome;
