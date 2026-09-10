import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ResumeScore from '../../components/ai/ResumeScore';

export const ProfileOptimization = () => {
  return (
    <PageContainer title="AI Candidate Profile Optimization">
      <ResumeScore score={92} />
    </PageContainer>
  );
};

export default ProfileOptimization;
