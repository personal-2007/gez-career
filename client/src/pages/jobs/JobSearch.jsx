import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobSearchComp from '../../components/jobs/JobSearch';
import JobFilters from '../../components/jobs/JobFilters';
import JobList from '../../components/jobs/JobList';
import JobDetails from '../../components/jobs/JobDetails';
import JobMatchScore from '../../components/jobs/JobMatchScore';
import { useJobs } from '../../hooks/useJobs';
import Modal from '../../components/common/Modal';

export const JobSearch = () => {
  const { jobs, loading } = useJobs();
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModal, setApplyModal] = useState(false);

  return (
    <PageContainer title="Global Job Search" subtitle="Find verified full-time, contract, and global remote opportunities.">
      <div style={{ marginBottom: '24px' }}>
        <JobSearchComp />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 380px', gap: '20px' }}>
        <JobFilters />

        <div>
          <JobList jobs={jobs} onSelectJob={(j) => setSelectedJob(j)} />
        </div>

        <div>
          {selectedJob ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <JobMatchScore score={selectedJob.matchScore || 94} />
              <JobDetails job={selectedJob} onApply={() => setApplyModal(true)} />
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '30px', textAlign: 'center', color: '#94a3b8' }}>
              Select a job to view AI match breakdown and detailed description
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={applyModal} onClose={() => setApplyModal(false)} title="Submit Application">
        <p style={{ color: '#cbd5e1', marginBottom: '16px' }}>Apply to <strong>{selectedJob?.title}</strong> at {selectedJob?.company?.name} with your saved ATS resume?</p>
        <button onClick={() => setApplyModal(false)} className="btn-gradient" style={{ width: '100%' }}>Confirm & Send Application</button>
      </Modal>
    </PageContainer>
  );
};

export default JobSearch;
