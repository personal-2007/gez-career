import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ApplicationTimeline from '../../components/applications/ApplicationTimeline';

export const ApplicationDetails = () => {
  return (
    <PageContainer title="Application Details — Nexus AI Tech">
      <div style={{ maxWidth: '600px' }}>
        <ApplicationTimeline />
      </div>
    </PageContainer>
  );
};

export default ApplicationDetails;
