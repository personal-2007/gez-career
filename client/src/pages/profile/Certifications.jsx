import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const Certifications = () => {
  return (
    <PageContainer title="Licenses & Certifications">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', fontWeight: 700 }}>AWS Certified Solutions Architect — Associate</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Issued 2024 • Credential ID: AWS-99201</p>
      </div>
    </PageContainer>
  );
};

export default Certifications;
