import React from 'react';
import JobCard from './JobCard';

export const JobList = ({ jobs = [], onSelectJob }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onClick={() => onSelectJob && onSelectJob(job)} />
      ))}
    </div>
  );
};

export default JobList;
