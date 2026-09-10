import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const Activity = () => {
  return (
    <PageContainer title="Recent Career Activity Log">
      <div className="glass-card" style={{ padding: '24px' }}>
        <p style={{ color: '#cbd5e1' }}>• Applied to Senior Full Stack AI Engineer at Nexus AI Tech (2 days ago)</p>
        <p style={{ color: '#cbd5e1', marginTop: '8px' }}>• Ran ATS Resume Audit — Score: 88% (Yesterday)</p>
      </div>
    </PageContainer>
  );
};

export default Activity;
