import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/landing'), 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #7c3aed 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '24px'
    }}>
      <div style={{ animation: 'floatAnimation 2s ease-in-out infinite' }}>
        <div style={{
          width: '76px',
          height: '76px',
          margin: '0 auto 18px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.3)'
        }}>
          <Sparkles size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>GEZ Career</h1>
        <p style={{ marginTop: '8px', fontSize: '1rem', opacity: 0.8 }}>Your Career. Without Borders.</p>
      </div>
    </div>
  );
};

export default Splash;
