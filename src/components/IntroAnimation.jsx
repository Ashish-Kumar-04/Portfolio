import React, { useState, useEffect } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fading out after 5.5 seconds to give enough time to see the animation
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 5500);

    // Call onComplete after transition finishes (6.2s)
    const timer2 = setTimeout(() => {
      onComplete();
    }, 6200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="stars-background"></div>
      
      <div className="intro-content">
        {/* User's Image in a Circle */}
        <div className="avatar-wrapper">
          <img src="/avatar.png" alt="Ashish Kumar" className="intro-avatar" />
          <div className="avatar-ring"></div>
        </div>

        {/* Signature Animation */}
        <div className="signature-container">
          <svg className="signature-svg" viewBox="0 0 400 100">
            <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" className="signature-text">
              {"Ashish kumar".split('').map((char, index) => (
                <tspan 
                  key={index} 
                  className="letter" 
                  style={{ '--delay': `${0.5 + index * 0.15}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </tspan>
              ))}
            </text>
            {/* Dynamic Hand-drawn Underline linking from last letter */}
            <path 
              className="signature-underline"
              d="M 290,75 L 110,75"
            />
          </svg>
        </div>
        
        {/* Typing Text */}
        <div className="typing-container-new">
          <h2 className="typing-text-new">welcome to the portfolio...</h2>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
