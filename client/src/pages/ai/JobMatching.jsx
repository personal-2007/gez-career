import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobMatchScore from '../../components/jobs/JobMatchScore';

export const JobMatching = () => {
  return (
    <PageContainer title="AI Vector Matching Insights">
      <JobMatchScore score={96} />
    </PageContainer>
  );
};

export default JobMatching;
