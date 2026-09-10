import React from 'react';

export const Skeleton = ({ height = '20px', width = '100%', borderRadius = '8px' }) => {
  return (
    <div style={{
      height, width, borderRadius,
      background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)',
      animation: 'pulseGlow 2s infinite'
    }} />
  );
};

export default Skeleton;
