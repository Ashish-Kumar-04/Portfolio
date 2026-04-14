import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

const TypewriterText = ({ text, delay = 50, startDelay = 0, trigger = true, Element = 'span', className, style, isGlitch, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    if (trigger && startDelay > 0 && !hasStarted) {
      const timer = setTimeout(() => setHasStarted(true), startDelay);
      return () => clearTimeout(timer);
    } else if (trigger && startDelay === 0 && !hasStarted) {
      setHasStarted(true);
    }
  }, [trigger, startDelay, hasStarted]);

  useEffect(() => {
    if (trigger && hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (trigger && hasStarted && currentIndex >= text.length && !completedRef.current) {
      completedRef.current = true;
      if (onComplete) onComplete();
    }
  }, [currentIndex, delay, text, hasStarted, trigger, onComplete]);

  return (
    <Element className={`${className} ${isGlitch && currentIndex >= text.length ? 'glitch-active' : ''}`} style={style} data-text={isGlitch ? currentText : undefined}>
      {currentText}<span className="cursor-blink" style={{ animation: currentIndex >= text.length ? 'none' : 'blink 0.8s step-end infinite', opacity: (currentIndex >= text.length || !trigger || !hasStarted) ? 0 : 1, color: 'inherit' }}>_</span>
    </Element>
  );
};

