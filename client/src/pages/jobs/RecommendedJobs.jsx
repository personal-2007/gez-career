import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const RecommendedJobsPage = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="Recommended Jobs for You">
      <JobList jobs={jobs} />
    </PageContainer>
  );
};

export default RecommendedJobsPage;
