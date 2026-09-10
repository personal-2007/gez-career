import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ResumeScore from '../../components/ai/ResumeScore';

export const ATSScore = () => {
  return (
    <PageContainer title="Detailed ATS Score Breakdown">
      <ResumeScore score={88} />
    </PageContainer>
  );
};

export default ATSScore;
