import React from 'react';
import { Users, Briefcase, Calendar, Award, Plus, Search } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

export const RecruiterDashboard = () => {
  return (
    <PageContainer
      title="Recruiter Command Center"
      subtitle="Elena Rostova • Nexus AI Tech Hiring Team"
      action={
        <Link to="/recruiter/create-job">
          <Button variant="gradient" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Plus size={16} /> Post New Job Opening
          </Button>
        </Link>
      }
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 600 }}>Active Job Listings</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>4</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>Total Applicants</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>78</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>Interviews Scheduled</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>14</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.85rem', color: '#ec4899', fontWeight: 600 }}>Offers Extended</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>5</div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Active Talent Pipelines</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600 }}>Senior Full Stack AI Engineer</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>24 Applicants • 4 Shortlisted</p>
          </div>
          <Link to="/recruiter/applicants">
            <Button variant="secondary" size="sm">Review Applicants</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default RecruiterDashboard;
