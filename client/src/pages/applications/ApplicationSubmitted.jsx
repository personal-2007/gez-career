import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const ApplicationSubmitted = () => {
  return (
    <PageContainer title="">
      <div className="glass-card" style={{ padding: '40px', maxWidth: '500px', margin: '40px auto', textAlign: 'center' }}>
        <CheckCircle2 size={56} color="#10b981" style={{ marginBottom: '16px' }} />
        <h2 style={{ color: '#fff', fontSize: '1.5rem' }}>Application Submitted!</h2>
        <p style={{ color: '#94a3b8', margin: '12px 0 24px' }}>Your application has been received by Nexus AI Tech's recruitment team.</p>
        <Link to="/applications/me">
          <Button variant="gradient" style={{ width: '100%' }}>View Applications Kanban</Button>
        </Link>
      </div>
    </PageContainer>
  );
};

export default ApplicationSubmitted;
