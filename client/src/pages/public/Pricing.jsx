import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const Pricing = () => {
  return (
    <PageContainer title="Flexible Pricing Plans" subtitle="Select the plan that fits your career goals.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700 }}>Candidate Starter</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#818cf8', margin: '16px 0' }}>$0 <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mo</span></div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>Job Search, Basic Resume ATS Audit, 5 AI Copilot queries/day.</p>
          <Button variant="outline" style={{ width: '100%' }}>Current Plan</Button>
        </div>

        <div className="glass-card" style={{ padding: '32px', textAlign: 'center', border: '1px solid #818cf8' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700 }}>Pro AI Career Suite</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981', margin: '16px 0' }}>$19 <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mo</span></div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>Unlimited AI Mock Interviews, 90-Day Roadmap, Priority Recruiter Inbox.</p>
          <Button variant="gradient" style={{ width: '100%' }}>Upgrade to Pro</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Pricing;
