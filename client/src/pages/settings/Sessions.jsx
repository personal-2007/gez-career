import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const Sessions = () => {
  return (
    <PageContainer title="Active Device Sessions">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff' }}>Windows Chrome (Current Session)</h4>
        <p style={{ color: '#10b981', fontSize: '0.85rem' }}>San Francisco, CA • Active now</p>
      </div>
    </PageContainer>
  );
};

export default Sessions;
