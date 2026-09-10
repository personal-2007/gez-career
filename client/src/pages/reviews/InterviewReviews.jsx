import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const InterviewReviews = () => {
  return (
    <PageContainer title="Technical Interview Questions & Reviews">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff' }}>Nexus AI Tech — Technical Screen (3 Rounds)</h4>
        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '6px' }}>Focuses on React state optimization, system design, and live SQL query indexing.</p>
      </div>
    </PageContainer>
  );
};

export default InterviewReviews;
