import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Stopwatch = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps([{ id: Date.now(), time }, ...laps]);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <h2 className="orbitron neon-text-magenta" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>CHRONO-TRACKER</h2>
      
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem' }}>
        <div style={{
          fontFamily: 'Orbitron, monospace', fontSize: '3.5rem', color: isRunning ? 'var(--cyber-cyan)' : '#aaa',
          textShadow: isRunning ? '0 0 20px var(--cyber-cyan)' : 'none', marginBottom: '2rem', transition: 'color 0.3s, text-shadow 0.3s'
        }}>
          {formatTime(time)}
        </div>

        <div style={{ display: 'flex', gap: '1rem', width: '100%', marginBottom: '2rem' }}>
          <button onClick={() => setIsRunning(!isRunning)} style={{
            flex: 1, padding: '1rem', background: isRunning ? 'transparent' : 'var(--cyber-cyan)', 
            color: isRunning ? 'var(--cyber-cyan)' : '#000', border: '1px solid var(--cyber-cyan)',
            fontFamily: 'Orbitron', cursor: 'pointer', fontWeight: 'bold'
          }}>
            {isRunning ? 'HALT' : 'INITIATE'}
          </button>
          <button onClick={handleLap} style={{
            flex: 1, padding: '1rem', background: 'transparent', color: '#fff', border: '1px solid #555',
            fontFamily: 'Orbitron', cursor: 'pointer', opacity: isRunning ? 1 : 0.5
          }}>
            MARK LAP
          </button>
          <button onClick={handleReset} style={{
            flex: 1, padding: '1rem', background: 'transparent', color: 'var(--cyber-magenta)', border: '1px solid var(--cyber-magenta)',
            fontFamily: 'Orbitron', cursor: 'pointer'
          }}>
            RESET
          </button>
        </div>

        <div style={{ width: '100%', maxHeight: '200px', overflowY: 'auto', borderTop: '1px solid #333', paddingTop: '1rem' }}>
          {laps.map((lap, index) => (
            <div key={lap.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', color: '#ccc', fontFamily: 'monospace' }}>
              <span>LAP {laps.length - index}</span>
              <span style={{ color: 'var(--cyber-cyan)' }}>{formatTime(lap.time)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
