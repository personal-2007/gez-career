import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';

export const Experience = () => {
  return (
    <PageContainer title="Work Experience">
      <div className="glass-card" style={{ padding: '28px', maxWidth: '600px', margin: '0 auto' }}>
        <Input label="Company Name" placeholder="TechCorp Global" />
        <Input label="Job Title" placeholder="Senior Software Engineer" style={{ marginTop: '12px' }} />
      </div>
    </PageContainer>
  );
};

export default Experience;
