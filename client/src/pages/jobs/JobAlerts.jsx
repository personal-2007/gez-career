import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const JobAlerts = () => {
  return (
    <PageContainer title="Job Alert Preference Rules">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', marginBottom: '8px' }}>Active Alert: "Full Stack AI Engineer (Remote)"</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Daily instant email & push notification alerts enabled.</p>
      </div>
    </PageContainer>
  );
};

export default JobAlerts;
