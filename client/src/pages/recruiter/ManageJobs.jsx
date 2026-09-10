import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const ManageJobs = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="Manage Posted Jobs">
      <JobList jobs={jobs} />
    </PageContainer>
  );
};

export default ManageJobs;
