import React, { useState, useEffect } from 'react';

const TypewriterName = () => {
  const [text, setText] = useState('');
  const fullText = "Ashish Kumar";

  useEffect(() => {
    let timer;
    const startTyping = () => {
      let i = 0;
      timer = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(timer);
      }, 150);
    };

    const checkIntro = () => {
      if (document.querySelector('.intro-overlay')) {
        setTimeout(checkIntro, 500);
      } else {
        setTimeout(startTyping, 300);
      }
    };

    checkIntro();
    return () => { if (timer) clearInterval(timer); };
  }, []);

  return (
    <h1 className="orbitron" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.8rem', lineHeight: '1.2' }}>
      <span style={{ color: 'var(--cyber-magenta)' }}>{text}</span>
      <span style={{ borderRight: '4px solid white', marginLeft: '5px', animation: 'hero-blink 0.8s step-end infinite' }}></span>
      <style>{`@keyframes hero-blink { 50% { border-color: transparent; } }`}</style>
    </h1>
  );
};

const Hero = ({ mouseOffset }) => {
  return (
    <section id="hero" style={{
      minHeight: '45vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      <div style={{
        zIndex: 2,
        transform: `translate(${mouseOffset?.x ? mouseOffset.x * 0.2 : 0}px, ${mouseOffset?.y ? mouseOffset.y * 0.2 : 0}px)`,
        transition: 'transform 0.1s ease-out',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '280px'
      }}>
        {/* Avatar Image */}
        <div style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '1.2rem',
          border: '3px solid transparent',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          position: 'relative'
        }}>
          <img src="/avatar.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Main Title Name */}
        <TypewriterName />

        {/* Subtitle */}
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-main)',
          fontWeight: '500',
          letterSpacing: '1px',
          fontFamily: 'Rajdhani, sans-serif'
        }}>
          A Creative UI/UX Designer & Full Stack Developer.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        color: 'var(--text-muted)',
        fontFamily: 'Rajdhani, sans-serif',
        fontSize: '0.9rem',
        letterSpacing: '1px',
        zIndex: 2
      }}>
        <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-muted)' }}></div>
        Scroll Down
      </div>
    </section>
  );
};

export default Hero;
