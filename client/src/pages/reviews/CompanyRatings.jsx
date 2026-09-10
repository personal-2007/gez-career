import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import { Star } from 'lucide-react';

export const CompanyRatings = () => {
  return (
    <PageContainer title="Company Rating Index">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Star size={18} color="#f59e0b" fill="#f59e0b" /> Nexus AI Tech — 4.8 / 5.0
        </h4>
      </div>
    </PageContainer>
  );
};

export default CompanyRatings;
