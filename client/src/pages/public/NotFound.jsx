import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button';

export const NotFound = () => {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <div className="glass-card" style={{ padding: '40px', maxWidth: '480px' }}>
        <Compass size={56} color="#818cf8" style={{ marginBottom: '16px', animation: 'floatAnimation 3s infinite' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff' }}>404</h1>
        <h2 style={{ fontSize: '1.25rem', color: '#cbd5e1', margin: '8px 0 16px' }}>Page Not Found</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
          The screen or resource you are looking for does not exist or has been moved.
        </p>
        <Link to="/dashboard">
          <Button variant="gradient" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={16} /> Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
