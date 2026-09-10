import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import CompanySearch from './CompanySearch';

export const CompanyDetails = () => {
  return (
    <PageContainer title="Nexus AI Tech — Company Profile">
      <div className="glass-card" style={{ padding: '28px' }}>
        <p style={{ color: '#cbd5e1' }}>Frontier AI company building autonomous workflow tools.</p>
      </div>
    </PageContainer>
  );
};

export default CompanyDetails;
