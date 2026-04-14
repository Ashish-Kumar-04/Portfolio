import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet default marker bug fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Helper component to pan map dynamically
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    // Only pan the map if the incoming searched center actually changes!
    // preserve the user's current zoom level so we don't snap them randomly.
    map.flyTo(center, Math.max(map.getZoom(), 12), {
      duration: 1.5
    });
  }, [center, map]);
  return null;
};

const defaultCenter = [28.6139, 77.2090]; // New Delhi

const MapApp = () => {
  const navigate = useNavigate();
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Search logic using Nominatim OpenStreetMap Free API
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.length > 2 && isSearching) {
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5`);
          const data = await res.json();
          setSuggestions(data);
        } catch (error) {
          console.error('Error fetching OpenStreetMap places:', error);
        }
      } else {
        setSuggestions([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, isSearching]);

  const handleSelectPlace = (place) => {
    const lat = parseFloat(place.lat);
    const lon = parseFloat(place.lon);
    setMapCenter([lat, lon]);
    setSearchQuery(place.display_name);
    setSuggestions([]);
    setIsSearching(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '1rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--cyber-cyan)', textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.9rem' }}>← RETURN TO MATRIX</button>
      </div>
      <h2 className="orbitron neon-text-cyan" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>GLOBAL RECON (OSM)</h2>

      <div className="glass-panel" style={{ width: '100%', maxWidth: '800px', padding: '2rem', position: 'relative' }}>
        <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Real-time geospatial tracking transitioned to <span style={{ color: 'var(--cyber-magenta)' }}>OpenStreetMap & Leaflet</span> architecture.
          Fully autonomous. 100% Free. No billing required.
        </p>

        {/* Custom Open-Source Autocomplete */}
        <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setIsSearching(true); }}
            placeholder="Search global coordinates database..."
            style={{
              boxSizing: 'border-box',
              border: '1px solid var(--cyber-cyan)',
              width: '100%',
              height: '45px',
              padding: '0 15px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
              fontSize: '1rem',
              outline: 'none',
              background: 'var(--glass-bg)',
              color: 'var(--text-main)',
              fontFamily: 'Rajdhani',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6)'}
            onBlur={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)'}
          />
          
          {/* Custom Dropdown Suggestions */}
          {suggestions.length > 0 && (
            <div style={{
              position: 'absolute', top: '55px', left: 0, width: '100%',
              backgroundColor: '#0a0a10', border: '1px solid var(--cyber-cyan)',
              borderRadius: '5px', zIndex: 999999, boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
              fontFamily: 'Rajdhani',
              maxHeight: '250px', overflowY: 'auto'
            }}>
              {suggestions.map((p, i) => (
                <div key={i} onClick={() => handleSelectPlace(p)} style={{
                  padding: '12px 15px', color: '#aaa', cursor: 'pointer',
                  borderBottom: i !== suggestions.length - 1 ? '1px solid rgba(0,255,255,0.1)' : 'none',
                  transition: '0.2s', fontSize: '1rem', lineHeight: '1.4'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,255,255,0.15)'; e.currentTarget.style.color = 'var(--cyber-cyan)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#aaa'; }}
                >
                  <span style={{ color: 'var(--cyber-magenta)' }}>{p.type.toUpperCase()}:</span> {p.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Leaflet Map Rendering via Color-Inverted Standard OSM */}
        <div style={{ border: '2px solid var(--cyber-cyan)', padding: '5px', borderRadius: '15px', overflow: 'hidden' }}>
          <MapContainer 
            center={mapCenter} 
            zoom={12} 
            style={{ width: '100%', height: '400px', backgroundColor: '#0a0a0a', borderRadius: '10px' }}
          >
            <TileLayer
               className="cyber-tiles"
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ChangeView center={mapCenter} />
            <Marker position={mapCenter} />
          </MapContainer>
        </div>
      </div>
      
      <style>{`
        /* Dynamic filter magically translates standard daytime map to high-contrast Cyberpunk Dark map! */
        .cyber-tiles {
          filter: invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%);
        }
      `}</style>
    </div>
  );
};

export default MapApp;
