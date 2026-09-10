import React from 'react';

export const Spinner = ({ size = '24px' }) => {
  return (
    <div style={{
      width: size, height: size,
      border: '3px solid rgba(255,255,255,0.1)',
      borderTop: '3px solid #6366f1',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  );
};

export default Spinner;
