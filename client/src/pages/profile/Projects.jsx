import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const Projects = () => {
  return (
    <PageContainer title="Portfolio & Featured Projects">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', fontWeight: 700 }}>Autonomous AI Agent Pipeline</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '6px 0 12px' }}>Multi-agent LLM orchestration system in Node.js & React.</p>
        <Badge variant="info">React</Badge> <Badge variant="info">LangChain</Badge>
      </div>
    </PageContainer>
  );
};

export default Projects;
