import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const CourseDetails = () => {
  return (
    <PageContainer title="Vector Embeddings & RAG Production Systems">
      <div className="glass-card" style={{ padding: '28px' }}>
        <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>Comprehensive hands-on course building multi-tenant search engines.</p>
        <Button variant="gradient">Start Module 1</Button>
      </div>
    </PageContainer>
  );
};

export default CourseDetails;
