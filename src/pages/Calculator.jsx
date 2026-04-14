import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Calculator = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const appendNum = (num) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const calculate = () => {
    try {
      // Basic safe eval equivalent using Function for demo purposes
      const result = new Function('return ' + display)();
      setEquation(display + '=');
      setDisplay(String(result));
    } catch {
      setDisplay('ERR');
    }
  };

  const checkArmstrong = () => {
    const num = parseInt(display);
    if (isNaN(num)) return;
    
    // An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
    // E.g., 153 = 1^3 + 5^3 + 3^3 
    // In general, sum of its digits raised to the power of the number of digits.
    const strNum = String(num);
    const power = strNum.length;
    let sum = 0;
    for(let i=0; i<power; i++) {
      sum += Math.pow(parseInt(strNum[i]), power);
    }
    
    setEquation(`Armstrong Check: ${num}`);
    if(sum === num) {
      setDisplay('TRUE');
    } else {
      setDisplay('FALSE');
    }
  };

  const btnStyle = {
    padding: '1.2rem',
    background: 'rgba(5, 5, 10, 0.8)',
    border: '1px solid #333',
    color: '#fff',
    fontFamily: 'Orbitron',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  const btnSecondaryStyle = {
    ...btnStyle,
    color: 'var(--cyber-cyan)',
    borderColor: 'var(--cyber-cyan)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '350px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <h2 className="orbitron neon-text-yellow" style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--cyber-yellow)' }}>MATH CORE</h2>
      
      <div className="glass-panel" style={{ width: '100%', maxWidth: '350px', padding: '1.5rem' }}>
        
        {/* Screen */}
        <div style={{ background: '#050505', border: '1px solid var(--cyber-yellow)', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100px' }}>
          <div style={{ color: '#aaa', fontSize: '0.8rem', fontFamily: 'monospace', minHeight: '1rem' }}>{equation}</div>
          <div style={{ color: 'var(--cyber-yellow)', fontSize: '2.5rem', fontFamily: 'Orbitron', overflow: 'hidden' }}>{display}</div>
        </div>

        {/* Action Bar */}
        <button onClick={checkArmstrong} style={{ width: '100%', background: 'transparent', border: '1px solid var(--cyber-magenta)', color: 'var(--cyber-magenta)', padding: '0.8rem', fontFamily: 'Orbitron', marginBottom: '1rem', cursor: 'pointer' }}
          onMouseOver={e => e.target.style.background = 'rgba(255,0,255,0.1)'} onMouseOut={e => e.target.style.background = 'transparent'}>
          DETECT ARMSTRONG NUM
        </button>

        {/* Numpad */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
          <button style={btnStyle} onClick={() => {setDisplay('0'); setEquation('');}}>C</button>
          <button style={btnStyle} onClick={() => setDisplay(display.slice(0, -1) || '0')}>DEL</button>
          <button style={btnSecondaryStyle} onClick={() => appendNum('/')}>/</button>
          <button style={btnSecondaryStyle} onClick={() => appendNum('*')}>*</button>

          <button style={btnStyle} onClick={() => appendNum('7')}>7</button>
          <button style={btnStyle} onClick={() => appendNum('8')}>8</button>
          <button style={btnStyle} onClick={() => appendNum('9')}>9</button>
          <button style={btnSecondaryStyle} onClick={() => appendNum('-')}>-</button>

          <button style={btnStyle} onClick={() => appendNum('4')}>4</button>
          <button style={btnStyle} onClick={() => appendNum('5')}>5</button>
          <button style={btnStyle} onClick={() => appendNum('6')}>6</button>
          <button style={btnSecondaryStyle} onClick={() => appendNum('+')}>+</button>

          <button style={btnStyle} onClick={() => appendNum('1')}>1</button>
          <button style={btnStyle} onClick={() => appendNum('2')}>2</button>
          <button style={btnStyle} onClick={() => appendNum('3')}>3</button>
          <button style={{...btnSecondaryStyle, gridRow: 'span 2', background: 'var(--cyber-yellow)', color: '#000', borderColor: 'var(--cyber-yellow)'}} onClick={calculate}>=</button>

          <button style={{...btnStyle, gridColumn: 'span 2'}} onClick={() => appendNum('0')}>0</button>
          <button style={btnStyle} onClick={() => appendNum('.')}>.</button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
