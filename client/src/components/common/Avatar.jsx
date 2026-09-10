import React from 'react';

export const Avatar = ({ src, name = 'User', size = 'md' }) => {
  const sizes = { sm: '32px', md: '42px', lg: '56px' };
  const dim = sizes[size] || sizes.md;

  return (
    <div style={{
      width: dim, height: dim, borderRadius: '50%',
      overflow: 'hidden', background: '#312e81',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '2px solid rgba(255, 255, 255, 0.1)'
    }}>
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ color: '#c7d2fe', fontWeight: 700, fontSize: '0.9rem' }}>
          {name.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default Avatar;
