import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const SavedJobs = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="Saved Jobs & Bookmarks">
      <JobList jobs={jobs.slice(0, 2)} />
    </PageContainer>
  );
};

export default SavedJobs;
