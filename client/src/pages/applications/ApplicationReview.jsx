import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const ApplicationReview = () => {
  return (
    <PageContainer title="Application Pre-submission Review">
      <div className="glass-card" style={{ padding: '24px' }}>
        <p style={{ color: '#cbd5e1' }}>Review profile details and ATS resume before sending to recruiter.</p>
      </div>
    </PageContainer>
  );
};

export default ApplicationReview;
