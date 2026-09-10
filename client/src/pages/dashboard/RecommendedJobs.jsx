import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const RecommendedJobs = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="Recommended Openings" subtitle="Personalized matches based on your tech stack and preferences.">
      <JobList jobs={jobs} />
    </PageContainer>
  );
};

export default RecommendedJobs;
