import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const CompanyJobs = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="Nexus AI Tech — Open Roles">
      <JobList jobs={jobs.slice(0, 2)} />
    </PageContainer>
  );
};

export default CompanyJobs;
