import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OPENWEATHER_API_KEY = "dc186f172a35b25d57ccb38b51e96e79";

const WeatherApp = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`);
      if (!response.ok) throw new Error('Location data not found or API key invalid.');

      const data = await response.json();
      setWeatherData({
        temp: data.main.temp,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        wind: data.wind.speed
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => setLoading(false), 500); // Artificial delay for animation
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '500px', marginBottom: '1rem' }}><button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer',  color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem'  }}>← RETURN TO MATRIX</button></div>
      <h2 className="orbitron neon-text-yellow" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>ATMOSPHERE NODE</h2>

      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>

        <form onSubmit={fetchWeather} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="ENTER CITY NAME"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              flex: 1, padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--cyber-yellow)',
              color: '#fff', outline: 'none', fontFamily: 'monospace'
            }}
          />
          <button type="submit" style={{
            padding: '1rem 2rem', background: 'transparent', color: 'var(--cyber-yellow)',
            border: '1px solid var(--cyber-yellow)', fontFamily: 'Orbitron', cursor: 'pointer', transition: 'all 0.3s'
          }}
            onMouseOver={e => { e.target.style.background = 'var(--cyber-yellow)'; e.target.style.color = '#000'; }}
            onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cyber-yellow)'; }}
          >
            SCAN
          </button>
        </form>

        {loading && (
          <div style={{ textAlign: 'center', color: 'var(--cyber-cyan)', padding: '2rem' }}>
            <div style={{ animation: 'pulse 1s infinite' }}>FETCHING TELEMETRY...</div>
          </div>
        )}

        {error && (
          <div style={{ color: 'var(--cyber-magenta)', border: '1px solid var(--cyber-magenta)', padding: '1rem', textAlign: 'center', backgroundColor: 'rgba(255,0,255,0.1)' }}>
            [ERROR] {error}
          </div>
        )}

        {weatherData && !loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ fontSize: '4rem', fontFamily: 'Orbitron', color: 'var(--cyber-cyan)', textShadow: '0 0 20px var(--cyber-cyan)' }}>
              {Math.round(weatherData.temp)}°C
            </div>

            <div style={{ fontSize: '1.2rem', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem' }}>
              {weatherData.desc}
            </div>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '0.5rem' }}>HUMIDITY</div>
                <div style={{ color: 'var(--cyber-yellow)', fontFamily: 'monospace', fontSize: '1.2rem' }}>{weatherData.humidity}%</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '0.5rem' }}>WIND SPEED</div>
                <div style={{ color: 'var(--cyber-yellow)', fontFamily: 'monospace', fontSize: '1.2rem' }}>{weatherData.wind}m/s</div>
              </div>
            </div>
          </div>
        )}

      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </div>
  );
};

export default WeatherApp;
