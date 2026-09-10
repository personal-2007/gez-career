import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const ResumeBuilder = () => {
  return (
    <PageContainer title="AI Resume Builder" subtitle="Generate tailored, ATS-compliant LaTeX or Markdown resumes automatically.">
      <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
        <h4 style={{ color: '#fff', marginBottom: '16px' }}>Generate Tailored Resume for Senior Full Stack AI Engineer</h4>
        <Button variant="gradient">Build Resume Now</Button>
      </div>
    </PageContainer>
  );
};

export default ResumeBuilder;
