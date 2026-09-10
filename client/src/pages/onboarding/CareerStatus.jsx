import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const CareerStatus = () => {
  return (
    <PageContainer title="Career Status" subtitle="Are you actively looking for roles?">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>Active job seeker • Open to offers • Casual exploring</p>
        <Button variant="gradient" style={{ width: '100%' }}>Save Status</Button>
      </div>
    </PageContainer>
  );
};

export default CareerStatus;
