import React from 'react';
import { Award } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';

export const Certificates = () => {
  return (
    <PageContainer title="Earned Skill Certificates">
      <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Award size={36} color="#10b981" />
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700 }}>Certified Senior Full Stack AI Engineer</h4>
          <p style={{ color: '#10b981', fontSize: '0.85rem' }}>Verified by GEZ AI Intelligence • Oct 2026</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Certificates;
