import React from 'react';

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Modern CSS', level: 90 },
  { name: 'JavaScript / ES6+', level: 85 },
  { name: 'UI / UX Design', level: 70 },
  { name: 'Web Animations', level: 60 }
];

const Skills = ({ mouseOffset }) => {
  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
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
        MY SKILLS
      </h1>
      <h2 className="orbitron neon-text-cyan" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        My SKILLS
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        gap: 'clamp(0.5rem, 2vw, 1.5rem)',
        justifyContent: 'center',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`,
        transition: 'transform 0.1s ease-out',
        width: '100%',
        padding: '2rem 0.5rem 4rem 0.5rem',
      }}>
        {skills.map((skill, i) => {
          const centerIndex = Math.floor(skills.length / 2);
          const distance = i - centerIndex;
          const rotateY = distance * -15;
          // Ensure all cards stay at Z >= 0 to avoid being clipped by parent hit-plane
          const translateZ = 100 - (Math.abs(distance) * 50);
          
          return (
            <div key={i} className="glass-panel" style={{
              padding: 'clamp(1rem, 2vw, 2rem) 1rem',
              flex: '1 1 0', /* Allow equal shrinking and growing */
              minWidth: '100px', /* Allow them to shrink heavily on tiny screens */
              maxWidth: '250px',
              textAlign: 'center',
              transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
              transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ + 150}px) translateY(-20px) scale(1.15)`;
              e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.5)';
              e.currentTarget.style.zIndex = 10;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.zIndex = 1;
            }}>
              <h3 className="orbitron" style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.2rem' }}>{skill.name}</h3>
              <div style={{ width: '100%', height: '4px', background: 'rgba(0,255,255,0.1)', overflow: 'hidden', borderRadius: '2px' }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  background: 'var(--cyber-magenta)',
                  boxShadow: '0 0 10px var(--cyber-magenta)'
                }} />
              </div>
              <p style={{ marginTop: '1rem', color: 'var(--cyber-cyan)', fontFamily: 'Orbitron' }}>LVL.{skill.level}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
