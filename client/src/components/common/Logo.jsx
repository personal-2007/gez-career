import React from 'react';
import { Link } from 'react-router-dom';

export const LogoSymbol = ({ size = 38, className = '' }) => {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${Math.round(size * 0.3)}px`,
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #7c3aed 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
        flexShrink: 0
      }}
    >
      <svg viewBox="0 0 100 100" width={size * 0.65} height={size * 0.65} fill="none">
        {/* Central Star Sparkle */}
        <path d="M 50 20 C 50 41 59 50 80 50 C 59 50 50 59 50 80 C 50 59 41 50 20 50 C 41 50 50 41 50 20 Z" fill="#ffffff" />
        
        {/* Top Left Sparkle */}
        <path d="M 33 22 C 33 30 38 34 46 34 C 38 34 33 38 33 46 C 33 38 28 34 20 34 C 28 34 33 30 33 22 Z" fill="#ffffff" />
        
        {/* Bottom Right Sparkle */}
        <path d="M 67 54 C 67 62 72 66 80 66 C 72 66 67 70 67 78 C 67 70 62 66 54 66 C 62 66 67 62 67 54 Z" fill="#ffffff" />
      </svg>
    </div>
  );
};

export const Logo = ({ size = 38, showText = true, to = '/dashboard', className = '' }) => {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} className={className}>
      <LogoSymbol size={size} />
      {showText && (
        <span style={{ fontSize: `${size * 0.55}px`, fontWeight: 800, color: '#0f172a', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
          GEZ<span style={{ color: '#2563eb' }}>CAREER</span>
        </span>
      )}
    </div>
  );

  if (to) {
    return <Link to={to} style={{ textDecoration: 'none' }}>{content}</Link>;
  }
  return content;
};

export default Logo;
