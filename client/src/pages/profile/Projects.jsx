import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const Projects = () => {
  return (
    <PageContainer title="Portfolio & Featured Projects">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#0f172a', fontWeight: 700 }}>Career Automation Platform</h4>
        <p style={{ color: '#475569', fontSize: '0.85rem', margin: '6px 0 12px' }}>Workflow platform built with Node.js and React.</p>
        <Badge variant="info">React</Badge> <Badge variant="info">LangChain</Badge>
      </div>
    </PageContainer>
  );
};

export default Projects;
