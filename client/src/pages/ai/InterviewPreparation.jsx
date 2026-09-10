import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const InterviewPreparation = () => {
  return (
    <PageContainer title="Interview Preparation Center">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', marginBottom: '12px' }}>Role Target: Senior Full Stack AI Engineer</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px' }}>Practice 15 role-specific technical & system design scenarios.</p>
        <Button variant="gradient">Launch Practice Suite</Button>
      </div>
    </PageContainer>
  );
};

export default InterviewPreparation;
