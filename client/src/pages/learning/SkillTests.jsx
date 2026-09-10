import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const SkillTests = () => {
  return (
    <PageContainer title="Verified Technical Skill Audits">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', marginBottom: '8px' }}>React 18 & Node.js Architecture Certification Exam</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px' }}>40 Questions • 60 Minutes • Proctored Assessment</p>
        <Button variant="gradient">Take Assessment</Button>
      </div>
    </PageContainer>
  );
};

export default SkillTests;
