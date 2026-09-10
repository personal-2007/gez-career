import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const CompanySalary = () => {
  return (
    <PageContainer title="Verified Company Salaries">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff' }}>Senior Full Stack Engineer</h4>
        <p style={{ color: '#10b981', fontWeight: 700, marginTop: '4px' }}>$160,000 - $210,000 / yr</p>
      </div>
    </PageContainer>
  );
};

export default CompanySalary;
