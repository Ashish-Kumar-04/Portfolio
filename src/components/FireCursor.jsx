import React, { useEffect, useRef } from 'react';

const FireCursor = () => {
  const outlineRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    let mouse = { x: -1000, y: -1000 };
    let points = Array.from({ length: 20 }, () => ({ x: -1000, y: -1000 }));
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    const animate = () => {
      // Main head follows instantly
      points[0].x += (mouse.x - points[0].x) * 0.8;
      points[0].y += (mouse.y - points[0].y) * 0.8;

      // Tentacles/Fire Trail uses easing to create the dragging effect
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.45;
        points[i].y += (points[i - 1].y - points[i].y) * 0.45;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${mouse.x - 20}px, ${mouse.y - 20}px)`;
      }

      trailsRef.current.forEach((ref, index) => {
        if (ref) {
          // Inner core shrinks, outer blurs stay large
          ref.style.transform = `translate(${points[index].x}px, ${points[index].y}px) scale(${1 - index * 0.03})`;
        }
      });

      requestAnimationFrame(animate);
    };

    let animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 99999, pointerEvents: 'none' }}>
      
      {/* Targetting Outline */}
      <div 
        ref={outlineRef}
        style={{
          width: '30px', height: '30px', border: '1px solid var(--cyber-cyan)',
          borderRadius: '50%', position: 'absolute',
          opacity: 0.8, boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)'
        }}
      />
      
      {/* Jellyfish / Fire Trail Array */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          style={{
            position: 'absolute',
            width: `${100 - i * 3}px`,
            height: `${100 - i * 3}px`,
            borderRadius: '50%',
            // Gradients shift colors down the 'tentacle' linking theme vars
            background: `radial-gradient(circle, ${i < 5 ? 'var(--cyber-cyan)' : 'var(--cyber-magenta)'} 0%, transparent 60%)`,
            filter: `blur(${8 + i}px)`,
            opacity: 0.6 - (i * 0.03), // Reduced overall brightness heavily
            transform: 'translate(-1000px, -1000px)',
            marginLeft: `-${(100 - i * 3) / 2}px`, 
            marginTop: `-${(100 - i * 3) / 2}px`,
            willChange: 'transform' // Hardware acceleration!
          }}
        />
      ))}
    </div>
  );
};

export default FireCursor;
