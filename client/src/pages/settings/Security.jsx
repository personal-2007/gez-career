import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const Security = () => {
  return (
    <PageContainer title="Security & Password">
      <div className="glass-card" style={{ padding: '24px', maxWidth: '500px' }}>
        <Input label="Current Password" type="password" />
        <Input label="New Password" type="password" style={{ marginTop: '12px' }} />
        <Button variant="gradient" style={{ marginTop: '20px' }}>Update Security</Button>
      </div>
    </PageContainer>
  );
};

export default Security;
