import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const ScheduleInterview = () => {
  return (
    <PageContainer title="Schedule Candidate Technical Screen">
      <div className="glass-card" style={{ padding: '24px', maxWidth: '550px' }}>
        <Input label="Candidate Email" defaultValue="alex.developer@gezcareer.com" />
        <Input label="Date & Time" type="datetime-local" style={{ marginTop: '12px' }} />
        <Button variant="gradient" style={{ marginTop: '20px' }}>Send Calendar Invite</Button>
      </div>
    </PageContainer>
  );
};

export default ScheduleInterview;
