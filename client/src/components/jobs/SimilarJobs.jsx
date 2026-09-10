import React from 'react';
import JobCard from './JobCard';

export const SimilarJobs = ({ jobs = [] }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '16px', fontWeight: 700 }}>Similar Openings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default SimilarJobs;
