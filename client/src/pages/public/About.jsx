import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const About = () => {
  return (
    <PageContainer title="About GEZ Career" subtitle="Empowering global professionals with artificial intelligence.">
      <div className="glass-card" style={{ padding: '32px' }}>
        <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1rem' }}>
          GEZ Career was founded in 2026 to eliminate inefficiency in global job search, resume verification, and candidate hiring pipelines using modern AI models.
        </p>
      </div>
    </PageContainer>
  );
};

export default About;
