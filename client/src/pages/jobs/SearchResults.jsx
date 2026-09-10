import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const SearchResults = () => {
  const { jobs } = useJobs();
  return (
    <PageContainer title="Search Results">
      <JobList jobs={jobs} />
    </PageContainer>
  );
};

export default SearchResults;
