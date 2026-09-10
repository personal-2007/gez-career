import React from 'react';
import Spinner from '../common/Spinner';

export const AIProcessing = ({ label = 'Analyzing Resume Content...' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', gap: '14px', color: '#818cf8' }}>
      <Spinner size="32px" />
      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{label}</span>
    </div>
  );
};

export default AIProcessing;
