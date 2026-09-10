import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const ApplyJob = () => {
  const navigate = useNavigate();
  return (
    <PageContainer title="One-Click Job Application">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Senior Full Stack AI Engineer</h3>
        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Nexus AI Tech • San Francisco, CA</p>
        <Button variant="gradient" onClick={() => navigate('/applications/submitted')} style={{ width: '100%' }}>Submit Application</Button>
      </div>
    </PageContainer>
  );
};

export default ApplyJob;
