import React from 'react';

const services = [
  { title: 'Web Development', desc: 'High-performance React applications built with modern engineering practices.', icon: '</>' },
  { title: 'UI / UX Design', desc: 'Crafting highly interactive, visually striking interfaces that captivate users.', icon: '◇' },
  // { title: 'Performance Tuning', desc: 'Optimizing load times and frame rates for butter-smooth web experiences.', icon: '⚡' }
];

const Services = ({ mouseOffset }) => {
  return (
    <section id="services" style={{ padding: '5rem 0', position: 'relative', zIndex: 1 }}>
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
        SERVICES
      </h1>
      <h2 className="orbitron neon-text-magenta" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        What I Do
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        transform: `translate(${mouseOffset.x * -0.15}px, ${mouseOffset.y * -0.15}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        {services.map((srv, i) => (
          <div key={i} className="glass-panel" style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'var(--cyber-cyan)',
              textShadow: '0 0 15px var(--cyber-cyan)'
            }}>
              {srv.icon}
            </div>
            <h3 className="orbitron" style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}>{srv.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
