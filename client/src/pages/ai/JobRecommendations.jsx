import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const AIJobRecommendations = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="AI Semantic Matching">
      <JobList jobs={jobs} />
    </PageContainer>
  );
};

export default AIJobRecommendations;
