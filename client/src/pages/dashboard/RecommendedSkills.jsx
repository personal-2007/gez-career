import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const RecommendedSkills = () => {
  return (
    <PageContainer title="Recommended Skill Upgrades" subtitle="High-demand technologies requested in Senior & Staff postings.">
      <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Badge variant="info">Vector Search (Pinecone / Weaviate)</Badge>
        <Badge variant="info">LangChain & Autonomous Agents</Badge>
        <Badge variant="info">Rust Systems Programming</Badge>
      </div>
    </PageContainer>
  );
};

export default RecommendedSkills;
