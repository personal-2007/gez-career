import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoSymbol } from '../../components/common/Logo';

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
        <div style={{ margin: '0 auto 18px', display: 'flex', justifyContent: 'center' }}>
          <LogoSymbol size={76} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>GEZ Career</h1>
        <p style={{ marginTop: '8px', fontSize: '1rem', opacity: 0.8 }}>Your Career. Without Borders.</p>
      </div>
    </div>
  );
};

export default Splash;
