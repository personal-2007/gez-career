import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const MyLearning = () => {
  return (
    <PageContainer title="My Enrolled Courses & Progress">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff' }}>Vector Embeddings & RAG Production Systems (80% Complete)</h4>
        <Badge variant="info">In Progress</Badge>
      </div>
    </PageContainer>
  );
};

export default MyLearning;
