import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const SalaryComparison = () => {
  return (
    <PageContainer title="Compare Roles & Locations">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff' }}>San Francisco ($185k) vs London (£105k) vs Remote ($170k)</h4>
      </div>
    </PageContainer>
  );
};

export default SalaryComparison;
