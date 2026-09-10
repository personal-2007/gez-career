import React from 'react';
import { Sparkles, Briefcase, FileCheck, Target, TrendingUp, ArrowUpRight } from 'lucide-react';
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
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#818cf8', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Active Applications</span>
            <Briefcase size={20} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>2</div>
          <p style={{ color: '#10b981', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} /> 1 under review at Nexus AI
          </p>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#14b8a6', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>ATS Resume Score</span>
            <FileCheck size={20} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>88<span style={{ fontSize: '1rem', color: '#94a3b8' }}>/100</span></div>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>Top 5% of candidate pool</p>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ec4899', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Matched Roles</span>
            <Target size={20} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>14</div>
          <p style={{ color: '#ec4899', fontSize: '0.8rem', marginTop: '4px' }}>90%+ compatibility</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="#818cf8" /> Recommended High-Match Jobs
          </h3>
          <JobList jobs={jobs.slice(0, 3)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ProfileCompletion score={92} />

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ color: '#f8fafc', fontWeight: 700, marginBottom: '12px' }}>Recent Profile Views</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>3 Tech Recruiters viewed your profile this week from Stripe and Nexus AI Tech.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
