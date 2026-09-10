import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const ProfileAnalytics = () => {
  return (
    <PageContainer title="Profile Impression & Recruiter Analytics">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff' }}>142 Impressions in Search</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Top search keywords: "React AI", "Node.js Microservices", "Full Stack".</p>
      </div>
    </PageContainer>
  );
};

export default ProfileAnalytics;