const Training = ({ cycleTheme, activeThemeName }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [phase, setPhase] = useState('intro'); // 'intro', 'transitioning', 'main'

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="training-hub" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      minHeight: '100vh', padding: '0 2rem', zIndex: 2, position: 'relative', overflowX: 'hidden'
    }}>

      {/* Floating React Logo */}
      <div className={`react-reactor ${phase === 'intro' ? 'logo-center' : 'logo-top-left'}`}>
        <div style={{ position: 'absolute', inset: '20%', background: 'var(--cyber-cyan)', borderRadius: '50%', filter: 'blur(20px)', animation: 'pulseCore 2s infinite alternate' }} />
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" style={{ animation: 'spin3D 10s linear infinite', zIndex: 2, filter: 'drop-shadow(0 0 10px var(--cyber-cyan))', color: 'var(--cyber-cyan)' }}>
          <circle cx="0" cy="0" r="2.05" fill="currentColor" style={{ animation: 'pulse 1s infinite alternate' }} />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>

      <div className={`title-cascade ${phase === 'intro' ? 'title-center' : 'title-top'}`}>
        <TypewriterText
          Element="h1"
          text="Tool Based Training with React.js"
          delay={30}
          isGlitch={true}
          onComplete={() => {
            setTimeout(() => setPhase('transitioning'), 500);
            setTimeout(() => setPhase('main'), 1400);
          }}
          className="orbitron glitch-text"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', marginBottom: '1rem',
            textShadow: '0 0 15px var(--cyber-magenta)'
          }}
        />
        <div style={{ height: '3px', width: phase === 'main' ? '80%' : '0%', background: 'linear-gradient(90deg, transparent, var(--cyber-yellow), transparent)', margin: '0 auto 1.5rem', transition: 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)' }} />
        <TypewriterText
          Element="h3"
          text="Ashish Kumar | B.Tech 2nd Year, Section B"
          delay={30}
          startDelay={350}
          trigger={phase === 'main'}
          className="orbitron"
          style={{
            fontSize: '1.1rem', color: 'var(--cyber-yellow)', letterSpacing: '2px', textTransform: 'uppercase'
          }}
        />
        <TypewriterText
          Element="h4"
          text="Mentored by Ms.Gargi Tripathi"
          delay={35}
          startDelay={1200}
          trigger={phase === 'main'}
          className="orbitron"
          style={{
            fontSize: '0.9rem', color: 'var(--cyber-cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.5rem', display: 'block'
          }}
        />
      </div>

      {/* Top Right Controls */}
      <div style={{
        position: 'absolute', top: '2rem', right: '2rem', zIndex: 100,
        display: 'flex', gap: '1rem', alignItems: 'center',
        opacity: phase === 'main' ? 1 : 0, pointerEvents: phase === 'main' ? 'auto' : 'none',
        transition: 'opacity 0.6s ease 0.3s'
      }}>
        {/* Theme Toggle */}
        <button onClick={cycleTheme} className="glass-panel orbitron theme-btn" style={{
          padding: '0.6rem 1.2rem', background: 'transparent',
          color: 'var(--cyber-yellow)', border: '1px solid var(--cyber-yellow)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem',
          transition: 'all 0.3s'
        }}>
          ⟳ {activeThemeName}
        </button>

        {/* Access Portfolio */}
        <Link to="/portfolio" className="top-right-link glass-panel" style={{
          padding: '0.6rem 1.2rem', textDecoration: 'none', color: 'var(--cyber-cyan)',
          fontFamily: 'Orbitron', fontWeight: 'bold', letterSpacing: '1px',
          border: '1px solid var(--cyber-cyan)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem'
        }}>
          <span style={{ fontSize: '1rem', animation: 'pulse 1.5s infinite alternate' }}>●</span>
          ACCESS PORTFOLIO
        </Link>
      </div>

      <div className="glass-panel" style={{
        maxWidth: '800px', padding: '2rem', marginBottom: '4rem', textAlign: 'center',
        borderLeft: '4px solid var(--cyber-cyan)', borderRight: '4px solid var(--cyber-cyan)',
        background: 'var(--glass-bg)',
        position: 'relative',
        opacity: phase === 'main' ? 1 : 0,
        transform: phase === 'main' ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.6s'
      }}>
        <TypewriterText
          Element="h2"
          text="SYSTEM: REACT 19.x DOM ARCHITECTURE"
          delay={20}
          startDelay={800}
          trigger={phase === 'main'}
          className="orbitron neon-text-cyan"
          style={{ marginBottom: '1rem', fontSize: '1.3rem' }}
        />
        <div style={{ opacity: phase === 'main' ? 1 : 0, transition: 'opacity 0.8s 1.2s' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', letterSpacing: '0.5px' }}>
            React bridges the optimal gap between <span style={{ color: 'var(--cyber-magenta)' }}>declarative intent</span> and <span style={{ color: 'var(--cyber-yellow)' }}>raw computational rendering</span>.
            Through Virtual DOM manipulation, state-synchronous Hooks, and deep component isolation, developers can synthesize living web layouts.
            The projects deployed below serve as mechanical iterations of these principles...
          </p>
        </div>
      </div>

      <div style={{ width: '100vw', background: 'var(--glass-bg)', borderTop: '1px solid var(--cyber-magenta)', borderBottom: '1px solid var(--cyber-magenta)', padding: '5rem 0', zIndex: 2, opacity: phase === 'main' ? 1 : 0, transition: 'all 0.6s ease 0.5s' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <Projects mouseOffset={mousePosition} />
        </div>
      </div>

      <div style={{ marginTop: '4rem', paddingBottom: '3rem', display: 'flex', justifyContent: 'center', width: '100%', zIndex: 2, opacity: phase === 'main' ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
        <Link to="/portfolio" className="giant-pulse-btn orbitron" style={{
          padding: '1rem 3rem', background: 'transparent',
          border: '2px solid var(--cyber-magenta)', color: 'var(--cyber-magenta)',
          fontSize: '1.1rem', textDecoration: 'none',
          textAlign: 'center', fontWeight: 'bold', position: 'relative', overflow: 'hidden'
        }}>
          <span style={{ position: 'relative', zIndex: 2 }}>INITIALIZE PRIMARY PORTFOLIO</span>
          <div className="btn-sweep" />
        </Link>
      </div>

      <style>{`
        /* Dynamic Theme Transitions applied to children globally through inheritances */
        * { transition: border-color 1s ease, color 1s ease, box-shadow 1s ease, text-shadow 1s ease; }
        
        .theme-btn:hover {
          background: rgba(255, 255, 0, 0.2) !important;
          box-shadow: 0 0 20px var(--cyber-yellow);
          transform: translateY(-2px);
        }

        /* Phase Transitions */
        .react-reactor {
          position: fixed;
          z-index: 101;
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.1s; /* Adjusted for faster trigger */
        }
        .logo-center {
          top: 45vh;
          left: 50vw;
          width: 140px;
          height: 140px;
          transform: translate(-50%, -100%);
        }
        .logo-top-left {
          top: 1.5rem;
          left: 1.5rem;
          width: 45px;
          height: 45px;
          transform: translate(0, 0);
        }

        .title-cascade {
          text-align: center;
          z-index: 2;
          width: 100%;
          transition: margin-top 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.1s;
          position: relative;
        }
        .title-center {
          margin-top: 45vh;
        }
        .title-top {
          margin-top: 10rem;
          margin-bottom: 4rem;
        }

        /* Deep Animations */
        @keyframes spin3D { 
          0% { transform: rotateY(0deg) rotateZ(0deg); } 
          50% { transform: rotateY(180deg) rotateZ(180deg); } 
          100% { transform: rotateY(360deg) rotateZ(360deg); } 
        }
        @keyframes pulseCore { 
          0% { opacity: 0.3; transform: scale(0.8); } 
          100% { opacity: 0.8; transform: scale(1.2); } 
        }

        /* Button Hovers */
        .top-right-link {
          transition: background 0.3s, box-shadow 0.3s, transform 0.3s, opacity 1s ease 0.5s;
        }
        .top-right-link:hover {
          background: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 20px var(--cyber-cyan);
          transform: translateY(-2px);
        }

        .giant-pulse-btn {
          transition: border-color 0.4s, color 0.4s, text-shadow 0.4s;
          box-shadow: 0 0 15px rgba(255,0,255,0.2) inset, 0 0 15px rgba(255,0,255,0.2);
        }
        .giant-pulse-btn:hover {
          color: var(--text-main);
          border-color: var(--text-main);
          text-shadow: 0 0 10px var(--text-main);
          box-shadow: 0 0 30px rgba(255,0,255,0.5) inset, 0 0 30px rgba(255,0,255,0.8);
        }
        .btn-sweep {
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          transition: 0.5s;
          z-index: 1;
        }
        .giant-pulse-btn:hover .btn-sweep {
          animation: sweep 0.8s forwards;
        }
        @keyframes sweep { 100% { left: 200%; } }

        /* Glitch Title */
        .glitch-text.glitch-active {
          position: relative;
        }
        .glitch-text.glitch-active::before, .glitch-text.glitch-active::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          color: var(--text-main);
        }
        .glitch-text.glitch-active::before {
          left: 2px;
          text-shadow: -2px 0 var(--cyber-cyan);
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        .glitch-text.glitch-active::after {
          left: -2px;
          text-shadow: -2px 0 var(--cyber-yellow);
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(10px, 9999px, 83px, 0); }
          20% { clip: rect(60px, 9999px, 14px, 0); }
          40% { clip: rect(3px, 9999px, 55px, 0); }
          60% { clip: rect(88px, 9999px, 20px, 0); }
          80% { clip: rect(40px, 9999px, 73px, 0); }
          100% { clip: rect(12px, 9999px, 30px, 0); }
        }
        
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default Training;
