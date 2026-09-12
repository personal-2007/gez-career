import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

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
      background: '#0f172a',
      color: '#fff',
      textAlign: 'center',
      padding: '24px'
    }}>
      <div className="page-enter">
        <div style={{
          width: '76px',
          height: '76px',
          margin: '0 auto 18px',
          borderRadius: '20px',
          background: '#2563eb',
          border: '1px solid rgba(255,255,255,0.16)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.3)'
        }}>
          <Briefcase size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>GEZ Career</h1>
        <p style={{ marginTop: '8px', fontSize: '1rem', opacity: 0.8 }}>Your Career. Without Borders.</p>
      </div>
    </div>
  );
};

export default Splash;
