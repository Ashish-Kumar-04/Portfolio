import React from 'react';

const Contact = ({ mouseOffset }) => {
  return (
    <section id="contact" style={{ padding: '5rem 0', position: 'relative' }}>
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
        CONTACT
      </h1>
      <h2 className="orbitron neon-text-magenta" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        Contact Me
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        transform: `translate(${mouseOffset.x * -0.1}px, ${mouseOffset.y * -0.1}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        {/* Feedback Form */}
        <div className="glass-panel" style={{ flex: '1 1 400px', padding: '2rem' }}>
          <h3 className="orbitron neon-text-cyan" style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="text" placeholder="Your Name" required style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', padding: '1rem', color: 'var(--text-main)', fontFamily: 'Rajdhani', outline: 'none' }} />
            <input type="email" placeholder="Your Email" required style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', padding: '1rem', color: 'var(--text-main)', fontFamily: 'Rajdhani', outline: 'none' }} />
            <textarea placeholder="Your Message" rows="5" required style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', padding: '1rem', color: 'var(--text-main)', fontFamily: 'Rajdhani', outline: 'none', resize: 'vertical' }}></textarea>
            <button type="submit" onClick={e => e.preventDefault()} style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--cyber-cyan)', color: 'var(--cyber-cyan)', fontFamily: 'Orbitron', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }} onMouseOver={e => { e.target.style.background = 'var(--cyber-cyan)'; e.target.style.color = '#000'; }} onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cyber-cyan)'; }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="glass-panel" style={{ flex: '1 1 300px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 className="orbitron neon-text-yellow" style={{ color: 'var(--cyber-yellow)', marginBottom: '1.5rem' }}>Social Links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="https://github.com/Ashish-Kumar-04" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '1rem', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', transition: '0.3s' }} onMouseOver={e => e.target.style.borderColor = 'var(--cyber-magenta)'} onMouseOut={e => e.target.style.borderColor = 'var(--glass-border)'}>
              <span className="orbitron">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ashish-kumar-321231329" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '1rem', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', transition: '0.3s' }} onMouseOver={e => e.target.style.borderColor = 'var(--cyber-cyan)'} onMouseOut={e => e.target.style.borderColor = 'var(--glass-border)'}>
              <span className="orbitron">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '1rem', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', transition: '0.3s' }} onMouseOver={e => e.target.style.borderColor = 'var(--cyber-yellow)'} onMouseOut={e => e.target.style.borderColor = 'var(--glass-border)'}>
              <span className="orbitron">Twitter / X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
