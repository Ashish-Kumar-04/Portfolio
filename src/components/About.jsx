import React from 'react';

const About = ({ mouseOffset }) => {
  return (
    <section id="about" style={{
      position: 'relative',
      padding: '4rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* Background large text */}
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
        ABOUT ME
      </h1>

      <h2 className="orbitron" style={{
        color: 'var(--cyber-yellow)',
        fontSize: '2rem',
        marginBottom: '5rem',
        position: 'relative',
        zIndex: 2,
        paddingBottom: '0.5rem',
        borderBottom: '2px solid var(--cyber-yellow)'
      }}>
        ABOUT ME
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        {/* Left Side: Avatar */}
        <div style={{
          flex: '1 1 350px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          transform: `translate(${mouseOffset?.x ? mouseOffset.x * 0.5 : 0}px, ${mouseOffset?.y ? mouseOffset.y * 0.5 : 0}px)`,
          transition: 'transform 0.1s ease-out',
          zIndex: 2
        }}>
          <div className="glass-panel float" style={{
            padding: '1rem',
            borderRadius: '10px',
            position: 'relative'
          }}>
            <img src="/avatar.png" alt="Ashish Kumar" style={{
              width: '100%',
              maxWidth: '350px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '5px',
              border: '1px solid var(--glass-border)'
            }} />

            {/* Floating module to keep cyberpunk aesthetic */}
            <div className="float-delay glass-panel" style={{
              position: 'absolute', top: '-10px', right: '-10px', padding: '0.5rem', fontSize: '0.8rem', color: 'var(--cyber-yellow)'
            }}>STATUS: ONLINE</div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div style={{ flex: '1 1 450px', zIndex: 2 }}>
          <h3 className="orbitron" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Hi There! I'm Ashish Kumar</h3>
          <h4 style={{ color: 'var(--cyber-magenta)', marginBottom: '1.5rem', fontWeight: '500', fontSize: '1.1rem' }}>Front-End Developer</h4>

          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
            I am a Front-End Developer with a strong focus on digital interfaces. I aim to create, inspire, and motivate people through responsive, performance-driven web applications with a view to making a favorable impact.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '100px 1fr',
            gap: '1rem',
            marginBottom: '2.5rem',
            color: 'var(--text-muted)',
            fontSize: '1rem'
          }}>
            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Birthday</span>
            <span>: March 16, 2007</span>

            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Phone</span>
            <span>: +91 9335610521</span>

            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Email</span>
            <span>: Kumarashishnewada@gmail.com</span>

            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>From</span>
            <span>: Uttar Pradesh,Prayagraj,India</span>

            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Language</span>
            <span>: English, Hindi</span>

            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Freelance</span>
            <span>: Available</span>
          </div>

          <button className="glass-panel" style={{
            padding: '0.8rem 2rem',
            color: 'var(--bg-layer)',
            backgroundColor: 'var(--cyber-yellow)',
            border: 'none',
            borderRadius: '25px',
            fontFamily: 'Orbitron',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 0 15px rgba(255,0,60,0.4)'
          }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 0 25px rgba(255,0,60,0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 0 15px rgba(255,0,60,0.4)';
            }}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
