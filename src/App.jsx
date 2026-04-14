import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import IntroAnimation from './components/IntroAnimation'
import FireCursor from './components/FireCursor'
import { Routes, Route, useLocation } from 'react-router-dom'
import Training from './pages/Training'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Stopwatch from './pages/Stopwatch'
import Counter from './pages/Counter'
import Palindrome from './pages/Palindrome'
import Calculator from './pages/Calculator'
import ThemeDemo from './pages/ThemeDemo'
import MapApp from './pages/MapApp'
import WeatherApp from './pages/WeatherApp'

export const THEMES = {
  solar: {
    name: 'SOLAR ECLIPSE',
    styles: {
      '--cyber-cyan': '#ff6a00',
      '--cyber-magenta': '#ff9d00',
      '--cyber-yellow': '#ff3300',
      '--text-main': '#fff',
      '--text-muted': '#aaa',
      '--bg-layer': '#0b0b0b',
      '--glass-bg': 'rgba(17, 17, 17, 0.75)',
      '--glass-border': 'rgba(255, 106, 0, 0.2)'
    }
  },
  cyberpunk: {
    name: 'CYBERPUNK',
    styles: {
      '--text-main': '#fff',
      '--text-muted': '#ddd',
      '--bg-layer': 'transparent',
      '--glass-bg': 'rgba(5, 5, 10, 0.6)'
    }
  },
  light: {
    name: 'GLACIER (LIGHT)',
    styles: {
      '--cyber-cyan': '#0066ff',
      '--cyber-magenta': '#ff0055',
      '--cyber-yellow': '#ff7700',
      '--text-main': '#111',
      '--text-muted': '#444',
      '--bg-layer': '#eef2f5',
      '--glass-bg': 'rgba(255, 255, 255, 0.8)',
      '--glass-border': 'rgba(0, 102, 255, 0.2)'
    }
  },
  neonBlue: {
    name: 'NEON BLUE',
    styles: {
      '--cyber-cyan': '#00e5ff',
      '--cyber-magenta': '#0044ff',
      '--cyber-yellow': '#aaddff',
      '--text-main': '#fff',
      '--text-muted': '#ccc',
      '--bg-layer': '#020513',
      '--glass-bg': 'rgba(0, 30, 60, 0.6)'
    }
  },
  matrix: {
    name: 'MATRIX',
    styles: {
      '--cyber-cyan': '#22ff22',
      '--cyber-magenta': '#00cc00',
      '--cyber-yellow': '#ccffcc',
      '--text-main': '#fff',
      '--text-muted': '#aaa',
      '--bg-layer': '#000a00',
      '--glass-bg': 'rgba(0, 20, 0, 0.8)'
    }
  }
};

export const THEME_KEYS = Object.keys(THEMES);

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showIntro, setShowIntro] = useState(true);
  const [themeIdx, setThemeIdx] = useState(THEME_KEYS.indexOf('neonBlue'));
  const { pathname } = useLocation();

  const cycleTheme = () => setThemeIdx((prev) => (prev + 1) % THEME_KEYS.length);
  const activeTheme = THEMES[THEME_KEYS[themeIdx]];
  const isIntroActive = showIntro && pathname.includes('/portfolio');

  useEffect(() => {
    if (pathname === '/') {
      setShowIntro(true);
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate offset from center for parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 20px offset
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ ...activeTheme.styles, backgroundColor: 'var(--bg-layer)', color: 'var(--text-main)', transition: 'background-color 1s ease, color 1s ease' }}>
      {/* Dynamic Animated Fire/Jellyfish Cursor Trail */}
      <FireCursor />

      {/* Ambient Mouse Lighting Aura */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--cyber-cyan) 0%, transparent 60%)',
        opacity: 0.15,
        pointerEvents: 'none',
        transform: `translate(${cursorPos.x - 200}px, ${cursorPos.y - 200}px)`,
        transition: 'transform 0.05s linear',
        zIndex: 9999,
        mixBlendMode: 'screen'
      }} />
      {isIntroActive && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={`app-container ${!isIntroActive ? 'content-visible' : ''}`} style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        opacity: isIntroActive ? 0 : 1,
        transition: 'opacity 1s ease-in'
      }}>
      {/* Background Parallax Layer */}
      <div style={{
        position: 'absolute',
        top: -50, left: -50, right: -50, bottom: -50,
        backgroundImage: 'radial-gradient(circle at center, rgba(0,255,255,0.05) 0%, transparent 70%)',
        transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Animated Background Texture & Particles */}
      <div className="noise-bg"></div>

      {/* Animated Glowing Orbs Map Dynamically To Themes */}
      <div className="orb" style={{ top: '10%', left: '20%', width: '300px', height: '300px', background: 'var(--cyber-cyan)', opacity: 0.15 }} />
      <div className="orb" style={{ top: '40%', right: '10%', width: '400px', height: '400px', background: 'var(--cyber-magenta)', opacity: 0.1 }} />
      <div className="orb" style={{ bottom: '20%', left: '15%', width: '350px', height: '350px', background: 'var(--cyber-yellow)', opacity: 0.12 }} />
      
      {/* Intense Center Radial Flow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--cyber-cyan) 0%, transparent 60%)', opacity: 0.08, pointerEvents: 'none', zIndex: 0 }} />

      {pathname.includes('/portfolio') && <Navbar cycleTheme={cycleTheme} activeThemeName={activeTheme.name} />}
      
      <main style={{ zIndex: 1, position: 'relative', maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Training cycleTheme={cycleTheme} activeThemeName={activeTheme.name} />} />
          <Route path="/portfolio" element={
            <>
              <div style={{
                position: 'fixed',
                top: '-5%', left: '-5%', right: '-5%', bottom: '-5%',
                backgroundImage: 'url(/tech_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.25,
                zIndex: 0,
                pointerEvents: 'none',
                transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
                transition: 'transform 0.1s ease-out',
                mixBlendMode: 'screen'
              }} />
              <div style={{ position: 'relative', zIndex: 1, transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`, transition: 'transform 0.1s ease-out', padding: '2rem 0' }}>
              <div className="portfolio-master-container">
                <div className="portfolio-glass-content">
                  <Hero mouseOffset={mousePosition} />
                  <About mouseOffset={mousePosition} />
                  <Services mouseOffset={mousePosition} />
                  <Skills mouseOffset={mousePosition} />
                  <Projects mouseOffset={mousePosition} />
                  <Contact mouseOffset={mousePosition} />
                </div>
              </div>
            </div>
            </>
          } />
          <Route path="/projects/login" element={<Login />} />
          <Route path="/projects/registration" element={<Registration />} />
          <Route path="/projects/stopwatch" element={<Stopwatch />} />
          <Route path="/projects/counter" element={<Counter />} />
          <Route path="/projects/palindrome" element={<Palindrome />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/theme" element={<ThemeDemo />} />
          <Route path="/projects/map" element={<MapApp />} />
          <Route path="/projects/weather" element={<WeatherApp />} />
        </Routes>
      </main>

      {pathname === '/portfolio' && (
        <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem',
        color: 'var(--cyber-cyan)',
        fontFamily: 'Orbitron, sans-serif',
        zIndex: 1
      }}>
        <p>© 2026 Ashish Kumar. All Rights Reserved.</p>
      </footer>
      )}
      </div>
    </div>
  )
}

export default App
