import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';

export const Education = () => {
  return (
    <PageContainer title="Education Background">
      <div className="glass-card" style={{ padding: '28px', maxWidth: '600px', margin: '0 auto' }}>
        <Input label="University / School" placeholder="UC Berkeley" />
        <Input label="Degree & Field" placeholder="B.S. Computer Science" style={{ marginTop: '12px' }} />
      </div>
    </PageContainer>
  );
};

export default Education;
