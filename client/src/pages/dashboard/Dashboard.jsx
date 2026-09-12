import React from 'react';
import { Briefcase, FileCheck, Target, TrendingUp } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import ProfileCompletion from '../../components/profile/ProfileCompletion';
import JobList from '../../components/jobs/JobList';
import { useJobs } from '../../hooks/useJobs';

export const Dashboard = () => {
  const { jobs } = useJobs();

  return (
    <PageContainer title="Career Intelligence Dashboard" subtitle="Welcome back, Alex Rivera • Senior Full Stack AI Specialist">
      {/* Metric Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2563eb', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Active Applications</span>
            <Briefcase size={20} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>2</div>
          <p style={{ color: '#047857', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} /> 1 under review at Nexus AI
          </p>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#0f766e', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>ATS Resume Score</span>
            <FileCheck size={20} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>88<span style={{ fontSize: '1rem', color: '#64748b' }}>/100</span></div>
          <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '4px' }}>Resume readiness score</p>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#7c3aed', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Matched Roles</span>
            <Target size={20} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>14</div>
          <p style={{ color: '#6d28d9', fontSize: '0.8rem', marginTop: '4px' }}>High-fit opportunities</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 700, marginBottom: '16px' }}>
            Recommended jobs
          </h3>
          <JobList jobs={jobs.slice(0, 3)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ProfileCompletion score={92} />

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 700, marginBottom: '12px' }}>Profile activity</h4>
            <p style={{ color: '#475569', fontSize: '0.85rem' }}>Recruiter activity and profile updates will appear here.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
