import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import { Star } from 'lucide-react';

export const CompanyReviews = () => {
  return (
    <PageContainer title="Company Reviews & Ratings">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Star size={16} color="#f59e0b" fill="#f59e0b" /> 5.0 — "Cutting edge AI innovation & solid compensation"
        </h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '6px' }}>Senior Software Engineer • 1 month ago</p>
      </div>
    </PageContainer>
  );
};

export default CompanyReviews;
